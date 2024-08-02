"use client";
 
import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";
 
const musicSchoolTestimonials = [
  {
    "quote": "The team’s expertise in web development has greatly enhanced my website’s functionality and user experience. They are simply the best!",
    "name": "Neha Singh",
    "title": "Web Development Customer"
  },
  {
    "quote": "Their graphic design work exceeded my expectations. The visuals they created were not only stunning but also perfectly aligned with our brand.",
    "name": "Rahul Khanna",
    "title": "Graphic Design Customer"
  },
  {
    "quote": "The machine learning solutions provided by this company have given us a competitive edge. Their personalized approach is truly commendable.",
    "name": "Karthik Nair",
    "title": "Machine Learning Customer"
  },
  {
    "quote": "Their AI services have revolutionized the way we operate, offering smart, data-driven insights that are invaluable.",
    "name": "Pooja Desai",
    "title": "AI Customer"
  },
  {
    "quote": "The web development team delivered a website that is both visually appealing and highly functional. Their attention to detail is exceptional.",
    "name": "Anita Rao",
    "title": "Web Development Customer"
  },
  {
    "quote": "The graphic design team brought our vision to life with creativity and professionalism. Highly recommended for any design needs!",
    "name": "Vishal Mehta",
    "title": "Graphic Design Customer"
  },
  {
    "quote": "Thanks to their data analysis services, we have been able to make informed decisions that have significantly boosted our performance.",
    "name": "Suresh Kumar",
    "title": "Data Analysis Customer"
  },
  {
    "quote": "Their machine learning solutions are top-notch. The team was able to understand our needs and deliver exceptional results.",
    "name": "Meera Iyer",
    "title": "Machine Learning Customer"
  },
  {
    "quote": "Their AI solutions have transformed our business processes, making them more efficient and effective. We couldn't be happier!",
    "name": "Ravi Gupta",
    "title": "AI Customer"
  },
  {
    "quote": "The data analysis provided insightful revelations about our customer base. Their service is indispensable for any data-driven business.",
    "name": "Anjali Kapoor",
    "title": "Data Analysis Customer"
  }
  ,
  ];

function TestimonialCard() {
  return (
    <div className="h-[32rem] w-full bg-white dark:bg-black dark:bg-grid-white/[0.2] bg-grid-gray-300 relative flex flex-col items-center justify-center overflow-hidden">
        <h2 className="text-5xl text-gray-500 font-bold text-center mb-8 z-10">Our Happy Customers</h2>
        <div className="flex justify-center w-full overflow-hidden px-4 sm:px-6 lg:px-8 mb-10">
            <div className="w-full max-w-6xl">
            <InfiniteMovingCards
                items={musicSchoolTestimonials}
                direction="right"
                speed="slow"
      />
            </div>
        </div>
    </div>
  )
}

export default TestimonialCard
