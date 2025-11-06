'use client';

import dynamic from 'next/dynamic';

const PrelineScript = dynamic(() => import('./PrelineScript.tsx'), {
    ssr: false,
});

export default function PrelineScriptWrapper() {
    return <PrelineScript />;
}
