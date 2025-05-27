"use client"

import { useState } from 'react';
import { 
  Search, 
  Filter, 
  ChevronDown,
  BookOpen,
  Calendar,
  User
} from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select';
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import BookCard from '@/components/library/book-card';
import { Pagination } from '@/components/library/pagination';

// Mock book data
import { books } from '@/lib/mock/books';

export default function LibraryPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [category, setCategory] = useState('all');
  const [availability, setAvailability] = useState('all');

  const filteredBooks = books.filter(book => {
    const matchesSearch = book.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          book.author.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = category === 'all' || book.category === category;
    const matchesAvailability = availability === 'all' || 
                               (availability === 'available' && book.available) ||
                               (availability === 'borrowed' && !book.available);
    
    return matchesSearch && matchesCategory && matchesAvailability;
  });

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-6">
        {/* Sidebar filters */}
        <div className="w-full md:w-1/4 lg:w-1/5 space-y-6">
          <Card className="p-4">
            <h3 className="font-medium text-lg mb-4">Library Categories</h3>
            <div className="space-y-2">
              {['Computer Science', 'Mathematics', 'Physics', 'Biology', 'Literature', 'History', 'Psychology'].map((cat) => (
                <button
                  key={cat}
                  className={`w-full text-left px-3 py-2 rounded-md text-sm transition ${
                    category === cat.toLowerCase().replace(' ', '-')
                      ? 'bg-pink-100 text-pink-700 dark:bg-pink-900/30 dark:text-pink-300'
                      : 'hover:bg-gray-100 dark:hover:bg-gray-800'
                  }`}
                  onClick={() => setCategory(cat.toLowerCase().replace(' ', '-'))}
                >
                  {cat}
                </button>
              ))}
              <button
                className={`w-full text-left px-3 py-2 rounded-md text-sm transition ${
                  category === 'all' ? 'bg-pink-100 text-pink-700 dark:bg-pink-900/30 dark:text-pink-300' : 'hover:bg-gray-100 dark:hover:bg-gray-800'
                }`}
                onClick={() => setCategory('all')}
              >
                View All Categories
              </button>
            </div>
          </Card>
          
          <Card className="p-4">
            <h3 className="font-medium text-lg mb-4">My Library</h3>
            <div className="space-y-3">
              <Button variant="outline" className="w-full justify-start">
                <BookOpen className="mr-2 h-4 w-4" />
                My Borrowed Books
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <Calendar className="mr-2 h-4 w-4" />
                Due Dates
              </Button>
              <Button variant="outline" className="w-full justify-start">
                <User className="mr-2 h-4 w-4" />
                Reading Lists
              </Button>
            </div>
          </Card>
        </div>

        {/* Main content */}
        <div className="w-full md:w-3/4 lg:w-4/5">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
              <h1 className="text-2xl font-bold">Digital Library</h1>
              
              <div className="flex w-full sm:w-auto gap-2">
                <div className="relative w-full sm:w-[300px]">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                  <Input 
                    placeholder="Search books..." 
                    className="pl-10"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
                
                <Select value={availability} onValueChange={setAvailability}>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Availability" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Books</SelectItem>
                    <SelectItem value="available">Available</SelectItem>
                    <SelectItem value="borrowed">Borrowed</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <Tabs defaultValue="all-books">
              <TabsList className="mb-6">
                <TabsTrigger value="all-books">All Books</TabsTrigger>
                <TabsTrigger value="new-arrivals">New Arrivals</TabsTrigger>
                <TabsTrigger value="popular">Popular</TabsTrigger>
                <TabsTrigger value="recommendations">Recommendations</TabsTrigger>
              </TabsList>
              
              <TabsContent value="all-books" className="space-y-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                  {filteredBooks.length > 0 ? (
                    filteredBooks.map((book) => (
                      <BookCard key={book.id} book={book} />
                    ))
                  ) : (
                    <div className="col-span-full text-center py-12">
                      <div className="mx-auto w-full max-w-sm">
                        <BookOpen className="mx-auto h-12 w-12 text-gray-400" />
                        <h3 className="mt-4 text-lg font-medium text-gray-900 dark:text-gray-100">No books found</h3>
                        <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
                          Try adjusting your search or filter to find what you're looking for.
                        </p>
                      </div>
                    </div>
                  )}
                </div>
                
                <Pagination totalItems={filteredBooks.length} itemsPerPage={12} />
              </TabsContent>
              
              <TabsContent value="new-arrivals">
                <div className="text-center py-12">
                  <h3 className="text-lg font-medium">New Arrivals Coming Soon</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                    Check back later for new books added to our collection.
                  </p>
                </div>
              </TabsContent>
              
              <TabsContent value="popular">
                <div className="text-center py-12">
                  <h3 className="text-lg font-medium">Popular Books Coming Soon</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                    Check back later to see the most popular books among students.
                  </p>
                </div>
              </TabsContent>
              
              <TabsContent value="recommendations">
                <div className="text-center py-12">
                  <h3 className="text-lg font-medium">Personalized Recommendations Coming Soon</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                    Sign in to get book recommendations based on your interests and previous borrows.
                  </p>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
}