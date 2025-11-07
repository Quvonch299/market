import {  useState } from 'react'
import { CiSearch } from 'react-icons/ci'
import { FaRegHeart } from 'react-icons/fa'
import { MdOutlinePeopleAlt } from 'react-icons/md'
import { RiShoppingBagLine } from 'react-icons/ri'
import { Link } from 'react-router-dom'
export default function Navbar({ setLoginModal }) {
    const [count, setCount] = useState(0)


    return (
        <div value={{setCount ,count}} className='max-w-7xl mx-auto'>
            <div className="flex justify-between items-center py-3">
                <Link to='/' className="text-black flex text-[30px]">
                    OPEN<h2 className=' text-amber-600'>SHOP</h2>
                </Link>
                <Link to='/grid' className='flex gap-3 text-white py-2 px-1 rounded-[9px] bg-amber-500 items-center hover:cursor-pointer'>
                    All Products
                </Link>
                <div className='flex items-center border py-2 px-1 rounded-2xl border-amber-600 relative'>
                    <input
                        className='outline-none w-180'
                        type="text"
                        placeholder='Samsung Galaxy S24'
                    />
                    <CiSearch />
                    {count > 0 && (
                        <div className='bg-red-500 text-white p-1 rounded-full h-6 w-6 flex justify-center items-center absolute top-0 right-0'>
                            {count}
                        </div>
                    )}
                </div>
                <Link to='/savat' className='flex items-center gap-3'>
                    <RiShoppingBagLine />
                    <p>Savat</p>
                </Link>
                <div className='flex items-center gap-3'>
                    <FaRegHeart  />
                    <span>Sevimlilar</span>
                </div>
                <div className='flex items-center gap-3'>
                    <MdOutlinePeopleAlt />
                    <button onClick={() => { setLoginModal(true) }}>Kirish</button>
                </div>
            </div>
        </div>
    )
}
