import PostacatImg from "@/public/postacat.png";
import MotorfinderImg from "@/public/motorfinder.png";
import TrellocloneImg from "@/public/trelloclone.png";
import MovielandImg from "@/public/movieland.jpg";
import Learn2CookImg from "@/public/learn2cook.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const projectsData = [
  {
    title: "Postacat",
    description:
      "A Fullstack Social Media Application, similar to Instagram, uses Appwrite Auth and Backend, has Image Uploader, Zod Validation and many more!",
    tags: ["React", "Vite", "Appwrite", "Tailwind", "TypeScript"],
    imageUrl: PostacatImg,
    projectUrl: "https://postacat.vercel.app/",
  },
  {
    title: "Movieland",
    description:
      "Made with vanilla HTML, CSS and JavaScript, it's a website that fetches Movies using API calls and gives a short overview of them.",
    tags: ["HTML", "CSS", "JavaScript"],
    imageUrl: MovielandImg,
    projectUrl: "https://movieland-pearl.vercel.app/",
  },
  {
    title: "Trello Clone",
    description:
      "Basically, Trello's front board, using Appwrite Backend, uses Drag & Drop and updates whenever a task has changed its status.",
    tags: ["Next.js", "Appwrite", "Tailwind", "Drag & Drop"],
    imageUrl: TrellocloneImg,
    projectUrl: "https://trello-clone-eosin-two.vercel.app/",
  },
  {
    title: "MotorFinder",
    description:
      "Car showcase Website using RapidAPI and ImaginAPI, has Search functionality, opens a nice modal that fetches details about the respective car.",
    tags: ["Next.js", "TypeScript", "Tailwind"],
    imageUrl: MotorfinderImg,
    projectUrl: "https://motorfinder-henna.vercel.app/",
  },
  {
    title: "Learn2Cook",
    description:
      "A recipe website that fetches random meals you can prepare, has Search functionality and Local Storage that saves your desired Favorite meals.",
    tags: ["HTML", "CSS", "JavaScript"],
    imageUrl: Learn2CookImg,
    projectUrl: "https://learn2cook.vercel.app/",
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Next.js",
  "TypeScript",
  "Tailwind CSS",
  "Appwrite",
] as const;
