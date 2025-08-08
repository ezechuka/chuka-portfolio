import rayAngPage from "@/assets/images/ray-ang.png";
import aiSeoLandingPage from "@/assets/images/ai-seo-landing-page.png";
import spherealAiLandingPage from "@/assets/images/sphereal-ai-landing-page.png";
import layersLandingPage from "@/assets/images/layers-landing-page.png";
import memojiAvatar1 from "@/assets/images/memoji-avatar-1.png";
import memojiAvatar2 from "@/assets/images/memoji-avatar-2.png";
import memojiAvatar3 from "@/assets/images/memoji-avatar-3.png";
import memojiAvatar4 from "@/assets/images/memoji-avatar-4.png";
import ReactIcon from "@/assets/icons/react.svg";
import NextIcon from "@/assets/icons/next.svg";
import GithubIcon from "@/assets/icons/github.svg";
import TypeScriptIcon from "@/assets/icons/typescript.svg";
import TailwindCSSIcon from "@/assets/icons/tailwindcss.svg";
import DockerIcon from "@/assets/icons/docker.svg";
import GithubActionIcon from "@/assets/icons/actions.svg";
import MotionIcon from "@/assets/icons/framer-motion.svg";

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
        company: "RAY-ANG",
        year: "2024",
        title: "Multivendor eCommerce Platform",
        results: [
          { title: "Integrated Paystack with secure, PCI-compliant flows" },
          {
            title:
              "Implemented role-based access control (RBAC) for vendors/admins",
          },
          {
            title:
              "Deployed via Docker/CI/CD pipeline for zero-downtime updates",
          },
        ],
        link: "https://185.177.116.151/staging",
        image: rayAngPage,
      },
      {
        company: "sphereal AI",
        year: "2025",
        title: "AI Startup Landing Page",
        results: [
          { title: "Page loads in 1.2s (92 Lighthouse performance score)" },
          {
            title:
              "Achieved 95+ SEO score on Lighthouse due to SSR and semantic HTML",
          },
          {
            title:
              "Fully responsive with mobile-first layout and dynamic animations on scroll",
          },
        ],
        link: "https://sphereal-ai-landing-page.vercel.app/",
        image: spherealAiLandingPage,
      },
      {
        company: "landing page",
        year: "2025",
        title: "AI Seo Landing Page",
        results: [
          { title: "Page loads in 1.1s (95 Lighthouse performance score)" },
          {
            title:
              "Used Framer Motion for page transitions and component reveals, reducing layout shift",
          },
          {
            title:
              "Fully responsive with mobile-first layout and dynamic animations on scroll",
          },
        ],
        link: "https://ai-seo-landing-page-nine.vercel.app/",
        image: aiSeoLandingPage,
      },
      {
        company: "layers",
        year: "2025",
        title: "UI/UX collaborative landing page",
        results: [
          { title: "Page loads in 1.4s (89 Lighthouse performance score)" },
          {
            title:
              "Fully responsive with mobile-first layout and dynamic animations on scroll",
          },
          {
            title:
              "mplemented scroll-based animations with Framer Motion to enhance storytelling and user engagement",
          },
        ],
        link: "https://layers-saas-landing-page-alpha.vercel.app/",
        image: layersLandingPage,
      },
    ],
  },
  testimonialContent: [
    {
      name: "Stanley Akpama",
      position: "Senior Developer @ Bayzat",
      text: "The landing page Chukwuka built for our AI tool not only looked amazing but actually performed. We saw a 22% increase in signups within the first week. He really understands how design, performance, and conversion work together.",
      avatar: memojiAvatar1,
    },
    {
      name: "Joshua Osemwinge",
      position: "Fullstack Developer",
      text: "What sets Chukwuka apart is his ability to balance creativity with technical precision. From SSR in Next.js to smooth Framer Motion animations, everything was built to scale and easy to maintain. He\'s the kind of dev you want long-term.",
      avatar: memojiAvatar2,
    },
    {
      name: "Frank Ediku",
      position: "Mobile Developer @ Etsy",
      text: "We hired Chukwuka to build the frontend for our multi-vendor eCommerce platform, and he exceeded expectations. The site was lightning-fast, beautifully responsive, and technically solid. He also added a custom dashboard that made managing vendors super easy.",
      avatar: memojiAvatar3,
    },
    {
      name: "John Edem",
      position: "Product Manager @ Katangwa",
      text: "Working with Chuka was a game-changer. He delivered a high-converting landing page that aligned perfectly with our brand and goals. The animations were subtle yet impactful, and the performance was flawless",
      avatar: memojiAvatar4,
    },
  ],
  aboutContent: {
    toolboxItems: [
      { title: "React", iconType: ReactIcon },
      { title: "Nextjs", iconType: NextIcon },
      { title: "TypeScript", iconType: TypeScriptIcon },
      { title: "Framer motion", iconType: MotionIcon },
      { title: "Github", iconType: GithubIcon },
      { title: "Github Actions", iconType: GithubActionIcon },
      { title: "TailwindCSS", iconType: TailwindCSSIcon },
      { title: "Docker", iconType: DockerIcon },
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
  footerContent: {
    footerLinks: [
      {
        title: "LinkedIn",
        href: "https://linkedin.com/in/iameze/",
      },
    ],
  },
};
