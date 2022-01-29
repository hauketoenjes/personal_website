import Link from 'next/link'

export default function Footer() {
    return (
        <footer>
            <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
                <Link href="/" passHref className="flex title-font font-medium items-center mb-4 md:mb-0">
                    <span className="text-xl font-semibold">Hauke</span>
                </Link>
                <p className="text-sm text-neutral-400 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-neutral-400 sm:py-2 sm:mt-0 mt-4">©
                    2021 Hauke Tönjes
                </p>

            </div>
        </footer>
    )
}