// Typewriter Effect for Name
const nameElement = document.getElementById('typewriter');

const typeWriter = (text, i = 0, fnCallback) => {
    if (i < text.length) {
        nameElement.innerHTML = text.substring(0, i + 1);
        setTimeout(() => typeWriter(text, i + 1, fnCallback), 100);
    } else if (i === text.length) {
        // Pause before starting the erase effect
        setTimeout(() => eraseText(fnCallback), 1000);
    }
};

const eraseText = (fnCallback) => {
    const text = 'Subhojit Chatterjee';
    let i = text.length;
    const erase = () => {
        if (i >= 0) {
            nameElement.innerHTML = text.substring(0, i);
            i--;
            setTimeout(erase, 50);
        } else {
            fnCallback();  // Start typing again after erasing
        }
    };
    erase();
};

// Start typing effect on page load
document.addEventListener('DOMContentLoaded', function () {
    typeWriter('Subhojit Chatterjee', 0, () => {
        // Continue typing after erase
        typeWriter('Subhojit Chatterjee', 0, () => {});
    });
});

// Smooth Scroll for Navigation Links
const navLinks = document.querySelectorAll('nav ul li a');
navLinks.forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        window.scrollTo({
            top: targetSection.offsetTop - 80,
            behavior: 'smooth'
        });
    });
});

// Form Submission Animation (Optional)
document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault();
    alert("Message Sent!");
    document.getElementById('contactForm').reset();
});
