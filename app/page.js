import Link from 'next/link';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Header from './components/Header';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import WorkExperience from './components/WorkExperience';
import { client } from '@/sanity/lib/client';

export default async function Home() {
  const pageInfo = await client.fetch(`*[_type == "pageInfo"]`);
  console.log(pageInfo);
  return (
    <main className="h-screen bg-slate-900 text-white snap-y snap-mandatory overflow-y-scroll z-0 overflow-x-hidden scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-slate-100">
      <Header />

      <section id="hero" className="snap-center">
        <Hero />
      </section>
      <section id="about" className="snap-center">
        <About />
      </section>
      <section id="experience" className="snap-center">
        <WorkExperience />
      </section>
      <section id="skills" className="snap-start">
        <Skills />
      </section>
      <section id="projects" className="snap-start">
        <Projects />
      </section>
      <section id="contact" className="snap-start">
        <Contact />
      </section>
      <section id="footer" className="sticky bottom-5">
        <Link href="#hero">
          <Footer />
        </Link>
      </section>
    </main>
  );
}
