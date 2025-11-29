import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { GlassCard } from "@/components/ui/glass-card";
import { GradientButton } from "@/components/ui/gradient-button";
import { Home, ArrowLeft } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-4 relative overflow-hidden">
      {/* Background gradients */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/20 rounded-full blur-[100px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-secondary/20 rounded-full blur-[100px]" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-lg"
      >
        <GlassCard className="p-8 md:p-12 text-center space-y-8">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="relative"
          >
            <h1 className="text-9xl font-bold font-heading bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent opacity-50 select-none">
              404
            </h1>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-2xl font-bold text-foreground bg-background/50 backdrop-blur-sm px-4 py-2 rounded-full border border-white/10">
                Page Not Found
              </span>
            </div>
          </motion.div>

          <div className="space-y-4">
            <p className="text-foreground-muted text-lg">
              Oops! It seems you've ventured into uncharted territory.
              The page you're looking for doesn't exist or has been moved.
            </p>
            <p className="text-sm font-mono text-primary/80">
              Path: {location.pathname}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Link to="/">
              <GradientButton variant="hero" size="lg" className="w-full sm:w-auto">
                <Home className="w-4 h-4 mr-2" />
                Return Home
              </GradientButton>
            </Link>
            <button onClick={() => window.history.back()}>
              <GlassCard variant="interactive" className="px-6 py-3 flex items-center justify-center gap-2 w-full sm:w-auto">
                <ArrowLeft className="w-4 h-4" />
                <span>Go Back</span>
              </GlassCard>
            </button>
          </div>
        </GlassCard>
      </motion.div>
    </div>
  );
};

export default NotFound;
