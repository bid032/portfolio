"use client";

import { motion } from "framer-motion";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import Link from "next/link";

interface ProjectDetailProps {
  project: {
    title: string;
    category: string;
    date: string;
    description: any[];
  };
  coverUrl: string | null;
  galleryUrls: string[];
}

export default function ProjectDetailClient({
  project,
  coverUrl,
  galleryUrls,
}: ProjectDetailProps) {
  return (
    <div className="min-h-screen pt-20">
      {/* Back button */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-8">
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 text-sm text-text-secondary hover:text-primary transition-colors duration-300"
        >
          <svg
            className="w-4 h-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10 19l-7-7m0 0l7-7m-7 7h18"
            />
          </svg>
          Back to Projects
        </Link>
      </div>

      {/* Hero Image */}
      {coverUrl && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative w-full aspect-[16/9] max-w-7xl mx-auto px-6 lg:px-8"
        >
          <div className="relative w-full h-full rounded-2xl overflow-hidden">
            <Image
              src={coverUrl}
              alt={project.title}
              fill
              className="object-cover"
              priority
              sizes="100vw"
            />
          </div>
        </motion.div>
      )}

      {/* Project Info */}
      <div className="max-w-4xl mx-auto px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="flex items-center gap-4 mb-4">
            {project.category && (
              <span className="text-primary text-xs font-semibold uppercase tracking-widest">
                {project.category}
              </span>
            )}
            {project.date && (
              <span className="text-text-muted text-xs">
                {new Date(project.date).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                })}
              </span>
            )}
          </div>

          <h1 className="text-4xl md:text-6xl font-bold text-secondary mb-8">
            {project.title}
          </h1>

          {project.description && (
            <div className="prose prose-invert prose-p:text-text-secondary prose-p:leading-relaxed prose-headings:text-secondary max-w-none">
              <PortableText value={project.description} />
            </div>
          )}
        </motion.div>

        {/* Gallery */}
        {galleryUrls.length > 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-16 space-y-6"
          >
            <h2 className="text-2xl font-bold text-secondary mb-8">Gallery</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {galleryUrls.map((url: string, index: number) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative aspect-[3/2] rounded-xl overflow-hidden border border-border"
                >
                  <Image
                    src={url}
                    alt={`${project.title} — Image ${index + 1}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    loading="lazy"
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}
