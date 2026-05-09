import { Link } from "react-router-dom";

export default function Product({
  id,
  productName,
  price,
  productImgLink,
  // rating,
  // totalReviews,
}) {
  return (
    <div className="2xs:flex 2xs:gap-4 xs:block rounded-lg bg-white p-4 shadow-md">
      <Link
        to={`/product/${id}`}
        className="xs:basis-auto 2xs:basis-2/5 cursor-pointer"
      >
        <img src={productImgLink} />
      </Link>
      <div className="2xs:basis-3/5 xs:basis-auto mt-4">
        <Link
          to={`/product/${id}`}
          className="hover:text-brand-mid mb-2 line-clamp-2 h-12 cursor-pointer text-lg leading-6 font-medium hover:underline"
        >
          {productName}
        </Link>
        {/* <RatingStars rating={rating} totalReviews={totalReviews} /> */}
        <p className="text-danger font-syne text-xl font-bold"> ৳ {price}</p>
      </div>
    </div>
  );
}
