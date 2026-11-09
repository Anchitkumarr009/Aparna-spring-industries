import { motion } from "framer-motion";
import { SectionHeading } from "./ui/SectionHeading";
import { galleryPhotos, teamPhotos } from "../data/content";

const photoClass =
  "w-full h-full object-cover group-hover:scale-105 transition-transform duration-500";

/** "Our Working Team" photos followed by a factory gallery. */
export function Team() {
  return (
    <section id="team" className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-4">
        <SectionHeading
          eyebrow="Our People"
          title="Our Working Team"
          description="Precision springs and wireforms crafted with care."
        />

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-16">
          {teamPhotos.map((photo, index) => (
            <motion.div
              key={photo.src}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="rounded-xl overflow-hidden shadow-md aspect-[3/4] bg-slate-100 group"
              data-testid={`card-team-${index}`}
            >
              <img src={photo.src} alt={photo.alt} className={photoClass} />
            </motion.div>
          ))}
        </div>

        <div className="text-center max-w-2xl mx-auto mb-10">
          <h3 className="text-2xl font-bold text-foreground mb-2">Aparna Springs</h3>
          <p className="text-muted-foreground">Durable springs crafted for industrial strength.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {galleryPhotos.map((photo, index) => (
            <motion.div
              key={photo.src}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="rounded-xl overflow-hidden shadow-md aspect-video bg-slate-100 group"
              data-testid={`card-gallery-${index}`}
            >
              <img src={photo.src} alt={photo.alt} className={photoClass} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
