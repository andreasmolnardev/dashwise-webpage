import dashwiseIcon from "@/assets/dashwise-icon.svg";
import { Github } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border/50 py-12">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-6 sm:flex-row">
        <div className="flex items-center gap-2">
          <img src={dashwiseIcon} alt="dashwise" className="h-6 w-6" />
          <span className="font-display text-sm font-medium text-muted-foreground">
            dashwise · GPL-3.0
          </span>
        </div>
        <a
          href="https://github.com/andreasmolnardev/dashwise"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          <Github className="h-4 w-4" />
          GitHub
        </a>
      </div>
    </footer>
  );
};

export default Footer;
