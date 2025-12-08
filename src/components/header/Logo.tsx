"use client";
import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" className="flex items-center">
      <span className="text-base md:text-lg font-semibold tracking-wide text-zinc-200">Modding Haven</span>
    </Link>
  );
}

