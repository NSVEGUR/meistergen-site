import Link from "next/link";

interface FooterLinkProps
  extends React.DetailedHTMLProps<
    React.AnchorHTMLAttributes<HTMLAnchorElement>,
    HTMLAnchorElement
  > {
  children: React.ReactNode;
}

export function FooterLink({ href, children, ...props }: FooterLinkProps) {
  if (!href) return null;
  return (
    <Link
      href={href}
      {...props}
      className="text-sm text-gray-500 no-underline hover:text-gray-700 hover:dark:text-white transition"
    >
      {children}
    </Link>
  );
}
