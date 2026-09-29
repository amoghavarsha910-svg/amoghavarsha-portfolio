const githubUrl = 'https://github.com/amoghavarsha910-svg';

export const portfolio = {
  personal: {
    name: 'Amoghavarsha K A',
    shortName: 'Amogh',
    role: 'Computer Science & Engineering Student',
    status: 'B.E. CSE · 3rd Year',
    college: "Alva's Institute of Engineering and Technology",
    location: 'Shivamogga, Karnataka, India',
    email: 'amoghavarsha910@gmail.com',
    github: githubUrl,
    linkedin: '',
    cgpa: '9.12 / 10',
  },
  projects: [
    { number: '01', title: 'Mission Zero Accident', category: 'IoT / Embedded Systems', description: 'A road-safety project built around Arduino Uno and sensors, exploring ways to monitor conditions related to accident prevention.', technologies: ['Arduino Uno', 'Sensors', 'IoT'], image: 'https://i.ytimg.com/vi/VMucfLp9u4w/maxresdefault.jpg', imageAlt: 'Mission Zero Accident project image', visual: 'signal' },
    { number: '02', title: 'Hospital Database Management System', category: 'Database / Software', description: 'A database management project for organizing hospital-related information through structured database operations.', technologies: ['SQL', 'MySQL', 'DBMS'], image: undefined, imageAlt: undefined, visual: 'records' },
    { number: '03', title: 'Beacon Mesh SOS System', category: 'Communication / Emergency SOS', description: 'A communication-focused project exploring beacon and mesh communication concepts for SOS-style emergency messaging.', technologies: ['Beacon', 'Mesh Communication', 'Emergency SOS'], image: 'https://m.media-amazon.com/images/I/61x3dy7AorL.jpg', imageAlt: 'Beacon Mesh SOS System project image', visual: 'beacon' },
  ],
  skills: [
    { number: '01', title: 'Programming', items: ['Java', 'Python'] },
    { number: '02', title: 'Web / Software', items: ['HTML', 'CSS', 'React', 'Vite'] },
    { number: '03', title: 'Database', items: ['SQL', 'MySQL', 'DBMS'] },
    { number: '04', title: 'IoT / Embedded', items: ['Arduino Uno', 'Sensors'] },
  ],
  education: { institution: "Alva's Institute of Engineering and Technology", degree: 'B.E. — Computer Science & Engineering', university: 'VTU', status: '3rd Year', cgpa: '9.12 / 10' },
  focus: ['Software development', 'Database systems', 'IoT & embedded systems'],
  photos: ['/images/gallery-black.jpeg', '/images/beyond-maroon.jpeg', '/images/gallery-maroon.jpeg'],
};

// Legacy component exports retained for source compatibility while the redesigned
// page is assembled from the portfolio object above.
export const GITHUB_USERNAME = 'amoghavarsha910-svg';
export const RESUME_FILE_PATH = '';
export const PERSONAL_INFO = {
  name: 'Amoghavarsha K A', shortName: 'Amogh', title: 'Computer Science & Engineering Student',
  roleSubtitle: 'B.E. CSE · 3rd Year', email: 'amoghavarsha910@gmail.com', phone: '+91 8197256089',
  location: 'Shivamogga, Karnataka, India', college: "Alva's Institute of Engineering and Technology",
  degree: 'B.E. — Computer Science & Engineering', graduationYear: '', cgpa: '9.12', cgpaMax: '10',
  bioHeadline: 'Computer Science and Engineering student interested in practical software and intelligent systems.',
  aboutP1: 'I am a Computer Science and Engineering student at Alva’s Institute of Engineering and Technology. I enjoy building practical software and solving problems through hands-on projects.',
  aboutP2: 'My project work includes a road-safety concept using Arduino and sensors, a hospital database management project, and a beacon mesh SOS communication concept.',
  statement: 'I learn by building — understanding a problem and exploring ideas through practical projects.',
};
export const STATS = [
  { label: 'CGPA', value: 9.12, isDecimal: true, suffix: '/10' },
  { label: 'Projects', value: 3, isDecimal: false, suffix: '' },
];
export const SKILLS = [
  { id: 'java', name: 'Java', description: 'Programming', category: 'Programming', icon: 'Coffee', color: '' },
  { id: 'python', name: 'Python', description: 'Programming', category: 'Programming', icon: 'FileCode2', color: '' },
  { id: 'html', name: 'HTML', description: 'Web development', category: 'Web & Database', icon: 'Globe', color: '' },
  { id: 'sql', name: 'SQL', description: 'Database systems', category: 'Web & Database', icon: 'Database', color: '' },
  { id: 'arduino', name: 'Arduino Uno', description: 'Embedded project work', category: 'Hardware & Logic', icon: 'Cpu', color: '' },
];
export const PROJECTS = [
  { id: 'mission-zero-accident', number: '01', title: 'Mission Zero Accident', shortDescription: portfolio.projects[0].description, fullDescription: portfolio.projects[0].description, technologies: portfolio.projects[0].technologies, goals: [], githubUrl, iconName: 'shield-alert' as const, accentColor: 'emerald' as const },
  { id: 'hospital-database-management-system', number: '02', title: 'Hospital Database Management System', shortDescription: portfolio.projects[1].description, fullDescription: portfolio.projects[1].description, technologies: portfolio.projects[1].technologies, goals: [], githubUrl, iconName: 'database' as const, accentColor: 'cyan' as const },
  { id: 'beacon-mesh-sos-system', number: '03', title: 'Beacon Mesh SOS System', shortDescription: portfolio.projects[2].description, fullDescription: portfolio.projects[2].description, technologies: portfolio.projects[2].technologies, goals: [], githubUrl, iconName: 'radio' as const, accentColor: 'indigo' as const },
];
export const EDUCATION_DATA = [{ degree: 'B.E. — Computer Science & Engineering', institution: "Alva's Institute of Engineering and Technology", period: 'Currently enrolled', cgpa: '9.12 / 10', status: '3rd Year', location: 'Shivamogga, Karnataka, India', highlights: [] }];
interface LegacyCertification { id: string; name: string; description: string; badge: string; certificateUrl: string; icon: string }
interface LegacyActivity { title: string; category: string; description: string; icon: string; values: string[] }
export const CERTIFICATION_PLATFORMS: LegacyCertification[] = [];
export const ACTIVITIES: LegacyActivity[] = [];
export const LANGUAGES = [
  { name: 'Kannada', level: 'Native / Fluent' },
  { name: 'English', level: 'Professional Working Proficiency' },
  { name: 'Hindi', level: 'Conversational Proficiency' },
];
export const NAV_LINKS = [
  { name: 'Home', href: '#home' }, { name: 'Work', href: '#work' }, { name: 'About', href: '#about' },
  { name: 'Capabilities', href: '#skills' }, { name: 'Education', href: '#education' }, { name: 'Contact', href: '#contact' },
];
