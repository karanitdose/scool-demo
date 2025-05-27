"use client"

import Link from 'next/link';
import { motion } from '@/lib/framer-motion';
import { Button } from '@/components/ui/button';
import { useState, useEffect } from 'react';

export function CTASection() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto bg-gradient-to-r from-pink-500 to-blue-500 rounded-2xl overflow-hidden shadow-xl">
          <div className="grid md:grid-cols-5 w-full">
            <div className="md:col-span-3 p-8 md:p-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="space-y-5"
              >
                <h2 className="text-3xl md:text-4xl font-bold text-white">
                  Ready to Transform Your Academic Experience?
                </h2>
                <p className="text-white/90 text-lg max-w-md">
                  Join thousands of students who are already using StudyHub to organize their studies, access resources, and excel in their academic pursuits.
                </p>
                <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4 pt-2">
                  <Button size="lg" className="bg-white text-pink-600 hover:bg-gray-100">
                    Get Started Today
                  </Button>
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                    Schedule a Demo
                  </Button>
                </div>
              </motion.div>
            </div>
            
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="md:col-span-2 relative hidden md:block"
            >
              <img
                src="https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Student using laptop"
                className="h-full w-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}