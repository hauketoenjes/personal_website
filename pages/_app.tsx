import "../styles/globals.css";

import type { AppProps } from "next/app";
import { DefaultSeo } from "next-seo";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <DefaultSeo
        title="Hauke Tönjes"
        description="Persönliche Internetseite von Hauke Tönjes."
      />
      <Component {...pageProps} />
    </>
  );
}
