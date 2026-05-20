type Review = {
  rating: number;
  title: string;
  body: string;
  author: string;
  meta: string;
};

const REVIEWS: Review[] = [
  {
    rating: 5,
    title: "방향을 잃었던 시기, 정확한 좌표가 되어주었습니다",
    body: "처음엔 막연한 미국 유학의 꿈만 있었습니다. 노던라이츠는 아이의 강점과 가능성을 끊임없이 발굴해, 단순 합격이 아닌 학생만의 ‘이야기’를 만들어주었습니다. UC Berkeley 합격까지의 여정을 함께해주어 진심으로 감사드립니다.",
    author: "정모 학부모",
    meta: "UC Berkeley · Business · 2025",
  },
  {
    rating: 5,
    title: "EC가 결국 ‘서사’임을 처음 알게 되었어요",
    body: "다른 컨설팅과 달리 활동을 채우는 데 급급하지 않았습니다. 왜 이 활동을 하는지, 무엇을 남기고 싶은지를 먼저 물어봐주셨고, 그 질문들이 제 에세이가 되었습니다. 결과적으로 가장 가고 싶었던 학교의 장학금까지 받았습니다.",
    author: "K. Lee 학생",
    meta: "UC San Francisco · Biology · $108K Scholarship",
  },
  {
    rating: 5,
    title: "예체능 입시의 본질을 가장 잘 이해하는 팀",
    body: "포트폴리오의 ‘퀄리티’만 강조하던 다른 곳과 달리, 노던라이츠는 작가로서의 정체성을 구축하도록 도와주었습니다. 전시를 직접 기획해본 경험이 결국 합격의 결정타였다고 생각합니다.",
    author: "S. Park 학생",
    meta: "Art Track · HERA Project · 2025",
  },
  {
    rating: 5,
    title: "1:1 밀착, 진심 어린 케어",
    body: "코디네이터 선생님이 매주 학생·학부모와 함께 호흡해 주셨습니다. 입시 직전 가장 불안했던 시기에 가장 든든했던 분들이었습니다. 합격 결과보다 그 과정 자체가 아이에게 큰 자산이 되었습니다.",
    author: "박모 학부모",
    meta: "Purdue · Animal Science · 2025",
  },
  {
    rating: 5,
    title: "음악으로 ‘나’를 증명하는 길을 알려주셨습니다",
    body: "단순 입시 레슨이 아니라, 어떤 음악가가 될 것인가에 대해 함께 고민해주셨습니다. DIONYSUS 프로젝트로 만든 음반과 영상이 결국 저의 가장 강력한 무기가 되었습니다.",
    author: "J. Kim 학생",
    meta: "Music Track · DIONYSUS · 2025",
  },
  {
    rating: 5,
    title: "트렌드를 정확히 읽는 컨설팅",
    body: "최신 입시 트렌드를 표면적으로만 전달하는 곳과 달리, 노던라이츠는 학교별·전공별 평가 기준의 미세한 차이까지 알려주셨습니다. 그 비대칭적 정보력이 결정적이었습니다.",
    author: "최모 학부모",
    meta: "NYU · Economics · 2025",
  },
];

function Stars({ n }: { n: number }) {
  return (
    <span className="nl-review__stars" aria-label={`${n} out of 5`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <span key={i} className={i < n ? "is-on" : ""}>
          ★
        </span>
      ))}
    </span>
  );
}

export function SignatureSection() {
  return (
    <section className="nl-section" data-screen-label="Reviews">
      <div className="nl-container">
        <header className="nl-section__head">
          <div className="nl-section__num">07 /</div>
          <div className="nl-section__title">
            <span className="nl-eyebrow">Reviews · 학부모 &amp; 학생 후기</span>
            <h2 className="nl-h2">
              결과보다 <em>과정의 깊이</em>로 증명되는 신뢰.
            </h2>
            <p className="nl-lede" style={{ maxWidth: "64ch" }}>
              합격은 결과일 뿐, 노던라이츠가 만들어내는 진짜 가치는
              학생·학부모와 함께한 여정 안에 있습니다. 직접 동행한 분들의
              목소리를 전합니다.
            </p>
          </div>
        </header>

        <div className="nl-reviews">
          {REVIEWS.map((r, i) => (
            <article className="nl-review" key={i}>
              <Stars n={r.rating} />
              <h3 className="nl-review__title">{r.title}</h3>
              <p className="nl-review__body">{r.body}</p>
              <footer className="nl-review__meta">
                <strong>{r.author}</strong>
                <span>{r.meta}</span>
              </footer>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
