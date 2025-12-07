"use client";
import { useEffect, use } from "react";
import { useRouter } from "next/navigation";

export default function CategoryDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const router = useRouter();
  const { slug } = use(params);

  useEffect(() => {
    router.replace(`/mods?category=${slug}`);
  }, [router, slug]);

  return null;
}
