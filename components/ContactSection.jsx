'use client';

import { useState, useRef } from 'react';
import { logEvent } from '@/lib/firebase';

const contactSchema = {
  name: { required: true, minLength: 2 },
  email: { required: true, pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/ },
  message: { required: true, minLength: 10 },
};

export default function ContactSection() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '', honeypot: '' });
  const [status, setStatus] = useState('idle'); // idle, loading, success, error
  const [error, setError] = useState('');
  const formRef = useRef(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    for (const [field, rules] of Object.entries(contactSchema)) {
      const value = formData[field];

      if (rules.required && !value) {
        return `${field.charAt(0).toUpperCase() + field.slice(1)} is required`;
      }

      if (rules.minLength && value.length < rules.minLength) {
        return `${field.charAt(0).toUpperCase() + field.slice(1)} must be at least ${rules.minLength} characters`;
      }

      if (rules.pattern && !rules.pattern.test(value)) {
        return `Please enter a valid ${field}`;
      }
    }

    // Honeypot check
    if (formData.honeypot) {
      return 'Form submission failed';
    }

    return null;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    const validationError = validateForm();
    if (validationError) {
      setError(validationError);
      return;
    }

    setStatus('loading');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      });

      if (!response.ok) {
        throw new Error(response.statusText || 'Failed to send message');
      }

      logEvent('contact_message_sent', { email: formData.email });
      setStatus('success');
      setFormData({ name: '', email: '', message: '', honeypot: '' });

      // Reset success message after 5 seconds
      setTimeout(() => setStatus('idle'), 5000);
    } catch (err) {
      console.error('Contact form error:', err);
      setStatus('error');
      setError(err.message || 'Failed to send message. Please try again.');
    }
  };

  return (
    <section id="contact" className="py-20 px-4">
      <div className="container-main max-w-2xl">
        <h2 className="text-4xl font-bold mb-4 text-light-text dark:text-dark-text">
          Open Channel
        </h2>
        <p className="text-lg text-light-muted dark:text-dark-muted mb-12">
          Have a question or project in mind? Get in touch.
        </p>

        <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
          {/* Name */}
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-2 text-light-text dark:text-dark-text">
              Name
            </label>
            <input
              id="name"
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="input-field"
              disabled={status === 'loading'}
              required
            />
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-2 text-light-text dark:text-dark-text">
              Email
            </label>
            <input
              id="email"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="input-field"
              disabled={status === 'loading'}
              required
            />
          </div>

          {/* Message */}
          <div>
            <label htmlFor="message" className="block text-sm font-medium mb-2 text-light-text dark:text-dark-text">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="input-field resize-none"
              rows="6"
              disabled={status === 'loading'}
              required
            />
          </div>

          {/* Honeypot */}
          <input
            type="text"
            name="honeypot"
            value={formData.honeypot}
            onChange={handleChange}
            className="hidden"
            tabIndex="-1"
            autoComplete="off"
          />

          {/* Status Messages */}
          {error && (
            <div className="p-4 rounded-lg bg-red-100/20 dark:bg-red-900/20 border border-red-500/50 text-red-700 dark:text-red-300 text-sm" role="alert">
              {error}
            </div>
          )}

          {status === 'success' && (
            <div className="p-4 rounded-lg bg-primary-light/20 dark:bg-primary-dark/20 border border-primary-light/50 dark:border-primary-dark/50 text-primary-light dark:text-primary-dark text-sm" role="status">
              ✓ Message sent successfully! I'll get back to you soon.
            </div>
          )}

          {status === 'error' && (
            <div className="p-4 rounded-lg bg-red-100/20 dark:bg-red-900/20 border border-red-500/50 text-red-700 dark:text-red-300 text-sm" role="alert">
              Service unavailable. Please try again later or email directly.
            </div>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            disabled={status === 'loading'}
            className="button-primary w-full disabled:opacity-50 disabled:cursor-not-allowed"
            aria-busy={status === 'loading'}
          >
            {status === 'loading' ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      </div>
    </section>
  );
}
