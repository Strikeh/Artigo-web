import { ReactNode } from "react";

interface BadgeProps {
  children: ReactNode;
  variant?: "indigo" | "purple" | "blue" | "green" | "orange" | "amber";
  className?: string;
}

const variantClasses = {
  indigo: "bg-indigo-50 text-indigo-700 border-indigo-100",
  purple: "bg-purple-50 text-purple-700 border-purple-100",
  blue: "bg-blue-50 text-blue-700 border-blue-100",
  green: "bg-emerald-50 text-emerald-700 border-emerald-100",
  orange: "bg-orange-50 text-orange-700 border-orange-100",
  amber: "bg-amber-50 text-amber-700 border-amber-100",
};

export function Badge({
  children,
  variant = "indigo",
  className = "",
}: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center gap-1 px-3 py-1 text-xs font-medium rounded-full border ${variantClasses[variant]} ${className}`}
    >
      {children}
    </span>
  );
}
