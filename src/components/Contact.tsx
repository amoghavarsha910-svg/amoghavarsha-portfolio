import React, { useState } from 'react';
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Github,
  Copy,
  Check,
  Sparkles,
  AlertCircle,
  ExternalLink
} from 'lucide-react';
import { PERSONAL_INFO, GITHUB_USERNAME } from '../data/portfolio';
import { TiltCard } from './TiltCard';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [copiedField, setCopiedField] = useState<string | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Please enter your name';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Please enter your email address';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
      newErrors.email = 'Please enter a valid email address';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Please enter your message';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    // Launch native mailto client with pre-filled subject and body
    const subject = encodeURIComponent(`Portfolio Inquiry from ${formData.name}`);
    const body = encodeURIComponent(
      `Hello Amoghavarsha,\n\nName: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}\n`
    );

    window.location.href = `mailto:${PERSONAL_INFO.email}?subject=${subject}&body=${body}`;
    setSubmitted(true);
  };

  const copyToClipboard = (text: string, type: 'email' | 'phone') => {
    navigator.clipboard.writeText(text);
    setCopiedField(type);
    setTimeout(() => {
      setCopiedField(null);
    }, 2500);
  };

  return (
    <section id="contact" className="relative py-24 bg-[#050508] overflow-hidden">
      {/* Radial grid */}
      <div className="bg-grid opacity-40" aria-hidden="true" />

      {/* Ambient background glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-full max-w-4xl h-96 bg-[#00f2ff]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-14">
          <div className="section-title-line mb-3">
            <span className="section-title-badge">
              <Mail className="w-3.5 h-3.5" />
              <span>CONNECT / INQUIRIES</span>
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-[-2px] text-white font-heading">
            Let's Build Something Great.
          </h2>
          <p className="text-[#a0a0a0] text-base sm:text-lg max-w-xl mt-3 font-normal">
            Open to internships, software development roles, project collaborations, and technical discussions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Contact Details & Action Cards */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Email Card */}
            <TiltCard
              id="contact-email-card"
              maxTilt={4}
              glowColor="rgba(0, 242, 255, 0.2)"
              className="p-5 sm:p-6 glass-panel border-white/10 rounded-2xl"
            >
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-center gap-3.5">
                  <div className="p-3 rounded-xl bg-white/[0.04] border border-white/10 text-[#00f2ff]">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[10px] font-mono uppercase tracking-widest text-[#a0a0a0]">
                      Email Address
                    </div>
                    <a
                      href={`mailto:${PERSONAL_INFO.email}`}
                      className="text-sm sm:text-base font-bold text-white hover:text-[#00f2ff] transition-colors"
                    >
                      {PERSONAL_INFO.email}
                    </a>
                  </div>
                </div>

                <button
                  id="copy-email-btn"
                  onClick={() => copyToClipboard(PERSONAL_INFO.email, 'email')}
                  className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-[#a0a0a0] hover:text-white border border-white/10 transition-colors"
                  title="Copy email to clipboard"
                  aria-label="Copy email address"
                >
                  {copiedField === 'email' ? (
                    <Check className="w-4 h-4 text-[#00f2ff]" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>
            </TiltCard>

            {/* Phone Card */}
            <TiltCard
              id="contact-phone-card"
              maxTilt={4}
              glowColor="rgba(0, 242, 255, 0.2)"
              className="p-5 sm:p-6 glass-panel border-white/10 rounded-2xl"
            >
              <div className="flex items-start justify-between gap-3">
                <div className="flex items-center gap-3.5">
                  <div className="p-3 rounded-xl bg-white/[0.04] border border-white/10 text-[#38bdf8]">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[10px] font-mono uppercase tracking-widest text-[#a0a0a0]">
                      Phone Number
                    </div>
                    <a
                      href={`tel:${PERSONAL_INFO.phone}`}
                      className="text-sm sm:text-base font-bold text-white hover:text-[#38bdf8] transition-colors"
                    >
                      {PERSONAL_INFO.phone}
                    </a>
                  </div>
                </div>

                <button
                  id="copy-phone-btn"
                  onClick={() => copyToClipboard(PERSONAL_INFO.phone, 'phone')}
                  className="p-2 rounded-lg bg-white/5 hover:bg-white/10 text-[#a0a0a0] hover:text-white border border-white/10 transition-colors"
                  title="Copy phone to clipboard"
                  aria-label="Copy phone number"
                >
                  {copiedField === 'phone' ? (
                    <Check className="w-4 h-4 text-[#00f2ff]" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>
            </TiltCard>

            {/* Location Card */}
            <TiltCard
              id="contact-location-card"
              maxTilt={4}
              glowColor="rgba(112, 0, 255, 0.2)"
              className="p-5 sm:p-6 glass-panel border-white/10 rounded-2xl"
            >
              <div className="flex items-center gap-3.5">
                <div className="p-3 rounded-xl bg-white/[0.04] border border-white/10 text-[#7000ff]">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[10px] font-mono uppercase tracking-widest text-[#a0a0a0]">
                    Location
                  </div>
                  <div className="text-sm sm:text-base font-bold text-white">
                    {PERSONAL_INFO.location}
                  </div>
                </div>
              </div>
            </TiltCard>

            {/* Direct Quick Action Buttons */}
            <div className="pt-2 grid grid-cols-1 sm:grid-cols-3 gap-3">
              <a
                id="direct-send-email-btn"
                href={`mailto:${PERSONAL_INFO.email}`}
                className="flex items-center justify-center gap-2 py-3 px-4 btn-primary-bold text-xs font-mono"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>Send Email</span>
              </a>

              <a
                id="direct-call-me-btn"
                href={`tel:${PERSONAL_INFO.phone}`}
                className="flex items-center justify-center gap-2 py-3 px-4 btn-outline-bold text-xs font-mono"
              >
                <Phone className="w-3.5 h-3.5 text-[#00f2ff]" />
                <span>Call Me</span>
              </a>

              <a
                id="direct-github-btn"
                href={`https://github.com/${GITHUB_USERNAME}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-3 px-4 rounded-lg bg-white/5 hover:bg-white/10 text-white border border-white/15 font-semibold text-xs font-mono transition-colors"
              >
                <Github className="w-3.5 h-3.5 text-[#a0a0a0]" />
                <span>GitHub</span>
              </a>
            </div>

          </div>

          {/* Right Column: Modern Contact Form */}
          <div className="lg:col-span-7">
            <TiltCard
              id="contact-form-card"
              maxTilt={3}
              glowColor="rgba(0, 242, 255, 0.15)"
              className="p-6 sm:p-8 glass-panel border-white/10 rounded-2xl"
            >
              <h3 className="text-2xl font-black text-white font-heading mb-1 flex items-center gap-2 tracking-tight">
                <span>Send a Direct Message</span>
                <Sparkles className="w-4 h-4 text-[#00f2ff]" />
              </h3>
              <p className="text-xs text-[#a0a0a0] font-mono mb-6">
                Fill out the form below to initiate direct communication via email.
              </p>

              {submitted && (
                <div className="mb-6 p-4 rounded-xl bg-[#00f2ff]/15 border border-[#00f2ff]/30 text-[#00f2ff] text-xs font-mono flex items-start gap-2">
                  <Sparkles className="w-4 h-4 text-[#00f2ff] shrink-0 mt-0.5" />
                  <span>
                    Thank you! Your default email client has been launched with your message. If it didn't open automatically, you can write directly to {PERSONAL_INFO.email}.
                  </span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Name */}
                <div>
                  <label htmlFor="contact-name" className="block text-xs font-mono uppercase tracking-widest text-[#a0a0a0] mb-1.5 font-bold">
                    Your Name <span className="text-[#00f2ff]">*</span>
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    value={formData.name}
                    onChange={(e) => {
                      setFormData({ ...formData, name: e.target.value });
                      if (errors.name) setErrors({ ...errors, name: '' });
                    }}
                    placeholder="e.g. Alex Smith"
                    className={`w-full px-4 py-3 rounded-xl bg-white/[0.03] border text-white text-sm placeholder:text-slate-500 focus:outline-none transition-colors ${
                      errors.name
                        ? 'border-red-500 focus:border-red-400'
                        : 'border-white/10 focus:border-[#00f2ff] focus:ring-1 focus:ring-[#00f2ff]'
                    }`}
                  />
                  {errors.name && (
                    <div className="flex items-center gap-1.5 text-xs text-red-400 mt-1 font-mono">
                      <AlertCircle className="w-3.5 h-3.5" />
                      <span>{errors.name}</span>
                    </div>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="contact-email" className="block text-xs font-mono uppercase tracking-widest text-[#a0a0a0] mb-1.5 font-bold">
                    Your Email <span className="text-[#00f2ff]">*</span>
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => {
                      setFormData({ ...formData, email: e.target.value });
                      if (errors.email) setErrors({ ...errors, email: '' });
                    }}
                    placeholder="e.g. alex@example.com"
                    className={`w-full px-4 py-3 rounded-xl bg-white/[0.03] border text-white text-sm placeholder:text-slate-500 focus:outline-none transition-colors ${
                      errors.email
                        ? 'border-red-500 focus:border-red-400'
                        : 'border-white/10 focus:border-[#00f2ff] focus:ring-1 focus:ring-[#00f2ff]'
                    }`}
                  />
                  {errors.email && (
                    <div className="flex items-center gap-1.5 text-xs text-red-400 mt-1 font-mono">
                      <AlertCircle className="w-3.5 h-3.5" />
                      <span>{errors.email}</span>
                    </div>
                  )}
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="contact-message" className="block text-xs font-mono uppercase tracking-widest text-[#a0a0a0] mb-1.5 font-bold">
                    Message <span className="text-[#00f2ff]">*</span>
                  </label>
                  <textarea
                    id="contact-message"
                    rows={4}
                    value={formData.message}
                    onChange={(e) => {
                      setFormData({ ...formData, message: e.target.value });
                      if (errors.message) setErrors({ ...errors, message: '' });
                    }}
                    placeholder="Describe your inquiry, project proposal, or internship opportunity..."
                    className={`w-full px-4 py-3 rounded-xl bg-white/[0.03] border text-white text-sm placeholder:text-slate-500 focus:outline-none transition-colors resize-none ${
                      errors.message
                        ? 'border-red-500 focus:border-red-400'
                        : 'border-white/10 focus:border-[#00f2ff] focus:ring-1 focus:ring-[#00f2ff]'
                    }`}
                  />
                  {errors.message && (
                    <div className="flex items-center gap-1.5 text-xs text-red-400 mt-1 font-mono">
                      <AlertCircle className="w-3.5 h-3.5" />
                      <span>{errors.message}</span>
                    </div>
                  )}
                </div>

                {/* Submit Button */}
                <button
                  id="contact-form-submit-btn"
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 py-3.5 btn-primary-bold text-sm"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Message</span>
                </button>
              </form>
            </TiltCard>
          </div>

        </div>

      </div>
    </section>
  );
};
