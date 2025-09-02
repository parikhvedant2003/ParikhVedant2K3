import { Card, CardContent } from "@/components/ui/card";
import { Trophy, Medal, Star, Award } from "lucide-react";
import { SiPython } from "react-icons/si";

const achievements = [
  {
    title: "GATE CSE Qualified",
    subtitle: "2023 & 2024 - Computer Science & Engineering",
    icon: <Trophy className="w-8 h-8" />,
  },
  {
    title: "5⭐ Python Coder",
    subtitle: "HackerRank Platform",
    icon: <SiPython className="w-8 h-8" />,
  },
  {
    title: "3⭐ Coder (Rating: 1719)",
    subtitle: "CodeChef Platform",
    icon: <Star className="w-8 h-8" />,
  },
  {
    title: "Global Rank 60",
    subtitle: "CodeChef August Long Challenge 2022",
    icon: <Medal className="w-8 h-8" />,
  },
];

export default function Achievements() {
  return (
    <section className="section-padding bg-muted">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-sans font-bold text-3xl sm:text-4xl text-center text-foreground mb-12">
          Achievements & Certifications
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {achievements.map((achievement, index) => (
            <Card 
              key={index} 
              className="bg-card shadow-sm border border-border hover:shadow-md transition-shadow duration-300"
              data-testid={`achievement-card-${index}`}
            >
              <CardContent className="p-6 flex items-center">
                <div className="bg-primary/10 rounded-full p-4 mr-4 flex-shrink-0">
                  <div className="text-primary">{achievement.icon}</div>
                </div>
                <div>
                  <h3 className="font-sans font-semibold text-foreground mb-1">
                    {achievement.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {achievement.subtitle}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
