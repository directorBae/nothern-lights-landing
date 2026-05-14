import { useEffect, type ReactNode } from "react";

export type ModalId = "disclaimer" | "safeguarding" | "privacy";

type Props = {
  open: ModalId | null;
  onClose: () => void;
};

export function Modals({ open, onClose }: Props) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  return (
    <>
      <Modal id="disclaimer" open={open} onClose={onClose} title="Disclaimer">
        <p>
          노던라이츠는 고객의 유학 준비를 위한 자문(Advisory) 및 EC(Extra
          Curricular) 프로그램을 제공합니다.
        </p>
        <h3>노던라이츠는 다음을 보장하지 않습니다</h3>
        <ul>
          <li>입학(합격)</li>
          <li>장학금</li>
          <li>성적</li>
          <li>비자 승인</li>
        </ul>
        <h3>결정 권한</h3>
        <ul>
          <li>입학 / 오퍼 결정 권한 — 대학 및 교육기관</li>
          <li>비자 승인 결정 권한 — 정부 / 이민국</li>
        </ul>
        <p>
          노던라이츠는 고객이 교육기관의 공식 입학조건을 이해하고 준비할 수
          있도록 자문(Advisory)을 제공하며, 모든 상담 내용은 해당 교육기관의
          공시된 요건과 일반적 절차를 기반으로 합니다.
        </p>
      </Modal>

      <Modal
        id="safeguarding"
        open={open}
        onClose={onClose}
        title="Safeguarding"
      >
        <h3>미성년자 보호</h3>
        <p>
          노던라이츠는 미성년자(18세 미만) 관련 상담 과정에서 강화된 주의의무가
          필요함을 인지합니다.
        </p>
        <h3>기본 원칙</h3>
        <ul>
          <li>
            보호자(학부모 / 법정대리인)와의 커뮤니케이션을 원칙으로 합니다.
          </li>
          <li>
            미성년자 관련 상담은 가능한 범위 내에서 보호자 동반 또는 보호자 승인
            하에 진행됩니다.
          </li>
        </ul>
        <h3>책임 범위</h3>
        <ul>
          <li>노던라이츠는 전문적 유학생 전략 컨설팅 서비스를 제공합니다.</li>
          <li>
            학교의 생활 지도 / 현지 보호 체계는 해당 교육기관 및 보호자의 책임
            범위에 속합니다.
          </li>
        </ul>
      </Modal>

      <Modal id="privacy" open={open} onClose={onClose} title="Privacy">
        <p>
          노던라이츠는 유학 컨설팅 및 EC 프로그램 진행 중, 필요한 범위 내에서
          고객의 개인정보를 수집·이용합니다. 서비스 제공 범위와 무관한
          개인정보를 과도하게 요구하지 않습니다.
        </p>
        <h3>수집하는 정보 (예시)</h3>
        <ul>
          <li>기본 정보 — 성명, 연락처, 이메일</li>
          <li>학업 정보 — 최종 학력, 성적, 희망 전공·과정, 희망 지역·시기</li>
          <li>영어 준비 정보 — 공인어학시험 및 어학능력 수준</li>
          <li>미성년자 관련 정보 — 보호자 연락처, 학생 본인 연락처</li>
        </ul>
        <h3>이용 목적</h3>
        <ul>
          <li>상담 예약 및 상담 진행</li>
          <li>유학 전략 기획</li>
          <li>서류 체크리스트 안내 및 지원 절차 안내</li>
          <li>교육기관과의 절차적 커뮤니케이션 지원 (해당 시)</li>
        </ul>
        <h3>보관 및 보호</h3>
        <p>
          고객 개인정보는 유학 목적 달성에 필요한 기간 동안만 보관하며, 보관
          기간 종료 또는 파기 사유 발생 시 적절한 절차에 따라 파기합니다.
        </p>
        <h3>제 3자 제공</h3>
        <p>
          원칙적으로 동의 없이 제 3자에게 제공하지 않습니다. 학생 본인 또는
          보호자의 동의가 있는 경우, 합리적인 필요 범위 내에서 전달될 수
          있습니다.
        </p>
        <h3>문의</h3>
        <p>
          개인정보 처리 관련 문의 —{" "}
          <a href="mailto:privacy@northernlights.kr">
            privacy@northernlights.kr
          </a>
        </p>
      </Modal>
    </>
  );
}

function Modal({
  id,
  open,
  onClose,
  title,
  children,
}: {
  id: ModalId;
  open: ModalId | null;
  onClose: () => void;
  title: string;
  children: ReactNode;
}) {
  const isOpen = open === id;
  return (
    <div
      className={"nl-modal" + (isOpen ? " is-open" : "")}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="nl-modal__panel">
        <button className="nl-modal__close" onClick={onClose}>
          CLOSE ×
        </button>
        <h2>{title}</h2>
        {children}
      </div>
    </div>
  );
}
