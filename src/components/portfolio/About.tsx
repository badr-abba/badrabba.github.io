import { MapPin, Mail, Phone, Linkedin, Github } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import portfolioData from '@/data/portfolio.json';

export default function About() {
  const { t } = useLanguage();
  const { profile } = portfolioData;
  const translations = portfolioData.translations.sections;

  return (
    <section id="about" className="py-24 bg-secondary/20">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {t(translations.aboutTitle)}
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-card rounded-2xl border border-border/50 p-8 md:p-10">
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8 text-center">
              {t(profile.bio)}
            </p>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <a
                href={`mailto:${profile.email}`}
                className="flex items-center gap-3 p-4 rounded-xl bg-secondary/50 hover:bg-primary/10 border border-border/30 hover:border-primary/30 transition-all group"
              >
                <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20">
                  <Mail size={18} className="text-primary" />
                </div>
                <span className="text-sm text-muted-foreground group-hover:text-foreground truncate">
                  {profile.email}
                </span>
              </a>

              <a
                href={`tel:${profile.phone}`}
                className="flex items-center gap-3 p-4 rounded-xl bg-secondary/50 hover:bg-primary/10 border border-border/30 hover:border-primary/30 transition-all group"
              >
                <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20">
                  <Phone size={18} className="text-primary" />
                </div>
                <span className="text-sm text-muted-foreground group-hover:text-foreground">
                  {profile.phone}
                </span>
              </a>

              <div className="flex items-center gap-3 p-4 rounded-xl bg-secondary/50 border border-border/30">
                <div className="p-2 rounded-lg bg-primary/10">
                  <MapPin size={18} className="text-primary" />
                </div>
                <span className="text-sm text-muted-foreground">
                  {profile.location}
                </span>
              </div>

              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-4 rounded-xl bg-secondary/50 hover:bg-primary/10 border border-border/30 hover:border-primary/30 transition-all group"
              >
                <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20">
                  <Linkedin size={18} className="text-primary" />
                </div>
                <span className="text-sm text-muted-foreground group-hover:text-foreground">
                  LinkedIn
                </span>
              </a>

              <a
                href={profile.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-4 rounded-xl bg-secondary/50 hover:bg-primary/10 border border-border/30 hover:border-primary/30 transition-all group"
              >
                <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20">
                  <Github size={18} className="text-primary" />
                </div>
                <span className="text-sm text-muted-foreground group-hover:text-foreground">
                  GitHub
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
