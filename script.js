document.addEventListener("DOMContentLoaded", function() {
    const phrases = ["Cloud Engineer", "DevOps Enthusiast", "Creative Problem Solver", "Full-Stack Developer"];
    let currentPhrase = 0;
    let currentChar = 0;
    let dynamicText = document.getElementById("dynamic-text");
    let typingSpeed = 150;
    let deletingSpeed = 50;

    function typePhrase() {
        if (currentChar < phrases[currentPhrase].length) {
            dynamicText.textContent += phrases[currentPhrase].charAt(currentChar);
            currentChar++;
            setTimeout(typePhrase, typingSpeed);
        } else {
            // Wait some time before starting to delete
            setTimeout(deletePhrase, 2000);
        }
    }

    function deletePhrase() {
        if (currentChar > 0) {
            dynamicText.textContent = phrases[currentPhrase].substring(0, currentChar - 1);
            currentChar--;
            setTimeout(deletePhrase, deletingSpeed);
        } else {
            // Move to the next phrase
            currentPhrase = (currentPhrase + 1) % phrases.length;
            setTimeout(typePhrase, typingSpeed);
        }
    }

    setTimeout(typePhrase, typingSpeed); // Start the typing effect on load
});

document.addEventListener("DOMContentLoaded", function() {
    const slides = document.querySelectorAll(".slide");
    let currentSlide = 0;

    function showSlide(index) {
        slides.forEach((slide, idx) => {
            slide.style.transform = `translateX(${(idx - index) * 100}%)`;
        });
    }

    document.querySelector("#next").addEventListener("click", function() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    });

    document.querySelector("#prev").addEventListener("click", function() {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        showSlide(currentSlide);
    });

    showSlide(currentSlide);
});

function toggleDetails(detailsId) {
    const details = document.getElementById(detailsId);
    const ul = details.querySelector('ul'); // Check if it's a 'ul'
    if (ul) {
        ul.style.display = (ul.style.display === 'none' || ul.style.display === '') ? 'block' : 'none';
    } else {
        const element = details;
        if (element.style.display === 'none' || !element.style.display) {
            element.style.display = 'block';  // Show the element
        } else {
            element.style.display = 'none';   // Hide the element
        }
    }
}

function openModal(modalId) {
    document.getElementById(modalId).style.display = 'block';
}

function closeModal(modalId) {
    document.getElementById(modalId).style.display = 'none';
}

// Close modal if outside click
window.onclick = function(event) {
    if (event.target.className === 'modal') {
        event.target.style.display = 'none';
    }
}

function toggleAccordion(id) {
    var element = document.getElementById(id);
    if (element.style.display === "none") {
        element.style.display = "block";
    } else {
        element.style.display = "none";
    }
}

let lastScrollTop = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', function() {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
        // Scroll Down
        navbar.style.top = '-60px'; // Adjust this value based on your navbar height
    } else {
        // Scroll Up
        navbar.style.top = '0';
    }
    lastScrollTop = scrollTop;
});
