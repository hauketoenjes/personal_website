import Image from "next/image";
import Button from "./button";

export default function ProjectCard({
  imgSrc,
  title,
  description,
  language,
  link,
  linkText,
}) {
  return (
    <div className="shadow-md border border-neutral-700 rounded-lg mb-5 flex flex-col">
      <div className="h-48 relative">
        <Image
          layout="fill"
          placeholder="blur"
          className="rounded-t-lg object-cover"
          src={imgSrc}
          alt="Projekt Bild"
        />
      </div>

      <div className="p-5 flex-1 flex flex-col">
        <p className="text-neutral-400">{language}</p>

        <h2 className="font-semibold text-2xl tracking-tight mb-2">{title}</h2>

        <p className="prose text-neutral-400 mb-3 flex-1">{description}</p>

        <div className="flex items-center justify-end">
          <Button link={link}>{linkText}</Button>
        </div>
      </div>
    </div>
  );
}
