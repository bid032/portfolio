"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { PortableText } from "@portabletext/react";
import { urlFor } from "@/sanity/image";
import SectionWrapper from "./SectionWrapper";

interface AboutData {
  bio: any[];
  skillsText: string;
  profileImage: any;
}

const fallbackAbout: AboutData = {
  bio: [],
  skillsText:
    "Branding, Typography, Layout Design, Color Theory, Digital Illustration, Print Design, Motion Graphics, UI/UX Design",
  profileImage: null,
};

export default function About({ data }: { data: AboutData | null }) {
  const about = data || fallbackAbout;

  const profileUrl = about.profileImage
    ? urlFor(about.profileImage).width(600).height(750).format("webp").url()
    : null;

  return (
    <SectionWrapper id="about">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-surface border border-border">
            {profileUrl ? (
              <Image
                src={profileUrl}
                alt="Abdallah Ahmed — Graphic Designer"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            ) : (
              <div className="w-full h-full bg-surface-hover flex items-center justify-center">
                <div className="text-center">
                  <span className="text-6xl font-bold text-primary/20">B</span>
                  <p className="text-text-muted text-sm mt-2">Profile Photo</p>
                </div>
              </div>
            )}
          </div>
          {/* Decorative border */}
          <div className="absolute -bottom-4 -right-4 w-full h-full rounded-2xl border-2 border-primary/20 -z-10" />
        </motion.div>

        {/* Text */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-secondary mb-2">
            About
          </h2>
          <div className="w-16 h-[3px] bg-primary mb-8" />

          {about.bio && about.bio.length > 0 ? (
            <div className="prose prose-invert prose-p:text-text-secondary prose-p:leading-relaxed max-w-none mb-8">
              <PortableText value={about.bio} />
            </div>
          ) : (
            <p className="text-text-secondary leading-relaxed mb-8">
              I&apos;m a Professional Creative Designer with over 4 years of experience in advertising and print design, helping brands stand
out through strategic and visually compelling solutions. By combining creative thinking with a strong marketing mindset,
I deliver designs that communicate clearly, capture attention, and create lasting impact. I’ve collaborated with brands
across various industries, including food & beverage (F&B), healthcare, and technology, giving me valuable experience
working with diverse markets and audiences.
My skills includes social media designs, Typo & Calligraphy, Photo Manipulation, Visualization, printing designs,
Presentation, and brand identity development. I’m highly focused on quality, precision, color theory, and execution,
ensuring every project reflects professionalism and adds real value to the brand.
            </p>
          )}

          {about.skillsText && (
            <div>
              <h3 className="text-sm font-semibold text-primary uppercase tracking-widest mb-4">
                Core Skills
              </h3>
              <div className="flex flex-wrap gap-2">
                {about.skillsText.split(",").map((skill, i) => (
                  <span
                    key={i}
                    className="px-3 py-1.5 text-xs bg-surface border border-border rounded-full text-text-secondary hover:border-primary hover:text-primary transition-colors duration-300"
                  >
                    {skill.trim()}
                  </span>
                ))}
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
