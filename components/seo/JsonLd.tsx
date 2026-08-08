export default function JsonLd() {
  const person = {
    "@context": "https://schema.org",
    "@type": "Person",

    name: "Saishankar Vanam",

    url: "https://your-domain.vercel.app",

    image: "https://your-domain.vercel.app/profile.jpg",

    jobTitle: "Software Engineer",

    description:
      "Software Engineer specializing in Java, Spring Boot, React, AWS, Microservices, and cloud-native enterprise applications.",

    email: "mailto:your.email@gmail.com",

    nationality: "Indian",

    worksFor: {
      "@type": "Organization",
      name: "Your Company",
    },

    alumniOf: {
      "@type": "CollegeOrUniversity",
      name: "Your University",
    },

    knowsAbout: [
      "Java",
      "Spring Boot",
      "Spring Security",
      "Spring Cloud",
      "Microservices",
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "Node.js",
      "REST API",
      "GraphQL",
      "Kafka",
      "PostgreSQL",
      "MySQL",
      "Redis",
      "Docker",
      "Kubernetes",
      "AWS",
      "CI/CD",
      "Git",
      "GitHub",
      "Tailwind CSS",
      "Framer Motion",
    ],

    sameAs: [
      "https://github.com/saishankar47",
      "https://linkedin.com/in/saishankarv",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(person),
      }}
    />
  );
}