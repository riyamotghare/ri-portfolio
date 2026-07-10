"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { profile } from "@/lib/data";
import { Button } from "@/components/ui/button";

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12 },
  },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" as const } },
};

export function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center bg-grid-glow overflow-hidden pt-24 pb-16"
    >
      {/* decorative grid lines */}
      <div className="absolute inset-0 -z-10 opacity-[0.06] [background-image:linear-gradient(#D4AF64_1px,transparent_1px),linear-gradient(90deg,#D4AF64_1px,transparent_1px)] [background-size:64px_64px]" />

      <div className="container grid md:grid-cols-[1.2fr_0.8fr] gap-12 items-center">
        <motion.div variants={container} initial="hidden" animate="show">
          <motion.div variants={item} className="mb-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-gold/25 bg-gold/5 px-4 py-1.5 text-xs font-mono text-gold-light">
              <span className="h-1.5 w-1.5 rounded-full bg-gold animate-pulse" />
              {profile.availability}
            </span>
          </motion.div>

          <motion.h1
            variants={item}
            className="font-serif text-4xl sm:text-5xl md:text-6xl font-semibold leading-[1.1]"
          >
            Hi, I&apos;m{" "}
            <span className="text-gradient-gold">{profile.name}</span>
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-4 text-lg md:text-xl text-muted font-medium"
          >
            {profile.role}
          </motion.p>

          <motion.p
            variants={item}
            className="mt-6 max-w-xl text-muted leading-relaxed"
          >
            {profile.tagline}
          </motion.p>

          <motion.div variants={item} className="mt-10 flex flex-wrap items-center gap-4">
            <Button asChild size="lg">
              <a href="#projects">View Projects</a>
            </Button>
            <Button asChild variant="outline" size="lg">
              <a href="#contact">Get in Touch</a>
            </Button>
          </motion.div>

          <motion.div variants={item} className="mt-10 flex items-center gap-5">
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-muted hover:text-gold transition-colors"
            >
              <Github size={20} />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-muted hover:text-gold transition-colors"
            >
              <Linkedin size={20} />
            </a>
            <a
              href={`mailto:${profile.email}`}
              aria-label="Email"
              className="text-muted hover:text-gold transition-colors"
            >
              <Mail size={20} />
            </a>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="relative mx-auto md:mx-0"
        >
          <div className="absolute -inset-4 rounded-full bg-gold/10 blur-3xl animate-float" />
          <div className="relative h-64 w-64 sm:h-80 sm:w-80 rounded-2xl overflow-hidden border border-gold/25 shadow-[0_0_60px_rgba(212,175,100,0.15)]">
            <Image
              src={profile.avatar}
              alt={profile.name}
              fill
              priority
              sizes="(max-width: 768px) 256px, 320px"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy/60 via-transparent to-transparent" />
          </div>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted hover:text-gold transition-colors"
        aria-label="Scroll to About"
      >
        <ArrowDown className="animate-bounce" size={20} />
      </motion.a>
    </section>
  );
}
