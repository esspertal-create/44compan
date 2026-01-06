'use client';

import { useTranslations } from 'next-intl';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, MapPin, Phone } from 'lucide-react';
import { useState } from 'react';

export function Contact() {
  const t = useTranslations('contact');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    consent: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement form submission
    console.log('Form submitted:', formData);
    alert('Form submitted! (This is a demo)');
  };

  return (
    <section id="contact" className="w-full py-20 md:py-24 bg-white relative">
       {/* Background Decoration */}
       <div className="absolute inset-0 bg-gradient-to-t from-slate-50 to-white pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 space-y-4 animate-in fade-in slide-in-from-bottom-8 duration-500">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#2E3B7F]">
            {t('title')}
          </h2>
          <div className="w-16 h-1 bg-[#3B82F6] mx-auto rounded-full" />
          <p className="text-lg text-slate-600 font-light max-w-2xl mx-auto">
            {t('subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Contact Form */}
          <div className="bg-white p-8 rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-100 animate-in fade-in slide-in-from-left-8 duration-500">
            <CardContent className="p-0">
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2 text-slate-700">
                    {t('name')}
                  </label>
                  <Input
                    id="name"
                    type="text"
                    required
                    className="border-slate-200 focus:border-[#2E3B7F] focus:ring-[#2E3B7F]"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2 text-slate-700">
                    {t('email')}
                  </label>
                  <Input
                    id="email"
                    type="email"
                    required
                    className="border-slate-200 focus:border-[#2E3B7F] focus:ring-[#2E3B7F]"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium mb-2 text-slate-700">
                    {t('phone')}
                  </label>
                  <Input
                    id="phone"
                    type="tel"
                    className="border-slate-200 focus:border-[#2E3B7F] focus:ring-[#2E3B7F]"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2 text-slate-700">
                    {t('message')}
                  </label>
                  <Textarea
                    id="message"
                    required
                    rows={5}
                    className="border-slate-200 focus:border-[#2E3B7F] focus:ring-[#2E3B7F]"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  />
                </div>

                <div className="flex items-start space-x-2">
                  <input
                    type="checkbox"
                    id="consent"
                    required
                    checked={formData.consent}
                    onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
                    className="mt-1 rounded text-[#2E3B7F] focus:ring-[#2E3B7F]"
                  />
                  <label htmlFor="consent" className="text-sm text-slate-600">
                    {t('consent')}
                  </label>
                </div>

                <Button type="submit" className="w-full bg-[#2E3B7F] hover:bg-[#1e295f] transition-all duration-300 shadow-lg hover:shadow-xl" size="lg">
                  {t('send')}
                </Button>
              </form>
            </CardContent>
          </div>

          {/* Contact Info */}
          <div className="space-y-8 animate-in fade-in slide-in-from-right-8 duration-500">
            <div className="flex items-start gap-4 p-6 rounded-xl hover:bg-slate-50 transition-colors duration-300">
              <div className="w-12 h-12 rounded-lg bg-[#E0F2FE] flex items-center justify-center flex-shrink-0 text-[#2E3B7F]">
                <MapPin className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-semibold text-[#2E3B7F] mb-2 font-serif text-lg">{t('address')}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Ulica Exemple 44<br />
                  10000 Zagreb, Croatia
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-6 rounded-xl hover:bg-slate-50 transition-colors duration-300">
              <div className="w-12 h-12 rounded-lg bg-[#E0F2FE] flex items-center justify-center flex-shrink-0 text-[#2E3B7F]">
                <Phone className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-semibold text-[#2E3B7F] mb-2 font-serif text-lg">{t('phoneLabel')}</h3>
                <p className="text-slate-600 text-sm">+385 1 234 5678</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-6 rounded-xl hover:bg-slate-50 transition-colors duration-300">
              <div className="w-12 h-12 rounded-lg bg-[#E0F2FE] flex items-center justify-center flex-shrink-0 text-[#2E3B7F]">
                <Mail className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-semibold text-[#2E3B7F] mb-2 font-serif text-lg">{t('emailLabel')}</h3>
                <p className="text-slate-600 text-sm">info@fortyfouraccounting.hr</p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
