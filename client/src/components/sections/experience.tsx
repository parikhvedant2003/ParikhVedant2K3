import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap } from "lucide-react";

const experiences = [
  {
    title: "Software Engineer",
    company: "Genesis Artificial Intelligence",
    duration: "September 2023 - Present",
    type: "work",
    achievements: [
      "Engineered core financial data extraction logic using PyMuPDF and PyPDF2",
      "Built analyzer component for advanced computations and report generation",
      "Designed robust pipeline delivering insights in Excel and JSON formats",
    ],
  },
  {
    title: "Software Engineer",
    company: "Crest Data",
    duration: "November 2023 - August 2024",
    type: "work",
    achievements: [
      "Developed SaaS-based SIEM Migration Tool for cross-platform migrations",
      "Built RESTful APIs with FastAPI and ReactJS frontend components",
      "Enhanced Google Chronicle Platform with UDM configuration automation",
    ],
  },
  {
    title: "Software Engineer Intern",
    company: "TenUp Software Services",
    duration: "May 2023 - July 2023",
    type: "work",
    achievements: [
      "Implemented spaCy NLP models for automated resume parsing",
      "Deployed scalable RESTful APIs on Nginx Web Server",
      "Enabled real-time integration with HR systems",
    ],
  },
  {
    title: "B.Tech Computer Engineering",
    company: "Dharmsinh Desai University, Nadiad",
    duration: "2020 - 2024",
    type: "education",
    achievements: ["CGPA: 8.35/10.0"],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="section-padding bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-sans font-bold text-3xl sm:text-4xl text-center text-foreground mb-12">
          Experience & Education
        </h2>
        
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-border hidden lg:block"></div>
          
          {experiences.map((exp, index) => (
            <div key={index} className="relative mb-12">
              {/* Timeline dot */}
              <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary border-4 border-background rounded-full z-10"></div>
              
              <div className={`flex flex-col lg:flex-row gap-8 ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}>
                <div className="lg:w-1/2">
                  {index % 2 === 0 ? (
                    <Card className="bg-card shadow-sm border border-border" data-testid={`experience-card-${index}`}>
                      <CardContent className="p-6">
                        <div className="flex items-start gap-3 mb-3">
                          {exp.type === "education" && <GraduationCap className="w-5 h-5 text-primary mt-1" />}
                          <div>
                            <h3 className="font-sans font-semibold text-xl text-foreground mb-1">
                              {exp.title}
                            </h3>
                            <h4 className="font-medium text-primary mb-2">{exp.company}</h4>
                            <p className="text-sm text-muted-foreground mb-4">{exp.duration}</p>
                          </div>
                        </div>
                        <ul className="text-sm text-muted-foreground space-y-2">
                          {exp.achievements.map((achievement, achIndex) => (
                            <li key={achIndex} className="flex items-start">
                              <span className="text-primary mr-2 mt-1">•</span>
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  ) : null}
                </div>
                <div className="lg:w-1/2">
                  {index % 2 === 1 ? (
                    <Card className="bg-card shadow-sm border border-border" data-testid={`experience-card-${index}`}>
                      <CardContent className="p-6">
                        <div className="flex items-start gap-3 mb-3">
                          {exp.type === "education" && <GraduationCap className="w-5 h-5 text-primary mt-1" />}
                          <div>
                            <h3 className="font-sans font-semibold text-xl text-foreground mb-1">
                              {exp.title}
                            </h3>
                            <h4 className="font-medium text-primary mb-2">{exp.company}</h4>
                            <p className="text-sm text-muted-foreground mb-4">{exp.duration}</p>
                          </div>
                        </div>
                        <ul className="text-sm text-muted-foreground space-y-2">
                          {exp.achievements.map((achievement, achIndex) => (
                            <li key={achIndex} className="flex items-start">
                              <span className="text-primary mr-2 mt-1">•</span>
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  ) : null}
                </div>
              </div>
              
              {/* Mobile layout - show card always */}
              <div className="lg:hidden">
                <Card className="bg-card shadow-sm border border-border" data-testid={`experience-card-mobile-${index}`}>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-3 mb-3">
                      {exp.type === "education" && <GraduationCap className="w-5 h-5 text-primary mt-1" />}
                      <div>
                        <h3 className="font-sans font-semibold text-xl text-foreground mb-1">
                          {exp.title}
                        </h3>
                        <h4 className="font-medium text-primary mb-2">{exp.company}</h4>
                        <p className="text-sm text-muted-foreground mb-4">{exp.duration}</p>
                      </div>
                    </div>
                    <ul className="text-sm text-muted-foreground space-y-2">
                      {exp.achievements.map((achievement, achIndex) => (
                        <li key={achIndex} className="flex items-start">
                          <span className="text-primary mr-2 mt-1">•</span>
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
