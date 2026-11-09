import { motion } from "framer-motion";
import { Award, Globe, PackageCheck, ShieldCheck, type LucideIcon } from "lucide-react";
import { aboutContent } from "../data/content";

const statIcons: Record<(typeof aboutContent.stats)[number]["icon"], LucideIcon> = {
  package: PackageCheck,
  shield: ShieldCheck,
  globe: Globe,
  award: Award,
};

export function About() {
  const { image, yearsBadge, heading, paragraphs, stats } = aboutContent;

  return (
    <section id="about" className="py-20 md:py-32 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
          {/* Image + "20+ years" badge */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2 relative"
          >
            <div className="relative rounded-lg overflow-hidden shadow-2xl">
              <img
                src={image}
                alt="Aparna Springs Industries"
                className="w-full h-auto object-cover aspect-video md:aspect-[4/3]"
                data-testid="img-about"
              />
              <div className="absolute inset-0 bg-primary/10" />
            </div>
            <div className="absolute -bottom-8 -right-8 bg-accent text-accent-foreground p-8 rounded-lg shadow-xl hidden md:block">
              <p className="text-5xl font-bold mb-2">{yearsBadge.value}</p>
              <p className="text-lg font-medium">{yearsBadge.label}</p>
            </div>
          </motion.div>

          {/* Text + stats */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="w-full lg:w-1/2"
          >
            <h3 className="text-accent font-bold uppercase tracking-wider mb-2">About Us</h3>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              {heading}
            </h2>
            <div className="space-y-4 text-muted-foreground text-lg mb-10 leading-relaxed">
              {paragraphs.map((text) => (
                <p key={text}>{text}</p>
              ))}
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-8 border-t border-border">
              {stats.map((stat) => {
                const Icon = statIcons[stat.icon];
                return (
                  <div
                    key={stat.id}
                    className="text-center sm:text-left"
                    data-testid={`stat-${stat.id}`}
                  >
                    <Icon className="h-8 w-8 text-accent mx-auto sm:mx-0 mb-3" />
                    <h4 className="text-2xl font-bold text-foreground mb-1">{stat.value}</h4>
                    <p className="text-sm font-medium text-muted-foreground">{stat.label}</p>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
