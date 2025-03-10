
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
    background-color: #1a1a2e; //  Color azul oscuro usado como fondo general del modo oscuro
    color: #e6e6e6; // gris claro para el texto en modo oscuro
  }
  
  .dark-mode .header, .dark-mode .footer {
    background-color: #16213e; //  Color azul oscuro fuerte usado para el encabezado y pie de pagina
  }
  
  .dark-mode .product-card, .dark-mode .news-card {
    background-color: #16213e; 
    border-color: #4464ad; // Color azul ligero para el borde de las tarejetas
  }
`
document.head.appendChild(darkModeStyles)

