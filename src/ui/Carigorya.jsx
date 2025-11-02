import React, {} from 'react'

export default function Carigorya({image}  ) {
 
 
  return (

 

    <div>
      
        <div>
            <div className='bg-amber-700 h-30 w-30 rounded-2xl object-contain hover:shadow-lg transition-all flex justify-center'>
            <img className='p-2' src={image} alt=""/>
            </div>
            <h2 className='flex'>Men's Cloths</h2>
        </div>
    </div>
  )
}
