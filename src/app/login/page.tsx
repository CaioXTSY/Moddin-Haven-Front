"use client";
import Link from "next/link";
import { useState } from "react";

export default function LoginPage() {
  const [identifier, setIdentifier] = useState("");
  const [password, setPassword] = useState("");
  const canSubmit = identifier.trim().length > 0 && password.trim().length >= 6;

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
  }

  return (
    <section className="w-full min-h-[calc(100vh-56px)] flex items-center">
      <div className="mx-auto max-w-7xl px-6 w-full">
        <div className="mx-auto w-full max-w-md border border-zinc-700 bg-zinc-900 px-8 py-8">
          <h1 className="text-zinc-50 text-3xl font-bold">Login</h1>
          <p className="mt-2 text-zinc-400 text-sm">Access your account to submit and manage mods.</p>

          <form onSubmit={onSubmit} className="mt-6 space-y-4">
            <div>
              <label className="block text-sm text-zinc-300">Email or username</label>
              <input
                value={identifier}
                onChange={(e) => setIdentifier(e.target.value)}
                placeholder="your@email.com"
                className="mt-2 w-full border border-zinc-700 bg-zinc-900 px-3 py-2 text-sm text-zinc-200 placeholder:text-zinc-500 focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-sm text-zinc-300">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="at least 6 characters"
                className="mt-2 w-full border border-zinc-700 bg-zinc-900 px-3 py-2 text-sm text-zinc-200 placeholder:text-zinc-500 focus:outline-none"
              />
            </div>
            <button
              type="submit"
              disabled={!canSubmit}
              className="w-full bg-emerald-600 px-4 py-2 text-sm font-medium text-black hover:bg-emerald-500 disabled:opacity-50"
            >
              Sign In
            </button>
          </form>

          <div className="mt-6 text-sm text-zinc-400">
            Don&apos;t have an account? <Link href="/signup" className="text-emerald-500 hover:text-emerald-400">Create one</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
