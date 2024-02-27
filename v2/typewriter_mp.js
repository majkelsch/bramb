document.addEventListener('DOMContentLoaded', function() {
const phrases = ["Chipstips", "Prostě chipsy", "Lupínky", "Brambůrky"];
  
const typewriter = document.querySelector(".typewriter");
let index = 0;
let charIndex = 0;
let isDeleting = false;

function type() {
  const currentPhrase = phrases[index];

  if (isDeleting) {
    typewriter.textContent = currentPhrase.substring(0, charIndex - 1);
    charIndex--;
  } else {
    typewriter.textContent = currentPhrase.substring(0, charIndex + 1);
    charIndex++;
  }

  if (!isDeleting && charIndex === currentPhrase.length) {
    isDeleting = true;
    setTimeout(type, 2000); // Pause before starting erasing
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    index++;
    if (index >= phrases.length) {
      index = 0; // Restart the loop
    }
    setTimeout(type, 750); // Pause before typing the next phrase
  } else {
    const typingSpeed = isDeleting ? 50 : 100; // Adjust typing speed as needed
    setTimeout(type, typingSpeed);
  }

  // Adjust the caret visibility based on the current phase
  if (!isDeleting && charIndex === currentPhrase.length) {
    typewriter.style.borderRightColor = "transparent";
  } else {
    typewriter.style.borderRightColor = "black";
  }
}

// Start the typewriter effect after a delay
setTimeout(type, 1000);
});