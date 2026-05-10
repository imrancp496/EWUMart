import { useState, useRef, useEffect, useLayoutEffect } from "react";

export default function ProfileBio({ bioText }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [cutoffIndex, setCutoffIndex] = useState(null);
  const measureRef = useRef(null);

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useLayoutEffect(() => {
    if (!bioText || !bioText.trim()) return;

    const measureEl = measureRef.current;
    if (!measureEl) return;

    measureEl.textContent = "A\nB";
    const maxHeight = measureEl.scrollHeight;

    measureEl.textContent = bioText;

    if (measureEl.scrollHeight > maxHeight) {
      let low = 0;
      let high = bioText.length;
      let best = 0;
      while (low <= high) {
        let mid = Math.floor((low + high) / 2);

        measureEl.textContent = bioText.slice(0, mid);
        const btn = document.createElement("span");
        btn.className = "cursor-pointer font-bold hover:underline";
        btn.textContent = " ... See more";
        measureEl.appendChild(btn);

        if (measureEl.scrollHeight <= maxHeight) {
          best = mid;
          low = mid + 1;
        } else {
          high = mid - 1;
        }
      }
      setCutoffIndex(best);
    } else {
      setCutoffIndex(null);
    }
  }, [bioText, windowWidth]);

  if (!bioText || !bioText.trim()) return null;

  const showButton = cutoffIndex !== null;
  const displayedText =
    !isExpanded && showButton ? bioText.slice(0, cutoffIndex) : bioText;

  return (
    <div className="text-text2 relative mb-4 text-sm">
      <div
        ref={measureRef}
        className="pointer-events-none invisible absolute top-0 left-0 w-full leading-5 whitespace-pre-wrap"
        aria-hidden="true"
      />
      <div className="leading-5 whitespace-pre-wrap">
        <span>{displayedText}</span>
        {showButton && !isExpanded && (
          <span
            onClick={() => setIsExpanded(true)}
            className="cursor-pointer font-bold hover:underline"
          >
            {" "}
            ... See more
          </span>
        )}
        {showButton && isExpanded && (
          <span
            onClick={() => setIsExpanded(false)}
            className="ml-1 cursor-pointer font-bold hover:underline"
          >
            See less
          </span>
        )}
      </div>
    </div>
  );
}
