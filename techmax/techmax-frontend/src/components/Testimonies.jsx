import React from 'react'

function Testimonies() {
  const testimonies = [
    {
      header: "They are the Best",
      content: "Accelerate innovation with world-class tech teams Beyond more stoic this along goodness hey this this wow manatee ",
      image: "/author-1.jpg",
      name: "Johnny Doe",
      designation: "CEO, Harlond inc."
    },
    {
      header: "They are the Best",
      content: "Accelerate innovation with world-class tech teams Beyond more stoic this along goodness hey this this wow manatee ",
      image: "/author-1.jpg",
      name: "Johnny Doe",
      designation: "CEO, Harlond inc."
    },
    {
      header: "They are the Best",
      content: "Accelerate innovation with world-class tech teams Beyond more stoic this along goodness hey this this wow manatee ",
      image: "/author-1.jpg",
      name: "Johnny Doe",
      designation: "CEO, Harlond inc."
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
        <div className="flex-1 overflow-scroll scrollbar-hide scroll-smooth">
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
    <div className='w-65 h-65 bg-white'>
      wew
    </div>
  );
}