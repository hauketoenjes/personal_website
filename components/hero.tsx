import Image from "next/image";
import Balancer from "react-wrap-balancer";
import profilePicture from "../public/img/profile-image.jpeg";

export default function Hero() {
  return (
    <section className="my-16">
      <div className="container px-4 lg:px-12 2xl:px-56 mx-auto">
        <div className="mx-auto relative h-48 w-48 mb-10">
          <Image
            width={192}
            height={192}
            className="rounded-full object-cover"
            sizes="10rem"
            placeholder="blur"
            src={profilePicture}
            alt="Profilbild"
            priority
          />
        </div>

        <h1 className="font-bold text-4xl text-center 2xl:px-56 mb-4">
          Hauke Tönjes
        </h1>
        <p className="text-neutral-400 prose-lg text-center mb-10">
          <Balancer>
            Hi, ich bin Hauke, Flutter App Developer im{" "}
            <a
              className="text-blue-500"
              href="https://digihub.grimme.com/"
              target="_blank"
              rel="noreferrer"
            >
              GRIMME DigiHub
            </a>
            . In meiner Freizeit arbeite ich an privaten Projekten oder schaue
            Raketen beim Starten zu.
          </Balancer>
        </p>

        <div className="flex items-center justify-center">
          <a
            href="mailto:kontakt@htoenjes.de"
            rel="noreferrer"
            target="_blank"
            className="bg-blue-600 hover:bg-blue-700 font-semibold rounded-xl text-base px-6 py-3 text-center"
          >
            Kontakt
          </a>
        </div>
      </div>
    </section>
  );
}
