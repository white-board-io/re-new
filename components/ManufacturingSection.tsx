import Image from "next/image";

export function ManufacturingSection() {
  return (
    <section
      className="relative min-h-[840px] overflow-hidden bg-[#132a00] text-white max-[1180px]:min-h-0"
      id="manufacturing"
      aria-labelledby="manufacturing-title"
    >
      <div
        className="pointer-events-none absolute left-[890px] top-[-252px] h-[770px] w-[570px] bg-[repeating-conic-gradient(from_0deg,rgba(141,198,63,0.18)_0deg_3deg,transparent_3deg_9deg)] [mask:radial-gradient(circle,transparent_0_35%,#000_35.5%_37.5%,transparent_38%_45%,#000_45.5%_48%,transparent_48.5%_56%,#000_56.5%_59%,transparent_59.5%)] max-[1180px]:hidden"
        aria-hidden="true"
      />

      <div className="relative mx-auto h-[840px] w-[1430px] max-[1180px]:grid max-[1180px]:h-auto max-[1180px]:w-[min(100%_-_44px,960px)] max-[1180px]:grid-cols-1 max-[1180px]:gap-14 max-[1180px]:py-[84px] max-[720px]:w-[min(100%_-_28px,560px)] max-[720px]:py-[72px]">
        <div className="absolute left-0 top-[170px] max-[1180px]:static">
          <p className="mb-[34px] text-[25px] leading-none font-normal uppercase">Manufacturing</p>
          <h2 className="m-0 text-[56px] leading-[1.06] font-bold max-[720px]:text-4xl" id="manufacturing-title">
            Built at scale.
            <br />
            Built to last.
          </h2>
        </div>

        <div className="absolute right-[2px] top-[243px] w-[330px] text-center max-[1180px]:static max-[1180px]:w-auto max-[1180px]:text-left">
          <strong className="mb-[14px] block text-[36px] leading-none font-bold">9.3+ GW</strong>
          <span className="mx-auto block max-w-[300px] text-[21px] leading-[1.28] font-normal text-white/95 max-[1180px]:mx-0">
            of cells and modules
            <br />
            dispatched till now.
          </span>
        </div>

        <figure className="absolute left-[-52px] top-[400px] m-0 w-[430px] text-center max-[1180px]:static max-[1180px]:w-full">
          <Image
            className="mx-auto h-[330px] w-[430px] object-contain max-[720px]:h-auto max-[720px]:w-full"
            src="/renew/map-jaipur.png"
            alt="Jaipur, Rajasthan plant"
            width={430}
            height={330}
          />
          <figcaption className="mx-auto mt-[47px] max-w-[430px] text-[24px] leading-[1.25] font-bold">
            4 GW module manufacturing capacity
            <br />
            under a single roof.
          </figcaption>
        </figure>

        <article className="absolute left-[509px] top-[344px] flex h-[496px] w-[424px] flex-col items-center bg-[#102700] px-[47px] pt-[72px] text-center max-[1180px]:static max-[1180px]:h-auto max-[1180px]:w-full max-[1180px]:py-16 max-[720px]:px-7">
          <h3 className="m-0 text-[25px] leading-tight font-bold">Dholera, Gujarat</h3>
          <p className="mt-[57px] mb-0 text-[21px] leading-[1.42] font-normal text-white/95">
            (including a 4 GW TOPCon facility under development) and 2.4 GW module
            manufacturing capacity, spread across 55 acres in Gujarat&apos;s Special
            Investment Region. Equipped with AI-driven defect diagnostics and automated
            material movement systems.
          </p>
        </article>

        <figure className="absolute right-[-63px] top-[400px] m-0 w-[420px] text-center max-[1180px]:static max-[1180px]:w-full">
          <Image
            className="mx-auto h-[330px] w-[420px] object-contain max-[720px]:h-auto max-[720px]:w-full"
            src="/renew/map-vizag.png"
            alt="Visakhapatnam, Andhra Pradesh plant"
            width={420}
            height={330}
          />
          <figcaption className="mx-auto mt-[47px] max-w-[420px] text-[24px] leading-[1.25] font-bold">
            6.5 GW wafer and
            <br />
            ingot manufacturing facility
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
