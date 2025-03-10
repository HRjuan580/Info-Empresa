
// 1. Modo Oscuro
function toggleDarkMode() {
    // Cambia entre modo claro y oscuro
    document.body.classList.toggle("dark-mode")

    // Cambia el icono del botón
    const darkModeBtn = document.getElementById("modeOscuro")
    if (document.body.classList.contains("dark-mode")) {
        darkModeBtn.textContent = "🌞"
    } else {
        darkModeBtn.textContent = "🌑"
    }
}



