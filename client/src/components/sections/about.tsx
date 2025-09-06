import { Card, CardContent } from "@/components/ui/card";
import profilePhoto from "@assets/profile-photo.jpg";

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
              
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <span className="text-primary mt-1 text-lg">•</span>
                  <p className="font-body text-base text-foreground">Specialize in <strong>Python development</strong> with Django, Flask, and FastAPI</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-primary mt-1 text-lg">•</span>
                  <p className="font-body text-base text-foreground">Build <strong>financial data extraction systems</strong> and automation tools</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-primary mt-1 text-lg">•</span>
                  <p className="font-body text-base text-foreground">Passionate about <strong>clean code</strong> and emerging technologies like Mojo</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-primary mt-1 text-lg">•</span>
                  <p className="font-body text-base text-foreground"><strong>GATE CSE qualified</strong> with strong problem-solving skills</p>
                </div>
              </div>
              
              <p className="font-body text-lg text-foreground leading-relaxed text-justify mt-6">
                Let's connect and create something amazing together!
              </p>
            </div>
          </div>
          
          {/* Right side - Photo */}
          <div className="lg:w-1/2 flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-64 h-80 rounded-2xl shadow-lg overflow-hidden">
                <img 
                  src={profilePhoto} 
                  alt="Vedant Parikh - Software Engineer" 
                  className="w-full h-full object-cover object-center"
                  data-testid="profile-photo"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
