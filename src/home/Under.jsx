import axios from 'axios';
import React, {   useEffect, useState } from 'react'
import { CiHeart } from 'react-icons/ci';

export default function Under() {
 





          const [All, setAll] = useState([]);
    
      const GetData = async () => {
        try {
          const res = await axios.get("https://fakestoreapi.com/products");
          setAll(res.data);
          console.log(res.data);
        } catch (e) {
          console.log(e);
        }
      };
    
      useEffect(() => {
        GetData();
      }, []);
      
  return (
    <div >
        <h2 className='flex justify-center  text-[30px] mt-10 text-fuchsia-900 font-bold'>Eng zo`r tanlovlar</h2>
        <div className='grid grid-cols-4 gap-4 mt-23'>
         {

       All.length>0?All.map((post)=>{
        return<div key={post.id}>
       <div className="mb-4  relative bg-white/40 backdrop-blur-xl rounded-3xl shadow-lg overflow-hidden border border-white/30 hover:shadow-2xl transition-all duration-300 p-5">
        
        <div className="w-full h-56 rounded-2xl bg-gradient-to-br from-gray-200 to-gray-100 flex items-center justify-center overflow-hidden">
          <img
            src={post.image}
            className="w-full h-full object-cover group-hover:scale-105 transition"
            alt="product"
          />
        </div>

        <div className="mt-4">
          <h2 className="text-lg font-semibold text-gray-900">{post.category}</h2>
          <p className="text-gray-600 text-sm mt-1">{post.title}</p>
        </div>

        <div className="mt-5 flex items-center justify-between">
          <span className="text-xl font-bold text-gray-900">{Math.round(post.price)}$</span>

          <button   className=" hover:cursor-pointer   bg-black text-white px-5 py-2 rounded-2xl text-sm font-medium hover:bg-gray-900 transition">
         <CiHeart   />
          </button>
        </div>
      </div>

        </div>
       }):''
    }
    </div>
    </div>
  )
}
