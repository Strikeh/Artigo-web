interface AnimatedBlobsProps {
  variant?: "hero" | "cta" | "section";
}

export function AnimatedBlobs({ variant = "hero" }: AnimatedBlobsProps) {
  const positions = {
    hero: [
      { color: "bg-accent-indigo", className: "top-0 -left-40 w-96 h-96" },
      {
        color: "bg-accent-blue",
        className: "top-32 right-0 w-80 h-80 animation-delay-2000",
      },
      {
        color: "bg-accent-purple",
        className: "-bottom-20 left-1/3 w-72 h-72 animation-delay-4000",
      },
    ],
    cta: [
      {
        color: "bg-accent-indigo",
        className: "-top-20 left-1/4 w-80 h-80",
      },
      {
        color: "bg-accent-blue",
        className: "bottom-0 right-1/4 w-72 h-72 animation-delay-2000",
      },
      {
        color: "bg-accent-purple",
        className: "top-1/3 -right-10 w-64 h-64 animation-delay-4000",
      },
    ],
    section: [
      {
        color: "bg-accent-indigo",
        className: "-top-10 right-1/3 w-64 h-64",
      },
      {
        color: "bg-accent-purple",
        className: "bottom-10 left-1/4 w-56 h-56 animation-delay-2000",
      },
    ],
  };

  const blobs = positions[variant];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {blobs.map((blob, i) => (
        <div
          key={i}
          className={`absolute rounded-full ${blob.color} opacity-20 mix-blend-multiply filter blur-[72px] ${
            i === 0
              ? "animate-blob-float"
              : i === 1
                ? "animate-blob-float-delay"
                : "animate-blob-float-slow"
          } ${blob.className}`}
        />
      ))}
    </div>
  );
}
