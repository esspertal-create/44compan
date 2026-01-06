import { useTranslations } from 'next-intl';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function PrivacyPage() {
  const t = useTranslations('privacy');

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 py-12 pt-32">
        <div className="container mx-auto px-4 max-w-4xl">
          <Card>
            <CardHeader>
              <CardTitle className="text-3xl">{t('title')}</CardTitle>
              <p className="text-muted-foreground">
                {t('lastUpdated')}
              </p>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <p className="text-muted-foreground">
                  {t('intro')}
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold mb-3">{t('section1Title')}</h2>
                <p className="text-muted-foreground">
                  {t('section1Content')}
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold mb-3">{t('section2Title')}</h2>
                <p className="text-muted-foreground">
                  {t('section2Content')}
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold mb-3">{t('section3Title')}</h2>
                <p className="text-muted-foreground">
                  {t('section3Content')}
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}
