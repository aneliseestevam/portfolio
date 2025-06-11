import Navbar from '@/components/layout/Navbar';

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-900">
      <Navbar />
      <section className="max-w-3xl mx-auto px-4 py-24">
        <h1 className="text-4xl sm:text-5xl font-extrabold bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent mb-8 text-center">About Me</h1>
        <div className="bg-white/10 dark:bg-gray-900/40 rounded-2xl shadow-xl p-8 md:p-12 border border-white/10">
          <p className="text-lg text-gray-700 dark:text-gray-200 mb-6 leading-relaxed">
            My journey into technology is a little unconventional. I graduated in Civil Engineering, but in 2020—during the pandemic—I discovered my true passion for software development. Since then, I&apos;ve immersed myself in the world of code, working with a wide variety of languages and frameworks, including PHP, JavaScript, Python, React, React Native, Angular, Ionic, Laravel, Joomla, and many others.<br /><br />
            I&apos;m endlessly excited about technology and thrive on learning new things. Every challenge is an opportunity to grow, and it&apos;s the thrill of solving problems and building something meaningful that makes me feel truly alive.
          </p>
          <div>
            <h2 className="text-2xl font-bold text-blue-400 mb-4">Tech Stack</h2>
            <ul className="flex flex-wrap gap-3">
              {['PHP', 'JavaScript', 'Python', 'React', 'React Native', 'Angular', 'Ionic', 'Laravel', 'Joomla', 'TypeScript', 'Node.js', 'Next.js'].map((tech) => (
                <li key={tech} className="bg-blue-700/20 text-blue-300 text-sm px-4 py-2 rounded-full font-semibold">
                  {tech}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
} 