
import Image from "next/image";

export default function About() {
        
     
 return <div className=" mt-4 "> 
        <div  className="flex relative text-white ">
<Image
      src="/jj.png"
      alt="Example"
      width={100} 
      height={20}
    />
    <h1 id="about" className="text-3xl">
      About Me
    </h1>
  </div>


  </div>
}

