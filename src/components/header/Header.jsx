import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';
import logo from "../../assets/logo.png";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  const toggle = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <motion.header 
      className={`w-full fixed top-0 left-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'backdrop-blur-md bg-black/10 border-b border-white/20 shadow-2xl' 
          : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        
        {/* Logo */}
        <motion.div 
          className="text-white text-2xl font-cursive font-bold tracking-wide"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        >
          <img
            src={logo}
            alt="Logo"
            className="hover:opacity-80 h-10 md:h-12 w-auto object-contain transition-all duration-300 ease-in-out drop-shadow-lg"
          />
        </motion.div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden cursor-pointer z-50" onClick={toggle}>
          <motion.div 
            className="space-y-1"
            whileTap={{ scale: 0.9 }}
          >
            <motion.span 
              className="block w-6 h-0.5 bg-white transition-all duration-300"
              animate={isOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
            ></motion.span>
            <motion.span 
              className="block w-6 h-0.5 bg-white transition-all duration-300"
              animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
            ></motion.span>
            <motion.span 
              className="block w-6 h-0.5 bg-white transition-all duration-300"
              animate={isOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
            ></motion.span>
          </motion.div>
        </div>

        {/* Navigation */}
        <motion.nav
          className={`
            ${isOpen ? 'flex' : 'hidden'}
            flex-col items-center md:flex md:flex-row md:items-center md:space-x-8
            md:justify-center
            absolute md:static top-full left-0 w-full md:w-auto
            backdrop-blur-md bg-black/50 md:bg-transparent px-4 md:px-0 py-6 md:py-0
            border-t border-white/10 md:border-none
          `}
          initial={false}
          animate={isOpen ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 }}
        >
          {['hero', 'about', 'projects', 'skills', 'contact'].map((section, index) => (
            <motion.div
              key={section}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link
                to={section}
                smooth={true}
                duration={500}
                offset={-80}
                onClick={() => setIsOpen(false)}
                className="relative group text-white/90 hover:text-white font-medium px-4 py-3 md:py-2 transition-all duration-300 cursor-pointer block md:inline-block"
                activeClass="text-cyan-400"
                spy={true}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
                
                {/* Animated Underline */}
                <span className="absolute left-0 bottom-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 transition-all duration-300 group-hover:w-full"></span>
                
                {/* Glow Effect on Hover */}
                <span className="absolute inset-0 rounded-md bg-gradient-to-r from-purple-600/0 to-cyan-600/0 group-hover:from-purple-600/10 group-hover:to-cyan-600/10 transition-all duration-300 -z-10"></span>
              </Link>
            </motion.div>
          ))}
        </motion.nav>
      </div>
    </motion.header>
  );
}

export default Header;