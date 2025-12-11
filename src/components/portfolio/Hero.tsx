import { useEffect, useState } from 'react';
import { ArrowDown, Download, Github, Linkedin, Mail } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import portfolioData from '@/data/portfolio.json';

export default function Hero() {
  const { language, t } = useLanguage();
  const { profile, hero } = portfolioData;
  const typingTexts = hero.typingText[language];
  
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentFullText = typingTexts[currentTextIndex];
    const typingSpeed = isDeleting ? 30 : 50;
    const pauseTime = isDeleting ? 200 : 2000;

    if (!isDeleting && displayedText === currentFullText) {
      const timeout = setTimeout(() => setIsDeleting(true), pauseTime);
      return () => clearTimeout(timeout);
    }

    if (isDeleting && displayedText === '') {
      setIsDeleting(false);
      setCurrentTextIndex((prev) => (prev + 1) % typingTexts.length);
      return;
    }

    const timeout = setTimeout(() => {
      setDisplayedText((prev) =>
        isDeleting
          ? prev.slice(0, -1)
          : currentFullText.slice(0, prev.length + 1)
      );
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, currentTextIndex, typingTexts]);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-hero-pattern bg-pattern opacity-50" />
      
      {/* Gradient Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/20 rounded-full blur-3xl animate-float delay-500" />

      <div className="section-container relative z-10">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          {/* Profile Image */}
          <div className="relative mb-8 animate-fade-in-up">
            <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden ring-4 ring-primary/30 ring-offset-4 ring-offset-background">
              <img
                src={profile.photoUrl}
                alt={profile.name}
                className="w-full h-full object-cover"
                loading="eager"
                onError={(e) => {
                  e.currentTarget.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(profile.name)}&size=160&background=0ea5e9&color=fff`;
                }}
              />
            </div>
            {/* Status indicator */}
            <div className="absolute bottom-2 right-2 w-5 h-5 bg-accent rounded-full ring-4 ring-background" />
          </div>

          {/* Name */}
          <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fade-in-up delay-100">
            {profile.name}
          </h1>

          {/* Role */}
          <p className="text-xl md:text-2xl text-primary font-semibold mb-6 animate-fade-in-up delay-200">
            {t(profile.role)}
          </p>

          {/* Typing Text */}
          <div className="h-8 mb-8 animate-fade-in-up delay-300">
            <p className="text-lg text-muted-foreground typing-cursor">
              {displayedText}
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12 animate-fade-in-up delay-400">
            <a
              href={profile.resumeUrl}
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-semibold transition-all hover:scale-105 hover:shadow-lg glow-effect"
              download
            >
              <Download size={20} />
              {t(portfolioData.translations.sections.downloadCV)}
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-secondary text-secondary-foreground rounded-lg font-semibold transition-all hover:scale-105 hover:bg-secondary/80"
            >
              <Mail size={20} />
              {t(portfolioData.translations.sections.contactTitle)}
            </a>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4 animate-fade-in-up delay-500">
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-card border border-border hover:border-primary hover:text-primary transition-all hover:scale-110"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} />
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-card border border-border hover:border-primary hover:text-primary transition-all hover:scale-110"
              aria-label="GitHub"
            >
              <Github size={24} />
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="p-3 rounded-full bg-card border border-border hover:border-primary hover:text-primary transition-all hover:scale-110"
              aria-label="Email"
            >
              <Mail size={24} />
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <a href="#about" aria-label="Scroll to about section">
            <ArrowDown className="text-muted-foreground" size={28} />
          </a>
        </div>
      </div>
    </section>
  );
}
