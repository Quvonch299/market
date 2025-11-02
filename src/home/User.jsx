import React from 'react'
import { IoPeople } from 'react-icons/io5'
import { Link } from 'react-router-dom'

export default function User() {
  return (
    <Link to={'userbtn'} className='hover:scale-115 transition-all hover:cursor-pointer fixed bottom-6 left-6 bg-fuchsia-800 w-15 h-15 rounded-full flex justify-center items-center text-white'>
    
        <h2 className='flex flex-col justify-center items-center '>    <IoPeople  />user</h2>
    </Link>
  )
}
  