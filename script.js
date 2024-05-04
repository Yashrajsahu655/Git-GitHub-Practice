const button = document.getElementById('colorButton');

button.addEventListener('click', function () {
    if (button.style.backgroundColor === 'blue') {
        button.style.backgroundColor = 'orange';
    } else {
        button.style.backgroundColor = 'blue';
    }
});
