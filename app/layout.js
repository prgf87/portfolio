import Head from 'next/head';
import Footer from './components/Footer';
import Header from './components/Header';
import './globals.css';
import Home from './page';

export const metadata = {
  title: 'Portfolio',
  description: 'Created by Pedro Ferreira',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
