// components/Navbar.js
'use client'
import { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed top-0 left-0 w-full  z-20 p-4 ">
      <div className="flex justify-between items-center">
        <div  className="text-white text-5xl  font-serif"><a href='#Home'>A</a></div>
        <div className="lg:hidden">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={!isOpen ? 'M4 6h16M4 12h16m-7 6h7' : 'M6 18L18 6M6 6l12 12'}></path>
            </svg>
          </button>
        </div>
        <div className={`lg:flex lg:items-center lg:w-auto ${isOpen ? 'block' : 'hidden'} w-full lg:w-auto`}>
          <div className="text-xl  font-mono lg:flex-grow">
            <a href="#Home" className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-400 mr-4">
              Home
            </a>
            <a href="#about" className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-400 mr-4">
              About
            </a>
            <a href="#experience" className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-400 mr-4">
              Experience
            </a>
            <a href="#about" className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-400">
              Experience
            </a>
          </div>
          {/* <div>
            <button className="mt-4 lg:mt-0 bg-green-700 text-white py-2 px-4 rounded hover:bg-green-800">
              My Profile
            </button>
          </div> */}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
