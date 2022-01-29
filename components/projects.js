import ProjectCard from "./project_card";
import covidpassImg from '../public/covidpass.png'
import responsiveGridList from '../public/responsive_grid_list.png'
import ovImg from '../public//ov_epaper.jpg'
import mplanImg from '../public/mplan_screenshot.png'
import mapiImg from '../public/mapi.png'

export default function Projects() {
    return (
        <section className="my-32">
            <div className="container px-4 lg:px-12 2xl:px-56 mx-auto">
                <h1 className="font-bold text-3xl text-center 2xl:px-56 mb-6">
                    Projekte
                </h1>

                <p className="text-neutral-400 prose-lg text-center mb-10">
                    Eine Auswahl einiger meiner Projekte. Weitere Projekte kann man auf
                    <a className="text-blue-600" href="https://github.com/hauketoenjes"
                        target="_blank" rel="noreferrer"> GitHub</a> finden.
                </p>

                <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
                    <ProjectCard
                        imgSrc={covidpassImg}
                        title="CovidPass"
                        description="Web-App zum Hinzufügen des digitalen Impfausweises zum Apple Wallet."
                        language="Next.js"
                        linkText="GitHub"
                        link="https://github.com/covidpass-org/covidpass"
                    />
                    <ProjectCard
                        imgSrc={responsiveGridList}
                        title="repsonsive_grid_list"
                        description="Pub.dev Dart package zum Erstellen von automatischen Rastern für verschieden Gerätegrößen."
                        language="Dart"
                        linkText="pub.dev"
                        link="https://pub.dev/packages/responsive_grid_list"
                    />
                    <ProjectCard
                        imgSrc={ovImg}
                        title="ov_epaper"
                        description="CLI Tool zum herunterladen der Oldenburgischen Volkszeitung ohne Login oder Abo.
                                Das Tool funktioniert, weil die Zeitung hinter vorhersagbaren URL's als Bild gespeichert wird."
                        language="Dart"
                        linkText="GitHub"
                        link="https://github.com/hauketoenjes/ov_epaper"
                    />
                    <ProjectCard
                        imgSrc={mplanImg}
                        title="MPLAN Webinterface"
                        description="Webinterface zum Erstellen von Messdienerplänen."
                        language="Flutter"
                        linkText="GitHub"
                        link="https://github.com/hauketoenjes/messdienerplan_webinterface"
                    />
                    <ProjectCard
                        imgSrc={mapiImg}
                        title="MPLAN API"
                        description="API zum Erstellen von Messdienerplänen"
                        language="Python"
                        linkText="GitHub"
                        link="https://github.com/hauketoenjes/messdienerplan_api"
                    />
                </div>
            </div>
        </section>
    )
}