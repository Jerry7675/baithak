"use client";

import Link from "next/link";
import { featuredDishes } from "@/content/menus";

export function DishCarousel() {
  const loop = [...featuredDishes, ...featuredDishes];

  return (
    <div className="overflow-hidden border-y border-[var(--line)] bg-cream">
      <div className="marquee-track gap-0">
        {loop.map((dish, i) => (
          <Link
            key={`${dish.name}-${i}`}
            href="/menus/all-day"
            className="group relative w-[280px] shrink-0 border-r border-[var(--line)] sm:w-[340px]"
          >
            <div className="aspect-[4/5] overflow-hidden">
              <img
                src={dish.image}
                alt={dish.name}
                className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
              />
            </div>
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-5 text-white">
              <p className="eyebrow opacity-70">{dish.category}</p>
              <p className="font-display mt-1 text-2xl">{dish.name}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
