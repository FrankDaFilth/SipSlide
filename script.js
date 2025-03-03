function toggleMenu() {
    const menu = document.querySelector('.nav-links');
    menu.classList.toggle('active');
}

function scrollToSection(sectionId) {
    const section = document.querySelector(sectionId);
    if (section) {
        window.scrollTo({
            top: section.offsetTop - 60,
            behavior: 'smooth'
        });
    }
}

// Preloader Animation
window.addEventListener("load", function () {
    setTimeout(() => {
        document.body.classList.add("loaded");
    }, 21000);
});

// Section Scroll Animation
function revealSections() {
    const sections = document.querySelectorAll(".section");
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const triggerPoint = window.innerHeight * 0.8;

        if (sectionTop < triggerPoint) {
            section.classList.add("visible");
        } else {
            section.classList.remove("visible");
        }
    });
}

window.addEventListener("scroll", revealSections);
window.addEventListener("load", revealSections);