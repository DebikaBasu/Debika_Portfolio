import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Github, ExternalLink, Database, Server, Cloud } from "lucide-react";
import bankingImage from "@/assets/banking-app-project.jpg";
import ecommerceImage from "@/assets/ecommerce-project.jpg";
import emsImage from "@/assets/ems.png";
import HMS from "@/assets/hms.png";


const ProjectsSection = () => {
  const projects = [
    {
      title: "Banking App Backend",
      description: "Enterprise-grade banking application backend with comprehensive financial services including account management, transactions, and real-time notifications.",
      image: bankingImage,
      category: "Backend System",
      technologies: ["Java", "SpringBoot", "MySQL", "AWS", "Docker", "Kafka", "Redis"],
      highlights: [
        "Microservices architecture with API Gateway pattern",
        "Real-time transaction processing with Kafka event streaming",
        "JWT-based authentication with role-based access control",
        "AWS deployment with auto-scaling and load balancing",
        "Comprehensive audit logging and monitoring",
        "RESTful APIs with OpenAPI documentation"
      ],
      githubUrl: "https://github.com/debikabasu/banking-app-backend",
      liveUrl: "https://banking-api-demo.com",
      status: "Production"
    },
    {
      title: "E-KartCom Microservices",
      description: "Scalable e-commerce platform backend featuring product catalog, inventory management, order processing, and payment integration with modern microservices architecture.",
      image: ecommerceImage,
      category: "E-Commerce Platform",
      technologies: ["SpringBoot", "DynamoDB", "AWS ECS", "SNS", "SQS", "Docker", "GitHub Actions"],
      highlights: [
        "Event-driven microservices with eventual consistency",
        "DynamoDB for high-performance product catalog",
        "AWS SNS/SQS for asynchronous order processing",
        "ECS-based containerized deployment",
        "CQRS pattern for read/write optimization",
        "Circuit breaker pattern for resilience"
      ],
      githubUrl: "https://github.com/debikabasu/e-kartcom-backend",
      liveUrl: "https://ekart-api-demo.com",
      status: "Production"
    },
    {
      "title": "Employee Attendance Leave Management System",
      "description": "Web-based application for managing employee attendance, leave requests, and real-time status tracking with role-based access control and reporting features.",
      "image": emsImage,
      "category": "Backend System",
      "technologies": ["Java", "Spring Boot", "Maven", "Spring Security", "MySQL", "Docker", "REST API", "AWS"],
      "highlights": [
        "Mark attendance and manage leave requests with approval workflow",
        "Role-based access control for employees and admins",
        "Daily attendance tracking with real-time status updates",
        "CORS-configured secure RESTful API endpoints",
        "Integration with SQL database for persistent data management",
        "Custom error handling and exception management"
      ],
      "githubUrl": "https://github.com/DebikaBasu/employee-attendance-leave-management",
      "liveUrl": null,
      "status": "Completed"
    },
    {
      "title": "Hospital Management Service",
      "description": "Backend service for managing hospital operations including patient registration, doctor management, appointments, prescriptions, and billing with secure, role-based access.",
      "image": HMS,
      "category": "Backend Service",
      "technologies": ["Java", "Spring Boot", "Maven", "Docker", "Spring Data JPA", "MySQL", "REST API", "AWS"],
      "highlights": [
        "Patient, doctor, and department CRUD with validation",
        "Appointment scheduling and status updates",
        "Prescription and billing endpoints with audit trails",
        "Role-based access control for admin, doctor, and staff",
        "CORS-configured, secure RESTful APIs",
        "Global exception handling and custom error responses",
        "Persistent data storage with MySQL via JPA"
      ],
      "githubUrl": "https://github.com/DebikaBasu/Hospital-Management-Service",
      "liveUrl": null,
      "status": "Completed"
    }

  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Production":
        return "bg-emerald-500/10 text-emerald-500 border-emerald-500/20"; // fresh green
      case "Active Development":
        return "bg-indigo-500/10 text-indigo-500 border-indigo-500/20";   // deep indigo
      case "Completed":
        return "bg-amber-500/10 text-amber-500 border-amber-500/20";      // warm amber
      default:
        return "bg-slate-500/10 text-slate-500 border-slate-500/20";      // neutral slate

    }
  };


  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Backend System": return <Database className="h-4 w-4" />;
      case "E-Commerce Platform": return <Server className="h-4 w-4" />;
      case "Enterprise System": return <Cloud className="h-4 w-4" />;
      default: return <Server className="h-4 w-4" />;
    }
  };

  return (
    <section id="projects" className="py-20 px-6 bg-secondary/10">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 code-font">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Showcase of backend systems and architectures I've designed and implemented,
            demonstrating expertise in scalable, production-ready solutions.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="glow-card overflow-hidden group hover:scale-105 transition-all duration-300">
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4 flex items-center gap-2">
                  <Badge className={`${getStatusColor(project.status)} font-medium`}>
                    {project.status}
                  </Badge>
                </div>
                <div className="absolute top-4 right-4">
                  <div className="flex items-center gap-1 bg-background/80 backdrop-blur-sm px-3 py-1 rounded-full">
                    {getCategoryIcon(project.category)}
                    <span className="text-sm text-muted-foreground">{project.category}</span>
                  </div>
                </div>
              </div>

              <CardHeader>
                <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                  {project.title}
                </CardTitle>
                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
              </CardHeader>

              <CardContent>
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-foreground mb-3">Key Features:</h4>
                  <ul className="space-y-1">
                    {project.highlights.map((highlight, hIndex) => (
                      <li key={hIndex} className="text-sm text-muted-foreground">
                        • {highlight}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge
                        key={tech}
                        variant="outline"
                        className="text-xs bg-primary/5 border-primary/20 text-primary"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="flex gap-3">
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1 border-primary/30 hover:border-primary hover:bg-primary/10"
                    asChild
                  >
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </a>
                  </Button>
                  {project.liveUrl && (
                    <Button
                      size="sm"
                      className="flex-1 btn-gradient"
                      asChild
                    >
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Live Demo
                      </a>
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            variant="outline"
            size="lg"
            className="border-primary/30 hover:border-primary hover:bg-primary/10"
            asChild
          >
            <a href="https://github.com/debikabasu" target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-5 w-5" />
              View All Projects on GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;