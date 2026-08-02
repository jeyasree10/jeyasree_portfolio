# Product Requirements Document (PRD)

## Project Title
**S. Jeyasree — Recruiter-Focused Personal Portfolio Website**

---

## 1. Overview & Objective
Build a high-performance, modern, and visually compelling personal portfolio website for **S. Jeyasree** (Pre-Final Year B.Tech EXTC Student at VESIT, Mumbai). The website is tailored to impress engineering recruiters and hiring managers at Google, Microsoft, Amazon, Atlassian, NVIDIA, Adobe, and top product startups.

The website accurately reflects all information from S. Jeyasree's official resume and incorporates her original professional portrait as the hero image.

---

## 2. Target Audience
- Technical Recruiters & Talent Acquisition Specialists
- Engineering Managers & Software Team Leads
- Competitive Coding & ML Research Evaluators

---

## 3. Core Resume Content & Data Specifications

### Personal Information
- **Name**: S. Jeyasree
- **Status**: Pre-Final Year Student | B.Tech EXTC | VESIT, Mumbai
- **Phone**: `+91 9004770598`
- **Email**: `jeyasreesreenivasan@gmail.com`
- **GitHub**: `jeyasree10` (`https://github.com/jeyasree10`)
- **LinkedIn**: `jeyasree-s-ba7464376` (`https://www.linkedin.com/in/jeyasree-s-ba7464376`)

### About Me
Pre-final year B.Tech EXTC student with interests in software engineering, machine learning, and problem solving. Experienced in Python, C++, SQL development through academic projects and internships.

### Professional Internship
- **Role**: Google AI-ML Internship
- **Organization**: AICTE–EduSkills
- **Key Contributions**:
  - Developed and trained ML models using Python.
  - Worked on data cleaning, model training, and performance evaluation.

### Featured Project
- **Name**: Bento – Smart Canteen Management System
- **Project Link**: `https://drive.google.com/file/d/16nrrAnOTeACpbRB2xZOdDKIUVz6tt0y/view?usp=sharing`
- **Description**: Developed a Flutter-based smart canteen management system consisting of an Android application for users and a web dashboard for canteen staff, enabling real-time food ordering, order tracking, and menu management using Firebase.
- **Tech Stack**: Flutter, Firebase, and Android Studio

### Achievements
- **Google Cloud Study Jam 2025**: Hands-on experience with cloud infrastructure and GenAI tools.
- **Syrus '26 Hackathon**: Selected among the Top 15 teams out of 40+ participating teams.

### Education
- **B.Tech EXTC, VESIT Mumbai**: CGPA 8.84 / 10
- **SSC, PM Shri K.V. Bhandup**: 84%
- **HSC, PM Shri K.V. Bhandup**: 75%

### Technical Skills
- **Programming Languages**: C, C++, Python, SQL
- **Frameworks**: Flutter, Firebase
- **Machine Learning**: Classification Models, Data Preprocessing, Feature Scaling, Model Evaluation
- **Tools**: Git, GitHub, Google Cloud, Android Studio

---

## 4. UI/UX Design System & Aesthetic Guidelines

### Inspired By
Apple, Stripe, and Linear UI design languages.

### Color Palette
- **Primary Accent**: Soft Blue (`#4F8EF7`)
- **Secondary Accent**: Light Soft Blue (`#EEF5FF`)
- **Dark Mode Background & Text**: Navy Slate (`#0F172A` / `#0A0E1A`)
- **Light Mode Background**: Crisp White / Off-White (`#FFFFFF` / `#F8FAFC`)
- **Gradient**: Soft Blue to Sky Blue (`#4F8EF7` → `#7DD3FC`)

### Key Components & Interactions
1. **Navbar**: Sticky glassmorphic navbar with smooth scroll links, top scroll progress bar, dark/light theme switch, and direct **Resume** trigger.
2. **Hero Section**:
   - Left: Greeting badge, Name **S. Jeyasree**, EXTC subtitle, rotating typing text effect (*Software Developer*, *Machine Learning Enthusiast*, *Flutter Developer*, *Problem Solver*), CTA buttons (**Download Resume**, **View Projects**, **Contact Me**), glowing social pills.
   - Right: Original photograph frame (`src/assets/original_portrait.jpg`) with ambient background glow and floating tech badges (`Flutter`, `Machine Learning`, `C++ / Python`).
3. **About Section**: Professional paragraph with animated stat counter cards (**CGPA 8.84/10**, **Projects 5+**, **Internships 1+**, **Hackathons Top 15**).
4. **Skills Section**: Glassmorphic cards with animated progress bars for Programming Languages, Frameworks, ML, and Tools.
5. **Internship Timeline**: Detailed card for Google AI-ML Internship (AICTE–EduSkills).
6. **Featured Projects**: Bento Smart Canteen System card with live link, GitHub button, and case study modal. Placeholders for upcoming AI/Web/ML projects.
7. **Achievements & Certifications**: Cards for Google Cloud Study Jam 2025 and Syrus '26 Hackathon (Top 15 Finalist).
8. **Education Timeline**: VESIT Mumbai, PM Shri KV Bhandup (HSC 75%, SSC 84%).
9. **Coding Profiles**: Interactive cards for GitHub, LinkedIn, LeetCode, HackerRank, CodeChef.
10. **Contact & Footer**: Contact details cards, working message form with status toast, and minimal footer with back-to-top button.
11. **Original PDF Resume Download**: Direct download trigger for `/S_Jeyasree_Resume.pdf`.

---

## 5. Technical Requirements & Architecture
- **Framework**: React 19 + TypeScript + Vite
- **Styling**: Tailwind CSS + Glassmorphism utilities
- **Animations**: Framer Motion scroll reveals & physics
- **Icons**: Lucide React
- **Effects**: Custom cursor glow, particle/blob background, canvas confetti on form submission

---

## 6. Verification & Acceptance Criteria
- [x] All content strictly matches S. Jeyasree's original resume PDF.
- [x] Uses the original attached portrait photograph in the Hero Section.
- [x] Resume button downloads the official `S_Jeyasree_Resume.pdf`.
- [x] Zero build or compilation errors (`npm run build` passes cleanly).
- [x] Dev server running smoothly at `http://localhost:5173/`.
