import type { Metadata } from 'next';
import { SiteFooter, SiteHeader } from '../components/SiteShell';
import './globals.css';

export const metadata: Metadata = {
  title: 'CSS Cruise | CSS-PMS Online Mentorship',
  description:
    'CSS Cruise is an online CSS-PMS prep partner for courses, mentorship, mocks, and writing practice.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" data-theme="dark">
      <body>
        <SiteHeader />
        <main className="site-main">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
