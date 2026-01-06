'use client';

import { useTranslations } from 'next-intl';
import { BookOpen, MessageSquare, Building2, BarChart3, Users, Briefcase } from 'lucide-react';

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

  const services = [
    { key: 'accounting', icon: serviceIcons.accounting },
    { key: 'consulting', icon: serviceIcons.consulting },
    { key: 'formation', icon: serviceIcons.formation },
    { key: 'reporting', icon: serviceIcons.reporting },
    { key: 'payroll', icon: serviceIcons.payroll },
    { key: 'selfEmployed', icon: serviceIcons.selfEmployed },
  ];

  return (
    <section id="services" className="w-full py-20 md:py-24 bg-slate-50 relative">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 space-y-4 animate-in fade-in slide-in-from-bottom-8 duration-500 fill-mode-both">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1e293b] tracking-tight">
              {t('title')}
            </h2>
            <div className="w-24 h-1.5 rounded-full bg-gradient-to-r from-[#F59E0B] via-[#10B981] to-[#3B82F6] mx-auto" />
            <p className="text-lg text-slate-600 font-light max-w-2xl mx-auto pt-2">
              {t('subtitle')}
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map(({ key, icon: Icon }, index) => (
              <div
                key={key}
                className="bg-white p-8 border-t-4 border-blue-600 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group animate-in fade-in slide-in-from-bottom-8 duration-500 fill-mode-both"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex flex-col gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 rounded-full bg-blue-50 flex items-center justify-center group-hover:bg-blue-600 transition-colors duration-300">
                      <Icon className="h-7 w-7 text-blue-600 group-hover:text-white transition-colors duration-300" />
                    </div>
                  </div>
                  <div className="flex-1 space-y-3">
                    <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-700 transition-colors">
                      {t(`${key}.title`)}
                    </h3>
                    <p className="text-slate-600 leading-relaxed text-base">
                      {t(`${key}.description`)}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
