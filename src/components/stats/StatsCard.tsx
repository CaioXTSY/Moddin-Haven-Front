type Props = {
  icon: React.ReactNode;
  title: string;
  value: string;
  description: string;
};

export default function StatsCard({ icon, title, value, description }: Props) {
  return (
    <div className="border border-zinc-700 bg-zinc-900">
      <div className="p-4">
        <div className="grid place-items-center h-9 w-9 border border-emerald-700 text-emerald-500">
          {icon}
        </div>
      </div>
      <div className="px-4 pb-5">
        <div className="text-zinc-300 text-sm">{title}</div>
        <div className="mt-2 text-zinc-50 text-2xl font-semibold">{value}</div>
        <div className="mt-2 text-zinc-500 text-sm">{description}</div>
      </div>
    </div>
  );
}

