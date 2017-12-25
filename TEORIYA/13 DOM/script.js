/**
Работа с Dom (доступ к эмементам страницы)
 */
function styleHeader() {
    var i = document.getElementById('header');//Находим элемет
    //по идентификатору дива
    console.log(i);
    i.style.background = '#000';
}

//находим по названию тега
var teg = document.getElementsByTagName('p');
console.log(teg);

//по названию класса
var classes = document.getElementsByClassName('kot');
console.log(classes);

//пример
var  divs = document.getElementsByTagName('div');
console.log(divs);

var  links = document.getElementsByClassName('link');
console.log(links);

