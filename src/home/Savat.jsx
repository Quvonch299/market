import { useState } from "react";
import { FiShoppingCart, FiTrash, FiTrash2 } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";
import Navbar from "./Navbar";

export default function Savat() {
  const [open, setOpen] = useState(false);

  

  return (
    <div className="min-h-screen bg-gray-50   p-6">
        <Navbar />

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        
           
       
      </div>

      <button
        onClick={() => setOpen(true)}
        className="fixed bottom-6 right-6 bg-black dark:bg-indigo-600 text-white p-4 rounded-full   hover:scale-110 transition"
      >
        <FiShoppingCart size={22} />
      </button>

      <div
        className={`fixed top-0 right-0 h-full w-80 bg-white dark:bg-gray-800  p-5 transition-transform duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <button
          onClick={() => setOpen(false)}
          className="absolute top-4 right-4 text-gray-600 dark:text-white text-2xl"
        >
          <AiOutlineClose />
        </button>

        <h2 className="text-xl font-bold mb-5 text-gray-800 dark:text-white">
          Your Cart
        </h2>

        <div className="space-y-4">
          
            <div
              
              className="flex items-center gap-3 bg-gray-100 dark:bg-gray-700 p-3 rounded-xl"
            >
              <img src=" " className="w-16 h-16 rounded-lg object-cover" />
              <div className="flex-1">
                <p className="font-medium text-gray-800 dark:text-white"> </p>
                <p className="text-indigo-500 font-bold"> 33$</p>
              </div>
              <FiTrash2 className="text-red-500 cursor-pointer" />
            </div>
      
        </div>

        <button className="mt-6 w-full bg-black dark:bg-indigo-600 text-white py-3 rounded-xl font-semibold hover:opacity-90 transition">
          Checkout
        </button>
      </div>
    </div>
  );
}
