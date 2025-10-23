import { Button } from "../components/ui/button";
import { ValueCard } from "../components/ValueCard";
import { StatCard } from "../components/StatCard";
import { TeamCard } from "../components/TeamCard";
import { FeatureCard } from "../components/FeatureCard";
import { ParallaxSection } from "../components/ParallaxSection";
import { ImageWithSkeleton } from "../components/ImageWithSkeleton";
import { motion, useScroll, useTransform } from "motion/react";
import foundersImage from "figma:asset/e01f259c598ff63bf85bb2fb4f9511909615b673.png";
import melverImage from "figma:asset/6ea8c342f75fa31a8c9b0f9ba9fe8c08f373ead8.png";
import neilImage from "figma:asset/5357663d913d7a1ddda7f42871e9ea8459940468.png";
import {
  Heart,
  Shield,
  Lightbulb,
  Users,
  MessageSquare,
  Clock,
  TrendingUp,
  CheckCircle,
  Target,
  Sparkles,
  BookOpen,
  Award,
} from "lucide-react";

export function About() {
  const { scrollYProgress } = useScroll();
  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 0.2], [1, 0.95]);

  return (
    <div className="min-h-screen bg-white pt-20">
      {/* Section 1 - Hero */}
      <section
        id="section_hero"
        className="relative overflow-hidden"
        style={{
          background: "linear-gradient(180deg, #FFFFFF 0%, #EAF2FB 100%)",
        }}
      >
        {/* Parallax Background Elements */}
        <ParallaxSection
          speed={-0.3}
          className="absolute inset-0 pointer-events-none"
        >
          <div className="absolute top-20 right-10 w-72 h-72 bg-[#2D70C9]/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-10 w-96 h-96 bg-[#EAF2FB] rounded-full blur-3xl"></div>
        </ParallaxSection>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-20 py-16 sm:py-20 lg:py-32 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <motion.div
              className="col-span-1 lg:col-span-6 text-center lg:text-left"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              style={{ opacity: heroOpacity, scale: heroScale }}
            >
              <motion.h1
                className="text-[#1A1A1A] mb-4 sm:mb-6"
                style={{
                  fontFamily: "var(--font-poppins)",
                  fontSize: "clamp(2rem, 5vw, 3.5rem)",
                  fontWeight: "700",
                  lineHeight: "1.2",
                }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Rethinking Feedback. Restoring Trust in Learning.
              </motion.h1>
              <motion.p
                className="text-gray-700 mb-8 sm:mb-10"
                style={{
                  fontFamily: "var(--font-inter)",
                  fontSize: "clamp(1rem, 2vw, 1.25rem)",
                  lineHeight: "1.6",
                }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Ungraded helps educators scale meaningful feedback and verify
                real understanding.
              </motion.p>
              <motion.div
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    size="lg"
                    className="w-full sm:w-auto"
                    style={{
                      backgroundColor: "#2D70C9",
                      fontFamily: "var(--font-poppins)",
                      paddingLeft: "2rem",
                      paddingRight: "2rem",
                      paddingTop: "1.5rem",
                      paddingBottom: "1.5rem",
                      fontSize: "clamp(1rem, 2vw, 1.125rem)",
                    }}
                  >
                    See How It Works
                  </Button>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    variant="outline"
                    size="lg"
                    className="w-full sm:w-auto"
                    style={{
                      fontFamily: "var(--font-poppins)",
                      borderColor: "#2D70C9",
                      color: "#2D70C9",
                      paddingLeft: "2rem",
                      paddingRight: "2rem",
                      paddingTop: "1.5rem",
                      paddingBottom: "1.5rem",
                      fontSize: "clamp(1rem, 2vw, 1.125rem)",
                    }}
                  >
                    Join the Movement
                  </Button>
                </motion.div>
              </motion.div>
            </motion.div>
            <motion.div
              className="col-span-1 lg:col-span-6"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <motion.div
                className="rounded-2xl overflow-hidden shadow-2xl"
                whileHover={{ scale: 1.02, y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <ImageWithSkeleton
                  src="https://images.unsplash.com/photo-1755692880851-f5e013f9dbbd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080"
                  alt="Teacher giving feedback"
                  className="w-full h-auto"
                />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 2 - Mission & Values */}
      <section
        id="section_mission"
        className="py-16 sm:py-20 lg:py-32 relative overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-20 relative z-10">
          <motion.div
            className="text-center mb-12 lg:mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2
              className="text-[#1A1A1A] mb-4 sm:mb-6"
              style={{
                fontFamily: "var(--font-poppins)",
                fontSize: "clamp(1.75rem, 4vw, 2.5rem)",
                fontWeight: "600",
              }}
            >
              Our Purpose
            </h2>
            <p
              className="text-gray-700 max-w-3xl mx-auto px-4"
              style={{
                fontFamily: "var(--font-inter)",
                fontSize: "clamp(1rem, 2vw, 1.25rem)",
                lineHeight: "1.6",
              }}
            >
              We're on a mission to make feedback effortless, authentic, and
              centered on growth — not grades.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
            <ValueCard
              icon={Heart}
              title="Authenticity"
              description="Fair, individualized feedback."
              index={0}
            />
            <ValueCard
              icon={Shield}
              title="Integrity"
              description="Ethical AI and transparency."
              index={1}
            />
            <ValueCard
              icon={Lightbulb}
              title="Curiosity"
              description="Encouraging deeper thinking."
              index={2}
            />
            <ValueCard
              icon={Users}
              title="Empathy"
              description="Technology that amplifies human connection."
              index={3}
            />
          </div>
        </div>
      </section>

      {/* Section 3 - Our Story */}
      <section
        id="section_story"
        className="bg-gray-50 py-16 sm:py-20 lg:py-32"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <motion.div
              className="col-span-1 lg:col-span-6 order-2 lg:order-1"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <motion.div
                className="rounded-2xl overflow-hidden shadow-lg"
                whileHover={{ scale: 1.02, y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src={foundersImage}
                  alt="Neil Chong-Kit and Melver Lobo, founders of Ungraded"
                  className="w-full h-auto"
                />
              </motion.div>
            </motion.div>
            <motion.div
              className="col-span-1 lg:col-span-6 order-1 lg:order-2"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <h2
                className="text-[#1A1A1A] mb-4 sm:mb-6"
                style={{
                  fontFamily: "var(--font-poppins)",
                  fontSize: "clamp(1.75rem, 4vw, 2.5rem)",
                  fontWeight: "600",
                }}
              >
                Built by Educators, for Educators.
              </h2>
              <p
                className="text-gray-700 mb-6 sm:mb-8"
                style={{
                  fontFamily: "var(--font-inter)",
                  fontSize: "clamp(1rem, 2vw, 1.125rem)",
                  lineHeight: "1.7",
                }}
              >
                Ungraded was founded by Neil Chong-Kit and Melver Lobo through
                Innovate UBC's Venture Builder Program. They interviewed 25+
                teachers and saw that grades alone couldn't measure true
                understanding — so they built a system that restores trust in
                learning.
              </p>
              <motion.div
                className="flex flex-wrap items-center justify-center lg:justify-start gap-2 sm:gap-3 text-[#2D70C9]"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                <motion.div
                  className="flex items-center gap-2"
                  whileHover={{ scale: 1.1 }}
                >
                  <Lightbulb className="w-5 h-5 sm:w-6 sm:h-6" />
                  <span
                    className="text-sm sm:text-base"
                    style={{ fontFamily: "var(--font-poppins)" }}
                  >
                    Idea
                  </span>
                </motion.div>
                <div className="w-8 sm:w-16 h-0.5 bg-[#2D70C9]"></div>
                <motion.div
                  className="flex items-center gap-2"
                  whileHover={{ scale: 1.1 }}
                >
                  <Sparkles className="w-5 h-5 sm:w-6 sm:h-6" />
                  <span
                    className="text-sm sm:text-base"
                    style={{ fontFamily: "var(--font-poppins)" }}
                  >
                    Prototype
                  </span>
                </motion.div>
                <div className="w-8 sm:w-16 h-0.5 bg-[#2D70C9]"></div>
                <motion.div
                  className="flex items-center gap-2"
                  whileHover={{ scale: 1.1 }}
                >
                  <Award className="w-5 h-5 sm:w-6 sm:h-6" />
                  <span
                    className="text-sm sm:text-base"
                    style={{ fontFamily: "var(--font-poppins)" }}
                  >
                    Movement
                  </span>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 4 - Impact / Social Proof */}
      <section
        id="section_impact"
        className="bg-[#EAF2FB] py-16 sm:py-20 lg:py-32 relative overflow-hidden"
      >
        {/* Parallax Background Shapes */}
        <ParallaxSection
          speed={0.4}
          className="absolute inset-0 pointer-events-none opacity-30"
        >
          <div className="absolute top-10 left-1/4 w-64 h-64 bg-white rounded-full blur-2xl"></div>
          <div className="absolute bottom-10 right-1/4 w-80 h-80 bg-[#2D70C9]/10 rounded-full blur-3xl"></div>
        </ParallaxSection>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-20 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mb-12 lg:mb-16">
            <StatCard
              icon={MessageSquare}
              stat="25+"
              description="Educators Interviewed"
              index={0}
            />
            <StatCard
              icon={Clock}
              stat="50%"
              description="Less grading time for teachers (Assumption)"
              index={1}
            />
            <StatCard
              icon={TrendingUp}
              stat="30%"
              description="Higher student comprehension after resubmission (Assumption)"
              index={2}
            />
          </div>
        </div>
      </section>

      {/* Section 5 - Meet the Team */}
      <section id="section_team" className="py-16 sm:py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-20">
          <motion.div
            className="text-center mb-12 lg:mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2
              className="text-[#1A1A1A] mb-4 sm:mb-6"
              style={{
                fontFamily: "var(--font-poppins)",
                fontSize: "clamp(1.75rem, 4vw, 2.5rem)",
                fontWeight: "600",
              }}
            >
              The People Behind the Product
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 lg:gap-16 max-w-4xl mx-auto mb-8 sm:mb-12">
            <TeamCard
              name="Melver Lobo"
              role="Chief Revenue Officer"
              imageSrc={melverImage}
              index={0}
              linkedinUrl="https://www.linkedin.com/in/melver-lobo/"
              bio="UBC, MBA 25' • Co-founder/CEO @ Scooled • 8+ years industry experience in Growth, Operations, Customer experience"
              imagePosition="center top"
            />
            <TeamCard
              name="Neil Chong-Kit"
              role="Chief Product Officer"
              imageSrc={neilImage}
              index={1}
              linkedinUrl="https://www.linkedin.com/in/neilchongkit/"
              bio="Director of Product @ Trulioo • Product-led Growth @ Klue • 25+ years industry experience"
              imagePosition="center 20%"
            />
          </div>
        </div>
      </section>

      {/* Section 6 - How We're Different */}
      <section
        id="section_different"
        className="bg-gray-50 py-16 sm:py-20 lg:py-32 relative overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-20 relative z-10">
          <motion.div
            className="text-center mb-12 lg:mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2
              className="text-[#1A1A1A] mb-4 sm:mb-6"
              style={{
                fontFamily: "var(--font-poppins)",
                fontSize: "clamp(1.75rem, 4vw, 2.5rem)",
                fontWeight: "600",
              }}
            >
              How We're Different
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
            <FeatureCard
              icon={CheckCircle}
              title="Beyond Detection"
              description="Verifies understanding, not AI use."
              index={0}
            />
            <FeatureCard
              icon={Target}
              title="Tutor-First Design"
              description="Built for measurable student growth."
              index={1}
            />
            <FeatureCard
              icon={BookOpen}
              title="Evidence-Based Feedback"
              description="Every insight backed by rationale."
              index={2}
            />
            <FeatureCard
              icon={Shield}
              title="Ethical AI"
              description="Encouraging responsible AI adoption."
              index={3}
            />
          </div>
        </div>
      </section>

      {/* Section 7 - CTA / Join the Movement */}
      <motion.section
        id="section_cta"
        className="bg-[#2D70C9] py-16 sm:py-20 lg:py-28 relative overflow-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
      >
        {/* Parallax Animated Shapes */}
        <ParallaxSection
          speed={-0.2}
          className="absolute inset-0 pointer-events-none opacity-10"
        >
          <div className="absolute top-20 right-20 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 left-20 w-72 h-72 bg-white rounded-full blur-3xl"></div>
        </ParallaxSection>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-20 text-center relative z-10">
          <motion.h2
            className="text-white mb-6 sm:mb-8 px-4"
            style={{
              fontFamily: "var(--font-poppins)",
              fontSize: "clamp(1.5rem, 4vw, 2.5rem)",
              fontWeight: "600",
            }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            "We're not replacing teachers — we're amplifying them."
          </motion.h2>
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <a href="https://app.ungradedai.com/signup">
                <Button
                  size="lg"
                  className="w-full sm:w-auto"
                  style={{
                    backgroundColor: "white",
                    color: "#2D70C9",
                    fontFamily: "var(--font-poppins)",
                    paddingLeft: "2rem",
                    paddingRight: "2rem",
                    paddingTop: "1.5rem",
                    paddingBottom: "1.5rem",
                    fontSize: "clamp(1rem, 2vw, 1.125rem)",
                  }}
                >
                  Start Free Pilot
                </Button>
              </a>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button
                variant="outline"
                size="lg"
                className="w-full sm:w-auto hover:bg-white/10"
                style={{
                  fontFamily: "var(--font-poppins)",
                  borderColor: "white",
                  color: "white",
                  backgroundColor: "transparent",
                  paddingLeft: "2rem",
                  paddingRight: "2rem",
                  paddingTop: "1.5rem",
                  paddingBottom: "1.5rem",
                  fontSize: "clamp(1rem, 2vw, 1.125rem)",
                }}
              >
                Contact Us
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
}
