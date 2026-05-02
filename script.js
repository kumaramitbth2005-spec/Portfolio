// Navbar scroll effect
window.addEventListener("scroll", function () {
  let navbar = document.querySelector(".custom-navbar");

  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }
});

// Close mobile navbar on link click
document.querySelectorAll('.navbar-nav .nav-link:not(.dropdown-toggle), .navbar-nav .dropdown-item').forEach(link => {
  link.addEventListener('click', () => {
    const navbarCollapse = document.getElementById('navbarNav');
    if (navbarCollapse.classList.contains('show')) {
      const bsCollapse = bootstrap.Collapse.getInstance(navbarCollapse) || new bootstrap.Collapse(navbarCollapse, {toggle: false});
      bsCollapse.hide();
    }
  });
});

// Custom Cursor Logic
const cursor = document.getElementById("cursor");

// Detect touch device - hide cursor completely on touch screens
const isTouchDevice = ('ontouchstart' in window) || (navigator.maxTouchPoints > 0);

if (isTouchDevice) {
  // Hide cursor element on touch devices
  cursor.style.display = 'none';
  // Restore default cursor on touch devices
  document.documentElement.style.cursor = 'auto';
  document.body.style.cursor = 'auto';
} else {
  // Desktop: Hide cursor initially, show on first mouse move
  cursor.style.opacity = '0';
  cursor.style.transition = 'opacity 0.3s ease, transform .1s ease-out, border-color .2s, width .3s, height .3s';

  let cursorVisible = false;

  window.addEventListener("mousemove", (e) => {
    const posX = e.clientX;
    const posY = e.clientY;

    // Show cursor on first move
    if (!cursorVisible) {
      cursorVisible = true;
      cursor.style.opacity = '1';
    }

    // Update cursor position
    cursor.style.left = `${posX}px`;
    cursor.style.top = `${posY}px`;

    // Robotic Circles Parallax Movement
    const roboticCircles = document.querySelectorAll(".robotic-circle-item");
    roboticCircles.forEach(circle => {
      const x = (window.innerWidth / 2 - posX) / 25;
      const y = (window.innerHeight / 2 - posY) / 25;
      circle.style.transform = `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`;
    });
  });

  // Hide cursor when mouse leaves the window
  document.addEventListener("mouseleave", () => {
    cursor.style.opacity = '0';
  });

  // Show cursor when mouse enters the window
  document.addEventListener("mouseenter", () => {
    cursor.style.opacity = '1';
  });

  // Cursor Hover Effects
  document.querySelectorAll('a, button, .project-card, .skill-card, .highlight-card').forEach(el => {
    el.addEventListener('mouseenter', () => cursor.classList.add('grow'));
    el.addEventListener('mouseleave', () => cursor.classList.remove('grow'));
  });
}





// Skill Card Toggle Notes
function toggleSkillNotes(card) {
  // Close all other cards first
  document.querySelectorAll('.skill-card.active').forEach(function (activeCard) {
    if (activeCard !== card) {
      activeCard.classList.remove('active');
    }
  });
  // Toggle current card
  card.classList.toggle('active');
}


// Toggle Nested Skill Sub-Notes
function toggleSubNotes(event, element) {
  event.stopPropagation(); // Prevents the main card from closing

  // Close other sub-notes in the same list
  const siblings = element.parentElement.querySelectorAll('li');
  siblings.forEach(li => {
    if (li !== element) {
      li.classList.remove('active');
    }
  });

  // Toggle current sub-note
  element.classList.toggle('active');
}


// Typing Animation
const words = ["Web Developer", "Java Developer", "Problem Solver", "Freelancer"];
let i = 0;
let j = 0;
let currentWord = "";
let isDeleting = false;

function typeEffect() {
  currentWord = words[i];

  if (isDeleting) {
    document.getElementById("typed-text").textContent =
      currentWord.substring(0, j--);
  } else {
    document.getElementById("typed-text").textContent =
      currentWord.substring(0, j++);
  }

  if (!isDeleting && j === currentWord.length + 1) {
    isDeleting = true;
    setTimeout(typeEffect, 1000);
    return;
  }

  if (isDeleting && j === 0) {
    isDeleting = false;
    i++;
    if (i === words.length) i = 0;
  }

  setTimeout(typeEffect, isDeleting ? 70 : 120);
}

typeEffect();


