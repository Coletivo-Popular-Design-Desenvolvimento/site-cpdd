import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

import Navbar from '@src/components/common/Navbar';
import Footer from '@src/components/common/Footer';
import PrelineScriptWrapper from '@components/common/PrelineScriptWrapper';

const geistSans = Geist({
    variable: '--font-geist-sans',
    subsets: ['latin'],
});

const geistMono = Geist_Mono({
    variable: '--font-geist-mono',
    subsets: ['latin'],
});

export const metadata: Metadata = {
    title: { default: 'CPDD - Coletivo Popular de Design e Desenvolvimento',
        template: "%s - CPDD",
    },
    description: 'Placeholder para a descrição do site do CPDD', // [] TODO: Adicionar uma descrição mais detalhada do site do CPDD
    openGraph: {
        title: 'CPDD - Coletivo Popular de Design e Desenvolvimento',
        description: 'Placeholder para a descrição do site do CPDD', // [] TODO: Adicionar uma descrição mais detalhada do site do CPDD
        url: 'https://www.cpdd.com.br',
        siteName: 'CPDD',
    },

};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang='pt-br'>
            <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
                <Navbar />
                <main>
                    {children}
                </main>
                <Footer />
                <PrelineScriptWrapper />
            </body>
        </html>
    );
}
