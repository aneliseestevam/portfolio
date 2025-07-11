import Navbar from '@/components/layout/Navbar';
import Hero from '@/components/sections/Hero';

export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-gray-900">
      <Navbar />
      <Hero />
    </main>
  );
}
