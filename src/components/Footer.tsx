import { Github, Linkedin, Mail, Heart, Code2 } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/debikabasu",
      label: "GitHub"
    },
    {
      icon: Linkedin,
      href: "https://linkedin.com/in/debika-basu",
      label: "LinkedIn"
    },
    {
      icon: Mail,
      href: "mailto:debika.connect@gmail.com",
      label: "Email"
    }
  ];

  const quickLinks = [
    { label: "About", href: "#about" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <footer className="bg-secondary/20 border-t border-border">
      <div className="container mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="p-2 rounded-lg bg-primary/10 border border-primary/20">
                <Code2 className="h-5 w-5 text-primary" />
              </div>
              <span className="font-bold text-lg code-font gradient-text">
                Debika Basu
              </span>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Backend Software Engineer passionate about building scalable, 
              reliable systems using Java, SpringBoot, and cloud technologies.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-card border border-border hover:border-primary hover:bg-primary/10 transition-all duration-300 hover:scale-110"
                  aria-label={social.label}
                >
                  <social.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Quick Links</h3>
            <div className="space-y-2">
              {quickLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={() => scrollToSection(link.href)}
                  className="block text-muted-foreground hover:text-primary transition-colors duration-200"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground">Get In Touch</h3>
            <div className="space-y-2 text-muted-foreground">
              <p>📧 debika.connect@gmail.com</p>
              <p>📱 +9162910 43389</p>
              <p>📍 Kolkata, India</p>
            </div>
            <div className="pt-2">
              <p className="text-sm text-muted-foreground">
                Currently open to new opportunities and exciting projects.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground text-center md:text-left">
              © {currentYear} Debika Basu. All rights reserved.
            </p>
            <div className="flex items-center gap-1 text-sm text-muted-foreground">
              <span>Built with</span>
              <Heart className="h-4 w-4 text-red-400 fill-current" />
              <span>using React, TypeScript & Tailwind CSS</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;