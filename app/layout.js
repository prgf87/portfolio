import './globals.css';

export const metadata = {
  title: 'Global Web Systems - Web Developer',
  description: 'Created by Pedro Ferreira',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/gwslogo.png" sizes="any" />
      </head>
      <body>{children}</body>
    </html>
  );
}
