"use client";

import { useEffect, useCallback } from "react";
import confetti from "canvas-confetti";

interface ConfettiEffectProps {
  trigger?: boolean;
}

export function ConfettiEffect({ trigger }: ConfettiEffectProps) {
  const fire = useCallback(() => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
      colors: ["#6366f1", "#3b82f6", "#8b5cf6", "#f97316", "#10b981"],
    });
  }, []);

  useEffect(() => {
    if (trigger) fire();
  }, [trigger, fire]);

  return null;
}

export function useConfetti() {
  return useCallback(() => {
    confetti({
      particleCount: 80,
      spread: 60,
      origin: { y: 0.7 },
      colors: ["#6366f1", "#3b82f6", "#8b5cf6", "#f97316", "#10b981"],
    });
  }, []);
}
