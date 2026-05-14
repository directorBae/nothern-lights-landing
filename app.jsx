// Northern Lights — interactive bits (Programs tabs + Tweaks panel)
const { useState, useEffect } = React;

// ===== Program data =====
const TRACKS = [
  {
    id: "expansion",
    num: "01",
    ko: "사고 확장형",
    en: "Intellectual Expansion",
    lede: "Academic Rigor와 Intellectual Curiosity가 동시에 드러나는, 학문적 사고를 깊이 확장시키는 트랙",
    programs: [
      { field: "ENGINEERING", title: "드론 (Research)", sub: "Academic + Intellectual Curiosity가 동시에 드러나는 대표 트랙", items: ["드론 설계 & 제작", "군집 제어 알고리즘 · Mesh Network AI 기반 소프트웨어 임베딩", "Research Paper · 실험 보고서"] },
      { field: "SCIENCE",    title: "요리 (조리과학)",  sub: "비전형적이지만 매우 강한 학문 확장 EC – 미국 대학이 특히 좋아하는 유형", items: ["확산, 열전달, 점도, 마이야르 반응 분석", "실험 설계 → 데이터 수집 → 분석 주차별 실험 보고서", "음식 문화 · 영양학 사설 작성"] },
      { field: "BUSINESS",   title: "통계 (Data Analytics)", sub: "\"숫자를 해석하는 사고력\"을 명확히 증명", items: ["실제 데이터 기반 문제 정의", "회귀분석, 가설검정, 정책 · 경영 해석", "Python · R · STATA 활용", "Research Paper + 컨설팅 보고서"] },
      { field: "SCIENCE × ENGINEERING", title: "음향 (Acoustic Research)", sub: "\"예술을 과학으로 해석할 줄 아는 학생\" 서사 형성", items: ["음향 이론 (주파수, 공명, 공간 음향)", "건축 구조별 잔향 · 반사 모델링", "공간 음향 시뮬레이션", "음향 심리학 + 사회과학적 분석"] },
    ],
  },
  {
    id: "execution",
    num: "02",
    ko: "실행 확장형",
    en: "Builder & Execution",
    lede: "Agency와 Execution — 아이디어를 실제 결과물로 만들어내는 행동 역량을 입증하는 트랙",
    programs: [
      { field: "ENGINEERING", title: "코딩 (Software Build)", sub: "Agency + Execution을 가장 직관적으로 보여주는 트랙", items: ["Python / JS / HTML · CSS", "웹 · 앱 · 알고리즘 · 데이터 분석 프로젝트", "사회 문제 / 비즈니스 과제 해결", "GitHub 포트폴리오"] },
      { field: "ENGINEERING", title: "드론 (Capstone)", sub: "고등학생 수준을 넘어서는 전문적 EC — \"창업자 · 엔지니어처럼 Behave and Think\"", items: ["소프트웨어 자체 개발 / UI · UX 디자인", "드론 쇼 필드 엔지니어 경험", "산학 협업 (세종대)", "사업자등록 / MOU / 특허 출원 옵션"] },
      { field: "ARTS",        title: "영상 (Production)", sub: "아이디어를 결과물로 바꾸는 능력 증명", items: ["시나리오 → 촬영 → 편집", "다큐, 캠페인, 애니메이션, VFX", "팀 프로젝트 기반 제작", "완성 영상 포트폴리오"] },
    ],
  },
  {
    id: "impact",
    num: "03",
    ko: "영향 확장형",
    en: "Community Impact",
    lede: "Contribution to Campus & Community — 사회적 의미와 리더십을 증명하는 트랙",
    programs: [
      { field: "BUSINESS", title: "컨설팅 (Strategic Consulting)", sub: "지적 리더십 + 사회 구조 이해를 동시에 강조", items: ["글로벌 기업 케이스 분석", "시장 진입 · CSR · M&A 시나리오 전략 프레임워크 적용", "자체 컨설팅 팀 운영"] },
      { field: "MUSICAL × PERFORMANCE", title: "공연 (Original Production)", sub: "대학이 말하는 \"Contribution to Campus Culture\"의 정석", items: ["창작 뮤지컬 (10인 이상) — 사회적 메시지 기반 기획", "커뮤니티 센터 · 요양시설 공연", "공공 무대 출전"] },
      { field: "ARTS", title: "사진 (Community Archive)", sub: "예술을 통한 사회적 개입이라는 강력한 서사", items: ["지역 사회 인물 기록 \"인물사진 전해주기\" 프로젝트", "전시 기획 & 온라인 아카이브", "아트 스테이트먼트 작성"] },
      { field: "ARTS", title: "음악 (Community Music)", sub: "자기표현을 통한 Community 기여 구조 완성", items: ["정신건강 · 청소년 · 커뮤니티 주제 지역 공연, 워크숍", "플랫폼 음원 발매", "상업 음원 제작 참여"] },
    ],
  },
  {
    id: "identity",
    num: "04",
    ko: "정체성 확장형",
    en: "Creative Identity",
    lede: "정체성 + 기술 + 감정 서사가 동시에 드러나는, 학생만의 목소리를 확립하는 트랙",
    programs: [
      { field: "ARTS (음악)", title: "창작 중심 (Original Music)", sub: "정체성 + 기술 + 감정 서사가 동시에 드러남", items: ["DAW 기반 작곡 · 편곡 · 믹싱", "오리지널 트랙 발매", "음악 비평 저널", "뮤직비디오 제작 연계"] },
      { field: "ARTS (영상)", title: "개인 서사 (Personal Narrative)", sub: "\"학생의 시선\"을 가장 강하게 보여줌", items: ["개인 경험 · 사회 이슈 기반 내러티브 구성 프로젝트", "감독 · 촬영 · 편집 주도", "영상 저널 작성"] },
      { field: "ARTS (사진)", title: "Art Photography", sub: "말이 아니라 이미지로 설명하는 능력", items: ["예술 사진 시리즈 큐레이션 & 전시", "아트 스테이트먼트 작성"] },
      { field: "PE", title: "주짓수 (Discipline & Resilience)", sub: "비인지 역량 (Resilience, Humility, Discipline)을 언어화할 수 있는 드문 EC", items: ["훈련 일지 & 자기 성찰 에세이", "대회 출전", "커뮤니티 리더십"] },
    ],
  },
];

