import { motion } from "framer-motion";
import { Copy, Terminal } from "lucide-react";
import { toast } from "sonner";

const code = `# Clone & run with Docker
docker compose up -d`;

const InstallSection = () => {
  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    toast.success("Copied to clipboard!");
  };

  return (
    <section className="relative py-32" id="install">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-2xl text-center"
        >
          <h2 className="mb-4 text-4xl font-bold tracking-tight">
            Up and running in seconds
          </h2>
          <p className="mb-10 text-muted-foreground">
            Grab the docker compose file, configure your environment variables, and deploy.
          </p>

          <div className="glass rounded-2xl p-1 text-left glow-accent">
            <div className="flex items-center justify-between rounded-t-xl bg-secondary/40 px-4 py-2">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Terminal className="h-4 w-4" />
                Terminal
              </div>
              <button
                onClick={handleCopy}
                className="flex items-center gap-1.5 rounded-md px-2.5 py-1 text-xs text-muted-foreground transition-colors hover:text-foreground hover:bg-secondary/60"
              >
                <Copy className="h-3.5 w-3.5" />
                Copy
              </button>
            </div>
            <pre className="overflow-x-auto p-6 font-mono text-sm leading-relaxed text-foreground">
              <code>{code}</code>
            </pre>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default InstallSection;
