import React from "react";

import Marquee from "react-fast-marquee";
// Import React Icons
import {
  FaJava, FaReact, FaGitAlt, FaNodeJs, FaPython, FaPhp,
  FaJsSquare, FaGithub, FaCuttlefish, FaDatabase, FaFigma, FaTools
} from "react-icons/fa";

import {
  SiCplusplus, SiFastapi, SiPostman, SiExpress, SiMongodb,
  SiTypescript, SiTailwindcss, SiAdobephotoshop, SiAdobeaftereffects,
  SiAdobeillustrator, SiAdobepremierepro
} from "react-icons/si";

// Skills Array
const skills = [
  // 🚀 Programming Languages
  { name: "Java", icon: <FaJava className="text-[#f89820]" /> },
  { name: "C", icon: <FaCuttlefish className="text-blue-400" /> },
  { name: "C++", icon: <SiCplusplus className="text-blue-500" /> },
  { name: "Python", icon: <FaPython className="text-yellow-300" /> },
  { name: "PHP", icon: <FaPhp className="text-indigo-400" /> },
  { name: "JavaScript", icon: <FaJsSquare className="text-yellow-400" /> },
  { name: "SQL", icon: <FaDatabase className="text-green-300" /> },

  { name: "Git", icon: <FaGitAlt className="text-orange-400" /> },
  { name: "GitHub", icon: <FaGithub className="text-white" /> },
  { name: "Postman", icon: <SiPostman className="text-orange-500" /> },
  { name: "React", icon: <FaReact className="text-cyan-400" /> },
  { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
  { name: "Express", icon: <SiExpress className="text-gray-200" /> },
  { name: "FastAPI", icon: <SiFastapi className="text-teal-300" /> },
  { name: "REST API", icon: <FaTools className="text-gray-400" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-green-600" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-sky-400" /> },
  { name: "TypeScript", icon: <SiTypescript className="text-blue-400" /> },

  { name: "Figma", icon: <FaFigma className="text-pink-500" /> },
  { name: "Photoshop", icon: <SiAdobephotoshop className="text-blue-400" /> },
  { name: "Illustrator", icon: <SiAdobeillustrator className="text-orange-500" /> },
  { name: "Premiere Pro", icon: <SiAdobepremierepro className="text-purple-500" /> },
  { name: "After Effects", icon: <SiAdobeaftereffects className="text-indigo-500" /> },
];



export default function Skill()
{
    return (
<section className="w-full min-h-screen  py-12  text-white  bg-transparent">
        
           
        <h2 className="text-5xl  font-sans text-center mb-1">Skills</h2>
        <span className="block w-40  h-0.5 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 rounded-full  ml-165 "></span>
        <Marquee pauseOnHover gradient={false} speed={65}>
        <div className="flex   gap-11  max-w-full mx-auto px-3 py-4 pt-40">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="overflow-hidden relative w-38 h-32 flex flex-col items-center justify-center p-4 bg-white/10 rounded-xl border border-white/20 backdrop-blur-md shadow-sm hover:scale-110 transition-transform duration-300 group animate-shine"
          >
            <div className="text-5xl mb-2 group-hover:drop-shadow-[0_0_10px] ">
              {skill.icon}
            </div>
            <p className="text-lg font-semibold">{skill.name}</p>
          </div>
        ))}
      </div>
            </Marquee>
</section>
    );
}
