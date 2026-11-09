import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { Button } from "./ui/Button";
import { company } from "../data/content";

const fieldClass =
  "bg-white/10 border-white/30 text-white placeholder:text-white/40 focus:border-accent";
const labelClass = "block text-sm font-medium mb-2 text-primary-foreground/80";
const inputClass = `flex h-9 w-full rounded-md border px-3 py-1 text-base shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring md:text-sm ${fieldClass}`;
const linkClass = "text-primary-foreground/80 hover:text-accent transition-colors";

/** One row of the contact details column: round icon + title + content. */
function InfoRow({ testId, icon, title, children }: {
  testId: string;
  icon: ReactNode;
  title: string;
  children: ReactNode;
}) {
  return (
    <div className="flex gap-4 items-start" data-testid={testId}>
      <div className="w-11 h-11 bg-accent/20 rounded-full flex items-center justify-center flex-shrink-0">
        {icon}
      </div>
      <div>
        <h4 className="font-bold text-base mb-1">{title}</h4>
        {children}
      </div>
    </div>
  );
}

export function Contact() {
  const iconClass = "text-accent w-5 h-5";

  return (
    <section id="contact" className="py-20 md:py-32 bg-primary text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h3 className="text-accent font-bold uppercase tracking-wider mb-2">Stay Connected</h3>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">Get In Touch</h2>
          <p className="text-primary-foreground/70 text-lg">
            Find Aparna Springs Industries at the heart of New Delhi's industrial zone, ready to
            serve your manufacturing needs.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 max-w-6xl mx-auto">
          {/* Contact form (UI only: submit is not wired to a backend yet) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-1/2"
          >
            <div className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/20">
              <h3 className="text-xl font-bold mb-6">Send a Message</h3>
              <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
                <div>
                  <label htmlFor="name" className={labelClass}>Your Full Name</label>
                  <input id="name" placeholder="Enter your name" className={inputClass} data-testid="input-contact-name" />
                </div>
                <div>
                  <label htmlFor="email" className={labelClass}>Email Address</label>
                  <input id="email" type="email" placeholder="your@email.com" className={inputClass} data-testid="input-contact-email" />
                </div>
                <div>
                  <label htmlFor="phone" className={labelClass}>Phone Number</label>
                  <input id="phone" type="tel" placeholder="9871409617" className={inputClass} data-testid="input-contact-phone" />
                </div>
                <div>
                  <label htmlFor="message" className={labelClass}>Message</label>
                  <textarea
                    id="message"
                    rows={4}
                    placeholder="Tell us about your requirements..."
                    className="w-full rounded-md border border-white/30 bg-white/10 px-3 py-2 text-sm text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent resize-none"
                    data-testid="input-contact-message"
                  />
                </div>
                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-bold h-12"
                  data-testid="button-contact-submit"
                >
                  Send Message
                </Button>
              </form>
            </div>
          </motion.div>

          {/* Contact details + map */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full lg:w-1/2 space-y-5"
          >
            <InfoRow testId="contact-address" icon={<MapPin className={iconClass} />} title="Address">
              <p className="text-primary-foreground/80 text-sm leading-relaxed">
                {company.addressLines[0]}
                <br />
                {company.addressLines[1]}
              </p>
            </InfoRow>
            <InfoRow testId="contact-email" icon={<Mail className={iconClass} />} title="Email">
              <a href={`mailto:${company.email}`} className={linkClass} data-testid="link-contact-email">
                {company.email}
              </a>
            </InfoRow>
            <InfoRow testId="contact-phone" icon={<Phone className={iconClass} />} title="Phone">
              <a href={`tel:${company.phone}`} className={linkClass} data-testid="link-contact-phone">
                {company.phone}
              </a>
            </InfoRow>
            <InfoRow testId="contact-whatsapp" icon={<FaWhatsapp className={iconClass} />} title="Contact">
              <a href={`tel:${company.mobile}`} className={linkClass} data-testid="link-contact-contact">
                {company.mobile}
              </a>
            </InfoRow>
            <InfoRow testId="contact-hours" icon={<Clock className={iconClass} />} title="Hours">
              <p className="text-primary-foreground/80 text-sm">{company.hours}</p>
            </InfoRow>

            <div
              className="w-full h-60 rounded-xl overflow-hidden shadow-lg border border-white/20 mt-2"
              data-testid="map-embed"
            >
              <iframe
                title="Aparna Springs Industries Location"
                src={company.mapEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
