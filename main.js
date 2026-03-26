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

  // Modal logic
  const modal = document.getElementById('jobModal');
  const modalContent = document.querySelector('.modal-content');
  const modalTitle = document.getElementById('modal-title');
  const modalBody = document.getElementById('modal-body');
  const closeBtn = document.querySelector('.close-modal');
  const cards = document.querySelectorAll('.card');

  cards.forEach(card => {
    card.addEventListener('click', () => {
      const title = card.querySelector('h2').innerText;
      const description = card.querySelector('p:nth-of-type(1)').innerText;
      const requirements = card.querySelector('p:nth-of-type(2)').innerHTML;
      
      modalTitle.innerText = title;
      modalBody.innerHTML = `
        <div style="margin-bottom: 20px;">
          <h3 style="color: #2d3748; font-size: 1.2rem; margin-bottom: 10px;">📌 직업 개요</h3>
          <p>${description}</p>
        </div>
        <div style="margin-bottom: 20px;">
          <h3 style="color: #2d3748; font-size: 1.2rem; margin-bottom: 10px;">🚀 주요 업무 및 역량</h3>
          <p>${requirements}</p>
        </div>
        <div style="background: #f7fafc; padding: 15px; border-radius: 10px; border-left: 4px solid #2d3748;">
          <p style="font-size: 0.9rem; margin: 0; color: #718096;">* 이 설명은 해당 직업에 대한 일반적인 정보를 바탕으로 구성되었습니다. 더 자세한 내용은 전문 커리어 상담을 통해 확인하실 수 있습니다.</p>
        </div>
      `;
      
      modal.style.display = 'flex';
      document.body.style.overflow = 'hidden';

      // Disqus reset for specific job
      if (window.DISQUS) {
        DISQUS.reset({
          reload: true,
          config: function () {
            this.page.identifier = 'job-' + title;
            this.page.url = window.location.href.split('#')[0] + '#!' + encodeURIComponent(title);
            this.page.title = title;
          }
        });
      }
    });
  });

  // Prevent closing when clicking inside modal content
  modalContent.addEventListener('click', (e) => {
    e.stopPropagation();
  });

  // Close modal function
  const closeModal = () => {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
  };

  closeBtn.addEventListener('click', closeModal);
  
  window.addEventListener('click', (e) => {
    if (e.target === modal) {
      closeModal();
    }
  });

  // Header scroll effect
  const header = document.querySelector('header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.style.backgroundColor = 'rgba(45, 55, 72, 0.95)';
    } else {
      header.style.backgroundColor = '#2d3748';
    }
  });
});
