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
    company: "Current Company",
    position: "Software Engineer",
    duration: "2024 - Present",
    location: "Charlotte, NC",
    type: "Full-Time",
    technologies: [
      "Java",
      "Spring Boot",
      "React",
      "AWS",
      "Kafka",
      "PostgreSQL",
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
    company: "University",
    position: "Graduate Research Assistant",
    duration: "2022 - 2023",
    location: "USA",
    type: "Graduate Assistant",
    technologies: [
      "Python",
      "Machine Learning",
      "SQL",
    ],
    responsibilities: [
      "Conducted research projects.",
      "Analyzed datasets.",
      "Presented research findings.",
    ],
  },
];