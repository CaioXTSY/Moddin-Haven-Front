import Link from "next/link";

export default function HeroActions() {
  return (
    <div className="flex items-center gap-4">
      <Link
        href="/mods"
        className="bg-emerald-600 px-4 py-2 text-sm font-medium text-black hover:bg-emerald-500"
      >
        Explore Mods
      </Link>
      <Link
        href="/submit"
        className="border border-emerald-700 px-4 py-2 text-sm font-medium text-zinc-200 hover:bg-zinc-800"
      >
        Submit Mod
      </Link>
    </div>
  );
}

