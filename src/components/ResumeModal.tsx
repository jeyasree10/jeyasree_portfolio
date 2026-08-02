import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Download, Printer, Mail, Phone, MapPin, GraduationCap, Briefcase, Code, Award, ExternalLink } from 'lucide-react';
import { PORTFOLIO_DATA } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const { personal, skillCategories, experiences, projects, education } = PORTFOLIO_DATA;

  if (!isOpen) return null;

  const handleDownloadPdf = () => {
    const link = document.createElement('a');
    link.href = personal.contact.resumePdf;
    link.download = 'S_Jeyasree_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/70 backdrop-blur-md overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="bg-white text-slate-900 w-full max-w-4xl rounded-3xl shadow-2xl overflow-hidden my-8 relative flex flex-col max-h-[90vh]"
        >
          {/* Modal Toolbar */}
          <div className="p-4 sm:px-8 bg-slate-900 text-white flex items-center justify-between shrink-0">
            <div className="flex items-center gap-2">
              <span className="font-poppins font-bold text-base sm:text-lg">S. Jeyasree - Official Resume</span>
              <span className="text-xs bg-brand-500/20 text-brand-300 border border-brand-500/30 px-2 py-0.5 rounded-full font-medium">
                Verified Original PDF
              </span>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={handleDownloadPdf}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-brand-500 hover:bg-brand-600 text-white text-xs font-semibold shadow-md transition-colors"
              >
                <Download className="w-4 h-4" />
                <span>Download PDF</span>
              </button>

              <button
                onClick={onClose}
                className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Resume Body */}
          <div id="printable-resume" className="p-6 sm:p-10 overflow-y-auto space-y-8 font-inter text-slate-800 leading-normal">
            
            {/* Resume Header */}
            <div className="border-b-2 border-slate-900 pb-6 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <div>
                <h1 className="text-3xl font-poppins font-extrabold text-slate-900 uppercase tracking-tight">
                  {personal.name}
                </h1>
                <p className="text-base font-semibold text-brand-600">
                  {personal.title} | {personal.degree} | {personal.college}
                </p>
              </div>

              <div className="text-xs space-y-1 text-slate-600 sm:text-right font-medium">
                <div className="flex items-center sm:justify-end gap-1.5">
                  <Phone className="w-3.5 h-3.5 text-brand-500" />
                  <span>{personal.contact.phone}</span>
                </div>
                <div className="flex items-center sm:justify-end gap-1.5">
                  <Mail className="w-3.5 h-3.5 text-brand-500" />
                  <span>{personal.contact.email}</span>
                </div>
                <div className="flex items-center sm:justify-end gap-1.5">
                  <ExternalLink className="w-3.5 h-3.5 text-brand-500" />
                  <span>github.com/jeyasree10</span>
                </div>
              </div>
            </div>

            {/* About Me */}
            <div className="space-y-2">
              <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-200 pb-1">
                ABOUT ME
              </h2>
              <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                {personal.about}
              </p>
            </div>

            {/* Internship */}
            <div className="space-y-3">
              <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-200 pb-1">
                INTERNSHIP
              </h2>
              {experiences.map((exp, i) => (
                <div key={i} className="space-y-1.5 text-xs sm:text-sm">
                  <strong className="text-slate-900 font-bold block">{exp.role} ({exp.organization})</strong>
                  <ul className="list-disc pl-4 space-y-1 text-xs text-slate-700">
                    {exp.highlights.map((h, hIdx) => (
                      <li key={hIdx}>{h}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Project */}
            <div className="space-y-3">
              <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-200 pb-1">
                PROJECT
              </h2>
              {projects.filter(p => !p.isPlaceholder).map((proj, i) => (
                <div key={i} className="space-y-1 text-xs sm:text-sm">
                  <strong className="text-slate-900 font-bold block">{proj.title}</strong>
                  {proj.projectLink && (
                    <a href={proj.projectLink} target="_blank" rel="noreferrer" className="text-xs text-brand-600 hover:underline block">
                      Project Link: {proj.projectLink}
                    </a>
                  )}
                  <p className="text-xs text-slate-700">{proj.description}</p>
                  <p className="text-xs font-semibold text-slate-600">Tech Stack: {proj.tags.join(', ')}</p>
                </div>
              ))}
            </div>

            {/* Achievements */}
            <div className="space-y-2">
              <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-200 pb-1">
                ACHIEVEMENT
              </h2>
              <ul className="list-disc pl-4 space-y-1 text-xs text-slate-700">
                <li>Google Cloud Study Jam 2025: Hands-on experience with cloud infrastructure and GenAI tools.</li>
                <li>Syrus '26 Hackathon: Selected among the Top 15 teams out of 40+ participating teams.</li>
              </ul>
            </div>

            {/* Education */}
            <div className="space-y-3">
              <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-200 pb-1">
                EDUCATION
              </h2>
              <div className="space-y-2">
                {education.map((edu, i) => (
                  <div key={i} className="flex justify-between items-center text-xs sm:text-sm">
                    <span><strong>{edu.degree}</strong>, {edu.institution}</span>
                    <span className="font-bold text-slate-900">{edu.score}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Technical Skills */}
            <div className="space-y-2">
              <h2 className="text-xs font-bold uppercase tracking-wider text-slate-900 border-b border-slate-200 pb-1">
                TECHNICAL SKILLS
              </h2>
              <div className="space-y-1 text-xs text-slate-700">
                <p><strong>Programming Languages:</strong> C, C++, Python, SQL</p>
                <p><strong>Frameworks:</strong> Flutter, Firebase</p>
                <p><strong>Machine Learning:</strong> Classification Models, Data Preprocessing, Feature Scaling, Model Evaluation</p>
                <p><strong>Tools:</strong> Git, GitHub, Google Cloud, Android Studio</p>
              </div>
            </div>

          </div>

          {/* Footer Action */}
          <div className="p-4 bg-slate-100 border-t border-slate-200 flex justify-end gap-3 shrink-0">
            <button
              onClick={onClose}
              className="px-5 py-2 rounded-xl bg-slate-200 hover:bg-slate-300 text-slate-800 text-xs font-semibold"
            >
              Close
            </button>
            <button
              onClick={handleDownloadPdf}
              className="px-5 py-2 rounded-xl bg-brand-500 hover:bg-brand-600 text-white text-xs font-semibold shadow-md flex items-center gap-2"
            >
              <Download className="w-4 h-4" />
              Download Original PDF Resume
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
