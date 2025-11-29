import React from "react";
import { motion } from "framer-motion";
import { GlassCard } from "@/components/ui/glass-card";
import { 
  Cpu, 
  Code, 
  BarChart3, 
  Wrench,
  Palette, 
  Monitor, 
  Smartphone,
  Star,
  Zap,
  ArrowUpRight
} from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      category: "Creative & Design Services",
      description: "Human-centered design with innovative digital solutions",
      gradient: "secondary",
      services: [
        {
          icon: Monitor,
          title: "UI/UX Design",
          description: "Complete user interface and experience design from research to prototype",
          tools: ["Figma", "Adobe XD", "User Research"],
          featured: true
        },
        {
          icon: Palette,
          title: "Logo & Brand Identity Design",
          description: "Comprehensive brand identity systems and visual design",
          tools: ["Illustrator", "Photoshop", "Brand Strategy"],
          featured: false
        },
        {
          icon: Smartphone,
          title: "Web & Mobile App Interface Design",
          description: "Responsive design solutions for web and mobile platforms",
          tools: ["Figma", "Prototyping", "Design Systems"],
          featured: false
        },
        {
          icon: Star,
          title: "Graphic Design",
          description: "Visual design solutions for digital and print media",
          tools: ["Photoshop", "Illustrator", "Creative Direction"],
          featured: false
        }
      ]
    },
    {
      category: "Engineering & Technical Services",
      description: "Precision engineering solutions with cutting-edge technology",
      gradient: "primary",
      services: [
        {
          icon: Cpu,
          title: "Circuit Design & Simulation",
          description: "Professional circuit design and analysis using industry-standard tools",
          tools: ["Altium Designer", "Multisim", "Proteus"],
          featured: true
        },
        {
          icon: Code,
          title: "Microcontroller Programming",
          description: "Embedded systems programming for various microcontroller platforms",
          tools: ["Arduino", "PIC", "STM32"],
          featured: false
        },
        {
          icon: BarChart3,
          title: "Data Analysis & Reporting",
          description: "Comprehensive data analysis and technical documentation",
          tools: ["Altium Designer", "Excel", "LabVIEW"],
          featured: false
        },
        {
          icon: Wrench,
          title: "Technical Project Support",
          description: "End-to-end technical consultation and project implementation",
          tools: ["Consultation", "Implementation", "Testing"],
          featured: false
        }
      ]
    },
    {
      category: "Future Services",
      description: "Expanding expertise in specialized avionics solutions",
      gradient: "accent",
      services: [
        {
          icon: Zap,
          title: "Avionics System Modeling & Testing",
          description: "Advanced avionics system design and validation",
          tools: ["System Modeling", "Testing", "Validation"],
          featured: false
        },
        {
          icon: ArrowUpRight,
          title: "Freelance Consultation",
          description: "Expert consultation bridging engineering and design",
          tools: ["Strategy", "Implementation", "Optimization"],
          featured: true
        }
      ]
    }
  ];

  return (
    <section id="services" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4">
            Services & <span className="bg-gradient-primary bg-clip-text text-transparent">Solutions</span>
          </h2>
          <p className="text-foreground-muted max-w-2xl mx-auto text-lg">
            Bridging engineering precision with creative innovation across multiple disciplines
          </p>
        </motion.div>

        <div className="space-y-16">
          {services.map((serviceCategory, categoryIndex) => (
            <motion.div
              key={serviceCategory.category}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="text-center mb-8">
                <h3 className="font-heading text-2xl md:text-3xl font-bold mb-2">
                  <span className={`bg-gradient-${serviceCategory.gradient} bg-clip-text text-transparent`}>
                    {serviceCategory.category}
                  </span>
                </h3>
                <h4 className="text-foreground font-semibold text-lg bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  {serviceCategory.description}
                </h4>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {serviceCategory.services.map((service, serviceIndex) => (
                  <motion.div
                    key={service.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ 
                      duration: 0.6, 
                      delay: categoryIndex * 0.2 + serviceIndex * 0.1 
                    }}
                    viewport={{ once: true }}
                  >
                    <GlassCard 
                      variant="interactive" 
                      className={`p-6 h-full relative overflow-hidden group ${
                        service.featured ? 'ring-2 ring-primary/30' : ''
                      }`}
                    >
                      {service.featured && (
                        <div className="absolute top-4 right-4">
                          <div className="bg-gradient-primary px-2 py-1 rounded-full">
                            <Star size={12} className="text-white" />
                          </div>
                        </div>
                      )}

                      <div className="flex flex-col h-full">
                        <div className={`w-12 h-12 bg-gradient-${serviceCategory.gradient} rounded-xl flex items-center justify-center mb-4 group-hover:shadow-glow transition-smooth`}>
                          <service.icon size={24} className="text-white" />
                        </div>

                        <h4 className="font-heading text-lg font-semibold text-foreground mb-3">
                          {service.title}
                        </h4>

                        <p className="text-foreground-muted text-sm leading-relaxed mb-4 flex-grow">
                          {service.description}
                        </p>

                        <div className="border-t border-card-border pt-4">
                          <div className="flex flex-wrap gap-1">
                            {service.tools.map((tool) => (
                              <span
                                key={tool}
                                className="text-xs font-mono bg-muted px-2 py-1 rounded-md text-foreground-muted"
                              >
                                {tool}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Hover effect */}
                      <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-smooth pointer-events-none" />
                    </GlassCard>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
