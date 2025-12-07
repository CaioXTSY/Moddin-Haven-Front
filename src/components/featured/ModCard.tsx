import Image from "next/image";

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
      <path d="M5 20h14v-2H5v2zm7-16v8l3.5-3.5 1.5 1.5-6 6-6-6 1.5-1.5L12 12V4h0z" fill="currentColor" />
    </svg>
  );
}

export default function ModCard({ title, author, category, downloads, rating, imageSrc }: Props) {
  return (
    <div className="border border-zinc-700 bg-zinc-900">
      <div className="relative h-40 w-full">
        <Image src={imageSrc} alt={title} fill priority className="object-cover" />
      </div>
      <div className="p-4">
        <div className="text-zinc-50 text-lg font-semibold">{title}</div>
        <div className="text-zinc-400 text-sm">by {author}</div>
        <div className="mt-3 inline-flex border border-zinc-600 px-2 py-1 text-xs text-zinc-200">{category}</div>
        <div className="mt-4 flex items-center justify-between">
          <div className="flex items-center gap-2 text-zinc-400 text-sm">
            <StatIconDownload />
            {downloads}
          </div>
          <div className="flex items-center gap-1 text-emerald-500 text-sm">
            <StatIconStar />
            {rating}
          </div>
        </div>
      </div>
    </div>
  );
}
