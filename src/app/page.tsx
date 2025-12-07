import Hero from "@/components/hero/Hero";
import FeaturedSection from "@/components/featured/FeaturedSection";
import StatsSection from "@/components/stats/StatsSection";

export default function Home() {
  return (
    <main>
      <Hero />
      <FeaturedSection />
      <StatsSection />
    </main>
  );
}
