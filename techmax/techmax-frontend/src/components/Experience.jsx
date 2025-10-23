import { MoveRight } from 'lucide-react';
import React from 'react';

function Experience() {
  const skillArray = [
    { img: 'skill-img-1.jpg', text: 'Data Security' },
    { img: 'skill-img-2.jpg', text: 'Cloud Computing' },
    { img: 'skill-img-3.jpg', text: 'IT Consulting' },
    { img: 'skill-img-4.jpg', text: 'Network Solutions' },
  ];

  const skillBars = [
    { text: 'IT Management', level: '80%' },
    { text: 'Data Security', level: '50%' },
    { text: 'Solution', level: '20%' },
  ];

  return (
    <div className="relative mt-50 skill-bg pb-50">

      <div className="max-w-6xl mx-auto  flex flex-col relative z-10">
        <div className="flex justify-between items-center ">
          {/* Left section - 25+ years */}
          <div className="w-[43%] flex flex-col gap-10">
            <div className="flex flex-col">
              <span className="text-9xl font-bold text-blue-700">25+</span>
              <span className="text-2xl">Years of Experience</span>
            </div>

            <p className="text-4xl/12 font-semibold">
              We run all kinds of <span className="text-blue-700">IT services </span>
              that vow your success
            </p>
          </div>

          {/* Right section - skill bars */}
          <div className="w-[57%] p-20">
            <p className="text-3xl/11 font-bold mb-8">
              Accelerate innovation with world-class tech teams. We'll match you
              to an entire remote technology.
            </p>

            <div className="flex flex-col gap-5">
              {skillBars.map((skillBar, index) => (
                <div key={index} className="flex flex-col justify-between">
                  <div className="flex justify-between mb-2">
                    <span className="font-semibold">{skillBar.text}</span>
                    <span className="font-semibold text-gray-900">{skillBar.level}</span>
                  </div>

                  <div className="w-full h-3 bg-gray-200 border border-gray-400 rounded">
                    <div
                      className="bg-blue-700 h-full transition-[width] duration-700 ease-in-out rounded"
                      style={{ width: skillBar.level }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Skill cards */}
        <div className="flex gap-5 mt-10">
          {skillArray.map((skill, index) => (
            <Skill key={index} skill={skill} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Experience;

const Skill = ({ skill }) => {
  return (
    <div className="relative overflow-hidden flex-1">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10"></div>

      {/* Text content */}
      <div className="absolute bottom-10 left-8 z-20">
        <p className="text-white text-2xl font-bold">{skill.text}</p>
        <a className="text-blue-500 flex gap-2 items-center hover:text-blue-300" href="#">
          Learn More <MoveRight size={18} />
        </a>
      </div>

      {/* Background image */}
      <img
        className="h-full w-full object-cover"
        src={skill.img}
        alt={skill.text}
      />
    </div>
  );
};
