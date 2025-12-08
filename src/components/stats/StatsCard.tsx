type Props = {
  icon: React.ReactNode;
  title: string;
  value: string;
  description: string;
};

export default function StatsCard({ icon, title, value, description }: Props) {
  return (
    <div className="group border border-zinc-700 bg-zinc-900 transition-all hover:-translate-y-0.5 hover:border-purple-700 hover:shadow-lg hover:shadow-purple-900/20">
      <div className="p-4">
        <div className="grid place-items-center h-9 w-9 border border-purple-700 text-purple-500 transition-colors group-hover:border-purple-600 group-hover:bg-purple-600 group-hover:text-black">
          {icon}
        </div>
      </div>
      <div className="px-4 pb-5">
        <div className="text-zinc-300 text-sm transition-colors group-hover:text-zinc-200">{title}</div>
        <div className="mt-2 text-zinc-50 text-2xl font-semibold transition-colors group-hover:text-purple-400">{value}</div>
        <div className="mt-2 text-zinc-500 text-sm transition-colors group-hover:text-zinc-300">{description}</div>
      </div>
    </div>
  );
}
