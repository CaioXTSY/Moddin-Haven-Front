export default function ShareDecorations() {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10">
      <div className="absolute left-8 top-12 h-60 w-60 border border-emerald-900/20" />
      <div className="absolute left-16 bottom-64 h-40 w-40 border border-emerald-900/20 rotate-45" />
    </div>
  );
}
