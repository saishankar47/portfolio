export interface ExperienceItem {
  id: number;
  company: string;
  position: string;
  duration: string;
  location: string;
  type: string;
  technologies: string[];
  responsibilities: string[];
}

export const experiences: ExperienceItem[] = [
  {
    id: 1,
    company: "Ernst & Young (EY)",
    position: "Core Engineer",
    duration: "July 2025 - Present",
    location: "Charlotte, NC",
    type: "Full-Time",
    technologies: [
      "Java",
      "Spring Boot",
      "React",
      "VUE",
      "Javascript",
      "SCSS",
      "HTML",
      "AEM"
    ],
    responsibilities: [
      "Develop enterprise-scale microservices.",
      "Build REST APIs using Spring Boot.",
      "Develop React front-end features.",
      "Deploy applications on AWS.",
      "Improve application performance and scalability.",
    ],
  },
  {
    id: 2,
    company: "US Bank",
    position: "Software Engineer",
    duration: "February 2024 - July 2025",
    location: "USA",
    type: "Full-Time",
    technologies: [
      "Java",
      "Spring Boot",
      "HTML",
      "SCSS",
      "JavaScript",

    ],
    responsibilities: [
        "Developed and maintained enterprise banking applications using Java and Spring Boot.",
        "Implemented RESTful APIs and integrated with front-end applications.",
        "Collaborated with cross-functional teams to design and implement new features.",
        "Optimized application performance and resolved technical issues.",
    ],
  },
];