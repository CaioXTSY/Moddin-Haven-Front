import Link from "next/link";
import FeaturedGrid from "@/components/featured/FeaturedGrid";
import FeaturedDecorations from "@/components/featured/FeaturedDecorations";

export default function FeaturedSection() {
  return (
    <section className="relative w-full">
      <div className="relative z-10 mx-auto max-w-7xl px-6 py-16">
        <div className="flex items-end justify-between">
          <div>
            <h2 className="text-zinc-50 text-3xl sm:text-4xl font-bold">Featured Mods</h2>
            <p className="mt-2 text-zinc-400">Handpicked modifications loved by the community</p>
          </div>
          <Link href="/mods" className="text-emerald-500 text-sm">View all →</Link>
        </div>
        <div className="mt-8">
          <FeaturedGrid />
        </div>
      </div>
      <FeaturedDecorations />
    </section>
  );
}
