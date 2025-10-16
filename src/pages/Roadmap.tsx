import { Badge } from "../components/ui/badge";
import { Card } from "../components/ui/card";
import { FloatingShapes } from "../components/FloatingShapes";
import { motion } from "motion/react";
import { 
  Check, 
  Loader, 
  Clock, 
  Sparkles,
  MessageSquare,
  BarChart,
  Code,
  Users,
  Zap,
  Shield,
  BookOpen,
  Lightbulb,
  Target
} from "lucide-react";

interface RoadmapFeature {
  icon: any;
  title: string;
  description: string;
  status: string;
}

interface RoadmapItem {
  quarter: string;
  monthLabel: string;
  status: string;
  features: RoadmapFeature[];
}

export function Roadmap() {
  const roadmapItems: RoadmapItem[] = [
    {
      quarter: "Q3 2025",
      monthLabel: "July - September 2025",
      status: "completed",
      features: [
        {
          icon: Target,
          title: "Foundation & UBC Venture Program",
          description: "e@UBC Venture Founder program completion. Product vision set to build AI-powered alternative/mastery grading platform.",
          status: "completed"
        },
        {
          icon: Users,
          title: "Core Platform Structures",
          description: "Basic structures for teachers, classes, student registration, and assignments.",
          status: "completed"
        },
        {
          icon: BookOpen,
          title: "Custom Learning Objectives",
          description: "Teachers can define custom learning objectives and assessment levels per class. Track student progress towards mastery grading rubric.",
          status: "completed"
        },
        {
          icon: Sparkles,
          title: "AI Pre-Grading System",
          description: "AI pre-grading of student submissions with teacher reports, grading of questions, and recommended assessment level per learning objective.",
          status: "completed"
        },
        {
          icon: MessageSquare,
          title: "Student Submissions & Feedback",
          description: "Students can submit assignments online (PDF, text, image) and receive immediate, personalized AI feedback.",
          status: "completed"
        },
        {
          icon: MessageSquare,
          title: "AI Chat for Students",
          description: "AI chat feature helps students better understand how they performed on assignments. Assignment summary reports speed up teacher grading.",
          status: "completed"
        }
      ]
    },
    {
      quarter: "Q4 2025",
      monthLabel: "October 2025",
      status: "in-progress",
      features: [
        {
          icon: MessageSquare,
          title: "Interactive Assessment",
          description: "Expand AI student chat to perform interactive assessment based on assignment-specific learning goals (Bloom's Taxonomy).",
          status: "in-progress"
        },
        {
          icon: BarChart,
          title: "Enhanced Teacher Reports",
          description: "Update teacher report to include analysis of interactive assessment. Increase recommended assessment level if chat reveals better understanding.",
          status: "in-progress"
        },
        {
          icon: Shield,
          title: "Submission Verification",
          description: "Alert when submission does not match interactive assessment.",
          status: "in-progress"
        },
        {
          icon: Lightbulb,
          title: "Re-submission Support",
          description: "Help students improve through re-submission of the same assignment.",
          status: "in-progress"
        }
      ]
    },
    {
      quarter: "Q4 2025",
      monthLabel: "November 2025",
      status: "planned",
      features: [
        {
          icon: BarChart,
          title: "Student Summary View",
          description: "Comprehensive student summary view for teachers to track overall progress.",
          status: "planned"
        },
        {
          icon: Users,
          title: "Automated Billing for Tutors",
          description: "Automated student billing system for tutors.",
          status: "planned"
        },
        {
          icon: Users,
          title: "Community Accounts",
          description: "Free community accounts for members sharing course materials and alternative grading configurations.",
          status: "planned"
        },
        {
          icon: Zap,
          title: "Paid Accounts",
          description: "Paid accounts for high-volume users.",
          status: "planned"
        }
      ]
    },
    {
      quarter: "Q4 2025 / Q1 2026",
      monthLabel: "December 2025 - January 2026",
      status: "planned",
      features: [
        {
          icon: BookOpen,
          title: "LMS Integration",
          description: "Google Classroom and Canvas integration for seamless workflow.",
          status: "planned"
        },
        {
          icon: Shield,
          title: "Learning Objectives Approval",
          description: "Approval process for learning objectives before class begins with automated check against mandated standards.",
          status: "planned"
        },
        {
          icon: BarChart,
          title: "Class-Level Reporting",
          description: "Comprehensive reporting at class level for institutional oversight.",
          status: "planned"
        },
        {
          icon: Sparkles,
          title: "IP Marketplace",
          description: "Marketplace for institution-owned intellectual property.",
          status: "planned"
        }
      ]
    }
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "completed":
        return (
          <Badge className="bg-green-100 text-green-700 border-green-200" style={{ fontFamily: 'var(--font-poppins)' }}>
            <Check className="w-3 h-3 mr-1" />
            Completed
          </Badge>
        );
      case "in-progress":
        return (
          <Badge className="bg-blue-100 text-blue-700 border-blue-200" style={{ fontFamily: 'var(--font-poppins)' }}>
            <Loader className="w-3 h-3 mr-1 animate-spin" />
            In Progress
          </Badge>
        );
      case "planned":
        return (
          <Badge className="bg-gray-100 text-gray-700 border-gray-200" style={{ fontFamily: 'var(--font-poppins)' }}>
            <Clock className="w-3 h-3 mr-1" />
            Planned
          </Badge>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-white pt-20">
      {/* Hero Section */}
      <section 
        className="relative overflow-hidden py-16 sm:py-20 lg:py-32"
        style={{
          background: 'linear-gradient(180deg, #FFFFFF 0%, #EAF2FB 100%)',
        }}
      >
        <FloatingShapes />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-20 relative z-10">
          <motion.div 
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1 
              className="text-[#1A1A1A] mb-6"
              style={{ 
                fontFamily: 'var(--font-poppins)',
                fontSize: 'clamp(2.5rem, 5vw, 4rem)',
                fontWeight: '700',
                lineHeight: '1.1'
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              Product Roadmap
            </motion.h1>
            <motion.p 
              className="text-gray-700 mb-8"
              style={{ 
                fontFamily: 'var(--font-inter)',
                fontSize: 'clamp(1.125rem, 2vw, 1.375rem)',
                lineHeight: '1.6'
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              Our journey from the e@UBC Venture program to building a comprehensive AI-powered mastery grading platform. Here's what we've built and what's coming next.
            </motion.p>
            
            <motion.div 
              className="flex flex-wrap justify-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              {getStatusBadge("completed")}
              {getStatusBadge("in-progress")}
              {getStatusBadge("planned")}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Roadmap Timeline */}
      <section className="py-16 sm:py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-20">
          <div className="space-y-12 lg:space-y-16">
            {roadmapItems.map((item, itemIndex) => (
              <motion.div
                key={itemIndex}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: itemIndex * 0.1 }}
              >
                {/* Quarter Header */}
                <div className="flex items-center gap-4 mb-8">
                  <div className="flex-shrink-0">
                    <div 
                      className="w-16 h-16 rounded-full bg-[#2D70C9] flex items-center justify-center text-white"
                      style={{ fontFamily: 'var(--font-poppins)', fontWeight: '700' }}
                    >
                      {itemIndex + 1}
                    </div>
                  </div>
                  <div className="flex-grow">
                    <h2 
                      className="text-[#1A1A1A] mb-1"
                      style={{ 
                        fontFamily: 'var(--font-poppins)',
                        fontSize: 'clamp(1.5rem, 3vw, 2rem)',
                        fontWeight: '600'
                      }}
                    >
                      {item.quarter}
                    </h2>
                    <p 
                      className="text-gray-600 text-sm mb-2"
                      style={{ fontFamily: 'var(--font-inter)' }}
                    >
                      {item.monthLabel}
                    </p>
                    {getStatusBadge(item.status)}
                  </div>
                  {itemIndex < roadmapItems.length - 1 && (
                    <div className="hidden lg:block flex-grow border-t-2 border-dashed border-gray-300"></div>
                  )}
                </div>

                {/* Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {item.features.map((feature, featureIndex) => (
                    <motion.div
                      key={featureIndex}
                      initial={{ opacity: 0, scale: 0.95 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: featureIndex * 0.1 }}
                      whileHover={{ y: -5, scale: 1.02 }}
                    >
                      <Card className="p-6 h-full hover:shadow-xl transition-shadow border-gray-100">
                        <motion.div 
                          className="w-12 h-12 rounded-lg bg-[#EAF2FB] flex items-center justify-center mb-4"
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          transition={{ duration: 0.3 }}
                        >
                          <feature.icon className="w-6 h-6 text-[#2D70C9]" strokeWidth={2} />
                        </motion.div>
                        <h3 
                          className="text-[#1A1A1A] mb-2"
                          style={{ fontFamily: 'var(--font-poppins)', fontWeight: '600' }}
                        >
                          {feature.title}
                        </h3>
                        <p 
                          className="text-gray-600 mb-4 text-sm"
                          style={{ fontFamily: 'var(--font-inter)' }}
                        >
                          {feature.description}
                        </p>
                        <div className="mt-auto">
                          {getStatusBadge(feature.status)}
                        </div>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Feedback Section */}
      <section className="py-16 sm:py-20 lg:py-32 bg-[#EAF2FB]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Lightbulb className="w-16 h-16 text-[#2D70C9] mx-auto mb-6" />
            <h2 
              className="text-[#1A1A1A] mb-6"
              style={{ 
                fontFamily: 'var(--font-poppins)',
                fontSize: 'clamp(1.75rem, 4vw, 2.5rem)',
                fontWeight: '600'
              }}
            >
              Have a Feature Request?
            </h2>
            <p 
              className="text-gray-700 mb-8"
              style={{ 
                fontFamily: 'var(--font-inter)',
                fontSize: 'clamp(1rem, 2vw, 1.125rem)',
                lineHeight: '1.6'
              }}
            >
              We're building Ungraded with educators, for educators. Your feedback shapes our roadmap.
            </p>
            <motion.button
              className="bg-[#2D70C9] text-white px-8 py-4 rounded-lg hover:bg-[#2558a0] transition-colors"
              style={{ fontFamily: 'var(--font-poppins)', fontWeight: '600' }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Share Your Ideas
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
