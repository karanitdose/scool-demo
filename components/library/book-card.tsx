"use client"

import { useState } from 'react';
import { 
  Calendar, 
  Check, 
  Clock, 
  BookMarked,
  Share 
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Badge } from '@/components/ui/badge';
import { 
  Dialog, 
  DialogContent, 
  DialogDescription, 
  DialogFooter, 
  DialogHeader, 
  DialogTitle 
} from "@/components/ui/dialog";

interface Book {
  id: string;
  title: string;
  author: string;
  cover: string;
  category: string;
  description: string;
  rating: number;
  available: boolean;
  publicationYear: number;
}

interface BookCardProps {
  book: Book;
}

export default function BookCard({ book }: BookCardProps) {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <>
      <Card className="overflow-hidden h-full flex flex-col transition-all duration-200 hover:shadow-lg">
        <div className="relative aspect-[2/3] overflow-hidden bg-gray-100 dark:bg-gray-800">
          <img 
            src={book.cover} 
            alt={book.title}
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
          />
          <Badge 
            variant={book.available ? "success" : "destructive"} 
            className={`absolute top-2 right-2 ${book.available ? 'bg-green-500' : 'bg-red-500'}`}
          >
            {book.available ? "Available" : "Borrowed"}
          </Badge>
        </div>
        <CardContent className="p-4 flex flex-col flex-grow">
          <h3 className="font-semibold line-clamp-1 text-gray-900 dark:text-gray-100">{book.title}</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">by {book.author}</p>
          
          <div className="flex items-center mt-1 mb-3">
            {[...Array(5)].map((_, i) => (
              <svg
                key={i}
                className={`h-4 w-4 ${i < book.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
              </svg>
            ))}
            <span className="text-xs text-gray-500 dark:text-gray-400 ml-1">({book.rating.toFixed(1)})</span>
          </div>

          <div className="mt-auto pt-3 flex justify-between items-center">
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button size="sm" variant="ghost" className="text-gray-500 hover:text-blue-500 p-1">
                    <BookMarked size={18} />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>
                  <p>Save to reading list</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
            
            <Button size="sm" onClick={() => setIsDialogOpen(true)}>
              {book.available ? "Borrow" : "Join Waitlist"}
            </Button>
          </div>
        </CardContent>
      </Card>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle>{book.title}</DialogTitle>
            <DialogDescription>by {book.author} ({book.publicationYear})</DialogDescription>
          </DialogHeader>
          
          <div className="grid grid-cols-3 gap-4">
            <div className="col-span-1 aspect-[2/3]">
              <img 
                src={book.cover} 
                alt={book.title}
                className="w-full h-full object-cover rounded-md"
              />
            </div>
            <div className="col-span-2 space-y-3">
              <p className="text-sm">{book.description}</p>
              <div className="flex items-center">
                <Badge variant="outline" className="mr-2">{book.category}</Badge>
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className={`h-3 w-3 ${i < book.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`}
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
                  ))}
                  <span className="text-xs text-gray-500 ml-1">({book.rating.toFixed(1)})</span>
                </div>
              </div>
              
              <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
                <Calendar className="h-4 w-4 mr-1" />
                <span>Published: {book.publicationYear}</span>
              </div>
              
              <div className="flex items-center text-sm">
                <Clock className="h-4 w-4 mr-1" />
                <span className={book.available ? "text-green-600 dark:text-green-400" : "text-red-600 dark:text-red-400"}>
                  {book.available ? "Available Now" : "Currently Borrowed (Due back: June 15, 2025)"}
                </span>
              </div>
            </div>
          </div>

          <DialogFooter className="flex-col sm:flex-row sm:justify-between sm:space-x-0">
            <div className="flex space-x-2">
              <Button variant="outline" size="sm">
                <Share className="h-4 w-4 mr-1" /> Share
              </Button>
              <Button variant="outline" size="sm">
                <BookMarked className="h-4 w-4 mr-1" /> Save
              </Button>
            </div>
            
            <Button size="sm" className={book.available ? "bg-blue-500 hover:bg-blue-600" : "bg-amber-500 hover:bg-amber-600"}>
              {book.available ? "Borrow Now" : "Join Waitlist"}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}