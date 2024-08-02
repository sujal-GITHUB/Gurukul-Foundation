'use client'
import Link from "next/link"
import courseData from "../data/music.json"
import { BackgroundGradient } from "./ui/background-gradient"
import Image from "next/image"

interface Course{
    id: number,
    title: string,
    slug: string,
    description: string,
    price: number,
    instructor: string,
    isFeatured: boolean,
    image: string,       
}

function FeaturedCourses() {
    const featuredCourses = courseData.courses.filter((course:Course) => course.isFeatured)


  return (
    <div className="py-12 dark:bg-black bg-zinc-930 pt-20 mb-0">
        <div>
            <div className="text-center">
                <h2 className="text-base text-black dark:text-blue-50 font-semibold tracking-wide uppercase">FEATURED WORKS</h2>
                <p className="mt-2 text-3xl leading-8 font-bold tracking-tight text-blue-500 sm:text-4xl px-5">Unlock the ultimate masterpiece with our unparalleled expertise!</p>
            </div>
        </div>
        <div className="mt-10 mx-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
                {featuredCourses.map((course:Course)=> (
                    <div key={course.id} className="flex justify-center m-5">
                        <BackgroundGradient
                        className="flex flex-col rounded-[22px] bg-white dark:bg-gray-300 overflow-hidden h-full max-w-sm">
                            <div className="p-4 sm:p-6 flex flex-col items-center text-center flex-grow">
                            <Image
                                className="overflow-hidden rounded-md"
                                    src={course.image}
                                    alt={course.title}
                                    width={300} // Set the appropriate width
                                    height={200} // Set the appropriate height
                                    layout="responsive" // Optional: For responsive images
                                    quality={75} // Optional: Adjust quality as needed
                                />
                                <p className="text-sm text-neutral-600 dark:text-black flex-grow mt-4">{course.description}</p>
                        
                            </div>
                        </BackgroundGradient>
                    </div>
                ))}
            </div>
        </div>
        <div className="mt-20 text-center">
            <Link href={"/about"}
            className="px-4 py-2 font-semibold rounded-full border border-neutral-600 text-neutral-700 bg-white hover:bg-gray-100 transition duration-200"
            >
            View All Offerings
            </Link>
        </div>
    </div>
  )
}

export default FeaturedCourses