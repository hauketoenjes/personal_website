import { config, library } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import {
  faGithub,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { DefaultSeo } from "next-seo";
import type { AppProps } from "next/app";
import Layout from "../components/layout";
import "../styles/globals.css";

config.autoAddCss = false;
library.add(faTwitter, faLinkedin, faGithub);

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
