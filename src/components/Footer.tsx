import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { 
  Twitter, 
  Linkedin, 
  Github, 
  Mail, 
  MapPin, 
  Phone,
  ArrowRight
} from "lucide-react";

const Footer = () => {
  const footerLinks = {
    product: [
      { name: "Features", href: "#features" },
      { name: "Pricing", href: "#pricing" },
      { name: "API", href: "#api" },
      { name: "Documentation", href: "#docs" }
    ],
    company: [
      { name: "About", href: "#about" },
      { name: "Blog", href: "#blog" },
      { name: "Careers", href: "#careers" },
      { name: "Contact", href: "#contact" }
    ],
    support: [
      { name: "Help Center", href: "#help" },
      { name: "Community", href: "#community" },
      { name: "Status", href: "#status" },
      { name: "Updates", href: "#updates" }
    ],
    legal: [
      { name: "Privacy Policy", href: "#privacy" },
      { name: "Terms of Service", href: "#terms" },
      { name: "Cookie Policy", href: "#cookies" },
      { name: "GDPR", href: "#gdpr" }
    ]
  };

  const socialLinks = [
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Github, href: "#", label: "GitHub" },
    { icon: Mail, href: "#", label: "Email" }
  ];

  return (
    <footer className="bg-muted/30 border-t border-border/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Newsletter Section */}
        <div className="py-12 border-b border-border/50">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl sm:text-3xl font-bold mb-4">
              Stay updated with ClientHub
            </h3>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Get the latest features, updates, and client management tips delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row max-w-md mx-auto gap-4">
              <Input 
                type="email" 
                placeholder="Enter your email"
                className="flex-1 bg-background border-border/50 focus:border-primary"
              />
              <Button className="bg-gradient-to-r from-primary to-primary-glow hover:shadow-primary transition-smooth group">
                Subscribe
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-smooth" />
              </Button>
            </div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-bold bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent mb-4">
                ClientHub
              </h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                The all-in-one client management platform that helps businesses build stronger relationships and grow efficiently.
              </p>
              
              {/* Contact Info */}
              <div className="space-y-3 text-sm">
                <div className="flex items-center space-x-3 text-muted-foreground">
                  <Mail className="w-4 h-4 text-primary" />
                  <span>hello@clienthub.com</span>
                </div>
                <div className="flex items-center space-x-3 text-muted-foreground">
                  <Phone className="w-4 h-4 text-primary" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-3 text-muted-foreground">
                  <MapPin className="w-4 h-4 text-primary" />
                  <span>San Francisco, CA</span>
                </div>
              </div>
            </div>

            {/* Links Sections */}
            <div>
              <h4 className="font-semibold mb-4 text-foreground">Product</h4>
              <ul className="space-y-3">
                {footerLinks.product.map((link) => (
                  <li key={link.name}>
                    <a 
                      href={link.href}
                      className="text-muted-foreground hover:text-primary transition-smooth text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-foreground">Company</h4>
              <ul className="space-y-3">
                {footerLinks.company.map((link) => (
                  <li key={link.name}>
                    <a 
                      href={link.href}
                      className="text-muted-foreground hover:text-primary transition-smooth text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-foreground">Support</h4>
              <ul className="space-y-3">
                {footerLinks.support.map((link) => (
                  <li key={link.name}>
                    <a 
                      href={link.href}
                      className="text-muted-foreground hover:text-primary transition-smooth text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4 text-foreground">Legal</h4>
              <ul className="space-y-3">
                {footerLinks.legal.map((link) => (
                  <li key={link.name}>
                    <a 
                      href={link.href}
                      className="text-muted-foreground hover:text-primary transition-smooth text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <Separator className="bg-border/50" />

        {/* Bottom Footer */}
        <div className="py-6 flex flex-col sm:flex-row items-center justify-between">
          <p className="text-muted-foreground text-sm">
            © 2024 ClientHub. All rights reserved.
          </p>
          
          {/* Social Links */}
          <div className="flex items-center space-x-4 mt-4 sm:mt-0">
            {socialLinks.map((social) => (
              <Button
                key={social.label}
                variant="ghost"
                size="icon"
                className="w-8 h-8 text-muted-foreground hover:text-primary transition-smooth"
                asChild
              >
                <a href={social.href} aria-label={social.label}>
                  <social.icon className="w-4 h-4" />
                </a>
              </Button>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;