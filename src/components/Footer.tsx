type Props = {
  onOpenModal: (id: "disclaimer" | "safeguarding" | "privacy") => void;
};

export function Footer({ onOpenModal }: Props) {
  return (
    <footer className="nl-footer" data-screen-label="Footer">
      <div className="nl-container nl-footer__inner">
        <div className="nl-footer__legal">
          <div className="row">
            <strong>대표이사 정 진 석</strong> · CEO of URANUS Inc.
          </div>
          <div className="row">
            법인명: Uranus Inc. · 사업자등록번호 000-00-00000
          </div>
          <div className="row">
            문의:{" "}
            <a href="mailto:contact@northernlights.kr">
              contact@northernlights.kr
            </a>
          </div>
          <div className="row">
            전화: 02 — 0000 — 0000 · FAX: 02 — 0000 — 0001
          </div>
          <div className="row">주소: 서울특별시 (상세 주소는 예약 시 안내)</div>
          <div className="nl-footer__buttons">
            <button onClick={() => onOpenModal("disclaimer")}>
              Disclaimer
            </button>
            <button onClick={() => onOpenModal("safeguarding")}>
              Safeguarding
            </button>
            <button onClick={() => onOpenModal("privacy")}>Privacy</button>
          </div>
        </div>

        <div className="nl-footer__quote">
          <span
            className="star nl-mark"
            aria-hidden="true"
            style={{ width: ".8em", height: ".8em" }}
          />
          <p className="q">
            "Intelligence plus character — that is the goal of true education."
          </p>
          <span className="by">— Dr. Martin Luther King Jr.</span>
          <div
            style={{
              marginTop: 10,
              fontFamily: "var(--font-serif)",
              fontStyle: "italic",
              fontSize: 24,
              color: "var(--nl-cream)",
            }}
          >
            Northern Lights
          </div>
        </div>
      </div>
      <div className="nl-container nl-footer__bottom">
        <span>© MMXXVI · Uranus Inc. — All rights reserved.</span>
        <span>Designed for global thinkers.</span>
      </div>
    </footer>
  );
}
