(function(){
  'use strict';

var url = 'http://tiny-lasagna-server.herokuapp.com/collections/coffeesync43';
var homepage = document.querySelector('.homepage');

fetch(url).then((resp) => resp.json())
.then(function(data){
  for (var i = 0; i < data.length; i++) {
    let coffee = data[i];
    var coffeediv = document.createElement('div');
    coffeediv.className = "coffee-div";
    homepage.appendChild(coffeediv);
    var coffeeTitle = document.createElement('h1');
    coffeeTitle.textContent = coffee.name;
    coffeediv.appendChild(coffeeTitle);
    var coffeeStyle = document.createElement('h4');
    coffeeStyle.textContent = coffee.style;
    coffeediv.appendChild(coffeeStyle);
  }


});



})();
