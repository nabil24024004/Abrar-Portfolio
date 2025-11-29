import React, { useState } from "react";
import { motion } from "framer-motion";
import { GlassCard } from "@/components/ui/glass-card";
import { GradientButton } from "@/components/ui/gradient-button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";
import emailjs from '@emailjs/browser';
import {
  Mail,
  Phone,
  Linkedin,
  MapPin,
  Send,
  CheckCircle
} from "lucide-react";

// Form validation schema
const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100, "Name must be less than 100 characters"),
  email: z.string().trim().email("Invalid email address").max(255, "Email must be less than 255 characters"),
  subject: z.string().trim().min(1, "Subject is required").max(200, "Subject must be less than 200 characters"),
  message: z.string().trim().min(1, "Message is required").max(1000, "Message must be less than 1000 characters")
});

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ""
      }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrors({});

    try {
      // Validate form data
      const validatedData = contactSchema.parse(formData);

      // Send email using EmailJS
      const templateParams = {
        from_name: validatedData.name,
        from_email: validatedData.email,
        subject: validatedData.subject,
        message: validatedData.message,
        to_name: "Sheikh Azwad Abrar Nabil"
      };

      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        templateParams
      );

      toast({
        title: "Message sent successfully!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });

      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      if (error instanceof z.ZodError) {
        const newErrors: Record<string, string> = {};
        error.errors.forEach((err) => {
          if (err.path[0]) {
            newErrors[err.path[0] as string] = err.message;
          }
        });
        setErrors(newErrors);
      } else {
        console.error('EmailJS Error:', error);
        toast({
          title: "Failed to send message",
          description: "Please try again later or contact me directly via email.",
          variant: "destructive"
        });
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "azwadabrar109@gmail.com",
      href: "mailto:azwadabrar109@gmail.com",
      color: "primary"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+880 1823604026",
      href: "tel:+8801823604026",
      color: "secondary"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "Sheikh Azwad Abrar Nabil",
      href: "https://www.linkedin.com/in/sheikh-azwad-abrar-nabil/",
      color: "accent"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Chattogram, Bangladesh",
      href: "#",
      color: "success"
    }
  ];

  return (
    <section id="contact" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4">
            Let's <span className="bg-gradient-primary bg-clip-text text-transparent">Connect</span>
          </h2>
          <p className="text-foreground-muted max-w-2xl mx-auto text-lg">
            Ready to bring your next project to life? Let's discuss how we can merge
            engineering precision with creative innovation.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div>
              <h3 className="font-heading text-2xl font-bold mb-6">
                Get in <span className="bg-gradient-secondary bg-clip-text text-transparent">Touch</span>
              </h3>

              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={info.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <GlassCard variant="interactive" className="p-4">
                      <a
                        href={info.href}
                        target={info.href.startsWith('http') ? '_blank' : undefined}
                        rel={info.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className="flex items-center gap-4 group"
                      >
                        <div className={`w-12 h-12 bg-gradient-${info.color} rounded-xl flex items-center justify-center group-hover:shadow-glow transition-smooth`}>
                          <info.icon size={20} className="text-white" />
                        </div>
                        <div>
                          <p className="text-sm font-mono text-foreground-muted mb-1">
                            {info.label}
                          </p>
                          <p className="text-foreground font-medium">
                            {info.value}
                          </p>
                        </div>
                      </a>
                    </GlassCard>
                  </motion.div>
                ))}
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <GlassCard className="p-6">
                <h4 className="font-heading text-lg font-semibold mb-3">
                  <span className="bg-gradient-primary bg-clip-text text-transparent">
                    Available for:
                  </span>
                </h4>
                <ul className="space-y-2 text-sm text-foreground-muted">
                  <li className="flex items-center gap-2">
                    <CheckCircle size={16} className="text-success" />
                    Engineering consultations
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle size={16} className="text-success" />
                    UI/UX design projects
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle size={16} className="text-success" />
                    Technical collaborations
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle size={16} className="text-success" />
                    Freelance opportunities
                  </li>
                </ul>
              </GlassCard>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <GlassCard className="p-8">
              <h3 className="font-heading text-2xl font-bold mb-6">
                Send a <span className="bg-gradient-primary bg-clip-text text-transparent">Message</span>
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                      Name *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      className={`bg-background-secondary border-card-border focus:border-primary ${errors.name ? 'border-destructive' : ''}`}
                      placeholder="Your full name"
                    />
                    {errors.name && (
                      <p className="text-sm text-destructive mt-1">{errors.name}</p>
                    )}
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      Email *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      className={`bg-background-secondary border-card-border focus:border-primary ${errors.email ? 'border-destructive' : ''}`}
                      placeholder="your@email.com"
                    />
                    {errors.email && (
                      <p className="text-sm text-destructive mt-1">{errors.email}</p>
                    )}
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                    Subject *
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    type="text"
                    required
                    value={formData.subject}
                    onChange={handleInputChange}
                    className={`bg-background-secondary border-card-border focus:border-primary ${errors.subject ? 'border-destructive' : ''}`}
                    placeholder="What's this about?"
                  />
                  {errors.subject && (
                    <p className="text-sm text-destructive mt-1">{errors.subject}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Message *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleInputChange}
                    className={`bg-background-secondary border-card-border focus:border-primary resize-none ${errors.message ? 'border-destructive' : ''}`}
                    placeholder="Tell me about your project or how I can help..."
                  />
                  {errors.message && (
                    <p className="text-sm text-destructive mt-1">{errors.message}</p>
                  )}
                </div>

                <GradientButton
                  type="submit"
                  size="lg"
                  variant="hero"
                  disabled={isSubmitting}
                  className="w-full md:w-auto"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={20} className="mr-2" />
                      Send Message
                    </>
                  )}
                </GradientButton>
              </form>
            </GlassCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;