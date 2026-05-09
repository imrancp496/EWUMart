import { PiStarBold, PiStarFill } from "react-icons/pi";

function RatingStars({ rating, totalReviews }) {
  const fillPercentage = Math.min(Math.max((rating / 5) * 100, 0), 100);

  return (
    <div className="xs:text-xs flex items-center gap-1.5 font-sans text-sm sm:text-sm">
      <span className="leading-none font-semibold text-[#1a1a1a]">
        {rating}
      </span>

      <div className="relative inline-flex items-center">
        <div className="text-accent flex items-center">
          {Array.from({ length: 5 }).map((_, i) => (
            <PiStarBold key={i} />
          ))}
        </div>
        <div
          className="absolute top-0 left-0 overflow-hidden"
          style={{ width: `${fillPercentage}%` }}
        >
          <div className="text-accent flex w-max items-center">
            {Array.from({ length: 5 }).map((_, i) => (
              <PiStarFill key={i} />
            ))}
          </div>
        </div>
      </div>

      <span className="leading-none font-semibold text-[#666]">
        ({totalReviews})
      </span>
    </div>
  );
}
