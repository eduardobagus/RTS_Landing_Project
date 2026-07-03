import './globals.css';

export const metadata = {
  title: 'PT Rajawali Telekomunikasi Selular',
  description: 'PT Rajawali Telekomunikasi Selular - Perusahaan nasional di bidang teknologi, telekomunikasi, dan ekosistem pembayaran digital.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  );
}