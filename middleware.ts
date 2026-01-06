import createMiddleware from 'next-intl/middleware';
import { locales } from './i18n';

export default createMiddleware({
  locales,
  defaultLocale: 'hr',
  localePrefix: 'as-needed',
  localeDetection: false // Disable browser language detection
});

export const config = {
  matcher: ['/', '/(hr|en)/:path*']
};
