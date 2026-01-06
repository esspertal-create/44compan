import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function TermsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 py-12">
        <div className="container mx-auto px-4 max-w-4xl">
          <Card>
            <CardHeader>
              <CardTitle className="text-3xl">Terms of Use / Uvjeti korištenja</CardTitle>
              <p className="text-muted-foreground">
                Last updated / Zadnje ažurirano: January 6, 2025
              </p>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h2 className="text-2xl font-semibold mb-3">1. Acceptance of Terms</h2>
                <p className="text-muted-foreground">
                  By accessing and using this website, you accept and agree to be bound by the terms and provisions of this agreement.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold mb-3">2. Use License</h2>
                <p className="text-muted-foreground">
                  Permission is granted to temporarily view the materials (information or software) on Forty Four Accounting's website for personal, non-commercial transitory viewing only.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold mb-3">3. Disclaimer</h2>
                <p className="text-muted-foreground">
                  The materials on Forty Four Accounting's website are provided on an 'as is' basis. Forty Four Accounting makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-semibold mb-3">4. Limitations</h2>
                <p className="text-muted-foreground">
                  In no event shall Forty Four Accounting or its suppliers be liable for any damages arising out of the use or inability to use the materials on this website.
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
