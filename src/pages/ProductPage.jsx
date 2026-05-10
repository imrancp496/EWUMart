import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { PiShoppingCartSimpleBold, PiMessengerLogoBold } from "react-icons/pi";

const colorClasses = {
  blue: "bg-blue-100 text-blue-800",
  green: "bg-green-100 text-green-800",
  purple: "bg-purple-100 text-purple-800",
};

function ThumbnailImage({ imgLink, isSelected, onClick }) {
  return (
    <img
      onClick={onClick}
      className={`xs:h-24 xs:w-24 2xs:h-20 2xs:w-20 h-16 w-16 cursor-pointer rounded-xl bg-white transition-all hover:scale-105 ${
        isSelected ? "border-brand-mid border-2" : "border-border border"
      }`}
      src={imgLink}
    />
  );
}

function ProductTag({ tagName, color }) {
  const colorClass = colorClasses[color] || "bg-gray-200 text-gray-700";
  return (
    <span
      className={`border-border rounded-full border px-3 py-1 text-sm font-medium ${colorClass}`}
    >
      {tagName}
    </span>
  );
}

function ProductGallery({ images, selectedImage, setSelectedImage }) {
  return (
    <div className="mx-auto flex w-full max-w-md flex-col gap-4 sm:mx-0 sm:max-w-xl sm:flex-row sm:items-start xl:max-w-md xl:flex-col">
      <div className="border-border flex-1 rounded-2xl border bg-white">
        <img src={selectedImage} className="w-full rounded-2xl" />
      </div>
      <div className="flex justify-center gap-4 sm:flex-col xl:flex-row xl:justify-start">
        {images.map((img) => (
          <ThumbnailImage
            key={img}
            imgLink={img}
            isSelected={selectedImage === img}
            onClick={() => setSelectedImage(img)}
          />
        ))}
      </div>
    </div>
  );
}

function ProductHeader({ title, price }) {
  return (
    <>
      <h1 className="font-syne after:from-brand-mid after:to-accent text-2xl font-bold after:mt-2 after:block after:h-0.5 after:w-full after:rounded-full after:bg-linear-to-r after:content-[''] sm:text-3xl">
        {title}
      </h1>
      <p className="text-danger font-syne mt-2 text-2xl font-bold">{price}</p>
    </>
  );
}

function ProductDetailsBox() {
  return (
    <div className="border-border text-text2 mb-4 rounded-lg border bg-white p-4">
      <h2 className="mb-2 text-lg font-semibold">Product Details</h2>
      <ul className="list-outside list-disc space-y-1 pl-5">
        <li>6.7-inch Super Retina XDR display</li>
        <li>A17 Pro chip for lightning-fast performance</li>
        <li>Pro camera system with 48MP main sensor</li>
        <li>5G connectivity for faster downloads</li>
        <li>Available in Cosmic Orange, Silver, and Graphite</li>
      </ul>
    </div>
  );
}

function ProductTags() {
  return (
    <div className="flex gap-2">
      <ProductTag tagName="Gadget" color={"blue"} />
      <ProductTag tagName="Pre-Owned" color={"green"} />
      <ProductTag tagName="Brand New" color={"purple"} />
    </div>
  );
}

function SellerProfile() {
  const navigate = useNavigate();

  return (
    <div className="my-6">
      <p className="text-text3 mb-2 text-sm font-bold tracking-wider uppercase">
        Seller
      </p>
      <div className="flex items-center gap-3">
        <button
          onClick={() => navigate("/profile")}
          className={`font-syne bg-brand-mid flex h-10 w-10 cursor-pointer items-center justify-center rounded-full border-2 ${location.pathname.startsWith("/profile") ? "border-white" : "border-none"} text-center font-bold text-white`}
        >
          R
        </button>
        <a
          onClick={() => navigate("/profile")}
          className="text-text2 hover:text-brand-mid cursor-pointer text-lg font-medium hover:underline"
        >
          Imran Hossain
        </a>
      </div>
    </div>
  );
}

function ProductActions() {
  return (
    <div className="text xs:flex-row xs:gap-2 flex w-full flex-col gap-4 pt-6 sm:gap-4">
      <button className="bg-brand-mid flex flex-1 cursor-pointer items-center justify-center gap-2 rounded-full px-3 py-3 font-medium text-white transition-all hover:scale-105">
        <div className="bg-brand-light text-brand-mid flex items-center justify-center rounded-full p-1">
          <PiShoppingCartSimpleBold />
        </div>
        Add to Cart
      </button>
      <button className="bg-brand-light border-brand-mid text-brand-mid flex flex-1 cursor-pointer items-center justify-center gap-2 rounded-full border px-3 py-3 font-medium transition-all hover:scale-105">
        <div className="bg-brand-mid flex items-center justify-center rounded-full p-1 text-white">
          <PiMessengerLogoBold />
        </div>
        Message Seller
      </button>
    </div>
  );
}

export default function ProductPage() {
  // :id matches the dynamic segment in your route
  const { id } = useParams();

  const images = [
    "https://ddfndelma2gpn.cloudfront.net/color/2646/iPhone_17_Pro_Max_-_Cosmic_Orange.webp",
    "https://ddfndelma2gpn.cloudfront.net/color/2646/iPhone_17_Pro_Max_-_Deep_Blue.webp",
    "https://ddfndelma2gpn.cloudfront.net/color/2646/iPhone_17_Pro_Max_-_Silver.webp",
  ];
  const [selectedImage, setSelectedImage] = useState(images[0]);

  // Here you would typically fetch product details from an API or filter a local array using the ID.

  return (
    <div className="grid grid-cols-1 gap-x-12 gap-y-4 xl:grid-cols-[auto_1fr]">
      <ProductGallery
        images={images}
        selectedImage={selectedImage}
        setSelectedImage={setSelectedImage}
      />
      <div className="flex h-full w-full flex-col xl:min-w-md">
        <ProductHeader title="iPhone 17 Pro Max" price="৳ 168,999" />
        <SellerProfile />
        <ProductDetailsBox />
        {/* <ProductTags /> */}
        <ProductActions />
      </div>
    </div>
  );
}
