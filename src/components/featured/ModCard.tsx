import Image from "next/image";
import Link from "next/link";

type Props = {
  title: string;
  author: string;
  category: string;
  downloads: string;
  rating: string;
  imageSrc: string;
};

function StatIconStar() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden>
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87L18.18 22 12 18.56 5.82 22 7 14.14l-5-4.87 6.91-1.01L12 2z" fill="currentColor" />
    </svg>
  );
}

function StatIconDownload() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden>
      <path d="M12 3v10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M8 9l4 4 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <rect x="4" y="17" width="16" height="3" rx="1" fill="none" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}

export default function ModCard({ title, author, category, downloads, rating, imageSrc }: Props) {
  const slug = title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
  return (
    <Link href={`/mods/${slug}`} className="relative group border border-zinc-800 bg-black transition-all hover:border-purple-700 hover:shadow-xl hover:shadow-purple-900/30">
      <div className="relative h-64 w-full md:h-72 overflow-hidden">
        <Image src={imageSrc} alt={title} fill priority className="object-cover transition-transform duration-500 group-hover:scale-[1.06]" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/70" />

        <div className="absolute left-4 top-4 inline-flex items-center gap-2 bg-purple-600 px-2 py-1 text-[11px] font-semibold tracking-wide text-black uppercase">
          <svg viewBox="0 0 24 24" className="h-3 w-3" aria-hidden>
            <rect x="4" y="6" width="16" height="12" fill="currentColor" />
          </svg>
          {category}
        </div>

        <div className="absolute right-4 top-4 flex gap-2">
          <div className="inline-flex items-center gap-1 border border-zinc-700 bg-black/60 px-2 py-1 text-xs text-zinc-200 backdrop-blur transition-colors group-hover:border-purple-700">
            <StatIconDownload />
            {downloads}
          </div>
          <div className="inline-flex items-center gap-1 border border-zinc-700 bg-black/60 px-2 py-1 text-xs text-purple-500 backdrop-blur transition-colors group-hover:border-purple-700 group-hover:text-purple-400">
            <StatIconStar />
            {rating}
          </div>
        </div>

        <div className="absolute inset-x-0 bottom-0 p-4">
          <div className="flex items-end justify-between">
            <div>
              <div className="text-zinc-50 text-xl font-semibold tracking-wide">{title}</div>
              <div className="mt-1 text-zinc-400 text-sm">created by {author}</div>
            </div>
            <div className="grid place-items-center h-8 w-8 border border-purple-700 text-purple-500 bg-black/60 backdrop-blur transition-all group-hover:bg-purple-600 group-hover:text-black group-hover:-translate-y-0.5">
              <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden>
                <path d="M5 12h12M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" fill="none" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
