import Link from "next/link";
import { Button } from "./ui/moving-border";
import { FlipWords } from "./ui/flip-words";

function HeroSection() {
  const words = [
    "Web-Development",
    "UI/UX-Design",
    "Data-Analysis",
    "Machine-Learning",
    "Graphic-Design",
    "Artificial-Intelligence",
  ];

  return (
    <div className="h-auto md:h-[32rem] dark:bg-black dark:text-white w-full flex flex-col items-center justify-center no-scrollbar relative overflow-hidden mx-auto py-10 md:py-0">
    
      <div className="p-4 relative z-10 w-full text-center">
        <h1 className=" mt-10 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-black to-neutral-400 dark:text-transparent">
        Get Best Works in <FlipWords words={words} />
        </h1>
        <p className="mt-4 font-normal text-base md:text-lg text-black dark:text-white max-w-2xl mx-auto">
          At Gurukul Research Foundation, we excel in web development, creating
          responsive, high-performing websites. Our graphic design team crafts
          engaging visuals, while our machine learning and AI experts deliver
          intelligent, data-driven solutions. Additionally, our data analysis
          services uncover valuable insights to drive your business forward.
          Partner with us for top-tier expertise and innovation.
        </p>
        <div className="mt-10">
          <Link href="/about">
            <Button
              borderRadius="1.75rem"
              className="bg-gray-200 dark:bg-zinc-900 text-black dark:text-white font-bold border-neutral-200 dark:border-black"
            >
              About Us
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
