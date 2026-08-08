"use client";

import AboutHeader from "./AboutHeader";
import AboutContent from "./AboutContent";
import AboutCards from "./AboutCards";

import { about } from "@/data/about";

export default function About() {
  return (
    <section
      id="about"
      className="
        relative
        py-32
      "
    >
      <div className="mx-auto max-w-7xl px-6">
        <AboutHeader
          title={about.heading}
          subtitle="Who I Am"
        />

        <div className="grid gap-20 lg:grid-cols-2">
          <AboutContent
            title={about.title}
            description={about.description}
            highlights={about.highlights}
          />

          <AboutCards cards={about.cards} />
        </div>
      </div>
    </section>
  );
}