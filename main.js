document.addEventListener('DOMContentLoaded', () => {
  // Smooth scrolling for the inquiry button
  const inquiryBtn = document.querySelector('.btn-inquiry');
  const targetSection = document.querySelector('#partnership-form');

  if (inquiryBtn && targetSection) {
    inquiryBtn.addEventListener('click', (e) => {
      e.preventDefault();
      targetSection.scrollIntoView({
        behavior: 'smooth'
      });
    });
  }

  // Optional: Header background change on scroll
  const header = document.querySelector('header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.style.backgroundColor = 'rgba(51, 51, 51, 0.95)';
    } else {
      header.style.backgroundColor = '#333';
    }
  });
});
