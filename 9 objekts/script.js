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
var egor = myFamily.one;
//Второй способ квадратные кавычки если у ключа есть пробел
var buhlo = myFamily["no drink"];
alert(egor + ' не бухает '+ buhlo);