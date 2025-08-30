import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Building } from "lucide-react";

const ExperienceSection = () => {
  const experiences = [
    {
      company: "6 Livo Technologies Pvt. Ltd.",
      role: "Software Engineer",
      duration: "2025 - Present",
      location: "Kolkata, India",
      type: "Full-time",
      description: "Leading backend development initiatives for scalable enterprise applications using Java and SpringBoot ecosystem.",
      achievements: [
        "‣ Architected and implemented microservices-based backend systems serving 100K+ users",
        "‣ Reduced API response times by 60% through optimization and caching strategies",
        "‣ Implemented event-driven architecture using Apache Kafka for real-time data processing",
        "‣ Set up CI/CD pipelines with GitHub Actions, reducing deployment time by 80%",
        "‣ Mentored junior developers and conducted code reviews maintaining 95% code quality score"
      ],

      technologies: ["Java", "SpringBoot", "AWS", "Docker", "Kafka", "MySQL", "DynamoDB"]
    },
    {
      company: "Agnik International Pvt Ltd.",
      role: "Junior Software Developer",
      duration: "March 2024 - December 2024",
      location: "Kolkata, India",
      type: "Full-time",
      description: "Developed and maintained Java-based web applications with focus on backend API development and database integration.",
      achievements: [
        "‣ Built RESTful APIs using Spring Framework serving multiple client applications",
        "‣ Optimized database queries resulting in 45% performance improvement",
        "‣ Collaborated with frontend teams to design and implement robust API contracts",
        "‣ Participated in agile development cycles with 2-week sprints",
        "‣ Implemented unit and integration tests achieving 85% code coverage"
      ],

      technologies: ["Dot Net", "OOps", "MySQL", "Git"]
    },
    {
      company: "BasketHunt Pvt Ltd.",
      role: "Web Development Intern",
      duration: "Winter 2022",
      location: "Remote",
      type: "Internship",
      description: "Gained hands-on experience in frontend development with emphasis on web technologies and modern development practices.",
      achievements: [
        "‣ Developed REST APIs for an e-commerce platform using React",
        "‣ Implemented responsive design and cross-browser compatibility",
        "‣ Collaborated with cross-functional teams to deliver high-quality code",
        "‣ Participated in daily standups and sprint planning sessions"
      ],

      technologies: ["Html", "React", "JavaScript", "Git"]
    }
  ];

  return (
    <section id="experience" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 code-font">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            My professional journey in backend software engineering, focusing on building
            scalable systems and delivering high-quality solutions.
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-border"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
              >
                {/* Timeline dot */}
                <div className="absolute left-8 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background z-10 shadow-glow"></div>

                {/* Content card */}
                <div className={`w-full md:w-1/2 ml-16 md:ml-0 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                  <Card className="glow-card p-6 hover:scale-105 transition-all duration-300">
                    <CardContent className="p-0">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <div className="flex items-center gap-2 mb-2">
                            <Building className="h-4 w-4 text-primary" />
                            <h3 className="text-xl font-bold text-foreground">{exp.company}</h3>
                            <Badge variant="secondary" className="text-xs">
                              {exp.type}
                            </Badge>
                          </div>
                          <h4 className="text-lg font-semibold text-primary mb-2">{exp.role}</h4>
                        </div>
                      </div>

                      <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          <span>{exp.duration}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="h-4 w-4" />
                          <span>{exp.location}</span>
                        </div>
                      </div>

                      <p className="text-muted-foreground mb-4 leading-relaxed">
                        {exp.description}
                      </p>

                      <div className="mb-4">
                        <h5 className="text-sm font-semibold text-foreground mb-2">Key Achievements:</h5>
                        <ul className="space-y-1">
                          {exp.achievements.map((achievement, achIndex) => (
                            <li key={achIndex} className="text-sm text-muted-foreground">
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech) => (
                          <Badge
                            key={tech}
                            variant="outline"
                            className="text-xs bg-primary/5 border-primary/20 text-primary hover:bg-primary/10"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;