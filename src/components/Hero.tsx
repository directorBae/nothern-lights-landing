import { smoothScrollHandler } from "../utils/scroll";

export function Hero() {
  return (
    <header className="nl-hero" id="home" data-screen-label="Hero">
      <div className="nl-skyfield" aria-hidden="true">
        <div className="nl-stars"></div>
        <svg
          className="nl-constellation"
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
          }}
        />
      </div>

      <div className="nl-polaris" aria-hidden="true">
        <div className="nl-polaris__halo"></div>
        <div className="nl-polaris__star">
          <svg viewBox="0 0 100 100">
            <defs>
              <radialGradient id="starGrad" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#FFF6E0" />
                <stop offset="40%" stopColor="#FFE9B0" />
                <stop offset="100%" stopColor="#FFD27F" />
              </radialGradient>
            </defs>
            <path
              d="M50 0 L55 45 L100 50 L55 55 L50 100 L45 55 L0 50 L45 45 Z"
              fill="url(#starGrad)"
            />
            <path
              d="M50 18 L52 48 L82 50 L52 52 L50 82 L48 52 L18 50 L48 48 Z"
              fill="#FFF6E0"
              opacity="0.6"
              transform="rotate(45 50 50)"
            />
            <circle cx="50" cy="50" r="3" fill="#FFFFFF" />
          </svg>
        </div>
        <div className="nl-polaris__label">POLARIS · α UMi</div>
      </div>

      <div className="nl-container nl-hero__inner">
        <div className="nl-hero__eyebrow">
          <ul className="nl-hero__taglist">
            <li>전문 유학 컨설팅</li>
            <li>미국 대학 입시 / 편입</li>
            <li>보딩스쿨 진학</li>
          </ul>
          <span className="nl-hero__brand">Northern Lights</span>
        </div>

        <div className="nl-hero__title">
          <h1 className="nl-h1">
            The Architects of
            <br />
            Global <em style={{ color: "#FFE9B0" }}>Success.</em>
            <span className="small-line">
              전략적 EC 설계를 통한 입시의 완결.
              <br />
              학생만의 좌표를 찾아, 가장 정확한 방향을 비추는 북극성.
            </span>
          </h1>
        </div>

        <div className="nl-hero__meta">
          <div className="nl-hero__ctas">
            <a
              className="nl-btn nl-btn--primary"
              href="#contact"
              onClick={smoothScrollHandler("contact")}
            >
              무료 상담예약
              <span className="arrow">→</span>
            </a>
            <a
              className="nl-btn"
              href="#programmes"
              onClick={smoothScrollHandler("programmes")}
            >
              프로그램
              <span className="arrow">↓</span>
            </a>
          </div>

          <blockquote className="nl-hero__quote">
            <p>
              "Intelligence plus character — that is the goal of true
              education."
            </p>
            <cite>— Dr. Martin Luther King Jr.</cite>
          </blockquote>
        </div>
      </div>
    </header>
  );
}
