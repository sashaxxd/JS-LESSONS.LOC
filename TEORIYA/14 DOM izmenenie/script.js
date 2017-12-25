/**
Работа с Dom (изменение объектов) innerHTML и с помощью this
 */
var el_1 = document.getElementById('block');
var el_2 = document.getElementsByTagName('div');

function changeSingle(e) {
    e.innerHTML = 'изменили';
}

function changeCollection(argument) {
    for (var i = 0; i < argument.length; i++){
     argument[i].innerHTML = 'Изменили все теги див'
     }
}

var element = document.getElementById('link1');

element.href = 'vk.com';
element.style.color = 'green';
element.style.fontFamily = 'Roboto Light';