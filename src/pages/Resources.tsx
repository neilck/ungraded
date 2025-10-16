import { useState } from "react";
import { Card } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { Input } from "../components/ui/input";
import { Button } from "../components/ui/button";
import { FloatingShapes } from "../components/FloatingShapes";
import { ImageWithSkeleton } from "../components/ImageWithSkeleton";
import { motion } from "motion/react";
import { 
  Search,
  BookOpen,
  Video,
  FileText,
  Lightbulb,
  TrendingUp,
  Users,
  Clock,
  ArrowRight
} from "lucide-react";

type Category = "all" | "guides" | "videos" | "case-studies" | "blog";

export function Resources() {
  const [activeCategory, setActiveCategory] = useState<Category>("all");
  const [searchQuery, setSearchQuery] = useState("");

  const categories = [
    { id: "all" as Category, label: "All Resources", icon: BookOpen },
    { id: "guides" as Category, label: "Guides", icon: FileText },
    { id: "videos" as Category, label: "Videos", icon: Video },
    { id: "case-studies" as Category, label: "Case Studies", icon: TrendingUp },
    { id: "blog" as Category, label: "Blog", icon: Lightbulb },
  ];

  const resources = [
    {
      category: "guides",
      title: "Getting Started with AI Feedback",
      description: "A comprehensive guide to implementing AI-powered feedback in your classroom.",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
      readTime: "8 min read",
      date: "March 15, 2025"
    },
    {
      category: "videos",
      title: "How to Create Effective Verification Quizzes",
      description: "Watch how top educators use Ungraded to verify student understanding.",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
      readTime: "12 min watch",
      date: "March 12, 2025"
    },
    {
      category: "case-studies",
      title: "UBC Professor Saves 10 Hours Per Week",
      description: "How Dr. Sarah Chen transformed her grading process with Ungraded.",
      image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
      readTime: "6 min read",
      date: "March 10, 2025"
    },
    {
      category: "blog",
      title: "The Future of Educational Assessment",
      description: "Why traditional grading is broken and how AI can help fix it.",
      image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
      readTime: "10 min read",
      date: "March 8, 2025"
    },
    {
      category: "guides",
      title: "Best Practices for Ethical AI Detection",
      description: "How to use AI detection responsibly and turn it into a learning opportunity.",
      image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
      readTime: "7 min read",
      date: "March 5, 2025"
    },
    {
      category: "videos",
      title: "Setting Up Your First Assignment",
      description: "A step-by-step walkthrough of creating your first Ungraded assignment.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
      readTime: "8 min watch",
      date: "March 3, 2025"
    },
    {
      category: "case-studies",
      title: "Math Department Improves Student Engagement by 40%",
      description: "How personalized feedback led to better learning outcomes.",
      image: "https://images.unsplash.com/photo-1509228627152-72ae9ae6848d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
      readTime: "9 min read",
      date: "March 1, 2025"
    },
    {
      category: "blog",
      title: "Understanding vs. Grades: A New Paradigm",
      description: "Rethinking assessment in the age of AI and personalized learning.",
      image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
      readTime: "11 min read",
      date: "February 28, 2025"
    },
    {
      category: "guides",
      title: "Analyzing Student Progress with Ungraded Analytics",
      description: "Learn how to use the analytics dashboard to track learning patterns.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600",
      readTime: "12 min read",
      date: "February 25, 2025"
    }
  ];

  const filteredResources = resources.filter(resource => {
    const matchesCategory = activeCategory === "all" || resource.category === activeCategory;
    const matchesSearch = resource.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         resource.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

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
            className="text-center max-w-4xl mx-auto mb-12"
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
              Resources & Learning
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
              Guides, case studies, and insights to help you get the most out of Ungraded.
            </motion.p>

            {/* Search Bar */}
            <motion.div 
              className="relative max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input
                type="text"
                placeholder="Search resources..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 pr-4 py-6 text-lg rounded-xl border-gray-200 focus:border-[#2D70C9] focus:ring-[#2D70C9]"
                style={{ fontFamily: 'var(--font-inter)' }}
              />
            </motion.div>
          </motion.div>

          {/* Category Filter */}
          <motion.div 
            className="flex flex-wrap justify-center gap-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            {categories.map((category, index) => (
              <motion.button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-3 rounded-lg flex items-center gap-2 transition-all ${
                  activeCategory === category.id
                    ? 'bg-[#2D70C9] text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200'
                }`}
                style={{ fontFamily: 'var(--font-poppins)', fontWeight: '500' }}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 + index * 0.05 }}
              >
                <category.icon className="w-4 h-4" />
                {category.label}
              </motion.button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Resources Grid */}
      <section className="py-16 sm:py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-20">
          {/* Results Count */}
          <motion.div 
            className="mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <p className="text-gray-600" style={{ fontFamily: 'var(--font-inter)' }}>
              Showing <span className="font-semibold text-[#2D70C9]">{filteredResources.length}</span> resources
            </p>
          </motion.div>

          {/* Resources Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredResources.map((resource, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
              >
                <Card className="overflow-hidden h-full hover:shadow-xl transition-shadow border-gray-100 flex flex-col">
                  <div className="relative h-48 overflow-hidden">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.4 }}
                    >
                      <ImageWithSkeleton
                        src={resource.image}
                        alt={resource.title}
                        className="w-full h-48 object-cover"
                      />
                    </motion.div>
                    <div className="absolute top-4 left-4">
                      <Badge 
                        className="bg-white/90 backdrop-blur-sm text-[#2D70C9] border-[#2D70C9]/20"
                        style={{ fontFamily: 'var(--font-poppins)' }}
                      >
                        {resource.category}
                      </Badge>
                    </div>
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 
                      className="text-[#1A1A1A] mb-3 line-clamp-2"
                      style={{ fontFamily: 'var(--font-poppins)', fontSize: '1.25rem', fontWeight: '600' }}
                    >
                      {resource.title}
                    </h3>
                    <p 
                      className="text-gray-600 mb-4 flex-grow line-clamp-3"
                      style={{ fontFamily: 'var(--font-inter)' }}
                    >
                      {resource.description}
                    </p>
                    <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4" />
                        <span style={{ fontFamily: 'var(--font-inter)' }}>{resource.readTime}</span>
                      </div>
                      <span style={{ fontFamily: 'var(--font-inter)' }}>{resource.date}</span>
                    </div>
                    <motion.button
                      className="text-[#2D70C9] flex items-center gap-2 group"
                      style={{ fontFamily: 'var(--font-poppins)', fontWeight: '600' }}
                      whileHover={{ x: 5 }}
                    >
                      Read More 
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </motion.button>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Empty State */}
          {filteredResources.length === 0 && (
            <motion.div 
              className="text-center py-20"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <BookOpen className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <h3 
                className="text-[#1A1A1A] mb-2"
                style={{ fontFamily: 'var(--font-poppins)', fontSize: '1.5rem', fontWeight: '600' }}
              >
                No resources found
              </h3>
              <p className="text-gray-600" style={{ fontFamily: 'var(--font-inter)' }}>
                Try adjusting your search or filter criteria
              </p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 sm:py-20 lg:py-32 bg-[#EAF2FB]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Users className="w-16 h-16 text-[#2D70C9] mx-auto mb-6" />
            <h2 
              className="text-[#1A1A1A] mb-6"
              style={{ 
                fontFamily: 'var(--font-poppins)',
                fontSize: 'clamp(1.75rem, 4vw, 2.5rem)',
                fontWeight: '600'
              }}
            >
              Stay Updated
            </h2>
            <p 
              className="text-gray-700 mb-8"
              style={{ 
                fontFamily: 'var(--font-inter)',
                fontSize: 'clamp(1rem, 2vw, 1.125rem)',
                lineHeight: '1.6'
              }}
            >
              Get the latest resources, tips, and updates delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
              <Input
                type="email"
                placeholder="Enter your email"
                className="flex-grow py-6"
                style={{ fontFamily: 'var(--font-inter)' }}
              />
              <Button
                className="bg-[#2D70C9] hover:bg-[#2558a0] px-8 py-6"
                style={{ fontFamily: 'var(--font-poppins)', fontWeight: '600' }}
              >
                Subscribe
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
