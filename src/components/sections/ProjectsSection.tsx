import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { GlassCard } from "@/components/ui/glass-card";
import { GradientButton } from "@/components/ui/gradient-button";
import { 
  ExternalLink, 
  Calendar,
  Cpu,
  Smartphone,
  Zap,
  BarChart3,
  Palette,
  ArrowUpRight
} from "lucide-react";
import behanceIcon from "@/assets/behance-icon.png";

const ProjectsSection = () => {
  const projects = [
    {
      category: "Personal/Freelance Projects",
      projects: [
        {
          id: 5,
          title: "UXcel Mobile App Redesign",
          year: "2025",
          description: "Complete UI/UX redesign of the UXcel mobile application with modern design principles and enhanced user experience.",
          technologies: ["Figma", "UI/UX Design", "Prototyping"],
          icon: Smartphone,
          status: "completed",
          featured: true,
          image: "/placeholder-uxcel.jpg",
          achievements: [
            "Modern design system",
            "Enhanced user experience",
            "Interactive prototypes"
          ]
        },
        {
          id: 6,
          title: "Logo & Brand Identity for Varsity Clubs",
          year: "2025",
          description: "Complete brand package development including logo design, color schemes, and brand guidelines for university clubs.",
          technologies: ["Illustrator", "Photoshop", "Brand Design"],
          icon: Palette,
          status: "completed",
          featured: false,
          image: "/placeholder-branding.jpg",
          achievements: [
            "Complete brand package",
            "Modern visual identity",
            "Brand guidelines"
          ]
        }
      ]
    },
    {
      category: "Academic Projects",
      projects: [
        {
          id: 1,
          title: "Arduino Nano Design with Altium Designer",
          year: "2024",
          description: "Comprehensive circuit analysis and design using advanced pcb design tools, Altium Designer. For",
          technologies: ["Altium Designer", "Multisim", "Circuit Analysis"],
          icon: Cpu,
          status: "completed",
          featured: true,
          image: "/placeholder-circuit.jpg",
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
          technologies: ["Arduino", "C++", "Electronics"],
          icon: Zap,
          status: "completed",
          featured: false,
          image: "/placeholder-arduino.jpg",
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
          technologies: ["Arduino", "Sensors", "Navigation", "C++"],
          icon: Zap,
          status: "ongoing",
          featured: false,
          image: "/placeholder-drone.jpg",
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
          description: "Working with AI Agents and anonymous automation advanced applications like n8n.",
          technologies: ["Automation", "AI Agent", "Data Analysis"],
          icon: BarChart3,
          status: "ongoing",
          featured: true,
          image: "/placeholder-hvac.jpg",
          achievements: [
            "data analysis with automation",
            "automation with n8n",
            "Optimization strategies"
          ]
        }
      ]
    }
  ];

  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="bg-gradient-primary bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-foreground-muted max-w-2xl mx-auto text-lg">
            A showcase of engineering precision and creative innovation across various domains
          </p>
        </motion.div>

        <div className="space-y-16">
          {projects.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="text-center mb-8">
                <h3 className="font-heading text-2xl md:text-3xl font-bold mb-2">
                  <span className="bg-gradient-secondary bg-clip-text text-transparent">
                    {category.category}
                  </span>
                </h3>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {category.projects.map((project, projectIndex) => (
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ 
                      duration: 0.6, 
                      delay: categoryIndex * 0.2 + projectIndex * 0.1 
                    }}
                    viewport={{ once: true }}
                  >
                    <GlassCard 
                      variant="interactive" 
                      className={`overflow-hidden group ${
                        project.featured ? 'lg:col-span-1 ring-2 ring-primary/30' : ''
                      }`}
                    >
                      {/* Project Image Placeholder */}
                      <div className="relative h-48 bg-gradient-primary/10 overflow-hidden">
                        <div className="absolute inset-0 flex items-center justify-center">
                          <project.icon size={48} className="text-primary/50" />
                        </div>
                        
                        {/* Status Badge */}
                        <div className="absolute top-4 left-4">
                          <span className={`px-3 py-1 rounded-full text-xs font-mono ${
                            project.status === 'ongoing' 
                              ? 'bg-accent text-accent-foreground' 
                              : 'bg-success text-success-foreground'
                          }`}>
                            {project.status === 'ongoing' ? 'In Progress' : 'Completed'}
                          </span>
                        </div>

                        {/* Featured Badge */}
                        {project.featured && (
                          <div className="absolute top-4 right-4">
                            <div className="bg-gradient-primary px-2 py-1 rounded-full flex items-center gap-1">
                              <Zap size={12} className="text-white" />
                              <span className="text-xs text-white font-mono">Featured</span>
                            </div>
                          </div>
                        )}

                        <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
                      </div>

                      <div className="p-6">
                        <div className="flex items-center gap-2 mb-3">
                          <Calendar size={16} className="text-foreground-muted" />
                          <span className="text-sm font-mono text-foreground-muted">
                            {project.year}
                          </span>
                        </div>

                        <h4 className="font-heading text-xl font-bold text-foreground mb-3">
                          {project.title}
                        </h4>

                        <p className="text-foreground-muted text-sm leading-relaxed mb-4">
                          {project.description}
                        </p>

                        {/* Technologies */}
                        <div className="flex flex-wrap gap-2 mb-4">
                          {project.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="text-xs font-mono bg-muted px-2 py-1 rounded-md text-foreground-muted"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>

                        {/* Achievements */}
                        <div className="mb-6">
                          <h5 className="text-sm font-semibold text-foreground mb-2">Key Achievements:</h5>
                          <ul className="space-y-1">
                            {project.achievements.map((achievement, index) => (
                              <li key={index} className="text-xs text-foreground-muted flex items-center gap-2">
                                <div className="w-1 h-1 bg-primary rounded-full" />
                                {achievement}
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex gap-3">
                          <GradientButton size="sm" variant="outline" className="flex-1">
                            <ExternalLink size={16} className="mr-2" />
                            View Details
                          </GradientButton>
                          {project.status === 'completed' && (
                            <GradientButton size="sm" variant="ghost" aria-label="View project on Behance">
                              <img src={behanceIcon} alt="Behance" className="w-6 h-6" />
                            </GradientButton>
                          )}
                        </div>
                      </div>

                      {/* Hover Effect */}
                      <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-smooth pointer-events-none" />
                    </GlassCard>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <Link to="/works">
            <GradientButton size="lg" variant="hero">
              <ArrowUpRight size={20} className="mr-2" />
              View All Projects
            </GradientButton>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
