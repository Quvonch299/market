import axios from "axios";
import React, { useEffect, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";

export default function AddCart({OnClose,select}) {
  const [data,setData] = useState([])
      const GetData = async () => {
        try {
          const res = await axios.get(`https://fakestoreapi.com/products/${select}`);
          setData(res.data);
          console.log(res.data);
        } catch (e) {
          console.log(e);
        }
      };
      useEffect(()=>{
        if(select){
          GetData()
        }
      },[select])
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
      <div className="bg-white rounded-xl p-6 w-[90%] max-w-xl relative">
        
        <button className="absolute top-3 right-3 text-xl text-gray-600 hover:text-black">
          <AiOutlineClose onClick={OnClose} />
        </button>

        <section className="text-gray-600">
          <div className="flex flex-col md:flex-row items-center gap-6">
            
            <img
              alt="ecommerce"
              className="w-48 h-48 object-cover rounded"
              src={data.image}
            />

            <div>
              <h2 className="text-sm text-gray-500">BRAND NAME</h2>
              <h1 className="text-gray-900 text-2xl font-semibold mb-2">{data.category}</h1>

              <p className="text-gray-700 mb-4">{data.description}</p>

              <div className="flex items-center gap-4">
                <span className="text-2xl font-bold text-gray-900">{Math.round(data.price)}$ </span>
                <button className="bg-indigo-600 text-white px-5 py-2 rounded-lg hover:bg-indigo-700">
                  Add
                </button>
              </div>
            </div>
          </div>
        </section>

      </div>
    </div>
  );
}
