'use client';

import { useTranslations } from 'next-intl';
import { Award, Clock, Handshake } from 'lucide-react';

export function About() {
  const t = useTranslations('about');
  
  const features = [
    {
      icon: Award,
      title: t('feature1Title'),
      description: t('feature1Description'),
    },
    {
      icon: Clock,
      title: t('feature2Title'),
      description: t('feature2Description'),
    },
    {
      icon: Handshake,
      title: t('feature3Title'),
      description: t('feature3Description'),
    },
  ];

  return (
    <section id="about" className="w-full relative py-20 lg:py-32 bg-slate-50">
      
      {/* 1. Cinematic Background Image - Sticky / Fixed feel */}
      <div className="absolute inset-0 w-full h-full z-0">
          <div className="absolute inset-0 bg-slate-900/10 z-10" />
          <img 
            src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=2070&auto=format&fit=crop" 
            alt="Office Background"
            className="w-full h-full object-cover opacity-30 grayscale"
          />
      </div>

      <div className="container mx-auto px-4 relative z-20">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
            
            {/* 2. Floating Content Card - Overlapping Layout */}
            <div className="lg:col-span-7 bg-white p-8 md:p-12 lg:p-16 rounded-3xl shadow-2xl border border-slate-100 animate-in fade-in slide-in-from-bottom-12 duration-1000">
               <div className="space-y-8">
                 <div className="space-y-4">
                    <span className="text-[#2E3B7F] font-bold tracking-wider uppercase text-sm border-b-2 border-[#F59E0B] pb-1 inline-block">
                        {t('badge') || 'About Forty Four'}
                    </span>
                    <h2 className="text-3xl md:text-5xl font-bold text-[#1e293b] leading-tight">
                        {t('title')}
                    </h2>
                    <p className="text-xl text-slate-600 font-light leading-relaxed">
                        {t('subtitle')}
                    </p>
                 </div>
                 
                 <div className="h-px bg-slate-100" />
                 
                 <div className="grid sm:grid-cols-2 gap-8">
                    <div className="space-y-4">
                        <p className="text-slate-600 leading-relaxed">
                           {t('description')}
                        </p>
                        {/* Quote mini-feature */}
                        <blockquote className="border-l-4 border-amber-400 pl-4 py-1 italic text-slate-700 bg-amber-50 rounded-r-lg">
                           "{t('quote.text')}"
                        </blockquote>
                    </div>
                    
                    {/* Features column */}
                    <div className="space-y-6">
                        {features.map(({ icon: Icon, title }, i) => (
                            <div key={i} className="flex items-center gap-3 group">
                                <div className="h-10 w-10 rounded-full bg-[#2E3B7F] text-white flex items-center justify-center shadow-lg shadow-blue-900/20 group-hover:scale-110 transition-transform">
                                    <Icon className="h-5 w-5" />
                                </div>
                                <span className="font-semibold text-slate-800">{title}</span>
                            </div>
                        ))}
                    </div>
                 </div>
               </div>
            </div>

            {/* 3. Visual Element / Stats on the right (or bottom on mobile) */}
            <div className="lg:col-span-5 relative h-full min-h-[400px] flex flex-col justify-end pb-12">
                 <div className="absolute right-0 top-0 w-64 h-64 bg-amber-400 rounded-full blur-[100px] opacity-20 pointer-events-none" />
                 
                 {/* Large typography stat */}
                 <div className="text-right space-y-2">
                     <span className="text-[12rem] leading-none font-bold text-[#2E3B7F] opacity-90 block tracking-tighter">
                         44
                     </span>
                     <span className="text-2xl font-medium text-[#2E3B7F] uppercase tracking-widest block pr-4">
                         Accounting
                     </span>
                     <p className="text-slate-600 max-w-xs ml-auto pr-4 pt-4 border-t border-[#2E3B7F]/20">
                         Defining professional excellence in financial services since 2024.
                     </p>
                 </div>
            </div>

        </div>
      </div>
    </section>
  );
}
