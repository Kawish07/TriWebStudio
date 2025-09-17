// Placeholder for portfolio projects
type Project = {
  title: string;
  description: string;
  image: string;
  tech: string[];
  category: string;
  github?: string;
  demo?: string;
};

export const projects: Project[] = [
  {
    title: "Smart Dining Hub",
    description: "A smart restaurant management and ordering platform.",
  image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=600&q=80", // Restaurant
    tech: ["Mern Stack", "Next.js"],
    category: "Full-Stack",
  github: "https://github.com/Kawish07/smart-dining-hub",
  demo: "https://smart-dining-hub.vercel.app",
  },
  {
    title: "Pro Radiant Cleaners Website",
    description: "Professional cleaning service website with online booking.",
  image: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=600&q=80", // Cleaning
    tech: ["React.js", "EmailJS"],
    category: "Front-End",
  github: "https://github.com/infosproradiantcleaners-bit/Pro-Radiant-Cleaners",
  demo: "https://pro-radiant-cleaners.vercel.app",
  },
  {
    title: "Iqra University Website",
    description: "University website with modern design and student portal.",
  image: "https://static.wixstatic.com/media/030a37_5b03e496fed24c02bed4503c66a09c28~mv2.jpg/v1/fill/w_1476,h_502,al_c,q_85,enc_avif,quality_auto/Main-Banner%20.jpg", // University
    tech: ["React", "Tailwind CSS"],
    category: "Front-End",
  github: "https://github.com/Kawish07/iqra-university",
  demo: "https://iqra-university-1.vercel.app/",
  },
  {
    title: "PK News Website",
    description: "A news portal for Pakistan with live updates and admin panel.",
  image: "https://plus.unsplash.com/premium_photo-1707080369554-359143c6aa0b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8bmV3c3xlbnwwfHwwfHx8MA%3D%3D", // News
    tech: ["Mern Stack"],
    category: "Full-Stack",
  github: "https://github.com/Kawish07/news-client",
  demo: "https://news-client-bice.vercel.app",
  },
  {
    title: "Portfolio Website",
    description: "Personal portfolio website for a developer.",
  image: "/images/portfolio-c6th.vercel.app_.png", // Portfolio
    tech: ["Reactjs", "EmailJS"],
    category: "Front-End",
  github: "https://github.com/Kawish07/portfolio",
  demo: "https://portfolio-c6th.vercel.app/",
  },
];
