'use client';

import { useTranslations, useLocale } from 'next-intl';
import Link from 'next/link';

export function Footer() {
  const t = useTranslations('footer');
  const locale = useLocale();

  return (
    <footer className="w-full border-t border-[#1e295f] bg-[#2E3B7F] text-slate-200">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {/* Company Info */}
          <div className="flex flex-col items-center">
            <h3 className="font-semibold text-lg mb-4 text-white">{t('companyName')}</h3>
            <div className="space-y-2 text-sm text-slate-300">
              <p>{t('address')}</p>
              <p>{t('oib')}</p>
              <p>{t('registrationNumber')}</p>
            </div>
          </div>

          {/* Legal Info */}
          <div className="flex flex-col items-center">
            <h3 className="font-semibold text-lg mb-4 text-white">{t('legalInfo')}</h3>
            <div className="space-y-2 text-sm text-slate-300">
              <p>{t('shareCapital')}</p>
              <p>{t('court')}</p>
            </div>
          </div>

          {/* Links */}
          <div className="flex flex-col items-center">
            <h3 className="font-semibold text-lg mb-4 text-white">{t('quickLinks')}</h3>
            <div className="space-y-2 text-sm">
              <Link
                href={`/${locale}/privacy`}
                className="block text-slate-300 hover:text-white transition-colors"
              >
                {t('privacy')}
              </Link>
              <Link
                href={`/${locale}/terms`}
                className="block text-slate-300 hover:text-white transition-colors"
              >
                {t('terms')}
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-slate-700/50 text-center text-sm text-slate-400">
          <p>{t('rights')}</p>
        </div>
      </div>
    </footer>
  );
}
