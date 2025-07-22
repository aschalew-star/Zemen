// app/layout.tsx
import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'TenderPlatform - Manage Tenders & Ads',
  description: 'A platform to create, manage, and promote tenders with ease.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>{children}</body>
    </html>
  );
}