import Link from "next/link";

export default function HeroActions() {
  return (
    <div className="flex items-center gap-4">
      <Link
        href="/mods"
        className="bg-purple-600 px-4 py-2 text-sm font-medium text-black transition-all hover:bg-purple-500 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-purple-900/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-600 rounded-md"
      >
        Explore Mods
      </Link>
      <Link
        href="/submit"
        className="border border-purple-700 px-4 py-2 text-sm font-medium text-zinc-200 transition-all hover:border-purple-600 hover:bg-purple-600 hover:text-black hover:-translate-y-0.5 hover:shadow-lg hover:shadow-purple-900/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-600 rounded-md"
      >
        Submit Mod
      </Link>
    </div>
  );
}
