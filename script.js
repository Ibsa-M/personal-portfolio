// =========================
// script.js
// =========================

// DARK MODE

const darkToggle =
document.getElementById("darkToggle");

if (localStorage.getItem("darkMode")
=== "enabled") {

document.body.classList.add("dark");

}

darkToggle.addEventListener("click", () => {

document.body.classList.toggle("dark");

if (document.body.classList.contains("dark")) {

localStorage.setItem(
"darkMode",
"enabled"
);

} else {

localStorage.setItem(
"darkMode",
"disabled"
);

}

});

// =========================
// HAMBURGER MENU
// =========================

const hamburger =
document.getElementById("hamburger");

const navLinks =
document.getElementById("navLinks");

hamburger.addEventListener("click", () => {

navLinks.classList.toggle("active");

});

// =========================
// CLOSE MENU AFTER CLICK
// =========================

document.querySelectorAll(".nav-links a")
.forEach(link => {

link.addEventListener("click", () => {

navLinks.classList.remove("active");

});

});

// =========================
// TYPING EFFECT
// =========================

const words = [

{
text: "PROGRAMMER",
color: "#ffc107"
},

{
text: "AI/ML ENTHUSIAST",
color: "#00c6ff"
},

{
text: "DATA SCIENCE LEARNER",
color: "#28a745"
},

{
text: "FULL-STACK WEB AND APP DEVELOPER",
color: "#ff5733"
},

{
text: "AGENTIC AI",
color: "#b817b3"
}

];

let wordIndex = 0;
let charIndex = 0;

let isDeleting = false;

const typingElement =
document.getElementById("typing");

function typeEffect() {

const currentWord =
words[wordIndex].text;

const currentColor =
words[wordIndex].color;

typingElement.style.color =
currentColor;

if (isDeleting) {

charIndex--;

} else {

charIndex++;

}

typingElement.textContent =
currentWord.substring(0, charIndex);

if (!isDeleting &&
charIndex === currentWord.length) {

isDeleting = true;

setTimeout(typeEffect, 1200);

return;

}

if (isDeleting &&
charIndex === 0) {

isDeleting = false;

wordIndex++;

if (wordIndex === words.length) {

wordIndex = 0;

}

}

setTimeout(
typeEffect,
isDeleting ? 50 : 100
);

}

typeEffect();

// =========================
// REVEAL ANIMATION
// =========================

const reveals =
document.querySelectorAll(".reveal");

window.addEventListener("scroll", () => {

reveals.forEach(element => {

const windowHeight =
window.innerHeight;

const revealTop =
element.getBoundingClientRect().top;

const revealPoint = 100;

if (revealTop <
windowHeight - revealPoint) {

element.classList.add("active");

}

});

});

// =========================
// ACTIVE NAV LINK
// =========================

const sections =
document.querySelectorAll("section");

const navItems =
document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

let current = "";

sections.forEach(section => {

const sectionTop =
section.offsetTop - 150;

if (scrollY >= sectionTop) {

current =
section.getAttribute("id");

}

});

navItems.forEach(link => {

link.classList.remove("active");

if (link.getAttribute("href")
=== "#" + current) {

link.classList.add("active");

}

});

});