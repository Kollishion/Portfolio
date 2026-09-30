import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionTemplate,
} from "framer-motion";

export default function FireflyLine() {
  const { scrollYProgress } = useScroll();

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
  const glow = useMotionTemplate`0 0 12px 4px ${color}`;

  return (
    <div className="fixed right-6 top-0 z-10 h-screen w-[2px] bg-white/10 pointer-events-none">
      {/* filled line */}
      <motion.div
        className="absolute inset-0 origin-top"
        style={{ scaleY: progress, backgroundColor: color }}
      />
      {/* firefly head */}
      <motion.div
        className="absolute -left-[5px] h-3 w-3 -translate-y-1/2 rounded-full animate-pulse"
        style={{ top, backgroundColor: color, boxShadow: glow }}
      />
    </div>
  );
}
