import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { cn } from "@/lib/utils";
const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isHomePage = location.pathname === "/";

  const handleSectionClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (!isHomePage && href.startsWith("/#")) {
      e.preventDefault();
      const sectionId = href.substring(2); // Remove "/#"
      navigate("/");
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
      setIsMobileMenuOpen(false);
    }
  };
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  const navItems = [{
    name: "About",
    href: isHomePage ? "#about" : "/#about"
  }, {
    name: "Skills",
    href: isHomePage ? "#skills" : "/#skills"
  }, {
    name: "Services",
    href: isHomePage ? "#services" : "/#services"
  }, {
    name: "Projects",
    href: isHomePage ? "#projects" : "/#projects"
  }, {
    name: "Works",
    href: "/works",
    isRoute: true
  }, {
    name: "Contact",
    href: isHomePage ? "#contact" : "/#contact"
  }];
  return <motion.nav initial={{
    y: -100,
    opacity: 0
  }} animate={{
    y: 0,
    opacity: 1
  }} className={cn("fixed top-0 left-0 right-0 z-50 transition-all duration-300", isScrolled ? "bg-background/80 backdrop-blur-xl border-b border-card-border" : "bg-transparent")}>
      <div className="max-w-7xl mx-auto sm:px-4 md:px-6 lg:px-8 px-[22px]">
        <div className="flex items-center justify-between h-14 sm:h-16">
          <Link to="/">
            <motion.div initial={{
            opacity: 0
          }} animate={{
            opacity: 1
          }} transition={{
            delay: 0.2
          }} className="font-heading text-base sm:text-xl font-bold bg-gradient-primary bg-clip-text text-transparent cursor-pointer hover:opacity-80 transition-opacity">
              Sheikh Azwad Abrar
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => {
              const isActive = item.isRoute && location.pathname === item.href;
              const linkClasses = cn(
                "relative text-foreground-muted hover:text-foreground transition-smooth font-mono text-sm",
                "after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-gradient-primary",
                "after:scale-x-0 after:origin-right after:transition-transform after:duration-300",
                "hover:after:scale-x-100 hover:after:origin-left",
                isActive && "text-foreground after:scale-x-100"
              );
              
              if (item.isRoute) {
                return (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={linkClasses}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                );
              }
              
              return (
                <motion.a
                  key={item.name}
                  href={item.href}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index }}
                  className={linkClasses}
                  onClick={(e) => handleSectionClick(e, item.href)}
                >
                  {item.name}
                </motion.a>
              );
            })}
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden p-2 text-foreground hover:text-primary transition-smooth" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && <motion.div initial={{
        opacity: 0,
        height: 0
      }} animate={{
        opacity: 1,
        height: "auto"
      }} exit={{
        opacity: 0,
        height: 0
      }} className="md:hidden bg-background-secondary/90 backdrop-blur-xl border-t border-card-border">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map(item => {
                const isActive = item.isRoute && location.pathname === item.href;
                const linkClasses = cn(
                  "block px-3 py-2 text-foreground-muted hover:text-foreground hover:bg-muted rounded-lg transition-smooth font-mono",
                  isActive && "text-foreground bg-muted"
                );
                
                if (item.isRoute) {
                  return (
                    <Link
                      key={item.name}
                      to={item.href}
                      className={linkClasses}
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  );
                }
                
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    className={linkClasses}
                    onClick={(e) => handleSectionClick(e, item.href)}
                  >
                    {item.name}
                  </a>
                );
              })}
            </div>
          </motion.div>}
      </div>
    </motion.nav>;
};
export default Navigation;