"use client";

import Image from "next/image";

export function CertificationStrip() {
  return (
    <section className="bg-cream border-y border-black/5 px-6 py-10">
      <div className="mx-auto flex max-w-7xl flex-wrap items-end justify-center gap-14 gap-y-8 px-3 md:px-6">
        <div className="flex flex-col items-center justify-end gap-0 text-center">
          <Image
            src="/icons/edible.png"
            alt="100% Edible"
            width={256}
            height={256}
            className="h-28 w-28 object-contain md:h-[140px] md:w-[140px]"
          />
        </div>
        <div className="flex flex-col items-center justify-end gap-0 text-center">
          <Image
            src="/icons/recycleablePackaging.png"
            alt="Recyclable Packaging"
            width={256}
            height={256}
            className="ml-5 h-28 w-28 object-contain md:h-[140px] md:w-[140px]"
          />
        </div>
        <div className="flex flex-col items-center justify-end gap-0 text-center">
          <Image
            src="/icons/petroleum.png"
            alt="No Petroleum"
            width={256}
            height={256}
            className="ml-5 h-28 w-28 object-contain md:h-[140px] md:w-[140px]"
          />
        </div>
        <div className="flex flex-col items-center justify-end gap-0 text-center">
          <Image
            src="/icons/recycle.png"
            alt="Recyclable"
            width={256}
            height={256}
            className="h-28 w-28 object-contain md:h-[144px] md:w-[156px]"
          />
        </div>
        <div className="flex flex-col items-center justify-end gap-0 text-center">
          <Image
            src="/icons/biodegradable.png"
            alt="Biodegradable"
            width={256}
            height={256}
            className="h-28 w-28 object-cover md:h-[144px] md:w-[125px]"
          />
        </div>
        <div className="flex flex-col items-center justify-end gap-0 text-center">
          <Image
            src="/icons/foodSafe.png"
            alt="Food-Safe"
            width={256}
            height={256}
            className="h-28 w-28 object-cover md:h-[144px] md:w-[126px]"
          />
        </div>
      </div>
    </section>
  );
}