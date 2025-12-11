import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full border-t border-zinc-800 bg-zinc-900">
      <div className="mx-auto max-w-7xl px-6 py-8">
        <div className="flex items-center justify-center">
          <div className="inline-flex items-center gap-3 rounded-full border border-mauve-700/40 bg-black/35 backdrop-blur px-4 py-2 text-xs text-zinc-300">
            <span className="text-zinc-200">Modding Haven</span>
            <span className="text-zinc-700">•</span>
            <Link href="/about" className="hover:text-zinc-200">About</Link>
            <span className="text-zinc-700">•</span>
            <Link href="/terms" className="hover:text-zinc-200">Terms</Link>
            <span className="text-zinc-700">•</span>
            <Link href="/privacy" className="hover:text-zinc-200">Privacy</Link>
            <span className="text-zinc-700">•</span>
            <span>© {new Date().getFullYear()}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
