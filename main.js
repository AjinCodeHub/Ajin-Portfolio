// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Scroll animations
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, observerOptions);

document.querySelectorAll('.animate-on-scroll').forEach((element) => {
    observer.observe(element);
});

// Typing effect
const text = document.querySelector('.typing-text');
const originalText = text.textContent;
text.textContent = '';

let i = 0;
function typeWriter() {
    if (i < originalText.length) {
        text.textContent += originalText.charAt(i);
        i++;
        setTimeout(typeWriter, 100);
    }
}

setTimeout(typeWriter, 500);

// Auto Typing
var typed = new Typed(".auto-typing", {
    strings: ["PYTHON DEVELOPER", "FULL STACT DEVELOPER", "BACKEND DEVELOPER", "FRONTEND DEVELOPER"],
    typeSpeed: 150,
    backSpeed: 150,
    loop: true,

})
// Nav Response
document.addEventListener('DOMContentLoaded', function () {
    let menu = document.querySelector('#menu-icon');
    let navbar = document.querySelector('.nav-links');
    let navlinks = document.querySelectorAll('.nav-links');
    
    if (menu && navbar) {

        // Toggle menu on icon click
        menu.onclick = () => {
            menu.classList.toggle('rotate');
            navbar.classList.toggle('open');
        };

        // Close menu when clicking outside of it
        document.addEventListener('click',function (event){
            if (!navbar.contains(event.target) && !menu.contains(event.target)) {
                navbar.classList.remove('open');
                menu.classList.remove('rotate');
                menu.innerHTML = 'open';
            }
        });

        // Function to close the menu
        function closeMenu() {
            navbar.classList.remove('open');
            menu.classList.remove('rotate');
            menu.innerHTML = 'open';
        }

        // Close menu when clicking on a menu item
        navlinks.forEach(link => {
            link.addEventListener('click',function(){
                closeMenu();
            })
        })
    } else {
        console.warn("Menu icon or navbar not found. Skipping menu initialization.");
    }
});

// Contact Form Submit
$("#submit-form").submit((e) => {
    e.preventDefault()

    const submitBtn = $('#submit-btn');
    const formStatus = $('#form-status');

    submitBtn.text('Sending...').attr('disabled', true);

    $.ajax({
        url: "https://script.google.com/macros/s/AKfycbxTdA4sjJ3rEYeawlYzn8lXApx4rK_My2DzX2XpBSd5CzcYkGMPBWPeGvh6Q8yYGbnTcg/exec",
        data: $("#submit-form").serialize(),
        method: "POST",
        success: function (response) {
            formStatus.text('✅ Form submitted successfully!').css('color', '#fff')
        },
        error: function (err) {
            // formStatus.text('❌ Somethings went wrong. Please try again.')
            formStatus.text('❌ Try again. Network issue')
        },
        complete: function () {
            submitBtn.text('Send Message').attr('disabled', false)
        }
    });
});

