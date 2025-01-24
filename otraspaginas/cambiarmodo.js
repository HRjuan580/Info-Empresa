const body = document.querySelector('body');
const cambiarmodo = document.getElementById('.cambiarmodo');

body.classList.toggle('cambiarmodo', localStorage.getItem('mode') === 'oscuro');

cambiarmodo.addEventListener('click', (e) => {})
    const isoscuro = body.classList.toggle('isoscuro');
    localStorage.setItem('mode', isoscuro ? 'oscuro' : 'light');
