import React from 'react';
// import { motion } from 'framer-motion';

function Features() {
    const featurArr = [
        {
            img: "/features-1.png",
            title: "Expert Team",
            desc: "Accelerate innovation with world-class tech teams"
        },
        {
            img: "/features-2.png",
            title: "Expert Team",
            desc: "Accelerate innovation with world-class tech teams"
        },
        {
            img: "/features-3.png",
            title: "Expert Team",
            desc: "Accelerate innovation with world-class tech teams"
        },
        {
            img: "/features-4.png",
            title: "Expert Team",
            desc: "Accelerate innovation with world-class tech teams"
        }
    ]

  return (
    <section className="relative mt-50 bg-gray-200 pt-20">
      <div className="flex max-w-6xl mx-auto">
        
        {/* Left Image Section */}
        <div className="flex-1 relative">
          {/* Rotating Shape (behind main image) */}
          <img
            className="rotating-img w-100 absolute top-0 right-5 z-10"
            src="/features-shape.png"
            alt="Feature shape"
          />

          {/* Main Image (above shape) */}
          <img
            className="relative z-20"
            src="/features-img.png"
            alt="Feature main"
          />
        </div>

        {/* Right Section */}
        <div className="flex-1 flex mx-10 items-center justify-center text-white">
          <div className='flex flex-col gap-5'>
            <p className='tracking-wide font-bold text-sm text-[#3b82f6]'>WHY CHOOSE US</p>

          <h2 className='text-4xl tracking-wide font-bold text-balance text-gray-800'>
            We provide truly prominient IT solutions for your success</h2>
          
          <div className='grid grid-cols-2 mt-8 gap-y-5 '>
            
            {featurArr.map((feature) => {
                return (
                
                <FeatureCard 
                    img = {feature.img}
                    title = {feature.title}
                    desc = {feature.desc}
                />)
            })}

            </div>
          
          <p className='tracking-wide font-normal text-gray-800 text-md'>This is only glimpse <a className='text-blue-500 underline'>All Features</a></p>
          </div>
        </div>
      </div>
    </section>
  );
}

const FeatureCard = ({img, title, desc}) => {
    return (
        <div className='flex gap-5 text-gray-900'>
          <img className='h-15' src={img} alt="" />
          <div className='flex flex-col gap-2'>
            <h4 className='text-2xl font-semibold'>{title}</h4>
            <p className='text-gray-800'>
                {desc}
            </p>
          </div>  
        </div>
    )
}

export default Features;
