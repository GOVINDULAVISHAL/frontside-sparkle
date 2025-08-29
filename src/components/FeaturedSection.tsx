import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Users, 
  BarChart3, 
  Shield, 
  Zap, 
  Globe, 
  MessageSquare,
  ArrowRight,
  CheckCircle
} from "lucide-react";

const FeaturedSection = () => {
  const features = [
    {
      icon: Users,
      title: "Client Management",
      description: "Organize and track all your client relationships in one centralized dashboard.",
      badge: "Popular",
      benefits: ["Contact management", "Project tracking", "Communication history"]
    },
    {
      icon: BarChart3,
      title: "Analytics & Insights",
      description: "Get detailed insights into your business performance with advanced analytics.",
      badge: "Pro",
      benefits: ["Revenue tracking", "Performance metrics", "Custom reports"]
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Bank-level security with end-to-end encryption and compliance standards.",
      badge: "Secure",
      benefits: ["Data encryption", "GDPR compliant", "Regular backups"]
    },
    {
      icon: Zap,
      title: "Automation",
      description: "Automate repetitive tasks and workflows to boost your productivity.",
      badge: "New",
      benefits: ["Workflow automation", "Smart notifications", "Task scheduling"]
    },
    {
      icon: Globe,
      title: "Global Access",
      description: "Access your client data from anywhere in the world with cloud sync.",
      badge: "Cloud",
      benefits: ["Multi-device sync", "Offline access", "Global CDN"]
    },
    {
      icon: MessageSquare,
      title: "Communication Hub",
      description: "Centralized communication with integrated chat, email, and video calls.",
      badge: "Connect",
      benefits: ["Unified inbox", "Video calls", "Message templates"]
    }
  ];

  return (
    <section id="features" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-2 text-primary border-primary/30">
            Features
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Everything you need to manage clients
            <span className="bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent"> effectively</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Powerful features designed to streamline your workflow and enhance client relationships.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <Card 
              key={index} 
              className="card-gradient border-border/50 hover:shadow-medium transition-smooth group hover:-translate-y-1"
            >
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between mb-4">
                  <div className="p-3 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-smooth">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <Badge 
                    variant="secondary"
                    className="bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 transition-smooth"
                  >
                    {feature.badge}
                  </Badge>
                </div>
                <CardTitle className="text-xl font-semibold group-hover:text-primary transition-smooth">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <CardDescription className="text-muted-foreground mb-6 leading-relaxed">
                  {feature.description}
                </CardDescription>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center space-x-2 text-sm">
                      <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                      <span className="text-muted-foreground">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-8 rounded-2xl bg-gradient-to-r from-primary/10 via-primary-glow/10 to-primary/10 border border-primary/20">
            <div className="text-center sm:text-left">
              <h3 className="text-2xl font-bold mb-2">Ready to get started?</h3>
              <p className="text-muted-foreground">Join thousands of businesses already using ClientHub.</p>
            </div>
            <Button 
              size="lg"
              className="bg-gradient-to-r from-primary to-primary-glow hover:shadow-primary transition-smooth group whitespace-nowrap"
            >
              Start Your Free Trial
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-smooth" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedSection;