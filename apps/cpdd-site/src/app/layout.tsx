import type { Metadata } from 'next';
import './globals.css';

import Navbar from '@src/components/common/Navbar';
import Footer from '@src/components/common/Footer';
import PrelineScriptWrapper from '@components/common/PrelineScriptWrapper';
import SvgDefs from '@components/common/SvgDefs';

import { barlowCondensed } from './fonts';

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
        <html lang='en'>
            <body className={`${barlowCondensed.className} antialiased`}>
                <SvgDefs />
                {children}
                <PrelineScriptWrapper />
            </body>
        </html>
    );
}
