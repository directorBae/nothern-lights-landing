const WHY_ITEMS = [
  {
    num: "01",
    title: "글로벌 교육을 통한\n압도적 커리어 가치 확보",
    body: "글로벌 산업 엔진의 중심에서 본인만의 커리큘럼을 직접 Customize하는 차원이 다른 교육 환경을 제공합니다.",
    tag: "세계적으로 통용되는 강력한 신용장",
  },
  {
    num: "02",
    title: "가치를 만드는\n자본과 인프라의 힘",
    body: "학교의 막대한 자본(Capital)과 전문 인프라를 활용하여, 추상적인 아이디어를 시장에서 통용되는 결과물로 실체화합니다.",
    tag: "학생을 넘어선 'Project Leader'로 성장",
  },
  {
    num: "03",
    title: "국내 입시 불확실성에 대한\n확실한 대안",
    body: "단 하루의 컨디션이나 주관적 기준에 좌우되는 국내 입시의 'Uncertainty'와 'Volatility'를 넘어섭니다.",
    tag: "다면 평가를 통한 객관적 역량 입증",
  },
  {
    num: "04",
    title: "성공적인 커리어의\n전략적 시작점",
    body: "입시 포트폴리오는 단순 합격 도구가 아닌, 인턴십과 취업으로 직결되는 '첫 번째 공식 커리어 자산(Asset)'이 됩니다.",
    tag: "실무가(Practitioner)로서의 태도 함양",
  },
];

export function WhySection() {
  return (
    <section
      className="nl-section nl-section--alt"
      data-screen-label="About — Why"
    >
      <div className="nl-container">
        <header className="nl-section__head">
          <div className="nl-section__num">02 /</div>
          <div className="nl-section__title">
            <span className="nl-eyebrow">Why Study in the U.S.</span>
            <h2 className="nl-h2">
              왜 미국 유학인가 — <em>4가지 핵심 가치</em>
            </h2>
            <p className="nl-lede" style={{ maxWidth: "64ch" }}>
              단순한 학위 취득을 넘어, 글로벌 리더로서의 자질을 증명하고
              커리어의 시작점을 재정의하는 네 가지의 본질적 이유.
            </p>
          </div>
        </header>

        <div className="nl-why">
          {WHY_ITEMS.map((w) => (
            <article className="nl-why__card" key={w.num}>
              <div className="num">{w.num}</div>
              <h3>
                {w.title.split("\n").map((line, i) => (
                  <span key={i}>
                    {line}
                    {i === 0 && <br />}
                  </span>
                ))}
              </h3>
              <p>{w.body}</p>
              <span className="tag">{w.tag}</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
