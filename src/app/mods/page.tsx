"use client";
import { Suspense, useMemo, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
 

type Game = "gta3" | "vc" | "sa" | "gta4" | "gta5";

const gameLabels: Record<Game, string> = {
  gta3: "GTA III",
  vc: "GTA Vice City",
  sa: "GTA San Andreas",
  gta4: "GTA IV",
  gta5: "GTA V",
};

const gameAccentMap: Record<Game, { tile: string; tag: string; chip: string; ring: string }> = {
  gta3: {
    tile: "hover:border-peach-700 hover:shadow-peach-500/20",
    tag: "border-peach-700 text-peach-500 group-hover:border-peach-700 group-hover:bg-peach-600 group-hover:text-black",
    chip: "border-peach-700 text-peach-500",
    ring: "from-peach-700/40 to-peach-500/20",
  },
  vc: {
    tile: "hover:border-pink-700 hover:shadow-pink-500/20",
    tag: "border-pink-700 text-pink-500 group-hover:border-pink-700 group-hover:bg-pink-700 group-hover:text-black",
    chip: "border-pink-700 text-pink-500",
    ring: "from-pink-700/40 to-pink-500/20",
  },
  sa: {
    tile: "hover:border-green-500 hover:shadow-green-500/20",
    tag: "border-green-500 text-green-500 group-hover:border-green-500 group-hover:bg-green-500 group-hover:text-black",
    chip: "border-green-500 text-green-500",
    ring: "from-green-600/40 to-green-500/20",
  },
  gta4: {
    tile: "hover:border-blue-700 hover:shadow-blue-500/20",
    tag: "border-blue-700 text-blue-500 group-hover:border-blue-700 group-hover:bg-blue-500 group-hover:text-black",
    chip: "border-blue-700 text-blue-500",
    ring: "from-blue-700/40 to-blue-500/20",
  },
  gta5: {
    tile: "hover:border-sapphire-700 hover:shadow-sapphire-500/20",
    tag: "border-sapphire-700 text-sapphire-500 group-hover:border-sapphire-700 group-hover:bg-sapphire-500 group-hover:text-black",
    chip: "border-sapphire-700 text-sapphire-500",
    ring: "from-sapphire-700/40 to-sapphire-500/20",
  },
};

type Mod = {
  title: string;
  author: string;
  category: string;
  downloads: number;
  rating: number;
  imageSrc: string;
  updatedAt: string;
  followers: number;
  tags: string[];
  game: Game;
};


const allMods: Mod[] = [
  { title: "Neon Streets", author: "Pablo", category: "graphics", downloads: 12500, rating: 4.8, imageSrc: "/img.png", updatedAt: "2025-11-10", followers: 2400, tags: ["Client", "Graphics"], game: "sa" },
  { title: "Rapid Fire", author: "Pablo", category: "weapons", downloads: 9800, rating: 4.6, imageSrc: "/img.png", updatedAt: "2025-10-02", followers: 1800, tags: ["Client", "Weapons"], game: "vc" },
  { title: "Turbo Drift", author: "Pablo", category: "vehicles", downloads: 152000, rating: 4.9, imageSrc: "/img.png", updatedAt: "2025-09-18", followers: 5200, tags: ["Client", "Vehicles"], game: "gta5" },
  { title: "Shader FX", author: "Pablo", category: "graphics", downloads: 62000, rating: 4.7, imageSrc: "/img.png", updatedAt: "2025-08-03", followers: 3100, tags: ["Client", "Graphics"], game: "gta4" },
  { title: "Classic Cars", author: "Pablo", category: "vehicles", downloads: 8700, rating: 4.5, imageSrc: "/img.png", updatedAt: "2025-07-21", followers: 1400, tags: ["Client", "Vehicles"], game: "gta3" },
  { title: "Creator Tools", author: "Pablo", category: "tools", downloads: 2200, rating: 4.2, imageSrc: "/img.png", updatedAt: "2025-11-01", followers: 600, tags: ["Client", "Tools"], game: "sa" },
  { title: "Street Style", author: "Pablo", category: "characters", downloads: 4500, rating: 4.4, imageSrc: "/img.png", updatedAt: "2025-10-15", followers: 900, tags: ["Client", "Characters"], game: "vc" },
  { title: "Cops AI", author: "Pablo", category: "scripting", downloads: 3100, rating: 4.3, imageSrc: "/img.png", updatedAt: "2025-10-28", followers: 750, tags: ["Client", "Scripting"], game: "gta4" },
];


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

function formatCount(n: number) {
  if (n >= 1_000_000) return `${(n / 1_000_000).toFixed(2)}M`;
  if (n >= 1000) return `${(n / 1000).toFixed(1)}K`;
  return String(n);
}

function formatUpdatedAt(iso: string) {
  const now = Date.now();
  const then = Date.parse(iso);
  const diff = Math.max(0, now - then);
  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  if (days < 1) return "Updated today";
  if (days === 1) return "Updated yesterday";
  if (days < 30) return `Updated ${days} days ago`;
  const months = Math.floor(days / 30);
  return `Updated ${months} month${months > 1 ? "s" : ""} ago`;
}

function toSlug(s: string) {
  return s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

function ModsContent() {
  const params = useSearchParams();
  const router = useRouter();

  const queryParam = params.get("query") ?? "";
  const selectedCategoryParam = params.get("category") ?? "";
  const sortParam = params.get("sort") ?? "popular";
  const viewParam = parseInt(params.get("view") ?? "20", 10) || 20;
  const pageParam = parseInt(params.get("page") ?? "1", 10) || 1;
  const gameParam = (params.get("game") ?? "").toLowerCase() as Game | "";
  const [catSearch, setCatSearch] = useState("");

  const categoryMeta = useMemo(() => ([
    { name: "Vehicles", slug: "vehicles", icon: <IconVehicle /> },
    { name: "Weapons", slug: "weapons", icon: <IconWeapon /> },
    { name: "Graphics", slug: "graphics", icon: <IconGraphics /> },
    { name: "Scripting", slug: "scripting", icon: <IconCode /> },
    { name: "Tools", slug: "tools", icon: <IconTool /> },
    { name: "Characters", slug: "characters", icon: <IconUser /> },
  ]), []);

  const counts = useMemo(() => {
    const map: Record<string, number> = {};
    for (const m of allMods) map[m.category] = (map[m.category] ?? 0) + 1;
    return map;
  }, []);

  const gameCounts = useMemo(() => {
    const map: Record<string, number> = {};
    for (const m of allMods) map[m.game] = (map[m.game] ?? 0) + 1;
    return map;
  }, []);

  const filteredCategories = useMemo(() => {
    const q = catSearch.trim().toLowerCase();
    const list = q ? categoryMeta.filter((c) => c.name.toLowerCase().includes(q)) : categoryMeta;
    return list;
  }, [catSearch, categoryMeta]);

  const filtered = useMemo(() => {
    let list = allMods;
    if (gameParam) {
      list = list.filter((m) => m.game === gameParam);
    }
    if (queryParam.trim()) {
      const ql = queryParam.toLowerCase();
      list = list.filter(
        (m) =>
          m.title.toLowerCase().includes(ql) ||
          m.author.toLowerCase().includes(ql) ||
          m.category.toLowerCase().includes(ql)
      );
    }
    if (selectedCategoryParam) {
      list = list.filter((m) => m.category === selectedCategoryParam);
    }
    if (sortParam === "popular") list = [...list].sort((a, b) => b.downloads - a.downloads);
    else if (sortParam === "top") list = [...list].sort((a, b) => b.rating - a.rating);
    else if (sortParam === "new") list = [...list].sort((a, b) => Date.parse(b.updatedAt) - Date.parse(a.updatedAt));
    return list;
  }, [gameParam, queryParam, selectedCategoryParam, sortParam]);

  const total = filtered.length;
  const pageSize = viewParam;
  const pageCount = Math.max(1, Math.ceil(total / pageSize));
  const page = Math.min(Math.max(pageParam, 1), pageCount);
  const start = (page - 1) * pageSize;
  const end = start + pageSize;
  const pageItems = filtered.slice(start, end);

  function applyParams(next: { query?: string; category?: string; sort?: string; view?: string; page?: string; game?: string }) {
    const p = new URLSearchParams({
      query: next.query ?? queryParam,
      category: next.category ?? selectedCategoryParam,
      sort: next.sort ?? sortParam,
      view: next.view ?? String(viewParam),
      page: next.page ?? String(page),
      game: next.game ?? (gameParam || ""),
    });
    router.replace(`/mods?${p.toString()}`);
  }

  return (
    <section className="relative w-full">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="flex items-end justify-between">
          <div>
            <h1 className="text-zinc-50 text-3xl sm:text-4xl font-bold">Browse Mods</h1>
            <div className="mt-3 h-px w-16 bg-purple-700" />
            <p className="mt-3 text-zinc-400">Search, filter by category, and sort results.</p>
            {gameParam && (
              <div className="mt-3 inline-flex items-center gap-2">
                <div className={`inline-flex items-center gap-2 border bg-black/40 px-2 py-1 text-xs rounded-full ${gameAccentMap[gameParam].chip}`}>
                  <svg viewBox="0 0 24 24" className="h-3 w-3" aria-hidden>
                    <circle cx="12" cy="12" r="3" fill="currentColor" />
                  </svg>
                  {gameLabels[gameParam]}
                </div>
                <button onClick={() => applyParams({ game: "", page: "1" })} className="text-xs text-zinc-400 hover:text-zinc-200">Clear</button>
              </div>
            )}
          </div>
          <Link href="/categories" className="border border-mauve-700 px-3 py-1.5 text-sm text-mauve-600 hover:bg-mauve-600 hover:text-black rounded-md transition">Categories →</Link>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4">
          <aside className="md:col-span-1 space-y-4">
            <div className="border border-zinc-700 bg-zinc-900 p-4 rounded-lg">
              <div className="flex items-center justify-between">
                <div className="text-zinc-300 text-sm">Game</div>
                {gameParam && (
                  <button onClick={() => { applyParams({ game: "", page: "1" }); }} className="text-xs text-purple-500">Clear</button>
                )}
              </div>
              <div className="mt-3 space-y-2">
                <button onClick={() => { applyParams({ game: "", page: "1" }); }} className={`group flex w-full items-center justify-between border px-3 py-2 text-sm rounded-md transition-all hover:-translate-y-0.5 hover:border-purple-700 ${gameParam === "" ? "border-purple-700 text-purple-500" : "border-zinc-700 text-zinc-300"}`}>
                  <div className="flex items-center gap-3">
                    <div className="grid place-items-center h-6 w-6 border border-zinc-700 text-purple-500 transition-colors group-hover:border-purple-700 group-hover:bg-purple-600 group-hover:text-black rounded-md">
                      <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden>
                        <path d="M8 5l8 7-8 7" fill="none" stroke="currentColor" strokeWidth="2" />
                      </svg>
                    </div>
                    <span className="transition-colors group-hover:text-purple-400">All games</span>
                  </div>
                  <span className="text-xs text-zinc-400 transition-colors group-hover:text-zinc-200">{allMods.length}</span>
                </button>
                {(["gta3", "vc", "sa", "gta4", "gta5"] as Game[]).map((g) => (
                  <button key={g} onClick={() => { applyParams({ game: g, page: "1" }); }} className={`group flex w-full items-center justify-between border px-3 py-2 text-sm rounded-md transition-all hover:-translate-y-0.5 hover:border-purple-700 ${gameParam === g ? "border-purple-700 text-purple-500" : "border-zinc-700 text-zinc-300"}`}>
                    <div className="flex items-center gap-3">
                      <div className={`grid place-items-center h-6 w-6 border ${gameParam === g ? "border-purple-700 text-purple-500" : "border-zinc-700 text-zinc-400"} transition-colors group-hover:border-purple-700 group-hover:bg-purple-600 group-hover:text-black rounded-md`}>
                        <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden>
                          <circle cx="12" cy="12" r="3" fill="currentColor" />
                        </svg>
                      </div>
                      <span className="transition-colors group-hover:text-purple-400">{gameLabels[g]}</span>
                    </div>
                    <span className="text-xs text-zinc-400 transition-colors group-hover:text-zinc-200">{gameCounts[g] ?? 0}</span>
                  </button>
                ))}
              </div>
            </div>
            <div className="border border-zinc-700 bg-zinc-900 p-4 rounded-lg">
              <div className="flex items-center justify-between">
                <div className="text-zinc-300 text-sm">Category</div>
                {selectedCategoryParam && (
                  <button onClick={() => { applyParams({ category: "" }); }} className="text-xs text-purple-500">Clear</button>
                )}
              </div>
              <div className="mt-3 flex items-center border border-zinc-700 bg-zinc-800 px-2 py-1 rounded-md transition-all hover:border-purple-700 hover:bg-zinc-800/80 hover:shadow-sm hover:shadow-purple-900/20">
                <svg viewBox="0 0 24 24" className="h-4 w-4 text-zinc-400" aria-hidden>
                  <path fill="currentColor" d="M10 4a6 6 0 104.472 10.07l4.229 4.229a1 1 0 101.414-1.415l-4.228-4.228A6 6 0 0010 4zm0 2a4 4 0 110 8 4 4 0 010-8z" />
                </svg>
                <input
                  defaultValue={catSearch}
                  onInput={(e) => setCatSearch((e.target as HTMLInputElement).value)}
                  placeholder="Search categories"
                  className="ml-2 w-full bg-transparent text-xs placeholder:text-zinc-500 focus:outline-none"
                />
              </div>
              <div className="mt-3 space-y-2">
                <button onClick={() => { applyParams({ category: "", page: "1" }); }} className={`group flex w-full items-center justify-between border px-3 py-2 text-sm rounded-md transition-all hover:-translate-y-0.5 hover:border-purple-700 ${selectedCategoryParam === "" ? "border-purple-700 text-purple-500" : "border-zinc-700 text-zinc-300"}`}>
                  <div className="flex items-center gap-3">
                    <div className="grid place-items-center h-6 w-6 border border-zinc-700 text-purple-500 transition-colors group-hover:border-purple-700 group-hover:bg-purple-600 group-hover:text-black rounded-md">
                      <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden>
                        <path d="M8 5l8 7-8 7" fill="none" stroke="currentColor" strokeWidth="2" />
                      </svg>
                    </div>
                    <span className="transition-colors group-hover:text-purple-400">All</span>
                  </div>
                  <span className="text-xs text-zinc-400 transition-colors group-hover:text-zinc-200">{allMods.length}</span>
                </button>
                {filteredCategories.map((c) => (
                  <button key={c.slug} onClick={() => { applyParams({ category: c.slug, page: "1" }); }} className={`group flex w-full items-center justify-between border px-3 py-2 text-sm rounded-md transition-all hover:-translate-y-0.5 hover:border-purple-700 ${selectedCategoryParam === c.slug ? "border-purple-700 text-purple-500" : "border-zinc-700 text-zinc-300"}`}>
                    <div className="flex items-center gap-3">
                      <div className={`grid place-items-center h-6 w-6 border transition-colors ${selectedCategoryParam === c.slug ? "border-purple-700 text-purple-500" : "border-zinc-700 text-zinc-400"} group-hover:border-purple-700 group-hover:bg-purple-600 group-hover:text-black rounded-md`}>
                        {c.icon}
                      </div>
                      <span className="transition-colors group-hover:text-purple-400">{c.name}</span>
                    </div>
                    <span className="text-xs text-zinc-400 transition-colors group-hover:text-zinc-200">{counts[c.slug] ?? 0}</span>
                  </button>
                ))}
              </div>
            </div>
          </aside>

          <div className="md:col-span-3">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <div className="group flex-1 flex items-center border border-zinc-700 bg-zinc-900 px-3 py-2 text-zinc-200 rounded-md transition-all hover:border-purple-700 hover:shadow-sm hover:shadow-purple-900/20">
                <svg aria-hidden viewBox="0 0 24 24" className="h-5 w-5 text-zinc-400">
                  <path fill="currentColor" d="M10 4a6 6 0 104.472 10.07l4.229 4.229a1 1 0 101.414-1.415l-4.228-4.228A6 6 0 0010 4zm0 2a4 4 0 110 8 4 4 0 010-8z" />
                </svg>
                <input
                  defaultValue={queryParam}
                  onBlur={(e) => applyParams({ query: e.target.value, page: "1" })}
                  onKeyDown={(e) => { if (e.key === "Enter") applyParams({ query: (e.target as HTMLInputElement).value, page: "1" }); }}
                  placeholder="Search mods..."
                  className="ml-2 w-full bg-transparent text-sm placeholder:text-zinc-500 focus:outline-none"
                />
              </div>
              <div className="shrink-0 flex items-center gap-3">
                <div className="flex items-center gap-2">
                  <label className="text-zinc-400 text-sm">Sort</label>
                  <select
                    value={sortParam}
                    onChange={(e) => { applyParams({ sort: e.target.value, page: "1" }); }}
                    className="border border-zinc-700 bg-zinc-900 px-2 py-2 text-sm text-zinc-200 rounded-md transition-colors hover:border-mauve-700"
                  >
                    <option value="popular">Popular</option>
                    <option value="top">Top Rated</option>
                    <option value="new">New</option>
                  </select>
                </div>
                <div className="flex items-center gap-2">
                  <label className="text-zinc-400 text-sm">View</label>
                  <select
                    value={String(viewParam)}
                    onChange={(e) => { applyParams({ view: e.target.value, page: "1" }); }}
                    className="border border-zinc-700 bg-zinc-900 px-2 py-2 text-sm text-zinc-200 rounded-md transition-colors hover:border-mauve-700"
                  >
                    <option value="10">10</option>
                    <option value="20">20</option>
                    <option value="30">30</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="mt-3 text-zinc-400 text-sm">{total} result(s)</div>

            <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {pageItems.map((m, i) => (
                <Link
                  key={`${m.title}-${m.author}-${i}`}
                  href={`/mods/${toSlug(m.title)}`}
                  className={`relative group border border-zinc-800 bg-zinc-900 transition-all hover:-translate-y-0.5 hover:shadow-lg ${gameAccentMap[m.game].tile} rounded-lg overflow-hidden`}
                >
                  <div className="relative h-48 sm:h-56 md:h-64">
                    <Image
                      src={m.imageSrc}
                      alt={m.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/70" />

                    <div className={`absolute left-4 top-4 inline-flex items-center gap-2 border bg-zinc-900/70 px-2 py-1 text-[11px] rounded-full ${gameAccentMap[m.game].tag}`}>
                      <svg viewBox="0 0 24 24" className="h-3 w-3" aria-hidden>
                        <circle cx="12" cy="12" r="3" fill="currentColor" />
                      </svg>
                      {gameLabels[m.game]}
                    </div>

                    

                    <div className="absolute inset-x-0 bottom-0 p-4">
                      <div className="flex items-end justify-between">
                        <div>
                          <div className="text-zinc-50 text-lg sm:text-xl font-semibold tracking-wide">{m.title}</div>
                          <div className="mt-1 text-zinc-400 text-xs sm:text-sm">by {m.author}</div>
                        </div>
                        <div className="grid place-items-center h-8 w-8 border border-purple-700 text-purple-500 bg-black/60 backdrop-blur transition-all group-hover:bg-purple-600 group-hover:text-black group-hover:-translate-y-0.5 rounded-full">
                          <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden>
                            <path d="M5 12h12M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" fill="none" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="px-4 py-3 flex flex-wrap items-center gap-2">
                    <div className="inline-flex items-center gap-2">
                      <div className="inline-flex items-center gap-1 border border-zinc-700 bg-zinc-800/60 px-2 py-1 text-xs text-zinc-200 rounded-full">
                        <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden>
                          <path d="M12 3v10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                          <path d="M8 9l4 4 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                          <rect x="4" y="17" width="16" height="3" rx="1" fill="none" stroke="currentColor" strokeWidth="2" />
                        </svg>
                        {formatCount(m.downloads)}
                      </div>
                      <div className="inline-flex items_center gap-1 border border-zinc-700 bg-zinc-800/60 px-2 py-1 text-xs text-purple-500 rounded-full">
                        <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden>
                          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" fill="currentColor" />
                        </svg>
                        {m.rating}
                      </div>
                    </div>
                    {[m.category, ...m.tags].map((t, idx) => (
                      <span
                        key={`${t}-${idx}`}
                        className="inline-flex items-center gap-1 border border-zinc-700 bg-zinc-800/60 px-2 py-1 text-[11px] text-zinc-300 rounded-full transition-colors group-hover:border-purple-700 group-hover:text-zinc-200"
                      >
                        <svg viewBox="0 0 24 24" className="h-3 w-3" aria-hidden>
                          <circle cx="12" cy="12" r="3" fill="currentColor" />
                        </svg>
                        {t}
                      </span>
                    ))}
                    <span className="ml-auto inline-flex items-center gap-1 text-zinc-400 text-xs">
                      <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden>
                        <path d="M12 6v6l4 2" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                        <circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" strokeWidth="2" />
                      </svg>
                      {formatUpdatedAt(m.updatedAt)}
                    </span>
                  </div>
                </Link>
              ))}
            </div>

            <div className="mt-8 flex items-center justify-between">
              <div className="text-zinc-400 text-sm">
                {total === 0 ? 0 : start + 1}–{Math.min(total, end)} of {total}
              </div>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => applyParams({ page: String(Math.max(1, page - 1)) })}
                  disabled={page <= 1}
                  className="grid place-items-center h-8 w-8 border border-zinc-700 text-zinc-300 disabled:opacity-50 rounded-md transition-all hover:border-purple-700 hover:-translate-y-0.5"
                >
                  <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden>
                    <path d="M16 5l-8 7 8 7" fill="none" stroke="currentColor" strokeWidth="2" />
                  </svg>
                </button>
                <div className="px-2 py-1 border border-zinc-700 text-xs text-zinc-300 rounded-md">{page}</div>
                <span className="text-xs text-zinc-500">/ {pageCount}</span>
                <button
                  onClick={() => applyParams({ page: String(Math.min(pageCount, page + 1)) })}
                  disabled={page >= pageCount}
                  className="grid place-items-center h-8 w-8 border border-zinc-700 text-zinc-300 disabled:opacity-50 rounded-md transition-all hover:border-purple-700 hover:-translate-y-0.5"
                >
                  <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden>
                    <path d="M8 5l8 7-8 7" fill="none" stroke="currentColor" strokeWidth="2" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>

      </div>
      
    </section>
  );
}

export default function ModsPage() {
  return (
    <Suspense>
      <ModsContent />
    </Suspense>
  );
}

