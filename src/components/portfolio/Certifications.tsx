import { Award, ExternalLink, Github, Database, Code, Shield, Lock, Server } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import portfolioData from '@/data/portfolio.json';

const iconMap: Record<string, typeof Award> = {
  github: Github,
  database: Database,
  code: Code,
  shield: Shield,
  lock: Lock,
  server: Server,
};

export default function Certifications() {
  const { t } = useLanguage();
  const { certifications } = portfolioData;
  const translations = portfolioData.translations.sections;

  return (
    <section id="certifications" className="py-20">
      <div className="section-container">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          {t(translations.certificationsTitle)}
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {certifications.map((cert, index) => {
            const IconComponent = iconMap[cert.icon] || Award;
            
            return (
              <a
                key={index}
                href={cert.link !== '#' ? cert.link : undefined}
                target="_blank"
                rel="noopener noreferrer"
                className={`group bg-card p-6 rounded-xl border border-border card-hover ${
                  cert.link !== '#' ? 'cursor-pointer' : 'cursor-default'
                }`}
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <IconComponent className="text-primary" size={24} />
                  </div>
                  
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-foreground mb-1 group-hover:text-primary transition-colors truncate">
                      {cert.name}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-2">
                      {cert.issuer}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-muted-foreground">
                        {cert.date}
                      </span>
                      {cert.link !== '#' && (
                        <ExternalLink size={14} className="text-muted-foreground group-hover:text-primary transition-colors" />
                      )}
                    </div>
                  </div>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
