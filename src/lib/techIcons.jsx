/**
 * Tech Stack Icons Mapping
 * Maps technology names to their corresponding react-icons
 */

import {
  // Frontend
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaBootstrap,
  FaFigma,
  FaSass,
  // Backend & Database
  FaNodeJs,
  FaDocker,
  FaGitAlt,
  FaGithub,
  FaNpm,
  // Languages
  FaPython,
  FaJava,
  FaPhp,
} from 'react-icons/fa';

import {
  // Modern Frontend
  SiNextdotjs,
  SiVite,
  SiTailwindcss,
  SiRedux,
  SiTypescript,
  SiJavascript,
  SiWebpack,
  SiVuedotjs,
  SiAngular,
  SiSvelte,
  // Backend & Database
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiPrisma,
  SiSupabase,
  SiFirebase,
  SiMysql,
  SiRedis,
  // Tools & APIs
  SiPostman,
  SiAxios,
  SiJsonwebtokens,
  SiEslint,
  SiPrettier,
  SiVercel,
  SiNetlify,
  SiCloudinary,
  // State Management
  SiReactquery,
  SiReacthookform,
  SiZod,
  // Cloud & DevOps
  SiGit,
  SiGithubactions,
  SiRender,
  SiHeroku,
} from 'react-icons/si';

import {
  // Additional Icons
  TbBrandFramerMotion,
  TbBrandReactNative,
} from 'react-icons/tb';

import {
  DiResponsive,
} from 'react-icons/di';

import {
  BsFiletypeJson,
} from 'react-icons/bs';

import {
  BiLogoMongodb,
} from 'react-icons/bi';

/**
 * Icon mapping object - maps skill names to their icon components
 */
export const techIconMap = {
  // Frontend Technologies
  'HTML5': FaHtml5,
  'HTML': FaHtml5,
  'CSS3': FaCss3Alt,
  'CSS': FaCss3Alt,
  'JavaScript': SiJavascript,
  'JavaScript (ES6+)': FaJs,
  'JS': FaJs,
  'TypeScript': SiTypescript,
  'React': FaReact,
  'React.js': FaReact,
  'React Native': TbBrandReactNative,
  'Next.js': SiNextdotjs,
  'Vue.js': SiVuedotjs,
  'Angular': SiAngular,
  'Svelte': SiSvelte,
  'Vite': SiVite,
  
  // Styling
  'Tailwind CSS': SiTailwindcss,
  'Tailwind': SiTailwindcss,
  'Bootstrap': FaBootstrap,
  'Sass': FaSass,
  'SCSS': FaSass,
  'Figma-to-Code': FaFigma,
  'Figma': FaFigma,
  'Responsive Web Design': DiResponsive,
  'Responsive Design': DiResponsive,
  
  // State Management & Forms
  'Redux': SiRedux,
  'Redux Toolkit': SiRedux,
  'Zustand': SiReactquery,
  'Context API': FaReact,
  'React Hooks': FaReact,
  'React Hook Form': SiReacthookform,
  'Formik': SiReacthookform,
  'Yup': SiZod,
  'Zod': SiZod,
  'React Query': SiReactquery,
  'TanStack Query': SiReactquery,
  
  // Backend
  'Node.js': FaNodeJs,
  'Node': FaNodeJs,
  'Express.js': SiExpress,
  'Express': SiExpress,
  'Python': FaPython,
  'Java': FaJava,
  'PHP': FaPhp,
  
  // Databases
  'MongoDB': SiMongodb,
  'PostgreSQL': SiPostgresql,
  'MySQL': SiMysql,
  'Prisma ORM': SiPrisma,
  'Prisma': SiPrisma,
  'Redis': SiRedis,
  'Firebase': SiFirebase,
  'Supabase': SiSupabase,
  
  // Tools & APIs
  'RESTful APIs': BsFiletypeJson,
  'REST APIs': BsFiletypeJson,
  'Axios': SiAxios,
  'Postman': SiPostman,
  'Git': SiGit,
  'GitHub': FaGithub,
  'Docker': FaDocker,
  'NPM': FaNpm,
  'JWT Auth': SiJsonwebtokens,
  'JWT': SiJsonwebtokens,
  'Webpack': SiWebpack,
  'ESLint': SiEslint,
  'Prettier': SiPrettier,
  
  // Animation
  'Framer Motion': TbBrandFramerMotion,
  'GSAP': FaJs, // No specific GSAP icon, using JS
  
  // Cloud & Deployment
  'Vercel': SiVercel,
  'Netlify': SiNetlify,
  'Render': SiRender,
  'Heroku': SiHeroku,
  'Cloudinary': SiCloudinary,
  'GitHub Actions': SiGithubactions,
};

/**
 * Get icon component for a given tech name
 * @param {string} techName - Name of the technology
 * @returns {React.Component|null} - Icon component or null if not found
 */
export const getTechIcon = (techName) => {
  if (!techName) return null;
  
  // Try exact match first
  if (techIconMap[techName]) {
    return techIconMap[techName];
  }
  
  // Try case-insensitive match
  const normalizedName = techName.toLowerCase();
  const matchedKey = Object.keys(techIconMap).find(
    key => key.toLowerCase() === normalizedName
  );
  
  return matchedKey ? techIconMap[matchedKey] : null;
};

/**
 * Color mapping for different tech categories
 */
export const techColorMap = {
  // Frontend
  'HTML5': '#E34F26',
  'CSS3': '#1572B6',
  'JavaScript': '#F7DF1E',
  'JavaScript (ES6+)': '#F7DF1E',
  'TypeScript': '#3178C6',
  'React.js': '#61DAFB',
  'React': '#61DAFB',
  'Next.js': '#000000',
  'Vue.js': '#4FC08D',
  'Angular': '#DD0031',
  'Svelte': '#FF3E00',
  'Vite': '#646CFF',
  
  // Styling
  'Tailwind CSS': '#06B6D4',
  'Bootstrap': '#7952B3',
  'Sass': '#CC6699',
  'Figma': '#F24E1E',
  
  // State Management
  'Redux': '#764ABC',
  'Redux Toolkit': '#764ABC',
  
  // Backend
  'Node.js': '#339933',
  'Express.js': '#000000',
  'Python': '#3776AB',
  
  // Databases
  'MongoDB': '#47A248',
  'PostgreSQL': '#4169E1',
  'MySQL': '#4479A1',
  'Prisma': '#2D3748',
  
  // Tools
  'Git': '#F05032',
  'GitHub': '#181717',
  'Docker': '#2496ED',
  'Postman': '#FF6C37',
};

/**
 * Get color for a tech
 * @param {string} techName - Name of the technology
 * @returns {string} - Hex color or default
 */
export const getTechColor = (techName) => {
  return techColorMap[techName] || 'currentColor';
};
