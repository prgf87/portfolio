import Head from 'next/head';
import './globals.css';

export const metadata = {
  title: "Pedro's Portfolio",
  description: 'Created by Pedro Ferreira',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
