import ProductGroup from "../components/ProductGroup";

const homeProducts = [
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
  {
    id: 5,
    name: "iPhone 17 Pro Max",
    link: "https://ddfndelma2gpn.cloudfront.net/color/2646/iPhone_17_Pro_Max_-_Cosmic_Orange.webp",
    price: "168,999",
  },
  {
    id: 6,
    name: "Apple 2026 MacBook Air 13-inch Laptop with M5 chip: Built for AI, 13.6-inch Liquid Retina Display, 16GB Unified Memory, 512GB SSD, 12MP Center Stage Camera, Touch ID, Wi-Fi 7; Midnight",
    link: "https://www.startech.com.bd/image/cache/catalog/laptop/apple/macbook-air-13-m4/midnight/macbook-air-13-m4-midnight-01-500x500.webp",
    price: "142,500",
  },
  {
    id: 7,
    name: 'iPad Pro M5 13" (2025)',
    link: "https://ddfndelma2gpn.cloudfront.net/color/2811/iPad_Pro_M5_-_Space_Black.webp",
    price: "174,999",
  },
  {
    id: 8,
    name: "Apple 2026 MacBook Air 13-inch Laptop with M5 chip: Built for AI, 13.6-inch Liquid Retina Display, 16GB Unified Memory, 512GB SSD, 12MP Center Stage Camera, Touch ID, Wi-Fi 7; Midnight",
    link: "https://www.startech.com.bd/image/cache/catalog/laptop/apple/macbook-air-13-m4/midnight/macbook-air-13-m4-midnight-01-500x500.webp",
    price: "142,500",
  },
  {
    id: 9,
    name: 'iPad Pro M5 13" (2025)',
    link: "https://ddfndelma2gpn.cloudfront.net/color/2811/iPad_Pro_M5_-_Space_Black.webp",
    price: "174,999",
  },
  {
    id: 10,
    name: "iPhone 17 Pro Max",
    link: "https://ddfndelma2gpn.cloudfront.net/color/2646/iPhone_17_Pro_Max_-_Cosmic_Orange.webp",
    price: "168,999",
  },
  {
    id: 11,
    name: "Apple 2026 MacBook Air 13-inch Laptop with M5 chip: Built for AI, 13.6-inch Liquid Retina Display, 16GB Unified Memory, 512GB SSD, 12MP Center Stage Camera, Touch ID, Wi-Fi 7; Midnight",
    link: "https://www.startech.com.bd/image/cache/catalog/laptop/apple/macbook-air-13-m4/midnight/macbook-air-13-m4-midnight-01-500x500.webp",
    price: "142,500",
  },
  {
    id: 12,
    name: 'iPad Pro M5 13" (2025)',
    link: "https://ddfndelma2gpn.cloudfront.net/color/2811/iPad_Pro_M5_-_Space_Black.webp",
    price: "174,999",
  },
];

export default function Home() {
  return (
    <ProductGroup heading="Check out what's new!" products={homeProducts} />
  );
}
