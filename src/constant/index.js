export const navLinks = [
  {
    id: 1,
    name: "Home",
    href: "#home",
  },
  {
    id: 2,
    name: "About",
    href: "#about",
  },
  {
    id: 3,
    name: "Work",
    href: "#work",
  },
  {
    id: 4,
    name: "Contact",
    href: "#contact",
  },
];

export const clientReviews = [
  {
    id: 1,
    name: "Emily Johnson",
    position: "Marketing Director at GreenLeaf",
    img: "assets/review1.png",
    review:
      "Working with Adrian was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.",
  },
  {
    id: 2,
    name: "Mark Rogers",
    position: "Founder of TechGear Shop",
    img: "assets/review2.png",
    review:
      "Adrian’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional! Fantastic work.",
  },
  {
    id: 3,
    name: "John Dohsas",
    position: "Project Manager at UrbanTech ",
    img: "assets/review3.png",
    review:
      "I can’t say enough good things about Adrian. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.",
  },
  {
    id: 4,
    name: "Ether Smith",
    position: "CEO of BrightStar Enterprises",
    img: "assets/review4.png",
    review:
      "Adrian was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend backend dev are top-notch.",
  },
];

export const myProjects = [
  {
    title: "Social Flow Automation",
    desc: "A smart platform to plan, generate, and publish social content faster. Create high-quality captions, titles, and hashtags, then post images/videos to LinkedIn, Facebook, Instagram, and Twitter/X in one click.",
    subdesc:
  "Built with React.js and TailwindCSS, integrated with Gemini for AI-driven content generation, Cloudinary for media handling, and webhook-based automation using Make to streamline multi-platform workflows.",
href: "https://social-flow-automator.vercel.app/", // Project overview
    texture: "/textures/project/SM Automation.mp4",
    logo: "/assets/social_flow_logo.svg",
    gitURL: "https://github.com/khubaib11/SocialFlow-Automator",
    logoStyle: {
      backgroundColor: "#FFFFFF",
      border: "0.2px solid #F9FAFB",
      boxShadow: "0px 0px 60px 0px #FFFFFF80",
    },
    spotlight: "/assets/spotlight5.png",
    tags: [
      { id: 1, name: "React.js", path: "/assets/react.svg" },
      { id: 2, name: "Gemini", path: "/assets/gemini.png" },
      { id: 3, name: "Make (Integromat)", path: "/assets/Make-app-icon.png" },
      { id: 4, name: "Cloudinary", path: "/assets/Cloudinary.svg" },
    ],
    isMob:false,
  },
  {
    title: "Automated Answer Sheet Assessment System",
    desc: "An AI-powered platform that automates the evaluation of handwritten student papers using OCR and rubric-based grading, ensuring accuracy, fairness, and minimal manual work.",
    subdesc:
      "Built with React.js, Node.js, Express, MongoDB, and Flask, the system uses AI models like Gemini, GPT-4o-mini, LLaMA 3.2, and H2O VL-Mississippi to provide accurate grading and reports for educators.",
    gitURL:
      "https://github.com/khubaib11/AUTOMATED-ANSWER-SHEET-ASSESSMENT-SYSTEM",
    href: "",
    texture: "/textures/project/project01.mp4",
    logo: "/assets/sheet_logo.png",
    logoStyle: {
      backgroundColor: "#FFFFFF",
      border: "0.2px solid #F9FAFB",
      boxShadow: "0px 0px 60px 0px #FFFFFF80",
    },
    spotlight: "/assets/spotlight1.png",
    tags: [
      { id: 1, name: "React.js", path: "/assets/react.svg" },
      { id: 2, name: "TailwindCSS", path: "/assets/tailwindcss.png" },
      { id: 3, name: "NodeJs", path: "/assets/nodejs.svg" },
      { id: 4, name: "H2O VL-Mississippi", path: "/assets/h2o.svg" },
      { id: 5, name: "Python Flask", path: "/assets/flask.svg" },
    ],
    isMob:false,
  },

  {
    title: "Bella Vista - Restaurant",
    desc: "A modern restaurant platform that lets customers browse menus, place orders, and follow events, while empowering Bella Vista to manage operations with ease and efficiency.",
    subdesc:
      "Built with Next.js, TypeScript, Firebase, Tailwind CSS, Radix UI, and shadcn/ui, Bella Vista offers diners a smooth interface and the restaurant team reliable tools for streamlined management.",
    gitURL: "https://github.com/khubaib11/restaurants",
    href: "https://restaurants-bella-vista.vercel.app/",
    texture: "/textures/project/bella-restaurant.mp4",
    logo: "/assets/bella-vista.png",
    logoStyle: {
      backgroundColor: "#FFC107",
      background:
        "linear-gradient(0deg, #FFC10750, #FFC10750), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(255, 255, 255, 0.8) 100%)",
      border: "0.2px solid rgba(255, 255, 255, 1)",
      boxShadow: "0px 0px 60px 0px rgba(255, 193, 7, 0.3)",
    },
    spotlight: "/assets/spotlight3.png",
    tags: [
      { id: 1, name: "Next.js", path: "/assets/next.jpeg" },
      { id: 2, name: "TailwindCSS", path: "/assets/tailwindcss.png" },
      { id: 3, name: "TypeScript", path: "/assets/typescript.png" },
      { id: 4, name: "Framer Motion", path: "/assets/framer.png" },
      { id: 5, name: "Firebase", path: "/assets/firebase.png" },
    ],
    isMob:false,
  },

  {
    title: "Lunexa - AI-Powered Trading Platform",
    desc: "Lunexa is a sleek trading platform enhanced with AI, providing intuitive tools and smooth navigation for both beginners and experienced traders to execute strategies with confidence.",
    subdesc:
      "Built with Vite, React 19, TypeScript, Phosphor Icons, Framer Motion, and React Router, Lunexa balances performance, animations, and modularity, enabling easy feature growth, advanced analytics, and commercial scalability.",
    gitURL: "https://github.com/khubaib11/lunexa-AI-trading",
    href: "https://lunexa-ai-trading.vercel.app/",
    texture: "/textures/project/lunexa.mp4",
    logo: "/assets/project-logo5.png",
    logoStyle: {
      backgroundColor: "#1A0A26",
      border: "0.2px solid #6A0DAD",
      boxShadow: "0px 0px 60px 0px #8A2BE24D",
    },
    spotlight: "/assets/spotlight4.png",
    tags: [
      { id: 1, name: "React.js", path: "/assets/react.svg" },
      { id: 2, name: "TailwindCSS", path: "/assets/tailwindcss.png" },
      { id: 3, name: "TypeScript", path: "/assets/typescript.png" },
      { id: 4, name: "Framer Motion", path: "/assets/framer.png" },
    ],
    isMob:false,
  },

  {
    title: "AI Horizons - AI Blog & News Platform",
    desc: "AI Horizons is a modern platform delivering blogs, guides, and expert insights about Artificial Intelligence, helping users explore trends and stay updated in the fast-changing AI world.",
    subdesc:
      "Built with Vite, React, TypeScript, Tailwind, Radix UI, and TanStack Query, AI Horizons ensures speed, scalability, and a clean design, serving as both a learning hub and a trusted source for enthusiasts and professionals.",
    gitURL: "https://github.com/khubaib11/AI-Horizon-Blog-Web",
    href: "https://ai-horizon-blog-web.vercel.app/",
    texture: "/textures/project/ai-horizon.mp4",
    logo: "/assets/ai-blog.png",
    logoStyle: {
      backgroundColor: "#1C1A43",
      border: "0.2px solid #252262",
      boxShadow: "0px 0px 60px 0px #635BFF4D",
    },
    spotlight: "/assets/spotlight5.png",
    tags: [
      { id: 1, name: "React.js", path: "/assets/react.svg" },
      { id: 2, name: "TailwindCSS", path: "/assets/tailwindcss.png" },
      { id: 3, name: "TypeScript", path: "/assets/typescript.png" },
    ],
    isMob:false,
  },
  {
    title: "Quick FicX AI",
    desc: "An AI-driven Android application that enhances communication and creativity with tools like grammar correction, smart replies, resume feedback, and storytelling in one place.",
    subdesc:
      "Made with Jetpack Compose and Kotlin, the app uses GPT-4.1 and Gemini to deliver smart replies, AI stories, social posts, and resume feedback in a simple mobile experience.",
    href: "",
    gitURL: "https://github.com/khubaib11/quickfixai",
    texture: "/textures/project/project2.mp4",
    logo: "/assets/quickfix.jpeg",
    logoStyle: {
      backgroundColor: "#13202F",
      border: "0.2px solid #17293E",
      boxShadow: "0px 0px 60px 0px #2F6DB54D",
    },
    spotlight: "/assets/spotlight2.png",
    tags: [
      { id: 1, name: "Kotlin", path: "/assets/kotlin.svg" },
      { id: 2, name: "Jetpack Compose", path: "/assets/jetpack-compose.svg" },
      { id: 3, name: "Android", path: "/assets/android.svg" },
      { id: 4, name: "OpenAI", path: "/assets/openai.svg" },
    ],
    isMob:true,
  },
];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
  // Base positions for desktop
  const base = {
    desk: { scale: 0.12, pos: [1, -6, -1] },
    cube: [12, 10, 0],
    ring: [-9, 7.6, 0],
    react: [12, -2.5, 0],
    target: [-13, -1.5, 0],
  };

  const sizes = isSmall
    ? {
        desk: { scale: 0.08, pos: [0.5, -6, -3] },
        cube: [3.8, 4.2, -1],
        ring: [-2.4, 3.2, 0],
        react: [2.2, -4, 2],
        target: [-2.2, -5, 2],
      }
    : isMobile
    ? {
        desk: { scale: 0.08, pos: [1, -5, 0] },
        cube: [6.5, 5.8, 0],
        ring: [-4.5, 4.8, 0],
        react: [3.5, -2.5, 4],
        target: [-5.5, -4.5, 3],
      }
    : isTablet
    ? {
        desk: { scale: 0.1, pos: [1, -2, -3] },
        cube: [5.6, 9.5, 0],
        ring: [-4, 7, 0],
        react: [5, -1, 1],
        target: [-5, -2, 1],
      }
    : base;

  return {
    deskScale: sizes.desk.scale,
    deskPosition: sizes.desk.pos,
    cubePosition: sizes.cube,
    ringPosition: sizes.ring,
    reactLogoPosition: sizes.react,
    targetPosition: sizes.target,
  };
};

