'use client';

import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="text-gray-400 flex items-center justify-center gap-2 flex-wrap">
            <span>&copy; {currentYear} Marvellous Komolafe.</span>
            <span className="hidden sm:inline">All Rights Reserved.</span>
          </p>
          <p className="text-gray-500 text-sm mt-2 flex items-center justify-center gap-1">
            Built with <Heart className="h-4 w-4 text-red-500 fill-red-500 animate-pulse" /> and passion
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
