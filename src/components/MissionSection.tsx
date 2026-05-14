export function MissionSection() {
  return (
    <section
      className="nl-section nl-section--alt"
      data-screen-label="About — Mission"
    >
      <div className="nl-container">
        <header className="nl-section__head">
          <div className="nl-section__num">04 /</div>
          <div className="nl-section__title">
            <span className="nl-eyebrow">Our Mission</span>
            <h2 className="nl-h2">
              <em>컨설팅</em>이 아닌, <em>입시의 완성.</em>
            </h2>
            <p className="nl-lede" style={{ maxWidth: "64ch" }}>
              단기적 합격을 넘어, 인생 전반의 방향을 함께 설계합니다. 트렌드를
              분석하는 입시 전략의 완성으로, 학생만의 좌표를 찾습니다.
            </p>
          </div>
        </header>

        <div className="nl-mission">
          <article className="nl-mission__card">
            <span className="nl-label">M / 01</span>
            <h3>일관된 서사 설계</h3>
            <p>
              구시대적인 EC 활동의 반복·나열이 아닌, 학생만의 독창적인 서사를
              에세이(Personal Statement) 내에서 구현할 수 있도록, 학생에게{" "}
              <strong style={{ color: "var(--nl-cream)", fontWeight: 500 }}>
                Tailored EC
              </strong>
              를 설계합니다.
            </p>
          </article>
          <article className="nl-mission__card">
            <span className="nl-label">M / 02</span>
            <h3>
              본질에 집중
              <br />
              <span
                style={{
                  fontStyle: "normal",
                  fontSize: ".5em",
                  letterSpacing: ".2em",
                  color: "var(--nl-text-faint)",
                  fontFamily: "var(--font-mono)",
                  textTransform: "uppercase",
                }}
              >
                Focus on Essence
              </span>
            </h3>
            <p>
              기존 Old-fashioned 유학 Consulting과 달리, 입시트렌드를 꿰뚫는{" "}
              <strong style={{ color: "var(--nl-cream)", fontWeight: 500 }}>
                비대칭적 정보력
              </strong>
              을 바탕으로, 대학이 원하는 본질적 가치에 집중합니다.
            </p>
          </article>
          <article className="nl-mission__card">
            <span className="nl-label">M / 03</span>
            <h3>
              Personal Bonding
              <br />
              <span
                style={{
                  fontStyle: "normal",
                  fontSize: ".5em",
                  letterSpacing: ".2em",
                  color: "var(--nl-text-faint)",
                  fontFamily: "var(--font-mono)",
                  textTransform: "uppercase",
                }}
              >
                Genuity &amp; Rapidity
              </span>
            </h3>
            <p>
              비즈니스 관계를 넘어선 진심 어린 공감과 즉각적인 소통으로, 학생과
              학부모님의{" "}
              <strong style={{ color: "var(--nl-cream)", fontWeight: 500 }}>
                불안을 확신으로
              </strong>{" "}
              바꿉니다.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
