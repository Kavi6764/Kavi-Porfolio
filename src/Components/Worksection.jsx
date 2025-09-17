import { ExternalLink, ArrowRight } from "lucide-react";
import InfoyieldxImg from "../assets/Infoyieldx.png"; // Replace with your actual images
import ImagifyImg from "../assets/imagify.png";
import GeminiImg from "../assets/GeminiClone.png";
import ChatAppImg from "../assets/Chat-App.png";

const WorkSection = () => {
  const projects = [
    {
      title: "Infoyieldx – Business Website",
      category: "Full Stack Development",
      description: `
        Developed reusable UI components with React and Tailwind CSS.
        Built backend APIs for project listings, resume handling, and contact form submission.
        Ensured mobile responsiveness, SEO readiness, and performance optimization.
        Collaborated on deploying the app using Netlify (frontend).
      `,
      tags: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"],
      image: InfoyieldxImg,
      live: "https://infoyieldx.netlify.app/", // replace with real link
      github: "#",
      color: "from-blue-500 to-purple-600",
    },
    {
      title: "Imagify – AI-Powered Image Tool",
      category: "Web Application",
      description: `
        Developed with React.js and Tailwind CSS for a sleek, responsive UI.
        Integrated Imagify API for real-time image editing, enhancement, and compression.
        Implemented backend logic with Node.js & Express.js for secure API routing.
        Demonstrates advanced file handling and third-party API integration.
      `,
      tags: ["React.js", "Node.js", "Express.js", "Tailwind CSS", "Imagify API"],
      image: ImagifyImg,
      live: "https://imagify-kavi-s.netlify.app/", // replace with real link
      github: "#",
      color: "from-green-500 to-teal-600",
    },
    {
      title: "Gemini Clone",
      category: "Frontend Project",
      description:
        "A responsive Gemini AI clone built with React.js showcasing interactive UI and smooth user experience.",
      tags: ["React.js", "Tailwind CSS"],
      image: GeminiImg,
      live: "https://kavis-geminaiclone.netlify.app/",
      github: "#",
      color: "from-pink-500 to-rose-600",
    },
    {
      title: "Chat App",
      category: "Full Stack Development",
      description:
        "A real-time chat application featuring modern UI, authentication, and live messaging.",
      tags: ["React.js", "Node.js", "Express.js", "Socket.io"],
      image: ChatAppImg,
      live: "https://chat-app-kavi.netlify.app/",
      github: "#",
      color: "from-orange-500 to-red-600",
    },
  ];

  return (
    <section id="work" className="py-20 bg-gray-50">
      <div className="max-w-[1400px] mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">My Latest Work</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore a collection of projects showcasing my expertise in
            full-stack development and modern web technologies.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-4 gap-8 mb-16">
          {projects.map((project, index) => (
            <div
              key={index}
              className="overflow-hidden bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 group"
            >
              {/* Project Image */}
              <div
                className={`h-48 bg-gradient-to-br ${project.color} relative overflow-hidden`}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition"
                />
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="inline-block bg-white/90 text-gray-800 text-xs font-medium px-3 py-1 rounded-full shadow-sm">
                    {project.category}
                  </span>
                </div>
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute top-4 right-4 p-2 bg-white/90 rounded-full shadow hover:bg-white group-hover:scale-110 transition-transform"
                >
                  <ExternalLink className="w-4 h-4 text-gray-700" />
                </a>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                {/* <p className="text-gray-600 mb-4 leading-relaxed">
                  {project.description}
                </p> */}

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 text-xs border rounded-full text-gray-600"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-blue-600 font-medium hover:underline"
                  >
                    Live Demo
                    <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                  </a>
                  {project.github !== "#" && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-gray-700 font-medium hover:underline"
                    >
                      GitHub
                      <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Show More Button */}
        <div className="text-center">
          <button className="px-6 py-3 border border-gray-300 rounded-lg text-gray-700 font-medium flex items-center gap-2 mx-auto hover:border-blue-600 hover:text-blue-600 transition">
            Show more <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default WorkSection;
