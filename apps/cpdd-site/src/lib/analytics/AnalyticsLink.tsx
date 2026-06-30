'use client';

import type { ComponentProps } from "react";
import { sendAnalyticsEvent } from "./AnalyticsScript";

interface Props extends ComponentProps<'a'> {
  analyticsParams: {
    ctaLocation: string,
    eventName: string,
  },
}

export function AnalyticsLink ({ analyticsParams, ...props }: Props) {
  return (
    <a
      {...props}
      onClick={(e) => {
        sendAnalyticsEvent('event', analyticsParams.eventName, {
          cta_loc: analyticsParams.ctaLocation,
          cta_text: e.currentTarget.innerText.trim(),
          link_url: e.currentTarget.href,
          link_domain: e.currentTarget.hostname,
          page_location: location.href,
        });
        props.onClick?.(e);
      }}
    >
      {props.children}
    </a>
  );
}
