import React, { useState, useEffect } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { Download, ArrowDown, Zap } from "lucide-react";
import { GradientButton } from "@/components/ui/gradient-button";
import profileImage from "@/assets/profile-azwad-768.webp";
const HeroSection = () => {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0
  });
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 2,
        y: (e.clientY / window.innerHeight - 0.5) * 2
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);
  return <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      {/* Animated background elements with 3D parallax */}
      <motion.div animate={{
      rotate: [0, 360],
      scale: [1, 1.1, 1]
    }} transition={{
      duration: 20,
      repeat: Infinity,
      ease: "linear"
    }} style={{
      x: mousePosition.x * 30,
      y: mousePosition.y * 30
    }} className="absolute top-20 right-20 w-32 h-32 border border-primary/20 rounded-full" />
      <motion.div animate={{
      rotate: [360, 0],
      scale: [1, 0.9, 1]
    }} transition={{
      duration: 15,
      repeat: Infinity,
      ease: "linear"
    }} style={{
      x: mousePosition.x * -20,
      y: mousePosition.y * -20
    }} className="absolute bottom-20 left-20 w-24 h-24 border border-secondary/20 rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div initial={{
          opacity: 0,
          x: -50
        }} animate={{
          opacity: 1,
          x: 0
        }} transition={{
          duration: 0.8
        }} style={{
          x: mousePosition.x * 15,
          y: mousePosition.y * 15
        }} className="space-y-8">
            <motion.div initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            delay: 0.2
          }} className="inline-flex items-center gap-2 px-4 py-2 bg-muted rounded-full font-mono text-sm text-foreground-muted mx-[18px] my-[15px]">
              <Zap size={16} className="text-accent" />
              Available for opportunities
            </motion.div>

            <div className="space-y-4">
              <motion.h1 initial={{
              opacity: 0,
              y: 20
            }} animate={{
              opacity: 1,
              y: 0
            }} transition={{
              delay: 0.4
            }} className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  Sheikh Azwad Abrar
                </span>
              </motion.h1>

              <motion.div initial={{
              opacity: 0,
              y: 20
            }} animate={{
              opacity: 1,
              y: 0
            }} transition={{
              delay: 0.6
            }} className="space-y-2">
              <h2 className="text-lg md:text-xl font-medium text-foreground">
                Aspiring Avionics Engineer &
              </h2>
                <h2 className="text-2xl md:text-3xl font-bold bg-gradient-secondary bg-clip-text text-transparent">Jr. Product Designer</h2>
              </motion.div>

              <motion.p initial={{
              opacity: 0,
              y: 20
            }} animate={{
              opacity: 1,
              y: 0
            }} transition={{
              delay: 0.8
            }} className="text-lg text-foreground-muted max-w-xl leading-relaxed">
                Merging engineering precision with creative innovation to build 
                impactful solutions that bridge technology and human experience.
              </motion.p>
            </div>

            <motion.div initial={{
            opacity: 0,
            y: 20
          }} animate={{
            opacity: 1,
            y: 0
          }} transition={{
            delay: 1
          }} className="flex flex-col sm:flex-row gap-4">
              
            </motion.div>
          </motion.div>

          {/* Profile Image */}
          <motion.div initial={{
          opacity: 0,
          x: 50,
          scale: 0.8
        }} animate={{
          opacity: 1,
          x: 0,
          scale: 1
        }} transition={{
          duration: 0.8,
          delay: 0.4
        }} style={{
          x: mousePosition.x * -20,
          y: mousePosition.y * -20,
          rotateY: mousePosition.x * 5,
          rotateX: mousePosition.y * -5
        }} className="relative flex justify-center lg:justify-end">
            <div className="relative" style={{
            perspective: "1000px"
          }}>
              <motion.div animate={{
              boxShadow: ["0 0 40px rgba(59, 130, 246, 0.3)", "0 0 60px rgba(168, 85, 247, 0.4)", "0 0 40px rgba(59, 130, 246, 0.3)"]
            }} transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }} style={{
              rotateY: mousePosition.x * 10,
              rotateX: mousePosition.y * -10,
              transformStyle: "preserve-3d"
            }} className="relative w-80 h-80 lg:w-96 lg:h-96 rounded-3xl overflow-hidden border-2 border-primary/30">
                <img src={profileImage} alt="Sheikh Azwad Abrar - Aspiring Avionics Engineer & UI/UX Designer" className="w-full h-full object-cover" fetchPriority="high" loading="eager" />
                <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent" />
              </motion.div>

              {/* Floating elements around image */}
              <motion.div animate={{
              y: [-10, 10, -10]
            }} transition={{
              duration: 3,
              repeat: Infinity
            }} style={{
              x: mousePosition.x * 25,
              y: mousePosition.y * 25
            }} className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center shadow-glow">
                <Zap size={24} className="text-white" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div initial={{
      opacity: 0
    }} animate={{
      opacity: 1
    }} transition={{
      delay: 1.5
    }} className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        
      </motion.div>
    </section>;
};
export default HeroSection;