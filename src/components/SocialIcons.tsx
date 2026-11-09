import { FaWhatsapp, FaFacebook, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import type { IconType } from "react-icons";
import { socialLinks } from "../data/content";

const icons: Record<(typeof socialLinks)[number]["id"], IconType> = {
  whatsapp: FaWhatsapp,
  facebook: FaFacebook,
  linkedin: FaLinkedin,
  twitter: FaXTwitter,
};

type Props = {
  /** Icon pixel size. */
  size: number;
  /** Classes applied to each link. */
  linkClassName: string;
  /** Prefix for data-testid, e.g. "topbar" -> "link-topbar-whatsapp". */
  testIdPrefix: string;
};

/** Row of social links, shared by the top bar and the footer. */
export function SocialIcons({ size, linkClassName, testIdPrefix }: Props) {
  return (
    <>
      {socialLinks.map(({ id, label, href, external }) => {
        const Icon = icons[id];
        return (
          <a
            key={id}
            href={href}
            {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
            className={linkClassName}
            aria-label={label}
            data-testid={`link-${testIdPrefix}-${id}`}
          >
            <Icon size={size} />
          </a>
        );
      })}
    </>
  );
}
