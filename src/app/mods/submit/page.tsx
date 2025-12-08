"use client";
import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

type ModSubmit = {
  title: string;
  author: string;
  category: string;
  tags: string[];
  description: string;
  version: string;
  changelog: string;
  cover?: File;
  gallery: File[];
  modFile?: File;
  license: string;
  homepage?: string;
  sourceUrl?: string;
};

function formatFileSize(bytes: number) {
  if (bytes >= 1024 * 1024 * 1024) return `${(bytes / (1024 * 1024 * 1024)).toFixed(2)} GB`;
  if (bytes >= 1024 * 1024) return `${(bytes / (1024 * 1024)).toFixed(2)} MB`;
  if (bytes >= 1024) return `${(bytes / 1024).toFixed(2)} KB`;
  return `${bytes} B`;
}

export default function SubmitModPage() {
  const router = useRouter();

  const categories = useMemo(() => [
    { name: "Vehicles", slug: "vehicles" },
    { name: "Weapons", slug: "weapons" },
    { name: "Graphics", slug: "graphics" },
    { name: "Scripting", slug: "scripting" },
    { name: "Tools", slug: "tools" },
    { name: "Characters", slug: "characters" },
  ], []);

  const licenses = [
    { label: "All rights reserved", value: "arr" },
    { label: "MIT", value: "mit" },
    { label: "GPL-3.0", value: "gpl-3" },
    { label: "Custom", value: "custom" },
  ];

  const [data, setData] = useState<ModSubmit>({
    title: "",
    author: "",
    category: "",
    tags: [],
    description: "",
    version: "",
    changelog: "",
    gallery: [],
    license: "arr",
  });

  const [tagInput, setTagInput] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  function addTag() {
    const t = tagInput.trim();
    if (!t) return;
    if (data.tags.includes(t)) return;
    setData({ ...data, tags: [...data.tags, t] });
    setTagInput("");
  }

  function removeTag(t: string) {
    setData({ ...data, tags: data.tags.filter((x) => x !== t) });
  }

  function validate() {
    const e: Record<string, string> = {};
    if (!data.title.trim()) e.title = "Required";
    if (!data.author.trim()) e.author = "Required";
    if (!data.category.trim()) e.category = "Select";
    if (!data.description.trim() || data.description.trim().length < 30) e.description = "Minimum 30 characters";
    if (!data.version.trim()) e.version = "Required";
    if (!data.modFile) e.modFile = "Upload the mod file";
    setErrors(e);
    return Object.keys(e).length === 0;
  }

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!validate()) return;
    setSubmitting(true);
    await new Promise((r) => setTimeout(r, 800));
    setSubmitting(false);
    setSubmitted(true);
    setTimeout(() => {
      router.replace("/mods");
    }, 1200);
  }

  return (
    <section className="relative w-full">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="flex items-end justify-between">
          <div>
            <h1 className="text-zinc-50 text-3xl sm:text-4xl font-bold">Submit Mod</h1>
            <div className="mt-3 h-px w-16 bg-mauve-700" />
            <p className="mt-3 text-zinc-400">Fill in your mod details and upload files.</p>
            <Link href="/mods" className="mt-4 inline-flex items-center gap-2 text-sm text-blue-500 hover:text-blue-400">
              <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden>
                <path d="M15 19l-7-7 7-7" fill="none" stroke="currentColor" strokeWidth="2" />
              </svg>
              Back to Mods
            </Link>
          </div>
        </div>

        <form onSubmit={onSubmit} className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
          <div className="md:col-span-2 space-y-6">
            <div className="border border-zinc-700 bg-zinc-900 p-4">
              <div className="text-zinc-50 text-xl font-semibold">Basic Information</div>
              <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label className="text-xs text-zinc-400">Title</label>
                  <input value={data.title} onChange={(e) => setData({ ...data, title: e.target.value })} className={`mt-1 w-full border px-3 py-2 text-sm ${errors.title ? "border-red-600" : "border-zinc-700 bg-zinc-900 text-zinc-200"}`} placeholder="e.g., Neon Streets" />
                  {errors.title && <div className="mt-1 text-xs text-red-500">{errors.title}</div>}
                </div>
                <div>
                  <label className="text-xs text-zinc-400">Author</label>
                  <input value={data.author} onChange={(e) => setData({ ...data, author: e.target.value })} className={`mt-1 w-full border px-3 py-2 text-sm ${errors.author ? "border-red-600" : "border-zinc-700 bg-zinc-900 text-zinc-200"}`} placeholder="Your name" />
                  {errors.author && <div className="mt-1 text-xs text-red-500">{errors.author}</div>}
                </div>
                <div>
                  <label className="text-xs text-zinc-400">Category</label>
                  <select value={data.category} onChange={(e) => setData({ ...data, category: e.target.value })} className={`mt-1 w-full border px-3 py-2 text-sm ${errors.category ? "border-red-600" : "border-zinc-700 bg-zinc-900 text-zinc-200"}`}>
                    <option value="">Select…</option>
                    {categories.map((c) => (
                      <option key={c.slug} value={c.slug}>{c.name}</option>
                    ))}
                  </select>
                  {errors.category && <div className="mt-1 text-xs text-red-500">{errors.category}</div>}
                </div>
                <div>
                  <label className="text-xs text-zinc-400">Tags</label>
                  <div className="mt-1 flex items-center border border-zinc-700 bg-zinc-900 px-2 py-2">
                    <input value={tagInput} onChange={(e) => setTagInput(e.target.value)} onKeyDown={(e) => { if (e.key === "Enter") { e.preventDefault(); addTag(); } }} placeholder="Type and press Enter" className="w-full bg-transparent text-sm text-zinc-200 placeholder:text-zinc-500 focus:outline-none" />
                    <button type="button" onClick={addTag} className="ml-2 border border-peach-700 px-2 py-1 text-xs text-peach-500 hover:bg-peach-600 hover:text-black">Add</button>
                  </div>
                  {data.tags.length > 0 && (
                    <div className="mt-2 flex flex-wrap gap-2">
                      {data.tags.map((t) => (
                        <button key={t} type="button" onClick={() => removeTag(t)} className="inline-flex items-center gap-1 border border-zinc-700 bg-zinc-800/60 px-2 py-1 text-[11px] text-zinc-300">
                          <svg viewBox="0 0 24 24" className="h-3 w-3" aria-hidden>
                            <circle cx="12" cy="12" r="3" fill="currentColor" />
                          </svg>
                          {t}
                          <svg viewBox="0 0 24 24" className="h-3 w-3 text-zinc-500" aria-hidden>
                            <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" />
                          </svg>
                        </button>
                      ))}
                    </div>
                  )}
                </div>
                <div className="sm:col-span-2">
                  <label className="text-xs text-zinc-400">Description</label>
                  <textarea value={data.description} onChange={(e) => setData({ ...data, description: e.target.value })} rows={5} className={`mt-1 w-full border px-3 py-2 text-sm ${errors.description ? "border-red-600" : "border-zinc-700 bg-zinc-900 text-zinc-200"}`} placeholder="Explain what your mod does, features, installation, etc." />
                  {errors.description && <div className="mt-1 text-xs text-red-500">{errors.description}</div>}
                </div>
              </div>
            </div>

            <div className="border border-zinc-700 bg-zinc-900 p-4">
              <div className="text-zinc-50 text-xl font-semibold">Media</div>
              <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label className="text-xs text-zinc-400">Cover</label>
                  <input type="file" accept="image/*" onChange={(e) => setData({ ...data, cover: e.target.files?.[0] })} className="mt-1 w-full border border-zinc-700 bg-zinc-900 px-3 py-2 text-sm text-zinc-200" />
                  {data.cover && (
                    <div className="mt-2 relative w-full overflow-hidden rounded border border-zinc-700" style={{ aspectRatio: "16 / 9" }}>
                      <Image src={URL.createObjectURL(data.cover)} alt="Cover" fill className="object-cover" />
                    </div>
                  )}
                </div>
                <div>
                  <label className="text-xs text-zinc-400">Gallery</label>
                  <input
                    multiple
                    type="file"
                    accept="image/*"
                    onChange={(e) => {
                      const files = Array.from(e.target.files ?? []);
                      if (files.length === 0) return;
                      setData({ ...data, gallery: [...data.gallery, ...files] });
                      e.currentTarget.value = "";
                    }}
                    className="mt-1 w-full border border-zinc-700 bg-zinc-900 px-3 py-2 text-sm text-zinc-200"
                  />
                  {data.gallery.length > 0 && (
                    <div className="mt-2 grid grid-cols-3 gap-2">
                      {data.gallery.slice(0, 6).map((f, i) => (
                        <div key={`${f.name}-${i}`} className="relative w-full overflow-hidden rounded border border-zinc-700" style={{ aspectRatio: "16 / 9" }}>
                          <Image src={URL.createObjectURL(f)} alt={`Image ${i + 1}`} fill className="object-cover" />
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>

            <div className="border border-zinc-700 bg-zinc-900 p-4">
              <div className="text-zinc-50 text-xl font-semibold">Version & Changes</div>
              <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label className="text-xs text-zinc-400">Version</label>
                  <input value={data.version} onChange={(e) => setData({ ...data, version: e.target.value })} className={`mt-1 w-full border px-3 py-2 text-sm ${errors.version ? "border-red-600" : "border-zinc-700 bg-zinc-900 text-zinc-200"}`} placeholder="e.g., 1.0.0" />
                  {errors.version && <div className="mt-1 text-xs text-red-500">{errors.version}</div>}
                </div>
                <div className="sm:col-span-2">
                  <label className="text-xs text-zinc-400">Changelog</label>
                  <textarea value={data.changelog} onChange={(e) => setData({ ...data, changelog: e.target.value })} rows={4} className="mt-1 w-full border border-zinc-700 bg-zinc-900 px-3 py-2 text-sm text-zinc-200" placeholder="Notes for this release" />
                </div>
              </div>
            </div>

            <div className="border border-zinc-700 bg-zinc-900 p-4">
              <div className="text-zinc-50 text-xl font-semibold">Mod Files</div>
              <div className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="sm:col-span-2">
                  <label className="text-xs text-zinc-400">Main archive (.zip, .rar)</label>
                  <input type="file" accept=".zip,.rar" onChange={(e) => setData({ ...data, modFile: e.target.files?.[0] })} className={`mt-1 w-full border px-3 py-2 text-sm ${errors.modFile ? "border-red-600" : "border-zinc-700 bg-zinc-900 text-zinc-200"}`} />
                  {errors.modFile && <div className="mt-1 text-xs text-red-500">{errors.modFile}</div>}
                  {data.modFile && (
                    <div className="mt-2 text-xs text-zinc-400">{data.modFile.name} • {formatFileSize(data.modFile.size)}</div>
                  )}
                </div>
              </div>
            </div>
          </div>

          <aside className="space-y-6">
            <div className="border border-zinc-700 bg-zinc-900 p-4">
              <div className="text-zinc-50 text-lg font-semibold">Metadata</div>
              <div className="mt-4 space-y-3">
                <div>
                  <label className="text-xs text-zinc-400">License</label>
                  <select value={data.license} onChange={(e) => setData({ ...data, license: e.target.value })} className="mt-1 w-full border border-zinc-700 bg-zinc-900 px-3 py-2 text-sm text-zinc-200">
                    {licenses.map((l) => (
                      <option key={l.value} value={l.value}>{l.label}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="text-xs text-zinc-400">Homepage</label>
                  <input value={data.homepage ?? ""} onChange={(e) => setData({ ...data, homepage: e.target.value })} className="mt-1 w-full border border-zinc-700 bg-zinc-900 px-3 py-2 text-sm text-zinc-200" placeholder="Optional URL" />
                </div>
                <div>
                  <label className="text-xs text-zinc-400">Source code</label>
                  <input value={data.sourceUrl ?? ""} onChange={(e) => setData({ ...data, sourceUrl: e.target.value })} className="mt-1 w-full border border-zinc-700 bg-zinc-900 px-3 py-2 text-sm text-zinc-200" placeholder="Optional URL" />
                </div>
              </div>
            </div>

            <div className="border border-zinc-700 bg-zinc-900 p-4">
              <div className="text-zinc-50 text-lg font-semibold">Submit</div>
              <div className="mt-4 space-y-3">
                <button type="submit" disabled={submitting} className={`w-full inline-flex items-center justify-center gap-2 px-3 py-2 text-sm ${submitting ? "bg-purple-700" : "bg-purple-600 hover:bg-purple-500"} text-black`}>
                  <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden>
                    <path d="M12 3v10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    <path d="M8 9l4 4 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <rect x="4" y="17" width="16" height="3" rx="1" fill="none" stroke="currentColor" strokeWidth="2" />
                  </svg>
                  {submitting ? "Submitting…" : "Submit mod"}
                </button>
                {submitted && (
                  <div className="text-center text-sm text-purple-500">Mod submitted successfully</div>
                )}
              </div>
            </div>
          </aside>
        </form>
      </div>
      
    </section>
  );
}
