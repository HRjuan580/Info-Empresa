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

 document.head.appendChild(darkModeStyles); // Añade los estilos al head del documento


// Eliminar un producto de la lista
 const primerProducto = document.querySelector(".product-card");
 if (primerProducto) { // Verifica si el elemento existe antes de intentar eliminarlo
    console.log("Primer elemento eliminaado de la lista.")
    primerProducto.remove(); // Elimina el primer producto de la lista
 } else {
    console.log("No se encontro ningun producto para eliminar.")
 }


//Cambiar el color de fondo del header
const header = document.querySelector(".header");
if (header) { // Verifica si el header existe
    console.log("Color del fondo cambiado del header.");
    header.style.backgroundColor = "#333"; // Cambia el color de fondo del header a gris oscuro
} else{
    console.log("No se encontro ningun header")
}


//Variables con let y const
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



/* ================= PARTE 3  ================= */

// CREAR GALERIA INTERACTIVA DONDE LAS IMAGENES PUEDAN AÑADIRSE O ELIMINARSE DINAMICAMENTE //

// Aquí estamos creando un array con las imágenes que inicialmente vamos a mostrar en la galería.
let galleryImages = [
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

    // Si no dejamos el campo vacio y la URL es valida lo agregamos a la galeria
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


// FILTRO PARA MOSTRAR U OCULTAR ELEMENTOS DE LA PAGINA//

function alternarProductos() {
    const listaProductos = document.querySelector('.featured-products__list');
    const botonFiltro = document.getElementById('filtroProductosBtn');

    if (listaProductos.style.display === 'none') {
        listaProductos.style.display = 'flex';
        botonFiltro.textContent = 'Ocultar productos';
    } else {
        listaProductos.style.display = 'none';
        botonFiltro.textContent = 'Mostrar productos';
    }
}


// DISEÑAR UN FORMULARIO DE VALIDACIÓN QUE MUESTRE UN MENSAJE DE ERROR O EXITO //

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('formReparacion');
    const mensaje = document.getElementById('mensajeForm');
    const submitButton = form.querySelector('button[type="submit"]');

    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault(); // Evita que se recargue la página

            let valid = true;
            mensaje.textContent = '';
            mensaje.style.color = 'red';
            submitButton.disabled = true; // Deshabilitar el botón al empezar a validar

            const campos = ['nombre', 'email', 'telefono', 'tipo-equipo', 'marca', 'problema', 'fecha-preferida'];
            campos.forEach((id) => {
                const input = document.getElementById(id);
                if (!input.value.trim()) {
                    valid = false;
                    input.style.borderColor = 'red'; // Resalta el campo con borde rojo
                } else {
                    input.style.borderColor = ''; // Resetea el borde si está completo
                }
            });

            if (valid) {
                mensaje.textContent = '✅ Solicitud enviada con éxito.';
                mensaje.style.color = 'green';
                form.reset();
            } else {
                mensaje.textContent = '❌ Por favor, completa todos los campos obligatorios.';
            }

            submitButton.disabled = false; // Habilitar el botón si la validación es correcta
        });
    }
});




// CREAR FLUJO DEL PROYECTO LIBRE//

// Función que carga el contenido del carrito en la página
function cargarCarrito() {
    const lista = document.querySelector('.cart-items'); // Selecciona el elemento HTML donde se mostrarán los productos del carrito
    const contador = document.getElementById('itemsCount'); // Selecciona el elemento que mostrará la cantidad total de productos

    const carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    // Intenta obtener el carrito guardado en localStorage, si no existe, se crea un array vacío

    lista.innerHTML = ''; // Limpia la lista actual del carrito antes de volver a mostrarla

    // Recorre todos los productos guardados en el carrito
    carrito.forEach((producto, indice) => {
        const li = document.createElement('li'); // Crea un nuevo elemento <li> para cada producto

        // Define el contenido del <li>, mostrando el nombre y un botón para eliminarlo
        li.innerHTML = `
            <p>${producto.nombre}</p>
            <button onclick="eliminarDelCarrito(${indice})">Eliminar</button>
        `;

        lista.appendChild(li); // Añade el <li> al contenedor de la lista del carrito
    });

    contador.textContent = carrito.length; // Actualiza el número de productos mostrados en el contador
}

// Función para eliminar un producto del carrito
function eliminarDelCarrito(indice) {
    let carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    // Obtiene el carrito actual desde localStorage (si no hay, crea uno vacío)

    carrito.splice(indice, 1); // Elimina el producto en la posición indicada (índice)

    localStorage.setItem('carrito', JSON.stringify(carrito));
    // Guarda el nuevo carrito actualizado en localStorage

    cargarCarrito(); // Recarga la vista del carrito en la página para reflejar el cambio
}

// Función para agregar un producto al carrito
function agregarAlCarrito(nombreProducto) {
    const carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    // Obtiene el carrito actual o lo inicia vacío si no existe

    carrito.push({ nombre: nombreProducto }); // Añade un nuevo objeto con el nombre del producto al carrito

    localStorage.setItem('carrito', JSON.stringify(carrito));
    // Guarda el carrito actualizado en el localStorage

    alert(`${nombreProducto} añadido al carrito.`); // Muestra una alerta informando que se añadió el producto
}

// Evento que se ejecuta cuando el documento HTML ha sido cargado completamente
document.addEventListener('DOMContentLoaded', () => {
    // Comprueba si la URL actual contiene 'carrito.html'
    if (window.location.pathname.includes('carrito.html')) {
        cargarCarrito(); // Si estamos en la página del carrito, carga los productos automáticamente
    }
});










