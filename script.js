// MOBILE MENU
const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("show");
});

// SMOOTH SCROLL
document.querySelectorAll("a[href^='#']").forEach(link => {
    link.addEventListener("click", (e) => {
        e.preventDefault();
        document.querySelector(link.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
        navLinks.classList.remove("show");
    });
});

// SCROLL REVEAL
const reveals = document.querySelectorAll(".reveal");

window.addEventListener("scroll", () => {
    for (let i = 0; i < reveals.length; i++) {
        let windowHeight = window.innerHeight;
        let revealTop = reveals[i].getBoundingClientRect().top;

        if (revealTop < windowHeight - 100) {
            reveals[i].classList.add("show");
        }
    }
});

// FORM MESSAGE
document.querySelector(".contact-form").addEventListener("submit", (e) => {
    e.preventDefault();
    alert("Message Sent Successfully!");
    e.target.reset();
});
