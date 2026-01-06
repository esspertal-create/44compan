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
    <section id="home" className="relative w-full min-h-[85vh] flex items-center bg-slate-50 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 z-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#2E3B7F 1px, transparent 1px)', backgroundSize: '32px 32px' }} />
      
      <div className="container mx-auto px-4 pt-24 pb-12 md:pt-32 md:pb-20 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Text Content */}
            <div className="space-y-8 text-left animate-in fade-in slide-in-from-bottom-10 duration-700 fill-mode-both">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100/50 border border-blue-200 text-blue-800 text-sm font-medium mb-4">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                  </span>
                  {t('badge')}
                </div>
                
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-[#1e293b] leading-[1.15]">
                  {t('title')}
                </h1>

                <p className="text-xl text-slate-600 font-light leading-relaxed max-w-xl">
                  {t('subtitle')}
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 pt-4">
                  <Button 
                    size="lg" 
                    onClick={() => scrollToSection('contact')}
                    className="bg-[#2563eb] hover:bg-[#1d4ed8] text-white px-8 h-12 text-lg rounded-md shadow-lg shadow-blue-900/10 transition-all hover:-translate-y-0.5"
                  >
                    {t('ctaPrimary')}
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                  <Button 
                    variant="outline" 
                    size="lg" 
                    onClick={() => scrollToSection('services')}
                    className="border-slate-300 text-slate-700 hover:bg-slate-50 hover:text-[#2563eb] px-8 h-12 text-lg rounded-md"
                  >
                    {t('ctaSecondary')}
                  </Button>
                </div>
              </div>
            </div>

            {/* Desktop Hero Image */}
            <div className="relative hidden lg:block animate-in fade-in slide-in-from-right-10 duration-1000 delay-200 fill-mode-both">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-tr from-blue-100 to-slate-100 rounded-2xl transform rotate-3" />
                <div className="relative rounded-xl overflow-hidden shadow-2xl shadow-slate-900/10 border-4 border-white">
                  <img 
                    src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2670&auto=format&fit=crop" 
                    alt="Accounting Professional" 
                    className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700"
                  />
                  {/* Floating Stats Card */}
                  <div className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-sm p-4 rounded-lg shadow-xl border border-slate-100 max-w-xs animate-in slide-in-from-bottom-5 duration-700 delay-500 fill-mode-both">
                    <div className="flex items-center gap-3">
                      <div className="h-10 w-10 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
                      </div>
                      <div>
                        <p className="text-xs text-slate-500 font-medium uppercase tracking-wider">{t('stats.savings')}</p>
                        <p className="text-lg font-bold text-slate-900">{t('stats.growth')}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
          </div>
      </div>
    </section>
  );
}
