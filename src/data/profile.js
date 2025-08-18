// Single source of truth for portfolio content
export const profile = {
  // Personal Information
  name: "Harfool Gurjar",
  title: "Frontend Developer · React Developer",
  summary: "Performance-oriented, user-centric Front-End Developer with 10+ months experience building responsive, modular apps with React & modern UI. Improved load times by ~40% via memoization and code-splitting; Agile-ready with exposure to Node, PostgreSQL, MongoDB, and AI-driven systems.",
  location: "Bhilware, Rajasthan, India",
  
  // Contact Information  
  contact: {
    email: "harfoolgujjar63@gmail.com",
    phone: "+91 96102 37965",
    linkedin: "https://www.linkedin.com/in/harfool-gurjar-84997637a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    resume: "/HarfoolGujjarResume2025.pdf"
  },

  // Skills organized by category
  skills: {
    frontend: [
      "HTML5", "CSS3", "JavaScript (ES6+)", "React.js", "Redux Toolkit", 
      "Zustand", "Tailwind CSS", "Bootstrap", "Figma-to-Code", "Responsive Web Design"
    ],
    stateAndForms: [
      "React Hooks", "Context API", "Redux", "Formik", "React Hook Form", "Yup", "Zod"
    ],
    backendExposure: [
      "Node.js", "Express.js", "PostgreSQL", "MongoDB", "Prisma ORM", "JWT Auth"
    ],
    toolsAndApis: [
      "RESTful APIs", "Axios", "Postman", "Git", "GitHub", "Docker"
    ]
  },

  // Core strengths as badges
  strengths: [
    "JavaScript proficiency",
    "Performance-driven UX", 
    "Agile & collaborative"
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
        "Translated designs into pixel-perfect, performant UIs (~25% faster UI feedback cycles).",
        "Integrated REST APIs; managed state with Hooks/Context.",
        "Applied memoization + code-splitting → ~40% load speed boost.",
        "Collaborated in Agile sprints across functions."
      ]
    }
  ],

  // Projects
  projects: [
    {
      name: "LeetLab",
      subtitle: "Online Code Execution Platform",
      description: "A comprehensive platform for online coding practice with real-time code execution and verdict system.",
      stack: ["React", "Tailwind", "Node", "Express", "Prisma ORM", "PostgreSQL", "Judge0 API", "JWT"],
      highlights: [
        "REST APIs for users/problems/submissions",
        "Live code execution with real-time verdicts", 
        "Responsive UI with role-based access"
      ],
      image: "/project-leetlab.jpg",
      
    },
    {
      name: "AI-Powered Code Review & Generation Tool",
      subtitle: "Intelligent Code Analysis Platform",
      description: "Advanced tool leveraging AI for automated code review, bug detection, and smart code generation suggestions.",
      stack: ["MongoDB", "Express", "React", "Node", "Tailwind", "Google Gemini API"],
      highlights: [
        "Automated code review and bug detection",
        "Smart suggestions via Google Gemini",
        "Real-time analysis with MongoDB persistence"
      ],
      image: "/project-ai-code.jpg", 
    }
  ],

  // Education
  education: [
    {
      degree: "BCA",
      institution: "Maharshi Dayanand Saraswati University (MDSU), Ajmer",
      period: "2022–2025",
      status: "Completed"
    }
  ],

  // Certifications
  certifications: [
    {
      name: "Full Stack Web Development 1.0",
      issuer: "Physics Wallah",
      year: "2024"
    }
  ],

  // Awards
  awards: [
    {
      name: "Outstanding Tech Talent Award",
      description: "BCA 3rd Year (2024–25)",
      year: "2024"
    },
    {
      name: "Excellency Award", 
      description: "BCA 2nd Year (2023–24)",
      year: "2023"
    }
  ],

  // Services offered
  services: [
    "Landing pages",
    "Dashboards", 
    "API integrations",
    "React UI kits"
  ],

  // Social Links
  social: {
    github: "https://github.com/harfool",
    linkedin: "https://www.linkedin.com/in/harfool-gurjar-84997637a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    twitter: "https://twitter.com/harfool"
  },

  // SEO and Meta
  seo: {
    title: "Harfool Gurjar - Frontend Developer | React.js Specialist",
    description: "Performance-oriented Frontend Developer with 10+ months experience. Specializing in React.js, modern UI/UX, and responsive web applications. Available for freelance projects.",
    keywords: "Frontend Developer, React Developer, JavaScript, Web Development, UI/UX, Freelancer",
    ogImage: "/og-image.jpg"
  }
};

// Navigation items
export const navigation = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Education", href: "#education" },
  { name: "Contact", href: "#contact" }
];

// Statistics for hero section
export const stats = [
  { label: "Months Experience", value: "10 + ", suffix: "" },
  { label: "Projects Completed", value: "5", suffix: "+" },
  { label: "Performance Boost", value: "40", suffix: "%" },
  { label: "Client Satisfaction", value: "100", suffix: "%" }
];