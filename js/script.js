// Modo Oscuro
function toggleDarkMode() {
    console.log("Modo oscuro activado/desactivado"); // Mensaje que sale por consola del navegador o ID
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
    console.log("Primer elemento eliminaado de la lista.")
    primerProducto.remove(); // Elimina el primer producto de la lista
} else {
    console.log("No se encontro ningun producto para eliminar.")
}


// Cambiar el color de fondo del header
const header = document.querySelector(".header");
if (header) { // Verifica si el header existe
    console.log("Color del fondo cambiado del header.");
    header.style.backgroundColor = "#333"; // Cambia el color de fondo del header a gris oscuro
} else{
    console.log("No se encontro ningun header")
}


// Variables con let y const
const nombre = "TechnoShop"; // Declaración de una constante llamada "nombre" con el valor "TechnoShop"
let productos = ["Laptop Pro X", "Desktop Gamer", "Tablet Flex"]; // Declaración de una variable llamada "productos" con un array de 3 elementos
console.log("Nuevo nombre de la tienda es:", nombre); //Sirve para ver el valor constante
console.log("Lista de productos:", productos); // Para ver el contenido del array

// Seleccionar un elemento por su clase
const heroTitle = document.querySelector(".hero__title");
if (heroTitle) { // Verifica si el elemento existe
    console.log("Cambiado el titulo"); // Mensaje que sale por consola del navegador o ID
    heroTitle.textContent = "NUEVO TITULO"; // Cambia el texto del título
    console.log("Cambiando el color del titulo") // Mensaje que sale por consola del navegador o ID
    heroTitle.style.color = "red"; // Cambia el color del texto a rojo
}

// Seleccionar todos los elementos de una clase
const productCards = document.querySelectorAll(".product-card");
if (productCards) { // Verifica si hay elementos seleccionados
    console.log(`Cambiando el fondo de ${productos.length}`); // Mensaje que sale por consola del navegador o ID
    productCards.forEach((card) => {
        card.style.backgroundColor = "lightpink"; // Cambia el fondo de todas las tarjetas a rosa claro
    });
} else {
    console.log("No se ha encontrado ninguna tarjeta de productos"); // Mensaje que sale por consola del navegador o ID
}

// Cambiar el logo del header
const logo = document.querySelector(".header__logo");
if (logo) { // Verifica si el logo existe
    console.log("Cambiado la imagen del icono de la empresa "); // Mensaje que sale por consola del navegador o ID
    logo.setAttribute("src", "assets/hacker.png"); // Cambia la imagen del logo a "hacker.png"
} else {
    console.log("No se ha encontrado ningun logo"); // Mensaje que sale por consola del navegador o ID
}











