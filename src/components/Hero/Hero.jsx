import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import image1 from '../../assets/myfl.png'; // Your first floating image
import image2 from '../../assets/myfll.png'; // Your second floating image

function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center  bg-[#0d0d0d] bg-gradient-to-br from-black to-blue-950 text-white px-6 relative"
    >
      <div className="floating-image-container ">
        <img
          src={image1}
          alt="Floating Graphic 1"
          className="absolute top-40 md:top-1/2 -translate-y-1/2  right-[10%] w-40 md:w-70 object-contain animate-float"
        />
        <img
          src={image2}
          alt="Floating Graphic 2"
          className="absolute top-40 md:top-1/2 -translate-y-1/2  left-[2%] w-50 md:w-90 object-contain animate-float animate-float-right"
        />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center max-w-3xl z-10 relative"
      >
        <h1 className="text-4xl md:text-6xl font-bold pb-6">
          Hi, I'm{' '}
          <span className="inline-block pl-6 p-8 text-xxl font-great-vibes  animated-gradient bg-gradient-to-r from-amber-400 via-pink-500  to-purple-600 pb-2.5 bg-clip-text text-transparent ">
  Jagadeesh
</span>

        </h1>
        <h2 className="text-xl md:text-2xl animated-gradient bg-gradient-to-r from-amber-400 to-green-900 bg-clip-text text-transparent font-medium mb-4">
          Front-End Developer & UI Enthusiast
        </h2>
        <p className="text-md md:text-lg text-gray-300 mb-6">
          I build interactive, responsive, and engaging web experiences using modern tools.
        </p>
        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Link
            to="projects"
            smooth={true}
            duration={500}
            className="inline-block bg-amber-500 text-black font-semibold py-3 px-6 rounded-full shadow-lg hover:bg-amber-400 transition duration-300"
          >
            View My Work
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Hero;
