import { Project, Skill, EducationItem, CertificationPlatform, Activity, Language } from '../types';

/**
 * ============================================================================
 * PORTFOLIO CONFIGURATION - AMOGHAVARSHA K A
 * ============================================================================
 * All personal information, project data, and placeholder variables are organized
 * here for easy configuration and future updates.
 */

// Configuration variables
export const GITHUB_USERNAME = "amoghavarsha910-svg";
export const RESUME_FILE_PATH = "/Amoghavarsha_K_A_Resume.pdf"; // Place your resume PDF in the /public folder

export const PERSONAL_INFO = {
  name: "Amoghavarsha K A",
  shortName: "Amogh",
  title: "Software Developer",
  roleSubtitle: "3rd-Year B.E. Student & Aspiring Software Developer",
  email: "amoghavarsha910@gmail.com",
  phone: "+91 8197256089",
  location: "Shivamogga, Karnataka, India",
  college: "Alva's Institute of Engineering and Technology",
  degree: "B.E. — 3rd Year",
  graduationYear: "2026",
  cgpa: "9.12",
  cgpaMax: "10",
  bioHeadline: "Engineering student passionate about software development, problem solving, and building practical technology solutions.",
  aboutP1: "I am a third-year B.E. student at Alva's Institute of Engineering and Technology with a current CGPA of 9.12. I am interested in software development and enjoy applying programming, database and problem-solving skills to practical projects.",
  aboutP2: "My project experience includes an accident-prevention system using Arduino and sensors, a hospital database management system, and a Beacon Mesh SOS system. I am continuously learning new technologies and looking forward to growing as a software developer.",
  statement: "I am a student developer who builds practical projects and continuously improves my technical skills.",
};

export const STATS = [
  { label: "CGPA", value: 9.12, isDecimal: true, suffix: "/10" },
  { label: "Projects", value: 3, isDecimal: false, suffix: "" },
  { label: "Learning Platforms", value: 3, isDecimal: false, suffix: "" },
  { label: "Languages", value: 3, isDecimal: false, suffix: "" },
];

export const SKILLS: Skill[] = [
  {
    id: "python",
    name: "Python",
    description: "Programming and problem solving",
    category: "Programming",
    icon: "FileCode2",
    color: "from-blue-500/20 to-emerald-500/20",
  },
  {
    id: "java",
    name: "Java",
    description: "Object-oriented programming",
    category: "Programming",
    icon: "Coffee",
    color: "from-amber-500/20 to-orange-500/20",
  },
  {
    id: "html",
    name: "HTML",
    description: "Web development",
    category: "Web & Database",
    icon: "Globe",
    color: "from-orange-500/20 to-red-500/20",
  },
  {
    id: "sql",
    name: "SQL",
    description: "Database management",
    category: "Web & Database",
    icon: "Database",
    color: "from-cyan-500/20 to-blue-500/20",
  },
  {
    id: "arduino",
    name: "Arduino",
    description: "Sensor-based projects",
    category: "Hardware & Logic",
    icon: "Cpu",
    color: "from-emerald-500/20 to-teal-500/20",
  },
  {
    id: "problem-solving",
    name: "Problem Solving",
    description: "Logical thinking and debugging",
    category: "Hardware & Logic",
    icon: "Brain",
    color: "from-purple-500/20 to-indigo-500/20",
  },
];

