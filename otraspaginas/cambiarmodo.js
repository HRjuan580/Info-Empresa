const body = document.querySelector('body');
const cambiarmodo = document.getElementById('.cambiarmodo');
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');

    body.classList.toggle('cambiarmodo', localStorage.getItem('mode') === 'oscuro');
    var button = document.getElementById("modeOscuro");
    if(document,body.classList.contains('modeOscuro')){
        button.textContent = '🌓';
    }
    else {
        button.textContent = '🌑';
    }
}