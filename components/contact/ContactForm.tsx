"use client";

import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Send } from "lucide-react";
import toast from "react-hot-toast";

const schema = z.object({
  name: z.string().min(2, "Please enter your name."),
  email: z.string().email("Please enter a valid email."),
  subject: z.string().min(3, "Subject is required."),
  message: z.string().min(10, "Message should be at least 10 characters."),
});

type FormData = z.infer<typeof schema>;

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    try {
      console.log(data);

      // EmailJS integration will be added later.

      toast.success("Message sent successfully!");

      reset();
    } catch {
      toast.error("Something went wrong.");
    }
  };

  return (
    <motion.form
      onSubmit={handleSubmit(onSubmit)}
      initial={{ opacity: 0, x: 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="
        rounded-3xl
        border
        border-white/10
        bg-background/70
        p-8
        shadow-xl
        backdrop-blur-xl
        space-y-6
      "
    >
      <div>
        <label className="mb-2 block text-sm font-medium">
          Name
        </label>

        <input
          {...register("name")}
          className="w-full rounded-xl border border-white/10 bg-transparent px-4 py-3 outline-none transition focus:border-blue-500"
          placeholder="John Doe"
        />

        {errors.name && (
          <p className="mt-2 text-sm text-red-500">
            {errors.name.message}
          </p>
        )}
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium">
          Email
        </label>

        <input
          {...register("email")}
          type="email"
          className="w-full rounded-xl border border-white/10 bg-transparent px-4 py-3 outline-none transition focus:border-blue-500"
          placeholder="john@email.com"
        />

        {errors.email && (
          <p className="mt-2 text-sm text-red-500">
            {errors.email.message}
          </p>
        )}
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium">
          Subject
        </label>

        <input
          {...register("subject")}
          className="w-full rounded-xl border border-white/10 bg-transparent px-4 py-3 outline-none transition focus:border-blue-500"
          placeholder="Software Engineer Opportunity"
        />

        {errors.subject && (
          <p className="mt-2 text-sm text-red-500">
            {errors.subject.message}
          </p>
        )}
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium">
          Message
        </label>

        <textarea
          {...register("message")}
          rows={6}
          className="w-full resize-none rounded-xl border border-white/10 bg-transparent px-4 py-3 outline-none transition focus:border-blue-500"
          placeholder="Tell me about your project..."
        />

        {errors.message && (
          <p className="mt-2 text-sm text-red-500">
            {errors.message.message}
          </p>
        )}
      </div>

      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        type="submit"
        disabled={isSubmitting}
        className="
          flex
          w-full
          items-center
          justify-center
          gap-3
          rounded-xl
          bg-gradient-to-r
          from-blue-600
          to-cyan-500
          px-6
          py-4
          font-semibold
          text-white
          transition
          hover:shadow-lg
          hover:shadow-blue-500/30
          disabled:opacity-50
        "
      >
        <Send size={18} />

        {isSubmitting ? "Sending..." : "Send Message"}
      </motion.button>
    </motion.form>
  );
}