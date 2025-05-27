"use client"

import { useState, useEffect } from 'react';
import { motion } from '@/lib/framer-motion';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { StarIcon } from 'lucide-react';

const testimonials = [
  {
    name: "Alex Johnson",
    role: "Computer Science Student",
    quote: "StudyHub has completely transformed my academic life. The timetable feature helps me stay organized, and the library has every resource I need.",
    avatar: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=300",
    rating: 5
  },
  {
    name: "Sarah Williams",
    role: "Biology Major",
    quote: "I love how easy it is to find books in the digital library. The interface is intuitive, and I can access everything I need for my research papers.",
    avatar: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=300",
    rating: 5
  },
  {
    name: "Michael Chen",
    role: "Engineering Student",
    quote: "The timetable system has helped me manage my complex schedule with labs and lectures. I can't imagine studying without StudyHub now.",
    avatar: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=300",
    rating: 4
  },
  {
    name: "Emily Rodriguez",
    role: "Literature Major",
    quote: "As someone who reads a lot, having access to the digital library has saved me so much money on textbooks and novels for my courses.",
    avatar: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=300",
    rating: 5
  },
];

export function TestimonialsSection() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What Our <span className="text-blue-500">Students</span> Say
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            See how StudyHub has helped students improve their academic experience and achieve their goals.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3 pl-4">
                  <Card className="h-full">
                    <CardContent className="p-6 flex flex-col h-full">
                      <div className="flex items-center mb-4">
                        {[...Array(5)].map((_, i) => (
                          <StarIcon 
                            key={i} 
                            className={`h-4 w-4 ${i < testimonial.rating ? 'text-amber-400 fill-amber-400' : 'text-gray-300'}`} 
                          />
                        ))}
                      </div>
                      <blockquote className="text-gray-700 dark:text-gray-300 mb-6 flex-grow">
                        "{testimonial.quote}"
                      </blockquote>
                      <div className="flex items-center mt-auto">
                        <div className="h-10 w-10 rounded-full overflow-hidden mr-3">
                          <img 
                            src={testimonial.avatar} 
                            alt={testimonial.name}
                            className="h-full w-full object-cover"
                          />
                        </div>
                        <div>
                          <p className="font-semibold">{testimonial.name}</p>
                          <p className="text-sm text-gray-500 dark:text-gray-400">{testimonial.role}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-0" />
            <CarouselNext className="right-0" />
          </Carousel>
        </motion.div>
      </div>
    </section>
  );
}