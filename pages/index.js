import Layout from "../components/layout";
import Hero from "../components/hero";
import Projects from "../components/projects";
import { NextSeo } from "next-seo";

export default function Home() {
  return (
    <Layout>
      <NextSeo
        title="Hauke Tönjes"
        description="Persönliche Internetseite von Hauke Tönjes."
      />
      <main>
        <Hero />
        <Projects />
      </main>
    </Layout>
  );
}
