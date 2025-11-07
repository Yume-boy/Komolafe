'use client';

import { motion } from 'framer-motion';
import { GraduationCap, Award, BookOpen } from 'lucide-react';

export default function Education() {
  const education = [
    {
      icon: GraduationCap,
      degree: 'B.Sc. Biochemistry',
      institution: 'Mountain Top University',
      type: 'University Degree',
      color: 'blue',
    },
    {
      icon: BookOpen,
      degree: 'Frontend Development',
      institution: 'New Horizons, Ikeja',
      type: 'Professional Training',
      color: 'green',
    },
    {
      icon: GraduationCap,
      degree: 'Cybersecurity Certification',
      institution: 'AltSchool Africa',
      type: 'Diploma',
      color: 'orange',
    },
    {
      icon: Award,
      degree: 'ISC² Certified in Cybersecurity (CC)',
      institution: 'ISC²',
      type: 'Professional Certification',
      color: 'red',
    },
  ];

  const getColorClasses = (color) => {
    const colors = {
      blue: 'bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400',
      green: 'bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400',
      orange: 'bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400',
      red: 'bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400',
    };
    return colors[color] || colors.blue;
  };

  return (
    <section id="education" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Education & <span className="text-blue-600 dark:text-blue-400">Certifications</span>
          </h2>
          <div className="w-20 h-1 bg-blue-600 dark:bg-blue-400 mx-auto" />
        </motion.div>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
          {education.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-50 dark:bg-gray-900 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1"
            >
              <div className="flex items-start gap-4">
                <div className={`p-3 rounded-lg ${getColorClasses(item.color)}`}>
                  <item.icon className="h-6 w-6" />
                </div>
                <div className="flex-1">
                  <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                    {item.type}
                  </span>
                  <h3 className="text-xl font-bold mt-1 mb-2 text-gray-900 dark:text-white">
                    {item.degree}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    {item.institution}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
