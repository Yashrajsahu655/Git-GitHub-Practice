const button = document.getElementById('colorButton');
const Pbutton = document.getElementById('Pbutton');
const p = document.querySelector('p');

button.addEventListener('click', function () {
    button.style.backgroundColor === 'blue'?button.style.backgroundColor = 'red':button.style.backgroundColor = 'blue';
});

Pbutton.addEventListener('click', function () {
    p.innerText = "hello"
});

