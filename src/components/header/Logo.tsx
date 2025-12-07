"use client";
import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" className="flex items-center gap-3">
      <span className="grid place-items-center h-7 w-7 border border-emerald-700 text-emerald-500">
        <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden>
          <rect x="5" y="5" width="14" height="14" fill="currentColor" />
        </svg>
      </span>
      <span className="text-sm font-semibold tracking-wide text-zinc-200">MODDING HAVEN</span>
    </Link>
  );
}