// About Typing Animation
const aboutWords = [
  "Frontend Developer",
  "Java Programmer",
  "Creative Designer",
  "Problem Solver"
];

let a = 0;
let b = 0;
let aboutCurrent = "";
let aboutDelete = false;

function aboutTypeEffect() {
  aboutCurrent = aboutWords[a];

  if (aboutDelete) {
    document.getElementById("aboutTyped").textContent =
      aboutCurrent.substring(0, b--);
  } else {
    document.getElementById("aboutTyped").textContent =
      aboutCurrent.substring(0, b++);
  }

  if (!aboutDelete && b === aboutCurrent.length + 1) {
    aboutDelete = true;
    setTimeout(aboutTypeEffect, 1000);
    return;
  }

  if (aboutDelete && b === 0) {
    aboutDelete = false;
    a++;
    if (a === aboutWords.length) a = 0;
  }

  setTimeout(aboutTypeEffect, aboutDelete ? 70 : 120);
}

aboutTypeEffect();



// Education Typing Animation
// Redundant education typing removed to avoid conflicts



// Skills Typing Animation
const skillWords = [
  "HTML & CSS",
  "JavaScript",
  "Bootstrap",
  "Java",
  "DSA"
];

let s = 0;
let t = 0;
let skillCurrent = "";
let skillDelete = false;

function skillTypeEffect() {
  skillCurrent = skillWords[s];

  if (skillDelete) {
    document.getElementById("skillTyped").textContent =
      skillCurrent.substring(0, t--);
  } else {
    document.getElementById("skillTyped").textContent =
      skillCurrent.substring(0, t++);
  }

  if (!skillDelete && t === skillCurrent.length + 1) {
    skillDelete = true;
    setTimeout(skillTypeEffect, 1000);
    return;
  }

  if (skillDelete && t === 0) {
    skillDelete = false;
    s++;
    if (s === skillWords.length) s = 0;
  }

  setTimeout(skillTypeEffect, skillDelete ? 70 : 120);
}

skillTypeEffect();


// Skill Bar Animation on Scroll
window.addEventListener("load", () => {
  const bars = document.querySelectorAll(".skill-bar");

  bars.forEach(bar => {
    let width = bar.getAttribute("data-width");
    setTimeout(() => {
      bar.style.width = width;
    }, 300);
  });
});


// Project Typing Animation
const projectWords = [
  "Portfolio Websites",
  "Responsive UI Designs",
  "Web Applications",
  "Creative Solutions"
];

let p = 0;
let q = 0;
let projectCurrent = "";
let projectDelete = false;

function projectTypeEffect() {
  projectCurrent = projectWords[p];

  if (projectDelete) {
    document.getElementById("projectTyped").textContent =
      projectCurrent.substring(0, q--);
  } else {
    document.getElementById("projectTyped").textContent =
      projectCurrent.substring(0, q++);
  }

  if (!projectDelete && q === projectCurrent.length + 1) {
    projectDelete = true;
    setTimeout(projectTypeEffect, 1000);
    return;
  }

  if (projectDelete && q === 0) {
    projectDelete = false;
    p++;
    if (p === projectWords.length) p = 0;
  }

  setTimeout(projectTypeEffect, projectDelete ? 70 : 120);
}

projectTypeEffect();


// Hire Me Typing Animation
const hireWords = [
  "Freelancing",
  "Portfolio Websites",
  "Landing Pages",
  "Frontend Projects",
  "UI Design"
];

let h = 0;
let y = 0;
let hireCurrent = "";
let hireDelete = false;

function hireTypeEffect() {
  hireCurrent = hireWords[h];

  if (hireDelete) {
    document.getElementById("hireTyped").textContent =
      hireCurrent.substring(0, y--);
  } else {
    document.getElementById("hireTyped").textContent =
      hireCurrent.substring(0, y++);
  }

  if (!hireDelete && y === hireCurrent.length + 1) {
    hireDelete = true;
    setTimeout(hireTypeEffect, 1000);
    return;
  }

  if (hireDelete && y === 0) {
    hireDelete = false;
    h++;
    if (h === hireWords.length) h = 0;
  }

  setTimeout(hireTypeEffect, hireDelete ? 70 : 120);
}

hireTypeEffect();


// Background Particle System
const canvas = document.getElementById('bg-canvas');
const ctx = canvas.getContext('2d');
let particles = [];
const particleCount = 60;

