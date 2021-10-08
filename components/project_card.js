import Image from 'next/image'

export default function ProjectCard({imgSrc, title, description, language, link, linkText}) {
    return (
        <div className="bg-white shadow-md border border-gray-200 rounded-lg mb-5 flex flex-col">

            <div className="h-48 relative">
                <Image layout="fill" className="rounded-t-lg object-cover" src={imgSrc} alt="Projekt Bild"/>
            </div>

            <div className="p-5 flex-1 flex flex-col">
                <p className="text-gray-700">
                    {language}
                </p>

                <h2 className="text-gray-900 font-semibold text-2xl tracking-tight mb-2">
                    {title}
                </h2>

                <p className="prose text-gray-700 mb-3 flex-1">
                    {description}
                </p>

                <div className="flex items-center justify-end">
                    <a href={link}
                       rel="noreferrer"
                       target="_blank"
                       className="hover:bg-gray-100 font-semibold rounded-xl text-gray-900 px-4 py-2 text-center"
                    >
                        {linkText}
                    </a>
                </div>

            </div>
        </div>

    )
}