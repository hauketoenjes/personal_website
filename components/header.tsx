import { IconProp } from "@fortawesome/fontawesome-svg-core";
import {
  faGithub,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import Button from "./button";

export default function Header() {
  return (
    <header className="body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link href="/" className="text-xl font-semibold custom-button">
          Hauke
        </Link>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-neutral-400 flex flex-wrap items-center text-base justify-center space-x-2">
          <Button ariaLabel="GitHub" href="https://github.com/hauketoenjes">
            <FontAwesomeIcon
              className="text-2xl align-middle"
              icon={faGithub as IconProp}
            />
          </Button>
          <Button ariaLabel="Twitter" href="https://twitter.com/hauketoenjes">
            <FontAwesomeIcon
              className="text-2xl align-middle"
              icon={faTwitter as IconProp}
            />
          </Button>
          <Button
            ariaLabel="LinkedIn"
            href="https://www.linkedin.com/in/hauke-t%C3%B6njes-139a8a16b/"
          >
            <FontAwesomeIcon
              className="text-2xl align-middle"
              icon={faLinkedin as IconProp}
            />
          </Button>
        </nav>
        <Link href="/imprint">
          <div className="font-semibold custom-button">Impressum</div>
        </Link>
      </div>
    </header>
  );
}
