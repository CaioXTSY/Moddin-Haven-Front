import StatsCard from "@/components/stats/StatsCard";

function IconChart() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden>
      <path d="M5 19h14" stroke="currentColor" strokeWidth="2" />
      <rect x="6" y="11" width="3" height="6" fill="currentColor" />
      <rect x="11" y="8" width="3" height="9" fill="currentColor" />
      <rect x="16" y="5" width="3" height="12" fill="currentColor" />
    </svg>
  );
}

function IconUsers() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden>
      <path d="M16 11a4 4 0 10-8 0 4 4 0 008 0z" fill="currentColor" />
      <path d="M4 20c0-4 4-6 8-6s8 2 8 6" fill="none" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}

function IconBolt() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden>
      <path d="M13 2L4 14h6l-1 8 9-12h-6l1-8z" fill="currentColor" />
    </svg>
  );
}

function IconHeart() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden>
      <path d="M12 21s-7-4.35-9.33-8.05C1 9.86 3.08 6 7 6c2.05 0 3.24 1.03 5 3 1.76-1.97 2.95-3 5-3 3.92 0 6 3.86 4.33 6.95C19 16.65 12 21 12 21z" fill="currentColor" />
    </svg>
  );
}

export default function StatsSection() {
  return (
    <section className="relative w-full overflow-hidden">
      <div className="relative z-10 mx-auto max-w-7xl px-6 py-16">
        <div>
          <h2 className="text-zinc-50 text-3xl sm:text-4xl font-bold">By The Numbers</h2>
          <p className="mt-2 text-zinc-400">The Modding Haven community keeps growing</p>
        </div>
        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
          <StatsCard accent="sapphire" icon={<IconChart />} title="Active Mods" value="2,500+" description="Community created modifications" />
          <StatsCard accent="green" icon={<IconUsers />} title="Community Members" value="85K+" description="Modders and enthusiasts worldwide" />
          <StatsCard accent="peach" icon={<IconBolt />} title="Total Downloads" value="500K+" description="Installations across all platforms" />
          <StatsCard accent="pink" icon={<IconHeart />} title="Avg. Rating" value="4.7★" description="Community satisfaction score" />
        </div>
      </div>
      
    </section>
  );
}
