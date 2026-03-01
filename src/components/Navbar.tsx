import dashwiseIcon from "@/assets/dashwise-icon.svg";
import { Github, BookOpen } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-subtle">
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        <a href="#" className="flex items-center gap-3">
          <img src={dashwiseIcon} alt="dashwise" className="h-8 w-8" />
          <span className="font-display text-lg font-semibold text-foreground">dashwise</span>
        </a>
        <div className="flex items-center gap-2">
          <a
            href="https://github.com/andreasmolnardev/dashwise"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            <Github className="h-4 w-4" />
            <span className="hidden sm:inline">GitHub</span>
          </a>
          <a
            href="https://github.com/andreasmolnardev/dashwise#installation"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
          >
            <BookOpen className="h-4 w-4" />
            Get Started
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
