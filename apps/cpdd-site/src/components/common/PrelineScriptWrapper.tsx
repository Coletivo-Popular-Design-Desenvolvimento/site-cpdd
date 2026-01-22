'use client';

import dynamic from 'next/dynamic';

const PrelineScript = dynamic(() => import('@cpdd/ui').then((mod) => mod.PrelineScript), {
  ssr: false,
});

export default function PrelineScriptWrapper() {
  return <PrelineScript />;
}
