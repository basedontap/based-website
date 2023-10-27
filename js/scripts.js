/*!
* Start Bootstrap - Grayscale v7.0.6 (https://startbootstrap.com/theme/grayscale)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-grayscale/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }
    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });


    // change the navBar color on Roadmap
    const navBarColorChange = () => {
        const navbarCollapsible = document.querySelector('#mainNav');
        const navLinks = document.querySelectorAll('.nav-link');
        
        const activeLink = Array.from(navLinks).find(link => link.classList.contains('active'));
        if (activeLink) {
            const activeLinkCheck =  activeLink.textContent !== 'About';        
            navbarCollapsible.classList.toggle('navbar-color-update', activeLinkCheck );
            
            navLinks.forEach(link => {
                link.classList.toggle('navba-a-color-fff', activeLinkCheck);
            });
        
            if (!activeLinkCheck) {
                navbarShrink();
            }
        }
        
    };

    navBarColorChange();
    document.addEventListener('scroll', navBarColorChange);

});