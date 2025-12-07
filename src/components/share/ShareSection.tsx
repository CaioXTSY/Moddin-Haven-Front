import Link from "next/link";

function IconUpload() {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6" aria-hidden>
      <path d="M12 16V7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M8 11l4-4 4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <rect x="4" y="18" width="16" height="2" rx="1" fill="currentColor" />
    </svg>
  );
}

function IconCheck() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden>
      <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

const benefits = [
  { label: "Easy Submission" },
  { label: "Quick Approval" },
  { label: "Earn Recognition" },
];

export default function ShareSection() {
  return (
    <section className="relative w-full">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="mx-auto max-w-3xl border border-emerald-700 bg-zinc-900">
          <div className="flex justify-center pt-10">
            <div className="grid place-items-center h-16 w-16 border border-emerald-700 text-emerald-500">
              <IconUpload />
            </div>
          </div>
          <div className="px-8 pb-12 text-center">
            <h3 className="mt-6 text-zinc-50 text-3xl sm:text-4xl font-bold">Share Your Creations</h3>
            <p className="mt-3 text-zinc-400">Publish your mods and reach thousands of GTA players worldwide. All submissions are reviewed by our passionate community.</p>

            <div className="mt-8 border-t border-zinc-800" />
            <div className="mx-auto mt-6 grid max-w-xl grid-cols-1 gap-4 sm:grid-cols-3">
              {benefits.map((b) => (
                <div key={b.label} className="flex items-center justify-center gap-2 text-emerald-500">
                  <div className="grid place-items-center h-6 w-6 border border-emerald-700">
                    <IconCheck />
                  </div>
                  <span className="text-sm text-zinc-300">{b.label}</span>
                </div>
              ))}
            </div>
            <div className="mt-6 border-t border-zinc-800" />

            <div className="mt-8 flex justify-center">
              <Link href="/submit" className="inline-flex items-center gap-2 bg-emerald-600 px-4 py-2 text-sm font-medium text-black hover:bg-emerald-500">
                <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden>
                  <path d="M13 4l-9 9h6l-1 7 9-9h-6l1-7z" fill="currentColor" />
                </svg>
                Submit Your Mod
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

