// Intro Text Animation
let intro = document.querySelector('.intro');
let logoSpans = document.querySelectorAll(".logo");

window.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {

        logoSpans.forEach((span, idx) => {
            setTimeout(() => {
                span.classList.add('active');
            }, (idx + 1) * 400);
        });

        setTimeout(() => {
            logoSpans.forEach((span, idx) => {
                setTimeout(() => {
                    span.classList.remove('active');
                    span.classList.add('fade');
                }, (idx + 1) * 50);
            });
        }, 2000);

        setTimeout(() => {
            intro.style.top = "-100vh";
        }, 2300);

        setTimeout(() => {
            document.getElementById("main").classList.add("visible");
        }, 3000);

    });
});



// Navbar Toggle
const mobileNav = document.querySelector(".hamburger");
const navbar = document.querySelector(".menubar");

const toggleNav = () => {
  navbar.classList.toggle("active");
  mobileNav.classList.toggle("hamburger-active");
};
mobileNav.addEventListener("click", () => toggleNav());



// Custom circle cursor
const cursor = document.getElementById("cursor");
let mouseX = window.innerWidth / 2,
  mouseY = window.innerHeight / 2;
let currentX = mouseX,
  currentY = mouseY;

window.addEventListener("mousemove", (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
});

function animate() {
  currentX += (mouseX - currentX) * 0.1;
  currentY += (mouseY - currentY) * 0.1;
  cursor.style.transform = `translate(${currentX}px, ${currentY}px) translate(-50%, -50%)`;
  requestAnimationFrame(animate);
}
animate();


// Typing animation

const roles = ["Front-End Developer", "Back-End Developer"];
let index = 0;
let charIndex = 0;
let isDeleting = false;

const typingSpeed = 90;
const deletingSpeed = 60;
const pause = 1200;
const roleElement = document.getElementById("role");

function typeAnimation() {
  const currentRole = roles[index];

  if (!isDeleting) {
    roleElement.textContent = currentRole.substring(0, charIndex++);
    if (charIndex > currentRole.length) {
      isDeleting = true;
      setTimeout(typeAnimation, pause);
      return;
    }
  } else {
    roleElement.textContent = currentRole.substring(0, charIndex--);
    if (charIndex < 0) {
      isDeleting = false;
      index = (index + 1) % roles.length;
    }
  }

  setTimeout(typeAnimation, isDeleting ? deletingSpeed : typingSpeed);
}

setTimeout(typeAnimation, 400); // Starts smoothly after page load

// Blinking cursor visibility
setInterval(() => {
  roleElement.style.borderRightColor =
    roleElement.style.borderRightColor === "transparent"
      ? "#a26bff"
      : "transparent";
}, 500);


// fade in animation

const faders = document.querySelectorAll(".fade-in");

const appearOptions = {
  threshold: 0.3
};

const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add("active");
    appearOnScroll.unobserve(entry.target);
  });
}, appearOptions);

faders.forEach(fader => {
  appearOnScroll.observe(fader);
});
