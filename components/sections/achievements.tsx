"use client";

import { motion } from "framer-motion";
import { Trophy } from "lucide-react";
import { achievements } from "@/lib/data";
import { SectionHeading } from "@/components/section-heading";
import { Card, CardContent } from "@/components/ui/card";

export function Achievements() {
  return (
    <section id="achievements" className="py-24 md:py-32">
      <div className="container">
        <SectionHeading number="07 · Achievements" title="Milestones" />

        <div className="grid md:grid-cols-3 gap-5">
          {achievements.map((a, i) => (
            <motion.div
              key={a.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Card className="h-full">
                <CardContent className="p-6">
                  <div className="h-10 w-10 rounded-xl bg-gold/10 border border-gold/25 flex items-center justify-center mb-4">
                    <Trophy className="text-gold" size={18} />
                  </div>
                  <h3 className="font-serif text-lg font-semibold mb-2">{a.title}</h3>
                  <p className="text-sm text-muted leading-relaxed">{a.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
