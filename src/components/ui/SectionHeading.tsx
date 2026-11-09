import type { ReactNode } from "react";

type Props = {
  /** Small orange label above the title. */
  eyebrow?: string;
  title: string;
  description?: ReactNode;
  className?: string;
};

/** Centered "eyebrow / big title / description" block used by most sections. */
export function SectionHeading({
  eyebrow,
  title,
  description,
  className = "max-w-3xl mb-14",
}: Props) {
  return (
    <div className={`text-center mx-auto ${className}`}>
      {eyebrow && (
        <h3 className="text-accent font-bold uppercase tracking-wider mb-2">
          {eyebrow}
        </h3>
      )}
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
        {title}
      </h2>
      {description && (
        <p className="text-muted-foreground text-lg">{description}</p>
      )}
    </div>
  );
}
