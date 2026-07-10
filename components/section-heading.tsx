"use client";

import { motion } from "framer-motion";

export function SectionHeading({
  number,
  title,
  subtitle,
}: {
  number: string;
  title: string;
  subtitle?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="mb-14"
    >
      <div className="flex items-center gap-3 mb-3">
        <span className="section-heading-number text-sm">{number}</span>
        <div className="h-px flex-1 max-w-[60px] bg-gradient-to-r from-gold/60 to-transparent" />
      </div>
      <h2 className="font-serif text-3xl md:text-4xl font-semibold text-foreground">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 text-muted max-w-xl leading-relaxed">{subtitle}</p>
      )}
    </motion.div>
  );
}
