(function(){
'use strict';

  var url = 'http://tiny-lasagna-server.herokuapp.com/collections/coffeesync43';
  var formNode = document.querySelector('.coffee-form');
  var inputNodes = document.querySelectorAll('.coffee-data');

function makeObject(inputNodes){
  var dataObject = {};
  for (var i = 0; i < inputNodes.length; i++) {
    dataObject[inputNodes[i].name] = inputNodes[i].value;
  }
  console.log(dataObject);
  return dataObject;
}

// makeObject(inputNodes);

  formNode.addEventListener('submit', function(e){
    e.preventDefault();
    var inputNodes = document.querySelectorAll('.coffee-data');
    var data = makeObject(inputNodes);
    var formBody = [];
    for (var property in data) {
      var encodedKey = encodeURIComponent(property);
      var encodedValue = encodeURIComponent(data[property]);
      formBody.push(encodedKey + "=" + encodedValue);
    }
    formBody = formBody.join("&");



    fetch(url, {method:"POST", headers: {
        'Accept': 'application/json, application/xml, text/plain, text/html, *.*',
        "Content-Type": "application/x-www-form-urlencoded; charset=utf-8"},
         body: formBody}).then(function(){
           window.location = 'index.html';
    });
  });

}());
