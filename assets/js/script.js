'use strict'

/** 
    * add event on elment
*/
const addEvenOnElement = function (element, event, callback) {

    if (element.length > 1) {
        for (let i = 0; i < element.length; i++) {
            element[i].addEventListener(event, callback);
        }
    } else {
        element.addEventListener(event, callback);
    }
}

/* toggle navbar */

const header = document.querySelector('[data-header]');
const navbar = document.querySelector('[data-navbar]');
const linlk = document.querySelectorAll('[data-link]');
const navtoggler = document.querySelector('[data-nav-toggler]');

/* 
    function event navbar
*/
const openMenu = function () {
    navbar.classList.toggle('active');
    navtoggler.classList.toggle('active');

}

addEvenOnElement(navtoggler, 'click', openMenu);

/* close when you do clicked link */
addEvenOnElement(linlk, 'click', openMenu);

/* This is when you do scroll  */

window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        header.classList.add('active');
    } else {
        header.classList.remove('active');
    }
});


