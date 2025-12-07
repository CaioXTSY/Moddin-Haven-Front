import Logo from "@/components/header/Logo";
import NavLinks from "@/components/header/NavLinks";
import AuthButtons from "@/components/header/AuthButtons";
import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-zinc-800 bg-black/80 backdrop-blur">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex h-14 items-center justify-between">
          <div className="flex items-center gap-6">
            <Logo />
            <NavLinks />
          </div>
          <div className="flex items-center gap-3">
            <Link href="/mods/submit" className="inline-flex border border-emerald-700 px-3 py-1.5 text-sm text-emerald-500 hover:bg-emerald-600 hover:text-black">Submit</Link>
            <AuthButtons />
          </div>
        </div>
      </div>
    </header>
  );
}
