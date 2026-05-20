import { useEffect, useState } from "react";

const SECTIONS = ["home", "about", "people", "programmes", "location"];

export function Nav() {
  const [active, setActive] = useState("home");

  useEffect(() => {
    const sync = () => {
      const y = window.scrollY + 120;
      let cur = "home";
      for (const id of SECTIONS) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= y) cur = id;
      }
      setActive(cur);
    };
    window.addEventListener("scroll", sync, { passive: true });
    sync();
    return () => window.removeEventListener("scroll", sync);
  }, []);

  const onClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    const el = document.getElementById(id);
    if (el) {
      e.preventDefault();
      const top = el.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: "smooth" });
    }
  };

  return (
    <nav className="nl-nav">
      <div className="nl-container nl-nav__inner">
        <a
          className="nl-brand"
          href="#home"
          onClick={(e) => onClick(e, "home")}
        >
          <span className="nl-brand__star" aria-hidden="true">
            <svg viewBox="0 0 32 32" fill="none">
              <path
                d="M16 0 L17.6 14.4 L32 16 L17.6 17.6 L16 32 L14.4 17.6 L0 16 L14.4 14.4 Z"
                fill="#FFD27F"
              />
            </svg>
          </span>
          <span>
            <span className="nl-brand__wm">Northern Lights</span>
            <span className="nl-brand__sub">노던라이츠 · EST. MMXXIV</span>
          </span>
        </a>
        <div className="nl-nav__menu">
          {[
            ["home", "Home"],
            ["about", "About"],
            ["people", "People"],
            ["programmes", "Programmes"],
            ["location", "Contact"],
          ].map(([id, label]) => (
            <a
              key={id}
              href={`#${id}`}
              className={active === id ? "is-active" : ""}
              onClick={(e) => onClick(e, id)}
            >
              {label}
            </a>
          ))}
        </div>
        <a
          className="nl-nav__cta"
          href="#contact"
          onClick={(e) => onClick(e, "contact")}
        >
          무료 상담예약
        </a>
      </div>
    </nav>
  );
}
