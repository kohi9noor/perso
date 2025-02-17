"use client";

import { useState, useEffect } from "react";

import { Switch } from "@/components/ui/switch";
import { useTheme } from "next-themes";

export function ModeToggle() {
  const [mounted, setMounted] = useState(false);
  const { setTheme, theme } = useTheme();
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div>
      <Switch
        checked={theme === "light"}
        onCheckedChange={() => setTheme(theme === "light" ? "dark" : "light")}
        aria-label="Toggle Dark Mode"
      />
    </div>
  );
}
