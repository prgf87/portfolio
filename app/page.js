import Footer from './components/Footer';
import Header from './components/Header';
import Hero from './components/Hero';

export default function Home() {
  return (
    <main className="h-screen bg-slate-800 text-white snap-y snap-mandatory overflow-scroll z-0">
      <Header />

      <section id="hero" className="snap-center">
        <Hero />
      </section>
      <section>
        <Footer />
      </section>
    </main>
  );
}
