"use client";

import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Download,
  CheckCircle2,
} from "lucide-react";

import ContactCard from "./ContactCard";
import { contact } from "@/data/contact";

export default function ContactInfo() {
  return (
    <motion.div
      initial={{
        opacity: 0,
        x: -40,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
      }}
      viewport={{
        once: true,
      }}
      transition={{
        duration: 0.6,
      }}
      className="space-y-8"
    >
      {/* Heading */}

      <div>
        <h3 className="text-3xl font-bold">
          Get In Touch
        </h3>

        <p className="mt-4 leading-8 text-muted-foreground">
          Whether you have a software engineering opportunity,
          a freelance project, or simply want to connect, feel
          free to reach out. I'm always happy to discuss new
          ideas and exciting technologies.
        </p>
      </div>

      {/* Contact Cards */}

      <div className="space-y-5">
        <ContactCard
          icon={<Mail size={24} />}
          title="Email"
          value={contact.email}
          href={`mailto:${contact.email}`}
        />

        <ContactCard
          icon={<Phone size={24} />}
          title="Phone"
          value={contact.phone}
          href={`tel:${contact.phone}`}
        />

        <ContactCard
          icon={<MapPin size={24} />}
          title="Location"
          value={contact.location}
        />

        <ContactCard
          icon={<Download size={24} />}
          title="Resume"
          value="Download Resume"
          href={contact.resume}
        />
      </div>

      {/* Availability Card */}

      <motion.div
        whileHover={{
          y: -4,
        }}
        className="
          rounded-2xl
          border
          border-green-500/20
          bg-green-500/5
          p-6
          backdrop-blur-xl
        "
      >
        <div className="flex items-center gap-3">
          <CheckCircle2
            size={22}
            className="text-green-500"
          />

          <div>
            <h4 className="font-semibold">
              {contact.availability}
            </h4>

            <p className="mt-1 text-sm text-muted-foreground">
              Available for Full-Time, Contract, and Freelance
              opportunities.
            </p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}