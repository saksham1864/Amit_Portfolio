import Image from "next/image";
import Experience from "@/components/Experience";
import Navbar from "../components/nav";
import BackgroundVideo from "@/components/bg";
import About from "@/components/about";

export default function Home() {
  return (
   <div> 
<BackgroundVideo/>

    <Navbar/>

      <About/>

       <Experience/>



   </div>
  );
}
