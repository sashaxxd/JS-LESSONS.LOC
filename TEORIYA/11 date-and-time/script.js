/**
 * Работа с объектом date
 * @type {Date}
 */
var now = new Date();
alert(now);
alert(now.getFullYear());//Только год
alert(now.getMonth());//Только месяц (отсчет с нуля 11 декабрь)
//аналогичные методы есть для часов минут секунд и дня недели

var now2 = new Date(2018,1,0,0,0,0,0);//Задаем сами дату
alert(now2);
