import { PersonalInfo, Experience, Education, Skill, Reference, Certification } from '@/types/portfolio';

export const personalInfo: PersonalInfo = {
  name: "Harry Rajula Lorent",
  title: "Dynamic Entrepreneur & Customer Experience Expert",
  email: "rajulaharry@gmail.com",
  phone: "+254 799 946 097",
  address: "P.O BOX 3235, Mombasa",
  nationality: "Kenyan",
  dateOfBirth: "2nd November 1998",
  idNumber: "35829927"
};

export const experiences: Experience[] = [
  {
    id: "sme-teleperformance",
    title: "Subject Matter Expert",
    company: "Teleperformance Kenya",
    duration: "May 2025 – Present",
    startDate: "2025-05",
    endDate: "Present",
    type: "full-time",
    technologies: ["Quality Assurance", "Process Improvement", "Team Leadership"],
    achievements: [
      "Provided in-depth knowledge on specific areas of deficiencies",
      "Developed and trained new and tenured customer expert staff on new tools and systems",
      "Collaborated with project teams to ensure solutions align with market standards",
      "Supported quality assurance by setting standards for escalation and compliance",
      "Analyzed current processes and suggested improvements for efficiency and customer experience"
    ]
  },
  {
    id: "customer-expert-majorel",
    title: "Customer Expert",
    company: "Majorel Kenya EPZ (Teleperformance)",
    duration: "November 2023 – May 2025",
    startDate: "2023-11",
    endDate: "2025-05",
    type: "full-time",
    technologies: ["Customer Service", "KPI Management", "Process Optimization"],
    achievements: [
      "Exceeded daily and monthly contact quotas while maintaining high accuracy and empathy",
      "Maintained strict adherence to call-handling KPIs without compromising service quality",
      "Demonstrated commitment to continuous learning and process improvement",
      "Reduced escalation rates through effective complex case resolution"
    ]
  },
  {
    id: "peer-monitor-ngo",
    title: "Peer Monitor",
    company: "Lake Region Community Development Initiative (NGO)",
    duration: "July – December 2022",
    startDate: "2022-07",
    endDate: "2022-12",
    type: "volunteer",
    achievements: [
      "Conducted community counseling and peer education",
      "Monitored and evaluated key populations",
      "Collected and analyzed fieldwork data"
    ]
  },
  {
    id: "internal-auditor-mijesh",
    title: "Internal Auditor",
    company: "Mijesh Enterprises Ltd Construction Company",
    duration: "January – May 2022",
    startDate: "2022-01",
    endDate: "2022-05",
    type: "contract",
    technologies: ["Financial Analysis", "Risk Assessment", "Compliance"],
    achievements: [
      "Identified process inefficiencies and potential risks during audits",
      "Conducted meticulous reviews of financial records and internal processes",
      "Delivered clear audit findings to both technical and non-technical stakeholders",
      "Ensured adherence to organizational policies and external regulations"
    ]
  },
  {
    id: "business-dev-kplc",
    title: "Business Development Intern",
    company: "Kenya Power and Lighting Company",
    duration: "April – August 2021",
    startDate: "2021-04",
    endDate: "2021-08",
    type: "internship",
    technologies: ["SAP", "Data Collection", "Customer Education"],
    achievements: [
      "Managed filing and contract processes",
      "Educated customers and collected fieldwork data",
      "Utilized SAP for digitization processes"
    ]
  }
];

export const education: Education[] = [
  {
    id: "bachelor-daystar",
    degree: "Bachelor's in Business Commerce Marketing",
    institution: "Daystar University",
    duration: "2017 – 2021"
  },
  {
    id: "secondary-stmarys",
    degree: "Kenya Certificate of Secondary Education (K.C.S.E)",
    institution: "St. Mary's School Yala",
    duration: "2013 – 2016"
  },
  {
    id: "primary-ndere",
    degree: "Kenya Certificate of Primary Education (K.C.P.E)",
    institution: "Ndere Boys Boarding Primary School",
    duration: "2010 – 2012"
  }
];

export const skills: Skill[] = [
  { name: "Data Analysis & Reporting", category: "technical", level: "advanced" },
  { name: "Customer Service Management", category: "technical", level: "expert" },
  { name: "Product Marketing", category: "technical", level: "advanced" },
  { name: "Monitoring & Evaluation", category: "technical", level: "advanced" },
  { name: "Cash Handling Management", category: "technical", level: "intermediate" },
  { name: "3D Annotation", category: "technical", level: "intermediate" },
  { name: "Quality Assurance", category: "technical", level: "advanced" },
  { name: "Process Improvement", category: "technical", level: "advanced" },
  { name: "Team Leadership", category: "soft", level: "advanced" },
  { name: "Communication", category: "soft", level: "expert" },
  { name: "Problem Solving", category: "soft", level: "advanced" },
  { name: "English", category: "language", level: "expert" },
  { name: "Swahili", category: "language", level: "expert" }
];

export const certifications: Certification[] = [
  {
    name: "English for Business Communication",
    issuer: "City & Guilds"
  },
  {
    name: "QuickBooks Proficiency",
    issuer: "Intuit"
  },
  {
    name: "Data Analysis - Tableau & Excel",
    issuer: "Microsoft/Tableau"
  },
  {
    name: "3D Annotation Certification",
    issuer: "Professional Training Institute"
  },
  {
    name: "Microsoft Office Suite",
    issuer: "Microsoft"
  },
  {
    name: "Valid Driver's License (Class BCE)",
    issuer: "Kenya Transport Authority"
  }
];

export const references: Reference[] = [
  {
    name: "Beatrice Dimbia",
    title: "Manager",
    company: "Sifabe Enterprises",
    contact: "0713 645 737, Kisumu",
    relationship: "Former Supervisor"
  },
  {
    name: "Christian Herem",
    title: "Business Development Supervisor",
    company: "Kenya Power Lighting Company",
    contact: "0722 848 482, Kisumu",
    relationship: "Internship Supervisor"
  },
  {
    name: "Erick Okumu",
    title: "Human Resource Manager",
    company: "Mijesh Enterprises Limited",
    contact: "0726 031 375",
    relationship: "Former Manager"
  },
  {
    name: "Madam Celestine Musau",
    title: "Marketing Supervisor",
    company: "Daystar University",
    contact: "0721 354 731",
    relationship: "Academic Supervisor"
  },
  {
    name: "Dan Amani",
    title: "Human Resource",
    company: "Majorel Kenya EPZ",
    contact: "0740 120 772",
    relationship: "HR Representative"
  }
];