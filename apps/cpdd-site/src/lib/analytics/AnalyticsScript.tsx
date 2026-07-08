import { GoogleAnalytics, sendGAEvent } from "@next/third-parties/google";

const gaId = process.env.NEXT_PUBLIC_GA_ID
const isGAEnabled = !!gaId;

export function AnalyticsScript () {
  if (!isGAEnabled) {
    return null;
  }
  return <GoogleAnalytics gaId={gaId}/>;
}

export function sendAnalyticsEvent (...params: Parameters<typeof sendGAEvent>) {
  if (!isGAEnabled) {
    return;
  }

  sendGAEvent(...params);
}
