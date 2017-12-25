/**
 * Работа с чексбокс
 */
function showCheck() {
    var check = document.getElementById('check');//присвоили переменнной
    //значение с чекбокса
    if (check.checked){//проверяем - если чекбокс выбран (состояние checked)
        alert('Чекбокс выбран');//алертим что выбран
    }
    else {
        alert('Чекбокс не выбран');//алертим что не выбран
    }
}
/**
 Работа с радиокнопками
 */
function showRad() {
  var r1 = document.getElementsByName('r1');
    for (var i = 0; i < r1.length; i++){
        if(r1[i].checked){
             alert('Выбран ' + i + ' элемент радио');
        }
    }
}