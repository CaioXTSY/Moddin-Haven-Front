import HeroBadge from "@/components/hero/HeroBadge";
import HeroTitle from "@/components/hero/HeroTitle";
import HeroDescription from "@/components/hero/HeroDescription";
import HeroActions from "@/components/hero/HeroActions";
import HeroStats from "@/components/hero/HeroStats";
import DecorativeBoxes from "@/components/hero/DecorativeBoxes";

export default function Hero() {
  return (
    <section className="relative w-full min-h-[calc(100vh-64px)] flex items-center">
      <div className="mx-auto max-w-7xl px-6">
        <HeroBadge />
        <div className="mt-6">
          <HeroTitle />
        </div>
        <div className="mt-6">
          <HeroDescription />
        </div>
        <div className="mt-8">
          <HeroActions />
        </div>
        <HeroStats />
      </div>
      <DecorativeBoxes />
    </section>
  );
}
