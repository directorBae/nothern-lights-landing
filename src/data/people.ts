export type Person = {
  role: string;
  area: string;
  avatar: string;
  ko: string;
  en: string;
  creds: { text: string; hi?: boolean }[];
  quote?: string;
};

export const PEOPLE: Person[] = [
  {
    role: "CEO · 대표이사",
    area: "Strategy & Admissions",
    avatar: "J",
    ko: "정 진 석",
    en: "Jin Seok Jeong",
    creds: [
      { text: "CEO of URANUS · ALPHA WAVE · PLENUS", hi: true },
      { text: "Berklee Music Production M.A. · Valedictorian" },
      { text: "Boston Univ. — Business & Economics" },
      { text: "EC Coordinating 5 yrs · Teaching 8 yrs" },
    ],
  },
  {
    role: "Director · 디렉터",
    area: "Finance / Economics 전문위원",
    avatar: "L",
    ko: "이 철 민",
    en: "Chul Min Lee",
    creds: [
      { text: "시드인베스트먼트 선임심사역", hi: true },
      { text: "전 수성자산운용 · 블루코브인베스트먼트" },
      { text: "전 다이와증권캐피탈마켓코리아 연구조교" },
      { text: "성균관대학교 경영학 학사" },
    ],
    quote:
      '"급변하는 국제 정세 속에서 꼭 필요한 Commercial Awareness를 길러드립니다. 구시대적 컨설팅의 틀을 깬 Advanced EC를 기획합니다."',
  },
  {
    role: "Director · 디렉터",
    area: "Art / Design 전문위원",
    avatar: "S",
    ko: "서 보 현",
    en: "Bo Hyun Seo",
    creds: [
      { text: "11년차 디자이너 · 쌀보리 스튜디오 대표", hi: true },
      { text: "Uranus · Alphawave · Cosmofriends 등 다수" },
      { text: "GS SHOP PB / 로지텍 / 스타벅스 콜라보" },
      { text: "LOL · GENG · 브롤스타즈 · 언더아머 콜라보" },
    ],
    quote:
      '"사용자의 마음을 움직이는 디자인은 기술보다 공감에서 시작합니다. 창의력을 현실로 만드는 여정을 함께합니다."',
  },
  {
    role: "Coordinator · 코디네이터",
    area: "Student Care & Parent Liaison",
    avatar: "L",
    ko: "이 초 원",
    en: "Cho Won Lee",
    creds: [
      { text: "한국예술종합학교 성악과 재학 · Soprano", hi: true },
      { text: "2024 〈DON GIOVANNI〉 · 2023 〈DIE FLEDERMAUS〉" },
      { text: "리움미술관 X 박보마 〈OPERA: SKY BLUE CANON INFINITUS〉" },
      { text: "INTERNATIONAL MUSIC CONCOURS 성악 1위" },
    ],
    quote:
      '"이제는 저 혼자만의 노래가 아닌, 학생들과 호흡을 맞추며 함께 연주하는 Symphony를 들려드리겠습니다."',
  },
  {
    role: "Advisor · 자문",
    area: "법률 전문위원 · NY Bar",
    avatar: "L",
    ko: "이 호 건",
    en: "Ho Gun Lee",
    creds: [
      { text: "미국 뉴욕주 변호사 · 법무법인 케이피앤파트너스", hi: true },
      { text: "국제중재 · 기업자문 · 이민법 자문" },
      { text: "미국변호사협회(ABA) · 뉴욕변호사협회(NYSBA)" },
      { text: "전 법무법인 대륙아주 · 전 유엔 국제상거래법위원회" },
    ],
    quote:
      '"비자·영주권 컨설팅부터 EC 프로젝트 자문까지, 노던라이츠와 함께하는 여러분의 A to Z 여정을 동행합니다."',
  },
  {
    role: "Partner · 파트너",
    area: "미술 EC 전문위원 · Gallery Director",
    avatar: "B",
    ko: "방 주 훈",
    en: "Joo Hoon Bang",
    creds: [
      { text: "미술플랫폼 SEEART · 갤러리 〈씨앝〉 대표", hi: true },
      { text: "전 ARCTIC 해외사업팀 팀장" },
      { text: "전 WOOZOO CULTURES (UK) 해외사업팀" },
      { text: "SETEC BANK ART FAIR 참가 예정" },
    ],
  },
  {
    role: "Partner · 파트너",
    area: "미술 EC 전문위원 · Curator",
    avatar: "M",
    ko: "문 희 서",
    en: "Hee Seo Moon",
    creds: [
      { text: "수림문화재단 예술사업부 S.Associate", hi: true },
      { text: "전 금산갤러리 팀장 · 국내외 아트페어 세일즈" },
      { text: "전 XCI 기획팀 — 유에민준·비틀즈 전시 기획" },
      { text: "전 K현대미술관 큐레이터" },
    ],
    quote:
      '"학생의 예술적 깊이를 입증하는 독보적인 EC를 목표로, 여러분의 잠재력을 대형 캔버스 위에 펼치겠습니다."',
  },
];
