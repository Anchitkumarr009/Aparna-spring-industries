import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { SectionHeading } from "./ui/SectionHeading";
import { testimonials } from "../data/content";

export function Testimonials() {
  return (
    <section id="testimonials" className="py-20 md:py-28 bg-slate-50">
      <div className="container mx-auto px-4">
        <SectionHeading eyebrow="What Our Clients Say" title="Customer Reviews" />
        <div className="max-w-2xl mx-auto">
          {testimonials.map((review, index) => (
            <motion.div
              key={review.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-xl p-8 shadow-md border border-border text-center"
              data-testid={`card-testimonial-${index}`}
            >
              <div className="flex justify-center gap-1 mb-4">
                {Array.from({ length: review.rating }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                ))}
              </div>
              <p className="text-lg text-muted-foreground italic mb-6">"{review.text}"</p>
              <p className="font-bold text-foreground">{review.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
