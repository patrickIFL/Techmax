import { Facebook, Linkedin, Twitter } from 'lucide-react'
import React from 'react'

function Footer() {
  return (
    <div className='bg-blue-950 mt-50'>
        <div className='relative flex-col max-w-6xl mx-auto text-white pt-40 pb-18'>
        
        <div className='absolute top-0 -translate-y-1/2 w-full cta-bg rounded-xl'>
            <div className='bg-amber-400 relative'>
                <img src="" alt="" />
            </div>
            <div className='flex justify-between items-center p-20'>
                <p className='text-4xl font-bold w-[50%] text-balance'>Let's make something beautiful together</p>
                <div className='flex flex-col items-end'>
                    <p className='font-semibold text-xl'>+44 920 090 505</p>
                    <button className='bg-blue-600 py-3 px-10 rounded-lg'>See more Projects</button>
                </div>
            </div>
        </div>

        <div className='flex'>
            <div className='flex-1'>

                <div className='flex flex-col'>
                    <img className="w-40 my-5" src='/logo-white.png'/>
                    <p>Useful Links</p>
                    <p>Useful Links</p>
                    <p>Useful Links</p>
                </div>
            </div>

            <div className='flex-1'>
                <div className='flex flex-col'>
                    <span className='font-bold text-xl my-8'>Useful Links</span>
                    <p>Useful Links</p>
                    <p>Useful Links</p>
                    <p>Useful Links</p>
                </div>
            </div>

            <div className='flex-1'>
                <div className='flex flex-col'>
                    <span className='font-bold text-xl my-8'>Useful Links</span>
                    <p>Useful Links</p>
                    <p>Useful Links</p>
                    <p>Useful Links</p>
                </div>
            </div>

            <div className='flex-1'>
                <div className='flex flex-col'>
                    <span className='font-bold text-xl my-8'>Useful Links</span>
                    <p>Useful Links</p>
                    <p>Useful Links</p>
                    <p>Useful Links</p>
                </div>
            </div>
        </div>

            
        </div>


        {/* all rights reserved */}
        <div className=' mx-auto border-t-2 border-gray-500 p-7'>
            <div className='max-w-6xl mx-auto flex justify-between'>
                <p className='text-white font-normal'>© Copyrights 2023 Techmax All rights reserved.</p>
                <div className='flex gap-3'>
                    <div className='p-2 bg-gray-700 rounded-full'>
                        <Facebook color='white' fill='white' strokeWidth={0} size={20}/></div>
                    <div className='p-2 bg-gray-700 rounded-full'><Twitter color='white' fill='white'strokeWidth={0} size={20}/></div>
                    <div className='p-2 bg-gray-700 rounded-full'><Linkedin color='white' fill='white' strokeWidth={0} size={20}/></div>
                    
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer
