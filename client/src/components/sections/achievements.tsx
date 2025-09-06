import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Trophy, Medal, Star, Award, ChevronLeft, ChevronRight, GraduationCap, Code, Zap } from "lucide-react";
import { SiPython } from "react-icons/si";
import { useState } from "react";

const achievements = [
  {
    title: "GATE CSE Qualified",
    subtitle: "2023 & 2024 - Computer Science & Engineering",
    icon: <Trophy className="w-8 h-8" />,
    category: "Academic"
  },
  {
    title: "5⭐ Python Coder",
    subtitle: "HackerRank Platform - Expert Level",
    icon: <SiPython className="w-8 h-8" />,
    category: "Programming"
  },
  {
    title: "3⭐ Coder (Rating: 1719)",
    subtitle: "CodeChef Platform - Expert Level",
    icon: <Star className="w-8 h-8" />,
    category: "Competitive Programming"
  },
  {
    title: "Global Rank 60",
    subtitle: "CodeChef August Long Challenge 2022",
    icon: <Medal className="w-8 h-8" />,
    category: "Competition"
  },
  {
    title: "B.Tech Computer Engineering",
    subtitle: "CGPA: 8.35/10.0 - Dharmsinh Desai University",
    icon: <GraduationCap className="w-8 h-8" />,
    category: "Education"
  },
  {
    title: "Full Stack Development",
    subtitle: "MERN Stack & Python Backend Expertise",
    icon: <Code className="w-8 h-8" />,
    category: "Skills"
  },
  {
    title: "Problem Solver",
    subtitle: "500+ Problems Solved Across Platforms",
    icon: <Zap className="w-8 h-8" />,
    category: "Programming"
  },
  {
    title: "Production Systems",
    subtitle: "Built & Deployed Scalable Applications",
    icon: <Award className="w-8 h-8" />,
    category: "Professional"
  },
];

export default function Achievements() {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const itemsPerPage = 4;
  const totalPages = Math.ceil(achievements.length / itemsPerPage);
  
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalPages);
  };
  
  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalPages) % totalPages);
  };
  
  const getCurrentAchievements = () => {
    const startIndex = currentIndex * itemsPerPage;
    return achievements.slice(startIndex, startIndex + itemsPerPage);
  };

  return (
    <section className="section-padding bg-muted">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-sans font-bold text-3xl sm:text-4xl text-center text-foreground mb-12">
          Achievements & Certifications
        </h2>
        
        <div className="relative">
          {/* Navigation Buttons */}
          <Button
            variant="ghost"
            size="icon"
            onClick={prevSlide}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 bg-background/80 backdrop-blur-sm hover:bg-background/90"
            data-testid="prev-achievements"
            aria-label="Previous achievements"
          >
            <ChevronLeft className="w-5 h-5" />
          </Button>
          
          <Button
            variant="ghost"
            size="icon"
            onClick={nextSlide}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 bg-background/80 backdrop-blur-sm hover:bg-background/90"
            data-testid="next-achievements"
            aria-label="Next achievements"
          >
            <ChevronRight className="w-5 h-5" />
          </Button>
          
          {/* Achievements Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-12">
            {getCurrentAchievements().map((achievement, index) => (
            <Card 
              key={index} 
              className="bg-card shadow-sm border border-border hover:shadow-md transition-all duration-300 hover:scale-105"
              data-testid={`achievement-card-${index}`}
            >
              <CardContent className="p-6 text-center">
                <div className="bg-primary/10 rounded-full p-4 mx-auto mb-4 w-fit">
                  <div className="text-primary">{achievement.icon}</div>
                </div>
                <div className="mb-2">
                  <span className="text-xs font-medium text-primary/80 bg-primary/10 px-2 py-1 rounded-full">
                    {achievement.category}
                  </span>
                </div>
                <h3 className="font-sans font-semibold text-foreground mb-2">
                  {achievement.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {achievement.subtitle}
                </p>
              </CardContent>
            </Card>
            ))}
          </div>
          
          {/* Dots Indicator */}
          <div className="flex justify-center items-center gap-2 mt-8">
            {Array.from({ length: totalPages }, (_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-colors ${
                  index === currentIndex ? "bg-primary" : "bg-muted-foreground/30"
                }`}
                data-testid={`achievement-carousel-dot-${index}`}
                aria-label={`Go to page ${index + 1} of achievements`}
                aria-current={index === currentIndex ? "page" : undefined}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
