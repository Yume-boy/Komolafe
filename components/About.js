'use client';

import { motion } from 'framer-motion';
import { Code2, Shield, Lightbulb, Award } from 'lucide-react';

export default function About() {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 },
  };

  const highlights = [
    {
      icon: Code2,
      title: 'Frontend Development',
      description: 'Expert in React, Tailwind, and modern web technologies',
    },
    {
      icon: Shield,
      title: 'Cybersecurity',
      description: 'PenTesting & SOC analysis expertise for secure applications',
    },
    {
      icon: Lightbulb,
      title: 'Creative Solutions',
      description: 'Innovative approach to complex problems',
    },
    {
      icon: Award,
      title: 'Quality Focused',
      description: 'Commitment to excellence in every project',
    },
  ];

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div {...fadeInUp} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="text-blue-600 dark:text-blue-400">Me</span>
          </h2>
          <div className="w-20 h-1 bg-blue-600 dark:bg-blue-400 mx-auto" />
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            {...fadeInUp}
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 md:p-12 mb-12"
          >
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
              I'm a <strong className="text-blue-600 dark:text-blue-400">B.Sc. Biochemistry graduate</strong> from Mountain Top University who discovered a passion for technology and transformed into a skilled <strong className="text-blue-600 dark:text-blue-400">Frontend Developer</strong>.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
              With expertise in <strong>React, Tailwind CSS, and Bootstrap</strong>, I create responsive and intuitive user interfaces that prioritize user experience. My journey into tech has been driven by curiosity and a commitment to continuous learning.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              As a <strong className="text-blue-600 dark:text-blue-400">Cybersecurity enthusiast</strong> with skills in PenTesting and SOC analysis, I bring a unique perspective to development—blending <strong>creativity, functionality, and security</strong> to build applications that are not only beautiful but also safe and reliable.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {highlights.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                    <item.icon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
