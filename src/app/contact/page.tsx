import Navbar from '@/components/layout/Navbar';
import Link from 'next/link';
import { useState } from 'react';

const socialLinks = [
  { href: 'https://github.com/aneliseestevam', icon: 'github', label: 'GitHub' },
  { href: 'https://www.linkedin.com/in/aneliseestevam/', icon: 'linkedin', label: 'LinkedIn' },
];

export default function ContactPage() {
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('idle');
    const form = e.currentTarget;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      if (res.ok) {
        setStatus('success');
        form.reset();
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  }

  return (
    <main className="min-h-screen bg-white dark:bg-gray-900">
      <Navbar />
      <section className="max-w-2xl mx-auto px-4 py-24">
        <h1 className="text-4xl sm:text-5xl font-extrabold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-8 text-center">Contact</h1>
        <div className="bg-white/10 dark:bg-gray-900/40 rounded-2xl shadow-xl p-8 md:p-12 border border-white/10">
          <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name" className="block text-gray-700 dark:text-gray-200 font-semibold mb-2">Name</label>
              <input id="name" name="name" type="text" required className="w-full px-4 py-3 rounded-lg bg-white/80 dark:bg-gray-800/80 border border-gray-200 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400 text-gray-900 dark:text-gray-100" />
            </div>
            <div>
              <label htmlFor="email" className="block text-gray-700 dark:text-gray-200 font-semibold mb-2">Email</label>
              <input id="email" name="email" type="email" required className="w-full px-4 py-3 rounded-lg bg-white/80 dark:bg-gray-800/80 border border-gray-200 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400 text-gray-900 dark:text-gray-100" />
            </div>
            <div>
              <label htmlFor="message" className="block text-gray-700 dark:text-gray-200 font-semibold mb-2">Message</label>
              <textarea id="message" name="message" rows={5} required className="w-full px-4 py-3 rounded-lg bg-white/80 dark:bg-gray-800/80 border border-gray-200 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400 text-gray-900 dark:text-gray-100" />
            </div>
            <button type="submit" className="w-full py-3 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold text-lg shadow-md hover:from-blue-600 hover:to-purple-600 transition-colors">Send Message</button>
          </form>
          {status === 'success' && <p className="mt-6 text-green-500 text-center font-semibold">Message sent! Thank you for reaching out.</p>}
          {status === 'error' && <p className="mt-6 text-red-500 text-center font-semibold">Something went wrong. Please try again later.</p>}
          <div className="mt-10 text-center">
            <p className="text-gray-400 mb-4">Or reach me on:</p>
            <div className="flex justify-center gap-6">
              {socialLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.label}
                  className="text-gray-300 hover:text-blue-400 transition-colors text-3xl"
                >
                  {link.icon === 'github' && (
                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.477 2 2 6.484 2 12.021c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.154-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.987 1.029-2.686-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.295 2.748-1.025 2.748-1.025.546 1.378.202 2.397.1 2.65.64.699 1.028 1.593 1.028 2.686 0 3.847-2.338 4.695-4.566 4.944.359.309.678.919.678 1.852 0 1.336-.012 2.417-.012 2.747 0 .267.18.578.688.48C19.138 20.197 22 16.444 22 12.021 22 6.484 17.523 2 12 2z" /></svg>
                  )}
                  {link.icon === 'linkedin' && (
                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm15.5 11.268h-3v-5.604c0-1.337-.025-3.063-1.868-3.063-1.868 0-2.154 1.459-2.154 2.967v5.7h-3v-10h2.881v1.367h.041c.401-.761 1.381-1.563 2.841-1.563 3.039 0 3.6 2.001 3.6 4.599v5.597z" /></svg>
                  )}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
} 