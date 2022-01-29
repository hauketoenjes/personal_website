export default function Button({ link, children, ariaLabel }) {
    return (
        <a href={link}
            aria-label={ariaLabel}
            rel="noreferrer"
            target="_blank"
            className="hover:bg-neutral-800 font-semibold rounded-xl px-2 py-2 text-center cursor-pointer"
        >
            {children}
        </a>
    )
}