import { useEffect, useState } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionTemplate,
} from "framer-motion";
import fireflyIcon from "../assets/firefly.svg";

const sectionIds = ["about", "projects", "skills", "contact"];
const markerColors = ["#bbf7d0", "#86efac", "#4ade80", "#34d399", "#10b981"];
const triggerOffset = 100;

export default function FireflyLine() {
  const { scrollYProgress } = useScroll();
  const [markers, setMarkers] = useState([0, 0.25, 0.5, 0.75, 1]);
  const [litCount, setLitCount] = useState(0);

  const progress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    mass: 0.3,
  });

  const color = useTransform(
    progress,
    [0, 0.5, 1],
    ["#86efac", "#10b981", "#065f46"],
  );

  const top = useTransform(progress, (v) => `${v * 100}%`);
  const remaining = useTransform(progress, (v) => (1 - v) * 100);
  const clipPath = useMotionTemplate`inset(0 0 ${remaining}% 0)`;
  const iconGlow = useMotionTemplate`drop-shadow(0 0 6px ${color}) drop-shadow(0 0 14px ${color})`;

  useEffect(() => {
    const measure = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      if (max <= 0) return;
      const next = [0];
      sectionIds.forEach((id) => {
        const el = document.getElementById(id);
        if (el) {
          const y =
            el.getBoundingClientRect().top + window.scrollY - triggerOffset;
          next.push(Math.min(Math.max(y / max, 0), 1));
        }
      });
      setMarkers(next);
    };

    measure();
    document.fonts?.ready.then(measure);
    window.addEventListener("resize", measure);
    window.addEventListener("load", measure);
    const observer = new ResizeObserver(measure);
    observer.observe(document.body);

    return () => {
      window.removeEventListener("resize", measure);
      window.removeEventListener("load", measure);
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    const update = (v) => {
      setLitCount(markers.filter((m) => v >= m - 0.001).length);
    };
    update(scrollYProgress.get());
    return scrollYProgress.on("change", update);
  }, [markers, scrollYProgress]);

  return (
    <div className="fixed right-6 top-6 bottom-6 z-10 w-[2px] bg-white/10 pointer-events-none">
      <motion.div
        className="absolute inset-0"
        style={{
          clipPath,
          background: "linear-gradient(to bottom, #86efac, #10b981, #065f46)",
        }}
      />

      {markers.map((m, i) => {
        const lit = i < litCount;
        const c = markerColors[Math.min(i, markerColors.length - 1)];
        return (
          <span
            key={i}
            className="absolute left-1/2 h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full border transition-all duration-500"
            style={{
              top: `${m * 100}%`,
              backgroundColor: lit ? c : "#141414",
              borderColor: lit ? c : "rgba(255,255,255,0.3)",
              boxShadow: lit ? `0 0 12px 3px ${c}` : "none",
            }}
          />
        );
      })}

      <motion.div
        className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2"
        style={{ top }}
      >
        {[0, 1, 2].map((i) => (
          <motion.span
            key={i}
            className="absolute left-1/2 top-1/2 h-[3px] w-[3px] rounded-full bg-green-300"
            animate={{
              y: [-4, -22 - i * 8],
              x: [0, (i - 1) * 10],
              opacity: [0.8, 0],
              scale: [1, 0.4],
            }}
            transition={{
              duration: 1.6 + i * 0.4,
              repeat: Infinity,
              delay: i * 0.5,
              ease: "easeOut",
            }}
          />
        ))}

        <motion.img
          src={fireflyIcon}
          alt=""
          className="relative h-8 w-8 object-contain"
          style={{ filter: iconGlow }}
          animate={{ opacity: [1, 0.75, 1, 0.9, 1] }}
          transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>
    </div>
  );
}
