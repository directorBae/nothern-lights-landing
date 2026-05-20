import { useState } from "react";
import { TRACKS } from "../data/tracks";

export function ProgrammesSection() {
  const [active, setActive] = useState(0);
  const track = TRACKS[active];

  return (
    <section
      className="nl-section nl-section--alt"
      id="programmes"
      data-screen-label="Programmes"
    >
      <div className="nl-container">
        <header className="nl-section__head">
          <div className="nl-section__num">06 /</div>
          <div className="nl-section__title">
            <span className="nl-eyebrow">Programmes · 4 Tracks</span>
            <h2 className="nl-h2">
              학생의 <em>좌표</em>를 따라 설계되는
              <br />네 개의 확장 트랙
            </h2>
            <p className="nl-lede" style={{ maxWidth: "64ch" }}>
              모든 EC는 '왜(Why)'에서 출발합니다. 사고를 확장하고, 실행으로
              옮기고, 영향력을 만들고, 정체성을 확립하는 네 개의 트랙 안에서
              학생만의 서사가 완성됩니다.
            </p>
          </div>
        </header>

        <div className="nl-tracks">
          <div
            className="nl-tracks__list"
            role="tablist"
            aria-label="프로그램 트랙"
          >
            {TRACKS.map((t, i) => (
              <button
                key={t.id}
                role="tab"
                aria-selected={i === active}
                className={
                  "nl-tracks__item" + (i === active ? " is-active" : "")
                }
                onClick={() => setActive(i)}
              >
                <span className="num">TRACK / {t.num}</span>
                <span className="ko">{t.ko} 프로그램</span>
                <span className="en">{t.en}</span>
              </button>
            ))}
          </div>
          <div className="nl-tracks__panel" role="tabpanel" key={track.id}>
            <div className="nl-tracks__panel-head">
              <h3>{track.ko} 프로그램</h3>
              <p className="lede">{track.lede}</p>
            </div>
            {track.programs.map((p, i) => (
              <article key={i} className="nl-program">
                <div className="nl-program__num">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div className="nl-program__head">
                  <div className="field">{p.field}</div>
                  <h4>{p.title}</h4>
                  <p className="sub">{p.sub}</p>
                </div>
                <div className="nl-program__body">
                  <ul>
                    {p.items.map((it, j) => (
                      <li key={j}>{it}</li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
