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
    title: "Automated Answer Sheet Assessment System",
    desc: "An AI-powered platform that automates the evaluation of handwritten student papers using advanced OCR and smart grading models. It ensures accurate recognition, fair assessments, and rubric-based grading with minimal manual effort.",
    subdesc:
      "Developed with React.js, Node.js, Express.js, MongoDB Atlas, Firebase Auth, and Python Flask, the system integrates cutting-edge AI models like Gemini, GPT-4o-mini, LLaMA 3.2, and H2O VL-Mississippi. It delivers customizable grading, detailed performance reports, and a secure, user-friendly web experience tailored for educators.",
    href: "https://github.com/khubaib11/AUTOMATED-ANSWER-SHEET-ASSESSMENT-SYSTEM",
    texture: "/textures/project/project01.mp4",
    logo: "/assets/sheet_logo.png",
    logoStyle: {
  backgroundColor: "#FFFFFF",
  border: "0.2px solid #F9FAFB", 
  boxShadow: "0px 0px 60px 0px #FFFFFF80", // White glow
},

    spotlight: "/assets/spotlight1.png",
    tags: [
      { id: 1, name: "React.js", path: "/assets/react.svg" },
      { id: 2, name: "TailwindCSS", path: "assets/tailwindcss.png" },
      { id: 3, name: "NodeJs", path: "/assets/nodejs.svg" },
      { id: 4, name: "H2O VL-Mississippi", path: "/assets/h2o.svg" },
      { id: 5, name: "Python Flask", path: "/assets/flask.svg" },
    ],
  },

  {
    title: "Quick FicX AI",
    desc: "An AI-driven Android application designed to enhance writing, communication, and creativity through intelligent tools. It streamlines tasks like grammar correction, smart replies, resume evaluation, and storytelling in one seamless experience.",
    subdesc:
      "Built with Jetpack Compose, Kotlin, and Shared Preferences, the app integrates GitHub-hosted GPT-4.1 and Gemini models for real-time processing. It delivers professional grammar checks, engaging social posts, AI-generated stories, and personalized resume insights, all within a modern, intuitive, and user-friendly mobile interface.",

    href: "https://github.com/khubaib11/quickfixai",
    texture: "/textures/project/project2.mp4",
    logo: "/assets/quickfix.jpeg",
    logoStyle: {
      backgroundColor: "#13202F",
      border: "0.2px solid #17293E",
      boxShadow: "0px 0px 60px 0px #2F6DB54D",
    },
    spotlight: "/assets/spotlight2.png",
    tags: [
      {
        id: 1,
        name: "Kotlin",
        path: "/assets/kotlin.svg",
      },
      {
        id: 2,
        name: "Jetpack Compose",
        path: "/assets/jetpack-compose.svg", // Use the official Jetpack Compose logo if you can
      },
      {
        id: 3,
        name: "Android",
        path: "/assets/android.svg",
      },
      {
        id: 3,
        name: "OpenAI",
        path: "/assets/openai.svg",
      }
    ]
  },
  {
    title: "CarePulse - Health Management System",
    desc: "An innovative healthcare platform designed to streamline essential medical processes. It simplifies patient registration, appointment scheduling, and medical record management, providing a seamless experience for both healthcare providers and patients.",
    subdesc:
      "With a focus on efficiency, CarePulse integrantes complex forms and SMS notifications, by using Next.js, Appwrite, Twillio and Sentry that enhance operational workflows.",
    href: "https://www.youtube.com/watch?v=lEflo_sc82g",
    texture: "/textures/project/project3.mp4",
    logo: "/assets/project-logo3.png",
    logoStyle: {
      backgroundColor: "#60f5a1",
      background:
        "linear-gradient(0deg, #60F5A150, #60F5A150), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)",
      border: "0.2px solid rgba(208, 213, 221, 1)",
      boxShadow: "0px 0px 60px 0px rgba(35, 131, 96, 0.3)",
    },
    spotlight: "/assets/spotlight3.png",
    tags: [
      {
        id: 1,
        name: "React.js",
        path: "/assets/react.svg",
      },
      {
        id: 2,
        name: "TailwindCSS",
        path: "assets/tailwindcss.png",
      },
      {
        id: 3,
        name: "TypeScript",
        path: "/assets/typescript.png",
      },
      {
        id: 4,
        name: "Framer Motion",
        path: "/assets/framer.png",
      },
    ],
  },
  {
    title: "Horizon - Online Banking Platform",
    desc: "Horizon is a comprehensive online banking platform that offers users a centralized finance management dashboard. It allows users to connect multiple bank accounts, monitor real-time transactions, and seamlessly transfer money to other users.",
    subdesc:
      "Built with Next.js 14 Appwrite, Dwolla and Plaid, Horizon ensures a smooth and secure banking experience, tailored to meet the needs of modern consumers.",
    href: "https://www.youtube.com/watch?v=PuOVqP_cjkE",
    texture: "/textures/project/project4.mp4",
    logo: "/assets/project-logo4.png",
    logoStyle: {
      backgroundColor: "#0E1F38",
      border: "0.2px solid #0E2D58",
      boxShadow: "0px 0px 60px 0px #2F67B64D",
    },
    spotlight: "/assets/spotlight4.png",
    tags: [
      {
        id: 1,
        name: "React.js",
        path: "/assets/react.svg",
      },
      {
        id: 2,
        name: "TailwindCSS",
        path: "assets/tailwindcss.png",
      },
      {
        id: 3,
        name: "TypeScript",
        path: "/assets/typescript.png",
      },
      {
        id: 4,
        name: "Framer Motion",
        path: "/assets/framer.png",
      },
    ],
  },
  {
    title: "Imaginify - AI Photo Manipulation App",
    desc: "Imaginify is a groundbreaking Software-as-a-Service application that empowers users to create stunning photo manipulations using AI technology. With features like AI-driven image editing, a payments system, and a credits-based model.",
    subdesc:
      "Built with Next.js 14, Cloudinary AI, Clerk, and Stripe, Imaginify combines cutting-edge technology with a user-centric approach. It can be turned into a side income or even a full-fledged business.",
    href: "https://www.youtube.com/watch?v=Ahwoks_dawU",
    texture: "/textures/project/project5.mp4",
    logo: "/assets/project-logo5.png",
    logoStyle: {
      backgroundColor: "#1C1A43",
      border: "0.2px solid #252262",
      boxShadow: "0px 0px 60px 0px #635BFF4D",
    },
    spotlight: "/assets/spotlight5.png",
    tags: [
      {
        id: 1,
        name: "React.js",
        path: "/assets/react.svg",
      },
      {
        id: 2,
        name: "TailwindCSS",
        path: "assets/tailwindcss.png",
      },
      {
        id: 3,
        name: "TypeScript",
        path: "/assets/typescript.png",
      },
      {
        id: 4,
        name: "Framer Motion",
        path: "/assets/framer.png",
      },
    ],
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
    icon: "/assets/freelancer.svg",
    animation: "victory",
  },
  {
    id: 2,
    name: "Scale AI",
    pos: "Prompt Engineer & AI Code Evaluator",
    duration: "Dec 2023 – Mar 2024",
    title:
      "Evaluated fine-tuned large language model (LLM) outputs, reviewing code responses for accuracy and functionality. Designed effective prompts, documented improvement strategies, and collaborated on projects involving code generation, text classification, and summarization to ensure high-quality, client-aligned results.",
    icon: "/assets/scale logo.png",
    animation: "clapping",
  },

  {
    id: 3,
    name: "Hello World Technologies",
    pos: "Automation & Web Scraping Developer",
    duration: "June 2023 - Aug 2023",
    title:
      "Developed automation scripts to streamline repetitive tasks and improve workflow efficiency. Built web scraping solutions using Puppeteer and Node.js to extract and collect data from various sources. Automated data processing and management workflows, enhancing both accuracy and speed. Gained hands-on experience in JavaScript-based automation for handling and organizing large datasets.",
    icon: "/assets/helloWorldIcon.png",
    animation: "salute",
  },
];
