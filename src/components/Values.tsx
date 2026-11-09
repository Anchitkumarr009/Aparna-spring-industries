import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { Clock, RefreshCw, Settings, ShieldCheck, Trash2, type LucideIcon } from "lucide-react";
import { company, values } from "../data/content";

const valueIcons: Record<(typeof values)[number]["icon"], LucideIcon> = {
  settings: Settings,
  trash: Trash2,
  clock: Clock,
  refresh: RefreshCw,
};

/** Navy header (logo + company name) + orange title bar shared by both cards. */
function CardHeader({ title }: { title: string }) {
  return (
    <>
      <div className="bg-[#1a2744] px-6 py-4 flex items-center gap-4">
        <img
          src={company.logo}
          alt="Aparna Springs Logo"
          className="h-12 w-auto object-contain brightness-[2] filter"
        />
        <div>
          <p className="text-white font-bold text-lg leading-tight">APARNA SPRINGS INDUSTRIES</p>
          <p className="text-white/60 text-xs uppercase tracking-widest">Springs & Wireforms</p>
        </div>
      </div>
      <div className="bg-accent px-6 py-2 text-center">
        <h3 className="text-white font-bold text-lg uppercase tracking-wider">{title}</h3>
      </div>
    </>
  );
}

function Card({ direction, delay, children }: { direction: -30 | 30; delay?: number; children: ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: direction }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay }}
      className="rounded-2xl overflow-hidden border-2 border-[#1a2744] shadow-xl"
    >
      {children}
    </motion.div>
  );
}

/** "Our Values" and "Quality Policy" cards, side by side. */
export function Values() {
  return (
    <section id="values" className="py-20 md:py-28 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card direction={-30}>
            <CardHeader title="Our Values" />
            <div className="bg-white px-6 py-8 grid grid-cols-1 sm:grid-cols-2 gap-8">
              {values.map((value, index) => {
                const Icon = valueIcons[value.icon];
                return (
                  <div key={value.title} className="flex gap-4" data-testid={`value-item-${index}`}>
                    <div className="mt-0.5 flex-shrink-0">
                      <Icon className="w-7 h-7 text-accent" />
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground mb-1">{value.title}</h4>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {value.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </Card>

          <Card direction={30} delay={0.15}>
            <CardHeader title="Quality Policy" />
            <div className="bg-white px-8 py-10 flex flex-col items-center text-center h-full relative overflow-hidden">
              {/* Faint logo watermark */}
              <div className="absolute inset-0 flex items-center justify-center opacity-[0.04] pointer-events-none select-none">
                <img src={company.logo} alt="" className="w-72 h-72 object-contain" />
              </div>
              <ShieldCheck className="w-14 h-14 text-[#1a2744] mb-6" />
              <p className="text-foreground text-base md:text-lg leading-relaxed mb-6">
                Our commitment to quality and the satisfaction to customers is the fundamental
                principle at <strong className="text-accent">Aparna Springs Industries</strong>.
              </p>
              <div className="w-12 h-0.5 bg-accent mx-auto mb-6" />
              <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
                We are dedicated to customer satisfaction by continuously striving for excellence in
                productivity, quality and delivery with a sole mission of{" "}
                <span className="font-semibold text-foreground">"Zero Defect Product"</span> and{" "}
                <span className="font-semibold text-foreground">"Total Customer Satisfaction"</span>.
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