export const workExperiences = [
  {
    id: 1,
    name: "Freelancer",
    pos: "Self-Employed",
    duration: "2024 - Present",
    title:
      "Working as a freelancer, I develop and deploy full-stack web applications, build automation solutions, and integrate AI-powered tools to streamline workflows. I collaborate with clients across various industries to deliver efficient, scalable, and innovative digital solutions tailored to their needs.",
    shortTitle:
      "Developed full-stack apps, automation tools, and AI integrations for diverse clients.",
    icon: "/assets/freelancer.svg",
    animation: "victory",
  },
  {
    id: 2,
    name: "Sukkur IBA University",
    pos: "Full Stack Developer (Project-Based)",
    duration: "Jun 2025 - Present",
    title:
      "Collaborating with the core development team to build the official Sukkur IBA Admission Portal from scratch. I contributed to both frontend and backend development, led ERD design, and worked on system architecture in close coordination with the team.",
    shortTitle:
      "Built Sukkur IBA Admission Portal with frontend, backend, and ERD/system design.",
    icon: "/assets/Sukkur_IBA_logo.png",
    animation: "salute",
  },
  {
    id: 3,
    name: "Scale AI",
    pos: "Prompt Engineer & AI Code Evaluator",
    duration: "Dec 2023 – Mar 2024",
    title:
      "At Scale AI, I evaluated fine-tuned large language model (LLM) outputs, reviewing AI-generated code for accuracy, correctness, and efficiency. I designed prompts to optimize responses, documented improvement strategies, and contributed to projects involving code generation, text classification, and summarization.",
    shortTitle:
      "Reviewed AI code outputs, designed prompts, and optimized LLM performance.",
    icon: "/assets/scale logo.png",
    animation: "clapping",
  },  
  {
    id: 4,
    name: "Hello World Technologies",
    pos: "Automation & Web Scraping Developer",
    duration: "Jun 2023 - Aug 2023",
    title:
      "Developed automation scripts to streamline repetitive tasks and improve workflow efficiency. Built web scraping tools using Puppeteer and Node.js to extract and collect structured data from multiple sources. Automated processing pipelines to manage large datasets, improving both speed and accuracy.",
    shortTitle:
      "Built automation scripts and Puppeteer-based scrapers for efficient data workflows.",
    icon: "/assets/helloWorldIcon.png",
    animation: "salute",
  },
];

