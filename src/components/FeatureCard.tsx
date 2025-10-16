import { LucideIcon } from "lucide-react";
import { motion } from "motion/react";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  index: number;
}

export function FeatureCard({ icon: Icon, title, description, index }: FeatureCardProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -8, scale: 1.03 }}
      className="bg-white rounded-xl p-6 md:p-8 shadow-sm border border-gray-100 hover:shadow-xl transition-shadow cursor-pointer"
    >
      <motion.div 
        className="w-12 h-12 rounded-lg bg-[#2D70C9] flex items-center justify-center mb-4"
        whileHover={{ scale: 1.15, rotate: 5 }}
        transition={{ duration: 0.3 }}
      >
        <Icon className="w-6 h-6 text-white" strokeWidth={2} />
      </motion.div>
      <h3 className="text-[#1A1A1A] mb-2" style={{ fontFamily: 'var(--font-poppins)' }}>
        {title}
      </h3>
      <p className="text-gray-600 text-sm md:text-base" style={{ fontFamily: 'var(--font-inter)' }}>
        {description}
      </p>
    </motion.div>
  );
}
