"use client";

import ContactHeader from "./ContactHeader";
import ContactInfo from "./ContactInfo";
import ContactForm from "./ContactForm";
import SocialButtons from "./SocialButtons";

export default function Contact() {
  return (
    <section
      id="contact"
      className="
        relative
        overflow-hidden
        py-32
      "
    >
      {/* Background Glow */}

      <div
        className="
          absolute
          inset-0
          -z-10
          bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.10),transparent_45%)]
        "
      />

      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}

        <ContactHeader />

        {/* Main Content */}

        <div className="grid gap-16 lg:grid-cols-2 lg:items-start">
          {/* Left Side */}

          <div className="space-y-10">
            <ContactInfo />

            <SocialButtons />
          </div>

          {/* Right Side */}

          <ContactForm />
        </div>
      </div>
    </section>
  );
}