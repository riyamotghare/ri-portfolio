"use client";

import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import { education } from "@/lib/data";
import { SectionHeading } from "@/components/section-heading";
import { Card, CardContent } from "@/components/ui/card";

export function Education() {
  return (
    <section id="education" className="py-24 md:py-32">
      <div className="container">
        <SectionHeading number="05 · Education" title="Academic Background" />

        <div className="grid gap-5">
          {education.map((edu, i) => (
            <motion.div
              key={edu.institution}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Card>
                <CardContent className="p-6 flex gap-5 items-start">
                  <div className="shrink-0 h-11 w-11 rounded-xl bg-gold/10 border border-gold/25 flex items-center justify-center">
                    <GraduationCap className="text-gold" size={20} />
                  </div>
                  <div>
                    <span className="text-xs font-mono text-gold">{edu.period}</span>
                    <h3 className="font-serif text-lg font-semibold mt-0.5">
                      {edu.degree}
                    </h3>
                    <p className="text-sm text-muted mb-2">{edu.institution}</p>
                    <p className="text-sm text-muted leading-relaxed">{edu.details}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
