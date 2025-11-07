'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function HeroEye() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [eyePosition, setEyePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const eyeElement = document.getElementById('eye-container');
    if (eyeElement) {
      const rect = eyeElement.getBoundingClientRect();
      const eyeCenterX = rect.left + rect.width / 2;
      const eyeCenterY = rect.top + rect.height / 2;

      const angle = Math.atan2(
        mousePosition.y - eyeCenterY,
        mousePosition.x - eyeCenterX
      );

      const distance = Math.min(
        Math.hypot(
          mousePosition.x - eyeCenterX,
          mousePosition.y - eyeCenterY
        ) / 20,
        15
      );

      const pupilX = Math.cos(angle) * distance;
      const pupilY = Math.sin(angle) * distance;

      setEyePosition({ x: pupilX, y: pupilY });
    }
  }, [mousePosition]);

  return (
    <div id="eye-container" className="relative w-10 h-10 md:w-14 md:h-14">
      <svg viewBox="0 0 200 200" className="w-full h-full">
        <defs>
          <radialGradient id="eyeGradient">
            <stop offset="0%" stopColor="currentColor" stopOpacity="0.1" />
            <stop offset="100%" stopColor="currentColor" stopOpacity="0.05" />
          </radialGradient>
        </defs>

        <ellipse
          cx="100"
          cy="100"
          rx="80"
          ry="90"
          fill="url(#eyeGradient)"
          className="text-blue-500 dark:text-blue-400"
        />

        <ellipse
          cx="100"
          cy="100"
          rx="80"
          ry="90"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          className="text-gray-300 dark:text-gray-600"
        />

        <motion.g
          animate={{
            x: eyePosition.x,
            y: eyePosition.y,
          }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        >
          <circle
            cx="100"
            cy="100"
            r="35"
            fill="currentColor"
            className="text-gray-800 dark:text-gray-200"
          />

          <circle
            cx="100"
            cy="100"
            r="20"
            fill="currentColor"
            className="text-gray-900 dark:text-white"
          />

          <circle
            cx="110"
            cy="90"
            r="8"
            fill="white"
            opacity="0.6"
          />
        </motion.g>
      </svg>
    </div>
  );
}
