export default function Header() {
    return (
        <header className="text-gray-900 body-font">
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
                   href="/">
                    <span className="text-xl">Hauke</span>
                </a>
                <nav
                    className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400 flex flex-wrap items-center text-base justify-center">

                    <a aria-label="GitHub" className="block flex items-center hover:text-gray-700 mr-5"
                       href="https://github.com/hauketoenjes">
                        <svg width="24" height="24" aria-hidden="true" focusable="false" data-prefix="fab"
                             data-icon="github" className="svg-inline--fa fa-github fa-w-16" role="img"
                             xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512">
                            <path fill="currentColor"
                                  d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z">
                            </path>
                        </svg>
                    </a>
                    <a aria-label="Twitter" className="block flex items-center hover:text-gray-700 mr-5"
                       href="https://twitter.com/hauketoenjes">
                        <svg width="24" height="24" aria-hidden="true" focusable="false" data-prefix="fab"
                             data-icon="twitter" className="svg-inline--fa fa-twitter fa-w-16" role="img"
                             xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                            <path fill="currentColor"
                                  d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z">
                            </path>
                        </svg>
                    </a>
                    <a aria-label="GitLab" className="block flex items-center hover:text-gray-700"
                       href="https://gitlab.com/hauketoenjes">
                        <svg width="24" height="24" aria-hidden="true" focusable="false" data-icon="gitlab"
                             role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                            <path fill="currentColor"
                                  d="M105.2 24.9c-3.1-8.9-15.7-8.9-18.9 0L29.8 199.7h132c-.1 0-56.6-174.8-56.6-174.8zM.9 287.7c-2.6 8 .3 16.9 7.1 22l247.9 184-226.2-294zm160.8-88l94.3 294 94.3-294zm349.4 88l-28.8-88-226.3 294 247.9-184c6.9-5.1 9.7-14 7.2-22zM425.7 24.9c-3.1-8.9-15.7-8.9-18.9 0l-56.6 174.8h132z">
                            </path>
                        </svg>
                    </a>
                </nav>
                <a className="mt-3 hover:bg-gray-100 rounded-xl px-4 py-2" href="/impressum">Impressum</a>
            </div>
        </header>
    )
}