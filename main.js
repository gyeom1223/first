const jobData = {
  "의사": {
    "desc": "환자의 질병을 진단하고 치료하며, 건강 증진을 위해 연구하는 의료 전문가입니다.",
    "dept": "의예과, 의학과, 의학전문대학원",
    "skills": "책임감, 전문 의료 지식, 생명 존중, 판단력",
    "certs": "의사 면허 (보건복지부), 전문의 자격 (해당 전공), 응급처치 강사 자격",
    "facts": "국내에서 의사가 되기 위해서는 의과대학(6년) 또는 의학전문대학원을 졸업하고 국가고시에 합격해야 합니다."
  },
  "간호사": {
    "desc": "환자의 건강 회복을 돕고 의료진을 보조하며 전문적인 간호 서비스를 제공합니다.",
    "dept": "간호학과, 간호과학과",
    "skills": "봉사 정신, 꼼꼼함, 의료 지식, 체력, 소통 능력",
    "certs": "간호사 면허 (보건복지부), 보건교사 자격, 전문간호사 자격(마취, 응급 등)",
    "facts": "간호대학을 졸업하고 간호사 국가시험에 합격해야 면허를 취득할 수 있습니다."
  },
  "프로그래머": {
    "desc": "컴퓨터 언어를 사용하여 소프트웨어, 애플리케이션, 시스템을 설계하고 개발합니다.",
    "dept": "컴퓨터공학과, 소프트웨어학과, 정보통신공학과",
    "skills": "문제 해결 능력, 논리적 사고, 프로그래밍 언어 이해, 협업 능력",
    "certs": "정보처리기사, 정보보안기사, AWS Certified Solutions Architect, OCP",
    "facts": "최근에는 학벌보다 실무 역량(포트폴리오, 코딩 테스트)이 채용의 핵심 지표로 작용합니다."
  },
  "데이터 과학자": {
    "desc": "대량의 데이터를 분석하여 통계적 모델을 만들고 비즈니스 인사이트를 도출합니다.",
    "dept": "통계학과, 데이터사이언스학과, 수학과, 산업공학과",
    "skills": "통계학, 머신러닝, Python/R 프로그래밍, 분석적 사고",
    "certs": "데이터분석기사 (ADsP/ADP), SQLD/SQLP, Google Data Analytics Professional",
    "facts": "수학적 지식뿐만 아니라 해당 도메인(비즈니스 분야)에 대한 깊은 이해가 필수적입니다."
  },
  "요리사": {
    "desc": "다양한 식재료를 사용하여 음식을 만들고 새로운 레시피를 개발하며 주방을 관리합니다.",
    "dept": "호텔조리학과, 식품영양학과, 외식경영학과",
    "skills": "창의력, 미각, 체력, 위생 관리, 팀워크",
    "certs": "조리기능사(한식/양식/일식 등), 조리산업기사, 조리기능장, 위생사",
    "facts": "호텔이나 전문 식당 취업 시 국가기술자격증인 조리기능사 자격이 기본 요건인 경우가 많습니다."
  },
  "회계사": {
    "desc": "개인이나 기업의 재무 상태를 점검하고 회계 관련 자문 및 감사 업무를 수행합니다.",
    "dept": "경영학과, 회계학과, 경제학과",
    "skills": "수리 능력, 꼼꼼함, 도덕성, 분석적 사고",
    "certs": "공인회계사(KICPA), 미국공인회계사(AICPA), 세무사(CTA)",
    "facts": "금융감독원에서 시행하는 공인회계사 시험에 합격해야 하며, 매우 높은 전문성을 요구합니다."
  },
  "변호사": {
    "desc": "법률적 자문을 제공하고 의뢰인을 대리하여 소송 및 법적 절차를 진행합니다.",
    "dept": "법학전문대학원(로스쿨), 법학과(학부)",
    "skills": "법률 지식, 논리적 설득력, 공정함, 문해력",
    "certs": "변호사 자격 (법무부), 변리사(자동취득 또는 교육), 공인노무사(관련 업무)",
    "facts": "법학전문대학원(로스쿨)을 졸업하고 변호사 시험에 합격해야 자격을 취득할 수 있습니다."
  },
  "공인중개사": {
    "desc": "부동산 매매, 임대차 등을 중개하고 관련 법률 및 시장 정보를 제공합니다.",
    "dept": "부동산학과, 도시계획학과, 법학과",
    "skills": "소통 능력, 부동산 법률 지식, 영업력, 정직함",
    "certs": "공인중개사, 주택관리사, 감정평가사",
    "facts": "응시 제한이 없어 많은 사람들이 도전하지만, 합격률이 높지 않은 국가전문자격 시험입니다."
  },
  "사회복지사": {
    "desc": "사회적 약자의 문제를 진단하고 돕기 위해 복지 서비스를 기획하고 실행합니다.",
    "dept": "사회복지학과, 아동복지학과, 노인복지학과",
    "skills": "봉사 정신, 상담 능력, 인내심, 행정 능력",
    "certs": "사회복지사 1급/2급, 청소년상담사, 요양보호사",
    "facts": "복지관, 병원, 학교, 공공기관 등 매우 넓은 분야에서 활동할 수 있습니다."
  },
  "영양사": {
    "desc": "개인이나 단체의 건강을 위해 영양 균형이 잡힌 식단을 계획하고 관리합니다.",
    "dept": "식품영양학과, 식품공학과",
    "skills": "식품 지식, 꼼꼼함, 분석 능력, 위생 관념",
    "certs": "영양사 면허, 임상영양사 자격, 위생사, 식품기사",
    "facts": "식품학 또는 영양학 전공자로서 국가고시에 합격해야 면허를 받을 수 있습니다."
  },
  "물리치료사": {
    "desc": "신체적 장애가 있는 환자의 운동 기능 회복과 통증 완화를 돕는 재활 전문가입니다.",
    "dept": "물리치료학과, 재활학과",
    "skills": "의학 지식, 체력, 인내심, 공감 능력",
    "certs": "물리치료사 면허, 도수치료 관련 수료증, 스포츠테이핑 자격",
    "facts": "물리치료학 전공 후 국가시험에 합격해야 하며, 병원뿐만 아니라 스포츠 팀 등에서도 활동합니다."
  },
  "수의사": {
    "desc": "동물의 질병을 예방, 진단, 치료하며 공중보건 향상에 기여합니다.",
    "dept": "수의예과, 수의학과",
    "skills": "동물에 대한 애정, 정교한 손기술, 전문 지식, 관찰력",
    "certs": "수의사 면허, 축산기사, 인공수정사",
    "facts": "수의과대학(6년) 졸업 후 국가고시에 합격해야 합니다. 반려동물뿐만 아니라 검역, 연구 분야도 포함됩니다."
  },
  "약사": {
    "desc": "의약품을 조제하고 복약 지도를 하며, 약물의 상호작용과 부작용을 관리합니다.",
    "dept": "약학과, 제약학과",
    "skills": "약학 지식, 꼼꼼함, 책임감, 소통 능력",
    "certs": "약사 면허, 한약조제자격, 식품기사",
    "facts": "약학대학을 졸업하고 약사 국가시험에 합격해야 합니다. 2022년부터 6년제 통합과정으로 전환되었습니다."
  },
  "정보보안전문가": {
    "desc": "사이버 공격으로부터 시스템과 데이터를 보호하기 위해 보안 전략을 수립하고 대응합니다.",
    "dept": "정보보안학과, 사이버국방학과, 컴퓨터공학과",
    "skills": "보안 지식, 분석력, 네트워크 이해도, 도덕성",
    "certs": "정보보안기사, CISSP, CISA, 네트워크관리사",
    "facts": "화이트 해커라고도 불리며, 최근 기업의 데이터 보호 중요성이 커짐에 따라 수요가 급증하고 있습니다."
  },
  "인공지능전문가": {
    "desc": "기계가 인간처럼 학습하고 판단할 수 있도록 알고리즘과 모델을 설계하고 개발합니다.",
    "dept": "인공지능학과, 소프트웨어학과, 데이터사이언스학과",
    "skills": "수학적 사고, 알고리즘, Python 프로그래밍, 딥러닝/머신러닝",
    "certs": "빅데이터분석기사, 정보처리기사, Tensorflow Developer Certificate",
    "facts": "최신 논문을 읽고 적용하는 연구 역량이 중요하며, 수학적 기초(선형대수, 미적분 등)가 필수입니다."
  },
  "교사": {
    "desc": "학생들에게 지식을 전달하고 올바른 인격 형성을 돕는 교육 전문가입니다.",
    "dept": "교육학과, 초등교육과, 각 교과교육과(국어교육 등)",
    "skills": "의사소통 능력, 인내심, 지도력, 해당 교과 지식",
    "certs": "정교사 자격증 (1급/2급), 평생교육사, 청소년지도사",
    "facts": "국공립 학교 교사가 되기 위해서는 임용후보자 선정경쟁시험(임용고시)에 합격해야 합니다."
  },
  "직업상담사": {
    "desc": "구직자에게 적합한 직업을 추천하고 취업을 위한 상담과 교육을 제공합니다.",
    "dept": "심리학과, 사회복지학과, 교육학과",
    "skills": "상담 기술, 정보 수집력, 공감 능력, 직업 시장 분석력",
    "certs": "직업상담사 1급/2급, 사회복지사, 청소년상담사",
    "facts": "고용노동부 워크넷이나 시/군/구 일자리 센터 등에서 주로 근무합니다."
  },
  "경찰": {
    "desc": "국민의 생명과 재산을 보호하고 범죄 수사 및 공공의 안녕을 유지합니다.",
    "dept": "경찰행정학과, 법학과, 행정학과",
    "skills": "정의감, 체력, 신속한 판단력, 인권 의식",
    "certs": "경찰공무원 합격, 무도 자격증(유도/태권도 등), 대형면허",
    "facts": "경찰공무원 시험에는 필기뿐만 아니라 체력 검사와 인적성 검사 비중이 큽니다."
  },
  "소방관": {
    "desc": "화재 진압, 인명 구조, 구급 활동을 통해 재난으로부터 시민을 보호합니다.",
    "dept": "소방방재학과, 응급구조학과, 소방행정학과",
    "skills": "용기, 강인한 체력, 사명감, 침착함",
    "certs": "소방공무원 합격, 응급구조사, 소방설비기사",
    "facts": "화재 진압 외에도 생활 안전 구조(벌집 제거 등)와 같은 다양한 업무를 수행합니다."
  },
  "건축가": {
    "desc": "건축물의 목적과 디자인을 고려하여 설계를 진행하고 시공 과정을 감리합니다.",
    "dept": "건축학과(5년제), 건축공학과",
    "skills": "공간 지각력, 미적 감각, 설계 소프트웨어(AutoCAD, Revit) 숙련도",
    "certs": "건축사, 건축기사, 실내건축기사",
    "facts": "국내에서 '건축사' 명칭을 쓰려면 건축사 자격시험에 합격하고 면허를 취득해야 합니다."
  },
  "시각디자이너": {
    "desc": "이미지, 텍스트, 색채 등을 사용하여 정보를 시각적으로 전달하고 브랜드 가치를 창출합니다.",
    "dept": "시각디자인학과, 산업디자인학과, 매체디자인과",
    "skills": "창의력, 색채 감각, 디자인 툴(Adobe CC) 활용 능력, 트렌드 파악",
    "certs": "시각디자인기사, 컴퓨터그래픽스운용기능사, GTQ 1급, 컬러리스트기사",
    "facts": "포트폴리오가 취업의 가장 중요한 요소이며, 실무 능력을 증명하는 것이 핵심입니다."
  },
  "패션디자이너": {
    "desc": "의류, 신발, 액세서리 등의 새로운 디자인을 기획하고 제작 공정을 관리합니다.",
    "dept": "의류학과, 패션디자인학과",
    "skills": "미적 감각, 소재 이해도, 드로잉 실력, 패션 시장 분석력",
    "certs": "패션디자인산업기사, 의류기사, 양장기능사, 컬러리스트기사",
    "facts": "시즌보다 앞서 트렌드를 예측해야 하며, 창의성뿐만 아니라 상업적인 감각도 요구됩니다."
  },
  "기상통보관": {
    "desc": "기상 관측 자료를 분석하여 날씨를 예측하고 이를 대중에게 전달합니다.",
    "dept": "대기과학과, 천문기상학과, 지구과학과",
    "skills": "기상학 지식, 데이터 분석 능력, 전달력, 위기 대응 능력",
    "certs": "기상예보사, 기상기사, 기상감정기사",
    "facts": "기상청뿐만 아니라 방송사, 민간 기상 업체 등에서 활동하며 기상 기사 자격증이 필수적인 경우가 많습니다."
  },
  "산림학자": {
    "desc": "산림 자원을 보존하고 효율적으로 관리하기 위한 연구와 기술 개발을 수행합니다.",
    "dept": "산림자원학과, 임산공학과",
    "skills": "자연 과학 지식, 분석력, 현장 활동력, 환경 의식",
    "certs": "산림기사, 산림경영기술자, 수목진단사, 식물보호기사",
    "facts": "기후 변화 대응과 탄소 중립이 중요해지면서 산림 자원 관리의 가치가 더욱 높아지고 있습니다."
  },
  "산업안전관리원": {
    "desc": "산업 현장의 유해/위험 요인을 점검하고 사고 예방을 위한 안전 대책을 수립합니다.",
    "dept": "안전공학과, 산업공학과",
    "skills": "안전 관련 법규 이해, 관찰력, 소통 능력, 책임감",
    "certs": "산업안전기사, 건설안전기사, 산업위생관리기사, 위험물산업기사",
    "facts": "일정 규모 이상의 사업장에는 반드시 산업안전보건법에 따라 안전관리자를 선임해야 합니다."
  },
  "네트워크엔지니어": {
    "desc": "컴퓨터 네트워크 시스템을 설계, 구축, 운영하며 원활한 통신 환경을 유지합니다.",
    "dept": "정보통신공학과, 컴퓨터공학과",
    "skills": "네트워크 프로토콜 이해, 라우팅/스위칭, 보안 지식, 문제 해결 능력",
    "certs": "CCNA/CCNP, 네트워크관리사, 정보처리기사, 무선설비기사",
    "facts": "기업의 클라우드 전환이 가속화되면서 클라우드 네트워크 기술 역량이 중요해지고 있습니다."
  },
  "파일럿": {
    "desc": "항공기를 조종하여 승객과 화물을 목적지까지 안전하게 운송합니다.",
    "dept": "항공운항학과",
    "skills": "집중력, 신속한 판단력, 영어 소통 능력, 강인한 체력",
    "certs": "사업용 조종사 자격증(CPL), 운송용 조종사 자격증(ATPL), 무선통신사, 항공영어구술능력(EPTA)",
    "facts": "매우 엄격한 신체검사 기준을 통과해야 하며, 정기적으로 비행 기량과 신체 상태를 점검받아야 합니다."
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

  // Search Logic
  jobSearch.addEventListener('input', (e) => {
    const term = e.target.value.toLowerCase().trim();
    const sections = document.querySelectorAll('.category-section');
    let hasResults = false;
    
    cards.forEach(card => {
      const jobName = card.querySelector('h2').innerText.toLowerCase();
      const jobDesc = card.querySelector('p').innerText.toLowerCase();
      
      if (jobName.includes(term) || jobDesc.includes(term)) {
        card.style.display = 'flex';
        hasResults = true;
      } else {
        card.style.display = 'none';
      }
    });

    sections.forEach(section => {
      const visibleCards = section.querySelectorAll('.card[style*="display: flex"]');
      section.style.display = visibleCards.length > 0 ? 'block' : 'none';
    });

    let noResultsMsg = document.getElementById('noResults');
    if (!hasResults && term !== "") {
      if (!noResultsMsg) {
        noResultsMsg = document.createElement('div');
        noResultsMsg.id = 'noResults';
        noResultsMsg.style.textAlign = 'center';
        noResultsMsg.style.padding = '50px';
        noResultsMsg.style.color = '#718096';
        noResultsMsg.innerHTML = `<i class="fas fa-search" style="font-size: 2rem; margin-bottom: 15px; display: block;"></i> <p>'${e.target.value}'에 대한 검색 결과가 없습니다.</p>`;
        document.querySelector('main').appendChild(noResultsMsg);
      }
    } else if (noResultsMsg) {
      noResultsMsg.remove();
    }
  });

  // Back to Top Logic
  window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
      backToTop.style.display = 'flex';
    } else {
      backToTop.style.display = 'none';
    }
  });

  backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  // Navigation Active Logic
  const navLinks = document.querySelectorAll('.nav-link');
  window.addEventListener('scroll', () => {
    let current = '';
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
      if (pageYOffset >= (section.offsetTop - 150)) {
        current = section.getAttribute('id');
      }
    });
    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href').includes(current)) link.classList.add('active');
    });
  });

  // Modal Open with Disqus Reset
  cards.forEach(card => {
    card.addEventListener('click', () => {
      const title = card.querySelector('h2').innerText;
      const data = jobData[title];

      if (data) {
        modalTitle.innerText = title;
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
      }

      modal.style.display = 'flex';
      document.body.style.overflow = 'hidden';

      // Disqus Reset Logic
      if (window.DISQUS) {
        DISQUS.reset({
          reload: true,
          config: function () {
            this.page.identifier = 'job-' + title.replace(/\s+/g, '-');
            this.page.url = window.location.href.split('#')[0] + '#!' + encodeURIComponent(title);
            this.page.title = title;
          }
        });
      }
    });
  });

  const closeJobModal = () => {
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
  };

  closeModal.addEventListener('click', closeJobModal);
  window.addEventListener('click', (e) => { if (e.target == modal) closeJobModal(); });
  window.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeJobModal(); });
});
