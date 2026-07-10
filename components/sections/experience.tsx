"use client";

import { motion } from "framer-motion";
import { experience } from "@/lib/data";
import { SectionHeading } from "@/components/section-heading";

export function Experience() {
  return (
    <section id="experience" className="py-24 md:py-32 bg-surface/40">
      <div className="container">
        <SectionHeading
          number="04 · Experience"
          title="Where I've Worked"
        />

        <div className="relative pl-8 md:pl-10">
          <div className="absolute left-[7px] top-2 bottom-2 w-px bg-gradient-to-b from-gold/60 via-gold/20 to-transparent" />

          <div className="space-y-12">
            {experience.map((exp, i) => (
              <motion.div
                key={exp.org}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative"
              >
                <span className="absolute -left-8 md:-left-10 top-1.5 h-3.5 w-3.5 rounded-full bg-gold-gradient shadow-[0_0_12px_rgba(212,175,100,0.6)]" />
                <span className="text-xs font-mono text-gold">{exp.period}</span>
                <h3 className="font-serif text-xl font-semibold mt-1">{exp.role}</h3>
                <p className="text-sm text-muted mb-3">{exp.org}</p>
                <ul className="space-y-1.5">
                  {exp.points.map((point, idx) => (
                    <li key={idx} className="text-sm text-muted leading-relaxed flex gap-2">
                      <span className="text-gold">—</span>
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
