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
                Hey there! I'm <strong>Vedant</strong>, a Python developer who loves turning messy data into meaningful insights in the fintech world. I spend my days crafting <strong>backend systems</strong> with Django, Flask, and FastAPI that actually solve real problems – from extracting financial data from complex documents to building APIs that scale beautifully.
              </p>
              <p className="font-body text-lg text-foreground leading-relaxed text-justify">
                What drives me? <strong>Automation and clean code</strong>. There's something deeply satisfying about writing elegant solutions that make complex processes simple. Whether it's processing thousands of documents with NLP models or designing robust data pipelines, I'm all about creating systems that just work. I'm also curious about emerging technologies like <strong>Mojo</strong> and always exploring what's next in the Python ecosystem.
              </p>
              <p className="font-body text-lg text-foreground leading-relaxed text-justify">
                When I'm not coding, you'll find me tackling algorithm challenges on <strong>CodeChef</strong> (3⭐ rating) and <strong>HackerRank</strong> (5⭐ Python), or diving deep into new frameworks and tools. I believe great software comes from understanding both the technical details and the human problems we're solving. <strong>GATE CSE qualified</strong> and always ready for the next interesting challenge!
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
