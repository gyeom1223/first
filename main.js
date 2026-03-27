const jobData = {
  "의사": {
    "desc": "환자의 질병을 진단하고 치료하며, 건강 증진을 위해 연구하는 의료 전문가입니다.",
    "dept": "의예과, 의학과, 의학전문대학원",
    "skills": "책임감, 전문 의료 지식, 생명 존중, 판단력",
    "certs": "의사 면허 (보건복지부), 전문의 자격 (해당 전공), 응급처치 강사 자격",
    "facts": "국내에서 의사가 되기 위해서는 의과대학(6년) 또는 의학전문대학원을 졸업하고 국가고시에 합격해야 합니다."
  },
  "치과의사": {
    "desc": "치아 및 구강 조직의 질병을 진단하고 치료하며, 구강 건강 증진을 위한 예방 처치를 수행합니다.",
    "dept": "치의예과, 치의학과, 치의학전문대학원",
    "skills": "정교한 손기술, 집중력, 환자 공감 능력, 전문 의학 지식",
    "certs": "치과의사 면허 (보건복지부), 전문의 자격 (교정, 구강악안면외과 등)",
    "facts": "치과대학(6년) 졸업 후 국가고시에 합격해야 면허를 받을 수 있습니다."
  },
  "간호사": {
    "desc": "환자의 건강 회복을 돕고 의료진을 보조하며 전문적인 간호 서비스를 제공합니다.",
    "dept": "간호학과, 간호과학과",
    "skills": "봉사 정신, 꼼꼼함, 의료 지식, 체력, 소통 능력",
    "certs": "간호사 면허 (보건복지부), 전문간호사 자격",
    "facts": "간호대학 졸업 후 간호사 국가시험에 합격해야 면허 취득이 가능합니다."
  },
  "영양사": {
    "desc": "개인이나 단체의 건강을 위해 영양 균형이 잡힌 식단을 계획하고 관리하는 전문가입니다.",
    "dept": "식품영양학과, 식품공학과",
    "skills": "식품 지식, 꼼꼼함, 분석 능력, 위생 관념",
    "certs": "영양사 면허, 임상영양사 자격, 위생사, 식품기사",
    "facts": "관련 학과 졸업 후 영양사 국가고시에 합격해야 면허를 취득할 수 있습니다."
  },
  "물리치료사": {
    "desc": "신체적 장애가 있는 환자의 운동 기능 회복과 통증 완화를 돕는 재활 전문가입니다.",
    "dept": "물리치료학과, 재활학과",
    "skills": "의학 지식, 체력, 인내심, 공감 능력",
    "certs": "물리치료사 면허, 도수치료 관련 수료증",
    "facts": "물리치료학 전공 후 국가시험에 합격해야 하며, 병원 및 스포츠 센터에서 활동합니다."
  },
  "방사선사": {
    "desc": "X-ray, MRI, CT 등 방사선 장비를 사용하여 질병 진단을 위한 영상 정보를 얻거나 치료를 수행합니다.",
    "dept": "방사선학과",
    "skills": "기기 조작 능력, 의학 지식, 세심함, 환자 응대",
    "certs": "방사선사 면허 (보건복지부)",
    "facts": "방사선학 전공 후 국가고시에 합격해야 면허를 취득할 수 있습니다."
  },
  "임상심리사": {
    "desc": "심리적 장애를 진단하고 심리치료를 통해 정신 건강 회복을 돕는 전문가입니다.",
    "dept": "심리학과, 교육심리학과",
    "skills": "공감 능력, 분석적 사고, 상담 기술, 인내심",
    "certs": "임상심리사 1급/2급, 정신건강임상심리사",
    "facts": "국가전문자격과 보건복지부 자격으로 나뉘며 수련 과정이 필수입니다."
  },
  "인공지능 전문가": {
    "desc": "기계가 인간처럼 학습하고 판단할 수 있도록 알고리즘과 모델을 설계하고 개발합니다.",
    "dept": "인공지능학과, 컴퓨터공학과, 데이터사이언스학과",
    "skills": "수학적 사고, 알고리즘, Python 프로그래밍, 딥러닝",
    "certs": "빅데이터분석기사, 정보처리기사, Tensorflow Certificate",
    "facts": "최신 논문 분석과 수학적 기초(선형대수, 미적분)가 매우 중요한 분야입니다."
  },
  "데이터 과학자": {
    "desc": "대량의 데이터를 분석하여 통계적 모델을 만들고 인사이트를 도출합니다.",
    "dept": "통계학과, 데이터사이언스학과, 수학과",
    "skills": "통계학, 머신러닝, Python/R 프로그래밍, 분석적 사고",
    "certs": "데이터분석기사 (ADsP/ADP), SQLD/SQLP",
    "facts": "수학적 지식뿐만 아니라 비즈니스 도메인에 대한 깊은 이해가 필수적입니다."
  },
  "정보보안 전문가": {
    "desc": "사이버 공격으로부터 시스템과 데이터를 보호하기 위한 보안 전략을 수립합니다.",
    "dept": "정보보안학과, 사이버국방학과, 컴퓨터공학과",
    "skills": "보안 지식, 분석력, 네트워크 이해도, 도덕성",
    "certs": "정보보안기사, CISSP, CISA",
    "facts": "화이트 해커라고도 불리며, 기업 자산 보호의 핵심 역할을 수행합니다."
  },
  "클라우드 엔지니어": {
    "desc": "IT 인프라를 클라우드 환경(AWS, Azure 등)으로 설계, 구축 및 운영합니다.",
    "dept": "컴퓨터공학과, 소프트웨어학과",
    "skills": "네트워크 지식, 가상화 기술, 리눅스 서버 관리",
    "certs": "AWS Solutions Architect, 정보처리기사",
    "facts": "최근 기업들의 클라우드 전환 가속화로 인해 수요가 매우 높습니다."
  },
  "게임 개발자": {
    "desc": "게임 로직을 설계하고 프로그래밍 언어를 사용하여 게임을 제작합니다.",
    "dept": "게임공학과, 컴퓨터공학과",
    "skills": "수학적 사고, C++/C#/Unity/Unreal 엔진 숙련도",
    "certs": "게임국가기술자격, 정보처리기사",
    "facts": "단순 코딩을 넘어 물리, 그래픽스 등에 대한 깊은 이해가 필요합니다."
  },
  "웹툰 작가": {
    "desc": "인터넷 플랫폼에 연재되는 만화를 기획하고 작화하며 이야기를 창작합니다.",
    "dept": "만화애니메이션학과, 영상디자인학과",
    "skills": "스토리텔링, 드로잉 실력, 연출 능력, 인내심",
    "certs": "포트폴리오와 연재 경험이 가장 중요",
    "facts": "최근에는 웹툰 에이전시 시스템이 활성화되어 협업이 많아지는 추세입니다."
  },
  "영상 편집자": {
    "desc": "영상 소스를 컷 편집하고 자막, CG, 사운드를 입혀 완성도 있는 영상을 만듭니다.",
    "dept": "영상편집학과, 신문방송학과",
    "skills": "Premiere Pro/After Effects 숙련도, 연출 감각",
    "certs": "멀티미디어콘텐츠제작전문가, Adobe Certified",
    "facts": "유튜브와 숏폼 콘텐츠의 성장으로 프리랜서 시장이 매우 활발합니다."
  },
  "콘텐츠 크리에이터": {
    "desc": "다양한 미디어를 통해 자신만의 콘텐츠를 기획/제작하여 대중과 소통합니다.",
    "dept": "신문방송학과, 광고홍보학과, 연극영화과",
    "skills": "기획력, 영상 편집, 스토리텔링, 소통 능력",
    "certs": "영상 및 멀티미디어 관련 민간 자격",
    "facts": "플랫폼 수익 외에도 광고, 제휴 등 수익 모델이 다양해지고 있습니다."
  },
  "수의사": {
    "desc": "동물의 질병을 예방, 진단, 치료하며 공중보건 향상에 기여합니다.",
    "dept": "수의예과, 수의학과",
    "skills": "동물에 대한 애정, 정교한 손기술, 전문 지식",
    "certs": "수의사 면허 (농림축산식품부)",
    "facts": "수의과대학(6년) 졸업 후 국가고시에 합격해야 합니다."
  },
  "약사": {
    "desc": "의약품을 조제하고 복약 지도를 하며 약물을 관리합니다.",
    "dept": "약학과, 제약학과",
    "skills": "약학 지식, 꼼꼼함, 책임감, 소통 능력",
    "certs": "약사 면허 (보건복지부)",
    "facts": "약학대학 졸업 후 약사 국가시험에 합격해야 합니다."
  },
  "대학교수": {
    "desc": "전공 분야를 연구하며 대학에서 학생들을 가르치고 지도합니다.",
    "dept": "해당 분야 전공 (박사 학위 필수)",
    "skills": "연구 능력, 강의 능력, 학술적 통찰력",
    "certs": "박사 학위, 학술지 논문 게재 실적",
    "facts": "지속적인 연구 성과(논문)가 임용 및 승진의 핵심 지표입니다."
  },
  "관세사": {
    "desc": "수출입 물품의 통관 절차를 대행하고 관세법 관련 자문을 제공합니다.",
    "dept": "무역학과, 경영학과, 법학과",
    "skills": "법규 이해도, 무역 지식, 꼼꼼함",
    "certs": "관세사 자격 (관세청)",
    "facts": "매년 소수 인원만 선발하는 고난도 국가전문자격 시험을 통과해야 합니다."
  },
  "변호사": {
    "desc": "법률적 자문을 제공하고 의뢰인을 대리하여 소송을 진행합니다.",
    "dept": "법학전문대학원(로스쿨)",
    "skills": "법률 지식, 논리적 설득력, 공정함",
    "certs": "변호사 자격 (법무부)",
    "facts": "로스쿨 졸업 후 변호사 시험에 합격해야 자격을 취득합니다."
  },
  "항공정비사": {
    "desc": "항공기의 안전 운항을 위해 기체를 점검하고 수리합니다.",
    "dept": "항공정비학과, 기계공학과",
    "skills": "정교한 손기술, 기계 이해력, 책임감",
    "certs": "항공정비사 면허, 항공산업기사",
    "facts": "항공기 안전과 직결되어 매우 엄격한 규정에 따라 작업합니다."
  }
};

