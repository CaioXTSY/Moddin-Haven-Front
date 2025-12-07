"use client";
import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" className="flex items-center">
      <span className="text-sm font-semibold tracking-wide text-zinc-200">MODDING HAVEN</span>
    </Link>
  );
}

