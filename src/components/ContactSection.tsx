export function ContactSection() {
  return (
    <section className="nl-section" id="contact" data-screen-label="Contact">
      <div className="nl-container">
        <header className="nl-section__head">
          <div className="nl-section__num">09 /</div>
          <div className="nl-section__title">
            <span className="nl-eyebrow">Contact &amp; Location</span>
            <h2 className="nl-h2">
              학생만의 좌표를 함께
              <br />
              <em>찾는 첫 걸음.</em>
            </h2>
            <p className="nl-lede" style={{ maxWidth: "64ch" }}>
              편한 경로로 연락 주시면, 노던라이츠 코디네이터가 직접 일정과 상담
              방식을 안내드립니다. 온라인(Zoom) · 오프라인(상담실) 모두
              가능합니다.
            </p>
          </div>
        </header>

        <div className="nl-contact" id="location">
          <div className="nl-contact__channels">
            <a className="nl-channel" href="mailto:contact@northernlights.kr">
              <span className="nl-channel__icon">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <rect x="3" y="5" width="18" height="14" rx="2" />
                  <path d="m3 7 9 6 9-6" />
                </svg>
              </span>
              <span className="nl-channel__lbl">
                <span className="nl-label">Email · Coordinator</span>
                <span className="val">contact@northernlights.kr</span>
              </span>
              <span className="nl-channel__arrow">Mail →</span>
            </a>
            <a className="nl-channel" href="tel:+8202-0000-0000">
              <span className="nl-channel__icon">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.37 1.9.72 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.35 1.85.59 2.81.72A2 2 0 0 1 22 16.92Z" />
                </svg>
              </span>
              <span className="nl-channel__lbl">
                <span className="nl-label">Reception · Phone</span>
                <span className="val">02 — 0000 — 0000</span>
              </span>
              <span className="nl-channel__arrow">Call →</span>
            </a>
            <a className="nl-channel" href="#">
              <span className="nl-channel__icon" style={{ color: "#FFE47A" }}>
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 3C6.48 3 2 6.66 2 11.15c0 2.94 1.93 5.5 4.84 6.94l-.92 3.4a.4.4 0 0 0 .62.45L10.1 19.4c.62.07 1.25.11 1.9.11 5.52 0 10-3.66 10-8.15S17.52 3 12 3Z" />
                </svg>
              </span>
              <span className="nl-channel__lbl">
                <span className="nl-label">KakaoTalk · 플러스친구</span>
                <span className="val">@노던라이츠</span>
              </span>
              <span className="nl-channel__arrow">Chat →</span>
            </a>
            <a className="nl-channel" href="#">
              <span className="nl-channel__icon" style={{ color: "#6A85FF" }}>
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                >
                  <rect x="2" y="6" width="14" height="12" rx="2" />
                  <path d="m22 8-6 4 6 4V8Z" />
                </svg>
              </span>
              <span className="nl-channel__lbl">
                <span className="nl-label">Zoom · Calendly</span>
                <span className="val">무료 초기상담 예약</span>
              </span>
              <span className="nl-channel__arrow">Book →</span>
            </a>
          </div>

          <aside className="nl-loc">
            <span className="nl-label">Location · 찾아오시는 길</span>
            <h4>Northern Lights Studio</h4>
            <p>
              학생·학부모님과 함께 깊은 호흡으로 진행되는 상담실. 도심 한가운데,
              조용한 작업실 분위기로 설계되었습니다.
            </p>
            <div className="nl-loc__map" aria-label="map placeholder">
              <span className="nl-loc__pin"></span>
            </div>
            <p
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: 11,
                letterSpacing: ".18em",
                color: "var(--nl-text-faint)",
                textTransform: "uppercase",
              }}
            >
              서울특별시 · 상세 주소는 예약 시 안내
            </p>
          </aside>
        </div>
      </div>
    </section>
  );
}
