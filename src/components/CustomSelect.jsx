import { useState, useRef, useEffect } from "react";
import { PiCaretDown } from "react-icons/pi";

export default function CustomSelect({
  options,
  placeholder,
  value,
  onChange,
}) {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative w-full" ref={containerRef}>
      <button
        type="button"
        className={`flex w-full items-center justify-between rounded-lg border-[1.5px] px-4 py-2 text-left transition-colors focus:outline-none ${
          isOpen ? "border-brand-mid" : "border-border"
        }`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span
          className={
            value ? "text-text truncate pr-2" : "text-text2 truncate pr-2"
          }
        >
          {value
            ? options.find((o) => o.value === value)?.label || value
            : placeholder}
        </span>
        <PiCaretDown
          size={16}
          className={`text-text2 shrink-0 transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {isOpen && (
        <div className="border-border absolute top-[calc(100%+0.25rem)] left-0 z-300 max-h-40 w-full overflow-y-auto rounded-lg border bg-white py-1 text-left shadow-lg">
          {options.map((option) => (
            <div
              key={option.value}
              className={`mx-1 mb-1 cursor-pointer rounded-md px-3 py-2 text-sm transition-colors last:mb-0 ${
                value === option.value
                  ? "bg-brand text-white"
                  : "text-text hover:bg-bg2"
              }`}
              onClick={() => {
                onChange(option.value);
                setIsOpen(false);
              }}
            >
              {option.label}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
