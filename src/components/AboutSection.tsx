import { Card, CardContent } from "@/components/ui/card";
import { Code2, Server, Cloud, Database } from "lucide-react";

const AboutSection = () => {
  const highlights = [
    {
      icon: Code2,
      title: "Backend Engineering",
      description: "Specialized in Java & SpringBoot development with 3+ years of experience building enterprise-grade applications"
    },
    {
      icon: Server,
      title: "Microservices Architecture",
      description: "Expert in designing and implementing scalable microservices using Docker, Kubernetes, and event-driven architecture"
    },
    {
      icon: Cloud,
      title: "AWS Cloud Native",
      description: "Proficient in AWS services including EC2, ECS, SNS, SQS, S3, and CloudWatch for building cloud-native solutions"
    },
    {
      icon: Database,
      title: "Data Management",
      description: "Experience with both SQL (MySQL) and NoSQL (DynamoDB) databases, designing efficient data models and queries"
    }
  ];

  return (
    <section id="about" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 code-font">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Passionate Backend Software Engineer with a backend-first approach to building robust, 
            scalable systems. Currently crafting innovative solutions at 6Livo Technologies, 
            with expertise in Java ecosystem and cloud technologies.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {highlights.map((item, index) => (
            <Card key={index} className="glow-card p-6 hover:transform hover:scale-105 transition-all duration-300">
              <CardContent className="p-0">
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10 border border-primary/20">
                    <item.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-foreground">{item.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Card className="glow-card p-8 max-w-4xl mx-auto">
            <CardContent className="p-0">
              <h3 className="text-2xl font-semibold mb-4 text-foreground">My Approach</h3>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                I believe in writing clean, maintainable code that solves real business problems. 
                My experience spans from designing REST APIs and implementing microservices to 
                setting up CI/CD pipelines and monitoring production systems.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm border border-primary/20">
                  Test-Driven Development
                </span>
                <span className="px-4 py-2 bg-accent/10 text-accent rounded-full text-sm border border-accent/20">
                  DevOps Practices
                </span>
                <span className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm border border-primary/20">
                  Agile Methodology
                </span>
                <span className="px-4 py-2 bg-accent/10 text-accent rounded-full text-sm border border-accent/20">
                  Performance Optimization
                </span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;