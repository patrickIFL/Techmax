import React from 'react'
import Counter from './Counter';

function Achievements() {
    const achievements = [
        {
            icon:"counter-1.png",
            count: 354,
            text: "Completed Projects",
            unit: "number"
        },
        {
            icon:"counter-2.png",
            count: 119,
            text: "Satisfied Clients",
            unit: "number"
        },
        {
            icon:"counter-3.png",
            count: 99,
            text: "Web Site Analyse",
            unit: "percentage"

        },
        {
            icon:"counter-4.png",
            count: 321,
            text: "Clients Supoort Done",
            unit: "number"
        },
    ];

  return (
    <div className='w-full counter-bg mt-50'>
      <section class="mt-10  flex justify-center">

            <div class="flex flex-row lg:flex-row w-full justify-between max-w-6xl px-15 py-30 ">

            
            {achievements.map((achievement, index) => (
                <Achievement key={index} unit={achievement.unit} icon={achievement.icon} count={achievement.count} text={achievement.text} />
            ))}


            </div>

        </section>
    </div>
  )
}

export default Achievements

const Achievement = ({icon, count, text, unit}) => {
    return (
       <div class="flex flex-col justify-center items-center text-center gap-1">
                <img class="w-20" src={icon} alt="" />
                <p class="text-white font-bold text-5xl mt-5">
                    <Counter target={count} />
                    {unit === "percentage" ? "%" : "+"}
                </p>

                <p class="text-white text-balance">
                    {text} 
                </p>
            </div>
        )
}