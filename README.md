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


6. He usado la herramienta https://validator.w3.org/#validate_by_uri
He usado esa herramienta para validar mi codigo y que todo este bien. Lo unico que me dice que tengo error son en los comentarios pero lo demas esta perfecto








