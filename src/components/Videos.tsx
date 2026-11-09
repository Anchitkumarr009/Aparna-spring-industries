import { motion } from "framer-motion";
import { Play } from "lucide-react";
import { SectionHeading } from "./ui/SectionHeading";
import { videos } from "../data/content";

/** Embedded YouTube videos. Add or edit videos in data/content.ts. */
export function Videos() {
  return (
    <section id="videos" className="py-20 md:py-28 bg-slate-50">
      <div className="container mx-auto px-4">
        <SectionHeading
          eyebrow="See Us In Action"
          title="Watch Our Work"
          description="See our precision springs and wireforms manufacturing process in action."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {videos.map((video, index) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="rounded-xl overflow-hidden shadow-lg bg-white group"
              data-testid={`card-video-${index}`}
            >
              <div className="relative aspect-video bg-slate-900">
                <iframe
                  src={`https://www.youtube.com/embed/${video.id}`}
                  title={video.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                />
              </div>
              <div className="p-5 flex items-center gap-3">
                <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center flex-shrink-0">
                  <Play className="w-4 h-4 text-white fill-white" />
                </div>
                <p className="font-semibold text-foreground">{video.title}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
