/* ==========================================
   SCHOOL PORTAL
   Main JavaScript File
========================================== */

document.addEventListener("DOMContentLoaded", () => {

    console.log("✅ School Portal Loaded Successfully!");

    initializeButtons();
    initializeSmoothScroll();
    initializeRevealAnimations();

});

/* ==========================================
   BUTTON RIPPLE EFFECT
========================================== */

function initializeButtons(){

    const buttons = document.querySelectorAll(
        ".primary-btn, .secondary-btn, .login-btn"
    );

    buttons.forEach(button => {

        button.addEventListener("mouseenter", () => {

            button.style.transform = "translateY(-4px)";

        });

        button.addEventListener("mouseleave", () => {

            button.style.transform = "translateY(0)";

        });

    });

}

/* ==========================================
   SMOOTH SCROLL
========================================== */

function initializeSmoothScroll(){

    const links = document.querySelectorAll('a[href^="#"]');

    links.forEach(link => {

        link.addEventListener("click", function(e){

            const target = document.querySelector(this.getAttribute("href"));

            if(!target) return;

            e.preventDefault();

            target.scrollIntoView({

                behavior:"smooth",
                block:"start"

            });

        });

    });

}

/* ==========================================
   FADE-IN ANIMATION
========================================== */

function initializeRevealAnimations(){

    const elements = document.querySelectorAll(

        ".hero-left, .hero-right, .stat-card, .research-card, .announcement-card"

    );

    const observer = new IntersectionObserver(entries => {

        entries.forEach(entry => {

            if(entry.isIntersecting){

                entry.target.classList.add("show");

            }

        });

    },{

        threshold:0.15

    });

    elements.forEach(element => {

        element.classList.add("hidden");

        observer.observe(element);

    });

}