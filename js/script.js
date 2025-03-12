// 1. Modo Oscuro
function toggleDarkMode() {
    // Cambia entre modo claro y oscuro alternando la clase "dark-mode" en el body
    document.body.classList.toggle("dark-mode");

    // Cambia el icono del botón según el modo actual
    const darkModeBtn = document.getElementById("modeOscuro");
    if (document.body.classList.contains("dark-mode")) {
        darkModeBtn.textContent = "🌞"; // Cambia a un sol si está en modo oscuro
    } else {
        darkModeBtn.textContent = "🌑"; // Cambia a una luna si está en modo claro
    }
}

// Añadir los estilos para el modo oscuro dinámicamente
const darkModeStyles = document.createElement("style");
darkModeStyles.textContent = `
  .dark-mode {
    background-color: #1a1a2e; // Color azul oscuro usado como fondo general del modo oscuro
    color: #e6e6e6; // Gris claro para el texto en modo oscuro
  }
  
  .dark-mode .header, .dark-mode .footer {
    background-color: #16213e; // Color azul oscuro fuerte usado para el encabezado y pie de página
  }
  
  .dark-mode .product-card, .dark-mode .news-card {
    background-color: #16213e; // Fondo oscuro para las tarjetas de productos y noticias
    border-color: #4464ad; // Color azul ligero para el borde de las tarjetas
  }
`;
document.head.appendChild(darkModeStyles); // Añade los estilos al head del documento

// Eliminar un producto de la lista
const primerProducto = document.querySelector(".product-card");
if (primerProducto) { // Verifica si el elemento existe antes de intentar eliminarlo
    primerProducto.remove(); // Elimina el primer producto de la lista
}

// Cambiar el color de fondo del header
const header = document.querySelector(".header");
if (header) { // Verifica si el header existe
    header.style.backgroundColor = "#333"; // Cambia el color de fondo del header a gris oscuro
}

// Variables con let y const
const nombre = "TechnoShop"; // Declaración de una constante llamada "nombre" con el valor "TechnoShop"
let productos = ["Laptop Pro X", "Desktop Gamer", "Tablet Flex"]; // Declaración de una variable llamada "productos" con un array de 3 elementos

// Seleccionar un elemento por su clase
const heroTitle = document.querySelector(".hero__title");
if (heroTitle) { // Verifica si el elemento existe
    heroTitle.textContent = "NUEVO TITULO"; // Cambia el texto del título
    heroTitle.style.color = "red"; // Cambia el color del texto a rojo
}

// Seleccionar todos los elementos de una clase
const productCards = document.querySelectorAll(".product-card");
if (productCards) { // Verifica si hay elementos seleccionados
    productCards.forEach((card) => {
        card.style.backgroundColor = "lightpink"; // Cambia el fondo de todas las tarjetas a rosa claro
    });
}

// Cambiar el logo del header
const logo = document.querySelector(".header__logo");
if (logo) { // Verifica si el logo existe
    logo.setAttribute("src", "assets/hacker.png"); // Cambia la imagen del logo a "hacker.png"
}

// Formulario de validación
const formulario = document.querySelector(".contact-form");
if (formulario) { // Verifica si el formulario existe
    formulario.addEventListener("submit", (event) => {
        event.preventDefault(); // Evita que el formulario se envíe automáticamente

        // Aquí podrías añadir la lógica de validación del formulario
        const email = document.getElementById("email").value; // Obtén el valor del campo de correo electrónico

        if (!email.includes("@")) { // Verifica si el correo no contiene "@"
            alert("Por favor, introduce un correo electrónico válido."); // Muestra un mensaje de error
        } else {
            alert("Formulario enviado con éxito."); // Muestra un mensaje de éxito
            formulario.reset(); // Limpia el formulario después de enviarlo
        }
    });
}








