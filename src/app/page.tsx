import Hero from "@/components/hero/Hero";
import FeaturedSection from "@/components/featured/FeaturedSection";
import StatsSection from "@/components/stats/StatsSection";
import ShareSection from "@/components/share/ShareSection";

export default function Home() {
  return (
    <main>
      <Hero />
      <FeaturedSection />
      <StatsSection />
      <ShareSection />
    </main>
  );
}
