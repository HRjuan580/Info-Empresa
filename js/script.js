
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

// Añadir los estilos para el modo oscuro
const darkModeStyles = document.createElement("style")
darkModeStyles.textContent = `
  .dark-mode {
    background-color: #1a1a2e;
    color: #e6e6e6;
  }
  
  .dark-mode .header, .dark-mode .footer {
    background-color: #16213e;
  }
  
  .dark-mode .product-card, .dark-mode .news-card {
    background-color: #16213e;
    border-color: #4464ad;
  }
`
document.head.appendChild(darkModeStyles)

