// PORTFOLIO SCRIPT

// DARK MODE (WITH SAVE)

const darkToggle =
document.getElementById("darkToggle");

// Load saved mode
if (localStorage.getItem("darkMode") === "enabled") {

document.body.classList.add("dark");

}

// Toggle dark mode
darkToggle.addEventListener("click", () => {

document.body.classList.toggle("dark");

if (document.body.classList.contains("dark")) {

localStorage.setItem("darkMode", "enabled");

} else {

localStorage.setItem("darkMode", "disabled");

}

});


// HAMBURGER MENU

const hamburger =
document.getElementById("hamburger");

const navLinks =
document.getElementById("navLinks");

hamburger.addEventListener("click", () => {

navLinks.classList.toggle("active");

});


// CLOSE MENU AFTER CLICK

document.querySelectorAll(".nav-links a")
.forEach(link => {

link.addEventListener("click", () => {

navLinks.classList.remove("active");

});

});


// =========================
// FIXED COLOR PER WORD
// =========================

const words = [

{ text: "PROGRAMMER", color: "#ffc107" },      // Yellow
{ text: "DATA SCIENCE LEARNER", color: "#b7ff00" }, // Blue
{ text: "AI/ML ENTHUSIAST", color: "#a77228" }, // Green
{ text: "AGENTIC AI", color: "#ffa733" }, // Orange
{ text: "FULL-STACK WEB & APP DEVELOPER", color: "#6f42c1" }, // Purple
{ text: "ALWAYS LEARNING NEW THINGS", color: "#b817b3" } // Cyan

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

// Apply fixed color
typingElement.style.color =
currentColor;

if (isDeleting) {

charIndex--;

} else {

charIndex++;

}

typingElement.textContent =
currentWord.substring(0, charIndex);

// When word finished
if (!isDeleting &&
charIndex === currentWord.length) {

isDeleting = true;

setTimeout(typeEffect, 1200);

return;

}

// When deleting finished
if (isDeleting && charIndex === 0) {

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

// SMOOTH SCROLLING

document.querySelectorAll("a[href^='#']")
.forEach(anchor => {

anchor.addEventListener("click", function(e) {

e.preventDefault();

document.querySelector(
this.getAttribute("href")
).scrollIntoView({

behavior: "smooth"

});

});

});


// HERO FADE-IN ON LOAD

window.addEventListener("load", () => {

const heroText =
document.querySelector(".hero-text");

if (heroText) {

heroText.style.opacity = "1";
heroText.style.transform =
"translateY(0)";

}

});


// ACTIVE NAV LINK ON SCROLL

const sections =
document.querySelectorAll("section");

const navItems =
document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

let current = "";

sections.forEach(section => {

const sectionTop =
section.offsetTop - 100;

if (scrollY >= sectionTop) {

current = section.getAttribute("id");

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