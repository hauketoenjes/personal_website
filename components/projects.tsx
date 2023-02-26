import Balancer from "react-wrap-balancer";
import covidpassImg from "../public/img/covidpass.png";
import mapiImg from "../public/img/mapi.png";
import mplanImg from "../public/img/mplan_screenshot.png";
import ovImg from "../public/img/ov_epaper.jpg";
import responsiveGridList from "../public/img/responsive_grid_list.png";
import ProjectCard from "./project-card";

export default function Projects() {
  return (
    <section className="my-32">
      <div className="container px-4 lg:px-12 2xl:px-56 mx-auto">
        <h1 className="font-bold text-3xl text-center 2xl:px-56 mb-6">
          Projekte
        </h1>

        <p className="text-neutral-400 prose-lg text-center mb-10">
          <Balancer>
            Eine Auswahl einiger meiner Projekte. Weitere Projekte kann man auf
            <a
              className="text-blue-500"
              href="https://github.com/hauketoenjes"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              GitHub
            </a>{" "}
            finden.
          </Balancer>
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          <ProjectCard
            imgSrc={covidpassImg}
            title="CovidPass"
            description="Web-App zum Hinzufügen des digitalen Impfausweises zum Apple Wallet."
            language="Next.js"
            hrefLabel="GitHub"
            href="https://github.com/covidpass-org/covidpass"
            ariaLabel="GitHub"
          />
          <ProjectCard
            imgSrc={responsiveGridList}
            title="responsive_grid_list"
            description="Pub.dev Dart package zum Erstellen von automatischen Rastern für verschieden Gerätegrößen."
            language="Dart"
            hrefLabel="pub.dev"
            href="https://pub.dev/packages/responsive_grid_list"
            ariaLabel="pub.dev"
          />
          <ProjectCard
            imgSrc={ovImg}
            title="ov_epaper"
            description="CLI Tool zum Herunterladen der Oldenburgischen Volkszeitung ohne Login oder Abo. Das Tool funktioniert, weil die Zeitung hinter vorhersagbaren URLs als Bild gespeichert wird."
            language="Dart"
            hrefLabel="GitHub"
            href="https://github.com/hauketoenjes/ov_epaper"
            ariaLabel="GitHub"
          />
          <ProjectCard
            imgSrc={mplanImg}
            title="MPLAN Webinterface"
            description="Webinterface zum Erstellen von Messdienerplänen."
            language="Flutter"
            hrefLabel="GitHub"
            href="https://github.com/hauketoenjes/messdienerplan_webinterface"
            ariaLabel="GitHub"
          />
          <ProjectCard
            imgSrc={mapiImg}
            title="MPLAN API"
            description="API zum Erstellen von Messdienerplänen"
            language="Python"
            hrefLabel="GitHub"
            href="https://github.com/hauketoenjes/messdienerplan_api"
            ariaLabel="GitHub"
          />
        </div>
      </div>
    </section>
  );
}
