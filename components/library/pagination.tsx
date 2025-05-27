"use client"

import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface PaginationProps {
  totalItems: number;
  itemsPerPage: number;
  currentPage?: number;
}

export function Pagination({ totalItems, itemsPerPage, currentPage = 1 }: PaginationProps) {
  const [page, setPage] = useState(currentPage);
  
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  
  const goToPage = (newPage: number) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setPage(newPage);
    }
  };
  
  const renderPageButtons = () => {
    const pageButtons = [];
    
    // Always show first page
    pageButtons.push(
      <Button
        key={1}
        variant={page === 1 ? "default" : "outline"}
        size="icon"
        onClick={() => goToPage(1)}
        className="h-8 w-8"
        aria-label={`Page 1`}
      >
        1
      </Button>
    );
    
    // Calculate range of pages to show
    let startPage = Math.max(2, page - 1);
    let endPage = Math.min(totalPages - 1, page + 1);
    
    // Add ellipsis if needed before middle pages
    if (startPage > 2) {
      pageButtons.push(
        <span key="ellipsis-1" className="px-2">
          ...
        </span>
      );
    }
    
    // Add middle pages
    for (let i = startPage; i <= endPage; i++) {
      if (i <= totalPages - 1 && i >= 2) {
        pageButtons.push(
          <Button
            key={i}
            variant={page === i ? "default" : "outline"}
            size="icon"
            onClick={() => goToPage(i)}
            className="h-8 w-8"
            aria-label={`Page ${i}`}
          >
            {i}
          </Button>
        );
      }
    }
    
    // Add ellipsis if needed after middle pages
    if (endPage < totalPages - 1 && totalPages > 3) {
      pageButtons.push(
        <span key="ellipsis-2" className="px-2">
          ...
        </span>
      );
    }
    
    // Always show last page if there are more than one page
    if (totalPages > 1) {
      pageButtons.push(
        <Button
          key={totalPages}
          variant={page === totalPages ? "default" : "outline"}
          size="icon"
          onClick={() => goToPage(totalPages)}
          className="h-8 w-8"
          aria-label={`Page ${totalPages}`}
        >
          {totalPages}
        </Button>
      );
    }
    
    return pageButtons;
  };
  
  if (totalPages <= 1) return null;
  
  return (
    <div className="flex items-center justify-center space-x-2 mt-8">
      <Button
        variant="outline"
        size="icon"
        onClick={() => goToPage(page - 1)}
        disabled={page === 1}
        className="h-8 w-8"
        aria-label="Previous page"
      >
        <ChevronLeft className="h-4 w-4" />
      </Button>
      
      {renderPageButtons()}
      
      <Button
        variant="outline"
        size="icon"
        onClick={() => goToPage(page + 1)}
        disabled={page === totalPages}
        className="h-8 w-8"
        aria-label="Next page"
      >
        <ChevronRight className="h-4 w-4" />
      </Button>
    </div>
  );
}