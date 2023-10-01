window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.navbar-menu'),
    menuItem = document.querySelectorAll('.navbar-menu__list'),
    hamburger = document.querySelector('.hamburger');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger_active');
        menu.classList.toggle('navbar_active');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger_active');
            menu.classList.toggle('navbar_active');
        })
    })
})
