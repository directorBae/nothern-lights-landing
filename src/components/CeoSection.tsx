export function CeoSection() {
  const stats: [string, string][] = [
    ["EC Coordinating", "5 yrs"],
    ["Teaching", "8 yrs"],
    ["Top-50 Admits", "11+"],
    ["Scholarship Awarded", "$108K+"],
    ["EC Coordinating", "5 yrs"],
    ["Teaching", "8 yrs"],
    ["Top-50 Admits", "11+"],
    ["Scholarship Awarded", "$108K+"],
  ];

  return (
    <section className="nl-section" data-screen-label="About — CEO Letter">
      <div className="nl-container">
        <header className="nl-section__head">
          <div className="nl-section__num">03 /</div>
          <div className="nl-section__title">
            <span className="nl-eyebrow">A Letter from the Founder</span>
            <h2 className="nl-h2">
              단순한 입시 조력자를 넘어, <em>LIFE MENTOR</em>로.
            </h2>
          </div>
        </header>

        <div className="nl-ceo nl-ceo--stack">
          <div className="nl-ceo__copy">
            <blockquote>
              "단순한 입시 조력자를 넘어, 학생의 내면에 숨겨진 고유한 잠재력을
              발굴하고, 학생이 자신의 꿈을 넓은 세상에서 펼쳐나가는 과정을
              동행하는 <em>LIFE MENTOR</em>가 되겠습니다."
            </blockquote>

            <div className="nl-ceo__stats" aria-label="Founder track record">
              {stats.map(([label, val], i) => (
                <div className="nl-ceo__stat" key={`${label}-${i}`}>
                  <span className="nl-label">{label}</span>
                  <strong>{val}</strong>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
