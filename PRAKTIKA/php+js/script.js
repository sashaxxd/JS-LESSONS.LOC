window.onload = function(){ // Проверка на существонание класса
    alert(document.getElementsByClassName('my-class').length != 0 ? true : false);
};function showCheck() {
    var check = document.getElementsByName('check1');

            for (var i =0; i < check.length; i++){
                if(check[i].checked) {

                    alert('Выбран ' + i + ' Чекбокс');
                    var d = document.getElementById('div' + i);
                    d.style.display = 'block';


                }
                else{
                    var d = document.getElementById('div' + i);
                    d.style.display = 'none';
                }
            }



}