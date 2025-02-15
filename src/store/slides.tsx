import { Slide } from "@/lib/types";
import { create } from "zustand";
import { persist } from "zustand/middleware";
interface SlidesState {
  slides: Slide[];
  setSlides: (slides: Slide[]) => void;
}

export const useSlidesStore = create(
  persist<SlidesState>(
    (set) => ({ slides: [], setSlides: (slides) => set({ slides }) }),
    { name: "slides-storage" }
  )
);
