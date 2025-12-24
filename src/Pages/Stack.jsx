import { useEffect, useRef, useState } from "react";

const logos = [
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",

];

const Stack = () => {
    
  const [index, setIndex] = useState(0);
  const intervalRef = useRef(null);

  // How many items visible per screen
  const getPerView = () => {
    if (window.innerWidth < 480) return 1;
    if (window.innerWidth < 768) return 2;
    if (window.innerWidth < 1024) return 3;
    return 4;
  };

  const slideNext = () => {
    const perView = getPerView();
    const maxIndex = logos.length - perView;

    setIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  // Auto slide
  useEffect(() => {
    intervalRef.current = setInterval(slideNext, 2500);
    return () => clearInterval(intervalRef.current);
  }, []);

  // Reset on resize
  useEffect(() => {
    const handleResize = () => setIndex(0);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="w-full max-w-6xl mx-auto overflow-hidden">
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{
          transform: `translateX(-${index * (100 / getPerView())}%)`,
        }}
      >
        {logos.map((logo, i) => (
          <div
            key={i}
            className="
              flex-shrink-0
              w-full
              sm:w-1/2
              md:w-1/3
              lg:w-1/4
              flex justify-center items-center p-6
            "
          >
            <img
              src={logo}
              alt="tech"
              className="w-20 h-20 object-contain"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Stack;
