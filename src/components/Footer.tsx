import React from "react";
import { motion } from "framer-motion";
import { Heart, Code, Zap } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-card-border bg-background-secondary/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center space-y-6"
        >
          {/* Logo */}
          <div className="font-heading text-2xl font-bold bg-gradient-primary bg-clip-text text-transparent">
            Sheikh Azwad Abrar
          </div>

          {/* Tagline */}
          <p className="text-foreground-muted max-w-md mx-auto">
            Merging engineering precision with creative innovation to build 
            solutions that matter.
          </p>

          {/* Built with love */}
          <div className="flex items-center justify-center gap-2 text-foreground-muted text-sm">
            <span>Built with</span>
            <Heart size={16} className="text-red-500 fill-current" />
            <span>using</span>
            <Code size={16} className="text-primary" />
            <span>and</span>
            <Zap size={16} className="text-accent" />
          </div>

          {/* Copyright */}
          <div className="pt-6 border-t border-card-border">
            <p className="text-foreground-muted text-base font-mono">
              © {currentYear} Sheikh Azwad Abrar. All rights reserved.
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;