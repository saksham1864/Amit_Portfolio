
import Image from "next/image";

export default function About() {
        
     
 return <div className=" mt-4 "> 
        <div  className="flex relative text-white ">
<Image
      src="/jj.png"
      alt="Example"
      width={100} // Adjust the width and height as needed
      height={20}
      className="  md:ml-[2rem] lg:ml-[5rem] lg:w-[10rem]"
    />
    <h1 id="about" className="text-xl    md:ml-[2rem]  md:text-2xl lg:text-4xl font-bold">
      About Me
    </h1>
  </div>

<div  className="block mt-4 text-white relative   ">
    <h1 className="text-lg md:text-3xl  md:ml-[3rem] lg:ml-[10rem] lg:text-4xl font-bold">
      Hi,There
    </h1>
    <p className="text-2xl  mt-10   lg:text-4xl lg:mt-24  md:ml-[3rem] lg:ml-[10rem]">Seasoned IT security professional with over 17 years 
      of experience driving security standards, managing ​complex audits, and leading teams. 
      Expertise spans core IT security, IT audits, governance, risk, and ​compliance (GRC),
      Information Security and Infrastructure advisor. Implementation and testing of ​standards
      / regulations i.e., ISO 270012022,2013, PCI, ITIL.</p>

      <p className="text-2xl  mt-8   lg:text-4xl   md:ml-[3rem] lg:ml-[10rem]">
        Successfully led and mentored teams in security operations, compliance assurance,
         and vendor risk management. (e.g., led a team of 24 at IBM and managed audits
          for 300 plus entities at UIDAI).</p>

         <p className="text-2xl  mt-8 lg:text-4xl lg:mb-40    md:ml-[3rem] lg:ml-[10rem]">
        Successfully managed projects like global deployment of security software and compliance 
        validation for ​international accounts. 
        (e.g., managed project for global deployment of McAfee EEP and EPO at Oracle).</p>
  </div>
  </div>
}

