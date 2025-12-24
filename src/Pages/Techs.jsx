import React, { useState, useEffect, useRef } from "react";
import {
  Code,
  Database,
  Globe,
  Server,
  GitBranch,
  Zap,
  Terminal,
  ChevronRight,
  ExternalLink,
} from "lucide-react";

// Sample tech stack data
const techStack = {
  frontend: {
    title: "Frontend",
    icon: Globe,
    color: "from-blue-500 to-cyan-500",
    technologies: [
      { name: "React", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg", level: 90 },
      { name: "JavaScript", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg", level: 95 },
      { name: "HTML5", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg", level: 95 },
      { name: "CSS3", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg", level: 90 },
      { name: "Tailwind", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg", level: 85 },
    ]
  },
  backend: {
    title: "Backend",
    icon: Server,
    color: "from-purple-500 to-pink-500",
    technologies: [
      { name: "Node.js", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg", level: 85 },
      { name: "Express", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg", level: 85 },
      { name: "Python", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg", level: 75 },
      { name: "MongoDB", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg", level: 80 },
    ]
  },
  tools: {
    title: "Tools",
    icon: Zap,
    color: "from-orange-500 to-red-500",
    technologies: [
      { name: "Git", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg", level: 90 },
      { name: "Postman", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg", level: 90 },
      { name: "VS Code", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg", level: 95 },
      { name: "Figma", image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg", level: 75 },
    ]
  },
};

const Techs = () => {
  const [activeCategory, setActiveCategory] = useState("frontend");
  const [hoveredTech, setHoveredTech] = useState(null);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const autoPlayRef = useRef(null);

  // Auto-play through categories
  useEffect(() => {
    if (!isAutoPlaying) return;

    const categories = Object.keys(techStack);
    const currentIndex = categories.indexOf(activeCategory);
    
    autoPlayRef.current = setTimeout(() => {
      const nextIndex = (currentIndex + 1) % categories.length;
      setActiveCategory(categories[nextIndex]);
    }, 5000);

    return () => clearTimeout(autoPlayRef.current);
  }, [activeCategory, isAutoPlaying]);

  const handleCategoryClick = (category) => {
    setActiveCategory(category);
    setIsAutoPlaying(false);
    
    clearTimeout(autoPlayRef.current);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const categories = Object.keys(techStack);
  const currentTech = techStack[activeCategory];

  return (
    <section
      id="skills"
      className="relative py-16 sm:py-20 bg-gradient-to-t from-black via-[#0a0a1a] to-gray-900 text-white overflow-hidden"
    >
      {/* Glowing gradient orbs */}
      <div className="absolute top-0 left-0 w-64 h-64 sm:w-96 sm:h-96 bg-purple-600/30 blur-3xl rounded-full -translate-x-1/2 -translate-y-1/2 animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 sm:w-96 sm:h-96 bg-blue-600/20 blur-3xl rounded-full translate-x-1/2 translate-y-1/2 animate-pulse"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-3 sm:mb-4 bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent">
            Tech Stack
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl mx-auto px-4">
            The technologies fueling my projects and ideas
          </p>
        </div>

        {/* Category Buttons */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 md:gap-4 mb-8 sm:mb-12 animate-slide-up px-2">
          {categories.map((category) => {
            const CategoryIcon = techStack[category].icon;
            return (
              <button
                key={category}
                onClick={() => handleCategoryClick(category)}
                className={`px-4 sm:px-6 py-2 sm:py-3 rounded-xl flex items-center gap-2 sm:gap-3 transition-all duration-300 text-sm sm:text-base ${
                  activeCategory === category
                    ? `bg-gradient-to-r ${techStack[category].color} text-white shadow-lg scale-105`
                    : "bg-white/5 border border-white/10 text-gray-300 hover:text-white hover:bg-white/10"
                }`}
              >
                <CategoryIcon className="w-4 h-4 sm:w-5 sm:h-5" />
                <span className="font-medium">{techStack[category].title}</span>
                {activeCategory === category && <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4 animate-pulse" />}
              </button>
            );
          })}
        </div>

        {/* Category Showcase */}
        <div 
          key={activeCategory}
          className="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl animate-fade-in-scale"
        >
          {/* Animated gradient background */}
          <div className={`absolute inset-0 bg-gradient-to-br ${currentTech.color} opacity-80`}></div>
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(255,255,255,0.1),transparent_50%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(0,0,0,0.2),transparent_50%)]"></div>
          
          {/* Glass effect overlay */}
          <div className="absolute inset-0 backdrop-blur-sm bg-black/20"></div>

          {/* Content */}
          <div className="relative z-10 p-6 sm:p-8 md:p-12">
            {/* Header */}
            <div className="flex items-center gap-3 sm:gap-4 mb-6 sm:mb-8">
              <div className="p-2 sm:p-3 bg-white/10 backdrop-blur-sm rounded-xl sm:rounded-2xl">
                <currentTech.icon className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 text-white" />
              </div>
              <div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white">{currentTech.title}</h3>
                <p className="text-white/70 text-xs sm:text-sm">Professional expertise</p>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-3 sm:gap-4 md:gap-6 mb-6 sm:mb-8">
              <div className="bg-white/10 backdrop-blur-md rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-white/20">
                <div className="text-white/70 text-xs sm:text-sm mb-1 sm:mb-2">Technologies</div>
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
                  {currentTech.technologies.length}
                </div>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-white/20">
                <div className="text-white/70 text-xs sm:text-sm mb-1 sm:mb-2">Avg. Proficiency</div>
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-white">
                  {Math.round(
                    currentTech.technologies.reduce((acc, t) => acc + t.level, 0) /
                      currentTech.technologies.length
                  )}%
                </div>
              </div>
            </div>

            {/* Tech Logos Section */}
            <div className="bg-white/10 backdrop-blur-md rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-white/20">
              <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6">
                <Code className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                <h4 className="text-lg sm:text-xl font-semibold text-white">Technologies</h4>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4">
                {currentTech.technologies.map((tech, index) => (
                  <div
                    key={index}
                    className="group relative bg-white/10 backdrop-blur-sm rounded-lg sm:rounded-xl p-3 sm:p-4 hover:bg-white/20 transition-all duration-300 border border-white/10 hover:border-white/30 hover:scale-110 cursor-pointer animate-scale-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                    onMouseEnter={() => setHoveredTech(tech.name)}
                    onMouseLeave={() => setHoveredTech(null)}
                  >
                    <img
                      src={tech.image}
                      alt={tech.name}
                      className="w-full h-8 sm:h-10 md:h-12 object-contain"
                    />
                    {hoveredTech === tech.name && (
                      <div className="hidden sm:block absolute -top-10 left-1/2 -translate-x-1/2 bg-gray-900 text-white text-xs px-3 py-1 rounded-lg whitespace-nowrap shadow-lg z-20">
                        {tech.name}
                        <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-gray-900"></div>
                      </div>
                    )}
                    {/* Mobile: Show name below */}
                    <p className="sm:hidden text-white text-xs text-center mt-2 truncate">{tech.name}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Auto-play indicator */}
            <div className="mt-4 sm:mt-6 flex items-center justify-center gap-2">
              {categories.map((cat) => (
                <div
                  key={cat}
                  className={`h-1 rounded-full transition-all duration-300 ${
                    cat === activeCategory ? 'w-6 sm:w-8 bg-white' : 'w-2 bg-white/30'
                  }`}
                ></div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12 sm:mt-16 animate-fade-in-up px-4">
          <div className="bg-white/5 border border-purple-500/30 rounded-2xl p-6 sm:p-8 max-w-xl mx-auto backdrop-blur-md">
            <Terminal className="w-8 h-8 sm:w-10 sm:h-10 mx-auto mb-3 sm:mb-4 text-purple-400" />
            <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3">Let's Build Something Stellar</h3>
            <p className="text-sm sm:text-base text-gray-300 mb-4 sm:mb-6">
              Combining technologies to craft extraordinary experiences.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 px-6 sm:px-8 py-2.5 sm:py-3 rounded-full font-semibold text-sm sm:text-base transition-all duration-300 hover:scale-105 shadow-lg"
            >
              <span>Start Mission</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fade-in-scale {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes scale-in {
          from {
            opacity: 0;
            transform: scale(0.8);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 0.8s ease-out;
        }

        .animate-slide-up {
          animation: slide-up 0.6s ease-out 0.2s backwards;
        }

        .animate-fade-in-scale {
          animation: fade-in-scale 0.5s ease-out;
        }

        .animate-scale-in {
          animation: scale-in 0.4s ease-out backwards;
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out 0.4s backwards;
        }
      `}</style>
    </section>
  );
};

export default Techs;