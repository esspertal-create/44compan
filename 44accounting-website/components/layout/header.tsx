'use client';

import { useState, useEffect } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import { usePathname, useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Globe, Menu, X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export function Header() {
  const t = useTranslations('nav');
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);

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
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? 'border-b border-slate-200 bg-white/98 backdrop-blur-md shadow-sm'
          : 'border-b border-slate-100 bg-white/95 backdrop-blur'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link
            href={`/${locale}`}
            className="flex items-center space-x-2 hover:opacity-80 transition-opacity"
          >
            <div className="relative h-14 w-52">
              <Image
                src="/logo.svg"
                alt="Forty Four Accounting"
                fill
                className="object-contain"
                priority
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`relative px-4 py-2 text-sm lg:text-base font-medium transition-all duration-200 group ${
                  activeSection === item.id
                    ? 'text-[#2E3B7F]'
                    : 'text-slate-600 hover:text-[#2E3B7F]'
                }`}
              >
                {item.label}
                <span
                  className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 bg-gradient-to-r from-[#F59E0B] via-[#10B981] to-[#3B82F6] transition-all duration-200 ${
                    activeSection === item.id ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}
                />
              </button>
            ))}
          </nav>

          {/* Right side: Language Switcher + Mobile Menu */}
          <div className="flex items-center gap-3">
            {/* Language Switcher */}
            <Button
              variant="outline"
              size="sm"
              onClick={toggleLanguage}
              className="flex items-center space-x-2 border-slate-300 hover:bg-[#2E3B7F] hover:text-white hover:border-[#2E3B7F] transition-all"
            >
              <Globe className="h-4 w-4" />
              <span className="font-medium">{locale === 'hr' ? 'EN' : 'HR'}</span>
            </Button>

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden"
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t py-4 animate-in slide-in-from-top-5 duration-300">
            <nav className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`px-4 py-3 text-left text-base font-medium transition-colors rounded-lg ${
                    activeSection === item.id
                      ? 'bg-[#2E3B7F] text-white'
                      : 'hover:bg-slate-50'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
