import { Card, CardContent } from "@/components/ui/card";
import { 
  Code2, 
  TrendingUp, 
  Server, 
  Flame, 
  Zap, 
  FlaskConical, 
  Calculator, 
  Brain, 
  Eye, 
  Database, 
  GitBranch, 
  Globe, 
  Bug,
  ClipboardList // ✅ new icon for Jira
} from "lucide-react";
import { SiPython, SiJavascript, SiAmazon, SiDocker, SiMongodb, SiJira } from "react-icons/si"; // ✅ added MongoDB & Jira

const skillCategories = [
  {
    title: "Languages & Frameworks",
    icon: <Code2 className="w-6 h-6" />,
    skills: [
      { name: "Python", icon: <SiPython className="w-6 h-6" /> },
      { name: "C/C++", icon: <Code2 className="w-6 h-6" /> },
      { name: "JavaScript", icon: <SiJavascript className="w-6 h-6" /> },
      { name: "Django", icon: <Flame className="w-6 h-6" /> },
      { name: "FastAPI", icon: <Zap className="w-6 h-6" /> },
      { name: "Flask", icon: <FlaskConical className="w-6 h-6" /> },
    ],
  },
  {
    title: "Data & Analytics",
    icon: <TrendingUp className="w-6 h-6" />,
    skills: [
      { name: "Pandas", icon: <Calculator className="w-6 h-6" /> },
      { name: "NumPy", icon: <Calculator className="w-6 h-6" /> },
      { name: "NLP (spaCy)", icon: <Brain className="w-6 h-6" /> },
      { name: "OCR (Tesseract)", icon: <Eye className="w-6 h-6" /> },
    ],
  },
  {
    title: "Infrastructure & Tools",
    icon: <Server className="w-6 h-6" />,
    skills: [
      { name: "AWS", icon: <SiAmazon className="w-6 h-6" /> },
      { name: "Docker", icon: <SiDocker className="w-6 h-6" /> },
      { name: "SQL/NoSQL", icon: <Database className="w-6 h-6" /> },
      { name: "MongoDB", icon: <SiMongodb className="w-6 h-6" /> }, // ✅ new
      { name: "Git", icon: <GitBranch className="w-6 h-6" /> },
      { name: "Nginx", icon: <Globe className="w-6 h-6" /> },
      { name: "Postman", icon: <Bug className="w-6 h-6" /> },
      { name: "Jira", icon: <SiJira className="w-6 h-6" /> }, // ✅ new
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="section-padding bg-muted">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-sans font-bold text-3xl sm:text-4xl text-center text-foreground mb-12">
          Technical Skills
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <Card key={categoryIndex} className="bg-card shadow-sm border border-border">
              <CardContent className="p-6">
                <h3 className="font-sans font-semibold text-xl text-foreground mb-4 flex items-center">
                  <span className="text-primary mr-3">{category.icon}</span>
                  {category.title}
                </h3>
                <div className={`grid gap-4 ${category.skills.length > 4 ? 'grid-cols-2' : 'grid-cols-1'}`}>
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skillIndex}
                      className="skill-icon flex items-center p-3 bg-accent rounded-lg cursor-pointer"
                      data-testid={`skill-${skill.name.toLowerCase().replace(/[^\w]/g, '-')}`}
                    >
                      <span className="text-primary mr-3">{skill.icon}</span>
                      <span className="font-medium text-foreground">{skill.name}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
