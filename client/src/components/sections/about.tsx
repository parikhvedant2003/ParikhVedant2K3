import { Card, CardContent } from "@/components/ui/card";

export default function About() {
  return (
    <section id="about" className="section-padding bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-sans font-bold text-3xl sm:text-4xl text-center text-foreground mb-12">
          About Me
        </h2>
        <Card className="bg-card shadow-sm border border-border">
          <CardContent className="p-8">
            <div className="space-y-6">
              <p className="font-body text-lg text-foreground leading-relaxed text-justify">
                Hi, I'm <strong>Vedant Parikh</strong>, a Software Engineer passionate about building robust backend systems that solve real-world problems. Currently working at Genesis AI, I specialize in crafting scalable Python solutions with Django, Flask, and FastAPI that transform complex financial data into actionable insights.
              </p>
              <p className="font-body text-lg text-foreground leading-relaxed text-justify">
                I specialize in creating seamless, scalable solutions with the MERN stack. From crafting user-friendly web apps to building robust platforms, I love bringing ideas to life and continuously improving my skills. My journey in tech is all about exploring new challenges, learning from every project, and turning complex problems into elegant solutions. If you're looking for someone who's eager to innovate, let's connect and create something amazing together!
              </p>
              <p className="font-body text-lg text-foreground leading-relaxed text-justify">
                My expertise spans across backend development, automation, and scalable system design. I'm passionate about clean, impactful code and always curious to explore emerging technologies like Mojo. When I'm not building production systems, you'll find me solving algorithmic challenges on competitive platforms or diving deep into new frameworks that push the boundaries of what's possible.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
