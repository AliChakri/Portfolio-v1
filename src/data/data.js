
import { Code, Target, Satellite, Globe, Rocket, Zap, Server, Database, Settings } from "lucide-react";

import agenda_dash from '../assets/agenda_dash.png'
import agenda_tasks from '../assets/agenda_tasks.png'
import agenda_login from '../assets/agenda_login.png'

import ecom_home from '../assets/ecom_home.png'
import ecom_page from '../assets/ecom_page.png'
import ecom_anal from '../assets/ecom_anal.png'
import ecom_cart from '../assets/ecom_cart.png'

import neural_home from '../assets/neural_home.png'
import neural_2 from '../assets/neural_2.png'
import neural_3 from '../assets/neural_3.png'

//  ABOUT ME SECTION DATA
  export const skills = [
    { name: 'Frontend Development', level: 92, icon: Code, color: 'from-blue-400 to-cyan-400' },
    { name: 'UI/UX Design', level: 88, icon: Target, color: 'from-purple-400 to-pink-400' },
    { name: 'API Integration', level: 85, icon: Satellite, color: 'from-orange-400 to-red-400' },
    { name: 'Data Visualization', level: 90, icon: Globe, color: 'from-green-400 to-emerald-400' },
  ];

  export const achievements = [
    // {
    //   icon: Rocket,
    //   title: "Projects Delivered",
    //   value: "15+",
    //   description: "Successfully launched applications with 99.9% uptime"
    // },
    // {
    //   icon: Globe,
    //   title: "Global Users",
    //   value: "50K+",
    //   description: "People across multiple continents using my apps"
    // },
    {
      icon: Zap,
      title: "Years of Experience",
      value: "2+",
      description: "Creating performant and scalable digital solutions"
    }
];
  
// PROJECTS SECTION DATA
export const projects = [
{
    id: 1,
    title: "Agenda X",
    description: "A Task manager built with Node.js/Express and C++",
    longDescription: "A comprehensive task management system built with Node.js/Express for the backend API, C++ for data structure implementations (Linked List, Stack, Queue), and MongoDB for data persistence",
    category: "web",
    technologies: ["C++", "Node.js","Express.js", "React.js","TailwindCSS"],
    liveUrl: "https://agenda-x.vercel.app/",
    githubUrl: "https://github.com/AliChakri/Task-Manager---Backend",
    images: [
    agenda_dash,
    agenda_tasks,
    agenda_login,
    ],
    status: "Completed",
    duration: "1 week",
    team: "Duo project",
    awards: ["Best Student Project Award"],
},
{
    id: 2,
    title: "E-Commerce Store",
    description: "A full-stack MERN e-commerce platform with product management and secure checkout.",
    longDescription: "A MERN stack e-commerce web app with product catalog, user authentication (JWT), shopping cart, and PayPal payments. Admin dashboard included for managing products and orders.",
    category: "web",
    technologies: ["MongoDB", "Express.js", "React", "Node.js", "PayPal API"],
    liveUrl: "https://e-commerce-fit-vibe-frontend.vercel.app/home",
    githubUrl: "https://github.com/AliChakri/E-Commerce-FitVibe-Backend",
    images: [
      ecom_home,
      ecom_page,
      ecom_cart,
      ecom_anal,
    ],
    status: "Completed",
    duration: "2 months",
    team: "Solo",
    awards: [],
},
{
    id: 3,
    title: "Modern SaaS Landing Page",
    description: "A React.js project to show Design skills.",
    longDescription: "A desktop project built with Java Swing and MySQL. Features include book borrowing/returning, member registration, and reports generation.",
    category: "web",
    technologies: ["React.js", "Gsap"],
    liveUrl: "https://neural-ai-modern-saa-s-landing-page.vercel.app/",
    githubUrl: "https://github.com/AliChakri/Neural_AI---Modern-SaaS-Landing-Page",
    images: [
      neural_home,
      neural_2,
      neural_3
    ],
    status: "Completed",
    duration: "2 week",
    team: "Solo project",
    awards: [],
},
];

export const categories = [
    { id: 'all', label: 'All Missions', icon: Rocket },
    { id: 'web', label: 'Web Apps', icon: Globe },
    { id: 'mobile', label: 'Mobile', icon: Satellite },
    { id: 'simulation', label: 'Simulations', icon: Target },
    { id: 'visualization', label: 'Data Viz', icon: Zap }
];

