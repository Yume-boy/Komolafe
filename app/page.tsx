import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Education from '@/components/Education';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Brands from '@/components/Brands';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main id="home" className="min-h-screen bg-white dark:bg-gray-800">
      <Header />
      <Hero />
      <About />
      <Education />
      <Skills />
      <Projects />
      <Brands />
      <ContactForm />
      <Footer />
    </main>
  );
}
