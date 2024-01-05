// Control menu bar
document.addEventListener("DOMContentLoaded", () => {
    document.querySelector(".menu").addEventListener("click", () => {
        document.querySelector(".nav-bar").style.right = 0;
    });

    document.querySelector(".close").addEventListener("click", () => {
        document.querySelector(".nav-bar").style.right = "-50%";
    });
});

// Gsap animation
gsap.from(".logo", 1, {
    x: -50,
    opacity: 0
});

if (window.innerWidth > 768) {
    gsap.from(".nav-bar", 1, {
        x: 50,
        opacity: 0
    });
} else if (window.innerWidth < 768) {
    gsap.from(".menu", 1, {
        x: 50,
        opacity: 0
    });
}