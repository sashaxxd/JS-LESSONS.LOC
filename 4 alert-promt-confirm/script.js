//Базовые операции юзер интерфейс
//alert
alert('Привет!');
//prompt
var a = prompt('Как тебя зовут?', '');
if(a == 'Ваня'){
    var v = document.getElementById('vaniya');
    v.style.display = 'block';
    alert('Привет ' + a);
}
else if(a == 'Егор'){
    // var e = document.getElementById('egor');
    // e.style.display = 'block';
    alert('Привет ' + a);
    var negr = prompt('Может ты негр?', '');
      if(negr == 'да'){
          var N = document.getElementById('negr');
          N.style.display = 'block';
          alert('Да ты негр');
      }
      else{
          var N = document.getElementById('negr');
          N.style.display = 'block';
          alert('Нет ты негр');
      }
}
else if(a == 'егор'){
    var m = document.getElementById('maloi');
    m.style.display = 'block';
    alert('Егор ты че дурак с большой буквы пиши а то как ребенок ' + a);
}
else if(a == 'Баба Алла'){
    var b = document.getElementById('baba');
    b.style.display = 'block';
    alert('Иди пей кока-колу ' + a);
}
else{
    var debil = document.getElementById('debil');
    debil.style.display = 'block';
    alert('Не.. ' + a + ' тебе нельзя сюда - иди нахер, дибил!');
}

var result = confirm("Ну че доволен?");

if(result){
    alert('Молодец');
}
else{
    alert('Ну и дурак');
}