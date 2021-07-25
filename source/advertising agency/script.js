let number = document.querySelector('.number');
let openTogler = document.querySelector('.navbar-toggler');
let closeTogler = openTogler.querySelector('.collapsed');
let zakr = document.querySelector('.show');


 openTogler.addEventListener('click', function (evt) {
    number.classList.toggle('number-bg-mini');
    openTogler.classList.toggle('close-button')
});
