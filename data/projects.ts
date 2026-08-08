export interface ProjectMetric {
  label: string;
  value: string;
}

export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  github: string;
  demo: string;
  featured: boolean;
  technologies: string[];
  metrics: ProjectMetric[];
}

export const projects: Project[] = [
  {
    id: 1,

    title: "Enterprise Banking Platform",

    description:
      "Designed and developed a scalable enterprise banking platform using Java, Spring Boot, Kafka, PostgreSQL, React, Docker, and AWS. Implemented secure REST APIs, asynchronous event processing, cloud-native deployment, and CI/CD pipelines.",

    image: "/projects/banking.png",

    github: "https://github.com/yourusername/banking-platform",

    demo: "https://banking-demo.vercel.app",

    featured: true,

    technologies: [
      "Java",
      "Spring Boot",
      "React",
      "AWS",
      "Kafka",
      "PostgreSQL",
      "Docker",
      "Git",
      "GitHub",
    ],

    metrics: [
      {
        label: "Team",
        value: "6",
      },
      {
        label: "Duration",
        value: "10 Mo",
      },
      {
        label: "Users",
        value: "25K+",
      },
    ],
  },

  

  {
    id: 3,

    title: "Developer Portfolio",

    description:
      "Modern developer portfolio built using Next.js 15, React, Framer Motion, and Tailwind CSS featuring responsive layouts, animations, SEO optimization, dark mode, and reusable component architecture.",

    image: "/projects/portfolio.png",

    github: "https://github.com/yourusername/portfolio",

    demo: "https://portfolio.vercel.app",

    featured: false,

    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "GitHub",
    ],

    metrics: [
      {
        label: "SEO",
        value: "100",
      },
      {
        label: "Perf.",
        value: "99",
      },
      {
        label: "A11y",
        value: "100",
      },
    ],
  },
];