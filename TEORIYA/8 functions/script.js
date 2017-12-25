/**
 * Функции
 */
function showMessage() {
    var message = 'Локальная переменная';
    alert('Привет');
    alert(message);
}

function showCalc(a, b) {
    return a * b;
}

showMessage();
document.write(showCalc(5,5 *7));

