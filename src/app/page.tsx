import { AnimatedBoxes } from "@/components/misc/animated-boxes-pattern";
import { Associates } from "./components/associates";
import { Products } from "./components/products";
import { Testimonials } from "./components/testimonials";
import { RecentUpdates } from "./components/recent-updates";

export default function Landing() {
  return (
    <main>
      <div className="h-96 relative w-full overflow-hidden bg-zinc-900 flex flex-col items-center justify-center">
        <div className="absolute inset-0 w-full h-full bg-zinc-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
        <AnimatedBoxes />
        <h1 className="md:text-5xl text-xl font-semibold text-white relative z-20">
          Meistergen Technologies
        </h1>
        <p className="text-center mt-2 text-neutral-300 relative z-20">
          Designing Innovative solutions for a better tommorrow
        </p>
      </div>
      <Associates />
      <Products />
      <RecentUpdates />
      <Testimonials />
    </main>
  );
}
