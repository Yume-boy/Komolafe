import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import ThemeProvider from '@/components/ThemeProvider';
import { Toaster } from '@/components/ui/toaster';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Marvellous Komolafe | Frontend Developer & Cybersecurity Enthusiast',
  icons: {
    icon: '/vite.svg',
  },
  description: 'B.Sc. Biochemistry graduate turned Frontend Developer skilled in React, Tailwind, and Bootstrap. Cybersecurity enthusiast specializing in PenTesting and GRC.',
  keywords: ['Frontend Developer', 'React', 'Tailwind CSS', 'Cybersecurity', 'PenTesting', 'GRC', 'Web Development'],
  authors: [{ name: 'Marvellous Komolafe' }],
  openGraph: {
    title: 'Marvellous Komolafe | Frontend Developer & Cybersecurity Enthusiast',
    description: 'Enhancing user experience through seamless UI. Frontend Developer & Cybersecurity professional.',
    type: 'website',
    locale: 'en_US',
    siteName: 'Marvellous Komolafe Portfolio',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Marvellous Komolafe | Frontend Developer',
    description: 'Frontend Developer & Cybersecurity Enthusiast',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider>
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
