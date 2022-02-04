const btnToggle = document.querySelector('.toggle__btn');

btnToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark');
});