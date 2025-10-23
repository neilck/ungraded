import { ImageWithFallback } from "./figma/ImageWithFallback";
import { motion } from "motion/react";
import { Linkedin } from "lucide-react";

interface TeamCardProps {
  name: string;
  role: string;
  imageSrc: string;
  index: number;
  linkedinUrl?: string;
  bio?: string;
  imagePosition?: string;
}

export function TeamCard({
  name,
  role,
  imageSrc,
  index,
  linkedinUrl,
  bio,
  imagePosition = "center",
}: TeamCardProps) {
  return (
    <motion.div
      className="text-center"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
    >
      <motion.div
        className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 rounded-full overflow-hidden mx-auto mb-6 border-4 border-[#EAF2FB] relative group"
        whileHover={{ scale: 1.1, borderColor: "#2D70C9" }}
        transition={{ duration: 0.3 }}
      >
        <img
          src={imageSrc}
          alt={name}
          className="w-full h-full object-cover"
          style={{ objectPosition: imagePosition }}
        />
        {linkedinUrl && (
          <a
            href={linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute inset-0 bg-[#2D70C9]/90 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          >
            <Linkedin className="w-10 h-10 text-white" />
          </a>
        )}
      </motion.div>
      <motion.h3
        className="text-[#1A1A1A] mb-1"
        style={{ fontFamily: "var(--font-poppins)" }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: index * 0.2 + 0.3 }}
      >
        {name}
      </motion.h3>
      <motion.p
        className="text-[#2D70C9] mb-3"
        style={{ fontFamily: "var(--font-inter)" }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: index * 0.2 + 0.4 }}
      >
        {role}
      </motion.p>
      {bio && (
        <motion.p
          className="text-gray-600 text-sm max-w-xs mx-auto"
          style={{ fontFamily: "var(--font-inter)", lineHeight: "1.6" }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: index * 0.2 + 0.5 }}
        >
          {bio}
        </motion.p>
      )}
    </motion.div>
  );
}
