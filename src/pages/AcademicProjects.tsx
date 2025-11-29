import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, Cpu, Zap, BarChart3 } from "lucide-react";
import { Link } from "react-router-dom";
import { GlassCard } from "@/components/ui/glass-card";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const academicProjects = [
  {
    id: 1,
    title: "Arduino Nano Design with Altium Designer",
    year: "2024",
    description: "Comprehensive circuit analysis and design using advanced PCB design tools, Altium Designer.",
    longDescription: "Designed and developed a complete Arduino Nano PCB using Altium Designer, including schematic design, PCB layout, and component selection. Applied advanced circuit analysis techniques and optimization strategies to achieve optimal performance.",
    technologies: ["Altium Designer", "Multisim", "Circuit Analysis"],
    icon: Cpu,
    status: "completed",
    image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=800&h=500&fit=crop",
    achievements: [
      "Optimized filter response by 40%",
      "Comprehensive frequency analysis",
      "Professional documentation"
    ]
  },
  {
    id: 2,
    title: "Basic Microcontroller Programming",
    year: "2024",
    description: "Arduino-based microcontroller programming project featuring real-time display control and multiplexing techniques.",
    longDescription: "Developed Arduino-based embedded systems with real-time display control capabilities. Implemented efficient multiplexing techniques for managing multiple displays and sensors while maintaining optimal performance and clean code architecture.",
    technologies: ["Arduino", "C++", "Electronics"],
    icon: Zap,
    status: "completed",
    image: "https://images.unsplash.com/photo-1553406830-ef2513450d76?w=800&h=500&fit=crop",
    achievements: [
      "Real-time data control",
      "Efficient multiplexing",
      "Clean code architecture"
    ]
  },
  {
    id: 3,
    title: "Prototype UAV Navigation System",
    year: "2025 - Ongoing",
    description: "Developing autonomous navigation features for drone systems with advanced sensor integration and flight control algorithms.",
    longDescription: "Currently developing an autonomous UAV navigation system with advanced sensor integration including GPS, IMU, and obstacle detection sensors. Implementing sophisticated flight control algorithms for stable autonomous flight and waypoint navigation.",
    technologies: ["Arduino", "Sensors", "Navigation", "C++"],
    icon: Zap,
    status: "ongoing",
    image: "https://images.unsplash.com/photo-1473968512647-3e447244af8f?w=800&h=500&fit=crop",
    achievements: [
      "Autonomous navigation features",
      "Advanced sensor integration",
      "Real-time flight control"
    ]
  },
  {
    id: 4,
    title: "Automation with AI Agents",
    year: "2025 - Ongoing",
    description: "Working with AI Agents and advanced automation applications like n8n.",
    longDescription: "Exploring the integration of AI agents with automation platforms to create intelligent workflows. Developing systems that can analyze data, make decisions, and execute complex automation sequences using n8n and other modern automation tools.",
    technologies: ["Automation", "AI Agent", "Data Analysis"],
    icon: BarChart3,
    status: "ongoing",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=500&fit=crop",
    achievements: [
      "Data analysis with automation",
      "Automation with n8n",
      "Optimization strategies"
    ]
  }
];

const AcademicProjects = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <Link to="/works" className="inline-flex items-center gap-2 text-foreground-muted hover:text-primary transition-colors mb-6">
              <ArrowLeft className="w-5 h-5" />
              Back to Works
            </Link>
            <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">
              Academic <span className="bg-gradient-primary bg-clip-text text-transparent">Projects</span>
            </h1>
            <p className="text-foreground-muted text-lg max-w-3xl">
              Engineering and technical projects developed during academic studies
            </p>
          </motion.div>

          {/* Projects Grid */}
          <div className="grid gap-8">
            {academicProjects.map((project, index) => {
              const Icon = project.icon;
              return (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <GlassCard className="overflow-hidden">
                    <div className="grid md:grid-cols-5 gap-6">
                      {/* Project Image */}
                      <div className="md:col-span-2">
                        <div className="aspect-video w-full overflow-hidden rounded-lg bg-muted">
                          <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>

                      {/* Project Details */}
                      <div className="md:col-span-3 p-6">
                        <div className="flex items-start gap-3 mb-4">
                          <div className="p-2 rounded-lg bg-primary/10">
                            <Icon className="w-5 h-5 text-primary" />
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center gap-3 mb-2">
                              <h3 className="font-heading text-2xl font-bold text-foreground">
                                {project.title}
                              </h3>
                              <Badge variant={project.status === "completed" ? "secondary" : "default"}>
                                {project.status}
                              </Badge>
                            </div>
                            <p className="text-sm text-foreground-muted mb-4">{project.year}</p>
                          </div>
                        </div>

                        <p className="text-foreground-muted mb-4 leading-relaxed">
                          {project.longDescription}
                        </p>

                        {/* Technologies */}
                        <div className="mb-4">
                          <h4 className="text-sm font-semibold text-foreground mb-2">Technologies</h4>
                          <div className="flex flex-wrap gap-2">
                            {project.technologies.map((tech) => (
                              <Badge key={tech} variant="outline">
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        </div>

                        {/* Achievements */}
                        <div>
                          <h4 className="text-sm font-semibold text-foreground mb-2">Key Achievements</h4>
                          <ul className="space-y-1">
                            {project.achievements.map((achievement, idx) => (
                              <li key={idx} className="text-sm text-foreground-muted flex items-center gap-2">
                                <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                                {achievement}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </GlassCard>
                </motion.div>
              );
            })}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default AcademicProjects;
