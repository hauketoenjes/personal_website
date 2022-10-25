import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import Footer from "../components/footer";
import Header from "../components/header";
import "../styles/globals.css";

config.autoAddCss = false;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <body className="bg-neutral-900 text-neutral-100">
      <Header />
      {children}
      <Footer />
    </body>
  );
}
