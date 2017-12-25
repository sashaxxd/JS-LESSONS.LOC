function delpop(arr) {
    arr.pop();
}


var a = [1, 2, 3, 'Егор'];
a[4] = 'Ванька';// Добавили в массив Ваньку
alert(a[4]);
document.write(a);
alert('Кол-во элементов массива ' + a.length);

//Методы для работы с массивами pop puch shift unchift

a.pop();// Удаляет последний элемент массива
a.push('Светник');//Добавили в конец массива
a.shift(); // Удаляет первый элмемент массива
a.unshift('Первый элемент массива'); //Добавили в начало массива

delpop(a);// Удалили Светник из конца массива с помощью функции
alert(a);


// Еще методы split
var names = 'Ваня, Егорка, Светка';

var arr = names.split(', ');/** Преобразует строку в массив по разделителю (
в данном случае запятая с пробелом
 */
for(var i = 0; i < arr.length; i++){
    alert('Сообщение ' + arr[i]);// Подставляет i и увеличивает на еденицу
}

// Разбиваем строку по символам
var str = 'Строка';
alert(str.split(''));

// Метод join противоположность split склеивает массив в строку
var  arr2 = ['3','4','5'];
alert(arr2.join('-'));

var x = new Array(6);
x[7] = 'вставили';

alert(x.join('--'));

//delete

var idu = ["Я", "хочу", "спать"];
delete idu[1];// Удалит но не сдвинет массив
alert(idu);

// метод splice
var idu2 = ["Я", "хочу", "спать"];
idu2.splice(1, 1);
alert(idu2);

//метод revers

var ttt = [1,2,3];

ttt.reverse(); // Перевернет массив

document.write(ttt);

//метод concat добавляет в массив элементы

var cat = [1,2,3];

var newcat = cat.concat(6,7);
alert(newcat);




