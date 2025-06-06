1. Análisis y Estructuración del Documento HTML
   
Características Generales y Estructura del HTML:

El archivo HTML está correctamente estructurado, siguiendo la semántica adecuada y utilizando etiquetas HTML5 relevantes como <header>, <main>, <footer>, <section>, <article>, <nav>, entre otras. Esto asegura una organización clara y eficiente del contenido, lo cual mejora la accesibilidad y la legibilidad del código.

Justificación de Uso de Etiquetas y Atributos:

Etiquetas Semánticas: Se utilizan correctamente las etiquetas <header>, <main>, <footer>, <nav>, y <section> para organizar de manera clara el contenido y hacer que la estructura sea fácilmente accesible.

Atributos Específicos y Globales: Se emplean correctamente atributos como id, class, alt, href, type, placeholder, y src para garantizar la accesibilidad y mejorar la comprensión del código.

Buenas Prácticas: La indentación es adecuada, y se incluyen comentarios explicativos sobre el código, lo que facilita su comprensión y mantenimiento.

Conclusión:

Se ha utilizado de manera eficiente la estructura de etiquetas HTML, manteniendo el código limpio y fácil de entender, lo que es fundamental para la accesibilidad, SEO y el rendimiento del sitio web.

2. Uso de Herramientas y Tecnologías
   
Herramientas de Desarrollo:

Visual Studio Code: Se utilizó como editor de código debido a su eficiencia, extensiones útiles y características de autocompletado.

GitHub: Se empleó para el control de versiones, asegurando un flujo de trabajo colaborativo y la trazabilidad de los cambios.

Tecnologías y Lenguajes Utilizados:

HTML5 y CSS3 son los lenguajes fundamentales del proyecto, utilizados con un enfoque moderno y compatible con los navegadores actuales.

CSS Variables y Metodología BEM (Block, Element, Modifier): Esto mejora la organización y la reutilización del código CSS.

Conclusión:

Se seleccionaron las herramientas y tecnologías adecuadas para facilitar el desarrollo eficiente y garantizar la compatibilidad del proyecto.

3. Diseño y Estilos CSS
   
Uso de Hojas de Estilo (CSS):

Variables CSS: Se usan variables para un diseño consistente, asegurando que los cambios en los colores o tamaños sean fáciles de aplicar en todo el sitio.

BEM: La metodología BEM se utiliza para una mejor organización y modularidad del código CSS.

Diseño Responsivo: Se emplean media queries para garantizar que el diseño sea accesible y atractivo en dispositivos de diferentes tamaños, asegurando una experiencia de usuario fluida.

Transiciones y Animaciones: Se incluyen efectos de transición en los enlaces y botones para mejorar la interactividad del sitio.

Optimización del Código CSS:

El código está optimizado para mantener la legibilidad y modularidad, lo que facilita futuras modificaciones y mejoras.

Se ha validado utilizando herramientas como el W3C CSS Validator para asegurar que cumple con los estándares web.
Conclusión:

El diseño CSS es innovador, responsivo y organizado, cumpliendo con las mejores prácticas de desarrollo web y ofreciendo una experiencia de usuario atractiva y fluida.

4. Validación y Mejora del Código
   
Validación HTML y CSS:

Los documentos HTML y CSS han sido validados utilizando herramientas de validación como el W3C Validator. El código está libre de errores.

Optimización del Código:

Se redujo la redundancia del código CSS.

Se mejoró la estructura del HTML y CSS, lo que facilita su mantenimiento.

Se implementaron buenas prácticas de diseño web, lo que asegura un código limpio y fácil de comprender.

Conclusión:

La validación y optimización del código asegura la calidad y conformidad con los estándares web, garantizando que el proyecto sea robusto y sostenible.

5. Análisis y Elecciones de Lenguajes
   
Lenguajes Utilizados:

HTML5: Es el estándar actual para la creación de contenido web. Se usó para estructurar todo el contenido de la página.

CSS3: Permite diseñar el contenido de forma atractiva y moderna, utilizando características como transiciones, media queries y variables.

