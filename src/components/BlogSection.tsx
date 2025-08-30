import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, ArrowRight, MessageSquare, TrendingUp } from "lucide-react";

const BlogSection = () => {
  const blogPosts = [
    {
      title: "Debugging Kafka Consumer Lag in Production",
      excerpt: "Deep dive into identifying and resolving Kafka consumer lag issues that were causing 30-second delays in our order processing pipeline. Learn about partition rebalancing, consumer group optimization, and monitoring strategies.",
      date: "2024-01-15",
      readTime: "8 min read",
      category: "Performance",
      views: "2.4k",
      featured: true
    },
    {
      title: "Implementing Circuit Breaker Pattern in Spring Boot",
      excerpt: "How we improved system resilience by implementing circuit breakers using Resilience4j. Covers configuration, monitoring, and real-world scenarios where this pattern saved our production systems.",
      date: "2024-01-08",
      readTime: "6 min read",
      category: "Architecture",
      views: "1.8k",
      featured: false
    },
    {
      title: "Zero-Downtime Database Migrations at Scale",
      excerpt: "Strategies for performing database schema changes on live systems handling millions of transactions. Techniques including blue-green deployments, feature flags, and backward compatibility.",
      date: "2023-12-22",
      readTime: "10 min read",
      category: "DevOps",
      views: "3.1k",
      featured: true
    },
    {
      title: "Optimizing JVM Memory for Containerized Applications",
      excerpt: "Best practices for configuring JVM memory settings in Docker containers. Covers heap sizing, garbage collection tuning, and monitoring memory usage in Kubernetes environments.",
      date: "2023-12-10",
      readTime: "7 min read",
      category: "Performance",
      views: "1.5k",
      featured: false
    }
  ];

  const techTopics = [
    { name: "System Design", count: 12 },
    { name: "Performance", count: 8 },
    { name: "AWS", count: 6 },
    { name: "Spring Boot", count: 10 },
    { name: "DevOps", count: 7 },
    { name: "Microservices", count: 9 }
  ];

  return (
    <section id="blog" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 code-font">
            Technical <span className="gradient-text">Blog</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto">
            Sharing real-world backend engineering insights, production debugging stories, 
            and lessons learned from building scalable systems at enterprise scale.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Blog Content */}
          <div className="lg:col-span-2 space-y-8">
            {blogPosts.map((post, index) => (
              <Card key={index} className={`glass-card group hover:scale-[1.02] transition-all duration-300 ${post.featured ? 'border-primary/30' : ''}`}>
                <CardContent className="p-6">
                  {post.featured && (
                    <Badge className="mb-4 bg-gradient-primary border-0 text-primary-foreground">
                      <TrendingUp className="w-3 h-3 mr-1" />
                      Featured Post
                    </Badge>
                  )}
                  
                  <div className="flex items-center gap-4 mb-4">
                    <Badge variant="outline" className="glass-card border-accent/30 text-accent">
                      {post.category}
                    </Badge>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="w-4 h-4" />
                      {new Date(post.date).toLocaleDateString()}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Clock className="w-4 h-4" />
                      {post.readTime}
                    </div>
                  </div>

                  <h3 className="text-xl font-semibold mb-3 text-foreground code-font group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <MessageSquare className="w-4 h-4" />
                      {post.views} views
                    </div>
                    
                    <Button variant="ghost" size="sm" className="group/btn">
                      Read More
                      <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}

            {/* Load More */}
            <div className="text-center pt-8">
              <Button className="btn-gradient px-8">
                Load More Posts
              </Button>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* About the Blog */}
            <Card className="glass-card">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 code-font neon-text">
                  About This Blog
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  I write about real backend engineering challenges I've faced in production. 
                  Each post covers practical solutions, performance optimizations, and 
                  lessons learned from building scalable systems.
                </p>
                <div className="terminal-window p-4 rounded-lg">
                  <div className="terminal-text text-xs">
                    <span className="text-green-400">blog@debika:~$</span> grep -r "production" posts/
                    <br />
                    <span className="text-blue-400">Finding: 47 matches</span>
                    <br />
                    <span className="text-yellow-400">Topics: debugging, scaling, optimization</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Popular Topics */}
            <Card className="glass-card">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 code-font neon-text">
                  Popular Topics
                </h3>
                <div className="space-y-3">
                  {techTopics.map((topic, index) => (
                    <div key={index} className="flex items-center justify-between p-3 glass-card rounded-lg hover:border-primary/30 transition-colors cursor-pointer">
                      <span className="text-sm font-medium">{topic.name}</span>
                      <Badge variant="outline" className="text-xs bg-primary/10 border-primary/20 text-primary">
                        {topic.count}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Newsletter Signup */}
            <Card className="glass-card border-accent/30">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 code-font text-accent">
                  Engineering Newsletter
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  Get weekly insights on backend engineering, system design patterns, 
                  and production debugging techniques.
                </p>
                <div className="space-y-3">
                  <input 
                    type="email" 
                    placeholder="your.email@company.com"
                    className="w-full px-3 py-2 bg-background/50 border border-border rounded-lg text-sm focus:border-accent focus:outline-none font-mono"
                  />
                  <Button className="w-full bg-gradient-accent hover:opacity-90">
                    Subscribe
                  </Button>
                </div>
                <p className="text-xs text-muted-foreground mt-3">
                  Join 500+ backend engineers. No spam, unsubscribe anytime.
                </p>
              </CardContent>
            </Card>

            {/* Recent Activity */}
            <Card className="glass-card">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4 code-font neon-text">
                  Recent Activity
                </h3>
                <div className="space-y-3 text-sm">
                  <div className="flex items-center gap-3 p-2 glass-card rounded">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-muted-foreground">Published new post on Kafka debugging</span>
                  </div>
                  <div className="flex items-center gap-3 p-2 glass-card rounded">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span className="text-muted-foreground">Updated circuit breaker implementation guide</span>
                  </div>
                  <div className="flex items-center gap-3 p-2 glass-card rounded">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                    <span className="text-muted-foreground">Added code examples to migration post</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;