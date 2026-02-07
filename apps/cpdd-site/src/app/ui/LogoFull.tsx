import type { ComponentProps } from "react";

export default function LogoFull (props: Omit<ComponentProps<'img'>, 'src' | 'alt'>) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img {...props} src="/logo.png" alt=""/>
  );
}
