import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { Metadata } from "next";
import Footer from "../components/footer";
import Header from "../components/header";
import "../styles/globals.css";

config.autoAddCss = false;

export const metadata: Metadata = {
  title: {
    default: "Hauke Tönjes",
    template: "%s | Hauke Tönjes",
  },
  keywords: [
    "Hauke Tönjes",
    "Webentwicklung",
    "Appentwicklung",
    "React",
    "Next.js",
    "Flutter",
  ],
  themeColor: "#171717",
  colorScheme: "dark",
  creator: "Hauke Tönjes",
  publisher: "Hauke Tönjes",
  description:
    "Persönliche Internetseite von Hauke Tönjes. Informationen zu Projekten und Kontakt.",
  manifest: "/site.webmanifest",
  icons: {
    icon: [
      {
        sizes: "32x32",
        url: "/favicon-32x32.png",
      },
      {
        sizes: "16x16",
        url: "/favicon-16x16.png",
      },
    ],
    apple: {
      sizes: "180x180",
      url: "/apple-touch-icon.png",
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de">
      <body className="bg-neutral-900 text-neutral-100">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
