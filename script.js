const button = document.getElementById('colorButton');

button.addEventListener('click', function () {
    button.style.backgroundColor === 'blue'?button.style.backgroundColor = 'red':button.style.backgroundColor = 'blue';
});
