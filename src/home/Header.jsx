import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import Hero from './Hero'
import axios from 'axios'
import Login from './Login';

export default function Header() {
  const [market, setMarket] = useState([]);
  const [loginModal,setLoginModal] = useState(false)
 

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
  const setOnclose = function(){
    setLoginModal(false)
  }


  return (
    <div>
      <Navbar setLoginModal={setLoginModal} />
      <Hero products={market} />

      {
        loginModal&&<Login setOnclose={setOnclose}/>
      }  
    </div>
  );
}
