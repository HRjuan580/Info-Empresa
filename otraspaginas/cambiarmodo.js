function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');

    var button = document.getElementById("modeOscuro");
    if(document,body.classList.contains('modeOscuro')){
        button.textContent = '🌓';
    }
    else {
        button.textContent = '🌑';
    }
}

