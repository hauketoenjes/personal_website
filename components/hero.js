import Image from 'next/image'

export default function Hero() {
    return (
        <section className="my-16">
            <div className="container px-4 lg:px-12 2xl:px-56 mx-auto">

                <div className="mx-auto relative h-48 w-48 mb-10">
                    <Image layout="fill" className="object-cover rounded-full" src="/profile-image.jpg"
                           alt="Profilbild"/>
                </div>

                <h1 className="font-bold text-4xl text-gray-900 text-center 2xl:px-56 mb-4">
                    Hauke Tönjes
                </h1>
                <p className="text-gray-600 prose-lg text-center mb-10">
                    Hi, ich bin Hauke, Student an der Hochschule Hannover und 22 Jahre alt. In meiner Freizeit
                    arbeite ich gerne an privaten Projekten, schaue Raketen beim Starten zu oder bastle an UI
                    und UX Lösungen rum.
                </p>

                <div className="flex items-center justify-center">
                    <a href="mailto:kontakt@htoenjes.de" rel="noreferrer" target="_blank"
                       className=" text-white bg-blue-600 hover:bg-blue-700 font-semibold rounded-xl text-base px-6 py-3 text-center">
                        Kontakt
                    </a>
                </div>

            </div>
        </section>
    )
}