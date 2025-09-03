import { Card, CardContent } from "@/components/ui/card";

export default function About() {
  return (
    <section id="about" className="section-padding bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-sans font-bold text-3xl sm:text-4xl text-center text-foreground mb-12">
          About Me
        </h2>
        <div className="flex flex-col lg:flex-row gap-8 items-center">
          {/* Left side - Introduction */}
          <div className="lg:w-1/2 space-y-6">
            <div className="bg-primary/10 rounded-lg px-4 py-2 inline-block">
              <span className="font-sans font-medium text-primary">I'm Vedant</span>
            </div>
            <div className="space-y-1">
              <h3 className="font-sans font-semibold text-xl text-foreground">Software Engineer</h3>
            </div>
            <div className="space-y-4">
              <p className="font-body text-lg text-foreground leading-relaxed text-justify">
                Hi, I'm <strong>Vedant Parikh</strong>, a Software Engineer based in India. Currently working at Genesis AI, I'm passionate about building robust backend systems that make an impact.
              </p>
              <p className="font-body text-lg text-foreground leading-relaxed text-justify">
                I specialize in creating scalable Python solutions with Django, Flask, and FastAPI. From crafting financial data extraction systems to building automation tools, I love turning complex problems into elegant solutions.
              </p>
              <p className="font-body text-lg text-foreground leading-relaxed text-justify">
                My journey in tech is all about exploring new challenges, learning from every project, and continuously improving my skills. I'm passionate about clean, impactful code and always curious to explore emerging technologies like Mojo.
              </p>
              <p className="font-body text-lg text-foreground leading-relaxed text-justify">
                If you're looking for someone who's eager to innovate and solve real-world problems, let's connect and create something amazing together!
              </p>
            </div>
          </div>
          
          {/* Right side - Photo */}
          <div className="lg:w-1/2 flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-64 h-80 bg-gradient-to-br from-primary/20 to-primary/5 rounded-2xl shadow-lg flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-2xl font-bold text-primary">VP</span>
                  </div>
                  <p className="text-sm text-muted-foreground">Your photo here</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
