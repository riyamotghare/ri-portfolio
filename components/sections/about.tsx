"use client";

import { motion } from "framer-motion";
import { about } from "@/lib/data";
import { SectionHeading } from "@/components/section-heading";

export function About() {
  return (
    <section id="about" className="py-24 md:py-32">
      <div className="container">
        <SectionHeading number="01 · About" title={about.heading} />

        <div className="grid md:grid-cols-[1.4fr_1fr] gap-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="space-y-5"
          >
            {about.paragraphs.map((p, i) => (
              <p key={i} className="text-muted leading-relaxed text-[15px] md:text-base">
                {p}
              </p>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="grid grid-cols-2 gap-4"
          >
            {about.highlights.map((h) => (
              <div
                key={h.label}
                className="card-glass rounded-xl p-5 flex flex-col gap-1"
              >
                <span className="text-xs font-mono text-gold uppercase tracking-wider">
                  {h.label}
                </span>
                <span className="text-sm text-foreground font-medium">{h.value}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
