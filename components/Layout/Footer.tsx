'use client';

import { socialLinks } from '@/data/portfolio-data';

const Footer = () => {
  return (
    <footer className="bg-gray-50 dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800 py-8 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-gray-600 dark:text-gray-400 text-sm">© {new Date().getFullYear()} Harry Rajula Lorent. All rights reserved.</p>
        <nav className="flex flex-wrap gap-4">
          {socialLinks.map((s) => (
            <a key={s.label} href={s.href} target={s.href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer" className="text-sm text-gray-700 dark:text-gray-300 hover:text-primary-600">
              {s.label}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  );
};

export default Footer;