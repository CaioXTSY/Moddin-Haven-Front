import Link from "next/link";

export default function AuthButtons() {
  return (
    <div className="flex items-center gap-2">
      <Link
        href="/login"
        className="px-3 py-1.5 text-sm text-zinc-200 hover:text-mauve-600"
      >
        Login
      </Link>
      <Link
        href="/signup"
        className="bg-mauve-600 px-3 py-1.5 text-sm font-medium text-black hover:bg-mauve-500 rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-mauve-600"
      >
        Sign Up
      </Link>
    </div>
  );
}
