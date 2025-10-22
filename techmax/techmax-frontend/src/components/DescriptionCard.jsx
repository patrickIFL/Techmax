import React from 'react'

function DescriptionCard({ imgsrc, title, content }) {
  return (
    <div
      className="relative md:max-w-[336px] md:max-h-[349px] rounded-lg overflow-hidden
      bg-white group transition-all duration-500 ease-in-out cursor-pointer shadow-xl p-10 md:p-0"
    >
      {/* Gradient Background Overlay */}
      <div
        className="absolute inset-0 bg-linear-to-b from-[#1972D7] to-[#42AFDE]
        opacity-0 group-hover:opacity-100
        transition-opacity duration-500 ease-in-out z-0"
      />

      {/* 🔵 Gradient Circle */}
      <div
        className="absolute w-[235px] h-[235px] bg-linear-to-b from-[#1972D7] to-[#42AFDE]
        rounded-full -top-20 -right-20
        opacity-0 scale-90 group-hover:opacity-100 group-hover:scale-100
        transition-all duration-500 ease-in-out z-10"
      />

      {/* Circuit Image */}
      <img
        className="absolute bottom-5 opacity-0 translate-x-5
        group-hover:opacity-100 group-hover:translate-x-0
        transition-all duration-500 ease-in-out z-10"
        src="/s-shape-2.png"
        alt="circuit image"
      />

      {/* Content */}
      <div
        className="relative z-20 flex flex-col gap-4 items-center text-center
        md:py-[50px] lg:py-10 md:px-[25px] lg:px-10
        text-gray-800 group-hover:text-white
        transition-all duration-500 ease-in-out"
      >
        <img className="w-[66px] h-[99px]" src={imgsrc} alt="" />
        <h1 className="text-xl font-semibold">{title}</h1>
        <p className="text-md font-medium text-gray-700 group-hover:text-gray-100 transition-colors duration-500 ease-in-out">
          {content}
        </p>
      </div>
    </div>
  )
}

export default DescriptionCard
