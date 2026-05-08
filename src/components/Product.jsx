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

export default function Product({
  productName,
  price,
  productImgLink,
  rating,
  totalReviews,
}) {
  return (
    <div className="2xs:flex 2xs:gap-4 xs:block rounded-lg bg-white p-4 shadow-md">
      <a className="xs:basis-auto 2xs:basis-2/5 cursor-pointer">
        <img src={productImgLink} />
      </a>
      <div className="2xs:basis-3/5 xs:basis-auto mt-4">
        <a className="hover:text-brand-mid mb-2 line-clamp-2 h-12 cursor-pointer text-lg leading-6 font-medium hover:underline">
          {productName}
        </a>
        <RatingStars rating={rating} totalReviews={totalReviews} />
        <p className="text-danger font-syne mt-2 text-xl font-bold">
          ৳ {price}
        </p>
      </div>
    </div>
  );
}
