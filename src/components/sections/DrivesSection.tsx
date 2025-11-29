import React from "react";
import { motion } from "framer-motion";
import { GlassCard } from "@/components/ui/glass-card";
import { Zap, Target, Lightbulb, Users } from "lucide-react";

const DrivesSection = () => {
  const traits = [
    {
      icon: Zap,
      title: "Curiosity-Driven",
      description: "Always exploring new technologies and pushing boundaries"
    },
    {
      icon: Target,
      title: "Precision-Focused",
      description: "Engineering mindset with attention to detail and accuracy"
    },
    {
      icon: Lightbulb,
      title: "Innovation-Minded",
      description: "Creative problem-solving meets technical expertise"
    },
    {
      icon: Users,
      title: "Collaborative",
      description: "Team player with strong communication and adaptability"
    }
  ];

  return (
    <section id="drives" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4">
            What <span className="bg-gradient-primary bg-clip-text text-transparent">Drives Me</span>
          </h2>
          <p className="text-foreground-muted max-w-2xl mx-auto text-lg">
            Core values that shape my approach to engineering and design
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6">
          {traits.map((trait, index) => {
            const Icon = trait.icon;
            return (
              <motion.div
                key={trait.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <GlassCard className="p-6 h-full">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-primary/10 shrink-0">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-heading text-xl font-semibold text-foreground mb-2">
                        {trait.title}
                      </h3>
                      <p className="text-foreground-muted">{trait.description}</p>
                    </div>
                  </div>
                </GlassCard>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default DrivesSection;
