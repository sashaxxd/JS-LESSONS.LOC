document.getElementById('nav').onmouseover =
    function (e) {
    var  target = e.target; //определяет дочерние классы target - переводится как цель
    if(target.className == 'menu-item'){
           var s = target.getElementsByClassName('submenu');
           closeMenu();
           s[0].style.display = 'block';
    }

};


document.onmouseover = function(event) {//При наведении мыши за пределы нужных дивов
    //срабатывает функция закрытия меню
    var target = event.target;
    if (target.className != "menu-item" && target.className != "submenu") {
        closeMenu();
    }
};

function closeMenu() {
    var subm = document.getElementsByClassName("submenu");
    for (var i = 0; i < subm.length; i++) {//перебираем в цикле все подменюшки и закрываем их
        subm[i].style.display = "none";
    }
}


