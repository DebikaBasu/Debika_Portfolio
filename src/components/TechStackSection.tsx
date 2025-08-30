import { Card, CardContent } from "@/components/ui/card";
import {
  FaJava,
  FaAws,
  FaGitAlt,
  FaJs,
} from "react-icons/fa";
import {
  SiSpringboot,
  SiDocker,
  SiMysql,
  SiApachekafka,
  SiGithubactions,
  // SiMicrostrategy,
} from "react-icons/si";
import { motion } from "framer-motion";

// Floating animation variants
const floatingVariants = (duration: number) => ({
  initial: { y: 0 },
  animate: {
    y: [0, -10, 0],
    transition: {
      duration: duration,
      ease: "easeInOut",
      repeat: Infinity,
    },
  },
});

const TechStackSection = () => {
  const technologies = [
    {
      name: "Java",
      icon: <FaJava className="w-12 h-12 text-orange-500" />,
      category: "Language",
      delay: 3.5,
    },
    {
      name: "Spring Boot",
      icon: <SiSpringboot className="w-12 h-12 text-green-600" />,
      category: "Framework",
      delay: 3.5,
    },
    {
      name: "Docker",
      icon: <SiDocker className="w-12 h-12 text-sky-500" />,
      category: "Containerization",
      delay: 4,
    },
    {
      name: "AWS",
      icon: <FaAws className="w-12 h-12 text-yellow-500" />,
      category: "Cloud",
      delay: 4,
    },
    {
      name: "MySQL",
      icon: <SiMysql className="w-12 h-12 text-blue-700" />,
      category: "Database",
      delay: 3,
    },
    {
      name: "DynamoDB",
      icon: (
        <img
          src="\src\icons\ddb.png"
          alt="DynamoDB"
          className="w-16 h-16 object-contain"
        />
      ),
      category: "Database",
      delay: 4,
    },
    {
      name: "Git",
      icon: <FaGitAlt className="w-12 h-12 text-red-500" />,
      category: "Version Control",
      delay: 3.5,
    },
    {
      name: "Kafka",
      icon: <SiApachekafka className="w-12 h-12 text-gray-700" />,
      category: "Messaging",
      delay: 4,
    },
    {
      name: "Hibernate",
      icon: (
        <img
          src="\src\icons\hibernate.png"
          alt="Hibernate"
          className="w-12 h-12 object-contain"
        />
      ),
      category: "ORM",
      delay: 4,
    },
    {
      name: "JavaScript",
      icon: <FaJs className="w-12 h-12 text-yellow-400" />,
      category: "Language",
      delay: 3.5,
    },
    {
      name: "GitHub Actions",
      icon: <SiGithubactions className="w-12 h-12 text-blue-400" />,
      category: "CI/CD",
      delay: 4,
    },
    {
      name: "Microservices",
      icon: (
        <img
          src="\src\icons\microservices.png"
          alt="Hibernate"
          className="w-16 h-16 object-contain"
        />
      ),
      category: "Architecture",
      delay: 4,
    },
  ];

  return (
    <section id="tech-stack" className="py-20 px-6 bg-secondary/10">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 code-font">
            Technical <span className="gradient-text">Stack</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A comprehensive toolkit of modern technologies and frameworks I use to build
            robust, scalable backend systems and cloud-native applications.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {technologies.map((tech, index) => (
            <Card
              key={tech.name}
              className="tech-icon p-6 text-center cursor-pointer group transition-transform hover:scale-105"
            >
              <CardContent className="p-0 flex flex-col items-center justify-center space-y-3">
                <motion.div
                  // variants={floatingVariants(tech.delay ?? 3)}
                  initial="initial"
                  animate="animate"
                  className="transition-transform duration-300 group-hover:scale-110"
                >
                  {tech.icon}
                </motion.div>
                <h3 className="font-semibold text-lg group-hover:text-primary transition-colors duration-300">
                  {tech.name}
                </h3>
                <p className="text-sm text-muted-foreground">{tech.category}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Specializations Section */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-semibold mb-8 text-foreground">Key Specializations</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 rounded-lg bg-card border border-border">
              <h4 className="text-lg font-semibold mb-4 text-primary">Backend Development</h4>
              <ul className="text-muted-foreground space-y-2 text-left">
                <li>• RESTful API Design & Implementation</li>
                <li>• Microservices Architecture</li>
                <li>• Spring Boot & Spring Cloud</li>
                <li>• JPA/Hibernate ORM</li>
              </ul>
            </div>

            <div className="p-6 rounded-lg bg-card border border-border">
              <h4 className="text-lg font-semibold mb-4 text-accent">Cloud & DevOps</h4>
              <ul className="text-muted-foreground space-y-2 text-left">
                <li>• AWS Services (EC2, ECS, S3, SNS, SQS)</li>
                <li>• Docker Containerization</li>
                <li>• CI/CD Pipelines</li>
                <li>• Infrastructure as Code</li>
              </ul>
            </div>

            <div className="p-6 rounded-lg bg-card border border-border">
              <h4 className="text-lg font-semibold mb-4 text-primary">Data & Messaging</h4>
              <ul className="text-muted-foreground space-y-2 text-left">
                <li>• MySQL & DynamoDB</li>
                <li>• Apache Kafka Event Streaming</li>
                <li>• Database Design & Optimization</li>
                <li>• Event-Driven Architecture</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStackSection;
