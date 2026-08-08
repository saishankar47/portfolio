"use client";

import { motion } from "framer-motion";

interface Card {
  title: string;
  value: string;
  subtitle: string;
}

interface Props {
  cards: Card[];
}

export default function AboutCards({
  cards,
}: Props) {
  return (
    <div className="grid grid-cols-2 gap-5">
      {cards.map((card, index) => (
        <motion.div
          key={card.title}
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            delay: index * 0.1,
          }}
          className="
            rounded-2xl
            border
            border-white/10
            bg-background/70
            p-6
            backdrop-blur-xl
            shadow-xl
          "
        >
          <p className="text-3xl font-bold text-blue-400">
            {card.value}
          </p>

          <h3 className="mt-2 font-semibold">
            {card.title}
          </h3>

          <p className="text-sm text-muted-foreground">
            {card.subtitle}
          </p>
        </motion.div>
      ))}
    </div>
  );
}