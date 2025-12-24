import React from "react";
import { Rocket, Mail, Github, Linkedin, Twitter, Facebook,Heart, ArrowUp, Globe } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  const socialLinks = [
    { name: "GitHub", icon: Github, href: "https://github.com/AliChakri", color: "hover:text-purple-400" },
    { name: "Facebook", icon: Facebook, href: "https://www.facebook.com/al.ch.893692/", color: "hover:text-blue-400" },
    // { name: "Twitter", icon: Twitter, href: "https://twitter.com/yourusername", color: "hover:text-cyan-400" },
    // { name: "Email", icon: Mail, href: "mailto:ali.chakri@example.com", color: "hover:text-pink-400" },
  ];

  return (
    <footer className="relative bg-gradient-to-t from-gray-900 via-[#0a0a1a] to-black text-white overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-blue-600/20 blur-3xl rounded-full -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-600/20 blur-3xl rounded-full translate-x-1/2 translate-y-1/2"></div>

      {/* Floating stars */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full opacity-30"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `twinkle ${2 + Math.random() * 3}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      <style>{`
        @keyframes twinkle {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.8; }
        }
      `}</style>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-12">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="relative">
                <div className="absolute inset-0 bg-blue-500/20 blur-xl rounded-full"></div>
                <div className="relative p-2 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl">
                  <Rocket className="w-6 h-6 text-white" />
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  NOCTIS
                </h3>
                <p className="text-[10px] text-gray-400 tracking-widest">SPACE TECH</p>
              </div>
            </div>
            <p className="text-gray-400 leading-relaxed mb-6">
              Crafting digital experiences that push the boundaries of innovation. 
              Exploring the cosmos of web development, one project at a time.
            </p>
            <div className="flex items-center gap-2 text-sm text-gray-500">
              <Globe className="w-4 h-4" />
              <span>Algeria, Earth • Solar System</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <div className="w-1 h-6 bg-gradient-to-b from-blue-400 to-purple-400 rounded-full"></div>
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-blue-400 transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <span className="w-0 h-0.5 bg-blue-400 group-hover:w-4 transition-all duration-300"></span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <div className="w-1 h-6 bg-gradient-to-b from-blue-400 to-purple-400 rounded-full"></div>
              Connect
            </h4>
            <div className="space-y-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center gap-3 text-gray-400 ${social.color} transition-all duration-200 group`}
                  >
                    <div className="p-2 bg-white/5 rounded-lg group-hover:bg-white/10 transition-colors">
                      <Icon className="w-4 h-4" />
                    </div>
                    <span>{social.name}</span>
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="relative mb-8">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-white/10"></div>
          </div>
          <div className="relative flex justify-center">
            <div className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 px-6 py-2 rounded-full border border-white/10">
              <div className="flex items-center gap-2 text-sm text-gray-400">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span>Mission Active</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm flex items-center gap-2">
            © {new Date().getFullYear()} NOCTIS. Made with 
            <Heart className="w-4 h-4 text-red-400 fill-red-400 animate-pulse" /> 
            by Ali Chakri
          </p>
          
          <button
            onClick={scrollToTop}
            className="group p-3 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 rounded-full transition-all duration-300 hover:scale-110 shadow-lg hover:shadow-blue-500/50"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-5 h-5 text-white group-hover:translate-y-[-2px] transition-transform" />
          </button>
        </div>

        {/* Extra Info */}
        <div className="mt-8 text-center">
          <p className="text-xs text-gray-500">
            "The universe is under no obligation to make sense to you." - Neil deGrasse Tyson
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;