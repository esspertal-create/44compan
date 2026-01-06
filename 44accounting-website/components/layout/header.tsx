'use client';

import { useState, useEffect } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import { usePathname, useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Globe, Menu, X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { cn } from '@/lib/utils';

export function Header() {
  const t = useTranslations('nav');
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  const isHomePage = pathname === `/${locale}` || pathname === '/';

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleLanguage = () => {
    const newLocale = locale === 'hr' ? 'en' : 'hr';
    const path = pathname.replace(`/${locale}`, `/${newLocale}`);
    router.push(path);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
      setMobileMenuOpen(false);
    }
  };

  const navItems = [
    { id: 'home', label: t('home') },
    { id: 'about', label: t('about') },
    { id: 'services', label: t('services') },
    { id: 'contact', label: t('contact') },
  ];

  return (
    <>
      <header
        className={cn(
          "fixed top-0 inset-x-0 z-50 transition-all duration-500 ease-in-out px-4 md:px-6 py-4",
          scrolled ? "pt-4" : "pt-6"
        )}
      >
        <div 
          className={cn(
            "max-w-7xl mx-auto rounded-full transition-all duration-500 flex items-center justify-between px-6 md:px-8",
            scrolled 
              ? "bg-white/80 backdrop-blur-xl border border-white/20 shadow-[0_8px_30px_rgb(0,0,0,0.04)] h-16" 
              : "bg-transparent h-20"
          )}
        >
          {/* Logo - Adaptive */}
          <Link
            href={`/${locale}`}
            className="flex items-center gap-2 group relative z-50"
          >
            <div className={cn(
               "relative transition-all duration-500",
               scrolled ? "h-10 w-40" : "h-14 w-56"
            )}>
              <Image
                src="/logo.svg"
                alt="Forty Four Accounting"
                fill
                className="object-contain object-left"
                priority
              />
            </div>
          </Link>

          {/* Desktop Navigation - Centered Pill */}
          {isHomePage && (
            <nav className="hidden md:flex items-center gap-1 bg-white/50 backdrop-blur-sm p-1.5 rounded-full border border-white/20 shadow-sm mx-auto absolute left-1/2 -translate-x-1/2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={cn(
                    "relative px-5 py-2 text-sm font-medium transition-all duration-300 rounded-full",
                    activeSection === item.id
                      ? "text-white bg-[#2E3B7F] shadow-lg shadow-blue-900/10"
                      : "text-slate-600 hover:text-[#2E3B7F] hover:bg-slate-50/80"
                  )}
                >
                  {item.label}
                </button>
              ))}
            </nav>
          )}

          {/* Right side: Language & CTA */}
          <div className="flex items-center gap-4 relative z-50">
            {/* Language Switcher - Minimalist */}
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-1.5 text-sm font-medium text-slate-600 hover:text-[#2E3B7F] transition-colors px-3 py-2 rounded-full hover:bg-slate-100/50"
            >
              <Globe className="h-4 w-4" />
              <span className="uppercase tracking-wider text-xs">{locale === 'hr' ? 'EN' : 'HR'}</span>
            </button>

            {/* Mobile Menu Toggle */}
            {isHomePage && (
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-2 rounded-full hover:bg-slate-100 transition-colors"
              >
                {mobileMenuOpen ? (
                  <X className="h-6 w-6 text-slate-800" />
                ) : (
                  <Menu className="h-6 w-6 text-slate-800" />
                )}
              </button>
            )}
          </div>
        </div>
      </header>

      {/* Mobile Navigation Overlay - Modern & Clean */}
      <div 
        className={cn(
          "fixed inset-0 z-40 bg-white/95 backdrop-blur-3xl transition-all duration-500 md:hidden flex flex-col pt-32 px-6",
          mobileMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-full pointer-events-none"
        )}
      >
          <nav className="flex flex-col gap-6">
            {navItems.map((item, i) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-3xl font-serif font-medium text-slate-800 text-left py-2 border-b border-slate-100 last:border-0 flex justify-between items-center group"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <span className="group-hover:text-[#2E3B7F] transition-colors">{item.label}</span>
                <span className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all -translate-x-4 group-hover:translate-x-0">
                   <ArrowRight className="h-5 w-5 text-[#2E3B7F]" />
                </span>
              </button>
            ))}
          </nav>

          <div className="mt-auto pb-12 space-y-6">
              <div className="p-6 bg-slate-50 rounded-2xl">
                 <p className="text-sm text-slate-500 mb-2">Need help?</p>
                 <p className="text-lg font-bold text-[#2E3B7F]">info@fortyfouraccounting.hr</p>
              </div>
          </div>
      </div>
       {/* Import ArrowRight for mobile menu */}
       <div className="hidden"></div>
    </>
  );
}

// Import at the top was missing ArrowRight locally for this file
import { ArrowRight } from 'lucide-react';
