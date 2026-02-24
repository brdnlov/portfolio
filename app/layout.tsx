import type { Metadata } from 'next';
import { IBM_Plex_Sans, Sora } from 'next/font/google';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Sidebar } from '../components/SideBar';
import PageFade from "../components/PageFade";
import './globals.css';

const plexSans = IBM_Plex_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: "--font-plex",
  display: "swap",
});

const sora = Sora({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: "--font-sora",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Brandon Lov - Front-End/ Web Developer",
  description: "Dashboard-inspired portfolio showcasing my work and skills as a front-end/web developer.",
};

export default function Rootlayout({
  children,
}: {
  children: React.ReactNode

}) {
  return (
    <html lang="en" className={`${plexSans.variable} ${sora.variable}`}>
      <body className="min-h-screen bg-background text-textPrimary antialiased">
        <div className="flex min-h-screen bg-background text-textPrimary">
          <Sidebar />
          <div className="relative flex-1 overflow-y-auto">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(61,214,140,0.12),_transparent_60%)]" />
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(120deg,_rgba(17,29,47,0.6),_transparent_45%,_rgba(17,29,47,0.8))]" />
            <PageFade>
              <div className="relative mx-auto max-w-6xl px-6 pb-24 pt-28 md:px-10 lg:px-16">
                {children}
              </div>
            </PageFade>
          </div>
        </div>
        <SpeedInsights />
      </body>
    </html>
  );
}