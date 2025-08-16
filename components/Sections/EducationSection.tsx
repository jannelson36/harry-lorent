'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { GraduationCap, Calendar, Award } from 'lucide-react';
import { education, certifications } from '@/data/portfolio-data';

const EducationSection = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section id="education" className="py-20 bg-gray-50 dark:bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
            Education & <span className="bg-gradient-to-r from-primary-500 to-secondary-500 bg-clip-text text-transparent">Certifications</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Education */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6 flex items-center">
              <GraduationCap className="w-6 h-6 mr-2 text-primary-500" />
              Education
            </h3>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <motion.div
                  key={edu.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                  className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-800"
                >
                  <h4 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-2">{edu.degree}</h4>
                  <p className="text-primary-600 font-semibold mb-2">{edu.institution}</p>
                  <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm">
                    <Calendar size={16} className="mr-2" />
                    {edu.duration}
                  </div>
                  {edu.grade && (
                    <div className="mt-2">
                      <span className="inline-block bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 text-xs font-semibold px-2.5 py-0.5 rounded">
                        Grade: {edu.grade}
                      </span>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Certifications */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6 flex items-center">
              <Award className="w-6 h-6 mr-2 text-secondary-500" />
              Certifications
            </h3>
            <div className="grid grid-cols-1 gap-4">
              {certifications.map((cert, index) => (
                <motion.div
                  key={cert.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                  className="bg-white dark:bg-gray-900 rounded-lg p-4 shadow-md border border-gray-100 dark:border-gray-800"
                >
                  <h4 className="font-semibold text-gray-900 dark:text-gray-100 mb-1">{cert.name}</h4>
                  <p className="text-secondary-600 text-sm font-medium mb-1">{cert.issuer}</p>
                  {cert.date && (
                    <p className="text-gray-500 dark:text-gray-400 text-xs">{cert.date}</p>
                  )}
                  {cert.credentialId && (
                    <p className="text-gray-400 text-xs">ID: {cert.credentialId}</p>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Professional Ambitions */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mt-16 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-2xl p-8 text-white"
        >
          <h3 className="text-2xl font-bold mb-6 text-center">Professional Ambitions</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {[
              { title: 'Research Excellence', description: 'Excel in research and develop innovative practices for knowledge sharing' },
              { title: 'Economic Impact', description: 'Contribute to elevating the local and global economy through dedicated work' },
              { title: 'Continuous Growth', description: 'Continually improve skills for competitiveness in the job market' },
            ].map((ambition, index) => (
              <motion.div
                key={ambition.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <h4 className="font-bold text-lg mb-2">{ambition.title}</h4>
                <p className="text-white/90 text-sm">{ambition.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default EducationSection;