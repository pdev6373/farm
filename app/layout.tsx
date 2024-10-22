import type { Metadata } from 'next';
import './globals.css';
import { Rubik } from 'next/font/google';

const rubik = Rubik({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'GOA FARM - Your Premier Destination for Fish Produce',
  description:
    'Discover the highest quality of fishes, farmed with care and innovation. Dive into our world of fish farming with our exceptional services.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${rubik.className} antialiased`}>{children}</body>
    </html>
  );
}
