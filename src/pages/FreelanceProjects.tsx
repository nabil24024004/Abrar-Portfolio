import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, Smartphone, Palette } from "lucide-react";
import { Link } from "react-router-dom";
import { GlassCard } from "@/components/ui/glass-card";
import { Badge } from "@/components/ui/badge";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const freelanceProjects = [
  {
    id: 5,
    title: "UXcel Mobile App Redesign",
    year: "2025",
    description: "Complete UI/UX redesign of the UXcel mobile application with modern design principles and enhanced user experience.",
    longDescription: "Led a comprehensive redesign of the UXcel mobile application, focusing on modern design principles, improved user flows, and enhanced visual hierarchy. Created interactive prototypes and design systems to ensure consistency across all screens.",
    technologies: ["Figma", "UI/UX Design", "Prototyping"],
    icon: Smartphone,
    status: "completed",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=500&fit=crop",
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
    longDescription: "Developed comprehensive brand identity packages for multiple university clubs, including logo design, color palettes, typography guidelines, and brand application examples. Ensured each brand reflected the unique personality and values of the respective clubs.",
    technologies: ["Illustrator", "Photoshop", "Brand Design"],
    icon: Palette,
    status: "completed",
    image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?w=800&h=500&fit=crop",
    achievements: [
      "Complete brand package",
      "Modern visual identity",
      "Brand guidelines"
    ]
  }
];

const FreelanceProjects = () => {
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
              Freelance <span className="bg-gradient-primary bg-clip-text text-transparent">Projects</span>
            </h1>
            <p className="text-foreground-muted text-lg max-w-3xl">
              Professional design work and creative projects delivered for clients
            </p>
          </motion.div>

          {/* Projects Grid */}
          <div className="grid gap-8">
            {freelanceProjects.map((project, index) => {
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
                              <Badge variant="secondary">{project.status}</Badge>
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

export default FreelanceProjects;
