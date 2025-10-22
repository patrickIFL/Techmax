import React from 'react'
import {ChevronDown} from 'lucide-react'

function NavMenu({menu}) {
  return (
    <li className='text-sm font-semibold flex cursor-pointer hover:text-[#3b82f6] transition-all ease-in-out'>
            <div className=''>{menu}</div>
            <div className='flex items-end'>
              <ChevronDown size={18} color='blue' strokeWidth={1}/>
            </div>
    </li>
  )
}

export default NavMenu
