import { Button } from "../components/ui/button";
import { ImageWithSkeleton } from "../components/ImageWithSkeleton";
import { ParallaxSection } from "../components/ParallaxSection";
import { FloatingShapes } from "../components/FloatingShapes";
import { Card } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { motion } from "motion/react";
import {
  CheckCircle,
  Sparkles,
  TrendingUp,
  Users,
  Clock,
  Shield,
  BookOpen,
  MessageSquare,
  BarChart,
  Lightbulb,
  Target,
  ArrowRight,
  Star,
  Zap,
} from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "figma:asset/2e34608689babe8aa3df340c03e28bd805bf2693.png";

export function Home() {
  const features = [
    {
      icon: Sparkles,
      title: "AI-Powered Feedback",
      description:
        "Generate personalized, meaningful feedback at scale while maintaining authentic human connection.",
    },
    {
      icon: Target,
      title: "Verify Understanding",
      description:
        "Go beyond grades with interactive quizzes that assess real comprehension, not just answers.",
    },
    {
      icon: Clock,
      title: "Save 50% Time",
      description:
        "Reduce grading workload by half while providing more detailed, actionable feedback to students.",
    },
    {
      icon: Shield,
      title: "Ethical AI Detection",
      description:
        "Detect AI use responsibly and turn it into a learning opportunity rather than punishment.",
    },
    {
      icon: TrendingUp,
      title: "Track Growth",
      description:
        "Monitor student progress with detailed analytics and insights into learning patterns.",
    },
    {
      icon: MessageSquare,
      title: "Interactive Dialogue",
      description:
        "Enable meaningful conversations around student work with AI-assisted discussion prompts.",
    },
  ];

  const steps = [
    {
      number: "01",
      title: "Upload Assignment",
      description:
        "Submit student work or assignment guidelines to get started.",
    },
    {
      number: "02",
      title: "AI Analysis",
      description:
        "Our system analyzes submissions and generates personalized feedback.",
    },
    {
      number: "03",
      title: "Verify Learning",
      description:
        "Students engage with interactive quizzes to demonstrate understanding.",
    },
    {
      number: "04",
      title: "Track Progress",
      description: "Review insights and monitor student growth over time.",
    },
  ];

  const testimonials = [
    {
      quote:
        "Ungraded has transformed how I give feedback. My students are more engaged than ever.",
      author: "Dr. Sarah Chen",
      role: "High School English Teacher",
      school: "Vancouver, BC",
    },
    {
      quote:
        "The time savings are incredible. I can finally focus on what matters - teaching.",
      author: "Michael Torres",
      role: "College Professor",
      school: "UBC",
    },
    {
      quote:
        "Students actually want to revise their work now. The feedback is that good.",
      author: "Emily Rodriguez",
      role: "Math Tutor",
      school: "Private Practice",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section
        id="hero"
        className="relative overflow-hidden pt-24 sm:pt-32 lg:pt-40 pb-16 sm:pb-20 lg:pb-32"
        style={{
          background: "linear-gradient(180deg, #FFFFFF 0%, #EAF2FB 100%)",
        }}
      >
        <ParallaxSection
          speed={-0.3}
          className="absolute inset-0 pointer-events-none"
        >
          <div className="absolute top-20 right-10 w-72 h-72 bg-[#2D70C9]/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-10 w-96 h-96 bg-[#EAF2FB] rounded-full blur-3xl"></div>
        </ParallaxSection>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-20 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <motion.div
              className="col-span-1 lg:col-span-7 text-center lg:text-left"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.h1
                className="text-[#1A1A1A] mb-6"
                style={{
                  fontFamily: "var(--font-poppins)",
                  fontSize: "clamp(2.5rem, 6vw, 4rem)",
                  fontWeight: "700",
                  lineHeight: "1.1",
                }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                Give Meaningful Feedback at Scale
              </motion.h1>

              <motion.p
                className="text-gray-700 mb-8 max-w-2xl mx-auto lg:mx-0"
                style={{
                  fontFamily: "var(--font-inter)",
                  fontSize: "clamp(1.125rem, 2vw, 1.375rem)",
                  lineHeight: "1.6",
                }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                Ungraded AI helps teachers verify real understanding and provide
                personalized feedback — without the grading burden.
              </motion.p>

              <motion.div
                className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <a href="https://app.ungradedai.com/signup">
                    <Button
                      size="lg"
                      className="w-full sm:w-auto"
                      style={{
                        backgroundColor: "#2D70C9",
                        fontFamily: "var(--font-poppins)",
                        paddingLeft: "2.5rem",
                        paddingRight: "2.5rem",
                        paddingTop: "1.75rem",
                        paddingBottom: "1.75rem",
                        fontSize: "1.125rem",
                      }}
                    >
                      Start Free Trial <ArrowRight className="ml-2 w-5 h-5" />
                    </Button>
                  </a>
                </motion.div>
                {/*
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
                      paddingLeft: "2.5rem",
                      paddingRight: "2.5rem",
                      paddingTop: "1.75rem",
                      paddingBottom: "1.75rem",
                      fontSize: "1.125rem",
                    }}
                  >
                    Watch Demo
                  </Button>
                </motion.div>
                */}
              </motion.div>

              <motion.div
                className="flex flex-wrap items-center justify-center lg:justify-start gap-4 text-sm text-gray-600"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                style={{ fontFamily: "var(--font-inter)" }}
              >
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  <span>No credit card required</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  <span>14-day free trial</span>
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              className="col-span-1 lg:col-span-5"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <motion.div
                className="rounded-2xl overflow-hidden shadow-2xl"
                whileHover={{ y: -5, scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src={heroImage}
                  alt="Personalized one-on-one learning"
                  className="w-full h-auto"
                />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section
        id="features"
        className="py-16 sm:py-20 lg:py-32 relative overflow-hidden"
      >
        <FloatingShapes />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-20 relative z-10">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2
              className="text-[#1A1A1A] mb-6"
              style={{
                fontFamily: "var(--font-poppins)",
                fontSize: "clamp(2rem, 4vw, 3rem)",
                fontWeight: "600",
              }}
            >
              Everything You Need to Scale Feedback
            </h2>
            <p
              className="text-gray-700 max-w-3xl mx-auto"
              style={{
                fontFamily: "var(--font-inter)",
                fontSize: "clamp(1rem, 2vw, 1.25rem)",
                lineHeight: "1.6",
              }}
            >
              Powerful tools designed to help educators give personalized
              feedback without the burnout.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
              >
                <Card className="p-8 h-full hover:shadow-xl transition-shadow border-gray-100">
                  <motion.div
                    className="w-14 h-14 rounded-xl bg-[#EAF2FB] flex items-center justify-center mb-4"
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  >
                    <feature.icon
                      className="w-7 h-7 text-[#2D70C9]"
                      strokeWidth={1.5}
                    />
                  </motion.div>
                  <h3
                    className="text-[#1A1A1A] mb-3"
                    style={{
                      fontFamily: "var(--font-poppins)",
                      fontSize: "1.25rem",
                      fontWeight: "600",
                    }}
                  >
                    {feature.title}
                  </h3>
                  <p
                    className="text-gray-600"
                    style={{ fontFamily: "var(--font-inter)" }}
                  >
                    {feature.description}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 sm:py-20 lg:py-32 bg-gray-50 relative overflow-hidden">
        <FloatingShapes />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-20 relative z-10">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2
              className="text-[#1A1A1A] mb-6"
              style={{
                fontFamily: "var(--font-poppins)",
                fontSize: "clamp(2rem, 4vw, 3rem)",
                fontWeight: "600",
              }}
            >
              How Ungraded Works
            </h2>
            <p
              className="text-gray-700 max-w-3xl mx-auto"
              style={{
                fontFamily: "var(--font-inter)",
                fontSize: "clamp(1rem, 2vw, 1.25rem)",
                lineHeight: "1.6",
              }}
            >
              Four simple steps to transform your feedback process
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                className="relative"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
              >
                <div className="text-center">
                  <motion.div
                    className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-[#2D70C9] text-white mb-6"
                    style={{
                      fontFamily: "var(--font-poppins)",
                      fontSize: "1.5rem",
                      fontWeight: "700",
                    }}
                    whileHover={{ scale: 1.1, rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    {step.number}
                  </motion.div>
                  <h3
                    className="text-[#1A1A1A] mb-3"
                    style={{
                      fontFamily: "var(--font-poppins)",
                      fontSize: "1.25rem",
                      fontWeight: "600",
                    }}
                  >
                    {step.title}
                  </h3>
                  <p
                    className="text-gray-600"
                    style={{ fontFamily: "var(--font-inter)" }}
                  >
                    {step.description}
                  </p>
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-10 left-full w-full h-0.5 bg-[#2D70C9]/20 -translate-x-1/2"></div>
                )}
              </motion.div>
            ))}
          </div>

          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
          >
            <Link to="/roadmap">
              <Button
                variant="outline"
                size="lg"
                style={{
                  fontFamily: "var(--font-poppins)",
                  borderColor: "#2D70C9",
                  color: "#2D70C9",
                }}
              >
                View Product Roadmap <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Testimonials - Hidden until real testimonials are added */}
      {/* <section className="py-16 sm:py-20 lg:py-32 bg-[#EAF2FB] relative overflow-hidden">
        <ParallaxSection speed={0.4} className="absolute inset-0 pointer-events-none opacity-30">
          <div className="absolute top-10 left-1/4 w-64 h-64 bg-white rounded-full blur-2xl"></div>
          <div className="absolute bottom-10 right-1/4 w-80 h-80 bg-[#2D70C9]/10 rounded-full blur-3xl"></div>
        </ParallaxSection>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-20 relative z-10">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 
              className="text-[#1A1A1A] mb-6"
              style={{ 
                fontFamily: 'var(--font-poppins)',
                fontSize: 'clamp(2rem, 4vw, 3rem)',
                fontWeight: '600'
              }}
            >
              Loved by Educators
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <Card className="p-8 h-full bg-white hover:shadow-xl transition-shadow">
                  <div className="flex gap-1 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-[#2D70C9] text-[#2D70C9]" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-6 italic" style={{ fontFamily: 'var(--font-inter)', lineHeight: '1.6' }}>
                    "{testimonial.quote}"
                  </p>
                  <div>
                    <p className="text-[#1A1A1A]" style={{ fontFamily: 'var(--font-poppins)', fontWeight: '600' }}>
                      {testimonial.author}
                    </p>
                    <p className="text-gray-600 text-sm" style={{ fontFamily: 'var(--font-inter)' }}>
                      {testimonial.role}
                    </p>
                    <p className="text-gray-500 text-sm" style={{ fontFamily: 'var(--font-inter)' }}>
                      {testimonial.school}
                    </p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}

      {/* CTA Section */}
      <motion.section
        className="bg-[#2D70C9] py-16 sm:py-20 lg:py-28 relative overflow-hidden"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <ParallaxSection
          speed={-0.2}
          className="absolute inset-0 pointer-events-none opacity-10"
        >
          <div className="absolute top-20 right-20 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 left-20 w-72 h-72 bg-white rounded-full blur-3xl"></div>
        </ParallaxSection>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-20 text-center relative z-10">
          <motion.h2
            className="text-white mb-6"
            style={{
              fontFamily: "var(--font-poppins)",
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: "600",
            }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Ready to Transform Your Feedback Process?
          </motion.h2>
          <motion.p
            className="text-white/90 mb-8 text-lg"
            style={{ fontFamily: "var(--font-inter)" }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Join educators using Ungraded to give meaningful feedback at scale.
          </motion.p>
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
                    paddingLeft: "2.5rem",
                    paddingRight: "2.5rem",
                    paddingTop: "1.75rem",
                    paddingBottom: "1.75rem",
                  }}
                >
                  Start Free Trial
                </Button>
              </a>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link to="/about">
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full sm:w-auto hover:bg-white/10"
                  style={{
                    fontFamily: "var(--font-poppins)",
                    borderColor: "white",
                    color: "white",
                    backgroundColor: "transparent",
                    paddingLeft: "2.5rem",
                    paddingRight: "2.5rem",
                    paddingTop: "1.75rem",
                    paddingBottom: "1.75rem",
                  }}
                >
                  Learn About Us
                </Button>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
}
