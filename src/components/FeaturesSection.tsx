import { motion } from "framer-motion";
import {
  LayoutDashboard,
  Link2,
  Rss,
  Shield,
  Search,
  Puzzle,
  Bell,
  Image,
} from "lucide-react";

const features = [
  {
    icon: LayoutDashboard,
    title: "Widgets",
    desc: "Modular blocks that show key info at a glance. Move and customize them individually.",
  },
  {
    icon: Link2,
    title: "Links & Groups",
    desc: "Store your most important links, group them into folders, and monitor uptime.",
  },
  {
    icon: Rss,
    title: "News / RSS",
    desc: "Subscribe to RSS feeds and stay on top of everything directly from your dashboard.",
  },
  {
    icon: Shield,
    title: "Built-in Auth & SSO",
    desc: "Authentication out of the box with SSO via OIDC support.",
  },
  {
    icon: Search,
    title: "Spotlight Search",
    desc: "Hit Ctrl+K to search links, integrations, or use bangs for custom search engines.",
  },
  {
    icon: Puzzle,
    title: "Integrations",
    desc: "Connects with Karakeep, Dashdot, Beszel, Jellyfin and more coming soon.",
  },
  {
    icon: Bell,
    title: "Notifications",
    desc: "Receive notifications via PUSH requests to your dashwise instance.",
  },
  {
    icon: Image,
    title: "Wallpapers",
    desc: "Upload custom wallpapers or set defaults for all users in your instance.",
  },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const FeaturesSection = () => {
  return (
    <section className="relative py-32" id="features">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 text-4xl font-bold tracking-tight">
            Everything you need
          </h2>
          <p className="mx-auto max-w-lg text-muted-foreground">
            A feature-rich dashboard built for self-hosters who care about design and functionality.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
        >
          {features.map((f) => (
            <motion.div
              key={f.title}
              variants={item}
              className="glass rounded-2xl p-6 transition-all hover:border-primary/20 group"
            >
              <div className="mb-4 inline-flex rounded-xl bg-primary/10 p-3 text-primary transition-colors group-hover:bg-primary/20">
                <f.icon className="h-5 w-5" />
              </div>
              <h3 className="mb-2 font-display text-lg font-semibold">{f.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{f.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesSection;
