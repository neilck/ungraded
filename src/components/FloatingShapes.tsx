import { motion } from "motion/react";

export function FloatingShapes() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Floating Circle 1 */}
      <motion.div
        className="absolute top-20 left-10 w-32 h-32 bg-[#2D70C9]/5 rounded-full blur-xl"
        animate={{
          y: [0, -20, 0],
          x: [0, 10, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      {/* Floating Circle 2 */}
      <motion.div
        className="absolute bottom-32 right-16 w-48 h-48 bg-[#EAF2FB] rounded-full blur-2xl"
        animate={{
          y: [0, 20, 0],
          x: [0, -15, 0],
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />
      
      {/* Floating Circle 3 */}
      <motion.div
        className="absolute top-1/2 right-1/4 w-24 h-24 bg-[#2D70C9]/3 rounded-full blur-lg"
        animate={{
          y: [0, -15, 0],
          x: [0, 12, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      />
    </div>
  );
}
