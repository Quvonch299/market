import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { AiOutlineClose } from 'react-icons/ai'

export default function UsersModal({Userclose,select}) {
    const [data,setData] = useState([])
      const GetData = async () => {
        try {
          const res = await axios.get(`https://fakestoreapi.com/users/${select}`);
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
    <div className=' inset-0 fixed   flex items-center justify-center bg-black/40 backdrop-blur-sm'>
        <div className="bg-white p-4 rounded-[10px] relative  ">
              <AiOutlineClose onClick={Userclose} className=' hover:cursor-pointer  absolute top-2 right-2' />
            <div className='mt-3'>
                <h2><b>Firstname:</b> {data.name?.firstname}</h2>
                <h2><b>Lastname:</b>{data.name?.lastname}</h2>
                <h2><b>Email:</b>{data.email}</h2>
                <h2><b>Phone:</b>{data.phone}</h2>
                <h2><b>Username:</b>{data.username}</h2>
            </div>
        </div>
    </div>
  )
}
