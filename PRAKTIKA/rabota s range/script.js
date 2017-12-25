function fun1() {//Функция выведет значение в параграфе
   var r1 = document.getElementById('r1');
   var p = document.getElementById('one');
   p.innerHTML = r1.value;
}

function fun2() {//Функция выведет значение в инпуте
    var r1 = document.getElementById('r1');
    var in1 = document.getElementById('in1');
    in1.value = r1.value;
}

function fun3() {//Функция выведет значение в инпуте
    var r1 = document.getElementById('r1');
    var line = document.getElementById('line');
    line.style.width = r1.value + 'px';
}