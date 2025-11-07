import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import Hero from './Hero'
import axios from 'axios'
import Login from './Login';
import User from './User';
import Under from './Under';

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
  const[dark, setDark] = useState(false)


  return (
    <div className=''>
      <Navbar setDark={setDark} dark={dark}  setLoginModal={setLoginModal} />
      <Hero products={market} />
      <Under/>
        <User />
 
      {
        loginModal&&<Login setOnclose={setOnclose}/>
      }  
    </div>
  );
}
