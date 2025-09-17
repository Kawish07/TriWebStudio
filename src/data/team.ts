// Placeholder for team members
type TeamMember = {
  name: string;
  role: string;
  bio: string;
  avatar: string;
  socials: { platform: string; url: string }[];
};

export const team: TeamMember[] = [
  {
    name: "Kawish Iqbal",
    role: "Full-Stack Developer",
    bio: "Expert in scalable web apps and backend systems.",
    avatar: "/images/myimage.jpg",
    socials: [
      { platform: "LinkedIn", url: "https://www.linkedin.com/in/kawish-iqbal-222767264/" },
      { platform: "GitHub", url: "https://github.com/Kawish07" },
    ],
  },
  {
    name: "Ahassam Shafique",
    role: "UI/UX Designer",
    bio: "Passionate about clean, user-centered design.",
    avatar: "/window.svg",
    socials: [
      { platform: "LinkedIn", url: "https://www.linkedin.com/in/ahsam-abbasi1133/" },
      { platform: "GitHub", url: "https://github.com/AhassamShafique" },
    ],
  },
  {
    name: "Shafay Gilani",
    role: "SEO Specialist",
    bio: "Drives organic growth and search visibility.",
    avatar: "/file.svg",
    socials: [
      { platform: "LinkedIn", url: "#" },
      { platform: "Twitter", url: "#" },
    ],
  },
];
