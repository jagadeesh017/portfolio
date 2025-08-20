import React, { useMemo } from 'react';
import { Player } from '@lottiefiles/react-lottie-player';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import image1 from '../../assets/CodingWithCoffile.lottie';
import image2 from '../../assets/myfll.png';
import About from '../about/about';
import Project from '../Projects/Project';
import Skill from '../skills/Skill';
  const floatAnimationRight = {
    y: [0, -20, 0],
    rotate: [0, 5, 0],
  }

  const floatTransitionRight =  {
    duration: 6,
    repeat: Infinity,
    ease: 'easeInOut',
  }

  const floatAnimationLeft = {
    y: [0, 20, 0],
    rotate: [0, -3, 0],
  }

  const floatTransitionLeft = {
    duration: 8,
    repeat: Infinity,
    ease: 'easeInOut',
    delay: 1,
  }

function Hero() {
 
  
  return (
    <section
      id="hero"
      className="min-h-[500vh] cosmic-bg bg-gradient-to-br from-black via-indigo-950 to-black text-white px-6 relative overflow-hidden"
    >
      <div className="absolute inset-0 cosmic-particles" />

      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 opacity-20 pointer-events-none">
        <div className="w-full h-full rounded-full bg-gradient-radial from-purple-600/40 via-blue-600/30 to-transparent blur-3xl animate-pulse-slow" />
      </div>

      <div className="absolute top-1/4 right-1/4 w-32 h-32 bg-gradient-radial from-cyan-400/20 to-transparent rounded-full blur-2xl animate-float-slow" />
      <div className="absolute bottom-1/4 left-1/4 w-24 h-24 bg-gradient-radial from-pink-400/20 to-transparent rounded-full blur-xl animate-float-reverse" />

      <div className="min-h-screen flex items-center justify-center relative">
        <div className="floating-image-container">
          <motion.div
            className="absolute top-32 sm:top-40 md:top-1/2 -translate-y-1/2 right-[2%] z-10 scale-75 sm:scale-90 md:scale-100"
            animate={floatAnimationRight}
            transition={floatTransitionRight}
          >
            <Player
              src={image1}
              autoplay
              loop
              renderer="svg"
              style={{ width: '300px', height: '300px' }}
            />
          </motion.div>

          <motion.img
            src={image2}
            alt="Floating Graphic 2"
            className="absolute top-32 sm:top-40 md:top-1/2 -translate-y-1/2 left-[2%] w-32 sm:w-32 md:w-50 lg:w-90 object-contain opacity-80 hover:opacity-100 transition-all duration-300 z-10 scale-75 sm:scale-90 md:scale-100"
            animate={floatAnimationLeft}
            transition={floatTransitionLeft}
          />
        </div>

       
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-center max-w-4xl z-20 relative"
        >
          <motion.h1
            className="text-2xl md:text-6xl font-bold pb-8 leading-tight"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            Hi, I&apos;m{' '}
            <span className="p-3 block md:inline-block text-6xl md:text-6xl font-great-vibes bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-gradient-x drop-shadow-glow">
              Jagadeesh
            </span>
          </motion.h1>

          <motion.h2
            className="text-xl md:text-3xl bg-gradient-to-r from-amber-400 via-emerald-400 to-cyan-400 bg-clip-text text-transparent font-medium mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            Mern Stack Developer
          </motion.h2>

          <motion.p
            className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
          >
            I craft interactive, responsive, and engaging web experiences using cutting-edge technologies and modern design principles.
          </motion.p>

          <motion.div
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.1 }}
          >
            <Link
              to="about"
              smooth={true}
              duration={500}
              className="inline-block bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 text-white font-semibold py-4 px-8 rounded-full shadow-2xl hover:shadow-purple-500/30 transition-all duration-300 border border-purple-500/30 backdrop-blur-sm relative overflow-hidden group"
            >
              <span className="relative z-10">Explore My Universe</span>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 via-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Link>
          </motion.div>
        </motion.div>

        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-gradient-to-b from-purple-400 to-transparent rounded-full mt-2 animate-bounce"></div>
          </div>
        </motion.div>
      </div>

      <div id="about" className="min-h-screen flex items-center justify-center relative w-full">
        <About />
      </div>

      <div id="projects" className="min-h-screen flex items-center justify-center relative w-full">
        <Project />
      </div>
      <div className="w-full h-[2px] my-16 relative flex items-center justify-center">
        <div className="w-4/5 h-[2px] bg-white/10 backdrop-blur-sm rounded-full shadow-[0_0_20px_rgba(255,255,255,0.15)]"></div>
      </div>

      <div id="skills" className="min-h-screen flex items-center justify-center relative w-full">
        <Skill />
      </div>
    </section>
  );
}

export default Hero;
