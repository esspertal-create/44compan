'use client';

import { useTranslations } from 'next-intl';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export function Hero() {
  const t = useTranslations('hero');

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative w-full min-h-[75vh] flex items-center bg-gradient-to-br from-blue-50/50 via-white to-orange-50/30 overflow-hidden">
      {/* Decorative gradient blob */}
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-blue-100/40 rounded-full blur-3xl" />
      <div className="absolute top-1/2 -left-24 w-72 h-72 bg-orange-100/30 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 pt-24 pb-12 md:pt-32 md:pb-20 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-in fade-in slide-in-from-bottom-10 duration-700 ease-out fill-mode-both">
          {/* Main Heading */}
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-normal text-[#2E3B7F] leading-tight font-serif drop-shadow-sm animate-in fade-in slide-in-from-bottom-5 duration-1000 delay-150 fill-mode-both">
              {t('title')}
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 font-light max-w-2xl mx-auto tracking-wide animate-in fade-in slide-in-from-bottom-5 duration-1000 delay-300 fill-mode-both">
              {t('subtitle')}
            </p>
            {/* Logo Accent Line */}
            <div className="w-24 h-1.5 mx-auto rounded-full bg-gradient-to-r from-[#F59E0B] via-[#10B981] to-[#3B82F6] animate-in fade-in zoom-in duration-700 delay-500 fill-mode-both" />
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4 animate-in fade-in slide-in-from-bottom-5 duration-1000 delay-500 fill-mode-both">
            <Button
              size="lg"
              onClick={() => scrollToSection('contact')}
              className="text-base px-8 py-6 bg-[#2E3B7F] hover:bg-[#2E3B7F]/90 shadow-lg hover:shadow-xl hover:shadow-blue-900/20 transition-all duration-300"
            >
              {t('cta')}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollToSection('services')}
              className="text-base px-8 py-6 border-slate-200 hover:border-[#2E3B7F] hover:text-[#2E3B7F] hover:bg-white transition-all duration-300"
            >
              {t('ctaSecondary')}
            </Button>
          </div>

          {/* Subtle description */}
          <p className="text-base text-slate-500 max-w-2xl mx-auto pt-4 animate-in fade-in duration-1000 delay-700 fill-mode-both">
            {t('description')}
          </p>
        </div>
      </div>
    </section>
  );
}
