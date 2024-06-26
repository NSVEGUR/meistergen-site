import React from "react";
import { BentoGrid, BentoGridItem } from "@/components/misc/bento-grid";
import { MailCheck, Magnet, MapPin, Cloud } from "lucide-react";

export function Associates() {
  return (
    <div className="my-10 px-10">
      <h2 className="text-center text-5xl font-semibold">Associates</h2>
      <BentoGrid className="max-w-4xl mx-auto md:auto-rows-[20rem] py-10">
        {items.map((item, i) => (
          <BentoGridItem
            key={i}
            title={item.title}
            description={item.description}
            header={item.header}
            className={item.className}
            icon={item.icon}
          />
        ))}
      </BentoGrid>
    </div>
  );
}
const Skeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl   dark:bg-dot-white/[0.2] bg-dot-black/[0.2] [mask-image:radial-gradient(ellipse_at_center,white,transparent)]  border border-transparent dark:border-white/[0.2] bg-neutral-100 dark:bg-black"></div>
);
const items = [
  {
    title: "The Dawn of Innovation",
    description: "Explore the birth of groundbreaking ideas and inventions.",
    header: <Skeleton />,
    className: "md:col-span-2 border border-black/[0.2]",
    icon: <MailCheck className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "The Digital Revolution",
    description: "Dive into the transformative power of technology.",
    header: <Skeleton />,
    className: "md:col-span-1 border border-black/[0.2]",
    icon: <Magnet className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "The Art of Design",
    description: "Discover the beauty of thoughtful and functional design.",
    header: <Skeleton />,
    className: "md:col-span-1 border border-black/[0.2]",
    icon: <MapPin className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "The Power of Communication",
    description:
      "Understand the impact of effective communication in our lives.",
    header: <Skeleton />,
    className: "md:col-span-2 border border-black/[0.2]",
    icon: <Cloud className="h-4 w-4 text-neutral-500" />,
  },
];
