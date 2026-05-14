import { ADMITS } from "../data/admits";
import { smoothScrollHandler } from "../utils/scroll";

export function TrackRecordSection() {
  return (
    <section
      className="nl-section nl-section--alt"
      data-screen-label="Track Record"
    >
      <div className="nl-container">
        <header className="nl-section__head">
          <div className="nl-section__num">08 /</div>
          <div className="nl-section__title">
            <span className="nl-eyebrow">
              Track Record · Outstanding Achievements
            </span>
            <h2 className="nl-h2">
              세계 명문 대학 합격 실적과
              <br />
              <em>압도적인 장학금 성과.</em>
            </h2>
          </div>
        </header>

        <div className="nl-track">
          {ADMITS.map((a, i) => {
            const isFeature = !!a.feature;
            const content = (
              <>
                <span className="num">{a.num}</span>
                <span
                  className="school"
                  style={isFeature ? { fontSize: 18 } : undefined}
                >
                  {a.school}
                </span>
                <span className="major">{a.major}</span>
                <span className="scholar">{a.scholar}</span>
              </>
            );
            const featureStyle = isFeature
              ? {
                  background:
                    "linear-gradient(135deg, rgba(60,77,214,0.20), rgba(13,19,54,0.7))",
                }
              : undefined;

            if (isFeature) {
              return (
                <a
                  key={i}
                  href="#contact"
                  onClick={smoothScrollHandler("contact")}
                  className="nl-track__item nl-track__item--link"
                  style={featureStyle}
                >
                  {content}
                </a>
              );
            }
            return (
              <article key={i} className="nl-track__item" style={featureStyle}>
                {content}
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
