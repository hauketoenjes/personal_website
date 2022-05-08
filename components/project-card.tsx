import Image, { StaticImageData } from "next/image";
import Button from "./button";

export type ProjectCardProps = {
  title: string;
  description: string;
  imgSrc: StaticImageData;
  language: string;
  href: string;
  hrefLabel: string;
  ariaLabel: string;
};

export default function ProjectCard({
  title,
  description,
  imgSrc,
  language,
  href,
  hrefLabel,
  ariaLabel,
}: ProjectCardProps) {
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
          <Button href={href} ariaLabel={ariaLabel}>
            {hrefLabel}
          </Button>
        </div>
      </div>
    </div>
  );
}