document.addEventListener('DOMContentLoaded', () => {
  const cards = document.querySelectorAll('.card');
  const modal = document.getElementById('jobModal');
  const modalTitle = document.getElementById('modal-title');
  const modalBody = document.getElementById('modal-body');
  const closeModal = document.querySelector('.close-modal');
  const jobSearch = document.getElementById('jobSearch');
  const backToTop = document.getElementById('backToTop');

  // Helper: Normalize title for data matching (removes spaces)
  const getNormalizedTitle = (text) => text.replace(/\s+/g, '').trim();

  // Generate Navigation Dropdowns
  const navLinks = document.querySelectorAll('.nav-link');
  navLinks.forEach(link => {
    const targetId = link.getAttribute('href').substring(1);
    const section = document.getElementById(targetId);
    
    if (section) {
      const jobCards = section.querySelectorAll('.card h2');
      if (jobCards.length > 0) {
        const dropdown = document.createElement('div');
        dropdown.className = 'nav-dropdown';
        const list = document.createElement('ul');
        
        jobCards.forEach(h2 => {
          const li = document.createElement('li');
          li.innerText = h2.innerText;
          
          li.addEventListener('click', (e) => {
            e.stopPropagation();
            e.preventDefault();
            
            const targetCard = Array.from(section.querySelectorAll('.card')).find(c => 
              getNormalizedTitle(c.querySelector('h2').innerText) === getNormalizedTitle(h2.innerText)
            );
            
            if (targetCard) {
              const offset = 180;
              const bodyRect = document.body.getBoundingClientRect().top;
              const elementRect = targetCard.getBoundingClientRect().top;
              const elementPosition = elementRect - bodyRect;
              const offsetPosition = elementPosition - offset;

              window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
              setTimeout(() => { targetCard.click(); }, 600);
            }
          });
          list.appendChild(li);
        });
        
        dropdown.appendChild(list);
        link.appendChild(dropdown);
      }
    }
  });

  // Modal Open Logic
  const openModal = (title) => {
    const originalTitle = title.trim();
    const normalizedTarget = getNormalizedTitle(originalTitle);
    
    // Find data using normalized key
    const dataKey = Object.keys(jobData).find(key => getNormalizedTitle(key) === normalizedTarget);
    const data = dataKey ? jobData[dataKey] : null;

    modalTitle.innerText = originalTitle;
    
    if (data) {
      modalBody.innerHTML = `
        <div class="dept-box">
          <h4 style="color: #2b6cb0; margin-bottom: 10px;"><i class="fas fa-university"></i> 진학 필요 학과</h4>
          <p>${data.dept}</p>
        </div>
        <div class="modal-info-item">
          <h4><i class="fas fa-info-circle"></i> 직업 설명</h4>
          <p>${data.desc}</p>
        </div>
        <div class="modal-info-item">
          <h4><i class="fas fa-star"></i> 주요 역량</h4>
          <p>${data.skills}</p>
        </div>
        <div class="modal-info-item certs-box">
          <h4 style="color: #2f855a;"><i class="fas fa-certificate"></i> 관련 자격증</h4>
          <p>${data.certs}</p>
        </div>
        <div class="modal-info-item">
          <h4><i class="fas fa-check-double"></i> 확인된 사실</h4>
          <p>${data.facts}</p>
        </div>
      `;
    } else {
      modalBody.innerHTML = `
        <div class="modal-info-item" style="text-align: center; padding: 40px 0;">
          <i class="fas fa-clock" style="font-size: 3rem; color: #cbd5e0; margin-bottom: 20px; display: block;"></i>
          <p style="font-size: 1.1rem; color: #718096;">해당 직업('${originalTitle}')의 상세 정보는 현재 업데이트 중입니다.</p>
        </div>
      `;
    }

    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';

    // Disqus Update
    if (window.DISQUS) {
      DISQUS.reset({
        reload: true,
        config: function () {
          this.page.identifier = 'job-' + normalizedTarget;
          this.page.url = window.location.href.split('#')[0] + '#!job-' + normalizedTarget;
          this.page.title = originalTitle;
        }
      });
    }
  };

  cards.forEach(card => {
    card.addEventListener('click', () => {
      const title = card.querySelector('h2').innerText;
      openModal(title);
    });
  });

  const closeJobModal = () => {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
  };

  closeModal.addEventListener('click', closeJobModal);
  window.addEventListener('click', (e) => { if (e.target == modal) closeJobModal(); });
  window.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeJobModal(); });

  // Search & Scroll Logic (remains same)
  if (jobSearch) {
    jobSearch.addEventListener('input', (e) => {
      const term = e.target.value.toLowerCase().trim();
      cards.forEach(card => {
        const jobName = card.querySelector('h2').innerText.toLowerCase();
        card.style.display = jobName.includes(term) ? 'flex' : 'none';
      });
    });
  }

  if (backToTop) {
    window.addEventListener('scroll', () => {
      backToTop.style.display = window.pageYOffset > 300 ? 'flex' : 'none';
    });
    backToTop.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
});
