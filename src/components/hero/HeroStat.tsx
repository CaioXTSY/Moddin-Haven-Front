type Props = {
  icon: React.ReactNode;
  value: string;
  label: string;
};

export default function HeroStat({ icon, value, label }: Props) {
  return (
    <div className="group flex items-center gap-4 transition-transform hover:-translate-y-0.5">
      <div className="grid place-items-center h-8 w-8 border border-purple-700 text-purple-500 transition-colors group-hover:border-purple-600 group-hover:bg-purple-600 group-hover:text-black">
        {icon}
      </div>
      <div>
        <div className="text-purple-500 text-2xl font-semibold transition-colors group-hover:text-purple-400">{value}</div>
        <div className="text-zinc-500 text-sm transition-colors group-hover:text-zinc-300">{label}</div>
      </div>
    </div>
  );
}
