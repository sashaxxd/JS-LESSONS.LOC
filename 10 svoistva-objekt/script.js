var menu = {
    width : 300,
    height : 400,
    title : "menu"
}

for (var key in menu){
    alert('Ключ ' + key + ' Значение ' + menu[key]);
   document.write('Ключ ' + key + ' Значение ' + menu[key] +  '<br>')
}

//Считаем кол-во свойств внутри объекта (свойства .length нету как в массивах)
var counter = 0;
for (var key in menu){
    counter++;
}
alert('Кол-во свойств в этом объекте = ' + counter);