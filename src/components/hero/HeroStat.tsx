type Props = {
  icon: React.ReactNode;
  value: string;
  label: string;
};

export default function HeroStat({ icon, value, label }: Props) {
  return (
    <div className="flex items-center gap-4">
      <div className="grid place-items-center h-8 w-8 border border-emerald-700 text-emerald-500">
        {icon}
      </div>
      <div>
        <div className="text-emerald-500 text-2xl font-semibold">{value}</div>
        <div className="text-zinc-500 text-sm">{label}</div>
      </div>
    </div>
  );
}

