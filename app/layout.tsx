import '@/app/ui/global.css';
import { Metadata } from 'next';
import Header from './ui/header';

export const metadata: Metadata = {
  title: {
    template: '%s | The Move Makers',
    default: 'The Move Makers',
  },
  description: 'The top entertainment marketplace',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-black">
        <Header />
        {children}
      </body>
    </html>
  );
}
