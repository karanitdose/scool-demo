"use client"

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { 
  Card, 
  CardContent, 
  CardHeader, 
  CardTitle 
} from '@/components/ui/card';
import {
  Calendar as CalendarIcon,
  BookOpen,
  Clock,
  Users,
  Settings,
  Plus,
  Search
} from 'lucide-react';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';

export default function TimetableSidebar() {
  const [showUpcoming, setShowUpcoming] = useState(true);

  // Mock upcoming classes
  const upcomingClasses = [
    { id: 1, name: "Mathematics 101", time: "Today, 11:00 AM", room: "Math Building, Room 305" },
    { id: 2, name: "Physics Lab", time: "Today, 2:00 PM", room: "Science Center, Lab 150" },
    { id: 3, name: "English Literature", time: "Tomorrow, 9:00 AM", room: "Arts Building, Room 210" },
  ];

  return (
    <div className="space-y-6">
      {/* Quick Actions */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle>Quick Actions</CardTitle>
        </CardHeader>
        <CardContent className="grid gap-3">
          <Button className="w-full justify-start bg-pink-500 hover:bg-pink-600">
            <CalendarIcon className="mr-2 h-4 w-4" />
            View Full Schedule
          </Button>
          <Button className="w-full justify-start" variant="outline">
            <Plus className="mr-2 h-4 w-4" />
            Add Class
          </Button>
          <Button className="w-full justify-start" variant="outline">
            <BookOpen className="mr-2 h-4 w-4" />
            Visit Library
          </Button>
        </CardContent>
      </Card>

      {/* Upcoming Classes */}
      <Card>
        <CardHeader className="pb-3 flex flex-row items-center justify-between">
          <CardTitle>Upcoming Classes</CardTitle>
          <div className="flex items-center space-x-2">
            <Switch id="show-upcoming" checked={showUpcoming} onCheckedChange={setShowUpcoming} />
            <Label htmlFor="show-upcoming">Show</Label>
          </div>
        </CardHeader>
        <CardContent>
          {showUpcoming ? (
            <ScrollArea className="h-72">
              <div className="space-y-4">
                {upcomingClasses.map((cls) => (
                  <div key={cls.id} className="bg-gray-50 dark:bg-gray-800 p-3 rounded-md">
                    <h3 className="font-medium text-blue-600 dark:text-blue-400">{cls.name}</h3>
                    <div className="text-sm text-gray-600 dark:text-gray-400 mt-1 flex items-center">
                      <Clock className="h-3.5 w-3.5 mr-1" />
                      {cls.time}
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400 mt-1 flex items-center">
                      <CalendarIcon className="h-3.5 w-3.5 mr-1" />
                      {cls.room}
                    </div>
                  </div>
                ))}
              </div>
            </ScrollArea>
          ) : (
            <div className="flex flex-col items-center justify-center h-40 text-center text-gray-500">
              <Clock className="h-8 w-8 mb-2 text-gray-400" />
              <p>Upcoming classes are hidden</p>
              <p className="text-sm">Toggle the switch to view</p>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Search */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle>Search</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center space-x-2">
            <Input placeholder="Find a class..." />
            <Button size="icon" variant="ghost">
              <Search className="h-4 w-4" />
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Settings */}
      <Button variant="outline" className="w-full">
        <Settings className="mr-2 h-4 w-4" />
        Timetable Settings
      </Button>
    </div>
  );
}