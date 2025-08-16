'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, Phone, MapPin, User, Calendar, Globe, Download, ExternalLink } from 'lucide-react';
import { personalInfo, references } from '@/data/portfolio-data';

const ContactSection = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const personalDetails = [
    { icon: <Calendar className="w-5 h-5" />, label: "Date of Birth", value: personalInfo.dateOfBirth },
    { icon: <Globe className="w-5 h-5" />, label: "Nationality", value: personalInfo.nationality },
    { icon: <User className="w-5 h-5" />, label: "ID Number", value: personalInfo.idNumber },
  ];

  const hobbies = [
    { name: 'Traveling', emoji: '🌍', description: 'Exploring new cultures and places' },
    { name: 'Swimming', emoji: '🏊‍♂️', description: 'Staying active and healthy' },
    { name: 'Psychology Research', emoji: '🧠', description: 'Understanding human behavior' },
  ];

  const resumePath = '/resume';

  return (
    <section id="contact" className="py-20 bg-white dark:bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-gray-100 mb-4">
            Get In <span className="bg-gradient-to-r from-primary-500 to-secondary-500 bg-clip-text text-transparent">Touch</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.form
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            onSubmit={async (e) => {
              e.preventDefault();
              const form = e.target as HTMLFormElement;
              const formData = new FormData(form);
              const res = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                  name: formData.get('name'),
                  email: formData.get('email'),
                  message: formData.get('message'),
                })
              });
              if (res.ok) {
                form.reset();
                alert('Message sent!');
              } else {
                alert('Failed to send message');
              }
            }}
            className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg border border-gray-100 dark:border-gray-800 order-last lg:order-first"
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6">Send a Message</h3>
            <div className="grid grid-cols-1 gap-4">
              <input name="name" required placeholder="Your Name" className="w-full rounded-md border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 px-4 py-3 outline-none focus:ring-2 focus:ring-primary-500" />
              <input name="email" type="email" required placeholder="Your Email" className="w-full rounded-md border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 px-4 py-3 outline-none focus:ring-2 focus:ring-primary-500" />
              <textarea name="message" required placeholder="Your Message" rows={5} className="w-full rounded-md border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 px-4 py-3 outline-none focus:ring-2 focus:ring-primary-500" />
              <button type="submit" className="mt-2 bg-gradient-to-r from-primary-500 to-secondary-500 text-white font-semibold py-3 px-6 rounded-lg shadow-lg hover:shadow-xl transition-all">Send</button>
            </div>
          </motion.form>
          {/* Contact Information */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-gray-900 dark:to-gray-800 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6">Contact Information</h3>
              
              {/* Primary Contact */}
              <div className="space-y-4 mb-8">
                <motion.a
                  href={`mailto:${personalInfo.email}`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex items-center p-4 bg-white dark:bg-gray-900 rounded-lg shadow-sm hover:shadow-md transition-all"
                >
                  <div className="w-10 h-10 bg-primary-500 rounded-full flex items-center justify-center text-white mr-4">
                    <Mail size={20} />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-gray-100">Email</p>
                    <p className="text-gray-600 dark:text-gray-300">{personalInfo.email}</p>
                  </div>
                  <ExternalLink size={16} className="ml-auto text-gray-400" />
                </motion.a>

                <motion.a
                  href={`tel:${personalInfo.phone}`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex items-center p-4 bg-white dark:bg-gray-900 rounded-lg shadow-sm hover:shadow-md transition-all"
                >
                  <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center text-white mr-4">
                    <Phone size={20} />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-gray-100">Phone</p>
                    <p className="text-gray-600 dark:text-gray-300">{personalInfo.phone}</p>
                  </div>
                  <ExternalLink size={16} className="ml-auto text-gray-400" />
                </motion.a>

                <div className="flex items-center p-4 bg-white dark:bg-gray-900 rounded-lg shadow-sm">
                  <div className="w-10 h-10 bg-secondary-500 rounded-full flex items-center justify-center text-white mr-4">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900 dark:text-gray-100">Address</p>
                    <p className="text-gray-600 dark:text-gray-300">{personalInfo.address}</p>
                  </div>
                </div>
              </div>

              {/* Personal Details */}
              <h4 className="text-lg font-bold text-gray-900 dark:text-gray-100 mb-4">Personal Details</h4>
              <div className="space-y-3">
                {personalDetails.map((detail, index) => (
                  <motion.div
                    key={detail.label}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center text-gray-700 dark:text-gray-300"
                  >
                    <div className="text-primary-500 mr-3">{detail.icon}</div>
                    <span className="font-medium mr-2">{detail.label}:</span>
                    <span>{detail.value}</span>
                  </motion.div>
                ))}
              </div>

              {/* Download CV Button */}
              <a href={resumePath} download className="block" target="_blank" rel="noopener noreferrer">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full mt-8 bg-gradient-to-r from-primary-500 to-secondary-500 text-white font-semibold py-3 px-6 rounded-lg flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl transition-all"
                >
                  <Download size={20} />
                  <span>Download CV</span>
                </motion.button>
              </a>
            </div>
          </motion.div>

          {/* References & Interests */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            {/* Interests */}
            <div className="bg-gray-50 dark:bg-gray-900 rounded-2xl p-6">
              <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-4">Personal Interests</h3>
              <div className="grid grid-cols-1 gap-4">
                {hobbies.map((hobby, index) => (
                  <motion.div
                    key={hobby.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.02 }}
                    className="bg-white dark:bg-gray-900 rounded-lg p-4 shadow-sm border border-gray-100 dark:border-gray-800"
                  >
                    <div className="flex items-center">
                      <span className="text-2xl mr-3">{hobby.emoji}</span>
                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-gray-100">{hobby.name}</h4>
                        <p className="text-gray-600 dark:text-gray-300 text-sm">{hobby.description}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* References */}
            <div className="bg-gray-50 dark:bg-gray-900 rounded-2xl p-6">
              <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-4">Professional References</h3>
              <div className="space-y-4 max-h-96 overflow-y-auto">
                {references.map((ref, index) => (
                  <motion.div
                    key={ref.name}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white dark:bg-gray-900 rounded-lg p-4 shadow-sm border border-gray-100 dark:border-gray-800"
                  >
                    <h4 className="font-semibold text-gray-900 dark:text-gray-100">{ref.name}</h4>
                    <p className="text-primary-600 text-sm font-medium">{ref.title}</p>
                    <p className="text-gray-600 dark:text-gray-300 text-sm">{ref.company}</p>
                    <p className="text-gray-500 dark:text-gray-400 text-xs mt-1">{ref.contact}</p>
                    <span className="inline-block mt-2 px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 text-xs rounded">
                      {ref.relationship}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;