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
    <section id="services" className="w-full py-20 md:py-24 bg-[#F8FAFC]">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 space-y-4 animate-in fade-in slide-in-from-bottom-8 duration-500">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#2E3B7F]">
              {t('title')}
            </h2>
            <div className="w-16 h-1 bg-[#10B981] mx-auto rounded-full" />
            <p className="text-lg text-slate-600 font-light max-w-2xl mx-auto">
              {t('subtitle')}
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map(({ key, icon: Icon }, index) => (
              <div
                key={key}
                className="bg-white p-8 rounded-xl border border-slate-200 hover:border-[#3B82F6]/50 hover:shadow-xl hover:shadow-blue-900/5 transition-all duration-300 group animate-in fade-in slide-in-from-bottom-8 duration-500"
                style={{ animationDelay: `${index * 50}ms`, animationFillMode: 'both' }}
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-lg bg-slate-50 flex items-center justify-center group-hover:bg-[#2E3B7F] transition-colors duration-300">
                      <Icon className="h-6 w-6 text-[#2E3B7F] group-hover:text-white transition-colors duration-300" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-[#2E3B7F] mb-2 font-serif tracking-wide">
                      {t(`${key}.title`)}
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed">
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