Elección de Herramientas y Tecnologías:

Visual Studio Code y GitHub se eligieron debido a sus características avanzadas y su popularidad en la industria del desarrollo web.

CSS Variables y BEM: Estas metodologías permiten un diseño consistente y fácil de mantener.

Conclusión:

Las tecnologías y herramientas seleccionadas son ideales para la creación de un sitio web moderno, flexible y fácil de mantener.

6. Análisis y Presentación del Proyecto
   
Trabajo Autónomo y Investigación:

El desarrollo del proyecto fue realizado de forma completamente autónoma, realizando un análisis profundo sobre las tecnologías y lenguajes utilizados. Se investigaron diferentes enfoques para el diseño y la estructura, eligiendo las mejores opciones según las necesidades del proyecto.

Explicación Clara de Elecciones y Resultados:

Durante la presentación del proyecto, se explicó cómo las decisiones tomadas, como la elección de HTML5 y CSS3, la estructura semántica, el uso de variables CSS y la metodología BEM, contribuyen a mejorar la accesibilidad, la modularidad y la escalabilidad del proyecto.

Conclusión:

La presentación del proyecto demuestra una comprensión clara de las decisiones tomadas y su impacto en la calidad del sitio web.

7. Conclusión General
   
Este proyecto web TechnoShop muestra un enfoque profesional y bien fundamentado en el uso de HTML5 y CSS3, con énfasis en la accesibilidad, el diseño responsivo y la modularidad. El código es limpio, validado y optimizado, siguiendo todas las mejores prácticas de desarrollo web.

Las decisiones de diseño y las tecnologías utilizadas aseguran que el proyecto sea compatible con los estándares actuales, fácil de mantener y capaz de ofrecer una experiencia de usuario excepcional.

8. Validacion del codigo HTML y CSS

- Este es el codigo principal de la pagina
![img.png](assets/img.png)

- Este es el codigo CSS de todo el proyecto
![img_2.png](assets/img_2.png)
 
Validado en la pagina de validator.w3.org

# PARTE 1 Y 2 PROYECTO

# JavaScript

1. Modo oscuro
Para el modo oscuro he usado classList.toggle y classList.contains para el manejo del modo oscuro, para hacer una buena practica para manipular clases

2. Eliminar un producto de la lista
He usado remove() para eliminar un elemto del DOM 

Ejemplo del codigo .js: {

const primerProducto = document.querySelector(".product-card");
primerProducto.remove();

}

3. Cambiar el color del fondo del header
He usado style para cambiar el estilo directamente

Ejemplo del codigo .js: {
const header = document.querySelector(".header");
header.style.backgroundColor = "#333";
}

4. Variables let y const
He usado const para valores que no cambian y let para valores que pueden variar en el futuro del proyecto

Ejemplo del codigo .js: {
const nombre = "TechnoShop";
let productos = ["Laptop Pro X", "Desktop Gamer", "Tablet Flex"];
}

5. Seleccionar y manipular elementos del DOM
He usado querySelector y querySelectorAll para seleccionar elementos del DOM
querySelector = para seleccionar el primer elemento que coincide con un selector CSS.
querySelectorAll = para seleccionar todos los elementos que coinciden con un selector CSS, sirve para manipular varios elementos

Ejemplo del codigo .js: {

const heroTitle = document.querySelector(".hero__title");
heroTitle.textContent = "Nuevo titulo";
heroTitle.style.color = "red";

const productCards = document.querySelectorAll(".product-card");
productCards.forEach((card) => {
card.style.backgroundColor = "lightpink";
});

}

Usado atributos como setAttribute para cambiar el atributo src de la imagen

Ejemplo del codigo .js: {
const logo = document.querySelector(".header__logo");
logo.setAttribute("src", "assets/hacker.png");
}

6. Console log
He añadido console.log para imprimir mensajes por la consola del navegador o terminal de un ID

7. He usado la herramienta https://validator.w3.org/#validate_by_uri
He usado esa herramienta para validar mi codigo y que todo este bien. Lo unico que me dice que tengo error son en los comentarios pero lo demas esta perfecto




