document.addEventListener('DOMContentLoaded', () => {
  // Detailed data for jobs
  const jobDetails = {
    // 의료/보건
    "의사": { certs: "의사 면허증 (보건복지부)", tips: "의학 전문 지식, 공감 능력, 최신 의료 기술 습득" },
    "간호사": { certs: "간호사 면허증 (보건복지부)", tips: "의료 용어 숙지, 봉사 정신, 꼼꼼한 기록 습관" },
    "임상심리사": { certs: "임상심리사 1/2급, 정신건강임상심리사", tips: "다양한 상담 케이스 스터디, 심리학 원서 탐독" },
    "영양사": { certs: "영양사 면허증, 위생사", tips: "식단 관리 소프트웨어 활용, 식품 위생법 숙지" },
    "물리치료사": { certs: "물리치료사 면허증", tips: "인체 해부학 지식, 재활 운동 치료 기술" },
    "방사선사": { certs: "방사선사 면허증", tips: "영상 진단 기기 조작 능력, 방사선 안전 관리" },
    "수의사": { certs: "수의사 면허증 (농림축산식품부)", tips: "동물 행동학 이해, 정교한 수술 기술" },
    "약사": { certs: "약사 면허증", tips: "약학 정보 검색 능력, 복약 지도 커뮤니케이션" },
    "임상병리사": { certs: "임상병리사 면허증", tips: "검사 장비 유지보수 능력, 정밀 분석 기술" },
    "치과위생사": { certs: "치과위생사 면허증", tips: "구강 보건 교육 능력, 치과 진료 보조 숙련도" },
    "작업치료사": { certs: "작업치료사 면허증", tips: "재활 도구 제작 및 활용, 인내심과 공감" },
    "언어치료사": { certs: "언어재활사 1/2급", tips: "언어 발달 단계 지식, 상담 기술" },
    "청능사": { certs: "청능사 자격증", tips: "보청기 적합 기술, 청각 검사 장비 조작" },

    // IT/공학
    "프로그래머": { certs: "정보처리기사, AWS/Azure 클라우드 자격증", tips: "GitHub 포트폴리오 관리, 알고리즘 문제 풀이" },
    "데이터 과학자": { certs: "ADsP(데이터분석 준전문가), SQLD, ADP", tips: "Kaggle 경진대회 참여, 통계학 및 머신러닝 공부" },
    "항공정비사": { certs: "항공정비사 면허 (국토교통부)", tips: "기계 공학 기초, 영어 매뉴얼 독해 능력" },
    "환경공학자": { certs: "환경위해관리기사, 수질/대기환경기사", tips: "환경 관련 법규 숙지, 데이터 분석 툴 활용" },
    "생명공학자": { certs: "생물공학기사", tips: "실험 설계 능력, 생명 윤리 의식" },
    "에너지공학자": { certs: "에너지관리기사, 신재생에너지발전설비기사", tips: "에너지 효율화 기술 트렌드 파악" },
    "나노공학자": { certs: "정밀측정기사", tips: "미세 공정 장비 운용, 물리/화학 심화 학습" },
    "로봇공학자": { certs: "로봇기구개발기사, 로봇소프트웨어개발기사", tips: "C++/Python 프로그래밍, 전자 회로 설계" },
    "인공지능전문가": { certs: "인공지능실무능력자격(AICE)", tips: "딥러닝 프레임워크(PyTorch, TensorFlow) 숙달" },
    "정보보안전문가": { certs: "정보보안기사, CISSP, CISA", tips: "해킹 방어 대회(CTF) 참여, 최신 보안 취약점 연구" },
    "네트워크엔지니어": { certs: "CCNA/CCNP, 네트워크관리사", tips: "네트워크 토폴로지 설계 실습, 가상화 기술" },
    "시스템엔지니어": { certs: "리눅스마스터, LPIC, MCSE", tips: "서버 구축 실습, 자동화 스크립트 작성" },
    "반도체공학자": { certs: "반도체설계기사", tips: "반도체 공정 시뮬레이션 활용, 전자 물리학" },
    "자동차공학자": { certs: "자동차정비기사, 일반기계기사", tips: "전기차/자율주행 기술 연구, CAD 활용" },
    "조선공학자": { certs: "조선기사", tips: "선박 설계 소프트웨어 숙달, 유체역학 지식" },
    "항공우주공학자": { certs: "항공기사", tips: "고급 수학 및 물리, 항공 우주 트렌드 파악" },
    "원자력공학자": { certs: "원자력기사, 방사선취급감독자면허", tips: "안전 관리 규정 준수, 핵물리학 기초" },
    "토목공학자": { certs: "토목기사, 건설재료시험기사", tips: "현장 관리 경험, 구조 역학 이해" },

    // 예술/디자인/미디어
    "디자이너": { certs: "시각디자인기사, GTQ, ACP", tips: "디자인 포트폴리오(Behance), 최신 트렌드 분석" },
    "웹툰 작가": { certs: "-", tips: "스토리텔링 훈련, 클립스튜디오/포토샵 숙련" },
    "특수분장사": { certs: "메이크업국가자격증", tips: "인체 구조 해부학적 이해, 특수 재료 연구" },
    "작곡가": { certs: "-", tips: "DAW(Logic, Ableton 등) 활용, 화성학 공부" },
    "안무가": { certs: "-", tips: "다양한 장르 무용 학습, 영상 편집 능력" },
    "시각디자이너": { certs: "시각디자인기사, 컬러리스트기사", tips: "타이포그래피 지식, 브랜딩 프로젝트 경험" },
    "제품디자이너": { certs: "제품디자인기사", tips: "3D 모델링(Rhino, Keyshot), 사용자 조사 방법론" },
    "패션디자이너": { certs: "패션디자인산업기사, 의류기사", tips: "섬유 소재 지식, 패션 드로잉 훈련" },
    "인테리어디자이너": { certs: "실내건축기사", tips: "공간 지각력 개발, 인테리어 자재 트렌드 파악" },
    "무대디자이너": { certs: "무대예술전문인", tips: "무대 조명/음향 지식, 공간 스케치 능력" },
    "사진작가": { certs: "사진기능사", tips: "빛의 이해, 사진 보정 기술(Lightroom)" },
    "만화가": { certs: "-", tips: "캐릭터 설정 능력, 드로잉 기초 체력" },
    "일러스트레이터": { certs: "-", tips: "나만의 화풍 개발, SNS 홍보 역량" },
    "화가": { certs: "-", tips: "미술사 연구, 다양한 재료 실험" },
    "조각가": { certs: "-", tips: "공간감 훈련, 조형 예술 이론 학습" },
    "공예가": { certs: "공예원형기사", tips: "정교한 손기술 연습, 전통 및 현대 디자인 결합" },
    "국악인": { certs: "-", tips: "전통 가락 체득, 무대 경험 쌓기" },
    "성악가": { certs: "-", tips: "발성법 연구, 어학(이탈리아어, 독일어 등) 학습" },
    "연주가": { certs: "-", tips: "매일 꾸준한 연습, 앙상블 및 협연 경험" },
    "배우": { certs: "-", tips: "연기 워크숍 참여, 풍부한 감성 훈련" },
    "모델": { certs: "-", tips: "워킹 연습, 포즈 연구, 철저한 자기 관리" },
    "성우": { certs: "-", tips: "낭독 훈련, 다양한 캐릭터 목소리 변주" },
    "콘텐츠 크리에이터": { certs: "멀티미디어콘텐츠제작전문가", tips: "영상 기획 및 편집(Premiere Pro), 커뮤니케이션" },

    // 교육/인문/사회과학
    "교사": { certs: "교원자격증 (교육부)", tips: "교육 방법론 연구, 아동/청소년 심리 이해" },
    "도서관 사서": { certs: "사서자격증 (준사서/정사서)", tips: "정보기록물 관리 시스템 숙지, 서비스 마인드" },
    "통번역사": { certs: "ITT 통번역 자격증", tips: "고급 외국어 구사력, 해당 분야 전문 용어 숙지" },
    "사회복지사": { certs: "사회복지사 1/2급", tips: "복지 법규 지식, 상담 심리 기술" },
    "상담교사": { certs: "전문상담교사 자격증", tips: "위기 상담 기법, 경청 및 공감 능력" },
    "작가": { certs: "-", tips: "다양한 독서 경험, 매일 글쓰기 습관" },
    "시인": { certs: "-", tips: "사물에 대한 관찰력, 어휘력 확장" },
    "비평가": { certs: "-", tips: "논리적 분석력, 비판적 시각 훈련" },
    "역사학자": { certs: "한자능력검정시험, 외국어 자격", tips: "사료 판독 능력, 객관적 연구 태도" },
    "철학자": { certs: "-", tips: "고전 독해, 비판적 사고 훈련" },
    "사회학자": { certs: "사회조사분석사 1/2급", tips: "통계 프로그램(SPSS, R) 활용, 사회 현상 관찰" },
    "심리학자": { certs: "임상심리사, 상담심리사", tips: "실험 설계 및 데이터 분석 능력" },
    "교육학자": { certs: "-", tips: "교육 정책 분석, 교수법 연구" },
    "언어학자": { certs: "-", tips: "언어 구조 분석, 기호학 지식" },
    "직업상담사": { certs: "직업상담사 1/2급", tips: "취업 시장 정보 파악, 직업 심리 검사 활용" },

    // 경영/금융/법률
    "변호사": { certs: "변호사 자격 (법무부)", tips: "법률 해석 능력, 논리적 글쓰기 및 스피치" },
    "경영컨설턴트": { certs: "경영지도사", tips: "비즈니스 모델 분석, 문제 해결 프레임워크" },
    "회계사": { certs: "공인회계사(CPA), AICPA", tips: "엑셀 고급 활용, 세무 법규 지식" },
    "변리사": { certs: "변리사 자격", tips: "이공계 지식, 특허 법률 지식" },
    "마케터": { certs: "GAIQ(구글애널리틱스), 검색광고마케터", tips: "데이터 기반 의사결정, 트렌드 분석" },
    "경제학자": { certs: "-", tips: "수학적 모델링, 통계적 분석 능력" },
    "정치학자": { certs: "-", tips: "국제 정세 파악, 정책 분석 역량" },
    "보석감정사": { certs: "보석감정사(산업인력공단), GIA", tips: "보석 감별 기기 조작, 시장 가치 평가" },

    // 공공서비스/안전/기타
    "경찰": { certs: "무도 자격증, 대형면허", tips: "체력 단련, 법규 지식, 정의감" },
    "소방관": { certs: "응급구조사, 대형면허", tips: "위기 대응 훈련, 체력 관리, 소방 전술" },
    "파일럿": { certs: "사업용 조종사 면허, EPT(영어구사능력)", tips: "항공 기상 지식, 집중력 유지 훈련" },
    "응급구조사": { certs: "응급구조사 1/2급", tips: "응급 처치 시뮬레이션, 침착한 대응력" },
    "아나운서": { certs: "한국어능력시험", tips: "발음 교정, 시사 상식 함양" },
    "기자": { certs: "-", tips: "취재원 발굴, 논리적인 기사 작성" },
    "리포터": { certs: "-", tips: "현장 적응력, 친화력 및 순발력" },

    // 과학/연구/자연
    "천문학자": { certs: "-", tips: "고급 수학 및 물리학, 데이터 분석" },
    "고고학자": { certs: "박물관 및 미술관 준학예사", tips: "현장 발굴 경험, 유물 분석 능력" },
    "기상통보관": { certs: "기상예보기사, 기상기사", tips: "기상 차트 분석, 데이터 해석 능력" },
    "동물사육사": { certs: "축산기사, 반려동물관리사", tips: "동물 행동 관찰 기록 습관" },
    "수학자": { certs: "-", tips: "추론 능력, 논리적 사고 훈련" },
    "물리학자": { certs: "-", tips: "실험 및 계측 기술, 수학적 모델링" },
    "화학자": { certs: "화학분석기사", tips: "실험실 안전 수칙 준수, 정밀 분석" },
    "생물학자": { certs: "생물공학기사", tips: "현장 샘플 채취, 유전자 분석 기술" },
    "지질학자": { certs: "지질 및 지반기사", tips: "GIS 활용 능력, 지형 분석" },
    "해양학자": { certs: "해양조사기사, 해양환경기사", tips: "해양 탐사 장비 조작, 환경 보호 인식" },
    "산림학자": { certs: "산림기사, 산림경영기사", tips: "산림 자원 조사 방법론, 식물학 지식" },
    "농학자": { certs: "종자기사, 식물보호기사", tips: "품종 개량 실험, 농업 정보 시스템" },
    "축산학자": { certs: "축산기사", tips: "가축 사양 관리, 동물 번식 지식" },
    "수산학자": { certs: "수산제조기사, 어업생산관리기사", tips: "수산 자원 관리 지식, 양식 기술" },
    "조경가": { certs: "조경기사", tips: "식재 설계 능력, 조경 소프트웨어 활용" },

    // 산업/생산/기술
    "요리사": { certs: "조리기능사(한식/양식/일식/중식)", tips: "레시피 개발, 주방 위생 관리 숙련" },
    "건축가": { certs: "건축기사, 건축사 자격", tips: "CAD/BIM 활용, 건축 법규 이해" },
    "플로리스트": { certs: "화훼장식기능사/기사", tips: "색채 감각, 꽃 보관 및 관리 지식" },
    "도시계획가": { certs: "도시계획기사", tips: "도시 통계 분석, 공간 분석 소프트웨어" },
    "교통계획가": { certs: "교통기사", tips: "교통 수요 예측 모델링, 통계 분석" },
    "조경공학자": { certs: "조경기사", tips: "식물 생태학 지식, 조경 시공 실무" },
    "측량사": { certs: "측량 및 지형공간정보유지관리기사", tips: "측량 장비(GPS, Total Station) 숙달" },
    "지도제작자": { certs: "지도제작기능사", tips: "지리 정보 시스템(GIS) 이해" },
    "품질관리원": { certs: "품질경영기사", tips: "통계적 공정 관리(SPC), 꼼꼼함" },
    "생산관리원": { certs: "CPIM(생산재고관리사)", tips: "생산 계획 최적화 능력, 리더십" },
    "산업안전관리원": { certs: "산업안전기사", tips: "안전 점검 체크리스트 활용, 법규 지식" },
    "가스공학자": { certs: "가스기사", tips: "가스 시설 안전 점검 실무" },
    "신소재공학자": { certs: "금속재료기사", tips: "재료 분석 장비 운용 능력" },
    "식품공학자": { certs: "식품기사", tips: "식품 가공 기술, 품질 관리 기준 숙지" }
  };

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
      
      // Get additional info from jobDetails
      const extraInfo = jobDetails[title] || { certs: "추후 업데이트 예정입니다.", tips: "추후 업데이트 예정입니다." };

      modalTitle.innerText = title;
      modalBody.innerHTML = `
        <div style="margin-bottom: 25px;">
          <h3 style="color: #2d3748; font-size: 1.2rem; margin-bottom: 10px;">📌 직업 개요</h3>
          <p style="margin: 0;">${description}</p>
        </div>
        <div style="margin-bottom: 25px;">
          <h3 style="color: #2d3748; font-size: 1.2rem; margin-bottom: 10px;">🚀 주요 업무 및 역량</h3>
          <p style="margin: 0;">${requirements}</p>
        </div>
        
        <div style="margin-top: 30px; border-top: 1px dashed #e2e8f0; padding-top: 25px;">
          <h3 style="color: #2c5282; font-size: 1.2rem; margin-bottom: 15px;">🎓 추천 자격증 및 팁</h3>
          <div style="background: #ebf8ff; padding: 20px; border-radius: 12px; border-left: 5px solid #3182ce;">
            <p style="margin: 0 0 10px 0;"><strong>✅ 자격증:</strong> ${extraInfo.certs}</p>
            <p style="margin: 0;"><strong>💡 도움이 되는 것:</strong> ${extraInfo.tips}</p>
          </div>
        </div>

        <div style="margin-top: 30px; background: #f7fafc; padding: 15px; border-radius: 10px; border-left: 4px solid #cbd5e0;">
          <p style="font-size: 0.85rem; margin: 0; color: #718096; line-height: 1.5;">
            * 이 설명은 해당 직업에 대한 일반적인 정보를 바탕으로 구성되었습니다. 더 자세한 내용은 전문 커리어 상담을 통해 확인하실 수 있습니다.
          </p>
        </div>
      `;
      
      modal.style.display = 'flex';
      document.body.style.overflow = 'hidden';

      // Disqus reset for specific job
      const resetDisqus = () => {
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
      };

      if (window.DISQUS) {
        resetDisqus();
      } else {
        setTimeout(resetDisqus, 1000);
      }
    });
  });

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

  const header = document.querySelector('header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.style.backgroundColor = 'rgba(45, 55, 72, 0.95)';
    } else {
      header.style.backgroundColor = '#2d3748';
    }
  });
});

