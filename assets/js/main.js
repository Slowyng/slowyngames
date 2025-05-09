document.addEventListener('DOMContentLoaded', () => {
    const menuToggler = document.querySelector('.toggle-menu');
    const menu = document.querySelector('.menu');

    document.addEventListener('scroll', () => {
        const opener = menuToggler.querySelector('.open-menu');
        const closer = menuToggler.querySelector('.close-menu');
        if (!menu.classList.contains('translate-x-full')) {
            menu.classList.add('translate-x-full');
        };

        if (opener.classList.contains('hidden')) {
            opener.classList.remove('hidden');
        };
         
        if (!closer.classList.contains('hidden')) {
            closer.classList.add('hidden');
        };
    });

    menuToggler.addEventListener('click', () => {
        menuToggler.querySelector('.open-menu')
            .classList.toggle('hidden');
        menuToggler.querySelector('.close-menu')
            .classList.toggle('hidden');
        
        menu.classList.toggle('translate-x-full');
    });
});