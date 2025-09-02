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
                I'm a passionate <strong>Software Engineer</strong> with a B.Tech in Computer Engineering from Dharmsinh Desai University (8.35 CGPA). Currently working at <strong>Genesis AI</strong>, I specialize in developing scalable backend solutions using Python, Django, and FastAPI.
              </p>
              <p className="font-body text-lg text-foreground leading-relaxed text-justify">
                My expertise lies in <strong>financial data extraction</strong>, <strong>NLP</strong>, and <strong>document processing</strong>. I've built production-grade systems that convert unstructured documents into actionable insights for FinTech clients, handling high-volume data environments with technologies like PyMuPDF, Pandas, and NumPy.
              </p>
              <p className="font-body text-lg text-foreground leading-relaxed text-justify">
                I'm <strong>GATE CSE qualified</strong> (2023 & 2024) and maintain high ratings on coding platforms: <strong>5⭐ Python on HackerRank</strong> and <strong>3⭐ on CodeChef</strong>. I'm passionate about building innovative solutions that bridge the gap between complex data and meaningful insights.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
