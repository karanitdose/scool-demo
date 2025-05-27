import Link from 'next/link';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-100">
      <div className="container mx-auto px-4 pt-12 pb-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold mb-4">
              <span className="text-pink-500">School</span>
              <span className="text-blue-500">Demo</span>
            </h3>
            <p className="text-gray-400 max-w-xs">
              Empowering students with comprehensive educational resources and tools for academic success.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="Facebook">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="Twitter">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="Instagram">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors" aria-label="LinkedIn">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect width="4" height="12" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/" className="text-gray-400 hover:text-pink-400 transition-colors">Home</Link></li>
              <li><Link href="/about" className="text-gray-400 hover:text-pink-400 transition-colors">About Us</Link></li>
              <li><Link href="/timetable" className="text-gray-400 hover:text-pink-400 transition-colors">Timetable</Link></li>
              <li><Link href="/library" className="text-gray-400 hover:text-pink-400 transition-colors">Library</Link></li>
              <li><Link href="/contact" className="text-gray-400 hover:text-pink-400 transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Student Services</h3>
            <ul className="space-y-2">
              <li><Link href="/services/calendar" className="text-gray-400 hover:text-pink-400 transition-colors">Academic Calendar</Link></li>
              <li><Link href="/services/exams" className="text-gray-400 hover:text-pink-400 transition-colors">Exam Schedule</Link></li>
              <li><Link href="/services/resources" className="text-gray-400 hover:text-pink-400 transition-colors">Student Resources</Link></li>
              <li><Link href="/services/support" className="text-gray-400 hover:text-pink-400 transition-colors">Academic Support</Link></li>
              <li><Link href="/services/faq" className="text-gray-400 hover:text-pink-400 transition-colors">FAQs</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Contact Information</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-2 text-pink-500 shrink-0 mt-0.5" />
                <span className="text-gray-400">Greater Noida,Sector-154, 133231</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-2 text-pink-500" />
                <span className="text-gray-400">+91 9898933222</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-2 text-pink-500" />
                <span className="text-gray-400">info@schooldemo.com</span>
              </li>
              <li className="flex items-center">
                <Clock className="h-5 w-5 mr-2 text-pink-500" />
                <span className="text-gray-400">Mon-Fri: 8:00 AM - 6:00 PM</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">© {new Date().getFullYear()} Stbiedtech. All rights reserved.</p>
            <div className="mt-4 md:mt-0">
              <ul className="flex flex-wrap space-x-4 justify-center text-sm text-gray-400">
                <li><Link href="/privacy" className="hover:text-pink-400 transition-colors">Privacy Policy</Link></li>
                <li><Link href="/terms" className="hover:text-pink-400 transition-colors">Terms of Service</Link></li>
                <li><Link href="/cookies" className="hover:text-pink-400 transition-colors">Cookie Policy</Link></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;