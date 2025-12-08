type Props = {
  icon: React.ReactNode;
  title: string;
  value: string;
  description: string;
  accent?: "sapphire" | "green" | "peach" | "pink" | "mauve";
};

const accentMap: Record<NonNullable<Props["accent"]>, { tile: string; icon: string; value: string }> = {
  sapphire: {
    tile: "hover:border-sapphire-700 hover:shadow-sapphire-500/20",
    icon: "border-sapphire-700 text-sapphire-500",
    value: "group-hover:text-sapphire-600",
  },
  green: {
    tile: "hover:border-green-500 hover:shadow-green-500/20",
    icon: "border-green-500 text-green-500",
    value: "group-hover:text-green-600",
  },
  peach: {
    tile: "hover:border-peach-700 hover:shadow-peach-500/20",
    icon: "border-peach-700 text-peach-500",
    value: "group-hover:text-peach-600",
  },
  pink: {
    tile: "hover:border-pink-700 hover:shadow-pink-500/20",
    icon: "border-pink-700 text-pink-500",
    value: "group-hover:text-pink-700",
  },
  mauve: {
    tile: "hover:border-mauve-700 hover:shadow-purple-900/20",
    icon: "border-mauve-700 text-mauve-500",
    value: "group-hover:text-mauve-600",
  },
};

export default function StatsCard({ icon, title, value, description, accent = "mauve" }: Props) {
  return (
    <div className={`group border border-zinc-700 bg-zinc-900 transition-all hover:-translate-y-0.5 hover:shadow-lg ${accentMap[accent].tile} rounded-lg`}>
      <div className="p-4">
        <div className={`grid place-items-center h-9 w-9 border transition-colors ${accentMap[accent].icon} group-hover:bg-zinc-800/40 rounded-md`}>
          {icon}
        </div>
      </div>
      <div className="px-4 pb-5">
        <div className="text-zinc-300 text-sm transition-colors group-hover:text-zinc-200">{title}</div>
        <div className={`mt-2 text-zinc-50 text-2xl font-semibold transition-colors ${accentMap[accent].value}`}>{value}</div>
        <div className="mt-2 text-zinc-500 text-sm transition-colors group-hover:text-zinc-300">{description}</div>
      </div>
    </div>
  );
}
