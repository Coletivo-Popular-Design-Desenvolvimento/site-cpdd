'use client';

import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

async function loadPreline() {
    return import('preline/preline.js');
}

export default function PrelineScript() {
    const path = usePathname();

    useEffect(() => {
        const initPreline = async () => {
            await loadPreline();
            
            // Inicializa imediatamente após o carregamento
            if (
                window.HSStaticMethods &&
                typeof window.HSStaticMethods.autoInit === 'function'
            ) {
                window.HSStaticMethods.autoInit();
            }
        }

        initPreline();
    }, []);

    useEffect(() => {
        // Re-inicializa quando a rota muda
        setTimeout(() => {
            if (
                window.HSStaticMethods &&
                typeof window.HSStaticMethods.autoInit === 'function'
            ) {
                window.HSStaticMethods.autoInit();
            }
        }, 100);
    }, [path]);

    return null;
}
