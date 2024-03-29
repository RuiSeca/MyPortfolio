/*=============== SHOW MENU===============*/
const navMenu = document.getElementById('nav-links'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/*=============== MENU SHOW===============*/
if(navToggle){
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('nav-links')
     })
}

/*=============== MENU HIDDEN===============*/
if(navClose){
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('nav-links')
     }) 
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')

const linksAction = () =>{
     const navMenu = document.getElementById('nav-links')
     //When we click on each nav__link, we remove the show-menu(nav-links)
      navMenu.classList.remove('nav-links')
}
navLink.forEach(n => n.addEventListener('click', linksAction))

/*=============== CARD SWIPER ===============*/
 
var swiper = new Swiper(".mySwiper", {
    // Your Swiper options
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 300,
        modifier: 2,
        slideShadows: true,
    },
    pagination: {
        el: ".swiper-pagination",
    },
    scrollbar: {
        el: ".swiper-scrollbar",
        dragSize: 150, // Adjust as needed
    },
    
});
// Redirect to another website via card
function redirectToAnotherWebsite(url) {
    window.location.href = url;
  }
// Sync the scrollbar with Swiper's scroll position
swiper.on("scroll", function () {
    var scrollbarThumb = document.querySelector(".swiper-scrollbar-thumb");
    var scrollbarWidth = document.querySelector(".swiper-scrollbar").offsetWidth;
    var thumbWidth = scrollbarThumb.offsetWidth;
    var swiperWidth = swiper.width;

    var scrollPercentage = swiper.translate / (swiperWidth - swiper.width);
    var scrollThumbPosition = (scrollbarWidth - thumbWidth) * scrollPercentage;

    scrollbarThumb.style.transform = "translateX(" + scrollThumbPosition + "px)";
});



//window.addEventListener('scroll', reveal);



/*=============== ADD BLUR TO HEADER ===============*/
const blurHeader = () =>{
    const header = document.getElementById('header')
    //when the scroll is greater than 50 viewport height, add the scroll-header class to the header tag

    window.scrollY >= 50 ? header.classList.add('blur-header')
                       : header.classList.remove('blur-header')
}
window.addEventListener('scroll', blurHeader)


/*=============== EMAIL JS ===============*/
const contactForm = document.getElementById('contact-form'),
      contactMessage = document.getElementById('contact-message'),
      loaderWrapper = document.querySelector('.wrapper'); // Assuming you have a wrapper for the loading animation

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

const sendEmail = async (e) => {
    e.preventDefault();

    // Show loading animation
    loaderWrapper.style.visibility = 'visible';

    try {
        await emailjs.sendForm('service_pi4xy6m', 'template_641cbou', '#contact-form', 'pkfqcCbNu3mq8Ks-J');

        // Introduce a longer delay 
        await delay(6000);

        // Hide loading animation on success
        loaderWrapper.style.visibility = 'hidden';

        contactMessage.textContent = 'Message Sent Successfully 🟢';
        setTimeout(() => {
            contactMessage.textContent = '';
        }, 5000);
        contactForm.reset();
    } catch (error) {
        // Hide loading animation on error
        loaderWrapper.style.visibility = 'hidden';

        // Show service error Message
        contactMessage.textContent = 'Message not sent (error) 🔴';
    }
};




contactForm.addEventListener('submit', sendEmail);

/*=============== SHOW SCROLL UP BUTTON ===============*/ 
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

window.onscroll = function() {
    var button = document.getElementById("scrollTopButton");
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        button.style.display = "block";
    } else {
        button.style.display = "none";
    }
};

/*=============== SHOW type text Change===============*/ 

    
/*=============== SHOW SCROLL UP ===============*/ 
// Get the header element
const header = document.querySelector("header");

// Set the distance to scroll before hiding the header
const scrollDistance = 100; // Adjust this value as needed

// Function to handle scroll events
function handleScroll() {
    if (window.scrollY > scrollDistance) {
        header.style.top = `-${header.offsetHeight}px`; // Hide the header
    } else {
        header.style.top = "0"; // Show the header
    }
}

// Attach the scroll event listener
window.addEventListener("scroll", handleScroll);


/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/


/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    origin:'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
})

sr.reveal('.section__title, .about__description')
sr.reveal('.about__image', {origin:'bottom'})


sr.reveal('.header__skills, .skills__box, .skills__name, .skills__icon')

sr.reveal('.services__card, .services__description')

sr.reveal('.project__container')

/*=============== Typer ===============*/

new TypeIt("#auto-type", {
    strings: [
      "Back-End Developer",
      "Programmer",
      "Freelancer",
      "Back-End Developer"
    ],
    speed: 75,
    deleteSpeed: 40,
    breakLines: false,
    loop: false,
    waitUntilVisible: false,
    cursor: false,
    
  }).go();
/*=============== LIVE CHAT  ===============*/

document.addEventListener("DOMContentLoaded", function() {
    // Paste Drift code snippet here
    // Ensure any variables or functions referenced in the Drift code are defined or available here
    
    !function() {
        var t = window.driftt = window.drift = window.driftt || [];
        if (!t.init) {
            if (t.invoked) return void (window.console && console.error && console.error("Drift snippet included twice."));
            t.invoked = !0, t.methods = [ "identify", "config", "track", "reset", "debug", "show", "ping", "page", "hide", "off", "on" ], 
            t.factory = function(e) {
                return function() {
                    var n = Array.prototype.slice.call(arguments);
                    return n.unshift(e), t.push(n), t;
                };
            }, t.methods.forEach(function(e) {
                t[e] = t.factory(e);
            }), t.load = function(t) {
                var e = 3e5, n = Math.ceil(new Date() / e) * e, o = document.createElement("script");
                o.type = "text/javascript", o.async = !0, o.crossorigin = "anonymous", o.src = "https://js.driftt.com/include/" + n + "/" + t + ".js";
                var i = document.getElementsByTagName("script")[0];
                i.parentNode.insertBefore(o, i);
            };
        }
    }();
    drift.SNIPPET_VERSION = '0.3.1';
    drift.load('7ixnh64c3k5t');
});

/*=============== TOGGLE_DARK&WHITE_MODE  ===============*/
function toggleMode() {
    const body = document.body;
    body.classList.toggle('white-mode');
  }
  


