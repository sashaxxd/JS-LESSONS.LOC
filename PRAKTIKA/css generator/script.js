function fun1() {
    var up_left_range = document.getElementById('r1');
    var up_right_range = document.getElementById('r2');
    var down_left_range = document.getElementById('r3');
    var down_right_range = document.getElementById('r4');

    var up_left_obj = document.getElementById('pr');

    up_left_obj.style.borderTopLeftRadius = up_left_range.value + "px";
    up_left_obj.style.borderTopRightRadius = up_right_range.value + "px";
    up_left_obj.style.borderBottomLeftRadius = down_left_range.value + "px";
    up_left_obj.style.borderBottomRightRadius = down_right_range.value + "px";
}