export const PROJECTS: Project[] = [
  {
    id: "mission-zero-accident",
    number: "01",
    title: "Mission Zero Accident",
    shortDescription: "A safety-oriented project using Arduino Uno and sensors to detect potentially dangerous conditions and support accident-prevention measures.",
    fullDescription: "Mission Zero Accident is a hardware and sensor-integrated safety system developed using the Arduino Uno microcontroller platform. The system continuously polls environmental and proximity sensors to detect critical risk factors on roadways and transport vehicles, triggering instantaneous automated alerts to prevent collisions and mishaps.",
    technologies: ["Arduino Uno", "Sensors", "IoT"],
    goals: [
      "Real-time sensor monitoring for obstacle and danger detection",
      "Automated warning and deceleration triggers",
      "Reliable low-latency alert signaling using embedded C/C++ on Arduino Uno",
      "Practical deployment capability for road transport safety"
    ],
    githubUrl: "https://github.com/amoghavarsha910-svg",
    liveDemoUrl: "", // Configurable placeholder
    iconName: "shield-alert",
    accentColor: "emerald",
  },
  {
    id: "hospital-database-management-system",
    number: "02",
    title: "Hospital Database Management System",
    shortDescription: "A database management system designed to organize and manage hospital-related information efficiently using structured data and SQL operations.",
    fullDescription: "A comprehensive database management application structured to streamline healthcare administrative operations. The system models relational schemas for patient admissions, doctor allocations, medical records, billing transactions, and department inventories, maintaining high data integrity and quick query execution through normalized tables.",
    technologies: ["SQL", "Database", "DBMS"],
    goals: [
      "Design normalized relational schemas for patient, doctor, and billing records",
      "Execute complex queries, joins, and indexing for rapid data retrieval",
      "Ensure relational data integrity and transaction consistency",
      "Reduce administrative redundancy through automated SQL procedures"
    ],
    githubUrl: "https://github.com/amoghavarsha910-svg",
    liveDemoUrl: "", // Configurable placeholder
    iconName: "database",
    accentColor: "cyan",
  },
  {
    id: "beacon-mesh-sos-system",
    number: "03",
    title: "Beacon Mesh SOS System",
    shortDescription: "An emergency communication system based on beacon and mesh communication concepts for transmitting SOS signals in challenging situations.",
    fullDescription: "An emergency-response communication platform designed to overcome infrastructure outages during crisis scenarios. By leveraging multi-hop mesh networking topology and low-power beacon broadcasts, SOS distress packets hop across decentralized nodes until they reach emergency responder reception hubs.",
    technologies: ["Beacon", "Mesh Communication", "SOS"],
    goals: [
      "Multi-hop decentralized mesh signal transmission without cellular coverage",
      "Beacon broadcast protocol for high-efficiency distress signaling",
      "Low power consumption for extended field deployment during emergencies",
      "Rapid node discovery and resilient message relaying"
    ],
    githubUrl: "https://github.com/amoghavarsha910-svg",
    liveDemoUrl: "", // Configurable placeholder
    iconName: "radio",
    accentColor: "indigo",
  },
];

export const EDUCATION_DATA: EducationItem[] = [
  {
    degree: "B.E. — 3rd Year",
    institution: "Alva's Institute of Engineering and Technology",
    period: "2023 — 2026",
    cgpa: "9.12 / 10",
    status: "Currently Enrolled (3rd Year)",
    location: "Karnataka, India",
    highlights: [
      "Consistent academic excellence with a 9.12 CGPA",
      "Core focus on Data Structures, Algorithms, DBMS, and Embedded Systems",
      "Active participation in technical projects and practical laboratory work"
    ],
  },
];

export const CERTIFICATION_PLATFORMS: CertificationPlatform[] = [
  {
    id: "coursera",
    name: "Coursera",
    description: "Online learning and technical courses.",
    badge: "Specialized Courses",
    certificateUrl: "https://www.coursera.org/placeholder-profile",
    icon: "GraduationCap",
  },
  {
    id: "nptel",
    name: "NPTEL",
    description: "Technical learning and academic courses.",
    badge: "Academic Certification",
    certificateUrl: "https://nptel.ac.in/placeholder-profile",
    icon: "BookOpen",
  },
  {
    id: "hackerrank",
    name: "HackerRank",
    description: "Programming practice and problem solving.",
    badge: "Problem Solving",
    certificateUrl: "https://www.hackerrank.com/placeholder-profile",
    icon: "Terminal",
  },
];

export const ACTIVITIES: Activity[] = [
  {
    title: "Sports",
    category: "Teamwork & Athletics",
    description: "Sports participation has helped develop teamwork, discipline, coordination and competitive spirit.",
    icon: "Trophy",
    values: ["Teamwork & Collaboration", "Discipline & Dedication", "Focus Under Pressure", "Continuous Improvement"],
  },
];

export const LANGUAGES: Language[] = [
  { name: "Kannada", level: "Native / Fluent" },
  { name: "English", level: "Professional Working Proficiency" },
  { name: "Hindi", level: "Conversational Proficiency" },
];

export const NAV_LINKS = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Education", href: "#education" },
  { name: "Contact", href: "#contact" },
];
