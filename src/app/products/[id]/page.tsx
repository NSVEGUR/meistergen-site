import React from "react";
import { MacbookScroll } from "@/components/misc/macbook-scroll";
import Link from "next/link";
import { data } from "../data";
import { notFound } from "next/navigation";

export default async function ProductPage({
  params,
}: {
  params: { id: string };
}) {
  const id = params.id;
  const product = data.find((item) => item.id.toString() == id);
  if (!product) {
    notFound();
  }
  return (
    <main className="max-w-7xl mx-auto px-5 py-20">
      <div>
        <h1 className="text-3xl font-bold">{product.title}</h1>
        <p className="text-muted-foreground">{product.description}</p>
      </div>
      <div className="overflow-hidden dark:bg-[#0B0B0F] bg-white w-full">
        <MacbookScroll
          title={<span></span>}
          badge={<Link href="https://peerlist.io/manuarora"></Link>}
          src={`/linear.webp`}
          showGradient={false}
        />
      </div>
    </main>
  );
}
