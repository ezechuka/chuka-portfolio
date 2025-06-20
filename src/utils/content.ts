import darkSaasLandingPage from "@/assets/images/dark-saas-landing-page.png";
import memojiAvatar1 from "@/assets/images/memoji-avatar-1.png";
import memojiAvatar2 from "@/assets/images/memoji-avatar-2.png";
import memojiAvatar3 from "@/assets/images/memoji-avatar-3.png";
import memojiAvatar4 from "@/assets/images/memoji-avatar-4.png";
import ReactIcon from "@/assets/icons/react.svg";

export const portfolioContent = {
  heroContent: {
    heroTitle: "Building Exceptional User Experiences",
    heroSubtitle:
      "Specializing in building performant, production-ready web apps from design to deployment. Ready to collaborate on your next project.",
  },
  projectsContent: {
    eyebrow: "real-world results",
    projectTitle: "featured projects",
    projectSubtitle:
      "See how I transformed concepts into engaging digital experiences.",
    projects: [
      {
        company: "Acme Corp",
        year: "2022",
        title: "Dark Saas Landing Page",
        results: [
          { title: "Enhanced user experience by 40%" },
          { title: "Improved site speed by 50%" },
          { title: "Increased mobile traffic by 35%" },
        ],
        link: "https://youtu.be/4k7IdSLxh6w",
        image: darkSaasLandingPage,
      },
      {
        company: "Innovative Co",
        year: "2021",
        title: "Light Saas Landing Page",
        results: [
          { title: "Boosted sales by 20%" },
          { title: "Expanded customer reach by 35%" },
          { title: "Increased brand awareness by 15%" },
        ],
        link: "https://youtu.be/7hi5zwO75yc",
        image: darkSaasLandingPage,
      },
      {
        company: "Quantum Dynamics",
        year: "2023",
        title: "AI Startup Landing Page",
        results: [
          { title: "Enhanced user experience by 40%" },
          { title: "Improved site speed by 50%" },
          { title: "Increased mobile traffic by 35%" },
        ],
        link: "https://youtu.be/Z7I5uSRHMHg",
        image: darkSaasLandingPage,
      },
    ],
  },
  testimonialContent: [
    {
      name: "Stanley Akpama",
      position: "Senior Developer @ TechStartups",
      text: "Alex was instrumental in transforming our website into a powerful marketing tool. His attention to detail and ability to understand our brand is exceptional. We're thrilled with the results!",
      avatar: memojiAvatar1,
    },
    {
      name: "Joshua Akpama",
      position: "Fullstack Developer @ TechStartups",
      text: "Alex was instrumental in transforming our website into a powerful marketing tool. His attention to detail and ability to understand our brand is exceptional. We're thrilled with the results!",
      avatar: memojiAvatar2,
    },
    {
      name: "Frank Ediku",
      position: "Mobile Developer @ TechStartups",
      text: "Alex was instrumental in transforming our website into a powerful marketing tool. His attention to detail and ability to understand our brand is exceptional. We're thrilled with the results!",
      avatar: memojiAvatar3,
    },
    {
      name: "John Edem",
      position: "Product Manager @ Katangwa",
      text: "Alex was instrumental in transforming our website into a powerful marketing tool. His attention to detail and ability to understand our brand is exceptional. We're thrilled with the results!",
      avatar: memojiAvatar4,
    },
  ],
  aboutContent: {
    toolboxItems: [
      { title: "React", iconType: ReactIcon },
      { title: "JavaScript", iconType: ReactIcon },
      { title: "JavaScript", iconType: ReactIcon },
      { title: "JavaScript", iconType: ReactIcon },
      { title: "JavaScript", iconType: ReactIcon },
      { title: "JavaScript", iconType: ReactIcon },
      { title: "JavaScript", iconType: ReactIcon },
    ],
  },
  hobbyContent: {
    hobbies: [
      {
        title: "Gaming",
        emoji: "🎮",
        left: "5%",
        top: "5%",
      },
      {
        title: "Movies",
        emoji: "📽️",
        left: "50%",
        top: "5%",
      },
      {
        title: "Hiking",
        emoji: "🥾",
        left: "25%",
        top: "40%",
      },
      {
        title: "Music",
        emoji: "🎵",
        left: "65%",
        top: "45%",
      },
      {
        title: "Fitness",
        emoji: "🏋🏾",
        left: "5%",
        top: "65%",
      },
      {
        title: "Reading",
        emoji: "📚",
        left: "45%",
        top: "70%",
      },
    ],
  },
};
