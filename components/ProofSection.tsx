import Image from "next/image";

export function ProofSection() {
  return (
    <section className="bg-white py-[142px] pb-[136px] text-center max-[720px]:py-[72px]" aria-labelledby="proof-title">
      <div className="mx-auto w-[1432px] max-[1180px]:w-[min(100%_-_44px,860px)] max-[720px]:w-[min(100%_-_28px,560px)]">
        <p className="mb-[38px] text-[25px] leading-none font-bold text-[#006b38] uppercase max-[720px]:mb-4 max-[720px]:text-base">
          Why ReNew Solar Panels
        </p>
        <h2 className="m-0 mb-[80px] text-[54px] leading-[1.08] font-bold tracking-normal text-[#17320d] max-[720px]:text-4xl" id="proof-title">
          Built for India&apos;s sun. Backed for 30 years.
        </h2>
      </div>
      <Image
        className="h-[250px] w-full object-cover object-top max-[720px]:h-[150px]"
        src="/renew/certification-strip.png"
        alt="ReNew Solar Panels certifications and rankings"
        width={1920}
        height={250}
      />
    </section>
  );
}
