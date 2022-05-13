import "../styles/globals.css";

import type { AppProps } from "next/app";
import { DefaultSeo } from "next-seo";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faTwitter,
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import Layout from "../components/layout";

library.add(faTwitter, faLinkedin, faGithub);

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <DefaultSeo
        title="Hauke Tönjes"
        description="Persönliche Internetseite von Hauke Tönjes."
      />
      <Component {...pageProps} />
    </Layout>
  );
}
