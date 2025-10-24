import React from 'react'

function Testimonies() {
  const testimonies = [
    {
      header: "They are the Best",
      content: "Accelerate innovation with world-class tech teams Beyond more stoic this along goodness hey this this wow manatee ",
      image: "/author-1.jpg",
      name: "Johnny Doe",
      designation: "CEO, Harlond"
    },
    {
      header: "They are the Best",
      content: "Accelerate innovation with world-class tech teams Beyond more stoic this along goodness hey this this wow manatee ",
      image: "/author-1.jpg",
      name: "Johnny Doe",
      designation: "CEO, Harlond"
    },
    {
      header: "They are the Best",
      content: "Accelerate innovation with world-class tech teams Beyond more stoic this along goodness hey this this wow manatee ",
      image: "/author-1.jpg",
      name: "Johnny Doe",
      designation: "CEO, Harlond"
    },
  ];

  return (
    <div className='testi-bg mt-50'>
      <div className='max-w-6xl mx-auto flex py-25'>

        <div className='flex flex-1 flex-col gap-5'>
          <p className='tracking-wide font-bold text-sm text-[#3b82f6]'>{("Client Testimonials").toUpperCase()}</p>
          <h2 className='text-4xl text-white tracking-wide font-bold text-wrap'>
            20k+ clients love our service & IT related solutions</h2>
        </div>

        {/* Testimony Card */}
        <div className="flex-1 overflow-x-scroll scrollbar-hide scroll-smooth">
          <div className="flex gap-10">
            {testimonies.map((testimony, index) => (
              <div>
                <TestimonialCard key={index} testimony={testimony} />
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  )
}

export default Testimonies
const TestimonialCard = ({ testimony }) => {
  return (
    <div
      className="
        relative w-65 h-65  flex justify-center items-center
        
        before:content-[''] 
        before:absolute 
        before:left-auto 
        before:top-1/2
        before:w-[70%] 
        before:h-full 
        before:-translate-y-1/2
        before:bg-gray-400/30
        before:z-0

        after:content-[''] 
        after:absolute 
        after:left-auto 
        after:top-1/2
        after:w-[80%] 
        after:h-[95%] 
        after:-translate-y-1/2
        after:bg-gray-400/30 
        after:z-0
      "
    >
      <div className="flex-1 flex flex-col gap-3 relative bg-white h-[90%] w-[90%] z-10 text-black p-5">
        
        <div className='flex-1'>
          <p className='font-semibold text-blue-600'>{testimony.header}</p>
          <p className='text-sm/6 underline line-clamp-4'>{testimony.content}</p>
        </div>
        
        <div className='flex-2 flex gap-2'>
          
          <div>
            <img className='rounded-full' src={testimony.image} alt="" />
          </div>

          <div className='flex flex-col justify-center'>
            <p className='font-bold text-xs'>{testimony.name}</p>
            <p className='text-xs'>{testimony.designation}</p>
          </div>

          <div>
            <img src="/quote.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