function Programs() {
  const [active, setActive] = useState(0);
  const track = TRACKS[active];
  return (
    <div className="nl-tracks">
      <div className="nl-tracks__list" role="tablist" aria-label="프로그램 트랙">
        {TRACKS.map((t, i) => (
          <button
            key={t.id}
            role="tab"
            aria-selected={i === active}
            className={"nl-tracks__item" + (i === active ? " is-active" : "")}
            onClick={() => setActive(i)}
          >
            <span className="num">TRACK / {t.num}</span>
            <span className="ko">{t.ko} 프로그램</span>
            <span className="en">{t.en}</span>
          </button>
        ))}
      </div>
      <div className="nl-tracks__panel" role="tabpanel">
        <div className="nl-tracks__panel-head">
          <h3>{track.ko} 프로그램</h3>
          <p className="lede">{track.lede}</p>
        </div>
        {track.programs.map((p, i) => (
          <article key={i} className="nl-program">
            <div className="nl-program__num">{String(i + 1).padStart(2, "0")}</div>
            <div className="nl-program__head">
              <div className="field">{p.field}</div>
              <h4>{p.title}</h4>
              <p className="sub">{p.sub}</p>
            </div>
            <div className="nl-program__body">
              <ul>
                {p.items.map((it, j) => <li key={j}>{it}</li>)}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

// ===== Tweaks =====
const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "starDensity": 120,
  "polarisGlow": 1,
  "accent": "#FFD27F",
  "showConstellation": true,
  "headingStyle": "italic"
}/*EDITMODE-END*/;

function NLTweaks() {
  const [t, setTweak] = window.useTweaks(TWEAK_DEFAULTS);

  // Apply live
  useEffect(() => {
    document.documentElement.style.setProperty("--nl-star", t.accent);
    // bright star tint shift
    const root = document.documentElement;
    root.style.setProperty("--nl-star-hot", lighten(t.accent, 0.25));
  }, [t.accent]);

  useEffect(() => {
    document.documentElement.style.setProperty(
      "--polaris-glow", t.polarisGlow
    );
    const halo = document.querySelector(".nl-polaris__halo");
    const star = document.querySelector(".nl-polaris__star");
    if (halo) halo.style.opacity = t.polarisGlow;
    if (star) star.style.filter =
      `drop-shadow(0 0 ${28 * t.polarisGlow}px rgba(255, 210, 127, ${0.7 * t.polarisGlow})) drop-shadow(0 0 ${80 * t.polarisGlow}px rgba(255, 210, 127, ${0.35 * t.polarisGlow}))`;
  }, [t.polarisGlow]);

  useEffect(() => {
    if (window.NL_setStarDensity) window.NL_setStarDensity(t.starDensity);
  }, [t.starDensity]);

  useEffect(() => {
    const c = document.querySelector(".nl-constellation");
    if (c) c.style.display = t.showConstellation ? "block" : "none";
  }, [t.showConstellation]);

  useEffect(() => {
    document.documentElement.style.setProperty(
      "--heading-style", t.headingStyle
    );
    document.querySelectorAll(".nl-h1, .nl-h2, .nl-tracks__panel-head h3, .nl-sig-card h3, .nl-person__name, .nl-assess__card h3, .nl-mission__card h3, .nl-track__item .school, .nl-channel__lbl .val, .nl-loc h4, .nl-modal h2, .nl-program__head h4")
      .forEach(el => el.style.fontStyle = t.headingStyle);
  }, [t.headingStyle]);

  return (
    <window.TweaksPanel title="Tweaks" subtitle="밤하늘과 분위기를 조정합니다">
      <window.TweakSection title="Sky">
        <window.TweakSlider label="별 밀도" value={t.starDensity} min={0} max={300} step={10}
          onChange={(v) => setTweak("starDensity", v)} />
        <window.TweakSlider label="북극성 광휘" value={t.polarisGlow} min={0} max={2} step={0.1}
          onChange={(v) => setTweak("polarisGlow", v)} />
        <window.TweakToggle label="별자리 선" value={t.showConstellation}
          onChange={(v) => setTweak("showConstellation", v)} />
      </window.TweakSection>
      <window.TweakSection title="Brand">
        <window.TweakColor label="별빛 컬러" value={t.accent}
          options={["#FFD27F", "#FFFFFF", "#9BB3FF", "#FFAE6B", "#D9C7A0"]}
          onChange={(v) => setTweak("accent", v)} />
        <window.TweakRadio label="제목 스타일" value={t.headingStyle}
          options={[{value: "italic", label: "Italic"}, {value: "normal", label: "Upright"}]}
          onChange={(v) => setTweak("headingStyle", v)} />
      </window.TweakSection>
    </window.TweaksPanel>
  );
}

// Helper: lighten a hex color
function lighten(hex, amt) {
  const h = hex.replace("#", "");
  const num = parseInt(h, 16);
  let r = (num >> 16) + Math.round(255 * amt);
  let g = ((num >> 8) & 0xff) + Math.round(255 * amt);
  let b = (num & 0xff) + Math.round(255 * amt);
  r = Math.min(255, r); g = Math.min(255, g); b = Math.min(255, b);
  return "#" + ((r << 16) | (g << 8) | b).toString(16).padStart(6, "0");
}

// ===== Mount =====
function NLApp() {
  return (
    <React.Fragment>
      <Programs />
    </React.Fragment>
  );
}

function mountAll() {
  const mount = document.getElementById("nl-programs-mount");
  if (mount && !mount.dataset.mounted) {
    mount.dataset.mounted = "1";
    ReactDOM.createRoot(mount).render(<Programs />);
  }
  const tweakMount = document.getElementById("nl-tweaks-mount");
  if (tweakMount && !tweakMount.dataset.mounted) {
    tweakMount.dataset.mounted = "1";
    ReactDOM.createRoot(tweakMount).render(<NLTweaks />);
  }
}
// Babel scripts run after DOMContentLoaded; check readyState directly.
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", mountAll);
} else {
  mountAll();
}
