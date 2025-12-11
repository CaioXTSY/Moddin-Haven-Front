import Hero from "@/components/hero/Hero";
import FeaturedSection from "@/components/featured/FeaturedSection";
import StatsSection from "@/components/stats/StatsSection";
import ShareSection from "@/components/share/ShareSection";
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

const gameAccent: Record<Game, { tile: string; chip: string }> = {
  gta3: { tile: "hover:border-peach-700 hover:shadow-peach-500/20", chip: "border-peach-700 text-peach-500" },
  vc: { tile: "hover:border-pink-700 hover:shadow-pink-500/20", chip: "border-pink-700 text-pink-500" },
  sa: { tile: "hover:border-green-500 hover:shadow-green-500/20", chip: "border-green-500 text-green-500" },
  gta4: { tile: "hover:border-blue-700 hover:shadow-blue-500/20", chip: "border-blue-700 text-blue-500" },
  gta5: { tile: "hover:border-sapphire-700 hover:shadow-sapphire-500/20", chip: "border-sapphire-700 text-sapphire-500" },
};

function GameBanner({ slug, imageSrc }: { slug: Game; imageSrc: string }) {
  const accent = gameAccent[slug];
  return (
    <Link href={`/mods?game=${slug}`} className={`group block border border-zinc-700 bg-zinc-900 rounded-lg overflow-hidden transition-all hover:-translate-y-0.5 hover:shadow-lg ${accent.tile}`}>
      <div className="relative h-28 sm:h-32 md:h-36">
        <Image src={imageSrc} alt={gameLabels[slug]} fill className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/30 to-transparent" />
        <div className="absolute inset-0 flex items-center">
          <div className="px-4">
            <div className={`inline-flex items-center gap-2 border bg-zinc-900/70 px-2 py-1 text-[11px] rounded-full ${accent.chip}`}>
              <svg viewBox="0 0 24 24" className="h-3 w-3" aria-hidden>
                <circle cx="12" cy="12" r="3" fill="currentColor" />
              </svg>
              {gameLabels[slug]}
            </div>
            <div className="mt-2 text-zinc-50 text-base font-semibold">{gameLabels[slug]}</div>
          </div>
        </div>
      </div>
    </Link>
  );
}

function GamesTeaser() {
  const games: { slug: Game; imageSrc: string }[] = [
    { slug: "gta3", imageSrc: "/img.png" },
    { slug: "vc", imageSrc: "/img.png" },
    { slug: "sa", imageSrc: "/img.png" },
    { slug: "gta4", imageSrc: "/img.png" },
    { slug: "gta5", imageSrc: "/img.png" },
  ];
  return (
    <section className="relative w-full">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="flex items-end justify-between">
          <div>
            <h2 className="text-zinc-50 text-3xl sm:text-4xl font-bold">Browse by Game</h2>
            <div className="mt-3 h-px w-16 bg-mauve-700" />
            <p className="mt-3 text-zinc-400">Filter mods by game.</p>
          </div>
          <Link href="/games" className="border border-mauve-700 px-2 py-1 text-sm text-mauve-600 hover:bg-mauve-600 hover:text-black transition">View all →</Link>
        </div>
        <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-5">
          {games.map((g) => (
            <GameBanner key={g.slug} slug={g.slug} imageSrc={g.imageSrc} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <main>
      <Hero />
      <GamesTeaser />
      <FeaturedSection />
      <StatsSection />
      <ShareSection />
    </main>
  );
}
