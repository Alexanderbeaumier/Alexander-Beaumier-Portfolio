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
            setTimeout(deletePhrase, 2000);
        }
    }

    function deletePhrase() {
        if (currentChar > 0) {
            dynamicText.textContent = phrases[currentPhrase].substring(0, currentChar - 1);
            currentChar--;
            setTimeout(deletePhrase, deletingSpeed);
        } else {
            currentPhrase = (currentPhrase + 1) % phrases.length;
            setTimeout(typePhrase, typingSpeed);
        }
    }

    setTimeout(typePhrase, typingSpeed);
});

function toggleDetails(detailsId) {
    const details = document.getElementById(detailsId);
    if (details) {
        details.style.display = (details.style.display === 'none' || details.style.display === '') ? 'block' : 'none';
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

function toggleAccordion(id) {
    var element = document.getElementById(id);
    if (element.style.display === "none" || element.style.display === "") {
        element.style.display = "block";
    } else {
        element.style.display = "none";
    }
}