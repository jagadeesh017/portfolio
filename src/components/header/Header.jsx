import React, { useState } from 'react';
import { Link } from 'react-scroll';
import logo from "../../assets/logo.png";;

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <header className="w-full  fixed top-0 left-0 z-50 bg-gray-950">
      <div className="max-w-8xl  px-4 py-4 flex justify-around items-center">
        
        
        <div className="text-white text-2xl font-cursive font-bold tracking-wide">
         
        <img
          src={logo}
          alt="Logo"
          className=" left-[2%] hover:opacity-60 h-10 md:h-15 w-full object-contain transition-transform duration-300 ease-in-out hover:scale-90"
        />
    


        </div>

        <div className="md:hidden cursor-pointer" onClick={toggle}>
          <div className="space-y-1">
            <span className="block w-6 h-0.5 bg-white"></span>
            <span className="block w-6 h-0.5 bg-white"></span>
            <span className="block w-6 h-0.5 bg-white"></span>
          </div>
        </div>

   <nav
          className={`
            ${isOpen ? 'flex' : 'hidden'}
            flex-col items-center md:flex md:flex-row md:items-center md:space-x-8
            md:justify-center
            absolute md:static top-full left-0 w-full md:w-auto
            bg-cyan-950 md:bg-transparent px-4 md:px-0 py-4 md:py-0
          `}
        >
          {['home', 'about', 'projects', 'skills', 'contact'].map((section) => (
            <Link
              key={section}
              to={section}
              smooth={true}
              duration={500}
              onClick={() => setIsOpen(false)}
              className="relative group  bg-clip-text pb-1 text-amber-50 font-medium px-3 py-2 transition duration-300 cursor-pointer hover:text-blue-300"
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}

              
              <span className="absolute left-0 bottom-0 text-transparent w-0 h-0.5 bg-gradient-to-r from-amber-500 via-pink-500 to-purple-600 transition-all duration-300 group-hover:w-full group-hover:h-0.5"></span>
            </Link>
          ))}
        </nav>
        
      </div>
    </header>
  );
}

export default Header;
