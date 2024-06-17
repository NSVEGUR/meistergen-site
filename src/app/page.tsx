import { AnimatedBoxes } from "@/components/misc/animated-boxes-pattern";
import { Associates } from "./components/associates";
import { Products } from "./components/products";
import { Testimonials } from "./components/testimonials";
import { RecentUpdates } from "./components/recent-updates";
import { HoverBorderGradient } from "@/components/misc/hover-border-gradient";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

export default function LandingPage() {
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
        <Link
          className="flex justify-center text-center my-5 text-xs"
          href="/about"
        >
          <HoverBorderGradient
            containerClassName="rounded-full"
            as="button"
            className="dark:bg-black bg-white text-black dark:text-white flex items-center"
          >
            <span>✨ Explore More</span>
            <ChevronRight className="w-4 h-4 ml-1" />
          </HoverBorderGradient>
        </Link>
      </div>
      <Associates />
      <Products />
      <RecentUpdates />
      <Testimonials />
    </main>
  );
}
