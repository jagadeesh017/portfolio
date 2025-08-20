import React from "react";
import logo from "../assets/logo.png";

function ProjectCard({ title, image, description, tools, github ,demo}) {
  return (
   <div className="hover-container overflow-visible">
      <div className="backdrop-blur-xs bg-white/8 border border-blue-500 shadow-blue-950 rounded-2xl
    w-full max-w-[380px] p-6 shadow-xl text-white flex flex-col gap-4 origin-center
    hover:scale-105 transition-all duration-300 pb-1 hover:border-purple-400 hover:shadow-purple-500/20">
   
      <img 
        src={image} 
        alt="{title}" 
        className="h-[130px] object-fill rounded-2xl mx-auto w-full border border-white "
      />
     <p className="text-amber-200  text-center">
       {title}
     </p>
     <p className="text-sm text-gray-300 mb-4">{description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {tools.map((tool, index) => (
          <span
            key={index}
            className="px-2 py-1 text-xs border border-white/20 bg-white/10 rounded"
          >
            {tool}
          </span>
        ))}
      </div>
      <div className="flex gap-4 text-sm pb-5">
        <a href={github} target="_blank" rel="noreferrer" className="text-cyan-400 hover:underline">
          GitHub
        </a>
        <a href={demo} target="_blank" rel="noreferrer" className="text-pink-400 hover:underline">
          Live Demo
        </a>
      </div>
    </div>
  </div>
  );
}

export default ProjectCard;