class Particle {
  constructor() {
    this.reset();
  }

  reset() {
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.size = Math.random() * 2 + 1;
    this.speedX = (Math.random() - 0.5) * 0.5;
    this.speedY = (Math.random() - 0.5) * 0.5;
    this.opacity = Math.random() * 0.5 + 0.2;
  }

  update() {
    this.x += this.speedX;
    this.y += this.speedY;

    if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
    if (this.y < 0 || this.y > canvas.height) this.speedY *= -1;
  }

  draw() {
    ctx.fillStyle = `rgba(56, 189, 248, ${this.opacity})`;
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fill();
  }
}

function initParticles() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  particles = [];
  for (let i = 0; i < particleCount; i++) {
    particles.push(new Particle());
  }
}

function animateParticles() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  particles.forEach((p, index) => {
    p.update();
    p.draw();

    // Draw connections
    for (let j = index + 1; j < particles.length; j++) {
      const p2 = particles[j];
      const dx = p.x - p2.x;
      const dy = p.y - p2.y;
      const distance = Math.sqrt(dx * dx + dy * dy);

      if (distance < 150) {
        ctx.strokeStyle = `rgba(56, 189, 248, ${0.15 * (1 - distance / 150)})`;
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(p.x, p.y);
        ctx.lineTo(p2.x, p2.y);
        ctx.stroke();
      }
    }
  });
  requestAnimationFrame(animateParticles);
}

window.addEventListener('resize', initParticles);
initParticles();
animateParticles();


// --- Three.js 3D Globe Animation ---
function initGlobe() {
  const container = document.getElementById("globe-container");
  if (!container) return;

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
  );

  const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(window.devicePixelRatio);
  container.appendChild(renderer.domElement);

  // 🌍 Globe Geometry
  const geometry = new THREE.SphereGeometry(2.5, 64, 64);

  // 🌐 Texture (using a high-tech dotted grid texture for better look)
  const textureLoader = new THREE.TextureLoader();
  const texture = textureLoader.load(
    "https://threejs.org/examples/textures/planets/earth_atmos_2048.jpg"
  );

  const material = new THREE.MeshBasicMaterial({
    map: texture,
    transparent: true,
    opacity: 0.8,
    color: 0x38bdf8, // Cyan tint to match theme
    wireframe: true // Makes it look more robotic/digital
  });

  const globe = new THREE.Mesh(geometry, material);
  scene.add(globe);

  // ✨ Orbit Ring
  const ringGeometry = new THREE.TorusGeometry(3.5, 0.03, 16, 100);
  const ringMaterial = new THREE.MeshBasicMaterial({
    color: 0x38bdf8,
    transparent: true,
    opacity: 0.5
  });
  const ring = new THREE.Mesh(ringGeometry, ringMaterial);
  ring.rotation.x = Math.PI / 2;
  scene.add(ring);

  // 📷 Camera position
  camera.position.z = 6;

  // 🔄 Animation loop (CLOCKWISE)
  function animateGlobe() {
    requestAnimationFrame(animateGlobe);

    globe.rotation.y -= 0.002; // Clockwise rotation
    ring.rotation.z -= 0.003;

    renderer.render(scene, camera);
  }

  animateGlobe();

  // 📱 Responsive
  window.addEventListener("resize", () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  });
}

// Initialize the globe after a small delay to ensure container is ready
setTimeout(initGlobe, 100);

// Social Typing Animation
const socialWords = [
  "Instagram",
  "Facebook",
  "Twitter",
  "GitHub",
  "LinkedIn",
  "LeetCode"
];

let sw = 0;
let sx = 0;
let socialCurrent = "";
let socialDelete = false;

function socialTypeEffect() {
  socialCurrent = socialWords[sw];
  const el = document.getElementById("socialTyped");
  if (!el) return;

  if (socialDelete) {
    el.textContent = socialCurrent.substring(0, sx--);
  } else {
    el.textContent = socialCurrent.substring(0, sx++);
  }

  if (!socialDelete && sx === socialCurrent.length + 1) {
    socialDelete = true;
    setTimeout(socialTypeEffect, 1000);
    return;
  }

  if (socialDelete && sx === 0) {
    socialDelete = false;
    sw = (sw + 1) % socialWords.length;
  }

  setTimeout(socialTypeEffect, socialDelete ? 70 : 120);
}

socialTypeEffect();

