import { Facebook, Linkedin, Twitter } from 'lucide-react'

function Team() {
    const teamMembers = [
        {
            img: '/team-1.jpg',
            name: 'Mike Holder',
            position: 'Founder, Techmax',
            socials: [
                {
                    icon: Facebook,
                    link: '#'
                },
                {
                    icon: Twitter,
                    link: '#'
                },
                {
                    icon: Linkedin,
                    link: '#'
                },
            ]
        },
        
        {
            img: '/team-2.jpg',
            name: 'Mike Holder',
            position: 'Founder, Techmax',
            socials: [
                {
                    icon: Facebook,
                    link: '#'
                },
                {
                    icon: Twitter,
                    link: '#'
                },
                {
                    icon: Linkedin,
                    link: '#'
                },
            ]
        },
        
        {
            img: '/team-3.jpg',
            name: 'Mike Holder',
            position: 'Founder, Techmax',
            socials: [
                {
                    icon: Facebook,
                    link: '#'
                },
                {
                    icon: Twitter,
                    link: '#'
                },
                {
                    icon: Linkedin,
                    link: '#'
                },
            ]
        },
        {
            img: '/team-1.jpg',
            name: 'Mike Holder',
            position: 'Founder, Techmax',
            socials: [
                {
                    icon: Facebook,
                    link: '#'
                },
                {
                    icon: Twitter,
                    link: '#'
                },
                {
                    icon: Linkedin,
                    link: '#'
                },
            ]
        },
       
    ]
  return (
    <div className='mt-50'>
      
      <div className='max-w-6xl mx-auto flex flex-col'>
         
         {/* Team Description */}
         <div className='text-center'>
            <p className='tracking-wider font-bold text-sm text-[#3b82f6]'>HIGHLY PROFESSIONAL STAFFS</p>
            <h2 className='text-4xl/13 tracking-wide font-bold text-balance max-w-3xl mx-auto text-gray-800'>
                IT technology and technical fields professional staff
            </h2>
         </div>

        {/* Team Cards */}
         <div className='flex gap-10 overflow-x-scroll scrollbar-hide mt-10'>
            {
                teamMembers.map((member, index) => (
                    <TeamCard key={index} member={member} />
                ))
            }
         </div>
      </div>
    </div>
  )
}

export default Team

const TeamCard = ({member}) => {
    return (
        <div className='relative'>
            <img className="min-w-[350px]" src={member.img} alt="" />
            <div className='absolute bottom-0 h-20 bg-white w-7/10 flex justify-start items-end'>
                <div className='ml-7'>
                    <p className='font-bold text-xl'>{member.name}</p>
                    <p className='text-[#3b82f6]'>{member.position}</p>
                </div>
            </div>
        </div>
    );
}