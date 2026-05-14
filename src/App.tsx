import { useState } from "react";
import { Nav } from "./components/Nav";
import { Hero } from "./components/Hero";
import { AssessmentSection } from "./components/AssessmentSection";
import { WhySection } from "./components/WhySection";
import { CeoSection } from "./components/CeoSection";
import { MissionSection } from "./components/MissionSection";
import { PeopleSection } from "./components/PeopleSection";
import { ProgrammesSection } from "./components/ProgrammesSection";
import { SignatureSection } from "./components/SignatureSection";
import { TrackRecordSection } from "./components/TrackRecordSection";
import { ContactSection } from "./components/ContactSection";
import { Footer } from "./components/Footer";
import { Modals, type ModalId } from "./components/Modals";
import { useStarfield } from "./hooks/useStarfield";

export default function App() {
  const [modal, setModal] = useState<ModalId | null>(null);
  // 고정 설정: 별 밀도 120, 별자리 선 없음, 북극성 광휘 0.8, 별빛 컬러 노란색
  useStarfield(120);

  return (
    <>
      <Nav />
      <Hero />
      <AssessmentSection />
      <WhySection />
      <CeoSection />
      <MissionSection />
      <PeopleSection />
      <ProgrammesSection />
      <SignatureSection />
      <TrackRecordSection />
      <ContactSection />
      <Footer onOpenModal={(id) => setModal(id)} />
      <Modals open={modal} onClose={() => setModal(null)} />
    </>
  );
}
