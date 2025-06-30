import React from "react";
import ProjectCard from "../projectcard";
import portfolioimg from "../../assets/portfolio.png";
import fest from "../../assets/fest.png";
import carp from"../../assets/car.png";

const projectData = [
  {
    title: "Portfolio Website",
    image: portfolioimg,
    description: "A modern and responsive portfolio website created to highlight my skills, showcase personal and collaborative projects, and provide an overview of my development journey. Built with React and Tailwind CSS for a fast, elegant experience.",
    tools: ["React", "Tailwind", "Vite"],
    github: "https://github.com/jagadeesh017/portfolio",
    
  },
  {
    title: "Car Price Predictor",
    image: carp,
    description: "A machine learning-based web application that predicts the selling price of used cars based on key features such as manufacturing year, fuel type and mileage. Built using Python, pandas, and a regression model, the app provides accurate price estimates for second-hand cars.",
    tools: ["Python", "Streamlit", "Pandas"],
    github: "https://github.com/jagadeesh017/Car_Price_Prediction",
   
  },
  {
     title: "College Techfest website",
    image: fest,
    description: "Developed a responsive and engaging tech fest website for our college, featuring detailed event listings, registration forms, schedules, and team member sections. It provides a central platform for students to explore workshops, coding contests, and speaker sessions.  ",
    tools: ["MERN", "PHP"],
    github: "https://github.com/jagadeesh017/Zeitgiest",
  }
 
];
function Project() {
  return (
    <section className="w-full min-h-screen  px-4 py-16 flex flex-col items-center bg-transparent">
                  <h2 className="text-4xl md:text-5xl font-semibold text-white mb-2">
        Projects
      </h2>
       <span className="block w-48 h-1 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 rounded-full mb-12"></span>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-25">
        {
          projectData.map((project, idx)=>(
            <ProjectCard key={idx} {...project}/>
          ))
        }
      </div>

    </section>
  );
}

export default Project;
