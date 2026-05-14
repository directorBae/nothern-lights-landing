import { useEffect, useRef } from "react";

type Region = { x: number; y: number; w: number; h: number };
type StarOpts = { minSize?: number; maxSize?: number; region?: Region };

function placeStars(
  container: HTMLElement,
  count: number,
  opts: StarOpts = {},
) {
  container.innerHTML = "";
  const { minSize = 1, maxSize = 2.4, region = null } = opts;
  for (let i = 0; i < count; i++) {
    const s = document.createElement("span");
    const size = minSize + Math.random() * (maxSize - minSize);
    const x = region
      ? region.x + Math.random() * region.w
      : Math.random() * 100;
    const y = region
      ? region.y + Math.random() * region.h
      : Math.random() * 100;
    const op = 0.35 + Math.random() * 0.6;
    const delay = Math.random() * 4;
    const dur = 3 + Math.random() * 4;
    s.style.cssText = `left:${x}%;top:${y}%;width:${size}px;height:${size}px;opacity:${op};animation-delay:${delay}s;animation-duration:${dur}s;`;
    container.appendChild(s);
  }
}

function renderConstellation(_svg: SVGSVGElement) {
  // no-op: 별자리 선 제거 (요구사항)
}

export function useStarfield(initialDensity = 120) {
  const densityRef = useRef(initialDensity);

  useEffect(() => {
    const skyfield = document.querySelector<HTMLDivElement>(".nl-stars");
    if (skyfield) placeStars(skyfield, densityRef.current);
    // 별자리 선/점은 렌더링하지 않음 (요구사항: 별자리 선 빼고)
    const c = document.querySelector<SVGSVGElement>(".nl-constellation");
    if (c) c.innerHTML = "";
    document
      .querySelectorAll<HTMLDivElement>(".nl-section-stars")
      .forEach((el) => {
        placeStars(el, Math.round(30), { maxSize: 1.6 });
      });
  }, []);
}

// `renderConstellation`는 더 이상 사용되지 않지만 향후 재사용을 위해 export 유지
export { renderConstellation };
