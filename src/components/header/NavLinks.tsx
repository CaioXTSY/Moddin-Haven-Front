"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavLinks() {
  const pathname = usePathname();
  const isActive = (href: string) => pathname.startsWith(href);

  return (
    <nav className="hidden md:flex items-center gap-6">
      <div className="relative group">
        <Link
          href="/mods"
          className={`inline-flex items-center gap-1 text-sm ${
            isActive("/mods") ? "text-purple-500" : "text-zinc-300 hover:text-zinc-100"
          }`}
        >
          <span>Mods</span>
          <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden>
            <path d="M6 9l6 6 6-6" fill="none" stroke="currentColor" strokeWidth="2" />
          </svg>
        </Link>
        <div className="absolute left-0 top-full hidden group-hover:block pt-2 z-50">
          <div className="border border-zinc-700 bg-black p-2 w-48">
            <Link href="/mods?sort=popular" className="block px-2 py-1 text-xs text-zinc-300 hover:text-purple-500">Popular</Link>
            <Link href="/mods?sort=new" className="block px-2 py-1 text-xs text-zinc-300 hover:text-purple-500">New</Link>
            <Link href="/mods?sort=top" className="block px-2 py-1 text-xs text-zinc-300 hover:text-purple-500">Top Rated</Link>
          </div>
        </div>
      </div>

      <Link
        href="/categories"
        className={`text-sm ${
          isActive("/categories") ? "text-purple-500" : "text-zinc-300 hover:text-zinc-100"
        }`}
      >
        Categories
      </Link>
    </nav>
  );
}
