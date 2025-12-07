import HeroStat from "@/components/hero/HeroStat";

function LightningIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden>
      <path d="M13 3L4 14h6l-1 7 9-11h-6l1-7z" fill="currentColor" />
    </svg>
  );
}

function SparkleIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden>
      <path d="M12 2l2 6 6 2-6 2-2 6-2-6-6-2 6-2 2-6z" fill="currentColor" />
    </svg>
  );
}

function UsersIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden>
      <path
        d="M16 11a4 4 0 10-8 0 4 4 0 008 0zm-10 8a6 6 0 0112 0v1H6v-1z"
        fill="currentColor"
      />
    </svg>
  );
}

export default function HeroStats() {
  return (
    <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-3">
      <HeroStat icon={<SparkleIcon />} value="2.5K+" label="Premium Mods" />
      <HeroStat icon={<LightningIcon />} value="500K+" label="Total Downloads" />
      <HeroStat icon={<UsersIcon />} value="8.5K+" label="Active Creators" />
    </div>
  );
}

