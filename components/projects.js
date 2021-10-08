import ProjectCard from "./project_card";

export default function Projects() {
    return (
        <section className="my-32">
            <div className="container px-4 lg:px-12 2xl:px-56 mx-auto">
                <h1 className="font-bold text-3xl text-gray-900 text-center 2xl:px-56 mb-6">
                    Projekte
                </h1>

                <p className="text-gray-600 prose-lg text-center mb-10">
                    Eine Auswahl einiger meiner Projekte. Weitere Projekte kann man auf
                    <a className="text-blue-600" href="https://github.com/hauketoenjes"
                       target="_blank" rel="noreferrer"> GitHub</a> finden.
                </p>

                <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
                    <ProjectCard
                        imgSrc="/covidpass.png"
                        title="CovidPass"
                        description="Web-App zum Hinzufügen des digitalen Impfausweises zum Apple Wallet."
                        language="Next.js"
                        linkText="GitHub"
                        link="https://github.com/covidpass-org/covidpass"
                    />
                    <ProjectCard
                        imgSrc="/responsive_grid_list.png"
                        title="repsonsive_grid_list"
                        description="Pub.dev Dart package zum Erstellen von automatischen Rastern für verschieden Gerätegrößen."
                        language="Dart"
                        linkText="pub.dev"
                        link="https://pub.dev/packages/responsive_grid_list"
                    />
                    <ProjectCard
                        imgSrc="/ov_epaper.jfif"
                        title="ov_epaper"
                        description="CLI Tool zum herunterladen der Oldenburgischen Volkszeitung ohne Login oder Abo.
                                Das Tool funktioniert, weil die Zeitung hinter vorhersagbaren URL's als Bild gespeichert wird."
                        language="Dart"
                        linkText="GitHub"
                        link="https://github.com/hauketoenjes/ov_epaper"
                    />
                    <ProjectCard
                        imgSrc="/mplan_screenshot.png"
                        title="MPLAN Webinterface"
                        description="Webinterface zum Erstellen von Messdienerplänen."
                        language="Flutter"
                        linkText="GitHub"
                        link="https://github.com/hauketoenjes/messdienerplan_webinterface"
                    />
                    <ProjectCard
                        imgSrc="/mapi.png"
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