"use client";
import Link from "next/link";
import { useState } from "react";
import DecorativeBoxes from "@/components/hero/DecorativeBoxes";

export default function SignupPage() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");

  const emailOk = /.+@.+\..+/.test(email);
  const usernameOk = username.trim().length >= 3;
  const passOk = password.trim().length >= 6;
  const matchOk = password === confirm;
  const canSubmit = emailOk && usernameOk && passOk && matchOk;

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
  }

  return (
    <section className="relative w-full min-h-[calc(100vh-56px)] flex items-center">
      <div className="mx-auto max-w-7xl px-6 w-full">
        <div className="mx-auto w-full max-w-md border border-zinc-700 bg-zinc-900 px-8 py-8">
          <h1 className="text-zinc-50 text-3xl font-bold">Sign Up</h1>
          <p className="mt-2 text-zinc-400 text-sm">Create your account to publish and track your mods.</p>

          <form onSubmit={onSubmit} className="mt-6 space-y-4">
            <div>
              <label className="block text-sm text-zinc-300">Username</label>
              <input
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="username"
                className="mt-2 w-full border border-zinc-700 bg-zinc-900 px-3 py-2 text-sm text-zinc-200 placeholder:text-zinc-500 focus:outline-none"
              />
            </div>
            <div>
              <label className="block text-sm text-zinc-300">Email</label>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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
            <div>
              <label className="block text-sm text-zinc-300">Confirm password</label>
              <input
                type="password"
                value={confirm}
                onChange={(e) => setConfirm(e.target.value)}
                placeholder="repeat your password"
                className="mt-2 w-full border border-zinc-700 bg-zinc-900 px-3 py-2 text-sm text-zinc-200 placeholder:text-zinc-500 focus:outline-none"
              />
            </div>
            <button
              type="submit"
              disabled={!canSubmit}
              className="w-full bg-purple-600 px-4 py-2 text-sm font-medium text-black hover:bg-purple-500 disabled:opacity-50"
            >
              Create account
            </button>
          </form>

          <div className="mt-6 text-sm text-zinc-400">
            Already have an account? <Link href="/login" className="text-purple-500 hover:text-purple-400">Sign in</Link>
          </div>
        </div>
      </div>
      <DecorativeBoxes />
    </section>
  );
}
