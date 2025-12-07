export default function DecorativeBoxes() {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10">
      <div className="absolute right-12 top-8 h-64 w-64 border border-emerald-900/20" />
      <div className="absolute left-10 bottom-20 h-56 w-56 border border-emerald-900/20" />
      <div className="absolute left-64 top-64 h-40 w-40 border border-emerald-900/20 rotate-45" />
    </div>
  );
}

