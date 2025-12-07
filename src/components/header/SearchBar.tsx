"use client";
import { useState } from "react";

export default function SearchBar() {
  const [query, setQuery] = useState("");

  return (
    <form className="flex w-full max-w-xl items-center border border-zinc-700 bg-zinc-900 px-3 py-2 text-zinc-200">
      <svg
        aria-hidden
        viewBox="0 0 24 24"
        className="h-5 w-5 text-zinc-400"
      >
        <path
          fill="currentColor"
          d="M10 4a6 6 0 104.472 10.07l4.229 4.229a1 1 0 101.414-1.415l-4.228-4.228A6 6 0 0010 4zm0 2a4 4 0 110 8 4 4 0 010-8z"
        />
      </svg>
      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search mods..."
        className="ml-2 w-full bg-transparent text-sm placeholder:text-zinc-500 focus:outline-none"
      />
    </form>
  );
}
