// Single source of truth for portfolio content
export const profile = {
  // Personal Information
  name: "Harfool Gurjar",
  title: "Frontend Developer · React Developer",
  summary:
    "Performance-oriented, user-centric Front-End Developer with 10+ months experience building responsive, modular apps with React & modern UI. Improved load times by ~40% via memoization and code-splitting; Agile-ready with exposure to Node, PostgreSQL, MongoDB, and AI-driven systems.",
  location: "Bhilware, Rajasthan, India",

  // Contact Information
  contact: {
    email: "harfoolgujjar63@gmail.com",
    phone: "+91 96102 37965",
    linkedin:
      "https://www.linkedin.com/in/harfool-gurjar-84997637a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    resume: "/HarfoolGujjarResume2025.pdf",
  },

  // Skills organized by category
  skills: {
    frontend: [
      "HTML5",
      "CSS3",
      "JavaScript (ES6+)",
      "React.js",
      "Redux Toolkit",
      "Zustand",
      "Tailwind CSS",
      "Bootstrap",
      "Figma-to-Code",
      "Responsive Web Design",
    ],
    stateAndForms: [
      "React Hooks",
      "Context API",
      "Redux",
      "Formik",
      "React Hook Form",
      "Yup",
      "Zod",
    ],
    backendExposure: [
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "MongoDB",
      "Prisma ORM",
      "JWT Auth",
    ],
    toolsAndApis: [
      "RESTful APIs",
      "Axios",
      "Postman",
      "Git",
      "GitHub",
      "Docker",
    ],
  },

  // Core strengths as badges
  strengths: [
    "JavaScript proficiency",
    "Performance-driven UX",
    "Agile & collaborative",
  ],

  // Work Experience
  experience: [
    {
      role: "Frontend Developer Intern",
      company: "MetaCaps IT Solutions",
      period: "Dec 2023 – Sept 2024",
      location: "Bijainagar, Ajmer",
      achievements: [
        "Built reusable, accessible React UI components from Figma (WCAG).",
        "Translated designs into pixel-perfect, performant UIs (~25% faster UI feedback cyclesFreelance Software Engineer).",
        "Integrated REST APIs; managed state with Hooks/Context.",
        "Applied memoization + code-splitting → ~40% load speed boost.",
        "Collaborated in Agile sprints across functions.",
      ],
    },

    {
      role: "Freelance Software Engineer",
      company: "freelance",
      period: " July 2025 – Presen",
      location: "Remote",
      achievements: [
        `Built and deployed full-stack web applications using the MERN stack (MongoDB, Express.js, React, Node.js) for
 diverse clients`,
        `     Designed and implemented REST APIs with modern authentication (JWT) and database integrations .`,
        `Delivered scalable, production-ready solutions using Docker and cloud platforms (Vercel, Render)`,
        `Collaborated with clients, ensuring timely delivery and high-quality code through Agile workflows`,
      ],
    },
  ],

  // Projects
  projects: [
    {
      name: "Zoo Management System",
      liveLink : "https://zms.chaipecharcha.tech/",
      subtitle:
        "A web application to manage zoo operations including animal records, staff management, and visitor tracking.",
      stack: ["React", "Tailwind", "Node", "Express", "MongoDB", "JWT"],
      highlights: [
        `Built a public zoo site (animals catalogue, detail, tickets) and an admin dashboard with RBAC (owner/admin/editor).`,
        `Frontend: React Router SPA, Zustand stores (admins/animals/orders), prefetch-on-click navigation, role-sorted
 admin table, responsive UI with Tailwind`,
        `Backend: Express + Mongoose REST APIs, middlewares (verifyJWT, requireAdminRole), pagination, file uploads
 (Multer/Cloudinary), QR ticket generation.`,
      ],
      image: "/public/zoo-management.png",
    },
    {
      name: " Marwar Saheli | E-Commerce ",
     liveLink: "https://marwarsaheli.com/",
      subtitle:
        "An ecommerce platform for selling authentic Rajasthani spices online.",

      stack: [
        "MongoDB",
        "Express",
        "React",
        "Node",
        "Tailwind",
        "razorpay API",
      ],
      highlights: [
        ` Frontend: responsive e-commerce UI with product listings, categories, search, reviews, image optimization and lazy
 loading; state managed with Zustand`,
        ` Backend: Express + Mongoose APIs for users, products, orders, payments, shipping; controllers, middleware,
 robust error handling and logging.`,
        `Admin Dashboard: Implemented Role-Based Access Control (RBAC), CRUD for products/categories, and order
 management to ensure secure and efficient administration.`,
      ],
      image: "/public/marwar-sahli.png",
    },
  ],

  // Education
  education: [
    {
      degree: "BCA",
      institution: "Maharshi Dayanand Saraswati University (MDSU), Ajmer",
      period: "2022–2025",
      status: "Completed",
    },
  ],

  // Certifications
  certifications: [
    {
      name: "Full Stack Web Development 1.0",
      issuer: "Physics Wallah",
      year: "2024",
    },
  ],

  // Awards
  awards: [
    {
      name: "Outstanding Tech Talent Award",
      description: "BCA 3rd Year (2024–25)",
      year: "2024",
    },
    {
      name: "Excellency Award",
      description: "BCA 2nd Year (2023–24)",
      year: "2023",
    },
  ],

  // Services offered
  services: [
    "Landing pages",
    "Dashboards",
    "API integrations",
    "React UI kits",
  ],

  // Social Links
  social: {
    github: "https://github.com/harfool",
    linkedin:
      "https://www.linkedin.com/in/harfool-gurjar-84997637a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    twitter: "https://twitter.com/harfool",
  },

  // SEO and Meta
  seo: {
    title: "Harfool Gurjar - Frontend Developer | React.js Specialist",
    description:
      "Performance-oriented Frontend Developer with 10+ months experience. Specializing in React.js, modern UI/UX, and responsive web applications. Available for freelance projects.",
    keywords:
      "Frontend Developer, React Developer, JavaScript, Web Development, UI/UX, Freelancer",
    ogImage: "/og-image.jpg",
  },
};

// Navigation items
export const navigation = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Education", href: "#education" },
  { name: "Contact", href: "#contact" },
];

// Statistics for hero section
export const stats = [
  { label: "Months Experience", value: "10 + ", suffix: "" },
  { label: "Projects Completed", value: "5", suffix: "+" },
  { label: "Performance Boost", value: "40", suffix: "%" },
  { label: "Client Satisfaction", value: "100", suffix: "%" },
];
