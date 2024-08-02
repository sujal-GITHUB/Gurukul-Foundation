import FeaturedCourses from "@/components/FeaturedCourses";
import HeroSection from "@/components/HeroSection";
import Instructors from "@/components/Instructors";
import TestimonialCard from "@/components/TestimonialCard";
import Footer from "@/components/Footer"
import Gurukul from "@/components/Gurukul";

export default function Home(){
  return(
    <main className="h-auto bg-white dark:bg-black antialiased overflow-hidden">
      <title>Gurukul Foundation</title>
      <HeroSection/>
      <Gurukul/>
      <FeaturedCourses/>
      <TestimonialCard/>
      <Instructors/>
      <Footer/>
    </main>
  )
}