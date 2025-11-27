export const navLinks = [
  {
    id: 1,
    name: "Home",
    href: "#",
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

export const recommendations = [
  {
    id: 1,
    name: "Albert Tarkaa",
    position: "Software Engineer",
    img: "assets/albert.jpeg",
    review:
      "One of the qualities that makes Chiazam stand out is her grit and enthusiasm, problem-solving skills, and a collaborative mindset towards every project. I have no doubt that Chiazam will continue to make a significant impact in the tech space. Any team would be fortunate to have her! 🚀",
  },
  {
    id: 2,
    name: "Emmanuel Ochubili",
    position: "Software Developer",
    img: "assets/emmanuel.jpeg",
    review:
      "Chiazam is a results-driven professional. She consistently exceeded expectations and delivered impactful results on tasks. A true asset to any team.",
  },
  // {
  //   id: 3,
  //   name: "John Dohsas",
  //   position: "Project Manager at UrbanTech ",
  //   img: "assets/review3.png",
  //   review:
  //     "I can’t say enough good things about Adrian. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.",
  // },
  // {
  //   id: 4,
  //   name: "Ether Smith",
  //   position: "CEO of BrightStar Enterprises",
  //   img: "assets/review4.png",
  //   review:
  //     "Adrian was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend backend dev are top-notch.",
  // },
];

export const myProjects = [
  {
    title: "Musica - Music Player",
    desc: "Musica is a music player application. Built with data from the Spotify for Developers Web API, users can see their recently played songs and listen to their favourite music from their favourite artists.",
    subdesc:
      "With features like playlist creation, users can listen to and enjoy their personally curated playlists. Utilising technologies like React.js, Tailwind CSS, TypeScript and Redux, Musica is designed for optimal performance and scalability.",
    href: "https://mea-musica.netlify.app",
    texture: "/textures/project/musica.mp4",
    logo: "/assets/musica.png",
    logoStyle: {
      backgroundColor: "#7261A33D",
      border: "0.2px solid #7261A32D",
      boxShadow: "0px 0px 60px 0px #7261A32D",
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
        name: "Redux",
        path: "/assets/redux.png",
      },
    ],
  },
  {
    title: "Popina Inventor - Restaurant Finder Application",
    desc: "Popina Inventor is a restaurant locator app giving users the ability to search for and locate restaurants in their area based on their choice of cuisine or type of food.",
    subdesc:
      "Leveraging Google's Places and Geolocation APIs, Popina Inventor provides the location of various restaurants close to the user as well as directions to these restaurants. Perfect for food lovers, it is a user-friendly and easy-to-use app helping them find their favorite restaurants quickly and on-the-go.",
    href: "https://popina-inventor.netlify.app",
    texture: "/textures/project/popina-inventor.mp4",
    logo: "/assets/popina-inventor.png",
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
        name: "Next.js",
        path: "/assets/nextjs.svg",
      },
    ],
  },
  {
    title: "WhatsApp Chat App",
    desc: "WhatsApp Chat App is a simple client-side-only chat application limited to two users. Users can upload profile pictures, send and receive messages, and much more.",
    subdesc:
      "Built with React.js, Tailwind CSS, and TypeScript, it provides an aesthetic and user-friendly interface for seamless messaging. Designed with pixel-perfect precision, the WhatsApp Chat App provides users with an experience so seamless that it feels just like using the real WhatsApp Web application.",
    href: "https://whats-app-chat-app.vercel.app",
    texture: "/textures/project/whats-app.mp4",
    logo: "/assets/whats-app.svg",
    logoStyle: {
      backgroundColor: "#111B21",
      background:
        "linear-gradient(0deg, #111B2150, #111B2150), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)",
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
        name: "Redux",
        path: "/assets/redux.png",
      },
    ],
  },
  {
    title: "Real Estate Application",
    desc: "The Real Estate Application is a platform for prospective property owners to browse different beautiful property. Aesthetically pleasing, the application provides a user-friendly interface for searching, filtering, and viewing property details.",
    subdesc:
      "With features like search functionality, not only can users search for property based on filters like home type, parking, bed & bath, but also, they can see the location of the property on the map.",
    href: "https://real-estate-chiazam.vercel.app",
    texture: "/textures/project/real-estate.mp4",
    logo: "/assets/real-estate.svg",
    logoStyle: {
      backgroundColor: "#7E56F13D",
      border: "0.2px solid #7E56F13D",
      boxShadow: "0px 0px 60px 0px #7E56F13D",
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
        name: "Next.js",
        path: "/assets/nextjs.svg",
      },
    ],
  },
  // {
  //   title: "Imaginify - AI Photo Manipulation App",
  //   desc: "Imaginify is a groundbreaking Software-as-a-Service application that empowers users to create stunning photo manipulations using AI technology. With features like AI-driven image editing, a payments system, and a credits-based model.",
  //   subdesc:
  //     "Built with Next.js 14, Cloudinary AI, Clerk, and Stripe, Imaginify combines cutting-edge technology with a user-centric approach. It can be turned into a side income or even a full-fledged business.",
  //   href: "https://www.youtube.com/watch?v=Ahwoks_dawU",
  //   texture: "/textures/project/project5.mp4",
  //   logo: "/assets/project-logo5.png",
  //   logoStyle: {
  //     backgroundColor: "#1C1A43",
  //     border: "0.2px solid #252262",
  //     boxShadow: "0px 0px 60px 0px #635BFF4D",
  //   },
  //   spotlight: "/assets/spotlight5.png",
  //   tags: [
  //     {
  //       id: 1,
  //       name: "React.js",
  //       path: "/assets/react.svg",
  //     },
  //     {
  //       id: 2,
  //       name: "TailwindCSS",
  //       path: "assets/tailwindcss.png",
  //     },
  //     {
  //       id: 3,
  //       name: "TypeScript",
  //       path: "/assets/typescript.png",
  //     },
  //     {
  //       id: 4,
  //       name: "Redux",
  //       path: "/assets/redux.png",
  //     },
  //   ],
  // },
];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
  return {
    deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
    deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
    rubiksCubePosition: isSmall
      ? [4, -5, 0]
      : isMobile
      ? [5, -5, 0]
      : isTablet
      ? [5, -5, 0]
      : [9, -5.5, 0],
    reactLogoPosition: isSmall
      ? [3, 4, 0]
      : isMobile
      ? [5, 4, 0]
      : isTablet
      ? [5, 4, 0]
      : [12, 3, 0],
    ringPosition: isSmall
      ? [-5, 7, 0]
      : isMobile
      ? [-10, 10, 0]
      : isTablet
      ? [-12, 10, 0]
      : [-24, 10, 0],
    targetPosition: isSmall
      ? [-5, -10, -10]
      : isMobile
      ? [-9, -10, -10]
      : isTablet
      ? [-11, -7, -10]
      : [-18, -10, -10],
  };
};

export const workExperiences = [
  {
    id: 1,
    name: "Tenecé Professional Services",
    pos: "Frontend Developer",
    duration: "Oct 2023 - Present",
    title:
      "Translated UI/UX designs into code that rendered visually appealing elements using HTML5, CSS3, and Tailwind. Built and managed four (4) websites to clients' requirements and standards using WordPress. Managed clients’ domain names and servers, rendering support services to them for all website-related issues. Collaborated with a full software team to build user-friendly, aesthetic and seamless websites.",
    icon: "/assets/tenece.png",
    animation: "beckoning",
  },
  {
    id: 2,
    name: "Tenecé Professional Services",
    pos: "Frontend Developer Intern",
    duration: "Jan 2022 - Dec 2022",
    title:
      "Translated Figma UI/UX designs into code that rendered visually appealing elements using HTML5, CSS3, and Bootstrap. Assisted in developing and customising two (2) websites to clients' requirements and standards using WordPress. Worked with themes and plugins to enhance design and functionality of websites.",
    icon: "/assets/tenece.png",
    animation: "arm_gesture",
  },
];
