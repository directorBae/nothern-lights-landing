import { PEOPLE } from "../data/people";

export function PeopleSection() {
  return (
    <section className="nl-section" id="people" data-screen-label="People">
      <div className="nl-container">
        <header className="nl-section__head">
          <div className="nl-section__num">05 /</div>
          <div className="nl-section__title">
            <span className="nl-eyebrow">Northern Lights Faculty</span>
            <h2 className="nl-h2">
              <em>분야별 최고 전문가</em>가 함께하는
              <br />
              개인 맞춤 밀착 케어 시스템
            </h2>
            <p className="nl-lede" style={{ maxWidth: "64ch" }}>
              금융·디자인·법률·예술·큐레이션까지 — 각 분야 최일선에서 활동 중인
              전문가들이 학생의 '진짜 무대'를 함께 설계합니다.
            </p>
          </div>
        </header>

        <div className="nl-people">
          {PEOPLE.map((p, i) => (
            <article className="nl-person" key={i}>
              <header className="nl-person__head">
                <div className="nl-person__role">
                  <span className="role">{p.role}</span>
                  <span className="area">{p.area}</span>
                </div>
                <div className="nl-person__avatar">{p.avatar}</div>
              </header>
              <h3 className="nl-person__name">
                <span className="ko">{p.ko}</span>
                {p.en}
              </h3>
              <ul className="nl-person__creds">
                {p.creds.map((c, j) => (
                  <li key={j} className={c.hi ? "hi" : undefined}>
                    {c.text}
                  </li>
                ))}
              </ul>
              {p.quote && <p className="nl-person__quote">{p.quote}</p>}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
