import Link from "next/link";

function IconVehicle() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden>
      <path d="M4 14l2-5h12l2 5v5h-2v-2H6v2H4v-5z" fill="currentColor" />
    </svg>
  );
}
function IconWeapon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden>
      <path d="M3 12h10l6-6 2 2-6 6v6h-2v-4H3v-4z" fill="currentColor" />
    </svg>
  );
}
function IconGraphics() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden>
      <circle cx="8" cy="12" r="3" fill="currentColor" />
      <circle cx="16" cy="12" r="3" fill="currentColor" />
    </svg>
  );
}
function IconCode() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden>
      <path d="M9 7L4 12l5 5M15 7l5 5-5 5" stroke="currentColor" strokeWidth="2" fill="none" />
    </svg>
  );
}
function IconTool() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden>
      <path d="M14 3l7 7-4 4-7-7 4-4zM3 21l7-7" stroke="currentColor" strokeWidth="2" fill="none" />
    </svg>
  );
}
function IconUser() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden>
      <path d="M12 12a4 4 0 100-8 4 4 0 000 8zm-7 9c0-4 3-6 7-6s7 2 7 6" fill="none" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}

const accentIconMap: Record<string, string> = {
  sapphire: "border-sapphire-700 text-sapphire-500",
  red: "border-red-700 text-red-500",
  peach: "border-peach-700 text-peach-500",
  blue: "border-blue-700 text-blue-500",
  teal: "border-teal-700 text-teal-500",
  rosewater: "border-rosewater-700 text-rosewater-500",
};
const accentArrowHoverMap: Record<string, string> = {
  sapphire: "group-hover:border-sapphire-700 group-hover:text-sapphire-500",
  red: "group-hover:border-red-700 group-hover:text-red-500",
  peach: "group-hover:border-peach-700 group-hover:text-peach-500",
  blue: "group-hover:border-blue-700 group-hover:text-blue-500",
  teal: "group-hover:border-teal-700 group-hover:text-teal-500",
  rosewater: "group-hover:border-rosewater-700 group-hover:text-rosewater-500",
};
const accentTileHoverMap: Record<string, string> = {
  sapphire: "hover:border-sapphire-700 hover:shadow-sapphire-500/20",
  red: "hover:border-red-700 hover:shadow-red-500/20",
  peach: "hover:border-peach-700 hover:shadow-peach-500/20",
  blue: "hover:border-blue-700 hover:shadow-blue-500/20",
  teal: "hover:border-teal-700 hover:shadow-teal-500/20",
  rosewater: "hover:border-rosewater-700 hover:shadow-rosewater-500/20",
};

function CategoryTile({ icon, name, count, href, accent }: { icon: React.ReactNode; name: string; count: string; href: string; accent: keyof typeof accentIconMap }) {
  return (
    <Link href={href} className={`group block border border-zinc-700 bg-zinc-900 p-5 transition-all hover:-translate-y-0.5 hover:bg-zinc-800/60 hover:shadow-lg ${accentTileHoverMap[accent]}`}>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className={`grid place-items-center h-9 w-9 border transition-colors ${accentIconMap[accent]} group-hover:bg-zinc-800/40`}>
            {icon}
          </div>
          <div>
            <div className="text-zinc-50 text-lg font-semibold transition-colors group-hover:text-zinc-100">{name}</div>
            <div className="text-zinc-500 text-sm transition-colors group-hover:text-zinc-300">{count} mods</div>
          </div>
        </div>
        <div className={`grid place-items-center h-8 w-8 border border-zinc-700 text-zinc-400 transition-all ${accentArrowHoverMap[accent]} group-hover:translate-x-0.5`}>
          <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden>
            <path d="M8 5l8 7-8 7" fill="none" stroke="currentColor" strokeWidth="2" />
          </svg>
        </div>
      </div>
    </Link>
  );
}

const categories = [
  { name: "Vehicles", count: 324, icon: <IconVehicle />, slug: "vehicles", accent: "sapphire" },
  { name: "Weapons", count: 187, icon: <IconWeapon />, slug: "weapons", accent: "red" },
  { name: "Graphics", count: 156, icon: <IconGraphics />, slug: "graphics", accent: "peach" },
  { name: "Scripting", count: 98, icon: <IconCode />, slug: "scripting", accent: "blue" },
  { name: "Tools", count: 76, icon: <IconTool />, slug: "tools", accent: "teal" },
  { name: "Characters", count: 213, icon: <IconUser />, slug: "characters", accent: "rosewater" },
];

export default function CategoriesPage() {
  return (
    <section className="relative w-full">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="flex items-end justify-between">
          <div>
            <h1 className="text-zinc-50 text-3xl sm:text-4xl font-bold">Browse by Category</h1>
            <div className="mt-3 h-px w-16 bg-sapphire-700" />
            <p className="mt-3 text-zinc-400">Choose a category to explore recommended and popular mods.</p>
          </div>
          <Link href="/mods" className="border border-sapphire-700 px-2 py-1 text-sm text-sapphire-500 hover:bg-sapphire-600 hover:text-black transition">View all mods →</Link>
        </div>

        

        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
          {categories.map((c) => (
            <CategoryTile key={c.slug} icon={c.icon} name={c.name} count={String(c.count)} href={`/categories/${c.slug}`} accent={c.accent} />
          ))}
        </div>

        <div className="mt-10">
          <div className="group border border-zinc-700 bg-zinc-900 px-4 py-3 flex items-center justify-between transition-all hover:border-mauve-700 hover:bg-zinc-800/60 hover:-translate-y-0.5 hover:shadow-md">
            <div className="flex items-center gap-3">
              <span className="text-zinc-300 text-xs transition-colors group-hover:text-zinc-200">Community</span>
              <span className="text-zinc-50 text-sm font-semibold transition-colors group-hover:text-mauve-600">Submit your mod</span>
              <span className="hidden sm:inline text-zinc-400 text-xs transition-colors group-hover:text-zinc-300">Publish in minutes and reach the community.</span>
            </div>
            <Link href="/submit" className="inline-block bg-mauve-600 px-3 py-1.5 text-xs font-medium text-black transition-all hover:bg-mauve-500 hover:-translate-y-0.5 hover:shadow-lg">Submit</Link>
          </div>
        </div>
      </div>
      
    </section>
  );
}
