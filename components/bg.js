'use client'
import React, { useState, useEffect } from 'react';

const BackgroundVideo = () => {
  const [disciplines, setDisciplines] = useState([]);
  const [currentDisciplineIndex, setCurrentDisciplineIndex] = useState(0);

  useEffect(() => {
    fetch('/config.json')
      .then(response => response.json())
      .then(data => setDisciplines(data.disciplines));

    const interval = setInterval(() => {
      setCurrentDisciplineIndex(prevIndex => (prevIndex + 1) % disciplines.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [disciplines.length]);

  return (
    <div id='Home' className="relative w-full h-[950px] lg:h-[785px] overflow-hidden"> {/* Adjust height as needed */}
      <video
        autoPlay
        muted
        loop
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src="/5091624-hd_1920_1080_24fps.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="block relative top-[15rem] md:ml-20 ml-20 lg:ml-40 text-white font-semibold justify-center   p-4">
        <h1 className="text-3xl md:text-4xl lg:text-5xl  text-[#D9D9D9] font-bold">
          Amit Kumar Sharma
        </h1>
     
        <h2 className="text-2xl md:text-4xl lg:text-6xl font-bold mt-2">
          GRC Consultant
        </h2>
        {disciplines.length > 0 && (
          <p className="text-2xl md:text-4xl lg:text-6xl font-bold">
          <sub> <b className='lg:text-9xl md:text-6xl text-5xl'>+</b></sub> <i>{disciplines[currentDisciplineIndex]}</i>
          </p>
        )}
      </div>
      
    </div>
  );
};

export default BackgroundVideo;













