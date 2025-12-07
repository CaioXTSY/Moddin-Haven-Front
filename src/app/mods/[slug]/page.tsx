"use client";
import { use, useState } from "react";
import Link from "next/link";
import Image from "next/image";

type ModDetail = {
  title: string;
  author: string;
  category: string;
  downloads: number;
  rating: number;
  followers: number;
  updatedAt: string;
  version?: string;
  imageSrc: string;
  gallerySrcs?: string[];
  tags: string[];
  description: string;
  requirements?: string[];
  reviews?: number;
  changelog?: { version: string; notes: string }[];
};

const mods: Record<string, ModDetail> = {
  "pablo-mod": {
    title: "Pablo Mod",
    author: "pablo",
    category: "vehicles",
    downloads: 12500,
    rating: 4.8,
    followers: 2400,
    updatedAt: "2025-11-10",
    version: "1.4.2",
    imageSrc: "/img.png",
    gallerySrcs: ["/img.png", "/img.png", "/img.png"],
    tags: ["Client", "Vehicles"],
    description: "Performance-focused vehicle pack with enhanced physics and new car models.",
    requirements: ["Windows 10/11", "GPU dedicada recomendada", "8GB RAM mínimo", "20GB livre"],
    reviews: 320,
    changelog: [{ version: "v1.4.2", notes: "Ajustes de física e novos modelos." }],
  },
  "neon-streets": {
    title: "Neon Streets",
    author: "maria",
    category: "graphics",
    downloads: 8900,
    rating: 4.7,
    followers: 1200,
    updatedAt: "2025-11-22",
    version: "2.1.0",
    imageSrc: "/img.png",
    gallerySrcs: ["/img.png", "/img.png", "/img.png"],
    tags: ["Client", "Graphics"],
    description: "Stylized night neon visuals with optimized shaders and reflections.",
    requirements: ["Windows 10/11", "RTX recomendado", "16GB RAM mínimo", "50GB espaço"],
    reviews: 856,
    changelog: [{ version: "v2.1.0", notes: "Adicionado suporte para RTX 4090." }],
  },
  "rapid-fire": {
    title: "Rapid Fire",
    author: "joao",
    category: "weapons",
    downloads: 6200,
    rating: 4.5,
    followers: 3100,
    updatedAt: "2025-12-01",
    version: "3.0.0",
    imageSrc: "/img.png",
    gallerySrcs: ["/img.png", "/img.png"],
    tags: ["Client", "Weapons"],
    description: "Rebalanced firearms and new firing modes for competitive play.",
    requirements: ["Windows 10/11", "GPU média", "8GB RAM"],
    reviews: 410,
    changelog: [{ version: "v3.0.0", notes: "Novo sistema de recoil e balanceamento." }],
  },
  "turbo-drift": {
    title: "Turbo Drift",
    author: "ana",
    category: "vehicles",
    downloads: 7100,
    rating: 4.6,
    followers: 900,
    updatedAt: "2025-11-28",
    version: "1.2.0",
    imageSrc: "/img.png",
    gallerySrcs: ["/img.png"],
    tags: ["Client", "Vehicles"],
    description: "Drift tuning pack with configurable traction and torque curves.",
    requirements: ["Windows 10/11", "GPU dedicada", "8GB RAM"],
    reviews: 210,
    changelog: [{ version: "v1.2.0", notes: "Ajustes finos de tração e torque." }],
  },
  "shader-fx": {
    title: "Shader FX",
    author: "luis",
    category: "graphics",
    downloads: 3500,
    rating: 4.4,
    followers: 600,
    updatedAt: "2025-10-30",
    version: "0.9.5",
    imageSrc: "/img.png",
    gallerySrcs: ["/img.png"],
    tags: ["Client", "Graphics"],
    description: "Lightweight shader suite for post-processing and color grading.",
    requirements: ["Windows 10/11", "GPU compatível", "6GB RAM"],
    reviews: 150,
    changelog: [{ version: "v0.9.5", notes: "Correções e melhoria de performance." }],
  },
  "creator-tools": {
    title: "Creator Tools",
    author: "daniel",
    category: "tools",
    downloads: 9800,
    rating: 4.9,
    followers: 1500,
    updatedAt: "2025-12-02",
    version: "5.1.0",
    imageSrc: "/img.png",
    gallerySrcs: ["/img.png", "/img.png"],
    tags: ["Client", "Tools"],
    description: "Utilities to package, publish, and manage mods efficiently.",
    requirements: ["Windows 10/11", "Qualquer GPU", "4GB RAM"],
    reviews: 620,
    changelog: [{ version: "v5.1.0", notes: "Novos templates e pipeline otimizado." }],
  },
  "street-style": {
    title: "Street Style",
    author: "ivy",
    category: "characters",
    downloads: 5400,
    rating: 4.6,
    followers: 1100,
    updatedAt: "2025-11-08",
    version: "2.0.3",
    imageSrc: "/img.png",
    gallerySrcs: ["/img.png"],
    tags: ["Client", "Characters"],
    description: "Character customization set with urban-themed outfits and accessories.",
    requirements: ["Windows 10/11", "GPU média", "8GB RAM"],
    reviews: 290,
    changelog: [{ version: "v2.0.3", notes: "Novas roupas e correções." }],
  },
  "cops-ai": {
    title: "Cops AI",
    author: "rafa",
    category: "scripting",
    downloads: 4600,
    rating: 4.3,
    followers: 800,
    updatedAt: "2025-11-18",
    version: "1.0.0",
    imageSrc: "/img.png",
    gallerySrcs: ["/img.png"],
    tags: ["Client", "Scripting"],
    description: "AI behavior overhaul for smarter police pursuit and tactics.",
    requirements: ["Windows 10/11", "GPU compatível", "8GB RAM"],
    reviews: 180,
    changelog: [{ version: "v1.0.0", notes: "Primeiro release estável." }],
  },
};

