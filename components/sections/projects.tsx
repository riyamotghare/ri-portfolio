"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, ChevronDown, Download } from "lucide-react";
import { projects } from "@/lib/data";
import { SectionHeading } from "@/components/section-heading";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export function Projects() {
  const [expanded, setExpanded] = useState<string | null>(projects[0]?.slug ?? null);

  return (
    <section id="projects" className="py-24 md:py-32">
      <div className="container">
        <SectionHeading
          number="03 · Projects"
          title="Selected Work"
          subtitle="End-to-end machine learning and data projects — from unsupervised learning to deep learning to SQL-driven analytics."
        />

        <div className="space-y-5">
          {projects.map((project, i) => {
            const isOpen = expanded === project.slug;
            return (
              <motion.div
                key={project.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: Math.min(i * 0.05, 0.3) }}
              >
                <Card className="overflow-hidden">
                  <button
                    className="w-full text-left"
                    onClick={() => setExpanded(isOpen ? null : project.slug)}
                  >
                    <CardHeader className="flex flex-row items-start justify-between gap-4 pb-4">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <CardTitle>{project.title}</CardTitle>
                          {project.featured && (
                            <Badge className="text-[10px]">Featured</Badge>
                          )}
                        </div>
                        <CardDescription>{project.description}</CardDescription>
                      </div>
                      <ChevronDown
                        className={`shrink-0 mt-1 text-gold transition-transform duration-300 ${
                          isOpen ? "rotate-180" : ""
                        }`}
                        size={20}
                      />
                    </CardHeader>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <CardContent className="pt-0 space-y-5">
                          <div>
                            <h4 className="text-xs font-mono uppercase tracking-wider text-gold mb-2">
                              Problem
                            </h4>
                            <p className="text-sm text-muted leading-relaxed">
                              {project.problem}
                            </p>
                          </div>

                          <div>
                            <h4 className="text-xs font-mono uppercase tracking-wider text-gold mb-2">
                              Approach
                            </h4>
                            <ul className="space-y-1.5">
                              {project.approach.map((point, idx) => (
                                <li
                                  key={idx}
                                  className="text-sm text-muted leading-relaxed flex gap-2"
                                >
                                  <span className="text-gold">—</span>
                                  <span>{point}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div>
                            <h4 className="text-xs font-mono uppercase tracking-wider text-gold mb-2">
                              Outcome
                            </h4>
                            <p className="text-sm text-muted leading-relaxed">
                              {project.outcome}
                            </p>
                          </div>

                          <div className="flex flex-wrap gap-2 pt-1">
                            {project.stack.map((s) => (
                              <Badge key={s} variant="muted">
                                {s}
                              </Badge>
                            ))}
                          </div>

                          <div className="flex flex-wrap gap-5 pt-1">
                            {project.githubUrl && (
                              <a
                                href={project.githubUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 text-sm text-gold hover:text-gold-light transition-colors"
                              >
                                <Github size={16} />
                                View on GitHub
                              </a>
                            )}
                            {project.fileUrl && (
                              <a
                                href={project.fileUrl}
                                download
                                className="inline-flex items-center gap-2 text-sm text-gold hover:text-gold-light transition-colors"
                              >
                                <Download size={16} />
                                {project.fileLabel ?? "Download"}
                              </a>
                            )}
                          </div>
                        </CardContent>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
