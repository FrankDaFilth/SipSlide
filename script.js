function toggleMenu() {
    const menu = document.querySelector('.nav-links');
    menu.classList.toggle('active');
}

// Close menu when clicking a nav link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        const menu = document.querySelector('.nav-links');
        if (menu.classList.contains('active')) {
            menu.classList.remove('active');
        }
    });
});

// Smooth Scroll Function
function scrollToSection(sectionId) {
    const section = document.querySelector(sectionId);
    if (section) {
        const offset = window.innerWidth < 768 ? 50 : 60;
        window.scrollTo({
            top: section.offsetTop - offset,
            behavior: 'smooth'
        });
    }
}

// Attach smooth scrolling to nav links
document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            scrollToSection(this.getAttribute('href'));
        });
    });
});

// Section Scroll Animation using IntersectionObserver
document.addEventListener("DOMContentLoaded", () => {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }
        });
    }, { threshold: 0.2 });

    document.querySelectorAll(".section").forEach(section => observer.observe(section));
});

// Back to Top Button
const backToTopButton = document.createElement("button");
backToTopButton.id = "back-to-top";
backToTopButton.textContent = "↑ Top";
document.body.appendChild(backToTopButton);

window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        backToTopButton.style.display = "block";
    } else {
        backToTopButton.style.display = "none";
    }
});

backToTopButton.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
});

// Preloader Functionality
window.addEventListener("load", function () {
    setTimeout(() => {
        document.body.classList.add("loaded");
    }, 15000); // Ensures preloader finishes before revealing the content
});