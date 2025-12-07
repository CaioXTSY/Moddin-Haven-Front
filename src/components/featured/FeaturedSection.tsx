import Link from "next/link";
import FeaturedGrid from "@/components/featured/FeaturedGrid";
import FeaturedDecorations from "@/components/featured/FeaturedDecorations";

export default function FeaturedSection() {
  return (
    <section className="relative w-full overflow-hidden">
      <div className="relative z-10 mx-auto max-w-7xl px-6 py-16">
        <div className="flex items-end justify-between">
          <div>
            <h2 className="text-zinc-50 text-3xl sm:text-4xl font-bold">Featured Mods</h2>
            <div className="mt-3 h-px w-16 bg-emerald-700" />
            <p className="mt-3 text-zinc-400">Handpicked modifications loved by the community</p>
          </div>
          <Link href="/mods" className="border border-emerald-700 px-2 py-1 text-sm text-emerald-500 hover:bg-emerald-600 hover:text-black transition">View all →</Link>
        </div>
        <div className="mt-8">
          <FeaturedGrid />
        </div>
      </div>
      <FeaturedDecorations />
    </section>
  );
}
