"use client"

import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X, Search, Moon, Sun, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useTheme } from "next-themes";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { theme, setTheme } = useTheme();
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "Home", href: "/" },
    { label: "Timetable", href: "/timetable" },
    { label: "Library", href: "/library" },
    { 
      label: "Services", 
      href: "#",
      children: [
        { label: "Academic Calendar", href: "/services/calendar" },
        { label: "Exam Schedule", href: "/services/exams" },
        { label: "Student Resources", href: "/services/resources" },
      ]
    },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <header 
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled 
          ? "bg-background/95 backdrop-blur-sm border-b" 
          : "bg-background"
      }`}
    >
      {/* Top bar with contact info */}
      <div className="hidden md:flex items-center justify-between bg-pink-500 text-white py-2 px-4">
        <div className="flex items-center space-x-4">
          <span className="flex items-center text-sm">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" x2="21" y1="14" y2="3"></line></svg>
            pradeep.demo@gmail.com
          </span>
          <span className="flex items-center text-sm">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path><circle cx="12" cy="10" r="3"></circle></svg>
            Greater Noida,Sector-152 Noida
          </span>
        </div>
        <div className="flex items-center space-x-4">
          <a href="#" aria-label="Facebook" className="hover:text-blue-200 transition">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
          </a>
          <a href="#" aria-label="Twitter" className="hover:text-blue-200 transition">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
          </a>
          <a href="#" aria-label="Instagram" className="hover:text-blue-200 transition">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
          </a>
          <a href="#" aria-label="LinkedIn" className="hover:text-blue-200 transition">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect width="4" height="12" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
          </a>
        </div>
      </div>

      {/* Main navigation */}
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <span className="text-2xl font-bold">
            <span className="text-pink-500">St.Boston</span>
            <span className="text-blue-500">Edtech</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-6">
          {navItems.map((item, i) => (
            !item.children ? (
              <Link 
                key={i} 
                href={item.href} 
                className="text-foreground hover:text-pink-500 transition-colors"
              >
                {item.label}
              </Link>
            ) : (
              <DropdownMenu key={i}>
                <DropdownMenuTrigger asChild>
                  <button className="flex items-center text-foreground hover:text-pink-500 transition-colors">
                    {item.label} <ChevronDown className="ml-1 h-4 w-4" />
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  {item.children.map((child, j) => (
                    <DropdownMenuItem key={j} asChild>
                      <Link href={child.href}>{child.label}</Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            )
          ))}
        </div>

        <div className="hidden lg:flex items-center space-x-4">
          <Button variant="ghost" size="icon" onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
            <Moon className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Sun className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
          </Button>
          
          <Button variant="ghost" size="sm">Sign In</Button>
          <Button variant="default" size="sm" className="bg-pink-500 hover:bg-pink-600">Sign Up</Button>
        </div>

        {/* Mobile Navigation */}
        <div className="lg:hidden flex items-center">
          <Button variant="ghost" size="icon" onClick={() => setTheme(theme === "dark" ? "light" : "dark")} className="mr-2">
            <Moon className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Sun className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
          </Button>

          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <nav className="flex flex-col gap-4 mt-8">
                {navItems.map((item, i) => (
                  <div key={i}>
                    {!item.children ? (
                      <Link 
                        href={item.href} 
                        className="text-lg font-medium hover:text-pink-500 transition-colors"
                      >
                        {item.label}
                      </Link>
                    ) : (
                      <div className="space-y-2">
                        <p className="text-lg font-medium">{item.label}</p>
                        <div className="ml-4 flex flex-col space-y-2">
                          {item.children.map((child, j) => (
                            <Link 
                              key={j} 
                              href={child.href} 
                              className="text-base hover:text-pink-500 transition-colors"
                            >
                              {child.label}
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ))}
                <div className="flex flex-col space-y-2 mt-4">
                  <Button variant="outline">Sign In</Button>
                  <Button className="bg-pink-500 hover:bg-pink-600">Sign Up</Button>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
};

export default Header;