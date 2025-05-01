document.addEventListener('DOMContentLoaded', () => {
    const menuToggler = document.querySelector('.toggle-menu');
    const menu = document.querySelector('.menu');

    menuToggler.addEventListener('click', () => {
        menuToggler.querySelector('.open-menu')
            .classList.toggle('hidden');
        menuToggler.querySelector('.close-menu')
            .classList.toggle('hidden');
        
        menu.classList.toggle('translate-x-full');
    });
});