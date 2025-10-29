import type { Metadata } from 'next';
import { Recursive } from 'next/font/google';
import Image from "next/image";
import './globals.css';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import Providers from '@/components/providers/providers';

// Font setup
const recursive = Recursive({
  subsets: ['latin-ext'],
  variable: '--font-recursive',
});

export const metadata: Metadata = {
  title: 'Fishcoin',
  description: 'Fishcoin - The digital fish revolution',
  icons: {
    icon: '/favicon/Fishcoin.png?v=2',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={recursive.variable}>
      <head>
        {/* Favicon setup */}
        <link rel="icon" href="/favicon/Fishcoin.png?v=2" type="image/png" />
        <link rel="apple-touch-icon" href="/favicon/Fishcoin.png?v=2" />
        <link rel="shortcut icon" href="/favicon/Fishcoin.png" type="image/png" />
      </head>

      <body className="bg-gray-50 text-gray-800 flex flex-col min-h-screen">
        {/* HEADER */}
        <header className="p-4 flex justify-center gap-8 bg-white shadow-sm sticky top-0 z-50">
          <a href="/" className="flex items-center gap-2 text-blue-600 font-semibold hover:underline">
            <Image
              src="/favicon/Fishcoin.png"  // 👉 đổi hình con cá sang hình Fishcoin
              alt="Fishcoin Logo"
              width={28}
              height={28}
              className="rounded-full"
            />
            Fishcoin
          </a>
          <a href="/san-pham"
      className="flex items-center gap-2 text-blue-600 font-semibold hover:underline">
            <Image
              src="/favicon/FISH.png"  // 👉 đổi hình con cá sang hìn>
              alt="FISH"
              width={28}
              height={28}
              className="rounded-full"
            />
            Fishcoin Products
          </a>
          <a href="/about" className="text-blue-600 font-semibold hover:underline">
            About
          </a>
        </header>
        {/* MAIN CONTENT */}
        <main className="flex-grow">{children}</main>
        {/* FOOTER */}
        <footer className="text-center text-gray-500 py-6 border-t">
          © 2025 Fishcoin 🐟
        </footer>
      </body>
    </html>
  );
}

