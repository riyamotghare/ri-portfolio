"use client";

import { motion } from "framer-motion";
import { Mail, Linkedin, Github, Phone, ArrowUpRight } from "lucide-react";
import { profile } from "@/lib/data";
import { SectionHeading } from "@/components/section-heading";
import { Button } from "@/components/ui/button";

const links = [
  {
    label: "Email",
    value: profile.email,
    href: `mailto:${profile.email}`,
    icon: Mail,
  },
  {
    label: "Phone",
    value: profile.phone,
    href: `tel:${profile.phone.replace(/\s/g, "")}`,
    icon: Phone,
  },
  {
    label: "LinkedIn",
    value: "riya-motghare",
    href: profile.linkedin,
    icon: Linkedin,
  },
  {
    label: "GitHub",
    value: "riyamotghare",
    href: profile.github,
    icon: Github,
  },
];

export function Contact() {
  return (
    <section id="contact" className="py-24 md:py-32 bg-surface/40">
      <div className="container">
        <SectionHeading
          number="08 · Contact"
          title="Let's Connect"
          subtitle="Open to Data Science, ML/AI, and Computer Vision roles, internships, and collaborations. Reach out any time."
        />

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mb-14">
          {links.map((link, i) => (
            <motion.a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("mailto") ? undefined : "_blank"}
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="card-glass rounded-xl p-6 flex items-center justify-between group hover:-translate-y-1 transition-transform"
            >
              <div className="flex items-center gap-4">
                <div className="h-11 w-11 rounded-xl bg-gold/10 border border-gold/25 flex items-center justify-center">
                  <link.icon className="text-gold" size={18} />
                </div>
                <div>
                  <p className="text-xs font-mono text-gold uppercase tracking-wider">
                    {link.label}
                  </p>
                  <p className="text-sm text-foreground font-medium">{link.value}</p>
                </div>
              </div>
              <ArrowUpRight
                className="text-muted group-hover:text-gold transition-colors"
                size={18}
              />
            </motion.a>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <Button asChild size="lg">
            <a href={`mailto:${profile.email}`}>Say Hello</a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