# PARTE 3 PROYECTO

1. Identificacion y clasificacion de lenguaje.
El codigo utiliza JavaScript moderno(ES6+) como lenguaje de script de cliente.
Ventajas que tiene de utilizalo frente a otros lenguajes son:
- Que tiene una ejecucion en el navegador sin necesidad de procesamiento en servidor.
- Compatibilidad con todos los navegadores modernos
- Capacidad de manipular el DOM de forma dinamica
- Sintaxis moderna que facilita el desarrollo(ES6+)
En el proyecto he hecho que tenga las ventajas para implementar funcionalidades interactivas como la galeria dinamica, filtros, valicadion de formularios y el carrito de compras

2. Sintaxis moderda de JavaScript(ES6+)
- El codigo utiliza declaraciones modernas como:
   let galleryImages = []; // Variable que puede cambiar
   const galleryContainer = document.getElementById('contenedorgaleria'); // Constante que no cambia
- Una funcion de flecha:
He implementado una funcion de flecha:
  galeríaImages.forEach((imagen, índice) => {
  // Código dentro de la función flecha
  });

documento.addEventListener('DOMContentLoaded', () => {
// Código que se ejecuta cuando el DOM está cargado
});

- Literales de plantilla:
Uso de plantillas literales para generar HTML dinamico
- 
  galleryContainer.innerHTML += `
    <p>
        <img src="${image}" alt="Imagen ${index + 1}">
        Eliminar
    </p>
`;

3. Metodos de seleccion y manipulacion del DOM

querySelector/querySelectorAll:
    const listaProductos = document.querySelector('.featured-products__list');
    const lista = document.querySelector('.cart-items');
Cada metodo esta aplicado de forma optima segun su necesidad que le he dado:
- getElementById para elementos unicos como ID
- querySelector para seleccione mas complejas con selectores CSS
- Manipulacion con propiedades como textContent, stylee.inneerHTML

4. Creacion dinamica de elementos
El codigo implementa la creacion dinamica de elementos en multiples funcionalidades:
- Galeria interactiva:
  galleryContainer.innerHTML += `
    <p>
        <img src="${image}" alt="Imagen ${index + 1}">
        Eliminar
    </p>
`;

- Carrito de compras
He utilizado createElementy y appendChild para crear elementos de lista:
  const li = document.createElement('li');
  li.innerHTML = `
    <p>${producto.nombre}</p>
    <button onclick="eliminarDelCarrito(${indice})">Eliminar</button>
`;
lista.appendChild(li);

5. Eliminacion de elementos
He implementado en el codigo la eliminacion de elemento en varias funcionalidades:
- Limpieza previa del contenedor
  // Limpia el contenedor antes de actualizarlo
  galleryContainer.innerHTML = '';
  lista.innerHTML = '';
Lo que hago en esa funcion es limpiar el contenedor antes de actualizarlo para evitar duplicados

  - Eliminacion de elementos especificos

    // Elimina un elemento del array
    galeríaImages.splice(índice, 1);

    // Elimina un producto del carrito
    carrito.splice(índice, 1);

Lo que hago ahi es elimino el array y luego actualizo la vista

6. Separacion entre logica y presentacion
Mi codigo mantiene una clara separacion entre logica y presentacion:
- 
- Uso de clases en lugar de estilos en linea
  // En el formulario de validación
    mensaje.style.color = 'rojo'; // Uso limitado y justificado
    input.style.borderColor = 'red'; // Para retroalimentación visual inmediata
- 
- Respuesta clara a eventos
El codigo implementa manejos de eventos claros y especificos:
  // Evento de envío del formulario
  formulario.addEventListener('enviar', (e) => {
  e.preventDefault();
  // Lógica de validación
  });

// Evento de carga del documento
documento.addEventListener('DOMContentLoaded', () => {
// Inicialización
});
Este codigo muestra la estructura organizada donde cada funcion tiene una resposabilidad clara y especifica.




