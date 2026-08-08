export const siteConfig = {
  // Basic Information
  name: "Saishankar Vanam",

  firstName: "Saishankar",

  lastName: "Vanam",

  title: "Software Engineer",

  headline:
    "Software Engineer | Java | Spring Boot | React | AWS | Microservices",

  description:
    "Software Engineer specializing in Java, Spring Boot, React, AWS, Microservices, and cloud-native enterprise applications.",

  longDescription:
    "Passionate Software Engineer with experience designing and developing scalable enterprise applications using Java, Spring Boot, React, Next.js, AWS, Docker, Kubernetes, Kafka, and cloud-native technologies.",

  // Website
  url: "https://your-domain.vercel.app",

  author: "Saishankar Vanam",

  locale: "en_US",

  language: "en",

  // Contact
  email: "your.email@gmail.com",

  phone: "+1 (704) 555-1234",

  location: "Charlotte, North Carolina, USA",

  availability: "Open to Opportunities",

  // Assets
  profileImage: "/profile.jpg",

  ogImage: "/opengraph-image",

  twitterImage: "/twitter-image",

  resume: "/resume.pdf",

  favicon: "/favicon.ico",

  // Social Links
  github: "https://github.com/yourusername",

  linkedin: "https://linkedin.com/in/yourusername",

  leetcode: "https://leetcode.com/yourusername",

  medium: "https://medium.com/@yourusername",

  x: "https://x.com/yourusername",

  // Skills
  skills: [
    "Java",
    "Spring Boot",
    "Spring Security",
    "Spring Cloud",
    "React",
    "Next.js",
    "TypeScript",
    "JavaScript",
    "AWS",
    "Docker",
    "Kubernetes",
    "Kafka",
    "Redis",
    "PostgreSQL",
    "MySQL",
    "REST API",
    "GraphQL",
    "Git",
    "GitHub",
    "CI/CD",
    "Tailwind CSS",
    "Framer Motion",
  ],

  // SEO
  keywords: [
    "Software Engineer",
    "Java Developer",
    "Spring Boot",
    "React Developer",
    "Next.js",
    "TypeScript",
    "AWS",
    "Microservices",
    "Cloud Engineer",
    "Portfolio",
    "Full Stack Developer",
  ],

  // Navigation
  navigation: [
    {
      label: "Home",
      href: "#home",
    },
    {
      label: "About",
      href: "#about",
    },
    {
      label: "Skills",
      href: "#skills",
    },
    {
      label: "Experience",
      href: "#experience",
    },
    {
      label: "Projects",
      href: "#projects",
    },
    {
      label: "Contact",
      href: "#contact",
    },
  ],
} as const;

export type SiteConfig = typeof siteConfig;