document.addEventListener("DOMContentLoaded", function () {
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const headerNav = document.querySelector('.header-nav');

    hamburgerMenu.addEventListener('click', function () {
        if (headerNav.style.display === 'none') {
            headerNav.style.display = 'block';
            toggleHamburgerMenu();
        } else {
            headerNav.style.display = 'none';
            toggleHamburgerMenu();
        }
    });

    function toggleHamburgerMenu() {
        const menuIcon = document.getElementById('menu-icon');
        const crossIcon = document.getElementById('cross-icon');
    
        if(menuIcon.style.display == 'block') {
            menuIcon.style.display = 'none';
            crossIcon.style.display = 'block';
        } else {
            menuIcon.style.display = 'block';
            crossIcon.style.display = 'none';
        }
    }
    
    function appendNavToHeader() {
        const headerNav = document.querySelector('.header-nav');
    
        headerNav.style.display = 'block';
        document.querySelector('.header-centered').appendChild(headerNav);
    }
    
    function appendNavToMobileNav() {
        const mobileNav = document.getElementById('mobile-nav');
        const headerNav = document.querySelector('.header-nav');
    
        headerNav.style.display = 'none';
        mobileNav.appendChild(headerNav);
    
        const menuIcon = document.getElementById('menu-icon');
        const crossIcon = document.getElementById('cross-icon');
        menuIcon.style.display = 'block';
        crossIcon.style.display = 'none';
    
    }
    
    function handleScreenWidthChange() {
        const screenWidth = window.innerWidth;
        console.log("Screen width:", screenWidth);
    
        const mobileNav = document.getElementById('mobile-nav');
        const headerNav = document.querySelector('.header-nav');

        const menuIcon = document.getElementById('menu-icon');
        const crossIcon = document.getElementById('cross-icon');

        if (screenWidth <= 1023) {
            if (!mobileNav.contains(headerNav)) {
                appendNavToMobileNav();
            }
        } else {
            appendNavToHeader();
        } 

        if(screenWidth > 768 && screenWidth < 1024) {
            if(menuIcon.classList.contains('fa-2x')) {
                menuIcon.classList.remove('fa-2x');
                crossIcon.classList.remove('fa-2x');
                menuIcon.classList.add('fa-3x');
                crossIcon.classList.add('fa-3x');
            }
        } else {
            if(menuIcon.classList.contains('fa-3x')) {
                menuIcon.classList.remove('fa-3x');
                crossIcon.classList.remove('fa-3x');
                menuIcon.classList.add('fa-2x');
                crossIcon.classList.add('fa-2x');
            }
        }
    }
    
    handleScreenWidthChange();
    
    window.addEventListener('resize', handleScreenWidthChange);
});