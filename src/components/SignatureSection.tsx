export function SignatureSection() {
  return (
    <section className="nl-section" data-screen-label="Signature Projects">
      <div className="nl-container">
        <header className="nl-section__head">
          <div className="nl-section__num">07 /</div>
          <div className="nl-section__title">
            <span className="nl-eyebrow">Signature Projects</span>
            <h2 className="nl-h2">
              입시생을 넘어 — <em>아티스트의 데뷔.</em>
            </h2>
            <p className="nl-lede" style={{ maxWidth: "64ch" }}>
              예체능 입시 합격의 70%를 좌우하는 포트폴리오. 노던라이츠의 두
              시그니처 프로젝트는 단순한 EC가 아닌, 한 명의 예술가로서 세상에
              첫발을 내딛는 '공식 데뷔'의 무대입니다.
            </p>
          </div>
        </header>

        <div className="nl-signature">
          <article className="nl-sig-card">
            <span className="badge">
              <span className="nl-mark"></span> PROJECT · ART TRACK
            </span>
            <h3>HERA</h3>
            <p className="tagline">
              THE PATH TO AN ARTISTIC DEBUT — 단체전, 워크숍, 에세이까지의 통합
              로드맵
            </p>
            <p className="desc">
              동시대 담론을 예술의 언어로 해석하고, '전시 준비위원회'로서
              리더십을 증명합니다. 거장 멘토 · 큐레이터 · 노던라이츠
              코디네이터의 1:N 밀착 빌딩으로 학생만의 단 하나의 주제를
              찾아냅니다.
            </p>
            <ul className="nl-timeline">
              <li>
                <span className="when">~ '26.06</span>
                <div>
                  <strong>Discovery</strong> · 학생·학부모 심층 면담 / 키워드
                  도출
                </div>
              </li>
              <li>
                <span className="when">'26.07 – '27.03</span>
                <div>
                  <strong>Materialization</strong> · 단체전 기획 + 워크숍 병행
                </div>
              </li>
              <li>
                <span className="when">'27.04 – '27.05</span>
                <div>
                  <strong>Exhibition</strong> · 실제 갤러리 전시 + 상호 평가
                </div>
              </li>
              <li>
                <span className="when">'27.06 – '27.09</span>
                <div>
                  <strong>Archiving &amp; Essay</strong> · Asset 기반 에세이
                  집필
                </div>
              </li>
              <li>
                <span className="when">'27.09 – '27.11</span>
                <div>
                  <strong>Application</strong> · Common App 최종 제출
                </div>
              </li>
            </ul>
          </article>

          <article className="nl-sig-card">
            <span className="badge">
              <span className="nl-mark"></span> PROJECT · MUSIC TRACK
            </span>
            <h3>DIONYSUS</h3>
            <p className="tagline">
              PERFORMER'S VENTURE — 입시라는 틀을 깨는 학생만의 예술적
              광기(Dionysiac)
            </p>
            <p className="desc">
              학생이 선택한 주제 기반 레퍼토리 탐구. Studio Recital + Peer
              Review + 지휘자 멘토링이 결합된 정기 내부 공연과 전문 레코딩으로
              고음질 음반·퍼포먼스 영상·Artist Statement를 제작합니다.
            </p>
            <ul className="nl-timeline">
              <li>
                <span className="when">Phase 01</span>
                <div>
                  <strong>Repertoire Curation</strong> · 학생 주제 기반 레퍼토리
                  설계
                </div>
              </li>
              <li>
                <span className="when">Phase 02</span>
                <div>
                  <strong>Studio Recital</strong> · 정기 내부 공연 + Peer Review
                </div>
              </li>
              <li>
                <span className="when">Phase 03</span>
                <div>
                  <strong>Conductor Mentoring</strong> · 양자열 지휘자 1:1
                  멘토링
                </div>
              </li>
              <li>
                <span className="when">Phase 04</span>
                <div>
                  <strong>Recording &amp; Statement</strong> · 음반·영상·Artist
                  Statement
                </div>
              </li>
              <li>
                <span className="when">Phase 05</span>
                <div>
                  <strong>Customization</strong> · 기악 종류별 프로그램
                  커스터마이징
                </div>
              </li>
            </ul>
          </article>
        </div>
      </div>
    </section>
  );
}
