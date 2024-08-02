import React from "react";
import Image from "next/image";

function Gurukul() {
  return (
    <div className="flex dark:bg-black justify-center items-center text-wrap flex-col">
      <Image
        className="overflow-hidden rounded-md flex justify-center mb-2 scale-75 sm:scale-75 md:scale-90 lg:scale-95"
        src="/courses/logo.png"
        width={300} // Set the appropriate width
        height={200} // Set the appropriate height
        alt=""
      />
      <h3 className="text-blue-500 mb-15 font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-wrap text-center">Welcome to Gurukul Research Foundation
      </h3>
      <p className="text-black dark:text-white w-3/4 font-md text-center lg:text-2xl sm:text-xl">
        We create high-performance websites that enhance your online presence
        and develop stunning graphics that capture your brand’s essence. Our
        machine learning and AI solutions provide innovative technologies to
        optimize your operations and unlock new opportunities. Additionally, our
        data analysis services deliver insightful intelligence that helps you
        make informed decisions and drive your business forward. Partner with us
        to experience excellence and innovation across these crucial areas.
      </p>
    </div>
  );
}

export default Gurukul;
