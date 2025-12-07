import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full border-t border-zinc-800 bg-black">
      <div className="mx-auto max-w-7xl px-6 py-10">
        <div className="flex flex-col items-center gap-6">
          <div className="flex items-center">
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
