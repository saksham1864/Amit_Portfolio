import Image from "next/image";
import Nav from "../components/nav";
import Navbar from "../components/nav";



export default function Home() {
  return (
   <div> 
      <div className="fixed top-0 left-0 w-full h-full z-[-1] overflow-x-hidden">
      <video
        className="min-w-full min-h-full object-cover"
        src="/5091624-hd_1920_1080_24fps.mp4"
        autoPlay
        loop
        muted
      />
    </div>

    <Navbar/>

    < div className=" bg-white fixed top-96 p-96 z-0">
    asdjnsakjdn
    
    </div>
      



   </div>
  );
}
