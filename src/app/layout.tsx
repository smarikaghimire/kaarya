import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/navbar/navbar';
import Footer from '@/components/footer/footer';
import '@fortawesome/fontawesome-free/css/all.min.css';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins',
});

export const metadata: Metadata = {
  title: 'Kaarya - Service Provider Platform',
  description: 'Connect with verified service providers in your area',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={poppins.variable}>
        <Navbar />
        {/* Add padding-top to account for fixed/absolute navbar */}
        <main className="pt-[80px]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}