import Image from "next/image";

import Navbar from "../components/nav";
import BackgroundVideo from "@/components/bg";


export default function Home() {
  return (
   <div> 
<BackgroundVideo/>

    <Navbar/>

    <div className="flex flex-col  relative z-20 items-center  bg-white justify-center h-[500px] text-center p-8">
        <h1 className="text-3xl md:text-5xl lg:text-7xl font-bold">
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
}
