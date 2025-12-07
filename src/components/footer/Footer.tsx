import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full border-t border-zinc-800 bg-black">
      <div className="mx-auto max-w-7xl px-6 py-10">
        <div className="flex flex-col items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="grid place-items-center h-6 w-6 border border-emerald-700 text-emerald-500">
              <svg viewBox="0 0 24 24" className="h-3 w-3" aria-hidden>
                <path d="M4 12h16" stroke="currentColor" strokeWidth="2" />
                <path d="M8 6l4 4-4 4" stroke="currentColor" strokeWidth="2" />
              </svg>
              </div>
            <span className="text-zinc-200 text-sm">Modding Haven</span>
          </div>
          <nav className="flex items-center gap-6 justify-center">
            <Link href="/about" className="text-sm text-zinc-400 hover:text-zinc-200">About</Link>
            <Link href="/contact" className="text-sm text-zinc-400 hover:text-zinc-200">Contact</Link>
            <Link href="/terms" className="text-sm text-zinc-400 hover:text-zinc-200">Terms</Link>
            <Link href="/privacy" className="text-sm text-zinc-400 hover:text-zinc-200">Privacy</Link>
          </nav>
        </div>
        <div className="mt-6 text-center text-zinc-500 text-xs">© {new Date().getFullYear()} Modding Haven. All rights reserved.</div>
      </div>
    </footer>
  );
}