function formatCount(n: number) {
  if (n >= 1_000_000) return `${(n / 1_000_000).toFixed(2)}M`;
  if (n >= 1000) return `${(n / 1000).toFixed(1)}K`;
  return String(n);
}

function formatDateBR(iso: string) {
  const d = new Date(iso);
  const dd = String(d.getDate()).padStart(2, "0");
  const mm = String(d.getMonth() + 1).padStart(2, "0");
  const yyyy = String(d.getFullYear());
  return `${dd}/${mm}/${yyyy}`;
}

export default function ModDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const mod = mods[slug];
  const rawVersions = [mod?.version, ...((mod?.changelog ?? []).map((c) => c.version))].filter(Boolean) as string[];
  const versionList = Array.from(new Set(rawVersions)).slice(0, 10);
  const [versionOpen, setVersionOpen] = useState(false);
  const [selectedVersion, setSelectedVersion] = useState<string>(versionList[0] ?? "1.0.0");

  if (!mod) {
    return (
      <section className="relative w-full">
        <div className="mx-auto max-w-7xl px-6 py-24">
          <div className="border border-zinc-700 bg-zinc-900 p-8 text-center">
            <div className="text-zinc-50 text-xl font-semibold">Mod não encontrado</div>
            <p className="mt-2 text-zinc-400 text-sm">Verifique o link ou navegue pelos mods.</p>
            <div className="mt-4">
              <Link href="/mods" className="border border-emerald-700 px-3 py-1.5 text-sm text-emerald-500 hover:bg-emerald-600 hover:text-black transition">Voltar para mods →</Link>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="relative w-full">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <Link href="/mods" className="inline-flex items-center gap-2 text-sm text-emerald-500 hover:text-emerald-400">
          <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden>
            <path d="M15 19l-7-7 7-7" fill="none" stroke="currentColor" strokeWidth="2" />
          </svg>
          Back to Browse
        </Link>

        <div className="mt-4 grid grid-cols-1 gap-6 md:grid-cols-3">
          <div className="md:col-span-2 space-y-6">
            <div className="border border-zinc-700 bg-zinc-900 overflow-hidden rounded max-w-[680px]">
              <div className="relative w-full" style={{ aspectRatio: "16 / 9" }}>
                <Image src={mod.imageSrc} alt={mod.title} fill sizes="(min-width: 768px) 60vw, 100vw" className="object-cover" />
              </div>
            </div>

            <div>
              <div className="text-zinc-50 text-xl font-semibold">Gallery</div>
              <div className="mt-3 grid grid-cols-3 gap-3 max-w-[680px]">
                {(mod.gallerySrcs ?? [mod.imageSrc]).slice(0, 6).map((src, i) => (
                  <div key={`${src}-${i}`} className="relative w-full overflow-hidden rounded border border-zinc-700 cursor-pointer">
                    <div className="absolute inset-0 opacity-0 transition-opacity hover:opacity-10 bg-emerald-500" />
                    <div className="relative" style={{ aspectRatio: "16 / 9" }}>
                      <Image src={src} alt={`${mod.title} ${i + 1}`} fill className="object-cover" />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div className="text-zinc-50 text-xl font-semibold">About</div>
              <p className="mt-3 text-zinc-300 text-sm">{mod.description}</p>
            </div>

            <div>
              <div className="text-zinc-50 text-xl font-semibold">Changelog</div>
              <div className="mt-3 border border-zinc-700 bg-zinc-900 p-4 text-sm text-zinc-300">
                {(mod.changelog ?? []).slice(0, 1).map((c) => (
                  <div key={c.version}>{c.version} - {c.notes}</div>
                ))}
              </div>
            </div>
          </div>

          <aside className="space-y-4">
            <div>
              <div className="text-zinc-50 text-3xl sm:text-4xl font-bold">{mod.title}</div>
              <div className="mt-1 text-zinc-400 text-sm">by {mod.author}</div>
            </div>

            <div className="border border-zinc-700 bg-zinc-900 p-4 space-y-4">
              <div className="flex items-center justify-between">
                <div className="inline-flex items-center gap-2 text-zinc-50">
                  <svg viewBox="0 0 24 24" className="h-5 w-5 text-emerald-500" aria-hidden>
                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" fill="currentColor" />
                  </svg>
                  {mod.rating.toFixed(1)}
                </div>
                <div className="text-zinc-400 text-sm">{mod.reviews ?? 0} reviews</div>
              </div>
              <div className="flex items-center justify-between">
                <div className="inline-flex items-center gap-2 text-zinc-300">
                  <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden>
                    <path d="M12 3v10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    <path d="M8 9l4 4 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <rect x="4" y="17" width="16" height="3" rx="1" fill="none" stroke="currentColor" strokeWidth="2" />
                  </svg>
                  {formatCount(mod.downloads)} downloads
                </div>
                <div className="inline-flex items-center gap-2 text-zinc-300">
                  <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden>
                    <path d="M12 6v6l4 2" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                    <circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" strokeWidth="2" />
                  </svg>
                  {formatDateBR(mod.updatedAt)}
                </div>
              </div>
              <div className="h-px bg-zinc-800" />
              <div className="flex items-center gap-2 w-full">
                <div className="relative flex-1">
                  <button onClick={() => setVersionOpen((v) => !v)} className={`inline-flex w-full items-center justify-between border px-3 py-2 text-sm ${versionOpen ? "border-emerald-700 text-emerald-500" : "border-zinc-700 bg-zinc-900 text-zinc-200"}`}>
                    <span>{selectedVersion}</span>
                    <svg viewBox="0 0 24 24" className={`h-4 w-4 ${versionOpen ? "text-emerald-500 rotate-180" : "text-zinc-400"}`} aria-hidden>
                      <path d="M6 9l6 6 6-6" fill="none" stroke="currentColor" strokeWidth="2" />
                    </svg>
                  </button>
                  {versionOpen && (
                    <div className="absolute left-0 top-full mt-2 z-50 w-full border border-zinc-700 bg-zinc-900">
                      <div className="py-1">
                        {versionList.map((v) => (
                          <button key={v} onClick={() => { setSelectedVersion(v); setVersionOpen(false); }} className="block w-full text-left px-3 py-2 text-sm text-zinc-200 hover:bg-zinc-800/60 hover:text-emerald-500">
                            {v}
                          </button>
                        ))}
                        <Link href={`/mods/${slug}?tab=files`} className="block px-3 py-2 text-sm text-emerald-500 hover:text-emerald-400">Files</Link>
                      </div>
                    </div>
                  )}
                </div>
                <Link href="#" className="shrink-0 grid place-items-center h-9 w-9 bg-emerald-600 hover:bg-emerald-500">
                  <svg viewBox="0 0 24 24" className="h-5 w-5 text-black" aria-hidden>
                    <path d="M12 3v10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    <path d="M8 9l4 4 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <rect x="4" y="17" width="16" height="3" rx="1" fill="none" stroke="currentColor" strokeWidth="2" />
                  </svg>
                </Link>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <button className="w-full inline-flex items-center justify-center gap-2 border border-zinc-700 bg-zinc-900 px-3 py-2 text-sm text-zinc-200 hover:border-emerald-700">
                  <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden>
                    <path d="M12 21s-7-4.35-7-10a4 4 0 018 0 4 4 0 018 0c0 5.65-7 10-7 10z" fill="none" stroke="currentColor" strokeWidth="2" />
                  </svg>
                  Like
                </button>
                <button className="w-full inline-flex items-center justify-center gap-2 border border-zinc-700 bg-zinc-900 px-3 py-2 text-sm text-zinc-200 hover:border-emerald-700">
                  <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden>
                    <path d="M12 16V7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    <path d="M8 11l4-4 4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <rect x="4" y="18" width="16" height="2" rx="1" fill="currentColor" />
                  </svg>
                  Share
                </button>
              </div>
            </div>
          </aside>
        </div>
      </div>
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-10 top-24 h-48 w-48 border border-emerald-900/20" />
        <div className="absolute right-16 top-40 h-56 w-56 border border-emerald-900/20 rotate-45" />
        <div className="absolute left-24 bottom-24 h-40 w-40 border border-emerald-900/20" />
      </div>
    </section>
  );
}
