import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GitBranch, Server, Monitor, Shield, Zap, Cloud, Database, Terminal } from "lucide-react";

const DevOpsSection = () => {
  const pipelineSteps = [
    { name: "Code Commit", icon: GitBranch, status: "✅", time: "0s" },
    { name: "Unit Tests", icon: Terminal, status: "✅", time: "45s" },
    { name: "Build Docker", icon: Server, status: "✅", time: "2m 15s" },
    { name: "Security Scan", icon: Shield, status: "✅", time: "1m 30s" },
    { name: "Deploy to ECS", icon: Cloud, status: "🚀", time: "3m 45s" },
    { name: "Health Check", icon: Monitor, status: "✅", time: "30s" }
  ];

  const awsServices = [
    {
      service: "ECS Fargate",
      purpose: "Serverless container orchestration",
      icon: Server,
      metrics: "99.9% uptime"
    },
    {
      service: "SNS/SQS",
      purpose: "Asynchronous message processing",
      icon: Zap,
      metrics: "1M+ messages/day"
    },
    {
      service: "CloudWatch",
      purpose: "Comprehensive system monitoring",
      icon: Monitor,
      metrics: "Real-time alerts"
    },
    {
      service: "S3 + CloudFront",
      purpose: "Static asset delivery",
      icon: Database,
      metrics: "Global CDN coverage"
    }
  ];

  const dockerfileExample = `FROM openjdk:17-jdk-slim
WORKDIR /app
COPY target/*.jar app.jar
EXPOSE 8080
ENTRYPOINT ["java", "-jar", "app.jar"]`;

  const gitHubActionsExample = `name: Backend CI/CD
on: [push, pull_request]
jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - name: Setup Java
        uses: actions/setup-java@v3
        with:
          java-version: '17'
      - name: Run Tests
        run: mvn test
      - name: Build Docker
        run: docker build -t app .
      - name: Deploy to ECS
        run: aws ecs update-service`;

  return (
    <section id="devops" className="py-20 px-6 bg-secondary/10">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 code-font">
            DevOps & <span className="gradient-text">Cloud Infrastructure</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
            Automated deployment pipelines, cloud-native architecture, and comprehensive monitoring 
            for zero-downtime releases and scalable production systems.
          </p>
        </div>

        {/* CI/CD Pipeline Visualization */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold mb-8 text-center code-font neon-text">
            Automated CI/CD Pipeline
          </h3>
          
          <div className="glass-card p-8 rounded-xl mb-8">
            <div className="grid md:grid-cols-6 gap-4">
              {pipelineSteps.map((step, index) => (
                <div key={index} className="text-center">
                  <div className="glass-card p-4 rounded-lg mb-3 hover:scale-105 transition-transform">
                    <step.icon className="h-8 w-8 mx-auto mb-2 text-primary" />
                    <div className="text-2xl mb-1">{step.status}</div>
                    <div className="text-sm font-medium">{step.name}</div>
                    <div className="text-xs text-muted-foreground font-mono">{step.time}</div>
                  </div>
                  {index < pipelineSteps.length - 1 && (
                    <div className="hidden md:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2">
                      <div className="w-8 h-0.5 bg-gradient-primary"></div>
                    </div>
                  )}
                </div>
              ))}
            </div>
            
            <div className="mt-6 text-center">
              <Badge className="glass-card border-primary/30 px-4 py-2">
                <Monitor className="w-4 h-4 mr-2" />
                Average deployment time: 8 minutes
              </Badge>
            </div>
          </div>
        </div>

        {/* AWS Architecture */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h3 className="text-2xl font-semibold mb-6 code-font neon-text">
              AWS Cloud Architecture
            </h3>
            
            <div className="space-y-4">
              {awsServices.map((service, index) => (
                <Card key={index} className="glass-card p-4 hover:scale-105 transition-all duration-300">
                  <CardContent className="p-0">
                    <div className="flex items-center gap-4">
                      <div className="p-3 rounded-lg bg-gradient-to-br from-aws/10 to-primary/10 border border-aws/20">
                        <service.icon className="h-6 w-6 text-aws" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-foreground code-font">{service.service}</h4>
                        <p className="text-sm text-muted-foreground">{service.purpose}</p>
                        <div className="text-xs text-primary font-mono mt-1">{service.metrics}</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-6 code-font neon-text">
              Infrastructure as Code
            </h3>
            
            <div className="terminal-window rounded-lg">
              <div className="terminal-header px-4 py-2 rounded-t-lg flex items-center gap-2">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                </div>
                <span className="text-sm text-muted-foreground ml-4">Dockerfile</span>
              </div>
              <div className="p-4">
                <pre className="terminal-text text-sm leading-relaxed">
                  {dockerfileExample}
                </pre>
              </div>
            </div>

            <div className="mt-6 space-y-3">
              <div className="flex items-center justify-between glass-card p-3 rounded-lg">
                <span className="text-sm font-mono">Image size</span>
                <span className="text-sm text-primary font-mono">156 MB</span>
              </div>
              <div className="flex items-center justify-between glass-card p-3 rounded-lg">
                <span className="text-sm font-mono">Build time</span>
                <span className="text-sm text-primary font-mono">2m 15s</span>
              </div>
              <div className="flex items-center justify-between glass-card p-3 rounded-lg">
                <span className="text-sm font-mono">Security scan</span>
                <span className="text-sm text-green-400 font-mono">0 vulnerabilities</span>
              </div>
            </div>
          </div>
        </div>

        {/* GitHub Actions Configuration */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold mb-6 text-center code-font neon-text">
            GitHub Actions Workflow
          </h3>
          
          <div className="terminal-window rounded-lg max-w-4xl mx-auto">
            <div className="terminal-header px-4 py-2 rounded-t-lg flex items-center gap-2">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <span className="text-sm text-muted-foreground ml-4">.github/workflows/deploy.yml</span>
            </div>
            <div className="p-6">
              <pre className="terminal-text text-sm leading-relaxed overflow-x-auto">
                {gitHubActionsExample}
              </pre>
            </div>
          </div>
        </div>

        {/* Monitoring & Observability */}
        <div className="text-center">
          <div className="glass-card p-8 max-w-5xl mx-auto rounded-xl">
            <h3 className="text-2xl font-semibold mb-8 text-foreground code-font">
              Monitoring & Observability
            </h3>
            
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2 code-font">
                  <Monitor className="w-8 h-8 mx-auto mb-2" />
                  24/7
                </div>
                <div className="text-sm text-muted-foreground">System Monitoring</div>
                <div className="text-xs text-muted-foreground/70 mt-1">CloudWatch + Custom metrics</div>
              </div>
              
              <div className="text-center">
                <div className="text-4xl font-bold text-accent mb-2 code-font">
                  <Zap className="w-8 h-8 mx-auto mb-2" />
                  &lt;2s
                </div>
                <div className="text-sm text-muted-foreground">Alert Response</div>
                <div className="text-xs text-muted-foreground/70 mt-1">Automated incident detection</div>
              </div>
              
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2 code-font">
                  <Shield className="w-8 h-8 mx-auto mb-2" />
                  99.9%
                </div>
                <div className="text-sm text-muted-foreground">Service Availability</div>
                <div className="text-xs text-muted-foreground/70 mt-1">SLA compliance maintained</div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 text-left">
              <div className="glass-card p-6 rounded-lg">
                <h4 className="text-lg font-semibold mb-4 text-primary code-font">
                  Performance Metrics
                </h4>
                <ul className="space-y-2 text-sm">
                  <li className="flex justify-between">
                    <span>API Response Time (P95)</span>
                    <span className="text-primary font-mono">50ms</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Memory Usage</span>
                    <span className="text-accent font-mono">65%</span>
                  </li>
                  <li className="flex justify-between">
                    <span>CPU Utilization</span>
                    <span className="text-primary font-mono">45%</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Error Rate</span>
                    <span className="text-green-400 font-mono">0.01%</span>
                  </li>
                </ul>
              </div>
              
              <div className="glass-card p-6 rounded-lg">
                <h4 className="text-lg font-semibold mb-4 text-accent code-font">
                  Deployment Stats
                </h4>
                <ul className="space-y-2 text-sm">
                  <li className="flex justify-between">
                    <span>Deployments/Week</span>
                    <span className="text-primary font-mono">12</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Success Rate</span>
                    <span className="text-green-400 font-mono">99.2%</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Rollback Time</span>
                    <span className="text-accent font-mono">3m 20s</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Zero Downtime</span>
                    <span className="text-primary font-mono">✅</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DevOpsSection;