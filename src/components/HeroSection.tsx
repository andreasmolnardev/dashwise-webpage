import { motion } from "framer-motion";
import { Github, ArrowDown } from "lucide-react";
import screenshot from "@/assets/screenshot.png";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-20">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <img src={heroBg} alt="" className="h-full w-full object-cover opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/30 to-background" />
      </div>

      <div className="container mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-3xl"
        >
          <div className="mb-6 flex flex-wrap items-center justify-center gap-3">
            <span className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-sm text-muted-foreground">
              <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
              Open Source
            </span>
            <span className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-sm text-muted-foreground">
              <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
              Self Hosted
            </span>
            <span className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-sm text-muted-foreground">
              <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
              Actively Developed
            </span>
          </div>

          <h1 className="mb-6 text-5xl font-bold leading-tight tracking-tight sm:text-6xl lg:text-7xl">
            Your Homelab,{" "}
            <span className="text-gradient">in one place</span>
          </h1>

          <p className="mx-auto mb-10 max-w-xl text-lg text-muted-foreground leading-relaxed">
            dashwise is an all-in-one homelab dashboard with built-in auth, link management,
            widgets, RSS feeds, integrations, and a beautiful glassmorphic UI.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href="https://github.com/andreasmolnardev/dashwise#installation"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-xl bg-primary px-8 py-3 text-base font-semibold text-primary-foreground transition-all hover:opacity-90 glow-accent"
            >
              Get Started
            </a>
            <a
              href="https://github.com/andreasmolnardev/dashwise"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-xl glass px-8 py-3 text-base font-medium text-foreground transition-all hover:bg-secondary/50"
            >
              <Github className="h-5 w-5" />
              View on GitHub
            </a>
          </div>
        </motion.div>

        {/* Screenshot */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3 }}
          className="mx-auto mt-16 max-w-5xl"
        >
          <div className="glass rounded-2xl p-2 glow-accent">
            <img
              src={screenshot}
              alt="dashwise dashboard screenshot"
              className="w-full rounded-xl"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="mt-12 mb-8"
        >
          <ArrowDown className="mx-auto h-5 w-5 text-muted-foreground animate-bounce" />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
