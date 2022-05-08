import Header from "./header";
import Footer from "./footer";

export type LayoutProps = {
  children: React.ReactNode;
};

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
