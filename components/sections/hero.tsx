'use client';

import { useTranslations } from 'next-intl';
import { Button } from '@/components/ui/button';
import { ChevronRight, Star } from 'lucide-react';

export function Hero() {
  const t = useTranslations('hero');

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative w-full min-h-[95vh] flex items-center bg-[#F8FAFC] overflow-hidden px-4 md:px-0">
      
      {/* 1. Dynamic Background Elements */}
      <div className="absolute top-0 right-0 w-[60vw] h-[60vw] bg-gradient-to-br from-blue-100/40 to-amber-100/40 rounded-full blur-3xl -translate-y-1/2 translate-x-1/4 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[40vw] h-[40vw] bg-gradient-to-tr from-[#2E3B7F]/5 to-transparent rounded-full blur-3xl translate-y-1/3 -translate-x-1/4 pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10 pt-20 pb-12">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
            
            {/* 2. Left Content - High Impact typography with refined spacing */}
            <div className="lg:col-span-6 space-y-10 text-left animate-in fade-in slide-in-from-bottom-10 duration-1000 fill-mode-both">
              
              <div className="space-y-6">
                {/* Modern Badge */}
                <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white border border-slate-200 shadow-sm transition-transform hover:scale-105 cursor-default">
                  <div className="flex -space-x-2">
                     {[1,2,3].map(i => (
                         <div key={i} className="w-6 h-6 rounded-full bg-slate-100 border-2 border-white flex items-center justify-center overflow-hidden">
                             <div className={`w-full h-full bg-gradient-to-tr ${i === 1 ? 'from-blue-400 to-blue-600' : i === 2 ? 'from-amber-400 to-amber-600' : 'from-emerald-400 to-emerald-600'}`} />
                         </div>
                     ))}
                  </div>
                  <span className="text-sm font-semibold text-slate-600 tracking-wide">{t('badge') || 'Trusted by 500+ Companies'}</span>
                </div>
                
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-sans font-bold tracking-tight text-[#1e293b] leading-[1.05]">
                  <span className="block text-[#2E3B7F]">{t('title').split(' ')[0]}</span>
                  <span className="relative">
                    {t('title').split(' ').slice(1).join(' ')}
                    {/* Artistic Underline */}
                    <svg className="absolute w-full h-4 -bottom-2 left-0 text-[#f59e0b] opacity-80" viewBox="0 0 200 9" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.00025 6.99997C2.00025 6.99997 100.088 -6.36675 198.001 5.99996" stroke="currentColor" strokeWidth="3" strokeLinecap="round" /></svg>
                  </span>
                </h1>

                <p className="text-xl md:text-2xl text-slate-500 font-light leading-relaxed max-w-lg border-l-4 border-[#2E3B7F]/20 pl-6">
                  {t('subtitle')}
                </p>
              </div>

              {/* Action Area */}
              <div className="flex flex-col sm:flex-row gap-5 pt-4">
                <Button 
                  size="lg" 
                  onClick={() => scrollToSection('contact')}
                  className="bg-[#2E3B7F] hover:bg-[#1e295f] text-white px-8 h-14 text-base rounded-full shadow-lg shadow-blue-900/20 transition-all hover:-translate-y-0.5 hover:shadow-blue-900/30 flex items-center gap-2 group"
                >
                  {t('ctaPrimary')}
                  <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
                
                <Button 
                  variant="ghost" 
                  size="lg" 
                  onClick={() => scrollToSection('services')}
                  className="h-14 px-8 text-base font-medium text-slate-600 hover:text-[#2E3B7F] hover:bg-slate-50 rounded-full transition-all group gap-2"
                >
                  {t('ctaSecondary')}
                  <ChevronRight className="h-4 w-4 text-slate-400 group-hover:text-[#2E3B7F] transition-colors" />
                </Button>
              </div>

            </div>

            {/* 3. Right Visual - Layered Glassmorphism Composition */}
            <div className="lg:col-span-6 relative hidden lg:block h-[700px] perspective-1000">
                {/* Decorative Blobs */}
                <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-[#2E3B7F] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob" />
                <div className="absolute top-1/4 right-1/4 w-72 h-72 bg-amber-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000" />
                
                {/* Main Card */}
                <div className="absolute inset-x-8 top-12 bottom-12 rounded-[2.5rem] overflow-hidden shadow-2xl shadow-slate-900/10 border-4 border-white transform rotate-2 hover:rotate-0 transition-transform duration-700 bg-white group">
                    <img 
                      src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2000&auto=format&fit=crop" 
                      alt={t('imageAlt')} 
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#2E3B7F]/90 via-[#2E3B7F]/20 to-transparent opacity-90" />
                    
                    {/* Floating Info inside Image */}
                    <div className="absolute bottom-10 left-10 text-white space-y-4">
                        <div className="bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-2xl inline-block mb-2">
                           <div className="flex items-center gap-1 text-amber-400">
                                {[1,2,3,4,5].map(i => <Star key={i} className="h-5 w-5 fill-current" />)}
                           </div>
                        </div>
                        <div>
                          <p className="font-serif text-4xl font-bold tracking-tight">{t('brandNameShort')}</p>
                          <p className="text-white/80 font-light text-lg mt-1">{t('brandMotto')}</p>
                        </div>
                    </div>
                </div>

                {/* Floating "Success" Widget */}
                <div className="absolute top-[20%] -left-6 bg-white p-5 rounded-2xl shadow-[0_20px_50px_-12px_rgba(0,0,0,0.15)] border border-slate-100 animate-in slide-in-from-left-4 duration-1000 delay-500 fill-mode-both">
                    <div className="flex items-center gap-4">
                        <div className="h-12 w-12 rounded-xl bg-green-100 flex items-center justify-center text-green-600">
                             <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                        </div>
                        <div>
                            <p className="text-xs text-slate-400 font-bold uppercase tracking-wider">{t('stats.revenueGrowth')}</p>
                            <p className="text-xl font-bold text-slate-800">{t('stats.revenueGrowthValue')}</p>
                        </div>
                    </div>
                </div>

                 {/* Floating "Tax" Widget */}
                 <div className="absolute bottom-[20%] -right-6 bg-white p-5 rounded-2xl shadow-[0_20px_50px_-12px_rgba(0,0,0,0.15)] border border-slate-100 animate-in slide-in-from-right-4 duration-1000 delay-700 fill-mode-both">
                    <div className="flex items-center gap-4">
                        <div className="h-12 w-12 rounded-xl bg-blue-100 flex items-center justify-center text-[#2E3B7F]">
                             <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
                        </div>
                        <div>
                            <p className="text-xs text-slate-400 font-bold uppercase tracking-wider">{t('stats.taxSavings')}</p>
                            <p className="text-xl font-bold text-slate-800">{t('stats.optimized')}</p>
                        </div>
                    </div>
                </div>

            </div>
            
          </div>
      </div>
    </section>
  );
}
