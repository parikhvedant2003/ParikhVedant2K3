import { Button } from "@/components/ui/button";
import { Download, Mail, Code2 } from "lucide-react";

export default function Hero() {
  const handleDownloadResume = () => {
    // In production, this would download the actual PDF resume
    window.open("https://www.linkedin.com/in/parikhvedant2003/", "_blank");
  };

  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section id="home" className="section-padding pt-32 bg-gradient-to-br from-background to-muted">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 text-center lg:text-left animate-fade-in">
            <h1 className="font-sans font-bold text-4xl sm:text-5xl lg:text-6xl text-foreground mb-4">
              Hi, I'm <span className="text-primary">Vedant Parikh</span>
            </h1>
            <h2 className="font-sans font-medium text-xl sm:text-2xl text-foreground mb-6">
              Software Engineer | Python Developer | AI/ML Enthusiast
            </h2>
            <p className="font-body text-lg text-muted-foreground mb-8 max-w-2xl">
              Computer Engineering Graduate building scalable Python solutions with expertise in AI/ML, NLP, and backend development. GATE CSE qualified with a passion for creating innovative data-driven applications.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                onClick={handleDownloadResume}
                className="bg-primary text-primary-foreground px-8 py-3 font-medium hover:bg-primary/90"
                data-testid="button-download-resume"
              >
                <Download className="w-4 h-4 mr-2" />
                Download Resume
              </Button>
              <Button
                variant="outline"
                onClick={scrollToContact}
                className="px-8 py-3 font-medium"
                data-testid="button-contact-me"
              >
                <Mail className="w-4 h-4 mr-2" />
                Contact Me
              </Button>
            </div>
          </div>
          <div className="flex-1 flex justify-center lg:justify-end">
            <div className="relative w-80 h-80 bg-gradient-to-br from-primary/10 to-accent rounded-full flex items-center justify-center">
              <div className="w-64 h-64 bg-card rounded-full border border-border flex items-center justify-center shadow-lg">
                <Code2 className="w-24 h-24 text-primary" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
