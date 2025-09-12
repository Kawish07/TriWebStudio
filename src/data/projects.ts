// Placeholder for portfolio projects
type Project = {
  title: string;
  description: string;
  image: string;
  tech: string[];
  category: string;
};

export const projects: Project[] = [
  {
    title: "Smart Dining Hub",
    description: "A smart restaurant management and ordering platform.",
  image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=600&q=80", // Restaurant
    tech: ["MERN", "Next.js"],
    category: "Full-Stack",
  },
  {
    title: "Pro Radiant Cleaners Website",
    description: "Professional cleaning service website with online booking.",
  image: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=600&q=80", // Cleaning
    tech: ["React.js", "EmailJS"],
    category: "Front-End",
  },
  {
    title: "Iqra University Website",
    description: "University website with modern design and student portal.",
  image: "https://static.wixstatic.com/media/030a37_5b03e496fed24c02bed4503c66a09c28~mv2.jpg/v1/fill/w_1476,h_502,al_c,q_85,enc_avif,quality_auto/Main-Banner%20.jpg", // University
    tech: ["React", "Tailwind CSS"],
    category: "Front-End",
  },
  {
    title: "PK News Website",
    description: "A news portal for Pakistan with live updates and admin panel.",
  image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80", // News
    tech: ["MERN"],
    category: "Full-Stack",
  },
  {
    title: "Portfolio Website",
    description: "Personal portfolio website for a developer.",
  image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80", // Portfolio
    tech: ["MERN"],
    category: "Front-End",
  },
];
