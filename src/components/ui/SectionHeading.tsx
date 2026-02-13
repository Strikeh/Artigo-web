import { ReactNode } from "react";

interface SectionHeadingProps {
  children: ReactNode;
  accent?: string;
  subtitle?: string;
  className?: string;
}

export function SectionHeading({
  children,
  accent,
  subtitle,
  className = "",
}: SectionHeadingProps) {
  if (accent && typeof children === "string") {
    const parts = children.split(accent);
    return (
      <div className={`text-center ${className}`}>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-primary tracking-tight">
          {parts[0]}
          <span className="gradient-text">{accent}</span>
          {parts[1]}
        </h2>
        {subtitle && (
          <p className="mt-4 text-lg text-text-secondary max-w-2xl mx-auto">
            {subtitle}
          </p>
        )}
      </div>
    );
  }

  return (
    <div className={`text-center ${className}`}>
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-text-primary tracking-tight">
        {children}
      </h2>
      {subtitle && (
        <p className="mt-4 text-lg text-text-secondary max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
}
