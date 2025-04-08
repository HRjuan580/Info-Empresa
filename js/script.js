// Modo Oscuro
// function toggleDarkMode() {
//    console.log("Modo oscuro activado/desactivado"); // Mensaje que sale por consola del navegador o ID
    // Cambia entre modo claro y oscuro alternando la clase "dark-mode" en el body
//    document.body.classList.toggle("dark-mode");

    // Cambia el icono del botón según el modo actual
//    const darkModeBtn = document.getElementById("modeOscuro");
//    if (document.body.classList.contains("dark-mode")) {
//        darkModeBtn.textContent = "🌞"; // Cambia a un sol si está en modo oscuro
//    } else {
//        darkModeBtn.textContent = "🌑"; // Cambia a una luna si está en modo claro
//    }
//}

// Añadir los estilos para el modo oscuro dinámicamente
// const darkModeStyles = document.createElement("style");

// document.head.appendChild(darkModeStyles); // Añade los estilos al head del documento


// Eliminar un producto de la lista
// const primerProducto = document.querySelector(".product-card");
// if (primerProducto) { // Verifica si el elemento existe antes de intentar eliminarlo
//    console.log("Primer elemento eliminaado de la lista.")
//    primerProducto.remove(); // Elimina el primer producto de la lista
// } else {
//    console.log("No se encontro ningun producto para eliminar.")
// }


//Cambiar el color de fondo del header
//const header = document.querySelector(".header");
//if (header) { // Verifica si el header existe
//    console.log("Color del fondo cambiado del header.");
//    header.style.backgroundColor = "#333"; // Cambia el color de fondo del header a gris oscuro
//} else{
//    console.log("No se encontro ningun header")
//}


//Variables con let y const
//const nombre = "TechnoShop"; // Declaración de una constante llamada "nombre" con el valor "TechnoShop"
//let productos = ["Laptop Pro X", "Desktop Gamer", "Tablet Flex"]; // Declaración de una variable llamada "productos" con un array de 3 elementos
//console.log("Nuevo nombre de la tienda es:", nombre); //Sirve para ver el valor constante
//console.log("Lista de productos:", productos); // Para ver el contenido del array

// Seleccionar un elemento por su clase
//const heroTitle = document.querySelector(".hero__title");
//if (heroTitle) { // Verifica si el elemento existe
//    console.log("Cambiado el titulo"); // Mensaje que sale por consola del navegador o ID
//    heroTitle.textContent = "NUEVO TITULO"; // Cambia el texto del título
//    console.log("Cambiando el color del titulo") // Mensaje que sale por consola del navegador o ID
//    heroTitle.style.color = "red"; // Cambia el color del texto a rojo
//}

// Seleccionar todos los elementos de una clase
//const productCards = document.querySelectorAll(".product-card");
//if (productCards) { // Verifica si hay elementos seleccionados
//    console.log(`Cambiando el fondo de ${productos.length}`); // Mensaje que sale por consola del navegador o ID
//    productCards.forEach((card) => {
//        card.style.backgroundColor = "lightpink"; // Cambia el fondo de todas las tarjetas a rosa claro
//    });
//} else {
//    console.log("No se ha encontrado ninguna tarjeta de productos"); // Mensaje que sale por consola del navegador o ID
//}

// Cambiar el logo del header
//const logo = document.querySelector(".header__logo");
//if (logo) { // Verifica si el logo existe
//    console.log("Cambiado la imagen del icono de la empresa "); // Mensaje que sale por consola del navegador o ID
//    logo.setAttribute("src", "assets/hacker.png"); // Cambia la imagen del logo a "hacker.png"
//} else {
//    console.log("No se ha encontrado ningun logo"); // Mensaje que sale por consola del navegador o ID
//  }



// Aquí estamos creando un array con las imágenes que inicialmente vamos a mostrar en la galería.
let galleryImages = [
    'assets/img1.jpg', 'assets/img2.jpg', 'assets/img3.jpg'
];

// Esta es la función que se encarga de mostrar todas las imágenes en la galería.
function galeria() {
    // Primero buscamos el contenedor donde vamos a poner las imágenes.
    const galleryContainer = document.getElementById('contenedorgaleria');

    // Limpiamos todo el contenido actual del contenedor para evitar que se acumulen imágenes cuando actualizamos.
    galleryContainer.innerHTML = '';

    // Ahora recorremos todas las imágenes que tenemos en el array 'galleryImages'.
    galleryImages.forEach((image, index) => {
        // Por cada imagen, agregamos un <p> con la imagen y un botón para eliminarla.
        // El 'index' es para saber qué imagen estamos mostrando y usarlo para eliminarla después.
        galleryContainer.innerHTML += `
            <p>
                <!-- Aquí está la imagen que estamos agregando -->
                <img src="${image}" alt="Imagen ${index + 1}">
                <!-- Y este es el botón para eliminar la imagen. -->
                <button onclick="removeImage(${index})">Eliminar</button>
            </p>
        `;
    });
}

// Esta es la función para agregar una nueva imagen a la galería.
function addImage() {
    // Aquí le pedimos al usuario que ingrese la URL de la imagen que quiere agregar.
    const newImageUrl = prompt("Ingresa la URL de la nueva imagen:");

    // Si el usuario no deja el campo vacío y da una URL válida, la agregamos al array de imágenes.
    if (newImageUrl) {
        galleryImages.push(newImageUrl);
        // Luego de agregarla, volvemos a renderizar la galería para que aparezca la nueva imagen.
        galeria();
    }
}

// Aquí eliminamos la imagen en la posición 'index' del array.
function removeImage(index) {
    // Usamos splice() para eliminar la imagen en esa posición. Es como si cortáramos esa imagen de la lista.
    galleryImages.splice(index, 1);
    // Después de eliminarla, llamamos a renderGallery para actualizar la galería y que ya no aparezca la imagen.
    galeria();
}

// Este código asegura que cuando se cargue la página, se muestre la galería con las imágenes que tenemos.
document.addEventListener('DOMContentLoaded', galeria);













