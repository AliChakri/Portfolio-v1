import React from "react";
import { Sparkles, Rocket, ArrowRight, Code, Palette, Zap } from "lucide-react";
import Starfield from "../Components/Hero/Starfield";

const HeroSection = () => {
  return (
    <section id="home" className="relative w-full min-h-screen overflow-hidden">
      {/* Starfield background */}
      <Starfield />

      {/* Hero content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white z-10 px-6 mt-32 md:mt-0">
        <div className="max-w-6xl mx-auto text-center ">
          {/* Badge */}
          <div
            className="hidden md:inline-flex items-center gap-2 px-5 py-2 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/30 backdrop-blur-sm mb-8"
            style={{ animation: "slide-up 0.6s ease-out" }}
          >
            <Sparkles className="w-4 h-4 text-blue-400" />
            <span className="text-sm text-gray-300">Available for new projects</span>
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
          </div>

          {/* Greeting */}
          <div
            className="my-4 md:mb-4"
            style={{ animation: "slide-up 0.6s ease-out 0.1s backwards" }}
          >
            <p className="text-md sm:text-lg md:text-xl text-gray-400 mb-0 md:mb-2">Hello, I'm</p>
          </div>

          {/* Animated Name */}
          <h1
            className="text-4xl sm:text-6xl md:text-8xl font-bold mb-4 tracking-tight"
            style={{ animation: "slide-up 0.6s ease-out 0.2s backwards" }}
          >
            <span className="animated-gradient bg-clip-text text-transparent drop-shadow-2xl">
              Ali
            </span>
          </h1>

          {/* Role/Title */}
          <div
            className="mb-8"
            style={{ animation: "slide-up 0.6s ease-out 0.3s backwards" }}
          >
            <p className="text-lg sm:text-2xl md:text-4xl font-semibold text-gray-300">
              Full Stack Developer
            </p>
          </div>

          {/* Description */}
          <div
            className="max-w-3xl mx-auto mb-12"
            style={{ animation: "slide-up 0.6s ease-out 0.4s backwards" }}
          >
            <p className="text-md sm:text-lg md:text-xl text-gray-400 leading-relaxed mb-8">
              I craft{" "}
              <span className="text-blue-400 font-semibold">digital experiences</span>{" "}
              that blend beautiful design with powerful functionality. Specializing in
              building{" "}
              <span className="text-purple-400 font-semibold">
                scalable web applications
              </span>{" "}
              that users love.
            </p>

            {/* Skill Pills */}
            <div className="flex flex-wrap justify-center gap-3">
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/30 backdrop-blur-sm hover:bg-blue-500/20 transition-all cursor-default">
                <Code className="w-4 h-4 text-blue-400" />
                <span className="text-sm text-gray-300">Full Stack</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/30 backdrop-blur-sm hover:bg-purple-500/20 transition-all cursor-default">
                <Palette className="w-4 h-4 text-purple-400" />
                <span className="text-sm text-gray-300">UI/UX Design</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/30 backdrop-blur-sm hover:bg-cyan-500/20 transition-all cursor-default">
                <Zap className="w-4 h-4 text-cyan-400" />
                <span className="text-sm text-gray-300">Performance</span>
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
            style={{ animation: "slide-up 0.6s ease-out 0.5s backwards" }}
          >
            <a
              href="#projects"
              className="group relative px-8 py-4 rounded-2xl text-lg font-semibold overflow-hidden bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 transition-all duration-300 shadow-lg hover:shadow-2xl hover:shadow-blue-500/50 hover:scale-105"
            >
              <span className="relative z-10 flex items-center gap-2">
                <Rocket className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                View Projects
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 opacity-0 group-hover:opacity-20 transition-opacity" />
            </a>

            <a
              href="#contact"
              className="group px-8 py-4 rounded-2xl text-lg font-semibold border-2 border-gray-600 bg-black/40 backdrop-blur-md hover:bg-white hover:text-black hover:border-white transition-all duration-300 shadow-lg hover:shadow-2xl hover:scale-105"
            >
              <span className="flex items-center gap-2">
                <Sparkles className="w-5 h-5" />
                Get In Touch
              </span>
            </a>
          </div>

          {/* Scroll Indicator */}
          <div
            className="hidden md:inline absolute bottom-8 left-1/2 transform -translate-x-1/2"
            style={{ animation: "slide-up 0.6s ease-out 0.6s backwards" }}
          >
            <div className="flex flex-col items-center gap-2 text-gray-500">
              <span className="text-sm">Scroll to explore</span>
              <div className="w-6 h-10 border-2 border-gray-600 rounded-full p-1">
                <div className="w-1 h-3 bg-gray-500 rounded-full mx-auto animate-bounce" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
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

        @keyframes gradient-flow {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }

        .animated-gradient {
          background-image: linear-gradient(
            -45deg,
            #60a5fa,
            #a855f7,
            #ec4899,
            #3b82f6
          );
          background-size: 400% 400%;
          animation: gradient-flow 6s ease infinite;
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
