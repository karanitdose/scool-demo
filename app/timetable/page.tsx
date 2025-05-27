"use client"

import { useState } from 'react';
import { format, startOfWeek, addDays, addWeeks, subWeeks, isSameDay } from 'date-fns';
import { 
  ChevronLeft, 
  ChevronRight, 
  Clock, 
  MapPin, 
  User
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import TimetableSidebar from '@/components/timetable/timetable-sidebar';

// Mock timetable data
const timeSlots = Array.from({ length: 12 }, (_, i) => `${i + 8}:00`);

type Course = {
  id: string;
  name: string;
  instructor: string;
  location: string;
  day: number; // 0 = Sunday, 1 = Monday, etc.
  startTime: string;
  endTime: string;
  color: string;
}

const mockCourses: Course[] = [
  {
    id: "cs101",
    name: "Introduction to Computer Science",
    instructor: "Dr. Alan Turing",
    location: "Tech Building, Room 101",
    day: 1, // Monday
    startTime: "9:00",
    endTime: "10:30",
    color: "bg-blue-100 border-blue-500 text-blue-800 dark:bg-blue-900/30 dark:border-blue-700 dark:text-blue-300"
  },
  {
    id: "math201",
    name: "Calculus II",
    instructor: "Dr. Ada Lovelace",
    location: "Math Building, Room 305",
    day: 1, // Monday
    startTime: "13:00",
    endTime: "14:30",
    color: "bg-pink-100 border-pink-500 text-pink-800 dark:bg-pink-900/30 dark:border-pink-700 dark:text-pink-300"
  },
  {
    id: "eng102",
    name: "English Composition",
    instructor: "Prof. Emily Brontë",
    location: "Arts Building, Room 210",
    day: 2, // Tuesday
    startTime: "11:00",
    endTime: "12:30",
    color: "bg-green-100 border-green-500 text-green-800 dark:bg-green-900/30 dark:border-green-700 dark:text-green-300"
  },
  {
    id: "phys101",
    name: "Physics I",
    instructor: "Dr. Richard Feynman",
    location: "Science Center, Lab 150",
    day: 3, // Wednesday
    startTime: "9:00",
    endTime: "10:30",
    color: "bg-purple-100 border-purple-500 text-purple-800 dark:bg-purple-900/30 dark:border-purple-700 dark:text-purple-300"
  },
  {
    id: "cs205",
    name: "Data Structures",
    instructor: "Dr. Grace Hopper",
    location: "Tech Building, Room 205",
    day: 3, // Wednesday
    startTime: "14:00",
    endTime: "15:30",
    color: "bg-blue-100 border-blue-500 text-blue-800 dark:bg-blue-900/30 dark:border-blue-700 dark:text-blue-300"
  },
  {
    id: "hist101",
    name: "World History",
    instructor: "Prof. Howard Zinn",
    location: "Humanities Building, Room 110",
    day: 4, // Thursday
    startTime: "11:00",
    endTime: "12:30",
    color: "bg-amber-100 border-amber-500 text-amber-800 dark:bg-amber-900/30 dark:border-amber-700 dark:text-amber-300"
  },
  {
    id: "math201-lab",
    name: "Calculus II Lab",
    instructor: "TA Jennifer Mathews",
    location: "Math Building, Lab 101",
    day: 5, // Friday
    startTime: "10:00",
    endTime: "12:00",
    color: "bg-pink-100 border-pink-500 text-pink-800 dark:bg-pink-900/30 dark:border-pink-700 dark:text-pink-300"
  }
];

export default function TimetablePage() {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [currentView, setCurrentView] = useState<'week' | 'day'>('week');

  const startDate = startOfWeek(currentDate, { weekStartsOn: 1 }); // Week starts on Monday

  const weekDays = Array.from({ length: 7 }, (_, i) => {
    const day = addDays(startDate, i);
    return {
      date: day,
      name: format(day, 'EEEE'), // Monday, Tuesday, etc.
      shortName: format(day, 'EEE'), // Mon, Tue, etc.
    };
  });

  const prevWeek = () => setCurrentDate(subWeeks(currentDate, 1));
  const nextWeek = () => setCurrentDate(addWeeks(currentDate, 1));
  const today = () => setCurrentDate(new Date());

  // Filter courses for the selected day in day view
  const getDayCourses = (day: number) => {
    return mockCourses.filter(course => course.day === day);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-6">
        {/* Sidebar - hidden on mobile */}
        <div className="hidden md:block md:w-1/4 lg:w-1/5">
          <TimetableSidebar />
        </div>

        {/* Main content */}
        <div className="w-full md:w-3/4 lg:w-4/5">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6">
            {/* Header with navigation and view options */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 space-y-4 sm:space-y-0">
              <div>
                <h1 className="text-2xl font-bold">Student Timetable</h1>
                <p className="text-gray-500 dark:text-gray-400">
                  {currentView === 'week'
                    ? `${format(startDate, 'MMMM d')} - ${format(addDays(startDate, 6), 'MMMM d, yyyy')}`
                    : format(currentDate, 'MMMM d, yyyy')}
                </p>
              </div>
              
              <div className="flex items-center space-x-2">
                <Button variant="outline" size="sm" onClick={prevWeek}>
                  <ChevronLeft className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="sm" onClick={today}>Today</Button>
                <Button variant="outline" size="sm" onClick={nextWeek}>
                  <ChevronRight className="h-4 w-4" />
                </Button>
                
                <div className="ml-4">
                  <Tabs value={currentView} onValueChange={(value) => setCurrentView(value as 'week' | 'day')}>
                    <TabsList>
                      <TabsTrigger value="week">Week</TabsTrigger>
                      <TabsTrigger value="day">Day</TabsTrigger>
                    </TabsList>
                  </Tabs>
                </div>
              </div>
            </div>

            {/* Timetable grid */}
            {currentView === 'week' ? (
              <div className="overflow-x-auto">
                <div className="min-w-[900px]">
                  {/* Day headers */}
                  <div className="grid grid-cols-[80px_repeat(7,1fr)] gap-2 mb-2">
                    <div className="text-gray-400 text-sm"></div>
                    {weekDays.map((day, i) => (
                      <div 
                        key={i} 
                        className={`text-center p-2 font-medium rounded-md ${
                          isSameDay(day.date, new Date()) 
                            ? 'bg-pink-100 text-pink-700 dark:bg-pink-900/30 dark:text-pink-400'
                            : 'bg-gray-100 dark:bg-gray-700'
                        }`}
                      >
                        <div className="text-sm">{day.shortName}</div>
                        <div className="text-lg">{format(day.date, 'd')}</div>
                      </div>
                    ))}
                  </div>
                  
               
                </div>
              </div>
            ) : (
              <div>
                <div className="flex justify-center mb-4">
                  <div className="flex space-x-2">
                    {weekDays.map((day, i) => (
                      <Button
                        key={i}
                        variant={isSameDay(currentDate, day.date) ? "default" : "outline"}
                        size="sm"
                        onClick={() => setCurrentDate(day.date)}
                        className="min-w-[80px]"
                      >
                        <div className="flex flex-col items-center">
                          <span className="text-xs">{day.shortName}</span>
                          <span>{format(day.date, 'd')}</span>
                        </div>
                      </Button>
                    ))}
                  </div>
                </div>
                
                <div className="space-y-4">
                  <h2 className="text-xl font-semibold">
                    {format(currentDate, 'EEEE, MMMM d')}
                  </h2>
                  
                  <div className="space-y-3">
                    {getDayCourses(new Date(currentDate).getDay()).length > 0 ? (
                      getDayCourses(new Date(currentDate).getDay()).map((course, i) => (
                        <Card key={i} className={`p-4 ${course.color}`}>
                          <div className="flex justify-between items-start">
                            <div>
                              <h3 className="font-semibold text-lg">{course.name}</h3>
                              <div className="flex items-center mt-2 text-sm">
                                <Clock className="h-4 w-4 mr-2" />
                                <span>{course.startTime} - {course.endTime}</span>
                              </div>
                              <div className="flex items-center mt-1 text-sm">
                                <MapPin className="h-4 w-4 mr-2" />
                                <span>{course.location}</span>
                              </div>
                              <div className="flex items-center mt-1 text-sm">
                                <User className="h-4 w-4 mr-2" />
                                <span>{course.instructor}</span>
                              </div>
                            </div>
                            <Button variant="outline" size="sm">
                              View Details
                            </Button>
                          </div>
                        </Card>
                      ))
                    ) : (
                      <div className="text-center py-8 bg-gray-50 dark:bg-gray-800 rounded-lg">
                        <p className="text-gray-500 dark:text-gray-400">No classes scheduled for this day</p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}