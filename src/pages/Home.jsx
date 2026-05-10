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
    link: "https://scontent.fdac207-1.fna.fbcdn.net/v/t39.30808-6/688838295_2868852763463098_1767145645454168066_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=13d280&_nc_eui2=AeHVIRqlNn0Shdxvjm699_UOISarfNvCk1AhJqt828KTUKKyw6lnJvPmAharvPa-3OQ_781Ccic_kor9_TfmbQ1B&_nc_ohc=WZj1EbFStsEQ7kNvwH1jGgD&_nc_oc=AdryfY7YkTmWTJ5Q5q_aF3ygqKJNCM4WNLlPt8t9GDb_tnF5Lj7sly7iPtgmUiN7efE&_nc_zt=23&_nc_ht=scontent.fdac207-1.fna&_nc_gid=6zdWI7K_C720_tDbjqCvXQ&_nc_ss=7b2a8&oh=00_Af5zc6H1ydaCLqxGsYudRGjLWs4sCt910HPUtNq_-VqdvQ&oe=6A035F51",
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
