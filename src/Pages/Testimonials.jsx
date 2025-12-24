import React from "react";
import { Star } from "lucide-react";
import { reviews } from "../data/data"


const ClientReviews = () => {
  return (
      <section className="relative py-20  bg-gradient-to-t from-black via-[#0a0a1a] to-gray-900 text-white overflow-hidden">
          
          {/* Glowing gradient orbs */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-purple-600/30 blur-3xl rounded-full -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-600/20 blur-3xl rounded-full translate-x-1/2 translate-y-1/2"></div>
          

      {/* Subtle space-like background gradient */}
      <div className="" />

      <div className="relative z-10 max-w-6xl mx-auto text-center px-6">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-wide">
          Client <span className="text-blue-400">Reviews</span>
        </h2>

        <p className="text-gray-400 mb-12 max-w-2xl mx-auto">
          What my clients say about working with me — from concept to launch.
        </p>

        <div className="grid gap-10 md:grid-cols-3">
          {reviews.map((r, index) => (
            <div
              key={index}
              className="bg-gray-900/60 border border-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-blue-500/20 backdrop-blur-md transition-transform duration-300 hover:scale-[1.02]"
            >
              <div className="flex flex-col items-center">
                <img
                  src={r.image}
                  alt={r.name}
                  className="w-20 h-20 rounded-full object-cover mb-4 border-2 border-blue-500"
                />
                <h3 className="text-lg font-semibold text-blue-400">
                  {r.name}
                </h3>
                <p className="text-sm text-gray-400 mb-4">{r.role}</p>

                <div className="flex justify-center mb-4 text-blue-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} fill="currentColor" />
                  ))}
                </div>

                <p className="text-gray-300 text-sm leading-relaxed italic">
                  “{r.feedback}”
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientReviews;
