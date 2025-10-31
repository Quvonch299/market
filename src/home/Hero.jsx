import React from "react";
import Carigorya from "../ui/Carigorya";

const Catigorya = [
  "https://i0.wp.com/gamerz.kz/wp-content/uploads/2025/01/OIP-18.jpg?fit=600%2C600&ssl=1",
  "https://minapi.beemarket.uz/prod-media/productImages/1761565388pBlfPJWxNtIX.webp",
  "https://shop.mandodiao.com/cdn/shop/products/Koh1CIj4.png?v=1650439454",
  "https://img.birbir.uz/i/400x400-fit/files/ac/d0/e3e963cdd3192665440c78814e6c.jpg",
];

export default function Hero() {
  return (
    <div className="max-w-7xl mx-auto p-4">
      
      <img
        className="rounded-2xl w-full h-[350px] object-cover shadow-lg"
        src="https://web.openshop.uz/storage/uploads/sliders/202509/5huRSva1p37cGOlsGTCDss4w6TDUe5TF.jpg"
        alt="Banner"
      />

      <div className="flex justify-center text-2xl mt-10">
        <h2 className="flex items-center gap-2 font-semibold">
          <span className="text-amber-900 font-bold">ALL</span>
          CATEGORY
        </h2>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 mt-8 place-items-center">
        {Catigorya.map((item, index) => (
          <Carigorya key={index} catigorya={item} />
        ))}
      </div>
    </div>
  );
}
