import Layout from "../components/layout";
import {NextSeo} from "next-seo";

export default function Impressum() {
    return (
        <Layout>

            <NextSeo
                title="Hauke Tönjes"
                description="Persönliche Internetseite von Hauke Tönjes."
            />

            <main>
                <div className="md:w-3/5 mx-auto px-5 leading-relaxed space-y-6 mt-5">
                    <div className="my-10">
                        <h1 className="font-semibold md:text-5xl text-3xl">Impressum</h1>
                    </div>

                    <article className="prose max-w-none">
                        <h2>Angaben gemäß § 5 TMG</h2>
                        <p>Hauke Tönjes</p>

                        <h2>Kontakt</h2>
                        <p>
                            <a href="mailto:impressum@htoenjes.de"
                               target="_blank">
                                impressum@htoenjes.de
                            </a>
                        </p>

                        <h2>Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV</h2>
                        <p>Hauke Tönjes</p>

                        <h2>Verbraucherstreitbeilegung/Universalschlichtungsstelle</h2>
                        <p>
                            Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer
                            Verbraucherschlichtungsstelle teilzunehmen.
                        </p>

                        <h3>Haftung für Inhalte</h3>
                        <p>Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten
                            nach
                            den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als
                            Diensteanbieter
                            jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu
                            überwachen
                            oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.</p>
                        <p>Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den
                            allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch
                            erst
                            ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei
                            Bekanntwerden
                            von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.</p>
                        <h3>Haftung für Links</h3>
                        <p>Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen
                            Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr
                            übernehmen.
                            Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber
                            der
                            Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf
                            mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der
                            Verlinkung
                            nicht erkennbar.</p>
                        <p>Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete
                            Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von
                            Rechtsverletzungen werden wir derartige Links umgehend entfernen.</p>
                        <h3>Urheberrecht</h3>
                        <p>Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen
                            dem
                            deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der
                            Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen
                            Zustimmung
                            des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für
                            den
                            privaten, nicht kommerziellen Gebrauch gestattet.</p>
                        <p>Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die
                            Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche
                            gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden,
                            bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen
                            werden
                            wir derartige Inhalte umgehend entfernen.</p>

                        <p>Quelle: <a className="no-underline hover:underline"
                                      href="https://www.e-recht24.de">https://www.e-recht24.de</a>
                        </p>

                    </article>
                </div>
            </main>
        </Layout>
    )
}
