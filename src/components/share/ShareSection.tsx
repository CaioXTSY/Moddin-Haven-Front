import Link from "next/link";
import ShareDecorations from "@/components/share/ShareDecorations";

function IconUpload() {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden>
      <path d="M12 16V7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M8 11l4-4 4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <rect x="4" y="18" width="16" height="2" rx="1" fill="currentColor" />
    </svg>
  );
}

 

export default function ShareSection() {
  return (
    <section className="relative w-full overflow-hidden">
      <div className="relative z-10 mx-auto max-w-7xl px-6 py-16">
        <div className="border border-zinc-700 bg-zinc-900 px-8 py-8 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="grid place-items-center h-10 w-10 border border-zinc-700 text-purple-500">
              <IconUpload />
            </div>
            <span className="text-zinc-50 text-2xl sm:text-3xl font-bold">Share Your Creations</span>
            <span className="text-zinc-400 text-sm sm:text-base">Publish your mods and reach thousands of GTA players worldwide.</span>
          </div>
          <Link href="/mods/submit" className="inline-block bg-purple-600 px-4 py-2 text-sm font-medium text-black hover:bg-purple-500">Submit Your Mod</Link>
        </div>
      </div>
      <ShareDecorations />
    </section>
  );
}
