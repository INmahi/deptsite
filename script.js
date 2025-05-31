document.addEventListener('mousemove', (e) => {
    // Move custom cursor
    const cursor = document.querySelector('.custom-cursor');
    cursor.style.left = `${e.clientX}px`;
    cursor.style.top = `${e.clientY}px`;

    // Move cursor tracking background
    const bg = document.querySelector('.cursor-bg');
    bg.style.setProperty('--x', `${e.clientX}px`);
    bg.style.setProperty('--y', `${e.clientY}px`);
});


const toggleBtn = document.getElementById('theme-toggle');
const themeIcon = document.getElementById('theme-icon');

function setThemeIcon(isLight) {
    // Animate out current icon
    themeIcon.classList.remove('icon-animate-in');
    themeIcon.classList.add('icon-animate-out');
    setTimeout(() => {
        themeIcon.className = isLight
            ? 'fas fa-sun icon-animate-in'
            : 'fas fa-moon icon-animate-in';
    }, 180);
}

if (localStorage.getItem('theme') === 'light') {
    document.body.classList.add('light-mode');
    setThemeIcon(true);
} else {
    setThemeIcon(false);
}

toggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('light-mode');
    const isLight = document.body.classList.contains('light-mode');
    setThemeIcon(isLight);
    localStorage.setItem('theme', isLight ? 'light' : 'dark');
});

// Hamburger menu with animated, centered, gradient background and close (cross) button

const hamburgerBtn = document.getElementById('hamburger-btn');
const headerNav = document.getElementById('header-nav');

// Create close (cross) button for mobile menu
let closeBtn = document.createElement('button');
closeBtn.className = 'menu-close-btn';
closeBtn.setAttribute('aria-label', 'Close menu');
closeBtn.innerHTML = '&times;';
headerNav.insertBefore(closeBtn, headerNav.firstChild);

function openMenu() {
    headerNav.classList.add('open');
    hamburgerBtn.classList.add('open');
    hamburgerBtn.setAttribute('aria-expanded', 'true');
    document.body.classList.add('menu-active');
}

function closeMenu() {
    headerNav.classList.remove('open');
    hamburgerBtn.classList.remove('open');
    hamburgerBtn.setAttribute('aria-expanded', 'false');
    document.body.classList.remove('menu-active');
}

hamburgerBtn.addEventListener('click', () => {
    if (!headerNav.classList.contains('open')) {
        openMenu();
    }
});

closeBtn.addEventListener('click', closeMenu);

// Close menu when clicking a link (mobile UX)
document.querySelectorAll('.header-link').forEach(link => {
    link.addEventListener('click', () => {
        if (window.innerWidth <= 900) {
            closeMenu();
        }
    });
});

// Optional: Close menu on ESC key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && headerNav.classList.contains('open')) {
        closeMenu();
    }
});

// Typewriter effect for moto
const motoText = "Where Numbers Speak and Futures Take Shape";
const motoElem = document.getElementById("typewriter-moto");
let motoIdx = 0;

function typeMoto() {
    if (motoElem && motoIdx <= motoText.length) {
        motoElem.textContent = motoText.slice(0, motoIdx);
        motoIdx++;
        setTimeout(typeMoto, 55);
    } else if (motoElem) {
        // Remove the blinking cursor after typing is done
        motoElem.style.borderRight = "none";
        motoElem.style.animation = "none";
    }
}
typeMoto();