import React from 'react'
import {ChevronDown, Phone, Search, ShoppingCart} from 'lucide-react'
import NavMenu from './NavMenu'

function Navbar() {
  const consultantNum = "+36 55 540 069"
  const iformatblue = "#3b82f6"

  return (
    <div className='bg-gray-100'>
      <div className='max-w-6xl mx-auto h-[86.25px] bg-gray-100 flex flex-row'>
        <div className='w-45 flex justify-center items-center'>
          <img className='w-[130px]' src="/techmax-logo.png" alt="" />
        </div>

        {/* // Middle section */}
        <div className='flex-1  flex justify-center items-center'>
          <ul className='flex items-center justify-around w-[85%]'>
            <NavMenu menu={"Home"} />
            <NavMenu menu={"About Us"} />
            <NavMenu menu={"Pages"} />
            <NavMenu menu={"Blog"} />
            <NavMenu menu={"Contact"} />
          </ul>
        </div>

        {/* // Right section */}
        <div className='w-70  flex'>
          <div className='flex-1 flex justify-center items-center gap-2'>
            <div className='flex justify-center items-center'>
              <Phone fill={iformatblue} color={iformatblue} size={28} />
            </div>

            <div className='flex flex-col gap-0 justify-center'>
              <span className='text-[10px] font-semibold text-gray-500'>Free Consultant</span>
              <span className='font-semibold text-sm '>{consultantNum}</span>
            </div>
          </div>

        <div className='flex-1 flex items-center justify-center gap-3'>
            <button className='border border-1 border-gray-300 p-2 rounded-full'>
              <Search size={20} strokeWidth={1.5}/>
            </button>

            <button className='border border-1 border-gray-300 p-2 rounded-full'>
              <ShoppingCart size={20} strokeWidth={1.5}/>
            </button>
        </div>
        </div>

      </div>
    </div>
  )
}

export default Navbar
