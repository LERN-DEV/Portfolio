/*Abre e fecha menu lateral em modo mobile*/
const menuMobile = document.querySelector('.menu-mobile')
const body = document.querySelector('body')

menuMobile.addEventListener('click', ()=> {
    /*Se não for bi list é X altera no html*/
    menuMobile.classList.contains("bi-list")
    ? menuMobile.classList.replace("bi-list", "bi-x")
    : menuMobile.classList.replace("bi-x", "bi-list");
    /*Chama menu e trava scroll*/
    body.classList.toggle("menu-nav-active")
})