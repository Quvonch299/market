import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import Hero from './Hero'
import axios from 'axios'

export default function Header() {
  const [market, setMarket] = useState([]);

  const GetData = async () => {
    try {
      const res = await axios.get("https://fakestoreapi.com/products");
      setMarket(res.data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    GetData();
  }, []);

  return (
    <div>
      <Navbar />
      <Hero products={market} />  
    </div>
  );
}
