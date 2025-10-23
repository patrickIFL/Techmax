import React from 'react'
import BlueCircle from './BlueCircle'

function HeroSection() {
  return (
    <section className='hero-bg h-full relative'>
      <BlueCircle />

      <div className='flex h-[80vh] max-w-6xl mx-auto'>
        <div className='flex-3/5 flex flex-col justify-center gap-8 h-full px-5 z-10  text-white'>
          <h1 className='tracking-wide font-bold text-sm'>TECHNOLOGY RELATED CONSULTANCY</h1>
          <p className='text-7xl tracking-wide font-bold text-balance'>
            We bring great Ideas to life</p>
          <p className='tracking-wide font-bold text-md'>We provide the most responsive and functional IT design for companies and businesses worldwide.</p>
          <div>
            <button className='bg-[#1972D7] px-15 py-4 rounded-lg'>Read More</button>
          </div>
        </div>

        {/* empty div for space */}
        <div className='flex-2/5' />
      </div>
    </section>
  )
}

export default HeroSection
