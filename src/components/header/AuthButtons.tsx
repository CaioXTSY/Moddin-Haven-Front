import Link from "next/link";

export default function AuthButtons() {
  return (
    <div className="flex items-center gap-3">
      <Link
        href="/login"
        className="border border-zinc-600 px-3 py-1.5 text-sm text-zinc-200 hover:bg-zinc-800"
      >
        Login
      </Link>
      <Link
        href="/signup"
        className="bg-emerald-600 px-3 py-1.5 text-sm font-medium text-black hover:bg-emerald-500"
      >
        Sign Up
      </Link>
    </div>
  );
}
