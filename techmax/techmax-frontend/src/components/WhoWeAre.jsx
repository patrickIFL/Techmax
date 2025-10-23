import { Check, Play } from 'lucide-react'
import React from 'react'

function WhoWeAre() {
  return (
    
      <section className='flex max-w-6xl mx-auto h-[550px] mt-50'>
        {/* images section */}
        <div className='flex-1 px-5 py-10 relative'>
          {/* laptop */}
          <div className="relative">
            <img className="rounded-md w-[410px] absolute top-30 right-0 z-10" src="/about-2.jpg" alt="" />

            {/* Play Button */}
            <div className='absolute top-50 right-0 translate-1/2 w-20 h-20 z-15 '>
              <div className='w-20 h-20 flex justify-center items-center rounded-full'>

              <Play fill='white' color='white' />
              </div>
            </div>

          </div>
          {/* kalbo */}
          <img className="rounded-md w-[410px] absolute top-0 left-0 z-9" src="/about-1.jpg" alt=""/>

          {/* dotted img */}
          <img className="rounded-md w-[75%] absolute top-20 left-10 z-8" src="/ab-shape.png" alt=""/>
        </div>

        {/* end of section 1 */}


        <div className='flex items-center flex-1 '>

        <div className='flex flex-col p-4'>

          <div className='flex flex-col gap-5'>
            <p className='tracking-wide font-bold text-sm text-[#3b82f6]'>WHO WE ARE?</p>
          <h2 className='text-4xl tracking-wide font-bold text-wrap'>
            We specialise in helping our customers digitise their business</h2>
          <p className='tracking-wide font-normal text-gray-800 text-md'>Accelerate innovation with world-class tech teams We’ll match you to an entire remote team of incredible freelance talent for all your software development needs.</p>
          </div>
          
          <div className='flex'>
            <div className=''>
              <div className=''>
                <div className='flex'>

                  <div className='w-10 relative '>
                    <img src="/author-1.jpg" alt="" className='absolute top-7 -right-5 rounded-full'/>
                  </div>

                  <div className='flex-2'>
                    {/* Card */}
                <div className='w-40 mx-auto rounded-2xl flex flex-col items-center'>
                {/* blueline */}
                  <div className='rounded-full h-1 w-[80%] mx-auto'/>
                  <div className='my-5'>
                    <img src="/sign.png" alt="" />
                    <h3>Mita Walker</h3>
                    <p className='text-xs font'>CEO, Techmax</p>
                  </div>
                </div>
                  </div>
                </div>
                
                

              </div>
            </div>

            <div className='flex-1 flex flex-col items-center justify-center'>
              <div className='flex gap-1'>
                <Check color='#3b82f6'/>
                <span className='text-sm font-semibold'>Solving Complex Problems</span>
              </div>
              <div className='flex gap-1'>
                <Check color='#3b82f6'/>
                <span className='text-sm font-semibold'>Solving Complex Problems</span>
              </div>
              <div className='flex gap-1'>
                <Check color='#3b82f6'/>
                <span className='text-sm font-semibold'>Solving Complex Problems</span>
              </div>
            </div>

          </div>

          
          
        </div>
        </div>

      </section>
  )
}

export default WhoWeAre