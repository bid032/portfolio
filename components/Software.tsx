"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { urlFor } from "@/sanity/image";
import SectionWrapper from "./SectionWrapper";

interface SoftwareItem {
  _id: string;
  name: string;
  icon: any;
  proficiency: number;
}

const fallbackSoftware: SoftwareItem[] = [
  { _id: "1", name: "Photoshop", icon: null, proficiency: 95 },
  { _id: "2", name: "Illustrator", icon: null, proficiency: 90 },
  { _id: "3", name: "InDesign", icon: null, proficiency: 85 },
  { _id: "4", name: "Figma", icon: null, proficiency: 92 },
  { _id: "5", name: "After Effects", icon: null, proficiency: 80 },
  { _id: "6", name: "Premiere Pro", icon: null, proficiency: 75 },
  { _id: "7", name: "Blender", icon: null, proficiency: 60 },
  { _id: "8", name: "Lightroom", icon: null, proficiency: 88 },
];

export default function Software({ data }: { data: SoftwareItem[] }) {
  const items = data?.length > 0 ? data : fallbackSoftware;

  return (
    <SectionWrapper id="software">
      <div className="text-center mb-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-secondary mb-4"
        >
          Tools & Software
        </motion.h2>
        <p className="text-text-secondary">My creative arsenal.</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
        {items.map((tool, index) => {
          const iconUrl = tool.icon
            ? urlFor(tool.icon).width(80).height(80).format("webp").url()
            : null;

          return (
            <motion.div
              key={tool._id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              viewport={{ once: true }}
              whileHover={{
                y: -6,
                boxShadow: "0 0 25px rgba(245,127,0,0.12)",
              }}
              className="group p-6 bg-surface border border-border rounded-xl text-center hover:border-primary/40 transition-all duration-300"
            >
              {iconUrl ? (
                <div className="w-10 h-10 mx-auto mb-4 relative">
                  <Image
                    src={iconUrl}
                    alt={tool.name}
                    fill
                    className="object-contain"
                  />
                </div>
              ) : (
                <div className="w-10 h-10 mx-auto mb-4 rounded-lg bg-primary/10 flex items-center justify-center">
                  <span className="text-primary font-bold text-sm">
                    {tool.name.charAt(0)}
                  </span>
                </div>
              )}

              <p className="text-secondary text-sm font-semibold mb-3">
                {tool.name}
              </p>

              {/* Proficiency bar */}
              {tool.proficiency && (
                <div className="w-full h-1 bg-border rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${tool.proficiency}%` }}
                    transition={{ duration: 1, delay: 0.3 + index * 0.05 }}
                    viewport={{ once: true }}
                    className="h-full bg-gradient-to-r from-primary to-primary-dark rounded-full"
                  />
                </div>
              )}
            </motion.div>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
