'use client';

import { motion } from 'framer-motion';
import { testimonials } from '@/data/portfolio-data';

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-20 bg-white dark:bg-gray-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
            What People <span className="bg-gradient-to-r from-primary-500 to-secondary-500 bg-clip-text text-transparent">Say</span>
          </h2>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, index) => (
            <motion.blockquote
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-gray-50 dark:bg-gray-900 rounded-2xl p-6 shadow-sm border border-gray-100 dark:border-gray-800"
            >
              <p className="text-gray-700 dark:text-gray-300 mb-4">“{t.quote}”</p>
              <footer className="text-sm text-gray-600 dark:text-gray-400 font-medium">
                {t.name} · {t.role}, {t.company}
              </footer>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;