import type { Metadata } from 'next';
import './globals.css';
import Header from '../components/Header';

export const metadata: Metadata = {
  title: 'KidspireHub',
  description: 'Free, fun, and engaging worksheets for kids',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen bg-white text-gray-900 antialiased">
        <Header />
        {children}
      </body>
    </html>
  );
}


