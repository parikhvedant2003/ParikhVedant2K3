import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Mail, Linkedin, Github, Phone, Send } from "lucide-react";
import { SiX, SiInstagram } from "react-icons/si";

const contactInfo = [
  {
    icon: <Mail className="w-5 h-5" />,
    title: "Email",
    value: "parikhvedant2003@gmail.com",
    href: "mailto:parikhvedant2003@gmail.com",
  },
  {
    icon: <Linkedin className="w-5 h-5" />,
    title: "LinkedIn",
    value: "in/parikhvedant2003",
    href: "https://www.linkedin.com/in/parikhvedant2003/",
  },
  {
    icon: <Github className="w-5 h-5" />,
    title: "GitHub",
    value: "parikhvedant2003",
    href: "https://github.com/parikhvedant2003",
  },
  {
    icon: <Phone className="w-5 h-5" />,
    title: "Phone",
    value: "+91 9428637251",
    href: "tel:+919428637251" ,
  },
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate API call
      
      toast({
        title: "Message sent successfully!",
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      toast({
        title: "Error sending message",
        description: "Please try again or contact me directly via email.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section-padding bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-sans font-bold text-3xl sm:text-4xl text-center text-foreground mb-12">
          Get In Touch
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-6">
            <div>
              <h3 className="font-sans font-semibold text-xl text-foreground mb-6">
                Let's Connect
              </h3>
              <p className="font-body text-muted-foreground mb-8 leading-relaxed text-justify">
                I'm always interested in discussing new opportunities, collaborating on exciting projects, or simply connecting with fellow developers. Feel free to reach out!
              </p>
            </div>
            
            <div className="space-y-4">
              {contactInfo.map((contact, index) => (
                <div
                  key={index}
                  className="flex items-center p-4 bg-card rounded-lg border border-border hover:bg-accent transition-colors duration-200"
                  data-testid={`contact-info-${index}`}
                >
                  {contact.href ? (
                    <a 
                      href={contact.href} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center w-full"
                    >
                      <div className="text-primary mr-4">{contact.icon}</div>
                      <div>
                        <div className="font-medium text-foreground">{contact.title}</div>
                        <div className="text-sm text-muted-foreground">{contact.value}</div>
                      </div>
                    </a>
                  ) : (
                    <>
                      <div className="text-primary mr-4">{contact.icon}</div>
                      <div>
                        <div className="font-medium text-foreground">{contact.title}</div>
                        <div className="text-sm text-muted-foreground">{contact.value}</div>
                      </div>
                    </>
                  )}
                </div>
              ))}
            </div>
          </div>
          
          {/* Contact Form */}
          <Card className="bg-card shadow-sm border border-border">
            <CardContent className="p-6">
              <h3 className="font-sans font-semibold text-xl text-foreground mb-6">
                Send a Message
              </h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Label htmlFor="name" className="text-sm font-medium text-foreground">
                    Name
                  </Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="mt-2"
                    data-testid="input-name"
                  />
                </div>
                
                <div>
                  <Label htmlFor="email" className="text-sm font-medium text-foreground">
                    Email
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="mt-2"
                    data-testid="input-email"
                  />
                </div>
                
                <div>
                  <Label htmlFor="subject" className="text-sm font-medium text-foreground">
                    Subject
                  </Label>
                  <Input
                    id="subject"
                    name="subject"
                    type="text"
                    required
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="mt-2"
                    data-testid="input-subject"
                  />
                </div>
                
                <div>
                  <Label htmlFor="message" className="text-sm font-medium text-foreground">
                    Message
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    value={formData.message}
                    onChange={handleInputChange}
                    className="mt-2 resize-none"
                    data-testid="textarea-message"
                  />
                </div>
                
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-primary text-primary-foreground font-medium hover:bg-primary/90"
                  data-testid="button-submit-contact"
                >
                  <Send className="w-4 h-4 mr-2" />
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
