"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavLinks() {
  const pathname = usePathname();
  const isActive = (href: string) => pathname.startsWith(href);

  return (
    <nav className="hidden md:flex items-center gap-4">
      <div className="relative group">
        <Link
          href="/mods"
          className={`inline-flex items-center gap-1 text-sm ${
            isActive("/mods") ? "text-mauve-600" : "text-zinc-300 hover:text-zinc-100"
          }`}
        >
          <span>Games</span>
          <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden>
            <path d="M6 9l6 6 6-6" fill="none" stroke="currentColor" strokeWidth="2" />
          </svg>
        </Link>
        <div className="absolute left-0 top-full hidden group-hover:block pt-2 z-50">
          <div className="border border-mauve-700 bg-black/60 backdrop-blur-md p-2 w-56 rounded-lg shadow-md shadow-purple-900/20">
            <Link href="/mods?game=gta3" className="flex items-center gap-2 px-2 py-1 text-xs text-zinc-300 hover:text-peach-500">
              <span className="grid place-items-center h-4 w-4 border border-peach-700 text-peach-500 rounded-sm">
                <svg viewBox="0 0 24 24" className="h-3 w-3" aria-hidden><circle cx="12" cy="12" r="3" fill="currentColor" /></svg>
              </span>
              GTA III
            </Link>
            <Link href="/mods?game=vc" className="flex items-center gap-2 px-2 py-1 text-xs text-zinc-300 hover:text-pink-500">
              <span className="grid place-items-center h-4 w-4 border border-pink-700 text-pink-500 rounded-sm">
                <svg viewBox="0 0 24 24" className="h-3 w-3" aria-hidden><circle cx="12" cy="12" r="3" fill="currentColor" /></svg>
              </span>
              GTA Vice City
            </Link>
            <Link href="/mods?game=sa" className="flex items-center gap-2 px-2 py-1 text-xs text-zinc-300 hover:text-green-500">
              <span className="grid place-items-center h-4 w-4 border border-green-500 text-green-500 rounded-sm">
                <svg viewBox="0 0 24 24" className="h-3 w-3" aria-hidden><circle cx="12" cy="12" r="3" fill="currentColor" /></svg>
              </span>
              GTA San Andreas
            </Link>
            <Link href="/mods?game=gta4" className="flex items-center gap-2 px-2 py-1 text-xs text-zinc-300 hover:text-blue-500">
              <span className="grid place-items-center h-4 w-4 border border-blue-700 text-blue-500 rounded-sm">
                <svg viewBox="0 0 24 24" className="h-3 w-3" aria-hidden><circle cx="12" cy="12" r="3" fill="currentColor" /></svg>
              </span>
              GTA IV
            </Link>
            <Link href="/mods?game=gta5" className="flex items-center gap-2 px-2 py-1 text-xs text-zinc-300 hover:text-sapphire-500">
              <span className="grid place-items-center h-4 w-4 border border-sapphire-700 text-sapphire-500 rounded-sm">
                <svg viewBox="0 0 24 24" className="h-3 w-3" aria-hidden><circle cx="12" cy="12" r="3" fill="currentColor" /></svg>
              </span>
              GTA V
            </Link>
            <div className="mt-1 h-px bg-zinc-800" />
            <Link href="/mods" className="block px-2 py-1 text-xs text-zinc-300 hover:text-purple-500">All games</Link>
          </div>
        </div>
      </div>
      <div className="relative group">
        <Link
          href="/mods"
          className={`inline-flex items-center gap-1 text-sm ${
            isActive("/mods") ? "text-mauve-600" : "text-zinc-300 hover:text-zinc-100"
          }`}
        >
          <span>Mods</span>
          <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden>
            <path d="M6 9l6 6 6-6" fill="none" stroke="currentColor" strokeWidth="2" />
          </svg>
        </Link>
        <div className="absolute left-0 top-full hidden group-hover:block pt-2 z-50">
          <div className="border border-mauve-700 bg-black/60 backdrop-blur-md p-2 w-48 rounded-lg shadow-md shadow-purple-900/20">
            <Link href="/mods?sort=popular" className="block px-2 py-1 text-xs text-zinc-300 hover:text-purple-500">Popular</Link>
            <Link href="/mods?sort=new" className="block px-2 py-1 text-xs text-zinc-300 hover:text-purple-500">New</Link>
            <Link href="/mods?sort=top" className="block px-2 py-1 text-xs text-zinc-300 hover:text-purple-500">Top Rated</Link>
          </div>
        </div>
      </div>

      <Link
        href="/categories"
        className={`text-sm ${
          isActive("/categories") ? "text-mauve-600" : "text-zinc-300 hover:text-zinc-100"
        }`}
      >
        Categories
      </Link>
    </nav>
  );
}
