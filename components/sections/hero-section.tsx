// "use client"

// import { useState, useEffect } from 'react';
// import Link from 'next/link';
// import { Button } from '@/components/ui/button';
// import { motion } from '@/lib/framer-motion';

// export function HeroSection() {
//   const [mounted, setMounted] = useState(false);

//   useEffect(() => {
//     setMounted(true);
//   }, []);

//   if (!mounted) {
//     return null;
//   }

//   return (
//     <section className="relative bg-gradient-to-b from-pink-50 to-white dark:from-gray-900 dark:to-gray-800 py-12 md:py-24">
//       <div className="container mx-auto px-4">
//         <div className="flex flex-col lg:flex-row items-center gap-12">
//           <div className="lg:w-1/2">
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5 }}
//               className="space-y-6"
//             >
//               <span className="inline-block px-3 py-1 bg-pink-100 dark:bg-pink-900/30 text-pink-600 dark:text-pink-300 rounded-full text-sm font-medium">
//                 Nurturing Young Minds
//               </span>
//               <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
//                 <span className="block text-gray-900 dark:text-white">Building Bright</span>
//                 <span className="block text-pink-500">Futures Together</span>
//               </h1>
//               <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-xl">
//                 Creating a safe, nurturing environment where children can learn, grow, and discover their potential through engaging educational activities.
//               </p>
//               <div className="flex flex-col sm:flex-row gap-4 pt-4">
//                 <Button size="lg" className="bg-pink-500 hover:bg-pink-600">
//                   Enroll Now
//                 </Button>
//                 <Button size="lg" variant="outline">
//                   Learn More
//                 </Button>
//               </div>
//             </motion.div>
//           </div>
          
//           <motion.div
//             initial={{ opacity: 0, scale: 0.95 }}
//             animate={{ opacity: 1, scale: 1 }}
//             transition={{ duration: 0.5, delay: 0.2 }}
//             className="lg:w-1/2"
//           >
//             <div className="relative">
//               <div className="relative rounded-2xl overflow-hidden shadow-2xl">
//                 <img
//                   src="https://images.pexels.com/photos/8535230/pexels-photo-8535230.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
//                   alt="Happy children learning together"
//                   className="w-full h-auto rounded-2xl"
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
//               </div>
              
//               <div className="absolute -bottom-6 -right-6 bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg">
//                 <div className="flex items-center space-x-3 p-2">
//                   <div className="h-3 w-3 rounded-full bg-green-500"></div>
//                   <span className="text-sm font-medium">Safe Learning Environment</span>
//                 </div>
//               </div>
              
//               <div className="absolute -top-6 -left-6 bg-white dark:bg-gray-800 p-4 rounded-lg shadow-lg">
//                 <div className="flex items-center space-x-3 p-2">
//                   <div className="h-3 w-3 rounded-full bg-blue-500"></div>
//                   <span className="text-sm font-medium">Expert Teachers</span>
//                 </div>
//               </div>
//             </div>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// }



// File: components/HeroSection.js

import React from "react"; 

export function HeroSection() {
  return (
     <div className="relative w-full h-[90vh] bg-cover bg-center flex items-center justify-start px-6 md:px-20" style={{ backgroundImage: `url('https://images.pexels.com/photos/8535230/pexels-photo-8535230.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')` }}>
 
      <div className="text-white max-w-xl">
        <p className="text-pink-500 text-xl md:text-2xl font-medium mb-2">We Care Your Baby</p>
        <h1 className="text-white font-extrabold text-4xl md:text-6xl leading-tight mb-6">
          The Best Play <br /> Area For Your <br /> Kids
        </h1>
        <div className="flex space-x-4">
          <button className="bg-[#ff4770] text-white text-lg font-semibold px-8 py-3 rounded-full shadow-md hover:bg-pink-600 transition-all">
            Get Started
          </button>
          <button className="bg-pink-200 text-[#ff4770] text-lg font-semibold px-8 py-3 rounded-full shadow-md hover:bg-pink-300 transition-all">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
}
