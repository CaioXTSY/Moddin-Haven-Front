import Logo from "@/components/header/Logo";
import NavLinks from "@/components/header/NavLinks";
import AuthButtons from "@/components/header/AuthButtons";
import Link from "next/link";

export default function Header() {
  return (
    <header className="sticky top-2 z-50 w-full bg-transparent">
      <div className="mx-auto max-w-7xl px-6">
        <div className="relative grid grid-cols-3 items-center h-14 rounded-full border border-mauve-700/40 bg-black/35 backdrop-blur-lg shadow-lg shadow-purple-900/20 px-4">
          <div className="hidden md:flex items-center gap-4 justify-self-start">
            <NavLinks />
          </div>
          <div className="justify-self-center">
            <Logo />
          </div>
          <div className="flex items_center gap-2 justify-self-end">
            <Link href="/mods/submit" className="inline-flex border border-mauve-700 px-3 py-1.5 text-sm text-mauve-600 hover:bg-mauve-600 hover:text-black rounded-full">Submit</Link>
            <AuthButtons />
          </div>
        </div>
      </div>
    </header>
  );
}
