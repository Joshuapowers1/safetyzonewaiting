import { useEffect, type RefObject } from "react";

/** One-time, transform-only reveals keep content readable before JS and in static HTML. */
export function useHomeMotion(
  root: RefObject<HTMLDivElement>,
  reducedMotion: boolean | null,
) {
  useEffect(() => {
    if (reducedMotion || !root.current || !("IntersectionObserver" in window))
      return;
    const elements = root.current.querySelectorAll<HTMLElement>(
      ".section-heading, .everyday-tools article, .steps-grid article, .founder-portrait, .founder-copy, .restaurant-section, .faq-section > div, .download-inner",
    );
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.setAttribute("data-revealed", "true");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -35px 0px" },
    );
    elements.forEach((element) => {
      element.setAttribute("data-scroll-reveal", "");
      observer.observe(element);
    });
    return () => {
      observer.disconnect();
      elements.forEach((element) => {
        element.removeAttribute("data-scroll-reveal");
        element.removeAttribute("data-revealed");
      });
    };
  }, [root, reducedMotion]);
}
