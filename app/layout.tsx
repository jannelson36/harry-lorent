import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Harry Rajula Lorent - Portfolio',
  description: 'Dynamic Entrepreneur & Customer Experience Expert',
  keywords: 'Harry Rajula, portfolio, customer service, business development, Kenya',
  authors: [{ name: 'Harry Rajula Lorent' }],
  openGraph: {
    title: 'Harry Rajula Lorent - Portfolio',
    description: 'Dynamic Entrepreneur & Customer Experience Expert',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}