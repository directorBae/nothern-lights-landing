export function CeoSection() {
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

        <div className="nl-ceo">
          <figure className="nl-ceo__portrait">
            <div className="nl-ceo__silhouette"></div>
            <figcaption className="caption">
              <strong>JEONG JIN SEOK</strong>
              <span>대표이사 정 진 석 · CEO of Uranus Inc.</span>
            </figcaption>
          </figure>

          <div className="nl-ceo__copy">
            <blockquote>
              "단순한 입시 조력자를 넘어, 학생의 내면에 숨겨진 고유한 잠재력을
              발굴하고, 학생이 자신의 꿈을 넓은 세상에서 펼쳐나가는 과정을
              동행하는 <em>LIFE MENTOR</em>가 되겠습니다."
            </blockquote>

            <div className="nl-credentials">
              <div className="nl-credentials__col">
                <h4>Professional Career</h4>
                <ul>
                  <li>
                    CEO of{" "}
                    <strong style={{ color: "var(--nl-cream)" }}>
                      URANUS Inc.
                    </strong>
                  </li>
                  <li>CEO of ALPHA WAVE</li>
                  <li>CEO of PLENUS</li>
                  <li>EC 코디네이팅 경력 5년</li>
                  <li>TOEFL · IELTS · SAT · AP · 국제학교 강의 경력 8년</li>
                </ul>
              </div>
              <div className="nl-credentials__col">
                <h4>Education</h4>
                <ul>
                  <li>
                    Berklee College of Music — Music Production M.A.,{" "}
                    <em>Valedictorian</em>
                  </li>
                  <li>
                    Boston University — B.S. in Business (International &amp;
                    Venture Management)
                  </li>
                  <li>Boston University — B.A. in Economics</li>
                </ul>
                <h4 style={{ marginTop: 24 }}>Admit References</h4>
                <ul>
                  <li>UC Berkeley · Georgia Tech · Boston University · NYU</li>
                  <li>Purdue · UC San Francisco · GSU · UW · UIUC 외 다수</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
