import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import { Toaster } from '@/components/ui/toaster';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Nexus AI - Intelligent Agent for Your Business',
  description: 'Nexus AI is an intelligent agent that helps businesses automate tasks, analyze data, and provide insights to improve productivity and decision-making.',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://nexus-ai.com',
    title: 'Nexus AI - Intelligent Agent for Your Business',
    description: 'Nexus AI is an intelligent agent that helps businesses automate tasks, analyze data, and provide insights to improve productivity and decision-making.',
    siteName: 'Nexus AI',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nexus AI - Intelligent Agent for Your Business',
    description: 'Nexus AI is an intelligent agent that helps businesses automate tasks, analyze data, and provide insights to improve productivity and decision-making.',
    creator: '@nexus_ai',
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
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}