import React from 'react'

function Achievements() {
    const achievements = [
        {
            icon:"counter-1.png",
            count: "354+",
            text: "Completed Projects"
        },
        {
            icon:"counter-2.png",
            count: "119+",
            text: "Satisfied Clients"
        },
        {
            icon:"counter-3.png",
            count: "99%",
            text: "Web Site Analyse"
        },
        {
            icon:"counter-4.png",
            count: "321+",
            text: "Clients Supoort Done"
        },
    ];

  return (
    <div className='w-full counter-bg mt-50'>
      <section class="mt-10  flex justify-center">

            <div class="flex flex-row lg:flex-row w-full justify-between max-w-6xl px-15 py-30 ">

            
            {achievements.map((achievement, index) => (
                <Achievement key={index} icon={achievement.icon} count={achievement.count} text={achievement.text} />
            ))}


            </div>

        </section>
    </div>
  )
}

export default Achievements

const Achievement = ({icon, count, text}) => {
    return (
       <div class="flex flex-col justify-center items-center text-center gap-1">
                <img class="w-20" src={icon} alt="" />
                <p class="text-white font-bold text-5xl mt-5">
                    {count}
                </p>

                <p class="text-white text-balance">
                    {text} 
                </p>
            </div>
        )
}