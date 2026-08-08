"use client";

import { experiences } from "@/data/experience";
import TimelineItem from "./TimelineItem";

export default function Timeline() {
  return (
    <div className="mx-auto max-w-5xl space-y-16">
      {experiences.map((experience) => (
        <TimelineItem
          key={experience.id}
          experience={experience}
        />
      ))}
    </div>
  );
}