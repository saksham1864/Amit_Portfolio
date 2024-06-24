import React from 'react';

const BackgroundVideo = () => {
  return (
    <div className="relative w-full h-[750px]  overflow-hidden"> {/* Adjust height as needed */}
      <video
        autoPlay
        muted
        loop
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src="/5091624-hd_1920_1080_24fps.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      


      <div className="flex flex-col  relative top-[5rem] items-center bg-white  text-white justify-center h-[500px] text-center p-8">
        <h1 className="text-3xl md:text-4xl lg:text-5xl  text-gray-400 font-bold">
          Amit Kumar Sharma
        </h1>
        <h2 className="text-2xl md:text-4xl lg:text-6xl font-bold mt-2">
          GRC Consultant
        </h2>
        <p className="text-lg mt-2">
          <i>Add a subheading</i>
        </p>
      </div>













    </div>
  );
};

export default BackgroundVideo;

