/**
 * Cоздаем объект
 * @type {{one: string, two: string, three: string}}
 */
var myFamily = {
    "one" : "egor",
    "two" : "vaniya",
    "three" : "sveta",
    "no drink" : "водяру"

};
//Доступ к объекту первый способ
myFamily.one = "Егорыч"; //Заменили свойство объекта
var egor = myFamily.one;
//Второй способ квадратные кавычки если у ключа есть пробел
var buhlo = myFamily["no drink"];

alert(egor + ' не бухает '+ buhlo);


//Добавляем свойство к объекту
myFamily['foo'] = "mamka";//Добавили свойство
delete myFamily.foo; //удаляем свойство
var mama = myFamily.foo;//Присвоили переменной значение свойство объекта

alert(mama);// Не выведет т.к. удалили это свойство


//Используем переменную для вывода свойства объекта
var  testObj = {
    12 : "Первый чувак",
    13 : "Второй чувак",
    14 : "Третий чувак"
};
var one = 14;
var chuvak = testObj[one];
alert(chuvak);


//Объекты внутри другого объекта

var myHobbi = {
    "guitar" : {
        "one" : "solo",
        "two" : "bas",
        "three" : "ritm"
    },
    "fishing" : "fish"
};

var hobbi = myHobbi.guitar.two; //Обрыщаемся к нужному свойству
alert(hobbi);


