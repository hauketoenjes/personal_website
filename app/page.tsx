import DocumentTitle from "../components/document-title";
import Hero from "../components/hero";
import Projects from "../components/projects";

export default function Page() {
  return (
    <>
      <DocumentTitle title="Hauke Tönjes" />
      <Hero />
      <Projects />
    </>
  );
}
