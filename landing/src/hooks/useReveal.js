import { useRef } from "react";
import { gsap, useGSAP } from "../lib/gsap";

/**
 * Scroll-reveal scoped to the returned ref.
 * - [data-reveal] — single element fade-up
 * - [data-reveal-group] — children fade-up with stagger
 */
export function useReveal() {
  const ref = useRef(null);

  useGSAP(
    () => {
      const root = ref.current;
      if (!root) return;

      root.querySelectorAll("[data-reveal]").forEach((el) => {
        gsap.from(el, {
          y: 28,
          autoAlpha: 0,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 88%",
            toggleActions: "play none none reverse",
          },
        });
      });

      root.querySelectorAll("[data-reveal-group]").forEach((group) => {
        gsap.from(group.children, {
          y: 28,
          autoAlpha: 0,
          duration: 0.9,
          ease: "power3.out",
          stagger: 0.1,
          scrollTrigger: {
            trigger: group,
            start: "top 86%",
            toggleActions: "play none none reverse",
          },
        });
      });
    },
    { scope: ref },
  );

  return ref;
}
