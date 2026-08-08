"use client";

import ExperienceHeader from "./ExperienceHeader";
import Timeline from "./Timeline";

export default function Experience() {
  return (
    <section
      id="experience"
      className="py-32"
    >
      <div className="mx-auto max-w-7xl px-6">
        <ExperienceHeader />
        <Timeline />
      </div>
    </section>
  );
}