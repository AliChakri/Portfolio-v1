import React from "react";
import { Sparkles, Rocket, ArrowRight, Code, Palette, Zap } from "lucide-react";

// Simplified Starfield component
const Starfield = () => {
  return (
    <div className="absolute inset-0 bg-black overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-blue-950/20 to-black" />
      {[...Array(50)].map((_, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 bg-white rounded-full animate-twinkle"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 3}s`,
            opacity: Math.random() * 0.7 + 0.3
          }}
        />
      ))}
    </div>
  );
};

const HeroSection = () => {
  return (
    <section id="home" className="relative w-full min-h-screen overflow-hidden">
      {/* Starfield background */}
      <Starfield />

      {/* Hero content */}
      <div className="absolute inset-0 flex items-center justify-center text-white z-10 px-4 sm:px-6 pt-20 sm:pt-24 md:pt-0">
        <div className="max-w-6xl mx-auto text-center w-full">
          {/* Badge - Hidden on mobile for space */}
          <div
            className="hidden sm:inline-flex items-center gap-2 px-4 sm:px-5 py-2 rounded-full bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/30 backdrop-blur-sm mb-6 sm:mb-8"
            style={{ animation: "slide-up 0.6s ease-out" }}
          >
            <Sparkles className="w-4 h-4 text-blue-400" />
            <span className="text-xs sm:text-sm text-gray-300">Available for new projects</span>
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
          </div>

          {/* Greeting */}
          <div
            className="mb-2 sm:mb-3"
            style={{ animation: "slide-up 0.6s ease-out 0.1s backwards" }}
          >
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-400">
              Hello, I'm
            </p>
          </div>

          {/* Animated Name - Responsive sizing */}
          <h1
            className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-3 sm:mb-4 tracking-tight leading-none"
            style={{ animation: "slide-up 0.6s ease-out 0.2s backwards" }}
          >
            <span className="animated-gradient bg-clip-text text-transparent drop-shadow-2xl">
              Ali
            </span>
          </h1>

          {/* Role/Title - Responsive sizing */}
          <div
            className="mb-6 sm:mb-8"
            style={{ animation: "slide-up 0.6s ease-out 0.3s backwards" }}
          >
            <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-300">
              Full Stack Developer
            </p>
          </div>

          {/* Description - Better mobile spacing */}
          <div
            className="max-w-3xl mx-auto mb-8 sm:mb-10 md:mb-12 px-2"
            style={{ animation: "slide-up 0.6s ease-out 0.4s backwards" }}
          >
            <p className="text-base sm:text-lg md:text-xl text-gray-400 leading-relaxed mb-6 sm:mb-8">
              I craft{" "}
              <span className="text-blue-400 font-semibold">digital experiences</span>{" "}
              that blend beautiful design with powerful functionality. Specializing in
              building{" "}
              <span className="text-purple-400 font-semibold">
                scalable web applications
              </span>{" "}
              that users love.
            </p>

            {/* Skill Pills - Better mobile layout */}
            <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
              <div className="flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/30 backdrop-blur-sm hover:bg-blue-500/20 transition-all cursor-default">
                <Code className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-blue-400" />
                <span className="text-xs sm:text-sm text-gray-300">Full Stack</span>
              </div>
              <div className="flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/30 backdrop-blur-sm hover:bg-purple-500/20 transition-all cursor-default">
                <Palette className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-purple-400" />
                <span className="text-xs sm:text-sm text-gray-300">UI/UX Design</span>
              </div>
              <div className="flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/30 backdrop-blur-sm hover:bg-cyan-500/20 transition-all cursor-default">
                <Zap className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-cyan-400" />
                <span className="text-xs sm:text-sm text-gray-300">Performance</span>
              </div>
            </div>
          </div>

          {/* CTA Buttons - Better mobile stacking */}
          <div
            className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-12 sm:mb-16 px-4"
            style={{ animation: "slide-up 0.6s ease-out 0.5s backwards" }}
          >
            <a
              href="#projects"
              className="group relative w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 rounded-2xl text-base sm:text-lg font-semibold overflow-hidden bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 transition-all duration-300 shadow-lg hover:shadow-2xl hover:shadow-blue-500/50 hover:scale-105"
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                <Rocket className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
                View Projects
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-400 opacity-0 group-hover:opacity-20 transition-opacity" />
            </a>

            <a
              href="#contact"
              className="group w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 rounded-2xl text-base sm:text-lg font-semibold border-2 border-gray-600 bg-black/40 backdrop-blur-md hover:bg-white hover:text-black hover:border-white transition-all duration-300 shadow-lg hover:shadow-2xl hover:scale-105"
            >
              <span className="flex items-center justify-center gap-2">
                <Sparkles className="w-4 h-4 sm:w-5 sm:h-5" />
                Get In Touch
              </span>
            </a>
          </div>

          {/* Scroll Indicator - Hidden on mobile */}
          <div
            className="hidden md:flex absolute bottom-8 left-1/2 transform -translate-x-1/2 flex-col items-center gap-2 text-gray-500"
            style={{ animation: "slide-up 0.6s ease-out 0.6s backwards" }}
          >
            <span className="text-sm">Scroll to explore</span>
            <div className="w-6 h-10 border-2 border-gray-600 rounded-full p-1">
              <div className="w-1 h-3 bg-gray-500 rounded-full mx-auto animate-bounce" />
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

        @keyframes twinkle {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 0.8; transform: scale(1.2); }
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

        .animate-twinkle {
          animation: twinkle 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default HeroSection;