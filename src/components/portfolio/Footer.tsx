import { Heart } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import portfolioData from '@/data/portfolio.json';

export default function Footer() {
  const { t } = useLanguage();
  const { profile } = portfolioData;
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-border">
      <div className="section-container">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-muted-foreground text-sm">
            <span>© {currentYear} {profile.name}.</span>
            <span className="hidden sm:inline">
              {t({ fr: 'Tous droits réservés.', en: 'All rights reserved.' })}
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
