import ModCard from "@/components/featured/ModCard";

const base = { title: "Pablo Mod", author: "pablo", category: "pablo" };
const data = [
  { ...base, downloads: "12.5K", rating: "4.8" },
  { ...base, downloads: "8.9K", rating: "4.7" },
  { ...base, downloads: "6.2K", rating: "4.5" },
  { ...base, downloads: "7.1K", rating: "4.6" },
  { ...base, downloads: "3.5K", rating: "4.4" },
  { ...base, downloads: "9.8K", rating: "4.9" },
];

export default function FeaturedGrid() {
  return (
    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
      {data.slice(0, 6).map((m, i) => (
        <ModCard key={`${m.title}-${i}`} imageSrc="/img.png" {...m} />
      ))}
    </div>
  );
}
