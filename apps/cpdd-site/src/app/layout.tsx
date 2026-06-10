import type { Metadata } from 'next';
import '../styles/globals.css';

import Navbar from '@src/components/common/Navbar';
import Footer from '@src/components/common/Footer';
import PrelineScriptWrapper from '@components/common/PrelineScriptWrapper';
import SvgDefs from '@components/common/SvgDefs';

import { barlow, barlowCondensed, slabo27px } from './fonts';

export const metadata: Metadata = {
    title: {
        default: 'CPDD - Coletivo Popular de Design e Desenvolvimento',
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
        <html lang='en' className={`${slabo27px.variable} ${barlow.variable} ${barlowCondensed.variable}`}>
            <body className={`antialiased`}>
                <SvgDefs />
                <Navbar />
                <main className="bg-cpdd-orange-500">{children}</main>
                <Footer />
                <PrelineScriptWrapper />
            </body>
        </html>
    );
}