// Earth Typing Animation
const earthWords = [
  "Clients Worldwide",
  "Future Projects",
  "Global Brands",
  "Digital Growth"
];

let ew = 0;
let ex = 0;
let earthCurrent = "";
let earthDelete = false;

function earthTypeEffect() {
  earthCurrent = earthWords[ew];
  const el = document.getElementById("earthTyped");
  if (!el) return;

  if (earthDelete) {
    el.textContent = earthCurrent.substring(0, ex--);
  } else {
    el.textContent = earthCurrent.substring(0, ex++);
  }

  if (!earthDelete && ex === earthCurrent.length + 1) {
    earthDelete = true;
    setTimeout(earthTypeEffect, 1000);
    return;
  }

  if (earthDelete && ex === 0) {
    earthDelete = false;
    ew = (ew + 1) % earthWords.length;
  }

  setTimeout(earthTypeEffect, earthDelete ? 70 : 120);
}

earthTypeEffect();

// Education Typing Animation
const eduWords = [
  "Bachelor of Technology",
  "Secondary Education",
  "Primary Education"
];

let edw = 0;
let edx = 0;
let eduCurrent = "";
let eduDelete = false;

function eduTypeEffect() {
  eduCurrent = eduWords[edw];
  const el = document.getElementById("eduTyped");
  if (!el) return;

  if (eduDelete) {
    el.textContent = eduCurrent.substring(0, edx--);
  } else {
    el.textContent = eduCurrent.substring(0, edx++);
  }

  if (!eduDelete && edx === eduCurrent.length + 1) {
    eduDelete = true;
    setTimeout(eduTypeEffect, 1000);
    return;
  }

  if (eduDelete && edx === 0) {
    eduDelete = false;
    edw = (edw + 1) % eduWords.length;
  }

  setTimeout(eduTypeEffect, eduDelete ? 70 : 120);
}

eduTypeEffect();

// Scroll Animation for Timeline
const observerOptions = {
  threshold: 0.2
};

const eduObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
}, observerOptions);

document.querySelectorAll('.edu-timeline-item').forEach(item => {
  eduObserver.observe(item);
});


// Lightbox Logic
function openLightbox(src) {
  const modal = document.getElementById("imageLightbox");
  const lightboxImg = document.getElementById("lightboxImg");
  
  modal.style.display = "block";
  lightboxImg.src = src;
  
  // Disable scrolling when lightbox is open
  document.body.style.overflow = "hidden";
}

function closeLightbox() {
  const modal = document.getElementById("imageLightbox");
  modal.style.display = "none";
  
  // Re-enable scrolling
  document.body.style.overflow = "auto";
}

// Close on 'Esc' key
window.addEventListener('keydown', (e) => {
  if (e.key === "Escape") {
    closeLightbox();
  }
});



// Certificate Typing Animation
const certificateWords = [
  "Web Development",
  "Java Programming",
  "DSA Skills",
  "Creative Design"
];

let cw = 0;
let cx = 0;
let certificateCurrent = "";
let certificateDelete = false;

function certificateTypeEffect(){

  certificateCurrent = certificateWords[cw];

  if(certificateDelete){
    document.getElementById("certificateTyped").textContent =
    certificateCurrent.substring(0, cx--);
  }else{
    document.getElementById("certificateTyped").textContent =
    certificateCurrent.substring(0, cx++);
  }

  if(!certificateDelete && cx === certificateCurrent.length + 1){
    certificateDelete = true;
    setTimeout(certificateTypeEffect,1000);
    return;
  }

  if(certificateDelete && cx === 0){
    certificateDelete = false;
    cw++;
    if(cw === certificateWords.length) cw = 0;
  }

  setTimeout(certificateTypeEffect, certificateDelete ? 70 : 120);
}

certificateTypeEffect();

// Certificate Modal Functions
function openAllCertificates() {
  const modal = document.getElementById("allCertificatesModal");
  if (modal) {
    modal.style.display = "block";
    document.body.style.overflow = "hidden"; // Disable scrolling
  }
}

function closeAllCertificates() {
  const modal = document.getElementById("allCertificatesModal");
  if (modal) {
    modal.style.display = "none";
    document.body.style.overflow = "auto"; // Re-enable scrolling
  }
}

// Close All Certs on 'Esc' key
window.addEventListener('keydown', (e) => {
  if (e.key === "Escape") {
    closeAllCertificates();
  }
});
