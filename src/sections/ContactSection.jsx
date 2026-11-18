import React, { useState } from 'react';
import {
  Send,
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  CheckCircle2,
  AlertCircle,
  Copy,
  Check,
} from 'lucide-react';
import { PROFILE } from '../data/portfolioData';
import { copyToClipboard } from '../utils/resumeDownload';
import SectionHeader from '../components/SectionHeader';
import Button from '../components/Button';

const INITIAL_FORM = {
  name: '',
  email: '',
  subject: '',
  message: '',
};

export default function ContactSection() {
  const [formData, setFormData] = useState(INITIAL_FORM);
  const [submittedDraft, setSubmittedDraft] = useState(null);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState({ type: null, text: '' });
  const [copiedField, setCopiedField] = useState(null);

  const validateField = (name, value) => {
    const trimmed = value.trim();
    if (name === 'name') {
      if (!trimmed) return 'Please enter your name.';
      if (trimmed.length < 2) return 'Name must be at least 2 characters.';
    }
    if (name === 'email') {
      if (!trimmed) return 'Please enter your email address.';
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(trimmed)) return 'Please enter a valid email address.';
    }
    if (name === 'subject') {
      if (!trimmed) return 'Please enter a subject.';
      if (trimmed.length < 3) return 'Subject must be at least 3 characters.';
    }
    if (name === 'message') {
      if (!trimmed) return 'Please enter a message.';
      if (trimmed.length < 10) return 'Message must be at least 10 characters.';
    }
    return '';
  };

  const validateForm = () => {
    const nextErrors = {};
    Object.keys(formData).forEach((key) => {
      const errorMsg = validateField(key, formData[key]);
      if (errorMsg) nextErrors[key] = errorMsg;
    });
    return nextErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (errors[name]) {
      const fieldError = validateField(name, value);
      setErrors((prev) => ({ ...prev, [name]: fieldError || undefined }));
    }

    if (status.type === 'error') {
      setStatus({ type: null, text: '' });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setStatus({
        type: 'error',
        text: 'Please review the highlighted fields before submitting.',
      });
      return;
    }

    setErrors({});
    setSubmittedDraft({ ...formData });
    setStatus({
      type: 'success',
      text: 'Your message has been validated and prepared. You can open it directly in your email client below.',
    });
    setFormData(INITIAL_FORM);
  };

  const handleCopy = async (field, value) => {
    const ok = await copyToClipboard(value);
    if (ok) {
      setCopiedField(field);
      setTimeout(() => setCopiedField(null), 2000);
    }
  };

  const buildMailtoHref = () => {
    if (!submittedDraft) return `mailto:${PROFILE.email}`;
    const subject = encodeURIComponent(submittedDraft.subject);
    const body = encodeURIComponent(
      `Name: ${submittedDraft.name}\nEmail: ${submittedDraft.email}\n\n${submittedDraft.message}`
    );
    return `mailto:${PROFILE.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="py-14 md:py-24 border-t border-[#1F1F2E]/70 scroll-mt-20">
      <div className="max-w-[1200px] mx-auto px-5 md:px-10 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left Column: Direct Contact Details */}
          <div className="lg:col-span-5 space-y-6">
            <SectionHeader
              eyebrow="Get in Touch"
              title="Have a question or looking to collaborate?"
              description="Actively seeking software engineering and frontend development opportunities. Feel free to reach out directly."
            />

            <div className="rounded-xl bg-[#14141D] border border-[#1F1F2E] p-6 space-y-5">
              {/* Direct Email */}
              <div>
                <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.08em] text-[#64748B] mb-2">
                  Email Address
                </p>
                <div className="flex items-center justify-between gap-3">
                  <a
                    href={`mailto:${PROFILE.email}`}
                    className="inline-flex items-center gap-2.5 text-[14px] sm:text-[15px] font-medium text-[#F8FAFC] hover:text-[#C4B5FD] transition-colors truncate"
                  >
                    <Mail className="w-4 h-4 text-[#8B5CF6] shrink-0" aria-hidden="true" />
                    <span className="truncate">{PROFILE.email}</span>
                  </a>
                  <button
                    type="button"
                    onClick={() => handleCopy('email', PROFILE.email)}
                    aria-label="Copy email address"
                    className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-md border border-[#2A2A3D] bg-[#0E0E15] text-[12px] font-mono text-[#94A3B8] hover:text-[#F8FAFC] hover:border-[#8B5CF6] transition-colors shrink-0 cursor-pointer"
                  >
                    {copiedField === 'email' ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-[#C4B5FD]" aria-hidden="true" />
                        <span className="text-[#C4B5FD]">Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" aria-hidden="true" />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* Direct Phone */}
              <div className="pt-4 border-t border-[#1F1F2E]">
                <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.08em] text-[#64748B] mb-2">
                  Phone Number
                </p>
                <div className="flex items-center justify-between gap-3">
                  <a
                    href={`tel:${PROFILE.phone.replace(/\s+/g, '')}`}
                    className="inline-flex items-center gap-2.5 text-[14px] sm:text-[15px] font-mono font-medium text-[#F8FAFC] hover:text-[#C4B5FD] transition-colors"
                  >
                    <Phone className="w-4 h-4 text-[#8B5CF6] shrink-0" aria-hidden="true" />
                    <span>{PROFILE.phone}</span>
                  </a>
                  <button
                    type="button"
                    onClick={() => handleCopy('phone', PROFILE.phone)}
                    aria-label="Copy phone number"
                    className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-md border border-[#2A2A3D] bg-[#0E0E15] text-[12px] font-mono text-[#94A3B8] hover:text-[#F8FAFC] hover:border-[#8B5CF6] transition-colors shrink-0 cursor-pointer"
                  >
                    {copiedField === 'phone' ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-[#C4B5FD]" aria-hidden="true" />
                        <span className="text-[#C4B5FD]">Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" aria-hidden="true" />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* Location */}
              <div className="pt-4 border-t border-[#1F1F2E]">
                <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.08em] text-[#64748B] mb-2">
                  Current Location
                </p>
                <p className="inline-flex items-center gap-2.5 text-[14px] sm:text-[15px] font-medium text-[#F8FAFC]">
                  <MapPin className="w-4 h-4 text-[#8B5CF6] shrink-0" aria-hidden="true" />
                  <span>{PROFILE.location}</span>
                </p>
              </div>

              {/* Social Profiles */}
              <div className="pt-4 border-t border-[#1F1F2E]">
                <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.08em] text-[#64748B] mb-3">
                  Social Profiles
                </p>
                <div className="flex flex-wrap gap-3">
                  <Button
                    href={PROFILE.socials.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="secondary"
                    size="sm"
                  >
                    <Github className="w-4 h-4" aria-hidden="true" />
                    <span>GitHub</span>
                  </Button>
                  <Button
                    href={PROFILE.socials.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="secondary"
                    size="sm"
                  >
                    <Linkedin className="w-4 h-4" aria-hidden="true" />
                    <span>LinkedIn</span>
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Validated Contact Form */}
          <div className="lg:col-span-7">
            <form
              onSubmit={handleSubmit}
              noValidate
              className="rounded-xl bg-[#14141D] border border-[#1F1F2E] p-6 sm:p-8 space-y-5"
            >
              {/* Status Feedback Banner */}
              {status.type && (
                <div
                  role={status.type === 'error' ? 'alert' : 'status'}
                  className={`flex items-start gap-3 p-4 rounded-lg border text-[14px] leading-[1.5] ${
                    status.type === 'success'
                      ? 'bg-[#8B5CF6]/10 border-[#8B5CF6]/40 text-[#E9DDFF]'
                      : 'bg-[#93000A]/30 border-[#FFB4AB]/40 text-[#FFDAD6]'
                  }`}
                >
                  {status.type === 'success' ? (
                    <CheckCircle2 className="w-5 h-5 text-[#C4B5FD] shrink-0 mt-0.5" aria-hidden="true" />
                  ) : (
                    <AlertCircle className="w-5 h-5 text-[#FFB4AB] shrink-0 mt-0.5" aria-hidden="true" />
                  )}
                  <div className="space-y-1">
                    <p>{status.text}</p>
                    {status.type === 'success' && (
                      <a
                        href={buildMailtoHref()}
                        className="inline-block font-medium text-[#C4B5FD] underline underline-offset-4 hover:text-[#F8FAFC]"
                      >
                        Send via email client ({PROFILE.email})
                      </a>
                    )}
                  </div>
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {/* Name Field */}
                <div>
                  <label
                    htmlFor="contact-name"
                    className="block font-mono text-[12px] font-medium text-[#CBD5E1] mb-2"
                  >
                    Name
                  </label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={handleChange}
                    aria-invalid={Boolean(errors.name)}
                    aria-describedby={errors.name ? 'contact-name-error' : undefined}
                    className={`input-obsidian w-full rounded-lg px-4 py-3 text-[15px] min-h-[46px] ${
                      errors.name ? '!border-[#FFB4AB]' : ''
                    }`}
                  />
                  {errors.name && (
                    <p id="contact-name-error" className="mt-1.5 text-[13px] text-[#FFB4AB]">
                      {errors.name}
                    </p>
                  )}
                </div>

                {/* Email Field */}
                <div>
                  <label
                    htmlFor="contact-email"
                    className="block font-mono text-[12px] font-medium text-[#CBD5E1] mb-2"
                  >
                    Email
                  </label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    placeholder="you@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    aria-invalid={Boolean(errors.email)}
                    aria-describedby={errors.email ? 'contact-email-error' : undefined}
                    className={`input-obsidian w-full rounded-lg px-4 py-3 text-[15px] min-h-[46px] ${
                      errors.email ? '!border-[#FFB4AB]' : ''
                    }`}
                  />
                  {errors.email && (
                    <p id="contact-email-error" className="mt-1.5 text-[13px] text-[#FFB4AB]">
                      {errors.email}
                    </p>
                  )}
                </div>
              </div>

              {/* Subject Field */}
              <div>
                <label
                  htmlFor="contact-subject"
                  className="block font-mono text-[12px] font-medium text-[#CBD5E1] mb-2"
                >
                  Subject
                </label>
                <input
                  id="contact-subject"
                  name="subject"
                  type="text"
                  placeholder="Software Engineering Opportunity / Project Inquiry"
                  value={formData.subject}
                  onChange={handleChange}
                  aria-invalid={Boolean(errors.subject)}
                  aria-describedby={errors.subject ? 'contact-subject-error' : undefined}
                  className={`input-obsidian w-full rounded-lg px-4 py-3 text-[15px] min-h-[46px] ${
                    errors.subject ? '!border-[#FFB4AB]' : ''
                  }`}
                />
                {errors.subject && (
                  <p id="contact-subject-error" className="mt-1.5 text-[13px] text-[#FFB4AB]">
                    {errors.subject}
                  </p>
                )}
              </div>

              {/* Message Field */}
              <div>
                <label
                  htmlFor="contact-message"
                  className="block font-mono text-[12px] font-medium text-[#CBD5E1] mb-2"
                >
                  Message
                </label>
                <textarea
                  id="contact-message"
                  name="message"
                  rows={5}
                  placeholder="Write your message here..."
                  value={formData.message}
                  onChange={handleChange}
                  aria-invalid={Boolean(errors.message)}
                  aria-describedby={errors.message ? 'contact-message-error' : undefined}
                  className={`input-obsidian w-full rounded-lg px-4 py-3 text-[15px] resize-y min-h-[130px] ${
                    errors.message ? '!border-[#FFB4AB]' : ''
                  }`}
                />
                {errors.message && (
                  <p id="contact-message-error" className="mt-1.5 text-[13px] text-[#FFB4AB]">
                    {errors.message}
                  </p>
                )}
              </div>

              <div className="pt-2 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <p className="text-[13px] text-[#64748B]">
                  Messages can also be sent directly to {PROFILE.email}.
                </p>
                <Button type="submit" variant="primary" size="lg">
                  <Send className="w-4 h-4" aria-hidden="true" />
                  <span>Send Message</span>
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
