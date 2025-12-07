export default function DecorativeBoxes() {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10">
      <div className="absolute right-10 top-10 h-64 w-64 border border-emerald-900/20" />
      <div className="absolute left-8 bottom-24 h-56 w-56 border border-emerald-900/20" />
      <div className="absolute left-72 top-72 h-40 w-40 border border-emerald-900/20 rotate-45" />
    </div>
  );
}

