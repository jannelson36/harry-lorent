'use client';

import { motion } from 'framer-motion';
import { personalInfo } from '@/data/portfolio-data';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-950">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
            About <span className="bg-gradient-to-r from-primary-500 to-secondary-500 bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Customer experience specialist and entrepreneur focused on measurable business outcomes, efficient processes, and delightful customer journeys.
            I combine data analysis, coaching, and enabling tools to help teams perform at their best.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[{
            title: 'Strengths',
            items: ['Customer-first mindset', 'Clear communication', 'Operational rigor']
          }, {
            title: 'Toolbox',
            items: ['Excel / Tableau', 'QA & SOPs', 'Training & Enablement']
          }, {
            title: 'Interests',
            items: ['Research & psychology', 'Travel & cultures', 'Continuous learning']
          }].map((group) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-gray-50 dark:bg-gray-900 rounded-2xl p-6 shadow-sm border border-gray-100 dark:border-gray-800"
            >
              <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-3">{group.title}</h3>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300">
                {group.items.map((item) => (
                  <li key={item} className="flex items-center">
                    <span className="w-2 h-2 bg-primary-500 rounded-full mr-3" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <a href={`mailto:${personalInfo.email}`} className="inline-block bg-gradient-to-r from-primary-500 to-secondary-500 text-white font-semibold py-3 px-6 rounded-lg shadow-lg hover:shadow-xl transition-all">
            Get in touch
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;