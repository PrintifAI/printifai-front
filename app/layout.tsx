import type { Metadata } from 'next';
import { Roboto_Flex } from 'next/font/google';
import './globals.css';
import { Header } from './components/Header/Header';

import styles from './page.module.css';
import { Footer } from './components/Footer/Footer';

const inter = Roboto_Flex({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'PrintifAI',
    description: 'Закажи футболку с принтом сгенерированным нейросетью',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="ru">
            <body className={inter.className}>
                <Header />
                <div className={styles.content}>{children}</div>
                <Footer />
            </body>
        </html>
    );
}
