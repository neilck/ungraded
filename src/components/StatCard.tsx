import { LucideIcon } from "lucide-react";
import { motion } from "motion/react";

interface StatCardProps {
  icon: LucideIcon;
  stat: string;
  description: string;
  index: number;
}

export function StatCard({ icon: Icon, stat, description, index }: StatCardProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      whileHover={{ scale: 1.05, y: -5 }}
      className="bg-white rounded-xl p-6 md:p-8 text-center shadow-sm border border-gray-100 hover:shadow-xl transition-shadow"
    >
      <motion.div 
        className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-[#2D70C9] flex items-center justify-center mx-auto mb-4"
        whileHover={{ rotate: 360 }}
        transition={{ duration: 0.6 }}
      >
        <Icon className="w-7 h-7 md:w-8 md:h-8 text-white" strokeWidth={1.5} />
      </motion.div>
      <motion.div 
        className="text-[#2D70C9] mb-2" 
        style={{ fontFamily: 'var(--font-poppins)', fontSize: 'clamp(1.5rem, 4vw, 2rem)', fontWeight: '600' }}
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.15 + 0.3, type: "spring" }}
      >
        {stat}
      </motion.div>
      <p className="text-gray-700 text-sm md:text-base" style={{ fontFamily: 'var(--font-inter)' }}>
        {description}
      </p>
    </motion.div>
  );
}
