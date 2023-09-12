import { Inter } from 'next/font/google';
import styles from './page.module.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Tatiana & Baptiste',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Insérez vos balises meta, liens CSS, scripts, etc. ici */}
      </head>
      <body className={`${inter.className} ${styles.customBackground}`}>{children}</body>
    </html>
  );
}
