'use client'
import { WavyBackground } from "./ui/wavy-background"
import { AnimatedTooltip } from "./ui/animated-tooltip";

const instructors = [
  {
    id: 1,
    name: 'Rajul Dwivedi',
    designation: 'Founder',
    image:
      '/courses/tanjiro.png',
  },{
      id: 2,
      name: 'Sujal Kumar',
      designation: 'AI / ML Expert',
      image:'/courses/killer-bee.png',
    },
    
  ];

function Instructors() {
  return (
    <div className="relative h-[40rem] overflow-hidden flex flex-col items-center justify-center">
            <h2 className="text-2xl  md:text-4xl lg:text-7xl text-blue-500 font-bold text-center mb-8">At Our Helm</h2>
            <p className="text-base md:text-lg dark:text-white px-5 w-1/2 text-black text-center mb-10">Discover the talented professionals who will elevate your project with cutting-edge web development, stunning graphic design, groundbreaking machine learning, transformative AI, and insightful data analysis.</p>
            <div className="flex flex-row items-center justify-center mb-10 w-full">
                <AnimatedTooltip items={instructors} />
            </div>
    </div>
  )
}

export default Instructors