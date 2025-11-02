import React, { useEffect, useState } from "react";
import Carigorya from "../ui/Carigorya";
import axios from "axios";
 

export default function Hero() {
const[Catigorya,setCatigorya] = useState([])

const getData = async function(){
  try{
    const res = await axios.get('https://fakestoreapi.com/products')
    console.log(res.data);
   setCatigorya(res.data);
    
  }catch(e){
    console.log(e);
    
  }
}
useEffect(()=>{
  getData()
},[])

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

      <div className="flex gap-4 overflow-x-auto scrollbar-hide p-2 ">
         {
          Catigorya.length>0?Catigorya.map((post)=>{
             return<div key={post.id}>
               <Carigorya image={post.image}  />
              
             </div>
          }):''
         }
        
      </div>
    </div>
  );
}
