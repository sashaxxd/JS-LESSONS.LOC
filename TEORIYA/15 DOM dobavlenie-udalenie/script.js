// createElement(); - создание элемнта дом
// appendChilde(); - добавление дочернего элемент
// removeChilde(); - удаление элемента дом

function test() {
    var elem = document.getElementById('block1');
    var link = document.createElement('a');
    var br = document.createElement('br')
    link.innerHTML = 'Google';
    link.href = 'http://google.ru';

    elem.appendChild(br);
    elem.appendChild(link);
}

function test2() {
    var elem2 = document.getElementById('block1');
    document.body.removeChild(elem2);
}
