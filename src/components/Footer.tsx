import { company, footerProductLinks, navLinks } from "../data/content";
import { SocialIcons } from "./SocialIcons";

const linkClass = "hover:text-accent transition-colors";

export function Footer() {
  return (
    <footer className="bg-[#0f172a] text-slate-300 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12 border-b border-slate-800 pb-12">
          {/* Brand */}
          <div className="space-y-6">
            <a href="#home" className="flex items-start gap-3" data-testid="link-footer-logo">
              <img
                src={company.logo}
                alt={`${company.name} Logo`}
                className="h-16 w-auto object-contain brightness-[2] filter"
              />
            </a>
            <p className="text-slate-400 text-sm leading-relaxed">
              Manufacturers & exporters of quality springs and wireforms. ISO and IAS-ANZ
              certified, delivering engineering excellence since decades.
            </p>
            <div className="flex items-center gap-4">
              <SocialIcons
                size={18}
                linkClassName="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-accent hover:text-white transition-colors"
                testIdPrefix="footer"
              />
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className={linkClass}>{link.name}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6">Products</h4>
            <ul className="space-y-3">
              {footerProductLinks.map((name) => (
                <li key={name}>
                  <a href="#products" className={linkClass}>{name}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6">Contact Info</h4>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <span className="font-semibold text-white shrink-0">A:</span>
                <span className="text-slate-400">{company.addressOneLine}</span>
              </li>
              <li className="flex gap-3">
                <span className="font-semibold text-white shrink-0">P:</span>
                <a href={`tel:${company.phone}`} className={`text-slate-400 ${linkClass}`}>{company.phone}</a>
              </li>
              <li className="flex gap-3">
                <span className="font-semibold text-white shrink-0">C:</span>
                <a href={`tel:${company.mobile}`} className={`text-slate-400 ${linkClass}`}>{company.mobile}</a>
              </li>
              <li className="flex gap-3">
                <span className="font-semibold text-white shrink-0">E:</span>
                <a href={`mailto:${company.email}`} className={`text-slate-400 ${linkClass} break-all`}>{company.email}</a>
              </li>
              <li className="flex gap-3">
                <span className="font-semibold text-white shrink-0">H:</span>
                <span className="text-slate-400">{company.hours}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
          <p>© 2025. All rights reserved. {company.legalName}</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
