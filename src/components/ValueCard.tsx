import { LucideIcon } from "lucide-react";
import { motion } from "motion/react";

interface ValueCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  index: number;
}

export function ValueCard({ icon: Icon, title, description, index }: ValueCardProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -8, scale: 1.02 }}
      className="bg-white rounded-xl p-6 md:p-8 shadow-sm border border-gray-100 hover:shadow-xl transition-shadow cursor-pointer"
    >
      <motion.div 
        className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-[#EAF2FB] flex items-center justify-center mb-4"
        whileHover={{ rotate: 360, scale: 1.1 }}
        transition={{ duration: 0.6 }}
      >
        <Icon className="w-6 h-6 md:w-7 md:h-7 text-[#2D70C9]" strokeWidth={1.5} />
      </motion.div>
      <h3 className="text-[#1A1A1A] mb-2" style={{ fontFamily: 'var(--font-poppins)' }}>
        {title}
      </h3>
      <p className="text-gray-600" style={{ fontFamily: 'var(--font-inter)' }}>
        {description}
      </p>
    </motion.div>
  );
}
