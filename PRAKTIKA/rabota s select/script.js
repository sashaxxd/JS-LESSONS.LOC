/**
 * Работа с селектами
 */
function fin1() {
    var sel = document.getElementById('mySelect').selectedIndex;
    var option = document.getElementById('mySelect').options;
    alert(option[sel].text);
}