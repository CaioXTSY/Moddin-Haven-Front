import Link from "next/link";

const links = [
  { href: "/browse", label: "Browse" },
  { href: "/categories", label: "Categories" },
];

export default function NavLinks() {
  return (
    <nav className="hidden md:flex items-center gap-6">
      {links.map((l) => (
        <Link
          key={l.href}
          href={l.href}
          className="text-sm text-zinc-300 hover:text-zinc-100"
        >
          {l.label}
        </Link>
      ))}
    </nav>
  );
}

