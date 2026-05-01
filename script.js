/* =========================================
   SCRIPT.JS — Guilherme Sites Portfólio
========================================= */



// ---- HEADER SCROLL ----
const header = document.getElementById('header');
window.addEventListener('scroll', () => {
  header.classList.toggle('scrolled', window.scrollY > 60);
}, { passive: true });

// ---- MOBILE MENU ----
const menuToggle = document.getElementById('menuToggle');
const mobileNav  = document.getElementById('mobileNav');

menuToggle?.addEventListener('click', () => {
  mobileNav.classList.toggle('open');
});

mobileNav?.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => mobileNav.classList.remove('open'));
});

// ---- SCROLL REVEAL ----
const revealEls = document.querySelectorAll('.reveal');

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => entry.target.classList.add('visible'), i * 60);
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

revealEls.forEach(el => observer.observe(el));

// ---- STAGGER NOS PROJETOS ----
document.querySelectorAll('.project-item').forEach((item, i) => {
  item.style.transitionDelay = `${i * 0.08}s`;
});

// ---- STAGGER NOS TRABALHO ITEMS ----
document.querySelectorAll('.trabalho-item').forEach((item, i) => {
  item.style.transitionDelay = `${i * 0.06}s`;
});

// ---- SMOOTH SCROLL ----
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', (e) => {
    const target = document.querySelector(anchor.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

// ---- EFEITO BRILHO NOS CARDS DE PROJETO ----
document.querySelectorAll('.project-item, .price-card, .trabalho-item').forEach(card => {
  card.addEventListener('mousemove', e => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    card.style.backgroundImage = `radial-gradient(circle at ${x}px ${y}px, rgba(100,255,218,0.04), transparent 60%)`;
  });
  card.addEventListener('mouseleave', () => {
    card.style.backgroundImage = '';
  });
});

// ---- TYPING EFFECT NO HERO TAG ----
const heroTag = document.querySelector('.hero-tag');
if (heroTag) {
  const original = heroTag.textContent;
  heroTag.textContent = '';
  let i = 0;
  setTimeout(() => {
    const typer = setInterval(() => {
      heroTag.textContent = original.slice(0, i);
      i++;
      if (i > original.length) clearInterval(typer);
    }, 40);
  }, 2200);
}
