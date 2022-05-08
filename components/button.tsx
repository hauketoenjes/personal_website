export type ButtonProps = {
  href?: string;
  ariaLabel?: string;
  children: React.ReactNode;
};

export default function Button({ href, children, ariaLabel }: ButtonProps) {
  return (
    <a
      href={href}
      aria-label={ariaLabel}
      rel="noreferrer"
      target="_blank"
      className="custom-button"
    >
      {children}
    </a>
  );
}
