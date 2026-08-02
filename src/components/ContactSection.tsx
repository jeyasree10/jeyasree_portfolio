import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Github, Linkedin, CheckCircle2, AlertCircle } from 'lucide-react';
import confetti from 'canvas-confetti';
import { PORTFOLIO_DATA } from '../data/portfolioData';

export const ContactSection: React.FC = () => {
  const { contact } = PORTFOLIO_DATA.personal;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setStatus('sending');

    const bodyText = `From: ${formData.name} (${formData.email})\n\n${formData.message}`;
    const subjectText = formData.subject || `Portfolio Message from ${formData.name}`;
    
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${contact.email}&su=${encodeURIComponent(subjectText)}&body=${encodeURIComponent(bodyText)}`;
    
    window.open(gmailUrl, '_blank');

    setStatus('success');
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.7 },
    });
    setFormData({ name: '', email: '', subject: '', message: '' });

    setTimeout(() => {
      setStatus('idle');
    }, 6000);
  };

  return (
    <section id="contact" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-500/10 text-brand-600 dark:text-brand-400 text-xs font-bold uppercase tracking-wider mb-3">
            <Mail className="w-3.5 h-3.5" />
            <span>Get In Touch</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-poppins font-bold text-slate-900 dark:text-white">
            Let's Build Something Great Together
          </h2>
          <p className="mt-4 text-slate-600 dark:text-slate-300 text-base">
            Open to Software Engineering opportunities, internships, and collaborative ML projects.
          </p>
        </motion.div>

        {/* Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Details Cards */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-6"
          >
            {/* Direct Contact Cards */}
            <div className="glass-card p-6 rounded-3xl space-y-6 shadow-xl border border-slate-200/60 dark:border-slate-800">
              <h3 className="text-xl font-poppins font-bold text-slate-900 dark:text-white">
                Contact Information
              </h3>

              <a
                href={`https://mail.google.com/mail/?view=cm&fs=1&to=${contact.email}`}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-4 p-3.5 rounded-2xl bg-slate-100/70 dark:bg-slate-800/60 hover:bg-brand-500/10 transition-colors group"
              >
                <div className="p-3 rounded-xl bg-brand-500 text-white shadow-md group-hover:scale-110 transition-transform">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-semibold text-slate-500 dark:text-slate-400 block">Email Me</span>
                  <span className="text-sm font-bold text-slate-900 dark:text-white">{contact.email}</span>
                </div>
              </a>

              <a
                href={`tel:${contact.phone}`}
                className="flex items-center gap-4 p-3.5 rounded-2xl bg-slate-100/70 dark:bg-slate-800/60 hover:bg-brand-500/10 transition-colors group"
              >
                <div className="p-3 rounded-xl bg-sky-500 text-white shadow-md group-hover:scale-110 transition-transform">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-semibold text-slate-500 dark:text-slate-400 block">Phone</span>
                  <span className="text-sm font-bold text-slate-900 dark:text-white">{contact.phone}</span>
                </div>
              </a>

              <div className="flex items-center gap-4 p-3.5 rounded-2xl bg-slate-100/70 dark:bg-slate-800/60">
                <div className="p-3 rounded-xl bg-indigo-500 text-white shadow-md">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-semibold text-slate-500 dark:text-slate-400 block">Location</span>
                  <span className="text-sm font-bold text-slate-900 dark:text-white">{contact.location}</span>
                </div>
              </div>
            </div>

            {/* Social Links Badge */}
            <div className="glass-card p-6 rounded-3xl shadow-lg border border-slate-200/60 dark:border-slate-800">
              <h4 className="text-sm font-bold text-slate-900 dark:text-white mb-3">
                Social & Professional Profiles
              </h4>
              <div className="flex items-center gap-3">
                <a
                  href={contact.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 p-3 rounded-2xl bg-slate-900 text-white hover:bg-slate-800 font-semibold text-xs transition-transform hover:scale-105"
                >
                  <Github className="w-4 h-4" />
                  GitHub
                </a>

                <a
                  href={contact.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 p-3 rounded-2xl bg-blue-600 text-white hover:bg-blue-700 font-semibold text-xs transition-transform hover:scale-105"
                >
                  <Linkedin className="w-4 h-4" />
                  LinkedIn
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Form Column */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 glass-card p-8 rounded-3xl shadow-xl relative overflow-hidden border border-slate-200/60 dark:border-slate-800"
          >
            <h3 className="text-2xl font-poppins font-bold text-slate-900 dark:text-white mb-2">
              Send a Direct Message
            </h3>
            <p className="text-xs text-slate-500 dark:text-slate-400 mb-6">
              Your message will be sent directly to <strong className="text-brand-600 dark:text-brand-400">{contact.email}</strong> without opening Outlook or any external app.
            </p>

            {status === 'success' && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-6 p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 flex items-center gap-3 text-sm font-semibold"
              >
                <CheckCircle2 className="w-5 h-5 shrink-0" />
                <span>Message sent directly to {contact.email}! S. Jeyasree will get back to you shortly.</span>
              </motion.div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-1.5">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Recruiter / Engineer"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-1.5">
                    Your Email *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="recruiter@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-1.5">
                  Subject
                </label>
                <input
                  type="text"
                  placeholder="Software Engineering Opportunity / Project Discussion"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 transition-all"
                />
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-1.5">
                  Message *
                </label>
                <textarea
                  required
                  rows={4}
                  placeholder="Hi Jeyasree, I reviewed your portfolio and would love to connect regarding..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white text-sm focus:outline-none focus:ring-2 focus:ring-brand-500 transition-all resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={status === 'sending'}
                className="w-full py-4 rounded-xl bg-brand-500 hover:bg-brand-600 text-white font-poppins font-semibold text-sm shadow-lg shadow-brand-500/30 hover:shadow-brand-500/50 flex items-center justify-center gap-2 transition-all disabled:opacity-50"
              >
                {status === 'sending' ? (
                  <span>Sending Message...</span>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
