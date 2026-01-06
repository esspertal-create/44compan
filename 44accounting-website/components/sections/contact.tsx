'use client';

import { useTranslations } from 'next-intl';
import { Button } from '@/components/ui/button';
import { CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, MapPin, Phone, Loader2, CheckCircle2 } from 'lucide-react';
import { useState } from 'react';

export function Contact() {
  const t = useTranslations('contact');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
    consent: false,
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    setIsSuccess(true);
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: '',
      consent: false,
    });

    // Hide success message after 3 seconds
    setTimeout(() => {
      setIsSuccess(false);
    }, 3000);
  };

  return (
    <section id="contact" className="w-full py-24 bg-[#2E3B7F] relative overflow-hidden">
       {/* Dark Mode Background Decoration */}
       <div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-blue-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
       
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          
          {/* Left Side: Info & Text */}
          <div className="space-y-12 animate-in fade-in slide-in-from-left-8 duration-700">
             <div className="space-y-6 text-white">
                <span className="inline-block py-1 px-3 rounded-full bg-blue-500/20 text-blue-200 text-sm font-medium border border-blue-400/20">
                   {t('subtitle') || 'Get In Touch'}
                </span>
                <h2 className="text-4xl md:text-5xl lg:text-7xl font-bold tracking-tight leading-[0.95]">
                  {t('title')}
                </h2>
                <div className="w-24 h-1.5 rounded-full bg-gradient-to-r from-amber-400 to-orange-500" />
                <p className="text-xl text-blue-200/80 font-light max-w-lg leading-relaxed pt-4">
                   {t('transformFuture')}
                </p>
             </div>

             <div className="space-y-8">
                <div className="flex items-center gap-6 group cursor-pointer text-white">
                    <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0 group-hover:bg-white/10 group-hover:scale-105 transition-all">
                        <MapPin className="h-7 w-7 text-amber-400" />
                    </div>
                    <div>
                        <h3 className="font-bold text-lg mb-1">{t('address')}</h3>
                        <p className="text-blue-200 text-sm leading-relaxed opacity-80">
                            Ulica Exemple 44, 10000 Zagreb<br />Croatia
                        </p>
                    </div>
                </div>

                <div className="flex items-center gap-6 group cursor-pointer text-white">
                    <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0 group-hover:bg-white/10 group-hover:scale-105 transition-all">
                        <Phone className="h-7 w-7 text-amber-400" />
                    </div>
                    <div>
                        <h3 className="font-bold text-lg mb-1">{t('phoneLabel')}</h3>
                        <p className="text-blue-200 text-sm leading-relaxed opacity-80">+385 1 234 5678</p>
                    </div>
                </div>

                 <div className="flex items-center gap-6 group cursor-pointer text-white">
                    <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center flex-shrink-0 group-hover:bg-white/10 group-hover:scale-105 transition-all">
                        <Mail className="h-7 w-7 text-amber-400" />
                    </div>
                    <div>
                        <h3 className="font-bold text-lg mb-1">{t('emailLabel')}</h3>
                        <p className="text-blue-200 text-sm leading-relaxed opacity-80">info@fortyfouraccounting.hr</p>
                    </div>
                </div>
             </div>
          </div>

          {/* Right Side: Form (Glassmorphism) */}
          <div className="relative animate-in fade-in slide-in-from-right-8 duration-700 delay-200 mt-8 lg:mt-0">
             
             {/* Decorative Ring behind form */}
             <div className="absolute inset-0 bg-gradient-to-tr from-amber-500 to-blue-600 rounded-[2rem] blur-2xl opacity-20 -z-10 transform rotate-3 scale-105" />

             <div className="bg-white/95 backdrop-blur-xl p-8 md:p-10 rounded-[2rem] shadow-2xl border border-white/20 relative overflow-hidden">
                
                {/* Success Overlay - Smooth Animation */}
                {isSuccess && (
                  <div className="absolute inset-0 z-50 bg-white/95 backdrop-blur-sm flex flex-col items-center justify-center p-8 animate-in fade-in duration-500 fill-mode-forwards">
                     <div className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mb-6 animate-in zoom-in-50 duration-500 delay-150">
                        <CheckCircle2 className="w-12 h-12 text-green-600 animate-in slide-in-from-bottom-2 duration-700" />
                     </div>
                     <h3 className="text-3xl font-bold text-[#2E3B7F] mb-3 animate-in slide-in-from-bottom-4 duration-700 delay-300">
                        {t('successTitle') || 'Message Sent!'}
                     </h3>
                     <p className="text-slate-500 text-center max-w-xs animate-in slide-in-from-bottom-4 duration-700 delay-500">
                        {t('successMessage') || 'We will get back to you as soon as possible.'}
                     </p>
                  </div>
                )}

                <CardContent className="p-0">
                  <h3 className="text-2xl font-bold text-[#2E3B7F] mb-6 transition-opacity duration-300">
                    {t('formTitle')}
                  </h3>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="space-y-2">
                        <label className="text-sm font-semibold text-slate-700 uppercase tracking-wider text-[11px]">{t('personalDetails')}</label>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <Input
                                id="name"
                                placeholder={t('name')}
                                className="h-12 bg-slate-50 border-slate-200 focus:bg-white transition-all"
                                value={formData.name}
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                required
                            />
                             <Input
                                id="email"
                                type="email"
                                placeholder={t('email')}
                                className="h-12 bg-slate-50 border-slate-200 focus:bg-white transition-all"
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                required
                            />
                        </div>
                    </div>

                    <div className="space-y-2">
                         <Input
                            id="phone"
                            type="tel"
                            placeholder={t('phone')}
                            className="h-12 bg-slate-50 border-slate-200 focus:bg-white transition-all"
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        />
                         <Textarea
                            id="message"
                            placeholder={t('message')}
                            rows={4}
                            className="bg-slate-50 border-slate-200 focus:bg-white transition-all resize-none mt-4"
                            value={formData.message}
                            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                            required
                        />
                    </div>

                    <div className="flex items-start space-x-3 pt-2">
                      <input
                        type="checkbox"
                        id="consent"
                        required
                        checked={formData.consent}
                        onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
                        className="mt-1 w-4 h-4 rounded text-[#2E3B7F] focus:ring-[#2E3B7F] border-slate-300"
                      />
                      <label htmlFor="consent" className="text-xs text-slate-500 leading-normal">
                        {t('consent')}
                      </label>
                    </div>

                    <Button 
                      type="submit" 
                      disabled={isSubmitting}
                      className="w-full h-14 text-lg bg-[#2E3B7F] hover:bg-[#1e295f] text-white rounded-xl shadow-lg shadow-blue-900/20 active:scale-95 transition-all disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <div className="flex items-center gap-2">
                          <Loader2 className="h-5 w-5 animate-spin" />
                          <span>Sending...</span>
                        </div>
                      ) : (
                        t('send')
                      )}
                    </Button>
                  </form>
                </CardContent>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
}
