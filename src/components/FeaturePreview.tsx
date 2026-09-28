import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { Camera, ChefHat, Globe2, Plane } from "lucide-react";

const scenes = {
  "Allergy card": { icon: Globe2, label: "Your needs, clearly shared", detail: "A clearer conversation", rotation: -4 },
  "Travel mode": { icon: Plane, label: "Tokyo · 7 days", detail: "Your next chapter", rotation: -7 },
  "Recipe AI": { icon: ChefHat, label: "Ingredient inspiration", detail: "Make it your own", rotation: 3 },
  NutriScan: { icon: Camera, label: "Snap. Review. Log.", detail: "Your daily picture", rotation: -3 },
};

/** Native layers inspired by the supplied product artwork; the UI remains a real screenshot. */
export default function FeaturePreview({ label, image, alt }: { label: keyof typeof scenes; image: string; alt: string }) {
  const root = useRef<HTMLDivElement>(null);
  const inView = useInView(root, { amount: 0.3 });
  const reducedMotion = useReducedMotion();
  const scene = scenes[label];
  const Icon = scene.icon;
  const travel = label === "Travel mode";
  const nutrition = label === "NutriScan";

  return (
    <div ref={root} className={`feature-scene${inView ? " is-in-view" : ""}`}>
      <span className="scene-orbit" aria-hidden="true" />
      {travel && (
        <svg className="scene-flight" viewBox="0 0 360 420" fill="none" aria-hidden="true">
          <path d="M24 315C320 390 344 70 66 97" pathLength="1" />
          <circle cx="24" cy="315" r="4" /><circle cx="66" cy="97" r="4" />
        </svg>
      )}
      <motion.div
        className="scene-phone"
        initial={reducedMotion ? false : { y: 22, rotate: 0 }}
        animate={{ y: 0, rotate: reducedMotion ? 0 : scene.rotation }}
        transition={{ duration: 0.65, ease: [0.2, 0.65, 0.25, 1] }}
      >
        <div className="scene-phone-frame">
          <img src={image} alt={alt} width="945" height="1920" loading="lazy" decoding="async" />
          <span className="scene-camera" aria-hidden="true" />
        </div>
      </motion.div>
      <div className="scene-label" aria-hidden="true"><span><Icon size={19} /></span>{scene.label}</div>
      {nutrition && (
        <div className="scene-macros" aria-hidden="true">
          <span>YOUR NUTRITION, AT A GLANCE</span>
          <div><i /><i /><i /></div>
          <small>Photo-based estimates</small>
        </div>
      )}
      <span className="scene-caption">{scene.detail}</span>
    </div>
  );
}
