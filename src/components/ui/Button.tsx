"use client";

import Link from "next/link";
import { ReactNode } from "react";

interface ButtonProps {
  variant?: "primary" | "secondary";
  size?: "sm" | "md" | "lg";
  href?: string;
  icon?: ReactNode;
  children: ReactNode;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
}

export function Button({
  variant = "primary",
  size = "md",
  href,
  icon,
  children,
  onClick,
  className = "",
  disabled = false,
}: ButtonProps) {
  const sizeClasses = {
    sm: "px-5 py-2.5 text-sm",
    md: "px-8 py-4 text-base",
    lg: "px-10 py-5 text-lg",
  };

  const base = `${variant === "primary" ? "btn-primary" : "btn-secondary"} ${sizeClasses[size]} ${className} ${disabled ? "opacity-50 cursor-not-allowed" : ""}`;

  if (href) {
    return (
      <Link href={href} className={base}>
        {icon && <span className="flex-shrink-0">{icon}</span>}
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={base} disabled={disabled}>
      {icon && <span className="flex-shrink-0">{icon}</span>}
      {children}
    </button>
  );
}
