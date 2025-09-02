import { SiLinkedin, SiGithub, SiX, SiInstagram } from "react-icons/si";

const socialLinks = [
  {
    icon: <SiLinkedin className="w-5 h-5" />,
    href: "https://www.linkedin.com/in/parikhvedant2003/",
    label: "LinkedIn",
  },
  {
    icon: <SiGithub className="w-5 h-5" />,
    href: "https://github.com/parikhvedant2003",
    label: "GitHub",
  },
  {
    icon: <SiX className="w-5 h-5" />,
    href: "https://twitter.com/ParikhVedant2k3",
    label: "Twitter",
  },
  {
    icon: <SiInstagram className="w-5 h-5" />,
    href: "https://www.instagram.com/parikhvedant2003/",
    label: "Instagram",
  },
];

export default function Footer() {
  return (
    <footer className="bg-card border-t border-border py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-4 md:mb-0">
            <p className="font-body text-muted-foreground">
              © 2024 Vedant Parikh. All rights reserved.
            </p>
          </div>
          <div className="flex space-x-6">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors duration-200"
                aria-label={link.label}
                data-testid={`social-link-${link.label.toLowerCase()}`}
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
