import Link from "next/link";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import WorkExperience from "./components/WorkExperience";
import { client } from "@/sanity/lib/client";

export const revalidate = 3600;

export default async function Home() {
  const pageInfo = await client.fetch(`*[_type == "pageInfo"][0]`);
  const skills = await client.fetch(`*[_type == "skill"]`);
  const socials = await client.fetch(`*[_type == "social"]`);
  const experiences = await client.fetch(`*[_type == "experience"] {
    ...,
    technologies[]->
  } | order(_createdAt asc)`);
  const projects = await client.fetch(`*[_type == "projects"] {
    ...,
    technologies[]->
  } | order(_createdAt desc)`);

  return (
    <main className="h-[100vh] bg-slate-900 text-white snap-y snap-mandatory overflow-y-scroll z-0 overflow-x-hidden scrollbar-thin scrollbar-corner-stone-800 scrollbar-track-gray-400/20 scrollbar-thumb-slate-100">
      <Header socials={socials} />

      <section id="hero" className="snap-center">
        <Hero pageInfo={pageInfo} />
      </section>
      <section id="about" className="snap-center">
        <About pageInfo={pageInfo} />
      </section>
      <section id="experience" className="snap-center">
        <WorkExperience experiences={experiences} />
      </section>
      <section id="skills" className="snap-start">
        <Skills skills={skills} />
      </section>
      <section id="projects" className="snap-start">
        <Projects projects={projects} />
      </section>
      <section id="contact" className="snap-start">
        <Contact />
      </section>
      <section id="footer" className="sticky bottom-5">
        <Link href="#hero" rel="noopener noreferrer">
          <Footer pageInfo={pageInfo} />
        </Link>
      </section>
    </main>
  );
}
