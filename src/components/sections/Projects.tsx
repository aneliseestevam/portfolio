import Image from 'next/image';
import Link from 'next/link';

const projects = [
  {
    title: 'Modern Portfolio',
    description: 'A beautiful, responsive portfolio built with Next.js and Tailwind CSS.',
    image: '/images/project1.jpg',
    tech: ['Next.js', 'Tailwind CSS', 'TypeScript'],
    github: 'https://github.com/aneliseestevam/portfolio',
    demo: 'https://aneliseestevam.com',
  },
  {
    title: 'E-commerce Platform',
    description: 'A scalable e-commerce platform with custom admin and payment integration.',
    image: '/images/project2.jpg',
    tech: ['React', 'Node.js', 'Stripe'],
    github: 'https://github.com/aneliseestevam/ecommerce',
    demo: 'https://ecommerce-demo.com',
  },
  {
    title: 'Blog CMS',
    description: 'A headless CMS for blogs with markdown support and live preview.',
    image: '/images/project3.jpg',
    tech: ['Next.js', 'Sanity', 'Vercel'],
    github: 'https://github.com/aneliseestevam/blog-cms',
    demo: 'https://blogcms-demo.com',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="relative py-24 px-4 bg-gradient-to-b from-transparent to-[#0f172a]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-center mb-12 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
          Projects
        </h2>
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group bg-white/10 dark:bg-gray-900/40 rounded-2xl shadow-xl overflow-hidden flex flex-col border border-white/10 hover:scale-[1.03] hover:shadow-2xl transition-transform duration-300"
            >
              <div className="relative w-full h-48">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
              <div className="flex-1 flex flex-col p-6 gap-3">
                <h3 className="text-xl font-bold text-white mb-1">{project.title}</h3>
                <p className="text-gray-300 text-sm mb-2 flex-1">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-3">
                  {project.tech.map((tech) => (
                    <span key={tech} className="bg-blue-700/20 text-blue-300 text-xs px-3 py-1 rounded-full font-semibold">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-4 mt-auto">
                  <Link href={project.demo} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-blue-400 hover:text-pink-400 font-medium transition-colors">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M14 3h7v7m0 0L10 21l-7-7 11-11z" /></svg>
                    Live Demo
                  </Link>
                  <Link href={project.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-gray-300 hover:text-blue-400 font-medium transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C6.477 2 2 6.484 2 12.021c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.482 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.154-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.987 1.029-2.686-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.295 2.748-1.025 2.748-1.025.546 1.378.202 2.397.1 2.65.64.699 1.028 1.593 1.028 2.686 0 3.847-2.338 4.695-4.566 4.944.359.309.678.919.678 1.852 0 1.336-.012 2.417-.012 2.747 0 .267.18.578.688.48C19.138 20.197 22 16.444 22 12.021 22 6.484 17.523 2 12 2z" /></svg>
                    GitHub
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects; 