import axios from 'axios';
import React, { useEffect, useState } from 'react'

export default function Allproducts() {
     const [All, setAll] = useState([]);

  const GetData = async () => {
    try {
      const res = await axios.get("https://fakestoreapi.com/products");
      setAll(res.data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    GetData();
  }, []);

  return (
    <div>
    {
        All.length>0?All.map(()=>{
return<div>
    
</div>
        }):''
    }
        
 </div>
  )
}
