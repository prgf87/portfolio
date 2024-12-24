import './globals.css';

export const metadata = {
  title: 'Global Web Systems - Web Developer',
  description: 'Created by Pedro Ferreira',
  icons: {
    icon: '/gwslogo-round.png',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
