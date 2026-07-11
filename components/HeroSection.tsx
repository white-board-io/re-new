export function HeroSection() {
  return (
    <section
      className="relative min-h-[778px] overflow-hidden bg-[#315c39] bg-[url('/renew/hero-earth.png')] bg-[length:128%_auto] bg-[position:center_72%] bg-no-repeat [clip-path:polygon(0_0,100%_0,100%_91.5%,96.5%_100%,3.5%_100%,0_91.5%)] before:pointer-events-none before:absolute before:inset-0 before:bg-white/10 max-[1180px]:min-h-[640px] max-[720px]:min-h-[560px] max-[720px]:bg-cover"
      id="home"
      aria-labelledby="hero-title"
    >
      <div className="fixed right-0 top-[380px] z-[60] grid h-[260px] w-16 grid-rows-[44px_1fr] overflow-hidden rounded-l-[14px] bg-[#277c50] text-white shadow-[0_12px_18px_rgba(0,0,0,0.24)] max-[720px]:hidden">
        <span
          className="mx-auto mt-5 grid h-6 w-6 place-items-center rounded-full bg-white font-black text-[#277c50]"
          aria-hidden="true"
        >
          {"<"}
        </span>
        <strong className="self-center justify-self-center text-[23px] leading-none [writing-mode:vertical-rl] [transform:rotate(180deg)]">
          Price List 2026
        </strong>
      </div>

      <div className="relative z-10 grid justify-items-center pt-[119px] text-center text-white max-[720px]:px-5 max-[720px]:pt-[84px]">
        <h1
          className="m-0 max-w-[930px] text-[62px] leading-none font-bold tracking-[-0.01em] max-[720px]:w-full max-[720px]:max-w-full max-[720px]:text-[28px] max-[720px]:leading-[1.08]"
          id="hero-title"
        >
          Choose India&apos;s
          <br />
          most reliable solar panels
        </h1>
        <p className="mt-[18px] mb-[201px] text-[26px] leading-[1.12] font-normal max-[1180px]:mb-[130px] max-[720px]:mt-5 max-[720px]:mb-[92px] max-[720px]:text-[19px]">
          When you put solar on your roof,
          <br />
          the manufacturer matters.
        </p>
        <a
          href="#contact"
          className="inline-flex h-[44px] w-[204px] items-center justify-center rounded-full bg-[#8dc63f] text-lg font-bold leading-none whitespace-nowrap text-white"
        >
          Enquire Now
        </a>
        <div className="mt-[103px] flex items-center justify-center gap-14 max-[720px]:mt-16 max-[720px]:gap-[22px]" aria-hidden="true">
          <span className="h-[26px] w-[26px] rounded-full border-4 border-white bg-transparent max-[720px]:h-[18px] max-[720px]:w-[18px]" />
          <span className="h-[26px] w-[26px] rounded-full bg-white max-[720px]:h-[18px] max-[720px]:w-[18px]" />
          <span className="h-[26px] w-[26px] rounded-full bg-white max-[720px]:h-[18px] max-[720px]:w-[18px]" />
        </div>
      </div>
    </section>
  );
}
