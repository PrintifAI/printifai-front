import './globals.css';
import './variables.css';

import type { Metadata } from 'next';
import { Header } from './components/Header/Header';

import { Footer } from './components/Footer/Footer';

import styles from './layout.module.css';
import { montserrat, ramabhadra, robotoFlex } from './fonts';
import clsx from 'clsx';
import { Providers } from './components/Providers';
import { Suspense } from 'react';

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
            <body
                className={clsx(
                    styles.body,
                    robotoFlex.variable,
                    montserrat.variable,
                    ramabhadra.variable,
                )}
            >
                <Providers>
                    <Header />
                    <Suspense>
                        <div className={styles.wrapper}>
                            <div className={styles.content}>{children}</div>
                        </div>
                        <Footer />
                    </Suspense>
                </Providers>
            </body>
        </html>
    );
}
