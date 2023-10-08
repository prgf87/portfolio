import './globals.css';

export const metadata = {
  title: "Pedro's Portfolio",
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
