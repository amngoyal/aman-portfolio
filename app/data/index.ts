import { Briefcase, Code, PenTool, Layout, Terminal, Mail } from "lucide-react";
import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";

export const navLinks = [
  { id: "about", title: "About" },
  { id: "experience", title: "Experience" },
  { id: "skills", title: "Skills" },
  { id: "projects", title: "Projects" },
  { id: "testimonials", title: "Testimonials" },
  { id: "beyond-code", title: "Beyond Code" },
  { id: "writing", title: "Writing" },
];

export const services = [
  {
    title: "Frontend Architecture",
    icon: Layout,
    description:
      "Architecting scalable, component-driven applications that gracefully handle complex state and millions of users without sacrificing developer experience.",
  },
  {
    title: "Performance & SEO",
    icon: Terminal,
    description:
      "Deeply optimizing Core Web Vitals, server-side rendering, and bundle sizes to ensure lightning-fast load times and maximum search engine discoverability.",
  },
  {
    title: "Team Leadership",
    icon: Briefcase,
    description:
      "Mentoring engineers, driving technical design reviews, and orchestrating smooth agile workflows to ship enterprise-grade products on time.",
  },
];

export const skillGroups = [
  {
    title: "Frontend",
    description: "Modern UI engineering and client-side architecture",
    skills: [
      "React",
      "Next.js",
      "HTML",
      "CSS",
      "TypeScript",
      "JavaScript",
      "Redux",
      "Tailwind",
      "GraphQL",
      "Storybook",
    ],
  },
  {
    title: "Backend",
    description: "Data, APIs, and CMS-driven delivery",
    skills: ["Node.js", "Express", "MongoDB", "Strapi"],
  },
  {
    title: "Tools",
    description: "Shipping, collaboration, and AI workflows",
    skills: [
      "Git",
      "GitHub Copilot",
      "Cursor",
      "Vercel",
      "OpenAI Codex",
      "Claude",
    ],
  },
];

export const experiences = [
  {
    title: "Senior JavaScript Engineer",
    company_name: "Qed42",
    date: "April 2024 - Present",
    clients: [
      {
        name: "Client - Kotak Neo",
        chips: ["Next.js", "Strapi", "TailwindCSS", "SEO", "Core Web Vitals"],
        points: [
          "Leading an 8-member frontend team across sprint planning, technical design reviews, task allocation, and production releases.",
          "Directed the frontend migration from kotaksecurities.com to kotakneo.com, ensuring a zero-disruption domain transition.",
          "Led the migration from Next.js 12 to 15 with zero downtime, reducing technical debt.",
          "Overseeing a platform generating 674K+ clicks and 194M+ impressions in Google Search Console.",
        ],
      },
    ],
  },
  {
    title: "JavaScript Engineer - Next.js",
    company_name: "Qed42",
    date: "January 2022 - March 2024",
    clients: [
      {
        name: "Client - Kotak Neo",
        chips: ["Next.js", "Strapi", "MUI", "SEO"],
        points: [
          "Improved Core Web Vitals from the 20-30 range to 60-70 by resolving complex performance bottlenecks.",
          "Built SEO-optimized pre-login pages that improved product discoverability.",
          "Architected a reusable component library, cutting development time.",
        ],
      },
    ],
  },
  {
    title: "Frontend Engineer",
    company_name: "Squareboat",
    date: "July 2021 - January 2022",
    clients: [
      {
        name: "Client - Humanity Health",
        chips: ["React", "Redux"],
        points: [
          "Developed a feature-rich dashboard for the US-based client Humanity Health using React and Redux.",
          "Delivered accessible, cross-device usability aligned with accessibility standards.",
        ],
      },
      {
        name: "Client - Star Health Insurance",
        chips: ["React", "Strapi"],
        points: [
          "Managed content updates for Star Health Insurance's website via Strapi CMS.",
        ],
      },
    ],
  },
  {
    title: "Trainee Software Developer",
    company_name: "Rapid Innovation",
    date: "January 2021 - May 2021",
    clients: [
      {
        name: "",
        chips: ["Solidity", "Web3.js", "Blockchain"],
        points: [
          "Developed and deployed Solidity smart contracts, integrating them into React apps.",
        ],
      },
    ],
  },
  {
    title: "Freelance Web Developer",
    company_name: "Self-Employed",
    date: "January 2019 - December 2020",
    clients: [
      {
        name: "Various Clients",
        chips: ["React", "JavaScript", "HTML/CSS"],
        points: [
          "Built responsive, high-performance websites for various clients.",
          "Collaborated with designers to translate wireframes into interactive user interfaces.",
        ],
      },
    ],
  },
];

