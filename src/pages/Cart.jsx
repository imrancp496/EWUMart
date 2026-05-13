import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { PiTrashBold } from "react-icons/pi";

const cartProducts = [
  {
    id: 1,
    name: "iPhone 17 Pro Max",
    link: "https://ddfndelma2gpn.cloudfront.net/color/2646/iPhone_17_Pro_Max_-_Cosmic_Orange.webp",
    price: "168,999",
  },
  {
    id: 2,
    name: "Apple 2026 MacBook Air 13-inch Laptop with M5 chip: Built for AI, 13.6-inch Liquid Retina Display, 16GB Unified Memory, 512GB SSD, 12MP Center Stage Camera, Touch ID, Wi-Fi 7; Midnight",
    link: "https://www.startech.com.bd/image/cache/catalog/laptop/apple/macbook-air-13-m4/midnight/macbook-air-13-m4-midnight-01-500x500.webp",
    price: "142,500",
  },
  {
    id: 3,
    name: 'iPad Pro M5 13" (2025)',
    link: "https://ddfndelma2gpn.cloudfront.net/color/2811/iPad_Pro_M5_-_Space_Black.webp",
    price: "174,999",
  },
  {
    id: 4,
    name: "Airpods 2nd Gen",
    link: "https://www.macfactory.in/cdn/shop/products/22159-wireless-headphones-for-apple-airpods-3rd-generation-1_1024x.jpg?v=1642091220",
    price: "13,999",
  },
];

function SellerProfile() {
  const navigate = useNavigate();

  return (
    <div className="mb-4">
      <div className="flex items-center gap-3">
        <button
          onClick={() => navigate("/profile")}
          className={`font-syne bg-brand-mid flex h-5 w-5 cursor-pointer items-center justify-center rounded-full border-2 text-xs sm:h-8 sm:w-8 sm:text-base ${location.pathname.startsWith("/profile") ? "border-white" : "border-none"} text-center font-bold text-white`}
        >
          R
        </button>

        <a
          onClick={() => navigate("/profile")}
          className="text-text2 hover:text-brand-mid cursor-pointer text-sm font-medium hover:underline sm:text-base"
        >
          Imran Hossain
        </a>
      </div>
    </div>
  );
}

function CartProduct({ id, productName, price, productImgLink }) {
  return (
    <div className="2xs:gap-x-8 2xs:items-center 2xs:grid 2xs:grid-cols-5 2xs:grid-rows-[1fr, auto] overflow-hidden rounded-xl bg-white p-4 shadow-md sm:grid-cols-7 sm:grid-rows-[1fr_auto] lg:p-8">
      <Link
        className="2xs:col-start-1 2xs:col-span-2 2xs:row-start-1 cursor-pointer sm:col-span-2 sm:col-start-1 sm:row-start-1"
        to={`/product/${id}`}
      >
        <img src={productImgLink} />
      </Link>

      <div className="2xs:col-start-3 2xs:col-span-3 2xs:row-start-1 sm:col-span-3 sm:col-start-3 sm:row-start-1">
        <Link
          className="xs:text-lg hover:text-brand-mid mb-2 line-clamp-2 cursor-pointer leading-6 font-medium hover:underline sm:text-xl"
          to={`/product/${id}`}
        >
          {productName}
        </Link>

        <div className="">
          <SellerProfile />
        </div>

        <p className="xs:text-xl text-danger font-syne text-lg font-bold sm:hidden">
          {" "}
          ৳ {price}
        </p>
      </div>

      <div className="hidden sm:col-span-2 sm:col-start-6 sm:row-start-1 sm:flex sm:items-center sm:justify-start">
        <p className="xs:text-xl text-danger font-syne text-lg font-bold sm:text-2xl">
          ৳ {price}
        </p>
      </div>

      <div className="2xs:col-start-1 2xs:col-span-5 2xs:row-start-2 flex justify-end self-end sm:col-span-2 sm:col-start-6 sm:row-start-2 sm:items-end sm:justify-end">
        <button className="flex h-8 w-8 shrink-0 cursor-pointer items-center justify-center rounded-full bg-gray-200 text-gray-600 hover:bg-gray-300 lg:hidden">
          <PiTrashBold size={16} />
        </button>
        <button className="hidden h-8 w-8 shrink-0 cursor-pointer items-center justify-center rounded-full bg-gray-200 text-gray-600 hover:bg-gray-300 lg:flex lg:h-10 lg:w-10">
          <PiTrashBold size={18} />
        </button>
      </div>
    </div>
  );
}

export default function Cart() {
  return (
    <div>
      <h1 className="mb-4">
        <span className="font-syne from-brand-mid to-accent bg-linear-to-r bg-clip-text text-xl font-bold text-transparent md:text-2xl">
          Shopping Cart
        </span>
      </h1>

      <div className="ml:gap-6 flex flex-col gap-4">
        {cartProducts &&
          cartProducts.map((product) => (
            <CartProduct
              key={product.id}
              id={product.id}
              productName={product.name}
              productImgLink={product.link}
              price={product.price}
            />
          ))}
      </div>
    </div>
  );
}
