import { atom, selector } from "recoil";
import { Slide } from "@/lib/types";

export const slidesState = atom<Slide[]>({
  key: "slidesState",
  default: JSON.parse(localStorage.getItem("slides-storage") || "[]"),
  effects_UNSTABLE: [
    ({ setSelf, onSet }) => {
      const savedSlides = localStorage.getItem("slides-storage");
      if (savedSlides) {
        setSelf(JSON.parse(savedSlides));
      }

      onSet((newSlides) => {
        localStorage.setItem("slides-storage", JSON.stringify(newSlides));
      });
    },
  ],
});

export const slidesCounterSelector = selector<number>({
  key: "slidesCounterSelector",
  get: ({ get }) => {
    const slides = get(slidesState);
    return slides.length;
  },
});
