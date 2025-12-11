import { GraduationCap, Calendar, School } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import portfolioData from '@/data/portfolio.json';

export default function Education() {
  const { t } = useLanguage();
  const { education } = portfolioData;
  const translations = portfolioData.translations.sections;

  return (
    <section id="education" className="py-20">
      <div className="section-container">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          {t(translations.educationTitle)}
        </h2>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {education.map((edu, index) => (
            <div
              key={index}
              className="bg-card p-6 rounded-xl border border-border card-hover group"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <GraduationCap className="text-primary" size={24} />
                </div>
                
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-foreground mb-1">
                    {t(edu.degree)}
                  </h3>
                  
                  <div className="flex items-center gap-2 text-primary text-sm mb-2">
                    <School size={14} />
                    <span>{edu.school}</span>
                  </div>
                  
                  <div className="flex items-center gap-2 text-muted-foreground text-sm mb-3">
                    <Calendar size={14} />
                    <span>{edu.year}</span>
                  </div>
                  
                  <p className="text-sm text-muted-foreground">
                    {t(edu.description)}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
