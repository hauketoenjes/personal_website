import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { NextSeo } from "next-seo";
import Footer from "../components/footer";
import Header from "../components/header";
import { NEXT_SEO_DEFAULT } from "../next-seo.config";
import "../styles/globals.css";

config.autoAddCss = false;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <NextSeo {...NEXT_SEO_DEFAULT} />
      </head>
      <body className="bg-neutral-900 text-neutral-100">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
