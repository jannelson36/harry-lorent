'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code, Users, Globe, Award, TrendingUp, Star } from 'lucide-react';
import { skills } from '@/data/portfolio-data';

const SkillsSection = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const getSkillIcon = (category: string) => {
    switch (category) {
      case 'technical':
        return <Code size={20} />;
      case 'soft':
        return <Users size={20} />;
      case 'language':
        return <Globe size={20} />;
      case 'certification':
        return <Award size={20} />;
      default:
        return <Star size={20} />;
    }
  };

  const getSkillColor = (category: string) => {
    switch (category) {
      case 'technical':
        return 'from-blue-500 to-blue-600';
      case 'soft':
        return 'from-green-500 to-green-600';
      case 'language':
        return 'from-purple-500 to-purple-600';
      case 'certification':
        return 'from-orange-500 to-orange-600';
      default:
        return 'from-gray-500 to-gray-600';
    }
  };

  const getLevelWidth = (level: string) => {
    switch (level) {
      case 'beginner':
        return 'w-1/4';
      case 'intermediate':
        return 'w-1/2';
      case 'advanced':
        return 'w-3/4';
      case 'expert':
        return 'w-full';
      default:
        return 'w-1/2';
    }
  };

  const skillsByCategory = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<string, typeof skills>);

  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
            Core <span className="bg-gradient-to-r from-primary-500 to-secondary-500 bg-clip-text text-transparent">Competencies</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 mx-auto rounded-full" />
        </motion.div>

        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? 'visible' : 'hidden'}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
        >
          {Object.entries(skillsByCategory).map(([category, categorySkills]) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="bg-gray-50 dark:bg-gray-900 rounded-2xl p-6"
            >
              <div className="flex items-center mb-6">
                <div className={`w-10 h-10 bg-gradient-to-r ${getSkillColor(category)} rounded-lg flex items-center justify-center text-white mr-3`}>
                  {getSkillIcon(category)}
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 capitalize">
                  {category} Skills
                </h3>
              </div>
              
              <div className="space-y-4">
                {categorySkills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white dark:bg-gray-950 rounded-lg p-4 shadow-sm border border-gray-100 dark:border-gray-800"
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium text-gray-900 dark:text-gray-100">{skill.name}</span>
                      <span className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide">
                        {skill.level}
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-800 rounded-full h-2 overflow-hidden">
                      <motion.div
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        style={{ transformOrigin: '0% 50%' }}
                        transition={{ delay: index * 0.1 + 0.2, duration: 0.8 }}
                        className={`h-2 bg-gradient-to-r ${getSkillColor(category)} rounded-full ${getLevelWidth(skill.level)}`}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Key Achievements Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mt-16"
        >
          <h3 className="text-2xl font-bold text-center text-gray-900 dark:text-gray-100 mb-8">
            Key <span className="bg-gradient-to-r from-primary-500 to-secondary-500 bg-clip-text text-transparent">Achievements</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: <TrendingUp className="w-8 h-8" />,
                title: "Performance Excellence",
                description: "Consistently exceeded KPIs and customer satisfaction metrics",
                color: "from-blue-500 to-blue-600"
              },
              {
                icon: <Users className="w-8 h-8" />,
                title: "Team Leadership",
                description: "Successfully trained and mentored junior staff members",
                color: "from-green-500 to-green-600"
              },
              {
                icon: <Award className="w-8 h-8" />,
                title: "Process Improvement",
                description: "Identified and implemented efficiency improvements",
                color: "from-purple-500 to-purple-600"
              }
            ].map((achievement, index) => (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ y: -5 }}
                className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg border border-gray-100 dark:border-gray-800 text-center"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${achievement.color} rounded-full flex items-center justify-center text-white mx-auto mb-4`}>
                  {achievement.icon}
                </div>
                <h4 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-2">{achievement.title}</h4>
                <p className="text-gray-600 dark:text-gray-300 text-sm">{achievement.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;