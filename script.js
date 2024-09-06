// Scroll-activated animations
const sections = document.querySelectorAll('section');
const options = {
  threshold: 0.3,
  rootMargin: "0px 0px -100px 0px"
};

const observer = new IntersectionObserver(function(entries, observer) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('fade-in');
      // Delaying unobserve to ensure animation is completed
      setTimeout(() => observer.unobserve(entry.target), 1000);
    }
  });
}, options);

sections.forEach(section => {
  observer.observe(section);
});

// Sticky Navigation Bar
window.addEventListener('scroll', function() {
  const nav = document.querySelector('nav');
  nav.classList.toggle('sticky', window.scrollY > 0);
});

// JavaScript for smooth scrolling
const navLinks = document.querySelectorAll('nav ul li a');
const headerOffset = 60; // Adjust this value to fit your layout, usually the height of the sticky header

navLinks.forEach(link => {
  link.addEventListener('click', function(event) {
    event.preventDefault(); // Prevent default link behavior

    // Get the target section
    const targetSection = document.querySelector(this.getAttribute('href'));

    // Calculate the scroll position with an offset
    const targetPosition = targetSection.getBoundingClientRect().top + window.scrollY - headerOffset;

    // Smooth scroll to the target position
    window.scrollTo({
      top: targetPosition,
      behavior: 'smooth'
    });
  });
});



// Typewriter Effect
const text = "Welcome to My Personal Website!";
let index = 0;

function typeWriter() {
  if (index < text.length) {
    document.querySelector('header h1').textContent = text.substring(0, index + 1);
    index++;
    setTimeout(typeWriter, 100);
  }
}

window.onload = function() {
  typeWriter();
};

// Back-to-top Button
const topBtn = document.getElementById('topBtn');

window.addEventListener('scroll', scrollFunction);

function scrollFunction() {
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    topBtn.style.display = "block";
  } else {
    topBtn.style.display = "none";
  }
}

topBtn.addEventListener('click', function() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});
