function myMove() {
    var elem = document.getElementById('myAnimation');

    var pos = 0;

    var id = setInterval(frame, 3);//Запускает функцию фрейм и бесконечно повторяет ее
    function frame() {
        if(pos == 350){
            pos -= 350;
            elem.style.bottom = pos + 'px';
            elem.style.right = pos + 'px';
        }
        else {
            pos++;
            elem.style.top = pos + 'px';
            elem.style.left = pos + 'px';
        }
    }
}