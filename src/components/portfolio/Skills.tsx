import { Code, Database, BarChart3, Container, Cloud, Users } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import portfolioData from '@/data/portfolio.json';

export default function Skills() {
  const { language, t } = useLanguage();
  const { skills } = portfolioData;
  const translations = portfolioData.translations.sections;

  const softSkills = typeof skills.soft === 'object' && !Array.isArray(skills.soft) 
    ? skills.soft[language] 
    : skills.soft;

  const categories = [
    {
      title: translations.programming,
      icon: Code,
      items: skills.programming,
    },
    {
      title: translations.databases,
      icon: Database,
      items: skills.databases,
    },
    {
      title: translations.bigdata,
      icon: BarChart3,
      items: skills.bigdata,
    },
    {
      title: translations.devops,
      icon: Container,
      items: skills.devops,
    },
    {
      title: translations.cloud,
      icon: Cloud,
      items: skills.cloud,
    },
    {
      title: translations.softSkills,
      icon: Users,
      items: softSkills,
    },
  ];

  return (
    <section id="skills" className="py-24 bg-secondary/20">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            {t(translations.skillsTitle)}
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <div
              key={t(category.title)}
              className="group p-6 bg-card rounded-2xl border border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
              style={{ animationDelay: `${index * 80}ms` }}
            >
              <div className="flex items-center gap-4 mb-5">
                <div className="p-3 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <category.icon className="text-primary" size={22} />
                </div>
                <h3 className="text-lg font-semibold text-foreground">
                  {t(category.title)}
                </h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {category.items.map((item) => (
                  <span
                    key={item}
                    className="px-3 py-1.5 text-sm font-medium rounded-lg bg-secondary/80 text-muted-foreground border border-border/30 hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-200"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
