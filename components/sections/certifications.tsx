"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FileText, ExternalLink } from "lucide-react";
import { certifications } from "@/lib/data";
import { SectionHeading } from "@/components/section-heading";
import { Card, CardContent } from "@/components/ui/card";

export function Certifications() {
  return (
    <section id="certifications" className="py-24 md:py-32 bg-surface/40">
      <div className="container">
        <SectionHeading number="06 · Certifications" title="Courses & Workshops" />

        <div className="grid sm:grid-cols-2 gap-6">
          {certifications.map((cert, i) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Card className="overflow-hidden h-full flex flex-col">
                {cert.image ? (
                  <div className="relative aspect-[4/3] w-full bg-navy-light">
                    <Image
                      src={cert.image}
                      alt={cert.title}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                ) : (
                  <div className="relative aspect-[4/3] w-full bg-navy-light flex items-center justify-center">
                    <FileText className="text-gold/60" size={48} />
                  </div>
                )}
                <CardContent className="flex-1 flex flex-col justify-between p-5">
                  <div>
                    <h3 className="font-serif text-base font-semibold leading-snug">
                      {cert.title}
                    </h3>
                    <p className="text-sm text-muted mt-1">
                      {cert.issuer} · {cert.date}
                    </p>
                  </div>
                  {(cert.file || cert.verifyUrl) && (
                    <a
                      href={cert.file ?? cert.verifyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm text-gold hover:text-gold-light transition-colors mt-4"
                    >
                      {cert.file ? "View Certificate" : "Verify Certificate"} <ExternalLink size={14} />
                    </a>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
