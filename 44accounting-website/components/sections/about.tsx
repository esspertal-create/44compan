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
    <section id="about" className="w-full pt-16 pb-20 md:pt-24 md:pb-28 bg-white relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Content Side */}
          <div className="space-y-8 order-2 lg:order-1 animate-in fade-in slide-in-from-left-10 duration-1000 fill-mode-both">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#1e293b] leading-tight">
                {t('title')}
              </h2>
              <div className="w-24 h-1.5 rounded-full bg-gradient-to-r from-[#F59E0B] via-[#10B981] to-[#3B82F6]" />
              
              <p className="text-lg md:text-xl text-slate-600 leading-relaxed font-light">
                {t('subtitle')}
              </p>
              <p className="text-base text-slate-500 leading-7">
                {t('description')}
              </p>
            </div>

            {/* Features List */}
            <div className="grid gap-6 py-6">
              {features.map(({ icon: Icon, title, description }, index) => (
                <div 
                  key={index} 
                  className="flex items-start gap-4"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 mt-1">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-800 mb-2">{title}</h3>
                    <p className="text-slate-600 leading-relaxed text-sm">{description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Desktop Image Side */}
          <div className="relative order-1 lg:order-2 animate-in fade-in slide-in-from-right-10 duration-1000 delay-200 fill-mode-both">
             <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white aspect-[4/5] lg:aspect-auto lg:h-[800px]">
                <img 
                  src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=2664&auto=format&fit=crop" 
                  alt="Our Professoinal Team" 
                  className="w-full h-full object-cover"
                />
                
                {/* Quote Card Overlay */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-8 text-white">
                  <p className="font-serif text-xl italic mb-4">"{t('quote.text')}"</p>
                  <p className="text-sm font-bold uppercase tracking-widest text-blue-200">{t('quote.label')}</p>
                </div>
              </div>
              
              {/* Simple decorative square behind */}
              <div className="absolute -z-10 top-12 -right-12 w-full h-full border-2 border-slate-200 rounded-2xl" />
          </div>
        </div>
      </div>
    </section>
  );
}
