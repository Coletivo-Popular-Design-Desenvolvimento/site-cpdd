'use client';

import { useEffect } from 'react';

async function loadPreline() {
    return import('preline/preline.js');
}

function getHSStaticMethods() {
    return (globalThis as typeof globalThis & {
        HSStaticMethods?: {
            autoInit: () => void;
        };
    }).HSStaticMethods;
}

export default function PrelineScript() {
    useEffect(() => {
        const initPreline = async () => {
            try {
                await loadPreline();
            } catch (error) {
                console.error('Failed to load Preline:', error);
                return;
            }

            // Inicializa imediatamente após o carregamento
            const hs = getHSStaticMethods();
            if (hs && typeof hs.autoInit === 'function') {
                hs.autoInit();
            }
        }

        initPreline();
    }, []);

    useEffect(() => {
        // Re-inicializa quando a rota muda
        let cancelled = false;
        let retryTimeout: ReturnType<typeof setTimeout> | null = null;
        const routeChangeEvent = 'cpdd:route-change';

        const initPrelineUI = () => {
            if (cancelled) return;

            const hs = getHSStaticMethods();
            if (hs && typeof hs.autoInit === 'function') {
                hs.autoInit();
            } else {
                retryTimeout = setTimeout(initPrelineUI, 50);
            }
        };

        const handleRouteChange = () => initPrelineUI();

        const originalPushState = history.pushState;
        const originalReplaceState = history.replaceState;

        history.pushState = function (...args) {
            const result = originalPushState.apply(this, args);
            globalThis.dispatchEvent(new Event(routeChangeEvent));
            return result;
        };

        history.replaceState = function (...args) {
            const result = originalReplaceState.apply(this, args);
            globalThis.dispatchEvent(new Event(routeChangeEvent));
            return result;
        };

        globalThis.addEventListener('popstate', handleRouteChange);
        globalThis.addEventListener(routeChangeEvent, handleRouteChange);

        initPrelineUI();

        return () => {
            cancelled = true;
            if (retryTimeout) {
                clearTimeout(retryTimeout);
            }

            history.pushState = originalPushState;
            history.replaceState = originalReplaceState;

            globalThis.removeEventListener('popstate', handleRouteChange);
            globalThis.removeEventListener(routeChangeEvent, handleRouteChange);
        };
    }, []);

    return null;
}
