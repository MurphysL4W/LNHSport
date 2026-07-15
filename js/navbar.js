/* ==========================================
   NAVBAR CONTROLLER
========================================== */

document.addEventListener("DOMContentLoaded", () => {

    const header = document.querySelector(".header");
    const menuToggle = document.getElementById("menu-toggle");
    const navLinks = document.getElementById("nav-links");
    const navItems = document.querySelectorAll(".nav-links a");

    /* ==========================
       Navbar Scroll Effect
    ========================== */

    window.addEventListener("scroll", () => {

        if (window.scrollY > 60) {

            header.classList.add("scrolled");

        } else {

            header.classList.remove("scrolled");

        }

    });

    /* ==========================
       Mobile Menu
    ========================== */

    menuToggle.addEventListener("click", () => {

        navLinks.classList.toggle("show-menu");
        menuToggle.classList.toggle("open");

    });

    /* ==========================
       Close menu after click
    ========================== */

    navItems.forEach(link => {

        link.addEventListener("click", () => {

            navLinks.classList.remove("show-menu");
            menuToggle.classList.remove("open");

        });

    });

    /* ==========================
       Active Navigation
    ========================== */

    navItems.forEach(link => {

        link.addEventListener("click", () => {

            navItems.forEach(item => item.classList.remove("active"));

            link.classList.add("active");

        });

    });

});