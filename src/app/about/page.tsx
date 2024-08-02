'use client'
import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";
import courseData from "@/data/music.json"
function Page() {

  const fcourses = courseData.courses.filter((course) => course.isFeatured)

    return (    
        <div className="min-h-screen bg-white dark:bg-black py-12 pt-36">
        <h1 className="text-lg md:text-7xl text-center font-sans font-bold mt-5 mb-8 dark:text-white text-black">Our All Offerings</h1>  
        <div className="flex flex-wrap justify-center">
            {fcourses.map((course) => (
                <CardContainer key={course.id} className="inter-var m-4">
                <CardBody className="bg-zinc-200 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-zinc-400 dark:border-gray-700 border-black/[0.1] w-auto sm:w-[30rem] h-auto rounded-xl p-6 border  ">
                  <CardItem
                    translateZ="50"
                    className="text-xl font-bold text-neutral-600 dark:text-black"
                  >
                    {course.title}
                  </CardItem>
                  <CardItem
                    as="p"
                    translateZ="60"
                    className="text-neutral-500 text-sm max-w-sm mt-2 dark:text-black"
                  >
                    {course.description}
                  </CardItem>
                  <CardItem translateZ="100" className="w-full mt-4">
                    <Image
                      src={course.image}
                      height="1000"
                      width="1000"
                      className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                      alt={course.title}
                    />
                  </CardItem>
                  <div className="flex justify-between items-center mt-20">
                    
                  </div>
                </CardBody>
              </CardContainer>
            ))}
        </div>  
    </div>
    )
}

export default Page
