// document.addEventListener("DOMContentLoaded", function () {
//     const fadeElements = document.querySelectorAll(".fade-in");

//     function fadeInOnScroll() {
//         fadeElements.forEach(element => {
//             const rect = element.getBoundingClientRect();
//             if (rect.top < window.innerHeight - 100) {
//                 element.classList.add("visible");
//             }
//         });
//     }

//     window.addEventListener("scroll", fadeInOnScroll);
//     fadeInOnScroll(); // Run on page load
// });

// document.addEventListener("DOMContentLoaded", function () {
//     const navLinks = document.querySelectorAll(".nav-link");
//     const hamburger = document.querySelector(".hamburger");
//     const navMenu = document.querySelector(".nav-links");

//     // Smooth Scroll
//     navLinks.forEach(link => {
//         link.addEventListener("click", function (event) {
//             event.preventDefault();
//             const targetId = this.getAttribute("href").substring(1);
//             document.getElementById(targetId).scrollIntoView({ behavior: "smooth" });

//             // Close Mobile Menu
//             navMenu.classList.remove("show");
//         });
//     });

//     // Mobile Menu Toggle
//     hamburger.addEventListener("click", function () {
//         navMenu.classList.toggle("show");
//     });

//     // Highlight Active Link
//     window.addEventListener("scroll", function () {
//         let fromTop = window.scrollY;

//         navLinks.forEach(link => {
//             let section = document.querySelector(link.getAttribute("href"));

//             if (section.offsetTop <= fromTop && section.offsetTop + section.offsetHeight > fromTop) {
//                 link.classList.add("active");
//             } else {
//                 link.classList.remove("active");
//             }
//         });
//     });
// });
