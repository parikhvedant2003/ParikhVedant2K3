import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink, TrendingUp, Bot, ArrowRightLeft, Languages, MessageCircle, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

const projects = [
  {
    title: "ChitChat - RealTime Chat Application",
    description: "A secure and scalable realtime chat application built using Node.js, Socket.IO, Express, and JWT for backend authentication. Features user login/sign up with profile picture, live messaging, image sharing, and realtime online user tracking with seamless websocket communication.",
    technologies: ["Node.js", "Socket.IO", "Express", "JWT", "HTML", "Tailwind CSS", "JavaScript", "Axios"],
    icon: <MessageCircle className="w-6 h-6" />,
    impact: "Real-time communication with secure authentication and file sharing",
    githubUrl: "https://github.com/parikhvedant2003",
    featured: true,
  },
  {
    title: "AutoSift - Account Analysis Portal",
    description: "Financial data extraction platform that converts digitized documents into structured, analyzable data for banks and FinTech clients. Handles both searchable and scanned documents with advanced analytics.",
    technologies: ["Python", "Django", "PyMuPDF", "Pandas", "NumPy"],
    icon: <TrendingUp className="w-6 h-6" />,
    impact: "Production-grade analytics for high-volume data environments",
    githubUrl: "https://github.com/parikhvedant2003",
    featured: true,
  },
  {
    title: "ResumeParser - ML-Based Extraction",
    description: "Machine Learning solution for automated resume parsing and information extraction. Streamlines recruitment by intelligently extracting candidate details like contact info, skills, and experience.",
    technologies: ["Flask", "spaCy", "NLP", "Scikit-learn", "Nginx"],
    icon: <Bot className="w-6 h-6" />,
    impact: "Automated recruitment process with real-time HR integration",
    githubUrl: "https://github.com/parikhvedant2003",
    featured: true,
  },
  {
    title: "SIEM Migration Tool",
    description: "SaaS platform enabling seamless migration of alerts, dashboards, and visualizations across SIEM platforms. Developed alert migration module for Splunk to Elastic transfers.",
    technologies: ["FastAPI", "ReactJS", "RESTful APIs", "Splunk", "Elastic"],
    icon: <ArrowRightLeft className="w-6 h-6" />,
    impact: "Improved automation and data integrity in migration workflows",
    githubUrl: "https://github.com/parikhvedant2003",
    featured: true,
  },
  {
    title: "OCR & Translator Toolkit",
    description: "Versatile text processing tool integrating translation, image text extraction (OCR), and speech-to-text conversion into a unified interface for automation and accessibility use cases.",
    technologies: ["OpenCV", "Tesseract", "GoogleTrans", "Speech Recognition"],
    icon: <Languages className="w-6 h-6" />,
    impact: "Real-time translation, OCR, and speech-to-text capabilities",
    githubUrl: "https://github.com/parikhvedant2003",
    featured: false,
  },
];

export default function Projects() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showAll, setShowAll] = useState(false);
  
  const featuredProjects = projects.filter(p => p.featured);
  const itemsPerPage = 2;
  const totalPages = Math.ceil(featuredProjects.length / itemsPerPage);
  
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalPages);
  };
  
  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalPages) % totalPages);
  };
  
  const getCurrentProjects = () => {
    if (showAll) return projects;
    const startIndex = currentIndex * itemsPerPage;
    return featuredProjects.slice(startIndex, startIndex + itemsPerPage);
  };

  return (
    <section id="projects" className="section-padding bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-sans font-bold text-3xl sm:text-4xl text-foreground mb-4">
            {showAll ? "All Projects" : "Featured Projects"}
          </h2>
          <Button 
            onClick={() => setShowAll(!showAll)}
            variant="outline"
            className="mb-8"
            data-testid="toggle-projects-view"
          >
            {showAll ? "Show Featured Only" : "See More Projects"}
          </Button>
        </div>
        
        {!showAll && (
          <div className="flex justify-center items-center gap-4 mb-8">
            <Button
              variant="ghost"
              size="icon"
              onClick={prevSlide}
              disabled={totalPages <= 1}
              data-testid="prev-projects"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>
            <div className="flex gap-2">
              {Array.from({ length: totalPages }, (_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-colors ${
                    index === currentIndex ? "bg-primary" : "bg-muted-foreground/30"
                  }`}
                  data-testid={`carousel-dot-${index}`}
                />
              ))}
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={nextSlide}
              disabled={totalPages <= 1}
              data-testid="next-projects"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>
        )}
        
        <div className={`grid gap-8 ${showAll ? "grid-cols-1 lg:grid-cols-2 xl:grid-cols-3" : "grid-cols-1 lg:grid-cols-2"}`}>
          {getCurrentProjects().map((project, index) => (
            <Card 
              key={index} 
              className="project-card bg-card shadow-sm border border-border hover:shadow-lg transition-all duration-300"
              data-testid={`project-card-${index}`}
            >
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="text-primary">{project.icon}</div>
                    <h3 className="font-sans font-semibold text-xl text-foreground">
                      {project.title}
                    </h3>
                  </div>
                  <div className="flex gap-2">
                    <Button
                      variant="ghost"
                      size="icon"
                      asChild
                      data-testid={`button-github-${index}`}
                    >
                      <a 
                        href={project.githubUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary"
                      >
                        <Github className="w-5 h-5" />
                      </a>
                    </Button>
                  </div>
                </div>
                
                <p className="font-body text-muted-foreground mb-4 leading-relaxed text-justify">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <Badge 
                      key={tech} 
                      variant="secondary" 
                      className="bg-primary/10 text-primary hover:bg-primary/20"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
                
                <div className="text-sm text-muted-foreground flex items-center">
                  {project.icon}
                  <span className="ml-2">{project.impact}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
