import React, {} from 'react'
import { FaTv } from 'react-icons/fa'
import { GiClothes } from 'react-icons/gi'
import { IoPhonePortrait } from 'react-icons/io5'
import { MdComputer } from 'react-icons/md'
import { Link } from 'react-router-dom'

export default function Carigorya() {
 
 
  return (

 

    <div className='grid grid-cols-4 gap-40 mt-10 '>
      
        <Link to={'/clothing'} className='cursor-pointer '>
            <div className='border-[2px]  items-center h-30 w-30 rounded-2xl object-contain hover:shadow-lg transition-all flex justify-center'>
              <GiClothes className='w-20 h-20 text-red-700' />
            </div>
            <div className='mt-3 w-30 text-center'>

            <h2 >Clothing</h2>
            </div>
        </Link>
        <div className='cursor-pointer'>
            <div className='border-[2px] items-center h-30 w-30 rounded-2xl object-contain hover:shadow-lg transition-all flex justify-center'>
              <MdComputer  className='w-20 h-20 text-blue-700' />
            </div>
            <div className='mt-3 w-30 text-center'>

            <h2 >Compyter</h2>
            </div>
        </div>
        <div className='cursor-pointer'>
            <div className='border-[2px] items-center h-30 w-30 rounded-2xl object-contain hover:shadow-lg transition-all flex justify-center'>
              <IoPhonePortrait  className='w-20 h-20 ' />
            </div>
            <div className='mt-3 w-30 text-center'>

            <h2 >Phone</h2>
            </div>
        </div>
        <div className='cursor-pointer'>
            <div className='border-[2px] items-center h-30 w-30 rounded-2xl object-contain hover:shadow-lg transition-all flex justify-center'>
              <FaTv  className='w-20 h-20 text-red-300' />
            </div>
            <div className='mt-3 w-30 text-center'>

            <h2 >Tv</h2>
            </div>
        </div>
    </div>
  )
}