export const stats = [
  { value: "7+", label: "Years Experience" },
  { value: "15+", label: "Projects Worked On" },
];

export const blogPosts = [
  {
    title: "Building Smarter UI Overlays with React Portals",
    description:
      "A blog on building reliable overlays and modal experiences with React Portals.",
    tags: ["React", "Portals", "UI"],
    publishedAt: "5 April 2025",
    readTime: "6 min read",
    articleLink:
      "https://medium.com/@amngoyal/building-smarter-ui-overlays-with-react-portals-c4355892d9a5",
  },
  {
    title: "How to create a custom snackbar in Next.js 14 using Tailwind CSS",
    description:
      "A practical write-up on building a polished snackbar pattern with Next.js and Tailwind CSS.",
    tags: ["Next.js", "Tailwind", "UX"],
    publishedAt: "8 July 2024",
    readTime: "7 min read",
    articleLink:
      "https://medium.com/@amngoyal/how-to-create-a-custom-snackbar-in-next-js-14-using-tailwind-css-69b17322ad49",
  },
  {
    title: "Getting started with Strapi",
    description:
      "A short tech talk on building content-driven experiences with Strapi and practical CMS workflows.",
    tags: ["Strapi", "YouTube", "CMS"],
    publishedAt: "30 August 2021",
    readTime: "60 min watch",
    articleLink: "https://youtu.be/Jy_7e6qfAvk",
    actionLabel: "Watch Video",
  },
];

export const featuredProjects = [
  {
    title: "Kotak Neo",
    description:
      "Leading the frontend architecture and development for one of India's largest trading platforms. Spearheading the migration to Next.js 15, optimizing core web vitals, and building a scalable component system serving millions of users.",
    tags: ["Next.js", "Architecture", "Enterprise"],
    liveLink: "https://www.kotakneo.com/",
    imageUrl: "/images/kotak-neo.png",
  },
  {
    title: "LocalStream",
    description:
      "The Ultimate Local Video Player. Turn your scattered local video files into a gorgeous, premium streaming platform right in your browser. 100% free, private, and powered by the File System Access API.",
    tags: ["React", "Next.js", "FileSystem API"],
    liveLink: "https://localstream.vercel.app/",
    imageUrl: "/images/localstream.png",
  },
  {
    title: "Union Marine Management",
    description:
      "A polished web experience for a maritime services brand focused on trust, clarity, and lead generation.",
    tags: ["Website", "Brand", "UX"],
    liveLink: "https://unimarships.com/",
    imageUrl: "/images/umms.png",
  },
];

export const contactLinks = [
  { name: "Twitter", icon: FaTwitter, href: "https://x.com/amngoyal" },
  { name: "GitHub", icon: FaGithub, href: "https://github.com/amngoyal" },
  {
    name: "LinkedIn",
    icon: FaLinkedin,
    href: "https://www.linkedin.com/in/amngoyal/",
  },
  {
    name: "amangoyal1198@gmail.com",
    icon: Mail,
    href: "mailto:amangoyal1198@gmail.com",
  },
];

export const trustedClients = [
  "Kotak Securities",
  "Qed42",
  "Humanity Health",
  "Star Health",
  "Rapid Innovation",
  "UMMS",
  "Web3",
  "Finance",
];

export const testimonials = [
  {
    quote:
      "Aman evolved as a compelling professional from a simple undergraduate student in just a few months. I have known Aman for a year now, and he started his first internship with our organization. He is always keen on learning new skills, and I have been amazed by his innate capacity to acquire new skills. An extremely hard-working, sincere and humble person, Aman is truly a gem to have in the team.",
    name: "Saurav K Mitra",
    company: "Founder & CEO of Noisiv Consulting",
  },
];
