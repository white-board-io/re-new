const roofCards = [
  { title: "For your home", variant: "small" },
  {
    title: "For your business",
    body: "When your energy costs are high, and your timelines are tight, you need a manufacturer you can count on - consistent availability, committed supply, and panels that perform.",
    variant: "large",
  },
  { title: "For large-scale projects", variant: "small" },
];

export function WhoWeServeSection() {
  return (
    <section
      className="relative min-h-[1410px] bg-[linear-gradient(180deg,#f4faf7_0%,#ffffff_72%)] pt-[168px] pb-[146px] max-[720px]:min-h-0 max-[720px]:py-20"
      id="serve"
      aria-labelledby="serve-title"
    >
      <button
        className="absolute -top-[74px] right-[164px] h-[94px] w-[150px] rounded-t-full border-0 bg-[#006b38] text-[13px] leading-[1.08] font-black text-[#8dc63f] uppercase before:absolute before:inset-x-[-62px] before:top-[-72px] before:z-[-1] before:h-[150px] before:bg-[repeating-conic-gradient(#8dc63f_0deg_2deg,transparent_2deg_8deg)] before:[mask:radial-gradient(circle_at_50%_100%,transparent_0_42%,#000_43%_45%,transparent_46%_54%,#000_55%_57%,transparent_58%)] max-[720px]:hidden"
        type="button"
      >
        Enquire
        <br />
        Now
      </button>
      <div
        className="pointer-events-none absolute left-1/2 top-0 h-[520px] w-[520px] -translate-y-[28%] -translate-x-[8%] bg-[repeating-conic-gradient(from_0deg,#8dc63f_0deg_3deg,transparent_3deg_9deg)] opacity-95 [mask:radial-gradient(circle,transparent_0_34%,#000_35%_37%,transparent_38%_45%,#000_46%_48%,transparent_49%_57%,#000_58%_60%,transparent_61%)] max-[720px]:hidden"
        aria-hidden="true"
      />

      <div className="mx-auto w-[1432px] max-[1180px]:w-[min(100%_-_44px,860px)] max-[720px]:w-[min(100%_-_28px,560px)]">
        <p className="mb-[26px] text-[25px] leading-none font-bold text-[#006b38] uppercase max-[720px]:mb-4 max-[720px]:text-base">
          Who We Serve
        </p>
        <h2 className="m-0 text-[56px] leading-[1.08] font-bold tracking-normal text-[#17320d] max-[720px]:text-4xl" id="serve-title">
          Solar for <span className="text-[#006b38]">every</span> roof.
        </h2>
        <div className="mt-9 flex gap-12 text-lg font-normal text-[#7f8681] max-[720px]:flex-col max-[720px]:items-stretch" aria-label="Service model">
          <span className="before:mr-3.5 before:inline-block before:h-[22px] before:w-[22px] before:rounded-md before:border-2 before:border-[#a8aea9] before:align-[-5px] before:content-['']">
            Manufactured by us
          </span>
          <span className="before:mr-3.5 before:inline-block before:h-[22px] before:w-[22px] before:rounded-md before:border-2 before:border-[#a8aea9] before:align-[-5px] before:content-['']">
            Installed by our certified partner network
          </span>
        </div>

        <div className="mt-[110px] grid grid-cols-[368px_512px_368px] items-end gap-[92px] max-[1180px]:mt-[90px] max-[1180px]:grid-cols-1 max-[1180px]:gap-7">
          {roofCards.map((card) => (
            <article
              className={
                card.variant === "large"
                  ? "relative flex min-h-[548px] flex-col items-center justify-center overflow-hidden rounded-md bg-[linear-gradient(180deg,rgba(0,107,56,0.68),rgba(0,107,56,0.86)),url('/renew/who-rooftop.jpg')] bg-cover bg-center px-[78px] py-[72px] pb-16 text-center text-white shadow-[0_18px_45px_rgba(9,45,0,0.12)] max-[1180px]:min-h-[380px] max-[720px]:p-8"
                  : "relative flex min-h-[470px] items-end overflow-hidden rounded-md bg-[linear-gradient(180deg,rgba(0,107,56,0.04),rgba(0,107,56,0.88)),url('/renew/who-rooftop.jpg')] bg-cover bg-center px-14 pb-[62px] text-white shadow-[0_18px_45px_rgba(9,45,0,0.12)] max-[1180px]:min-h-[380px] max-[720px]:p-8"
              }
              key={card.title}
            >
              <h3 className="m-0 text-[34px] leading-[1.18] font-bold">{card.title}</h3>
              {card.body ? <p className="my-[44px] mb-[64px] text-[22px] leading-[1.34] font-normal max-[720px]:my-6 max-[720px]:mb-8 max-[720px]:text-lg">{card.body}</p> : null}
              {card.body ? (
                <a
                  href="#contact"
                  className="mx-auto inline-flex h-[55px] w-[170px] items-center justify-center rounded-full bg-white text-[17px] leading-none font-bold whitespace-nowrap text-[#006b38]"
                >
                  Get in Touch
                </a>
              ) : null}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
