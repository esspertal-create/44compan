'use client';

import { useTranslations } from 'next-intl';
import { BookOpen, MessageSquare, Building2, BarChart3, Users, Briefcase, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

const serviceIcons = {
  accounting: BookOpen,
  consulting: MessageSquare,
  formation: Building2,
  reporting: BarChart3,
  payroll: Users,
  selfEmployed: Briefcase,
};

export function Services() {
  const t = useTranslations('services');

  const items = [
    { key: 'accounting', icon: serviceIcons.accounting },
    { key: 'consulting', icon: serviceIcons.consulting },
    { key: 'formation', icon: serviceIcons.formation },
    { key: 'reporting', icon: serviceIcons.reporting },
    { key: 'payroll', icon: serviceIcons.payroll },
    { key: 'selfEmployed', icon: serviceIcons.selfEmployed },
  ];

  return (
    <section id="services" className="w-full py-24 md:py-32 bg-slate-50/50 relative">
      <div className="container mx-auto px-4">
        
        {/* Header - Centered & Elegant */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-6 animate-in fade-in slide-in-from-bottom-8 duration-700">
             <span className="text-[#2E3B7F] font-bold tracking-[0.2em] uppercase text-xs bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
                {t('badge') || 'Excellence in Finance'}
             </span>
             <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-[#1e293b] leading-tight">
              {t('title')}
            </h2>
            <div className="w-px h-16 bg-gradient-to-b from-[#2E3B7F] to-transparent mx-auto opacity-20" />
            <p className="text-lg text-slate-500 font-light leading-relaxed">
              {t('subtitle')}
            </p>
        </div>

        {/* Elegant Grid - Refined UX/UI */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {items.map(({ key, icon: Icon }, index) => (
            <div
              key={key}
              className="group relative bg-white p-8 lg:p-10 rounded-2xl border border-slate-100 transition-all duration-300 hover:border-blue-100 hover:shadow-[0_8px_30px_rgb(46,59,127,0.06)] hover:-translate-y-1"
            >
              <div className="flex flex-col h-full justify-between space-y-8">
                
                {/* Header: Icon & Number */}
                <div className="flex justify-between items-start">
                   <div className="h-14 w-14 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center text-[#2E3B7F] transition-all duration-300 group-hover:bg-[#2E3B7F] group-hover:text-white group-hover:scale-110 group-hover:rotate-3 shadow-sm">
                      <Icon className="h-6 w-6" />
                   </div>
                   <span className="font-serif text-5xl text-slate-100 group-hover:text-blue-50/80 transition-colors duration-300 select-none">
                      {(index + 1).toString().padStart(2, '0')}
                   </span>
                </div>

                {/* Content */}
                <div className="space-y-3 relative z-10">
                   <h3 className="text-2xl font-serif text-[#1e293b] group-hover:text-[#2E3B7F] transition-colors duration-300">
                      {t(`${key}.title`)}
                   </h3>
                   <p className="text-slate-500 leading-relaxed font-light text-sm line-clamp-3 group-hover:line-clamp-none transition-all">
                      {t(`${key}.description`)}
                   </p>
                </div>

                {/* Footer: Learn More Button */}
                <div className="pt-2">
                    <button className="flex items-center gap-2 text-sm font-semibold text-slate-400 group-hover:text-[#2E3B7F] transition-colors duration-300 group/btn">
                        <span className="uppercase tracking-wide text-xs">Learn more</span>
                        <div className="h-px w-8 bg-slate-200 group-hover:w-12 group-hover:bg-[#2E3B7F] transition-all duration-300" />
                    </button>
                </div>

              </div>
              
              {/* Subtle Gradient Glow on Hover */}
              <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-transparent via-[#2E3B7F]/50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 rounded-b-2xl" />
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}
