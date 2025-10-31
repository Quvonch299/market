import React from 'react'
import Allproducts from './Allproducts'
import Navbar from './Navbar'

export default function Grid() {
  return (
    <div  className='max-w-7xl mx-auto'>
<Navbar/>
          <div className='grid grid-cols-4 gap-4 mg-2'>
      <Allproducts  />
      <Allproducts  />
      <Allproducts  />
      <Allproducts  />
      </div>
    </div>
  )
}
