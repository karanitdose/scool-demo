"use client"

import { useState, useEffect } from 'react';
import { 
  Calendar, 
  Clock, 
  BookOpen, 
  Users, 
  Bell, 
  BarChart3
} from 'lucide-react';
import { motion } from '@/lib/framer-motion';
import { cn } from '@/lib/utils';

const features = [
  {
    title: "Interactive Timetable",
    description: "Manage your class schedule with our intuitive timetable system. View by day, week, or month.",
    icon: <Calendar className="h-10 w-10 text-pink-500" />,
    color: "bg-pink-100 dark:bg-pink-900/20",
  },
  {
    title: "Digital Library",
    description: "Access thousands of books, journals, and academic resources from our comprehensive digital library.",
    icon: <BookOpen className="h-10 w-10 text-blue-500" />,
    color: "bg-blue-100 dark:bg-blue-900/20",
  },
  {
    title: "Real-time Notifications",
    description: "Stay updated with important announcements, deadline reminders, and class changes.",
    icon: <Bell className="h-10 w-10 text-orange-500" />,
    color: "bg-orange-100 dark:bg-orange-900/20",
  },
  {
    title: "Study Group Management",
    description: "Create and join study groups, schedule meetings, and collaborate with your peers.",
    icon: <Users className="h-10 w-10 text-green-500" />,
    color: "bg-green-100 dark:bg-green-900/20",
  },
  {
    title: "Progress Tracking",
    description: "Monitor your academic performance with detailed analytics and progress reports.",
    icon: <BarChart3 className="h-10 w-10 text-purple-500" />,
    color: "bg-purple-100 dark:bg-purple-900/20",
  },
  {
    title: "Assignment Reminders",
    description: "Never miss a deadline with our assignment tracking and reminder system.",
    icon: <Clock className="h-10 w-10 text-amber-500" />,
    color: "bg-amber-100 dark:bg-amber-900/20",
  },
];

export function FeaturesSection() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Powerful Features for <span className="text-pink-500">Modern Students</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Our comprehensive suite of tools designed to enhance your academic experience and help you succeed.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-gray-100 dark:border-gray-700"
            >
              <div className={cn("rounded-full w-16 h-16 flex items-center justify-center mb-6", feature.color)}>
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-600 dark:text-gray-400">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}