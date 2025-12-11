import { Helmet } from 'react-helmet-async';
import { useLanguage } from '@/contexts/LanguageContext';
import Navbar from '@/components/portfolio/Navbar';
import Hero from '@/components/portfolio/Hero';
import About from '@/components/portfolio/About';
import Skills from '@/components/portfolio/Skills';
import Experience from '@/components/portfolio/Experience';
import Education from '@/components/portfolio/Education';
import Projects from '@/components/portfolio/Projects';
import Certifications from '@/components/portfolio/Certifications';
import Contact from '@/components/portfolio/Contact';
import Footer from '@/components/portfolio/Footer';
import portfolioData from '@/data/portfolio.json';

export default function Index() {
  const { t } = useLanguage();
  const { profile } = portfolioData;

  return (
    <>
      <Helmet>
        <title>{profile.name} | {t(profile.role)}</title>
        <meta name="description" content={t(profile.bio)} />
        <meta name="keywords" content="Big Data, Cloud Computing, Data Science, DevOps, Portfolio, ABBA BADREDDINE" />
        <meta name="author" content={profile.name} />
        
        {/* Open Graph */}
        <meta property="og:title" content={`${profile.name} | ${t(profile.role)}`} />
        <meta property="og:description" content={t(profile.bio)} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={profile.portfolio} />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`${profile.name} | ${t(profile.role)}`} />
        <meta name="twitter:description" content={t(profile.bio)} />
        
        {/* Canonical */}
        <link rel="canonical" href={profile.portfolio} />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Skills />
          <Experience />
          <Education />
          <Projects />
          <Certifications />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
}
