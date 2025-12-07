import Logo from "@/components/header/Logo";
import SearchBar from "@/components/header/SearchBar";
import NavLinks from "@/components/header/NavLinks";
import AuthButtons from "@/components/header/AuthButtons";

export default function Header() {
  return (
    <header className="w-full bg-black">
      <div className="mx-auto flex h-16 max-w-7xl items-center gap-6 px-6">
        <Logo />
        <div className="flex-1 flex justify-center">
          <SearchBar />
        </div>
        <div className="flex items-center gap-6">
          <NavLinks />
          <AuthButtons />
        </div>
      </div>
    </header>
  );
}
