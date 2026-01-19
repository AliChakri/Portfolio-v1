import React, { useRef } from 'react';
import { Rocket, Satellite, Globe, Code, Zap, Target, GraduationCap, Calendar, BookOpen, Headset } from 'lucide-react';

const About = () => {
  
  const skills = [
    { name: "Frontend Development", level: 90, icon: Code, color: "from-blue-500 to-cyan-500" },
    { name: "Backend Development", level: 85, icon: Zap, color: "from-purple-500 to-pink-500" },
    { name: "UI/UX Design", level: 80, icon: Target, color: "from-orange-500 to-red-500" }
  ];

  const achievements = [
    { title: "Support", value: "24/7", icon: Headset, description: "Dedicated project communication" },
    { title: "Experience", value: "3Y", icon: Code, description: "Years of coding journey" },
    { title: "Technologies", value: "12+", icon: Zap, description: "Tech stacks mastered" }
  ];

  return (
    <section  id='about' className="relative min-h-screen py-20 text-white overflow-hidden bg-gradient-to-b from-black via-[#0a0a1a] to-gray-900">
      {/* Enhanced glowing orbs */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-purple-600/30 blur-3xl rounded-full -translate-x-1/2 -translate-y-1/2 animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-600/20 blur-3xl rounded-full translate-x-1/2 translate-y-1/2 animate-pulse"></div>
      <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-cyan-500/10 blur-3xl rounded-full -translate-x-1/2 -translate-y-1/2"></div>

      {/* Animated stars */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(30)].map((_, i) => (
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

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          {/* <RocketHeader /> */}
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-blue-200 to-purple-300 bg-clip-text text-transparent">
            Mission Briefing
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Designing and engineering full-stack web systems with a focus on  
            <span className="text-blue-400 font-semibold"> performance, scalability, </span>
            and
            <span className="text-blue-400 font-semibold"> user experience.</span>
          </p>
        </div>

        {/* Education Banner */}
        {/* <div className="mb-12 transform hover:scale-[1.02] transition-transform duration-300">
          <div className="bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-cyan-600/20 backdrop-blur-md border border-blue-500/40 rounded-2xl p-8 shadow-2xl">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-6">
                <div className="p-4 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl shadow-lg">
                  <GraduationCap className="w-10 h-10 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">Computer Science Student</h3>
                  <p className="text-gray-300 text-lg">2nd Year • University Program</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl px-6 py-3 border border-white/20">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-5 h-5 text-blue-400" />
                    <span className="text-sm text-gray-300">2023 - Present</span>
                  </div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl px-6 py-3 border border-white/20">
                  <div className="flex items-center gap-2">
                    <BookOpen className="w-5 h-5 text-purple-400" />
                    <span className="text-sm text-gray-300">Full Stack Focus</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> */}

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column */}
          <div className="space-y-8">
            {/* Who I Am */}
            <div className="group bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 hover:border-blue-500/50 hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-500">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl">
                  <Satellite className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold">Background</h3>
              </div>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  As a <span className="text-blue-400 font-semibold">Computer Science student</span>,  with a strong focus on full-stack development,
                  I work at the intersection of engineering fundamentals and real-world application.
                  My background combines academic training with hands-on project work,
                  allowing me to translate theoretical concepts into reliable,
                  production-ready solutions.
                </p>
                <p>
                  I follow a <span className="text-purple-400 font-semibold">build-first mindset.</span> <br />
                  By designing and developing complete systems — from structured frontends to scalable backends — I focus on writing clean,
                  maintainable code that solves real problems.
                  Each project is an opportunity to refine both technical depth and architectural thinking.
                </p>
                <p>
                  My work emphasizes performance, usability, and long-term scalability.
                  I approach development with a balance of modern design principles and robust engineering practices,
                  ensuring every product is thoughtful, efficient, and built to last.
                </p>
              </div>
            </div>

            {/* Skills */}
            <div className="group bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 hover:border-purple-500/50 hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-500">
              <div className="flex items-center gap-3 mb-8">
                <div className="p-3 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold">Tech Arsenal</h3>
              </div>
              <div className="space-y-6">
                {skills.map((skill, index) => (
                  <div key={index} className="group/skill">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-3">
                        <div className={`p-2 bg-gradient-to-r ${skill.color} rounded-lg shadow-lg`}>
                          <skill.icon className="w-5 h-5 text-white" />
                        </div>
                        <span className="font-semibold text-white text-lg">{skill.name}</span>
                      </div>
                      <span className="text-gray-400 font-mono font-bold text-lg">{skill.level}%</span>
                    </div>
                    <div className="relative w-full bg-white/10 rounded-full h-3 overflow-hidden shadow-inner">
                      <div 
                        className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out shadow-lg relative`}
                        style={{ width: `${skill.level}%` }}
                      >
                        <div className="absolute inset-0 bg-white/30 animate-pulse"></div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {/* Achievements */}
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="group bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 hover:border-blue-500/50 hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-500 hover:scale-105 cursor-pointer"
              >
                <div className="flex items-start gap-5">
                  <div className="relative">
                    <div className="p-4 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <achievement.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-purple-400 rounded-xl blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="text-xl font-bold text-white">{achievement.title}</h4>
                      <span className="text-4xl font-bold text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text animate-gradient">
                        {achievement.value}
                      </span>
                    </div>
                    <p className="text-gray-400">{achievement.description}</p>
                  </div>
                </div>
              </div>
            ))}

            {/* CTA Card */}
            <div className="bg-gradient-to-br from-blue-600/30 via-purple-600/30 to-cyan-600/30 backdrop-blur-md border border-blue-500/40 rounded-2xl p-10 text-center shadow-2xl hover:shadow-blue-500/30 transition-all duration-500">
              <div className="relative mb-6">
                <Globe className="w-16 h-16 mx-auto text-blue-400 animate-spin-slow" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-20 h-20 bg-blue-500/20 rounded-full blur-xl animate-pulse"></div>
                </div>
              </div>
              <h3 className="text-3xl font-bold mb-4 text-white">Launch Together</h3>
              <p className="text-gray-300 mb-8 text-lg leading-relaxed">
                Looking to build a reliable, well-designed web application?
                Let’s collaborate to create scalable, performant digital products with clear goals and measurable results.
              </p>
              <a 
                href="#contact"
                className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-500 via-purple-600 to-cyan-500 hover:from-blue-600 hover:via-purple-700 hover:to-cyan-600 text-white px-10 py-4 rounded-full font-bold text-lg transition-all duration-300 hover:scale-105 shadow-2xl hover:shadow-blue-500/50 group"
              >
                <span>Initiate Contact</span>
                <Rocket className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            {/* Fun Fact Card */}
            <div className="bg-gradient-to-br from-purple-600/20 via-pink-600/20 to-orange-600/20 backdrop-blur-md border border-purple-500/30 rounded-2xl p-8 hover:border-purple-500/50 transition-all duration-500">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white mb-2">Currently Exploring</h4>
                  <p className="text-gray-300">
                    System Design, cloud architecture, and the fascinating world of AI integration. 
                    Always pushing the boundaries of what's possible.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes twinkle {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 1; }
        }
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }
        .animate-twinkle {
          animation: twinkle 3s ease-in-out infinite;
        }
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
      `}</style>
    </section>
  );
};

export default About;