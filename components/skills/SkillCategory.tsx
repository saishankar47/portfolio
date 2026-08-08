"use client";

import SkillCard from "./SkillCard";
import { SkillCategory as Category } from "@/data/skills";

interface Props {
  category: Category;
}

export default function SkillCategory({
  category,
}: Props) {
  return (
    <div>
      <h3 className="mb-6 text-2xl font-bold">
        {category.title}
      </h3>

      <div className="space-y-4">
        {category.skills.map((skill) => (
          <SkillCard
            key={skill.name}
            skill={skill}
          />
        ))}
      </div>
    </div>
  );
}