export const images = [
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",

]

// TECH STACK SECTION DATA
export const techStack = {
  frontend: {
    title: "Frontend",
    icon: Globe,
    color: "from-blue-500 to-cyan-500",
    technologies: [
      {
        name: "HTML5",
        icon: "🌐",
        level: 95,
        description: "Semantic markup and modern web standards",
        color: "from-orange-500 to-red-500",
        image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
      },
      {
        name: "CSS3",
        icon: "🎨",
        level: 92,
        description: "Advanced styling, animations, and responsive design",
        color: "from-blue-500 to-indigo-500",
        image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
      },
      {
        name: "Tailwind CSS",
        icon: "💨",
        level: 90,
        description: "Utility-first CSS framework for rapid development",
        color: "from-teal-500 to-cyan-500",
        image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg",
      },
      {
        name: "JavaScript",
        icon: "⚡",
        level: 88,
        description: "Modern ES6+ features and asynchronous programming",
        color: "from-yellow-500 to-amber-500",
        image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
      },
      {
        name: "React.js",
        icon: "⚛️",
        level: 85,
        description: "Component-based UI development with hooks",
        color: "from-blue-400 to-cyan-400",
        image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      },
    ],
  },
  backend: {
    title: "Backend",
    icon: Server,
    color: "from-green-500 to-emerald-500",
    technologies: [
      {
        name: "Node.js",
        icon: "🟢",
        level: 82,
        description: "Server-side JavaScript runtime environment",
        color: "from-green-500 to-lime-500",
        image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
      },
      {
        name: "Express.js",
        icon: "🚀",
        level: 80,
        description: "Minimal web application framework",
        color: "from-gray-600 to-gray-800",
        image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
      },
      {
        name: "Python",
        icon: "🐍",
        level: 75,
        description: "Object-oriented programming and enterprise solutions",
        color: "from-red-600 to-orange-600",
        image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
      },
      // {
      //   name: "Fast Api",
      //   icon: "🐍",
      //   level: 75,
      //   description: "Object-oriented programming and enterprise solutions",
      //   color: "from-red-600 to-orange-600",
      //   image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg",
      // },
    ],
  },
  database: {
    title: "Databases",
    icon: Database,
    color: "from-purple-500 to-pink-500",
    technologies: [
      {
        name: "MongoDB",
        icon: "🍃",
        level: 78,
        description: "NoSQL database for flexible storage",
        color: "from-green-600 to-green-700",
        image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
      },
    ],
  },
  tools: {
    title: "Tools",
    icon: Settings,
    color: "from-orange-500 to-red-500",
    technologies: [
      {
        name: "Git",
        icon: "🔀",
        level: 85,
        description: "Version control and collaboration",
        color: "from-orange-500 to-red-500",
        image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
      },
      {
        name: "VS Code",
        icon: "💻",
        level: 92,
        description: "Development environment",
        color: "from-blue-500 to-blue-600",
        image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
      },
      {
        name: "Postman",
        icon: "📡",
        level: 80,
        description: "API testing & development",
        color: "from-orange-400 to-orange-500",
        image: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg",
      },
      {
        name: "Figma",
        icon: "🎨",
        level: 75,
        description: "UI/UX design & prototyping",
        color: "from-purple-500 to-pink-500",
        image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
      },
      // {
      //   name: "Docker",
      //   icon: "🐳",
      //   level: 70,
      //   description: "Containerization & deployment",
      //   color: "from-blue-400 to-blue-500",
      //   image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
      // },
    ],
  },
};

// REVEIWS SECTION DATA
export const reviews = [
  {
    name: "Emily Carter",
    role: "Founder, Nova Design Co.",
    feedback:
      "Ali did an incredible job redesigning our website. Clean code, pixel-perfect layout, and a sharp eye for design. Highly recommended!",
    image:
      "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&q=80&w=400",
  },
  {
    name: "Michael Johnson",
    role: "CEO, TechOrbit",
    feedback:
      "Fast delivery and top-notch quality. Ali understood exactly what our brand needed and executed it flawlessly.",
    image:
      "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?auto=format&fit=crop&q=80&w=400",
  },
  {
    name: "Sofia Ramirez",
    role: "Project Manager, Stellar Studios",
    feedback:
      "Collaborating with Ali was smooth and productive. His attention to detail and communication made the process effortless.",
    image:
      "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&q=80&w=400",
  },
];

