"use client";

import Image from "next/image";

export function CertificationStrip() {
  const certs = [
    { src: "/icons/edible.png", alt: "100% Edible" },
    { src: "/icons/recycleablePackaging.png", alt: "Recyclable Packaging" },
    { src: "/icons/recycle.png", alt: "Recyclable" },
    { src: "/icons/biodegradable.png", alt: "Biodegradable" },
    { src: "/icons/foodSafe.png", alt: "Food-Safe" },
  ];

  return (
    <section className="bg-cream border-y border-black/5 px-4 py-8 sm:px-6 sm:py-10">
      <div className="mx-auto grid max-w-4xl grid-cols-3 items-center justify-items-center gap-4 sm:grid-cols-5 sm:gap-6 md:gap-10">
        {certs.map((cert) => (
          <div key={cert.alt} className="flex flex-col items-center justify-center text-center">
            <Image
              src={cert.src}
              alt={cert.alt}
              width={256}
              height={256}
              className="h-16 w-16 object-contain sm:h-24 sm:w-24 md:h-28 md:w-28 lg:h-32 lg:w-32"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
