// pages/index.tsx
import { useState, useEffect } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';

interface TimelineItem {
  title: string;
  company: string;
  date: string;
  description: string[];
}

interface SkillCategory {
  title: string;
  skills: string[];
}

const Portfolio = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [roleIndex, setRoleIndex] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const roles = [
    'Customer Experience',
    'Team Leadership',
    'Customer Success',
    'Public Relations',
    'Research Assistant',
    'Social Media Specialist',
  ];

  const { basePath } = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
      
      // Update active section
      const sections = ['home', 'about', 'experience', 'skills', 'contact'];
      const scrollPosition = window.scrollY + 100;
      
      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const height = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + height) {
            setActiveSection(section);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const id = setInterval(() => {
      setRoleIndex((i) => (i + 1) % roles.length);
    }, 2000);
    return () => clearInterval(id);
  }, [roles.length]);

  const timelineData: TimelineItem[] = [
    {
      title: "Reviews Management Specialist",
      company: "Talent Pop",
      date: "October 2024 - Present",
      description: [
        "Analyze customer reviews and feedback on Google, ensuring responses align with company values",
        "Review user-generated content to identify fraudulent submissions and ensure compliance",
        "Collaborate with marketing and customer service teams to maintain positive brand image",
        "Identify trends and insights from customer feedback to inform strategy",
        "Provide regular reports on feedback patterns to management"
      ]
    },
    {
      title: "Operations Supervisor",
      company: "Teleperformance Kenya",
      date: "September 2022 - October 2024",
      description: [
        "Supervised and managed customer service teams, providing daily guidance and training",
        "Led onboarding processes ensuring comprehensive training on policies and standards",
        "Monitored performance metrics to ensure service delivery meets company standards",
        "Conducted quality checks and assessments to ensure compliance with best practices",
        "Managed client relationships and prepared regular performance reports"
      ]
    },
    {
      title: "Customer Service Representative",
      company: "Majorel Kenya",
      date: "June 2021 - August 2022",
      description: [
        "Provided timely, effective customer support via phone, email, and chat",
        "Troubleshot and resolved customer issues including product defects and billing inquiries",
        "Processed customer orders, returns, and exchanges with accuracy and efficiency",
        "Documented customer interactions in CRM systems for tracking and follow-up",
        "Collaborated with teams to share knowledge and improve service processes"
      ]
    },
    {
      title: "Administrative & PR Assistant",
      company: "CLYKAY Ultimate Water Experts",
      date: "October 2019 - June 2021",
      description: [
        "Developed integrated communication and marketing strategies",
        "Created press releases, media pitches, and newsletter content",
        "Managed social media platforms and executed marketing campaigns",
        "Coordinated press events and product launches",
        "Conducted competitor analysis and performance tracking"
      ]
    }
  ];

  const skillsData: SkillCategory[] = [
    {
      title: "Leadership & Management",
      skills: ["Team Leadership", "Operations Management", "Project Management", "Performance Monitoring"]
    },
    {
      title: "Customer Experience",
      skills: ["Customer Service", "Relationship Management", "Quality Assurance", "Conflict Resolution"]
    },
    {
      title: "Communications & Marketing",
      skills: ["Public Relations", "Content Creation", "Social Media Management", "Campaign Planning"]
    },
    {
      title: "Technical & Analytical",
      skills: ["Data Analysis", "Research Methods", "CRM Systems", "Reporting & Analytics"]
    },
    {
      title: "Software & Applications",
      skills: ["Microsoft Office Suite", "Salesforce", "Zendesk", "Shopify", "HubStaff", "Gorgias", "Beehive"]
    },
    {
      title: "Communication Tools",
      skills: [ "Slack", "Zoom", "Loom", "Gmail", "Outlook", "Asana"]
    },
    {
      title: "Review & Analytics Tools",
      skills: ["Review Tracker", "BBB (Better Business Bureau)"]
    }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <Head>
        <title>Harry Lorent - Operations & Customer Experience Leader</title>
        <meta name="description" content="Versatile professional with proven expertise in customer service, communications, public relations, and operations leadership." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href={`${basePath}/favicon.svg`} type="image/svg+xml" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-blue-500 via-purple-600 to-blue-700 text-gray-800">
        {/* Navigation */}
        <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled ? 'bg-white/98 backdrop-blur-lg shadow-lg' : 'bg-white/95 backdrop-blur-md'
        }`}>
          <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
            <div className="text-xl font-bold text-gray-700">Harry Lorent</div>
            <ul className="hidden md:flex space-x-8">
              {['home', 'about', 'experience', 'skills', 'contact'].map((section) => (
                <li key={section}>
                  <button
                    onClick={() => scrollToSection(section)}
                    className={`capitalize font-medium transition-colors duration-300 relative ${
                      activeSection === section ? 'text-blue-600' : 'text-gray-600 hover:text-blue-600'
                    }`}
                  >
                    {section}
                    {activeSection === section && (
                      <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-blue-600 rounded-full"></span>
                    )}
                  </button>
                </li>
              ))}
            </ul>
            <button
              className="md:hidden p-2 rounded-md border border-gray-300 text-gray-700 hover:bg-gray-100"
              onClick={() => setIsMenuOpen((open) => !open)}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
              aria-label="Toggle navigation menu"
            >
              <span className="block w-5 h-0.5 bg-gray-700 mb-1"></span>
              <span className="block w-5 h-0.5 bg-gray-700 mb-1"></span>
              <span className="block w-5 h-0.5 bg-gray-700"></span>
            </button>
          </nav>
          {isMenuOpen && (
            <div id="mobile-menu" className="md:hidden bg-white/98 backdrop-blur-lg border-t">
              <ul className="px-6 py-4 space-y-3">
                {['home', 'about', 'experience', 'skills', 'contact'].map((section) => (
                  <li key={section}>
                    <button
                      onClick={() => { scrollToSection(section); setIsMenuOpen(false); }}
                      className={`w-full text-left capitalize font-medium block py-1 ${
                        activeSection === section ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'
                      }`}
                    >
                      {section}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </header>

        {/* Hero Section */}
        <section id="home" className="min-h-screen flex items-center justify-center text-white relative overflow-hidden">
          {/* Floating Shapes */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-20 left-20 w-20 h-20 bg-white/10 rounded-full animate-bounce animation-delay-0"></div>
            <div className="absolute top-40 right-20 w-16 h-16 bg-white/10 rotate-45 animate-bounce animation-delay-1000"></div>
            <div className="absolute bottom-40 left-40 w-24 h-24 bg-white/10 clip-path-triangle animate-bounce animation-delay-2000"></div>
          </div>
          
          {/* Background Overlay */}
          <div className="absolute inset-0 bg-black/30"></div>
          
          {/* Hero Content */}
          <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
            <h1 className="text-5xl md:text-6xl font-bold mb-4 opacity-0 animate-fadeInUp">
              Harry Lorent
            </h1>
            <p className="text-xl md:text-2xl mb-6 opacity-0 animate-fadeInUp animation-delay-300">
              <span className="animate-pulse">{roles[roleIndex]}</span>
            </p>
            <p className="text-lg mb-8 max-w-3xl mx-auto leading-relaxed opacity-0 animate-fadeInUp animation-delay-600">
              Versatile professional with proven expertise in customer service, communications, public relations, 
              and operations leadership. Specializing in fostering customer-centric cultures and delivering 
              strategic solutions that drive organizational growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center opacity-0 animate-fadeInUp animation-delay-900">
              <button
                onClick={() => scrollToSection('experience')}
                className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                View Experience
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300 transform hover:-translate-y-1"
              >
                Get In Touch
              </button>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold text-center mb-16 relative">
              About Me
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mt-4"></div>
            </h2>
            
            <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
              <div className="text-center">
                <div className="w-40 h-40 sm:w-56 sm:h-56 md:w-72 md:h-72 mx-auto bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-4xl sm:text-5xl md:text-6xl font-bold shadow-2xl hover:scale-105 transition-transform duration-300">
                  DO
                </div>
              </div>
              
              <div className="space-y-6 text-lg leading-relaxed">
                <p>
                  I am a versatile professional with a proven track record in customer service, communications, 
                  public relations, research, and operations leadership. My expertise lies in fostering 
                  customer-centric cultures, driving team performance, and delivering strategic solutions 
                  that improve processes and achieve organizational goals.
                </p>
                
                <p>
                  With extensive experience in motivating teams, identifying opportunities, and building strong 
                  cross-functional relationships, I bring a unique blend of leadership, problem-solving, and 
                  communication skills. My approach focuses on delivering consistent results and driving 
                  sustainable growth for organizations.
                </p>
                
                <p>
                  Currently pursuing a Bachelor of Mass Communications at Africa Nazarene University, I combine 
                  academic knowledge with practical experience to stay at the forefront of industry best 
                  practices and emerging trends.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-20 bg-gray-50">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold text-center mb-16 relative">
              Professional Experience
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mt-4"></div>
            </h2>
            
            <div className="max-w-4xl mx-auto relative">
              {/* Timeline Line */}
              <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-500 to-purple-600"></div>
              
              {timelineData.map((item, index) => (
                <div
                  key={index}
                  className={`mb-12 flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} md:items-center`}
                >
                  <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:pr-8 md:text-right' : 'md:pl-8'}`}>
                    <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 hover:-translate-y-1 transform transition-transform">
                      <h3 className="text-xl font-bold text-blue-600 mb-2">{item.title}</h3>
                      <h4 className="text-lg font-semibold text-gray-700 mb-1">{item.company}</h4>
                      <p className="text-sm text-gray-500 mb-4">{item.date}</p>
                      <ul className="space-y-2">
                        {item.description.map((desc, descIndex) => (
                          <li key={descIndex} className="text-sm text-gray-600 flex items-start">
                            <span className="text-blue-500 mr-2">▸</span>
                            {desc}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  
                  {/* Timeline Dot */}
                  <div className="hidden md:block w-6 h-6 bg-white border-4 border-blue-500 rounded-full z-10 relative">
                    <div className="absolute inset-1 bg-blue-500 rounded-full"></div>
                  </div>
                  
                  <div className="hidden md:block md:w-5/12"></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-20 bg-white">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold text-center mb-16 relative">
              Core Competencies
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mt-4"></div>
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
              {skillsData.map((category, index) => (
                <div
                  key={index}
                  className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100"
                >
                  <h3 className="text-lg font-bold text-blue-600 mb-4">{category.title}</h3>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-3 py-1 rounded-full text-sm font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 bg-gradient-to-br from-blue-500 via-purple-600 to-blue-700 text-white">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold text-center mb-16 relative">
              Let&apos;s Connect
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-white mt-4"></div>
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
              <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl text-center hover:-translate-y-2 transition-transform duration-300">
              <div className="text-3xl mb-4">📧</div>
              <h4 className="text-lg font-semibold mb-2">Email</h4>
              <a
                href="mailto:harrylorent@gmail.com"
                className="text-blue-200 hover:text-white transition-colors break-all text-sm md:text-base"
                style={{ wordBreak: 'break-all' }}
              >
                harrylorent@gmail.com
              </a>
              </div>
              
              <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl text-center hover:-translate-y-2 transition-transform duration-300">
                <div className="text-3xl mb-4">📱</div>
                <h4 className="text-lg font-semibold mb-2">Phone</h4>
                <a href="tel:+254794125410" className="text-blue-200 hover:text-white transition-colors">
                  +254 794 125 410
                </a>
              </div>
              
              <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl text-center hover:-translate-y-2 transition-transform duration-300">
                <div className="text-3xl mb-4">🔗</div>
                <h4 className="text-lg font-semibold mb-2">LinkedIn</h4>
                <a 
                  href="https://www.linkedin.com/in/harry-lorent-414870195" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-200 hover:text-white transition-colors"
                >
                  Connect with me
                </a>
              </div>
              
              <div className="bg-white/10 backdrop-blur-md p-6 rounded-2xl text-center hover:-translate-y-2 transition-transform duration-300">
                <div className="text-3xl mb-4">📍</div>
                <h4 className="text-lg font-semibold mb-2">Location</h4>
                <p className="text-blue-200">Nairobi, Kenya</p>
              </div>
            </div>
          </div>
        </section>
      </div>

    </>
  );
};

export default Portfolio;