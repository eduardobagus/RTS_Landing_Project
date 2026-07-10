import './globals.css';
import { LanguageProvider } from '@/context/LanguageContext';
import Providers from '@/components/Providers';

export const metadata = {
  title: 'PT Rajawali Telekomunikasi Selular',
  description: 'PT Rajawali Telekomunikasi Selular - Perusahaan nasional di bidang teknologi, telekomunikasi, dan ekosistem pembayaran digital.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <head>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
      </head>
      <body>
        <Providers>
          <LanguageProvider>
            {children}
          </LanguageProvider>
        </Providers>
      </body>
    </html>
  );
}