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
        src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjy-XkYnTJ4vSEU0C1haOsgf_KHQ_JiyWpxquxykRiPXt3KmDvLS23lv1exwisqG2uYyINxF6O_FPhBJ9OaVQLerySGUdk4HsMFb7sTvZ_yb2yRvDiJGPuVYwBofpU0_zbwORTQmdfmraYD/s1890/mobile+shop+flex+banner+psd.PNG"
        alt="Banner"
      />

      <div className="flex justify-center text-2xl mt-10">
        <h2 className="flex items-center gap-2 font-semibold">
          <span className="text-amber-900 font-bold">ALL</span>
          CATEGORY
        </h2>
      </div>

      <div className="flex justify-center ">
        <Carigorya/>
        
      </div>
    </div>
  );
}
