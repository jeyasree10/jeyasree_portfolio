export interface SkillCategory {
  category: string;
  items: { name: string; level: number }[];
}

export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  tags: string[];
  features: string[];
  githubUrl?: string;
  demoUrl?: string;
  projectLink?: string;
  isPlaceholder?: boolean;
  image?: string;
}

export interface Experience {
  role: string;
  organization: string;
  period: string;
  description: string;
  highlights: string[];
  skills: string[];
}

export interface Education {
  institution: string;
  degree: string;
  score: string;
  period: string;
  details?: string;
}

export interface Achievement {
  title: string;
  event: string;
  year: string;
  description: string;
  badgeText: string;
}

export interface Certification {
  title: string;
  issuer: string;
  year: string;
  verifyUrl?: string;
  image?: string;
}

export interface CodingProfile {
  name: string;
  platform: string;
  url: string;
  color: string;
  iconName: string;
  handle: string;
}

export const PORTFOLIO_DATA = {
  personal: {
    name: "S. Jeyasree",
    title: "Pre-Final Year Student",
    degree: "B.Tech EXTC",
    college: "VESIT, Mumbai",
    tagline: "Software Engineering • Machine Learning • Problem Solving",
    typingRoles: [
      "Software Developer",
      "Machine Learning Enthusiast",
      "Flutter Developer",
      "Problem Solver"
    ],
    about: "Pre-final year B.Tech EXTC student with interests in software engineering, machine learning, and problem solving. Experienced in Python, C++, SQL development through academic projects and internships.",
    stats: [
      { label: "CGPA", value: "8.84", suffix: "/10" },
      { label: "Projects", value: "1", suffix: "" },
      { label: "Internships", value: "1", suffix: "" },
      { label: "Hackathons", value: "Top 15", suffix: "" },
    ],
    contact: {
      email: "jeyasreesreenivasan@gmail.com",
      phone: "+91 9004770598",
      location: "Mumbai, Maharashtra, India",
      github: "https://github.com/jeyasree10",
      linkedin: "https://www.linkedin.com/in/jeyasree-s-ba7464376",
      resumePdf: "/S_Jeyasree_Resume.pdf"
    }
  },

  skillCategories: [
    {
      category: "Programming Languages",
      items: [
        { name: "C", level: 85 },
        { name: "C++", level: 90 },
        { name: "Python", level: 88 },
        { name: "SQL", level: 82 }
      ]
    },
    {
      category: "Frameworks & Development",
      items: [
        { name: "Flutter", level: 88 },
        { name: "Firebase", level: 85 },
        { name: "Android Studio", level: 80 }
      ]
    },
    {
      category: "Machine Learning",
      items: [
        { name: "Classification Models", level: 85 },
        { name: "Data Preprocessing", level: 88 },
        { name: "Feature Scaling", level: 82 },
        { name: "Model Evaluation", level: 85 }
      ]
    },
    {
      category: "Tools & Platforms",
      items: [
        { name: "Git", level: 88 },
        { name: "GitHub", level: 90 },
        { name: "Google Cloud", level: 80 },
        { name: "Android Studio", level: 82 }
      ]
    }
  ] as SkillCategory[],

  experiences: [
    {
      role: "Google AI-ML Internship",
      organization: "AICTE–EduSkills",
      period: "Internship",
      description: "Completed Google AI-ML Internship program (AICTE–EduSkills). Developed and trained ML models using Python with focus on complete data processing pipelines.",
      highlights: [
        "Developed and trained ML models using Python.",
        "Worked on data cleaning, model training, and performance evaluation."
      ],
      skills: ["Python", "Machine Learning", "Data Cleaning", "Model Training", "Performance Evaluation"]
    }
  ] as Experience[],

  projects: [
    {
      id: "bento-canteen",
      title: "Bento – Smart Canteen Management System",
      category: "Flutter / Mobile",
      description: "Developed a Flutter-based smart canteen management system consisting of an Android application for users and a web dashboard for canteen staff, enabling real-time food ordering, order tracking, and menu management using Firebase.",
      tags: ["Flutter", "Firebase", "Android Studio"],
      features: [
        "Real-time food ordering application for users",
        "Live order tracking and queue updates",
        "Menu management dashboard for canteen staff",
        "Real-time Firebase backend database integration"
      ],
      projectLink: "https://drive.google.com/file/d/16nrrAnOTeACpbRB2xZOdDKIUVz6tt0y/view?usp=sharing",
      githubUrl: "https://github.com/jeyasree10",
      demoUrl: "https://drive.google.com/file/d/16nrrAnOTeACpbRB2xZOdDKIUVz6tt0y/view?usp=sharing",
      isPlaceholder: false
    }
  ] as Project[],

  achievements: [
    {
      title: "Google Cloud Study Jam 2025",
      event: "Google Cloud Skill Boost",
      year: "2025",
      description: "Hands-on experience with cloud infrastructure and GenAI tools.",
      badgeText: "Google Cloud Certified Participant"
    },
    {
      title: "Syrus '26 Hackathon",
      event: "VESIT Hackathon",
      year: "2026",
      description: "Selected among the Top 15 teams out of 40+ participating teams.",
      badgeText: "Top 15 Finalist"
    }
  ] as Achievement[],

  education: [
    {
      institution: "VESIT, Mumbai",
      degree: "B.Tech EXTC",
      score: "CGPA: 8.84 / 10",
      period: "Pre-Final Year Student",
      details: "Focusing on Software Engineering, Machine Learning, Data Structures & Algorithms, and Problem Solving."
    },
    {
      institution: "PM Shri K.V. Bhandup",
      degree: "SSC (Class X)",
      score: "84%",
      period: "Secondary Education",
      details: "Strong academic foundation in Mathematics and Science."
    },
    {
      institution: "PM Shri K.V. Bhandup",
      degree: "HSC (Class XII)",
      score: "75%",
      period: "Higher Secondary Education",
      details: "Science Stream (Physics, Chemistry, Mathematics)."
    }
  ] as Education[],

  certifications: [
    {
      title: "Google AI-ML Internship (AICTE–EduSkills)",
      issuer: "AICTE–EduSkills & Google",
      year: "2024",
      verifyUrl: "/certificates/google-ai-ml.pdf",
      image: "/certificates/google-ai-ml.png"
    },
    {
      title: "Google Cloud Study Jam 2025",
      issuer: "Google Cloud",
      year: "2025",
      verifyUrl: "/certificates/google-cloud.pdf",
      image: "/certificates/google-cloud.png"
    },
    {
      title: "Syrus '26 Hackathon",
      issuer: "VESIT Hackathon",
      year: "2026",
      verifyUrl: "/certificates/syrus-hackathon.png",
      image: "/certificates/syrus-hackathon.png"
    }
  ] as Certification[],

  codingProfiles: [
    {
      name: "GitHub",
      platform: "Version Control & Repositories",
      url: "https://github.com/jeyasree10",
      color: "from-slate-700 to-slate-900",
      iconName: "Github",
      handle: "@jeyasree10"
    },
    {
      name: "LinkedIn",
      platform: "Professional Network",
      url: "https://www.linkedin.com/in/jeyasree-s-ba7464376",
      color: "from-blue-600 to-indigo-700",
      iconName: "Linkedin",
      handle: "jeyasree-s-ba7464376"
    }
  ] as CodingProfile[]
};
