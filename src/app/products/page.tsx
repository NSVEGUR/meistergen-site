import { Spotlight } from "@/components/misc/spotlight";
import { WobbleCard } from "@/components/misc/wobble-card";
import { data } from "./data";

export default function ProductsPage() {
  return (
    <main>
      <div className="h-96 w-full flex md:items-center md:justify-center bg-zinc-900 antialiased bg-grid-white/[0.02] relative overflow-hidden">
        <Spotlight
          className="-top-40 left-0 md:left-60 md:-top-20"
          fill="white"
        />
        <div className=" p-4 max-w-7xl  mx-auto relative z-10  w-full pt-20 md:pt-0">
          <h1 className="text-4xl md:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
            Products
          </h1>
          <p className="mt-4 font-normal text-base text-neutral-300 max-w-lg text-center mx-auto">
            Empowering Innovation, One Solution at a Time. Discover tools that
            transform ideas into reality.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full p-3 md:p-10">
        {data.map(({ id, containerChildren, containerClassName }) => (
          <WobbleCard
            containerClassName={containerClassName}
            href={`/products/${id}`}
            key={id}
          >
            {containerChildren}
          </WobbleCard>
        ))}
      </div>
    </main>
  );
}
