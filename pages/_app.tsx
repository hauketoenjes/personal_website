import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";

import { DefaultSeo } from "next-seo";
import type { AppProps } from "next/app";
import Layout from "../components/layout";
import "../styles/globals.css";

config.autoAddCss = false;

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <DefaultSeo
        defaultTitle="Hauke Tönjes"
        titleTemplate="%s | Hauke Tönjes"
        description="Persönliche Internetseite von Hauke Tönjes. Informationen zu Projekten und Kontakt."
      />
      <Component {...pageProps} />
    </Layout>
  );
}
