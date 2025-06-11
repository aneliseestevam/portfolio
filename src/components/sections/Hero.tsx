import Image from 'next/image';
import Link from 'next/link';

const socialLinks = [
  { href: 'https://github.com/aneliseestevam', icon: 'github', label: 'GitHub' },
  { href: 'https://www.linkedin.com/in/anelise-estevam/', icon: 'linkedin', label: 'LinkedIn' },
];

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center px-4 overflow-hidden bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#334155]">
      {/* Animated Blobs */}
      <div className="absolute -top-32 -left-32 w-[400px] h-[400px] bg-gradient-to-tr from-blue-400 via-purple-400 to-pink-400 opacity-30 rounded-full blur-3xl animate-pulse z-0" />
      <div className="absolute -bottom-32 -right-32 w-[400px] h-[400px] bg-gradient-to-tr from-pink-400 via-blue-400 to-purple-400 opacity-30 rounded-full blur-3xl animate-pulse z-0" />

      {/* Content Grid */}
      <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 w-full max-w-6xl mx-auto items-center">
        {/* Left: Text */}
        <div className="flex flex-col items-start justify-center gap-6 text-left">
          <span className="inline-block bg-blue-800 bg-opacity-90 text-blue-100 px-7 py-3 rounded-full text-lg font-bold shadow-lg mb-1">
            Hello, I&apos;m
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent drop-shadow-lg">
            Anelise Estevam
          </h1>
          <h2 className="text-xl sm:text-2xl text-gray-200 font-medium tracking-wide">Full Stack Developer</h2>
          <p className="text-lg text-gray-300 max-w-xl mb-2">
            I build exceptional digital experiences that make an impact. Specializing in creating beautiful, functional, and user-centered websites and applications.
          </p>
          <div className="flex flex-wrap gap-4 mb-2">
            <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-full font-semibold shadow-md hover:scale-105 hover:from-blue-600 hover:to-purple-600 transition-transform duration-200">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M21 10.5V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2h7.5" /></svg>
              Contact Me
            </Link>
            <Link href="/projects" className="inline-flex items-center gap-2 px-6 py-2 border border-blue-400 text-blue-200 rounded-full font-semibold hover:bg-blue-900/20 transition-colors duration-200">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" /></svg>
              View Projects
            </Link>
          </div>
          <div className="flex gap-5 mt-2">
            {socialLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
                className="text-gray-300 hover:text-blue-400 transition-colors text-2xl"
              >
                {link.icon === 'github' && (
                  <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.477 2 2 6.484 2 12.021c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.154-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.987 1.029-2.686-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.295 2.748-1.025 2.748-1.025.546 1.378.202 2.397.1 2.65.64.699 1.028 1.593 1.028 2.686 0 3.847-2.338 4.695-4.566 4.944.359.309.678.919.678 1.852 0 1.336-.012 2.417-.012 2.747 0 .267.18.578.688.48C19.138 20.197 22 16.444 22 12.021 22 6.484 17.523 2 12 2z" /></svg>
                )}
                {link.icon === 'linkedin' && (
                  <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm15.5 11.268h-3v-5.604c0-1.337-.025-3.063-1.868-3.063-1.868 0-2.154 1.459-2.154 2.967v5.7h-3v-10h2.881v1.367h.041c.401-.761 1.381-1.563 2.841-1.563 3.039 0 3.6 2.001 3.6 4.599v5.597z" /></svg>
                )}
              </a>
            ))}
          </div>
        </div>
        {/* Right: Photo */}
        <div className="flex justify-center items-center">
          <div className="p-1 rounded-3xl bg-gradient-to-tr from-blue-400 via-purple-400 to-pink-400 shadow-2xl w-72 h-96 md:w-80 md:h-[28rem]">
            <div className="rounded-3xl bg-white/20 dark:bg-gray-900/30 backdrop-blur-xl w-full h-full flex items-center justify-center overflow-hidden">
              <Image
                src="/images/profile2.JPG"
                alt="Anelise Estevam - Full Stack Developer"
                width={320}
                height={420}
                className="object-cover rounded-2xl shadow-lg"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
