"use client";

import { motion } from "framer-motion";

const socialLinks = [
  { label: "Behance", href: "https://www.behance.net/bid032/projects" },
  { label: "Instagram", href: "https://www.instagram.com/bid032/" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/bid032/" },
];

export default function Footer() {
  return (
    <footer className="border-t border-border bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <span className="text-xl font-bold text-secondary">
              Abdallah Ahmed<span className="text-primary">.</span>
            </span>
          </motion.div>

          {/* Social Links */}
          <div className="flex gap-6">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-text-secondary hover:text-primary transition-colors duration-300"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Copyright */}
          <p className="text-xs text-text-muted">
            © {new Date().getFullYear()} Abdallah Ahmed. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
