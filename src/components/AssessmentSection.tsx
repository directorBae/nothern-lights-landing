export function AssessmentSection() {
  return (
    <section
      className="nl-section"
      id="about"
      data-screen-label="About — Assessment"
    >
      <div className="nl-container">
        <header className="nl-section__head">
          <div className="nl-section__num">01 /</div>
          <div className="nl-section__title">
            <span className="nl-eyebrow">Assessment System Overview</span>
            <h2 className="nl-h2">
              미국 유학이란 — <em>두 갈래의 평가 시스템</em>
            </h2>
            <p className="nl-lede" style={{ maxWidth: "64ch" }}>
              미국 명문대 입시는 단일한 점수가 아닌, 학생의{" "}
              <strong style={{ color: "var(--nl-cream)", fontWeight: 500 }}>
                서사·인성·기여
              </strong>
              를 다면적으로 평가합니다. 일반 입시와 예체능 입시는 그 무게중심이
              근본적으로 다릅니다.
            </p>
          </div>
        </header>

        <div className="nl-assess">
          <article className="nl-assess__card">
            <div>
              <span className="nl-label">General Admissions</span>
              <h3>일반 입시</h3>
            </div>
            <div>
              <div className="nl-label" style={{ marginBottom: 12 }}>
                합격의 결정적 요인 · Character &amp; Contribution
              </div>
              <div className="nl-distribution" aria-hidden="true">
                <span style={{ width: "40%", background: "#3C4DD6" }}></span>
                <span style={{ width: "40%", background: "#FFD27F" }}></span>
                <span style={{ width: "20%", background: "#E8DEC4" }}></span>
              </div>
              <div className="nl-distribution__legend">
                <span>
                  <i style={{ background: "#3C4DD6" }} />
                  학업 40%
                </span>
                <span>
                  <i style={{ background: "#FFD27F" }} />
                  활동 40%
                </span>
                <span>
                  <i style={{ background: "#E8DEC4" }} />
                  에세이 20%
                </span>
              </div>
            </div>
            <ul className="nl-pillars">
              {[
                ["01", "Academic Rigor", "도전적인 교과 과정 이수"],
                ["02", "Extracurricular (EC)", '리더십과 활동의 이유("Why")'],
                ["03", "Personal Statement", "고유한 목소리와 가치관"],
                ["04", "Recommendation", "제3자가 증언하는 인성"],
                ["05", "Context", "환경 대비 성취도 평가"],
              ].map(([n, t, d]) => (
                <li key={n}>
                  <span className="num">{n}</span>
                  <div>
                    <strong>{t}</strong>
                    <p>{d}</p>
                  </div>
                </li>
              ))}
            </ul>
          </article>

          <article className="nl-assess__card">
            <div>
              <span className="nl-label">
                Arts, Music &amp; Sports Admissions
              </span>
              <h3>예체능 전공자 입시</h3>
            </div>
            <div>
              <div className="nl-label" style={{ marginBottom: 12 }}>
                평가 주체 · Faculty (교수진) — 입학사정관을 넘어선 '거장과
                제자의 만남'
              </div>
              <div className="nl-keystone">
                <div className="nl-keystone__pct">70%</div>
                <div className="nl-keystone__txt">
                  <strong>Portfolio</strong>
                  압도적 변수이자 합격의 열쇠 — 나머지 30%는 학업·에세이·심사
                </div>
              </div>
            </div>
            <ul className="nl-pillars">
              {[
                [
                  "01",
                  "Artistic Voice & Portfolio",
                  "예술적 정체성의 직접 표현",
                ],
                ["02", "Academic Rigor & GPA", "'생각하는 예술가'임을 증명"],
                ["03", "Artistic Statement", "예술 철학을 언어화 하는 능력"],
                ["04", "Specialized EC", "지속적 몰입과 실무 실행력 입증"],
                [
                  "05",
                  "Faculty Audit / Audition",
                  "현직 거장들의 선택을 받는 절차",
                ],
              ].map(([n, t, d]) => (
                <li key={n}>
                  <span className="num">{n}</span>
                  <div>
                    <strong>{t}</strong>
                    <p>{d}</p>
                  </div>
                </li>
              ))}
            </ul>
          </article>
        </div>
      </div>
    </section>
  );
}
