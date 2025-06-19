import React from 'react';
import profileImg from "../../assets/profile.jpg";


function About() {
  return (
    <>
      <section className=" bg-transparent">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">About Me</h2>
            <div className="w-20 h-1 bg-blue-500 mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Hi, I'm a Creative Developer</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                I'm a passionate MERN Stack Developer and UI/UX Designer who loves bringing ideas to life through code and design. 
                I specialize in creating seamless digital experiences that are both functional and visually stunning.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                When I'm not coding, you'll find me solving problems, exploring new design trends, 
                or diving deep into visual design concepts. I believe great products come from the perfect blend of 
                technology and creativity.
              </p>
            </div>

            {/* Profile Image */}
            <div className="text-center pl-50">
              <div className="  w-70 h-74 mx-auto mb-6 rounded-md overflow-hidden shadow-lg border-4 border-white/60 hover:scale-105 transition-transform duration-500">
                <img
                  src={profileImg}
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
