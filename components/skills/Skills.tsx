"use client";

import SkillsHeader from "./SkillsHeader";
import SkillCategory from "./SkillCategory";

import { skillCategories } from "@/data/skills";

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-32"
    >
      <div className="mx-auto max-w-7xl px-6">
        <SkillsHeader />

        <div className="grid gap-10 lg:grid-cols-2">
          {skillCategories.map((category) => (
            <SkillCategory
              key={category.title}
              category={category}
            />
          ))}
        </div>
      </div>
    </section>
  );
}