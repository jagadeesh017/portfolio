import React ,{memo} from 'react';
import profileImg from "../../assets/profile.jpg";


function About() {
  return (
    <>
      <section className=" bg-transparent">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-9 relative group">
            <h2 className="text-4xl md:text-5xl font-semibold pb-0 mb-4">About Me</h2>
           <span className="absolute  left-1/3 w-70  h-0.5 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 transition-all duration-300 group-hover: "></span>
                
          </div>

          <div className="  w-full grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Hi, </h3>
              <p className="text-amber-50 text-xl  font-mono mb-6 ">
                I'm a passionate MERN Stack Developer and UI/UX Designer who loves bringing ideas to life through code and design. 
                I specialize in creating seamless digital experiences that are both functional and visually stunning.
              </p>
              <p className="text-gray-50  mb-6 text-xl font-mono leading-relaxed">
                Solving problems, exploring new design trends, 
                or diving deep into visual design concepts. I believe great products come from the perfect blend of 
                technology and creativity.
              </p>
            </div>

            {/* Profile Image */}
            <div className="text-center  left-1/12 relative md:pl-45 ">
              <div className=" image-hover w-70 h-74 mx-auto mb-6 rounded-md  ">
                <img
                  src={profileImg}
                  alt="Profile"
                  className=" filter  rounded-md w-full h-full  object-cover hover:scale-105  blur-sm saturate-0 transform transition-all  duration-1000 ease-in-out  hover:saturate-100 brightness-75 hover:blur-none hover:brightness-100"/>
               
                <span className=" absolute py-8  pl-10  left-1/2 block md:inline-block text-2xl md:text-3xl  font-great-vibes bg-gradient-to-r from-cyan-400 via-purple-500 to-white bg-clip-text text-transparent animate-gradient-x drop-shadow-glow pointer-events-none">
                Jagadeesh
            </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default memo(About);
