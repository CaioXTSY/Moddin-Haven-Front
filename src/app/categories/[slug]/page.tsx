import Link from "next/link";

export default function CategorySlugPage({ params }: { params: { slug: string } }) {
  const title = params.slug.replace(/-/g, " ");

  return (
    <section className="relative w-full">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="flex items-end justify-between">
          <div>
            <h1 className="text-zinc-50 text-3xl sm:text-4xl font-bold capitalize">{title}</h1>
            <div className="mt-3 h-px w-16 bg-emerald-700" />
            <p className="mt-3 text-zinc-400">Coming soon: mods listing for this category</p>
          </div>
          <Link href="/categories" className="border border-emerald-700 px-2 py-1 text-sm text-emerald-500 hover:bg-emerald-600 hover:text-black transition">Back</Link>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          <div className="border border-zinc-700 bg-zinc-900 p-6">
            <div className="text-zinc-300 text-sm">Placeholder</div>
            <div className="mt-2 text-zinc-50 text-lg font-semibold">Nothing here yet</div>
            <div className="mt-2 text-zinc-500 text-sm">When data is available, mods will appear here.</div>
          </div>
          <div className="border border-zinc-700 bg-zinc-900 p-6">
            <div className="text-zinc-300 text-sm">Placeholder</div>
            <div className="mt-2 text-zinc-50 text-lg font-semibold">Example card</div>
            <div className="mt-2 text-zinc-500 text-sm">Visual only to test the layout.</div>
          </div>
          <div className="border border-zinc-700 bg-zinc-900 p-6">
            <div className="text-zinc-300 text-sm">Placeholder</div>
            <div className="mt-2 text-zinc-50 text-lg font-semibold">Example card</div>
            <div className="mt-2 text-zinc-500 text-sm">Visual only to test the layout.</div>
          </div>
        </div>
      </div>
    </section>
  );
}
