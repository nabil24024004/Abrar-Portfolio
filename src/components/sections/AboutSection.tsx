import React from "react";
import { motion } from "framer-motion";
import { GlassCard } from "@/components/ui/glass-card";
import { Badge } from "@/components/ui/badge";
import { Code2, Server, Database, Wrench } from "lucide-react";

const AboutSection = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: Code2,
      skills: ["React", "TypeScript", "Tailwind CSS", "HTML5", "CSS3", "Framer Motion"],
    },
    {
      title: "Backend Development",
      icon: Server,
      skills: ["Node.js", "Python", "REST APIs", "GraphQL", "Express"],
    },
    {
      title: "Database",
      icon: Database,
      skills: ["PostgreSQL", "MongoDB", "Supabase", "MySQL", "Redis"],
    },
    {
      title: "Tools & Others",
      icon: Wrench,
      skills: ["Git", "Docker", "AWS", "Figma", "VS Code", "Linux"],
    },
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4">
            About <span className="bg-gradient-primary bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-foreground-muted max-w-2xl mx-auto text-lg">
            Where engineering precision meets creative innovation
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Story */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <GlassCard className="p-8">
              <div className="space-y-6">
                <h3 className="font-heading text-2xl font-bold text-foreground">My Journey</h3>
                
                <div className="space-y-4 text-foreground-muted leading-relaxed">
                  <p>
                    I'm currently pursuing my <span className="text-primary font-medium">Bachelor's in Avionics Engineering</span> at 
                    Aviation And Aerospace University Bangladesh, with an expected graduation in 2028.
                  </p>
                  
                  <p>
                    My passion lies in the intersection of <span className="text-secondary font-medium">engineering precision</span> and 
                    <span className="text-accent font-medium"> creative innovation</span>. I believe that the future belongs to 
                    professionals who can bridge technical expertise with human-centered design.
                  </p>
                  
                  <p>
                    Whether I'm designing circuits in Altium Designer, programming microcontrollers, or crafting user interfaces in Figma, 
                    I approach every project with the same goal: creating solutions that are both technically sound and 
                    delightfully intuitive.
                  </p>
                </div>

                <div className="pt-4 border-t border-card-border">
                  <h4 className="font-heading text-lg font-semibold text-foreground mb-3">Education</h4>
                  <div className="space-y-2">
                    <p className="text-foreground font-medium">Bachelor's in Avionics Engineering</p>
                    <p className="text-foreground-muted">Aviation And Aerospace University Bangladesh</p>
                    <p className="text-sm text-foreground-muted font-mono">Expected Graduation: 2028</p>
                  </div>
                </div>
              </div>
            </GlassCard>
          </motion.div>

          {/* Skills & Expertise */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="font-heading text-2xl font-bold text-foreground mb-6">
              Skills & <span className="bg-gradient-primary bg-clip-text text-transparent">Expertise</span>
            </h3>
            <div className="grid gap-6">
              {skillCategories.map((category, index) => {
                const Icon = category.icon;
                return (
                  <motion.div
                    key={category.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <GlassCard className="p-6">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="p-2 rounded-lg bg-primary/10">
                          <Icon className="w-5 h-5 text-primary" />
                        </div>
                        <h4 className="font-heading text-xl font-semibold text-foreground">
                          {category.title}
                        </h4>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {category.skills.map((skill) => (
                          <Badge
                            key={skill}
                            variant="secondary"
                            className="text-sm"
                          >
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </GlassCard>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;