'use client';

import { useTranslations, useLocale } from 'next-intl';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useState, useEffect } from 'react';
import Link from 'next/link';

export function CookieBanner() {
  const t = useTranslations('cookie');
  const locale = useLocale();
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      setShowBanner(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookie-consent', 'accepted');
    setShowBanner(false);
  };

  const handleDecline = () => {
    localStorage.setItem('cookie-consent', 'declined');
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6">
      <Card className="max-w-4xl mx-auto shadow-lg border-2">
        <CardContent className="pt-6">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div className="flex-1">
              <p className="text-sm text-muted-foreground">
                {t('message')}{' '}
                <Link
                  href={`/${locale}/privacy`}
                  className="text-primary hover:underline font-medium"
                >
                  {t('learnMore')}
                </Link>
              </p>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" onClick={handleDecline} size="sm">
                {t('decline')}
              </Button>
              <Button onClick={handleAccept} size="sm">
                {t('accept')}
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
