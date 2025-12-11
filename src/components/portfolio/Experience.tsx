import { Calendar, Building2 } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import portfolioData from '@/data/portfolio.json';

type Language = 'fr' | 'en';

export default function Experience() {
  const { language, t } = useLanguage();
  const { experience } = portfolioData;
  const translations = portfolioData.translations.sections;

  return (
    <section id="experience" className="py-20 bg-secondary/30">
      <div className="section-container">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          {t(translations.experienceTitle)}
        </h2>

        <div className="max-w-3xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-8 top-0 bottom-0 w-0.5 bg-border" />

            {experience.map((exp, index) => (
              <div
                key={index}
                className="relative pl-12 md:pl-20 pb-12 last:pb-0"
              >
                {/* Timeline dot */}
                <div className="absolute left-2 md:left-6 top-0 w-4 h-4 rounded-full bg-primary ring-4 ring-background" />

                <div className="bg-card p-6 rounded-xl border border-border card-hover">
                  {/* Header */}
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-foreground">
                        {t(exp.role)}
                      </h3>
                      <div className="flex items-center gap-2 text-primary mt-1">
                        <Building2 size={16} />
                        <span className="font-medium">{exp.company}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground text-sm">
                      <Calendar size={16} />
                      <span>{t(exp.date)}</span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-muted-foreground mb-4">
                    {t(exp.description)}
                  </p>

                  {/* Tasks */}
                  <ul className="space-y-2">
                    {(typeof exp.tasks === 'object' && 'fr' in exp.tasks 
                      ? exp.tasks[language] 
                      : exp.tasks
                    ).map((task: string, taskIndex: number) => (
                      <li key={taskIndex} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                        {task}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
