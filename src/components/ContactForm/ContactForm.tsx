import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';

interface FormData {
  name: string;
  company: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

type FormStatus = 'idle' | 'loading' | 'success' | 'error';

const initialData: FormData = {
  name: '',
  company: '',
  email: '',
  phone: '',
  subject: '',
  message: '',
};

export default function ContactForm() {
  const [data, setData] = useState<FormData>(initialData);
  const [status, setStatus] = useState<FormStatus>('idle');
  const [errors, setErrors] = useState<Partial<FormData>>({});

  const validate = (): boolean => {
    const errs: Partial<FormData> = {};
    if (!data.name.trim()) errs.name = 'Name is required';
    if (!data.company.trim()) errs.company = 'Company is required';
    if (!data.email.trim()) errs.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) errs.email = 'Invalid email address';
    if (!data.phone.trim()) errs.phone = 'Phone number is required';
    if (!data.subject.trim()) errs.subject = 'Subject is required';
    if (!data.message.trim()) errs.message = 'Message is required';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus('loading');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          access_key: import.meta.env.VITE_WEB3FORMS_KEY,
          from_name: data.name,
          subject: `Quest Group Website Inquiry: ${data.subject}`,
          name: data.name,
          company: data.company,
          email: data.email,
          phone: data.phone,
          message: data.message,
        }),
      });

      const result = await response.json();
      if (result.success) {
        setStatus('success');
        setData(initialData);
        setErrors({});
      } else {
        console.error('Web3Forms error:', result);
        setStatus('error');
      }
    } catch (err) {
      console.error('Submission error:', err);
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center py-12 px-6"
      >
        <div className="w-14 h-14 rounded-2xl bg-teal-100 flex items-center justify-center mx-auto mb-4">
          <CheckCircle2 className="w-7 h-7 text-teal-600" />
        </div>
        <h3 className="text-xl font-bold text-slate-900 mb-2">Enquiry Submitted</h3>
        <p className="text-sm text-slate-600 max-w-sm mx-auto mb-6">
          Thank you for reaching out. Our team will review your enquiry and get back to you shortly.
        </p>
        <p className="text-xs text-slate-400 italic mb-6">
          Your inquiry has been received by our chemical synthesis and regulatory desk.
        </p>
        <button
          onClick={() => setStatus('idle')}
          className="text-sm font-semibold text-teal-600 hover:text-teal-700 transition-colors"
        >
          Send Another Enquiry
        </button>
      </motion.div>
    );
  }

  const inputClass = (field: keyof FormData) =>
    `w-full px-4 py-3 text-sm bg-white border rounded-xl transition-all duration-200 placeholder:text-slate-400 text-slate-900 shadow-xs
    ${errors[field]
      ? 'border-red-300 focus:border-red-500 focus:ring-2 focus:ring-red-100'
      : 'border-slate-200 focus:border-teal-500 focus:ring-2 focus:ring-teal-100/60'
    }`;

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5" aria-label="Contact form">
      {status === 'error' && (
        <div className="flex items-center gap-2 p-3 rounded-lg bg-red-50 border border-red-200">
          <AlertCircle className="w-4 h-4 text-red-500 shrink-0" />
          <p className="text-sm text-red-700">Something went wrong. Please try again.</p>
        </div>
      )}

      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="name" className="block text-xs font-semibold text-slate-700 mb-1.5">
            Name <span className="text-red-400">*</span>
          </label>
          <input
            id="name"
            type="text"
            required
            value={data.name}
            onChange={(e) => setData({ ...data, name: e.target.value })}
            placeholder="Your full name"
            className={inputClass('name')}
            aria-required="true"
            aria-invalid={!!errors.name}
          />
          {errors.name && <p className="mt-1 text-xs text-red-500">{errors.name}</p>}
        </div>
        <div>
          <label htmlFor="company" className="block text-xs font-semibold text-slate-700 mb-1.5">
            Company <span className="text-red-400">*</span>
          </label>
          <input
            id="company"
            type="text"
            required
            value={data.company}
            onChange={(e) => setData({ ...data, company: e.target.value })}
            placeholder="Company name"
            className={inputClass('company')}
            aria-required="true"
            aria-invalid={!!errors.company}
          />
          {errors.company && <p className="mt-1 text-xs text-red-500">{errors.company}</p>}
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="email" className="block text-xs font-semibold text-slate-700 mb-1.5">
            Email <span className="text-red-400">*</span>
          </label>
          <input
            id="email"
            type="email"
            required
            value={data.email}
            onChange={(e) => setData({ ...data, email: e.target.value })}
            placeholder="your@email.com"
            className={inputClass('email')}
            aria-required="true"
            aria-invalid={!!errors.email}
          />
          {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email}</p>}
        </div>
        <div>
          <label htmlFor="phone" className="block text-xs font-semibold text-slate-700 mb-1.5">
            Phone <span className="text-red-400">*</span>
          </label>
          <input
            id="phone"
            type="tel"
            required
            value={data.phone}
            onChange={(e) => setData({ ...data, phone: e.target.value })}
            placeholder="Phone number"
            className={inputClass('phone')}
            aria-required="true"
            aria-invalid={!!errors.phone}
          />
          {errors.phone && <p className="mt-1 text-xs text-red-500">{errors.phone}</p>}
        </div>
      </div>

      <div>
        <label htmlFor="subject" className="block text-xs font-semibold text-slate-700 mb-1.5">
          Subject <span className="text-red-400">*</span>
        </label>
        <input
          id="subject"
          type="text"
          required
          value={data.subject}
          onChange={(e) => setData({ ...data, subject: e.target.value })}
          placeholder="Subject of your enquiry"
          className={inputClass('subject')}
          aria-required="true"
          aria-invalid={!!errors.subject}
        />
        {errors.subject && <p className="mt-1 text-xs text-red-500">{errors.subject}</p>}
      </div>

      <div>
        <label htmlFor="message" className="block text-xs font-semibold text-slate-700 mb-1.5">
          Message <span className="text-red-400">*</span>
        </label>
        <textarea
          id="message"
          rows={5}
          required
          value={data.message}
          onChange={(e) => setData({ ...data, message: e.target.value })}
          placeholder="Tell us about your requirements..."
          className={`${inputClass('message')} resize-none`}
          aria-required="true"
          aria-invalid={!!errors.message}
        />
        {errors.message && <p className="mt-1 text-xs text-red-500">{errors.message}</p>}
      </div>

      <div className="pt-2">
        <button
          type="submit"
          disabled={status === 'loading'}
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-400 hover:to-teal-500 text-white font-bold text-sm tracking-wide rounded-xl shadow-lg shadow-teal-500/25 hover:scale-[1.02] active:scale-95 transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer"
        >
          {status === 'loading' ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" />
              <span>Sending...</span>
            </>
          ) : (
            <>
              <Send className="w-4 h-4" />
              <span>Submit Enquiry</span>
            </>
          )}
        </button>
      </div>
    </form>
  );
}
