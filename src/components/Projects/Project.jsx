import React ,{memo} from "react";
import ProjectCard from "../projectcard";
import portfolioimg from "../../assets/portfolio.png";
import fest from "../../assets/fest.png";
import carp from"../../assets/car.png";
import livepdf from"../../assets/livepdf.png";

const projectData = [
  {
    title: "Portfolio Website",
    image: portfolioimg,
    description: "A modern and responsive portfolio website created to highlight my skills, showcase personal and collaborative projects, and provide an overview of my development journey. Built with React and Tailwind CSS for a fast, elegant experience.",
    tools: ["React", "Tailwind", "Vite"],
    github: "https://github.com/jagadeesh017/portfolio",
    demo:"https://jagadeesh017.github.io/portfolio/",
    
  },
  {
    title: "Car Price Predictor",
    image: carp,
    description: "A machine learning-based web application that predicts the selling price of used cars based on key features such as manufacturing year, fuel type and mileage. Built using Python, pandas, and a regression model, the app provides accurate price estimates for second-hand cars.",
    tools: ["Python", "Streamlit", "Pandas"],
    github: "https://github.com/jagadeesh017/Car_Price_Prediction",
    demo:"https://carpriceprediction-3hylwnlzkqjsjeug4ogmcv.streamlit.app/" ,
  },
  {
     title: "College Techfest website",
    image: fest,
    description: "Developed a responsive and engaging tech fest website for our college, featuring detailed event listings, registration forms, schedules, and team member sections. It provides a central platform for students to explore workshops, coding contests, and speaker sessions.  ",
    tools: ["MERN", "PHP"],
    github: "https://github.com/jagadeesh017/Zeitgiest",
    demo:"https://zeitgeistjntukcse.com/",
  },
  {
    title: "LivePDF",
    image: livepdf,
    description: "  real-time web app for multi-user PDF viewing and drawing. Supports live annotations, per-page drawings, and synced canvas state. Built with React, Node.js, Socket.IO, and deployed on Render.",
    tools: ["React", "Node.js", "Express.js","Websockets"],
    github: "https://github.com/jagadeesh017/Collab-tool",
    demo: "https://collab-tool-1.onrender.com/",
  }
  
  
 
];
function Project() {
  return (
    <section className="w-full min-h-screen  px-4 py-16 flex flex-col items-center bg-transparent overflow-visible">
                  <h2 className="text-4xl md:text-5xl font-semibold text-white mb-2">
        Projects
      </h2>
       <span className="block w-48 h-1 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 rounded-full mb-12"></span>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-25 overflow-visible">
       {projectData.map((project, idx) => (
         <ProjectCard key={idx} {...project} />
       ))}
      </div>

    </section>
  );
}

export default memo(Project);
