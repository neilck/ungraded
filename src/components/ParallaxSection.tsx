import { motion, useScroll, useTransform } from "motion/react";
import { useRef, ReactNode } from "react";

interface ParallaxSectionProps {
  children: ReactNode;
  speed?: number;
  className?: string;
  style?: React.CSSProperties;
  id?: string;
}

export function ParallaxSection({ 
  children, 
  speed = 0.5, 
  className = "", 
  style = {},
  id 
}: ParallaxSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", `${speed * 100}%`]);

  return (
    <div ref={ref} className={className} style={style} id={id}>
      <motion.div style={{ y }}>
        {children}
      </motion.div>
    </div>
  );
}
