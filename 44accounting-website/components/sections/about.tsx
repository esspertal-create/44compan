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
    <section id="about" className="w-full pt-12 pb-20 md:pt-20 md:pb-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 space-y-4 animate-in fade-in slide-in-from-bottom-8 duration-500">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#2E3B7F]">
              {t('title')}
            </h2>
            <div className="w-16 h-1 bg-[#F59E0B] mx-auto rounded-full" />
            <p className="text-lg md:text-xl text-slate-600 font-light max-w-2xl mx-auto">
              {t('subtitle')}
            </p>
            <p className="text-base text-slate-500 max-w-3xl mx-auto leading-relaxed pt-2">
              {t('description')}
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {features.map(({ icon: Icon, title, description }, index) => (
              <div 
                key={index} 
                className="text-center space-y-4 p-8 rounded-2xl bg-slate-50 border border-slate-100/50 hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300 animate-in fade-in slide-in-from-bottom-8 duration-500"
                style={{ animationDelay: `${index * 100}ms`, animationFillMode: 'both' }}
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#E0F2FE] mb-4 text-[#2E3B7F]">
                  <Icon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold text-[#2E3B7F]">{title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
