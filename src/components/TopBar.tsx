import { Mail, Phone } from "lucide-react";
import { company } from "../data/content";
import { SocialIcons } from "./SocialIcons";

/** Thin navy bar above the header with phone, email and social links. */
export function TopBar() {
  return (
    <div className="bg-primary text-primary-foreground py-2 text-sm">
      <div className="container mx-auto px-4 flex flex-col sm:flex-row justify-between items-center gap-2">
        <div className="flex items-center gap-6">
          <a
            href={`tel:${company.phone}`}
            className="flex items-center gap-2 hover:text-accent transition-colors"
            data-testid="link-topbar-phone"
          >
            <Phone size={14} />
            <span>{company.phone}</span>
          </a>
          <a
            href={`mailto:${company.email}`}
            className="flex items-center gap-2 hover:text-accent transition-colors hidden sm:flex"
            data-testid="link-topbar-email"
          >
            <Mail size={14} />
            <span>{company.email}</span>
          </a>
        </div>
        <div className="flex items-center gap-4">
          <SocialIcons
            size={16}
            linkClassName="hover:text-accent transition-colors"
            testIdPrefix="topbar"
          />
        </div>
      </div>
    </div>
  );
}
