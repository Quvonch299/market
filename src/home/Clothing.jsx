import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Clothing() {
  const [clothes, setClothes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchClothing = async () => {
      try {
        const res = await axios.get("https://fakestoreapi.com/products");
        const filtered = res.data.filter(
          (item) =>
            item.category === "men's clothing" ||
            item.category === "women's clothing"
        );
        setClothes(filtered);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching clothing data:", error);
      }
    };
    fetchClothing();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-lg font-semibold">Yuklanmoqda...</p>
      </div>
    );
  }

  return (
    <div className="p-10">
      <h1 className="text-center text-3xl font-bold text-purple-700 mb-10">
        Kiyimlar to‘plami 👕
      </h1>

      <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {clothes.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-2xl shadow-lg p-4 hover:shadow-2xl transition-shadow duration-300"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-64 object-contain mb-4"
            />
            <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
            <p className="text-gray-600 mb-3">{item.category}</p>
            <p className="font-bold text-lg text-blue-600">${item.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
