'use client';

import { motion } from 'framer-motion';
import { projects } from '@/data/portfolio-data';
import { Award } from 'lucide-react';

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
            Impact <span className="bg-gradient-to-r from-primary-500 to-secondary-500 bg-clip-text text-transparent">Projects</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            A selection of initiatives demonstrating measurable customer and business outcomes.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-lg border border-gray-100 dark:border-gray-800"
            >
              <div className="flex items-start justify-between mb-3">
                <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">
                  {project.title}
                </h3>
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-primary-500 to-secondary-500 text-white flex items-center justify-center">
                  <Award size={18} />
                </div>
              </div>
              {project.organization && (
                <p className="text-primary-600 font-semibold mb-2">{project.organization}</p>
              )}
              <p className="text-gray-700 dark:text-gray-300 mb-4">{project.summary}</p>
              {project.impact && (
                <p className="text-gray-600 dark:text-gray-400 mb-4"><span className="font-medium text-gray-900 dark:text-gray-200">Impact:</span> {project.impact}</p>
              )}

              {project.metrics && project.metrics.length > 0 && (
                <div className="grid grid-cols-3 gap-3 mb-4">
                  {project.metrics.map((m) => (
                    <div key={m.label} className="bg-gray-50 dark:bg-gray-950 rounded-lg p-3 text-center border border-gray-100 dark:border-gray-800">
                      <div className="text-sm text-gray-500 dark:text-gray-400">{m.label}</div>
                      <div className="text-lg font-bold text-gray-900 dark:text-gray-100">{m.value}</div>
                    </div>
                  ))}
                </div>
              )}

              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span key={tag} className="px-2.5 py-1 bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 rounded-full text-xs font-medium">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;