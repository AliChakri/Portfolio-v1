import React from "react";

const SectionSeparator = () => {
  return (
    <div className="relative w-full h-[2px] flex items-center justify-center">
      {/* Faint outer glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500/10 to-transparent blur-md" />

      {/* Main glowing line */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-70" />

      {/* Central pulse dot */}
      <div className="relative z-10 w-3 h-3 bg-blue-500 rounded-full shadow-[0_0_15px_4px_rgba(59,130,246,0.8)]">
        {/* Inner shine */}
        <div className="absolute inset-0 m-auto w-1 h-1 bg-white rounded-full" />
      </div>

      {/* Optional soft gradient glow below line */}
      <div className="absolute bottom-[-1px] left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-blue-400/40 to-transparent blur-sm" />
    </div>
  );
};

export default SectionSeparator;
