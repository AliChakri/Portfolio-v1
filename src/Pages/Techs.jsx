import React, { useState, useEffect, useRef } from "react";
import {
  Code,
  Database,
  Globe,
  Server,
  GitBranch,
  Zap,
  Terminal,
  Settings,
  Rocket,
  Star,
  ChevronRight,
  ExternalLink,
} from "lucide-react";
import gsap from "gsap";
import { techStack } from "../data/data";
import { ScrollTrigger } from "gsap/ScrollTrigger";


const Techs = () => {

  const [activeCategory, setActiveCategory] = useState("frontend");
  const [hoveredTech, setHoveredTech] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  
  const cardRef = useRef(null);
  const techLogosRef = useRef(null);
  const autoPlayRef = useRef(null);
  const sectionRef = useRef(null);


  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Auto-play through categories
  useEffect(() => {
    if (!isAutoPlaying) return;

    const categories = Object.keys(techStack);
    const currentIndex = categories.indexOf(activeCategory);
    
    autoPlayRef.current = setTimeout(() => {
      const nextIndex = (currentIndex + 1) % categories.length;
      setActiveCategory(categories[nextIndex]);
    }, 5000); // Change every 5 seconds

    return () => clearTimeout(autoPlayRef.current);
  }, [activeCategory, isAutoPlaying]);

  // Animate card when category changes
  useEffect(() => {
    if (cardRef.current) {
      gsap.fromTo(
        cardRef.current,
        {
          opacity: 0,
          y: 30,
          scale: 0.95,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.6,
          ease: "power3.out",
        }
      );
    }

    if (techLogosRef.current) {
      const logos = techLogosRef.current.children;
      gsap.fromTo(
        logos,
        {
          opacity: 0,
          y: 20,
          scale: 0.8,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.5,
          stagger: 0.08,
          ease: "back.out(1.7)",
          delay: 0.3,
        }
      );
    }
  }, [activeCategory]);

  useEffect(() => {
  const ctx = gsap.context(() => {
    gsap.from(sectionRef.current, {
      opacity: 0,
      y: 100,
      duration: 1.2,
      ease: "power3.out",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
        once: true, // only animate the first time it appears
      },
    });

    // Optional: stagger animation for child elements
    gsap.from(sectionRef.current.querySelectorAll(".tech-animate"), {
      opacity: 0,
      y: 40,
      stagger: 0.15,
      delay: 0.2,
      duration: 0.8,
      ease: "power2.out",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 75%",
        once: true,
      },
    });
  });

  return () => ctx.revert();
  }, []);


  const handleCategoryClick = (category) => {
    setActiveCategory(category);
    setIsAutoPlaying(false); // Stop auto-play when user manually selects
    
    // Resume auto-play after 10 seconds of inactivity
    clearTimeout(autoPlayRef.current);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const categories = Object.keys(techStack);
  const currentTech = techStack[activeCategory];

  return (
    <section
      id="skills"
      ref={sectionRef} className="relative py-20 bg-gradient-to-t from-black via-[#0a0a1a] to-gray-900 text-white overflow-hidden">
      {/* Glowing gradient orbs */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-purple-600/30 blur-3xl rounded-full -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-600/20 blur-3xl rounded-full translate-x-1/2 translate-y-1/2"></div>

      {/* Background Effects */}
      <div className="absolute inset-0 opacity-30">
        <div
          className="absolute w-96 h-96 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-full blur-3xl"
          style={{
            top: "20%",
            left: "15%",
            transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`,
            transition: "transform 0.3s ease-out",
          }}
        />
        <div
          className="absolute w-72 h-72 bg-gradient-to-r from-green-500/20 to-cyan-500/20 rounded-full blur-3xl"
          style={{
            bottom: "15%",
            right: "20%",
            transform: `translate(${-mousePosition.x * 0.03}px, ${-mousePosition.y * 0.03}px)`,
            transition: "transform 0.3s ease-out",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent">
            Tech Stack
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            The technologies fueling my projects and ideas
          </p>
        </div>

        {/* Category Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => {
            const CategoryIcon = techStack[category].icon;
            return (
              <button
                key={category}
                onClick={() => handleCategoryClick(category)}
                className={`px-6 py-3 rounded-xl flex items-center gap-3 transition-all duration-300 ${
                  activeCategory === category
                    ? `bg-gradient-to-r ${techStack[category].color} text-white shadow-lg scale-105`
                    : "bg-white/5 border border-white/10 text-gray-300 hover:text-white hover:bg-white/10"
                }`}
              >
                <CategoryIcon className="w-5 h-5" />
                <span className="font-medium">{techStack[category].title}</span>
                {activeCategory === category && <ChevronRight className="w-4 h-4 animate-pulse" />}
              </button>
            );
          })}
        </div>

        {/* Category Showcase - Enhanced with gradient background */}
        <div 
          ref={cardRef}
          className="relative rounded-3xl overflow-hidden shadow-2xl"
        >
          {/* Animated gradient background */}
          <div className={`absolute inset-0 bg-gradient-to-br ${currentTech.color} opacity-80`}></div>
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(255,255,255,0.1),transparent_50%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(0,0,0,0.2),transparent_50%)]"></div>
          
          {/* Glass effect overlay */}
          <div className="absolute inset-0 backdrop-blur-sm bg-black/20"></div>

          {/* Content */}
          <div className="relative z-10 p-8 md:p-12">
            {/* Header */}
            <div className="flex items-center gap-4 mb-8">
              <div className="p-3 bg-white/10 backdrop-blur-sm rounded-2xl">
                <currentTech.icon className="w-10 h-10 text-white" />
              </div>
              <div>
                <h3 className="text-3xl font-bold text-white">{currentTech.title}</h3>
                <p className="text-white/70 text-sm">Professional expertise</p>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                <div className="text-white/70 text-sm mb-2">Technologies</div>
                <div className="text-4xl font-bold text-white">
                  {currentTech.technologies.length}
                </div>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                <div className="text-white/70 text-sm mb-2">Avg. Proficiency</div>
                <div className="text-4xl font-bold text-white">
                  {Math.round(
                    currentTech.technologies.reduce((acc, t) => acc + t.level, 0) /
                      currentTech.technologies.length
                  )}%
                </div>
              </div>
            </div>

            {/* Tech Logos Section */}
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
              <div className="flex items-center gap-3 mb-6">
                <Code className="w-6 h-6 text-white" />
                <h4 className="text-xl font-semibold text-white">Technologies</h4>
              </div>
              <div 
                ref={techLogosRef}
                className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4"
              >
                {currentTech.technologies.map((tech, index) => (
                  <div
                    key={index}
                    className="group relative bg-white/10 backdrop-blur-sm rounded-xl p-4 hover:bg-white/20 transition-all duration-300 border border-white/10 hover:border-white/30 hover:scale-110 cursor-pointer"
                    onMouseEnter={() => setHoveredTech(tech.name)}
                    onMouseLeave={() => setHoveredTech(null)}
                  >
                    <img
                      src={tech.image}
                      alt={tech.name}
                      className="w-full h-12 object-contain"
                    />
                    {hoveredTech === tech.name && (
                      <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-gray-900 text-white text-xs px-3 py-1 rounded-lg whitespace-nowrap shadow-lg">
                        {tech.name}
                        <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-gray-900"></div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Auto-play indicator */}
            <div className="mt-6 flex items-center justify-center gap-2">
              {categories.map((cat) => (
                <div
                  key={cat}
                  className={`h-1 rounded-full transition-all duration-300 ${
                    cat === activeCategory ? 'w-8 bg-white' : 'w-2 bg-white/30'
                  }`}
                ></div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <div className="bg-white/5 border border-purple-500/30 rounded-2xl p-8 max-w-xl mx-auto backdrop-blur-md">
            <Terminal className="w-10 h-10 mx-auto mb-4 text-purple-400" />
            <h3 className="text-2xl font-bold mb-3">Let's Build Something Stellar</h3>
            <p className="text-gray-300 mb-6">
              Combining technologies to craft extraordinary experiences.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105 shadow-lg"
            >
              <span>Start Mission</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Techs;