export default function ShareDecorations() {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10">
      <div className="absolute -left-24 top-10 h-64 w-64 border border-emerald-900/20" />
      <div className="absolute right-10 -top-16 h-56 w-56 border border-emerald-900/20" />
      <div className="absolute left-24 bottom-8 h-40 w-40 border border-emerald-900/20 rotate-45" />
      <div className="absolute right-40 bottom-20 h-48 w-48 border border-emerald-900/20" />
    </div>
  );
}

