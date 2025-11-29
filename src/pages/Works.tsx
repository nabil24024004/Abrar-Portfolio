import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, Briefcase, GraduationCap, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { GlassCard } from "@/components/ui/glass-card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Works = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const categories = [
    {
      title: "Freelance Projects",
      description: "Professional design work and creative projects delivered for clients",
      icon: Briefcase,
      path: "/works/freelance",
      count: 2,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Academic Projects",
      description: "Engineering and technical projects developed during academic studies",
      icon: GraduationCap,
      path: "/works/academic",
      count: 4,
      color: "from-purple-500 to-pink-500"
    }
  ];

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
            <Link to="/" className="inline-flex items-center gap-2 text-foreground-muted hover:text-primary transition-colors mb-6">
              <ArrowLeft className="w-5 h-5" />
              Back to Home
            </Link>
            <h1 className="font-heading text-4xl md:text-5xl font-bold mb-4">
              My <span className="bg-gradient-primary bg-clip-text text-transparent">Works</span>
            </h1>
            <p className="text-foreground-muted text-lg max-w-3xl">
              Explore my portfolio of freelance and academic projects showcasing design expertise and engineering capabilities
            </p>
          </motion.div>

          {/* Category Cards */}
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {categories.map((category, index) => {
              const Icon = category.icon;
              return (
                <motion.div
                  key={category.path}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Link to={category.path}>
                    <GlassCard className="p-8 h-full hover:border-primary/50 transition-all duration-300 group cursor-pointer">
                      <div className="flex flex-col h-full">
                        <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${category.color} p-4 mb-6`}>
                          <Icon className="w-full h-full text-white" />
                        </div>
                        
                        <h3 className="font-heading text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                          {category.title}
                        </h3>
                        
                        <p className="text-foreground-muted mb-6 flex-grow">
                          {category.description}
                        </p>
                        
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-medium text-foreground-muted">
                            {category.count} {category.count === 1 ? 'Project' : 'Projects'}
                          </span>
                          
                          <div className="flex items-center gap-2 text-primary group-hover:gap-3 transition-all">
                            <span className="text-sm font-medium">View Projects</span>
                            <ArrowRight className="w-4 h-4" />
                          </div>
                        </div>
                      </div>
                    </GlassCard>
                  </Link>
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

export default Works;
