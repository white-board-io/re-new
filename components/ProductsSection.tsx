import Image from "next/image";

const productTicker = [
  "3 Plants - Jaipur, Dholera & Vizag",
  "9.3+ GW Dispatched",
  "6.4 Lakh Cells Produced Daily",
  "23,000 Modules Per Day",
  "7 times Bloomberg Tier 1",
];

export function ProductsSection() {
  return (
    <section className="bg-white" id="products" aria-labelledby="products-title">
      <div className="mx-auto w-[1432px] pb-[72px] text-center max-[1180px]:w-[min(100%_-_44px,860px)] max-[720px]:w-[min(100%_-_28px,560px)] max-[720px]:pb-10">
        <p className="mb-[26px] text-[25px] leading-none font-bold text-[#006b38] uppercase max-[720px]:mb-4 max-[720px]:text-base">
          Products
        </p>
        <h2 className="mx-auto m-0 max-w-[850px] text-[56px] leading-[1.08] font-bold tracking-normal text-[#17320d] max-[720px]:text-4xl" id="products-title">
          The right <span className="text-[#006b38]">panel</span> for your home, your business, your project.
        </h2>
      </div>

      <div className="min-h-[840px] bg-[linear-gradient(180deg,rgba(255,255,255,0.22),rgba(255,255,255,0.26)_60%,#fff_60%),url('/renew/products-landscape.png')] bg-cover bg-top pb-[168px] max-[720px]:min-h-0 max-[720px]:pb-[60px]">
        <div className="relative -left-[20px] mx-auto grid w-[1429px] grid-cols-[924px_462px] gap-[43px] pt-[118px] max-[1180px]:left-0 max-[1180px]:w-[min(100%_-_44px,960px)] max-[1180px]:grid-cols-1 max-[720px]:w-[min(100%_-_28px,560px)] max-[720px]:pt-10" aria-label="Solar panel products">
          <Image
            className="h-[560px] w-full rounded-md object-cover max-[1180px]:h-auto"
            src="/renew/product-module-card.jpg"
            alt="Solar Module product card"
            width={924}
            height={560}
          />
          <Image
            className="h-[560px] w-full rounded-md object-cover max-[1180px]:h-auto"
            src="/renew/product-cell-card.jpg"
            alt="Solar Cell product card"
            width={462}
            height={560}
          />
        </div>
      </div>

      <div className="flex h-[60px] w-full items-center gap-[52px] overflow-hidden bg-[#8dc63f] px-[72px] text-2xl font-normal whitespace-nowrap text-white max-[720px]:h-auto max-[720px]:px-6 max-[720px]:py-[18px] max-[720px]:text-[17px]" aria-label="Manufacturing metrics">
        {productTicker.map((item) => (
          <span className="inline-flex items-center gap-[42px] before:h-[11px] before:w-[11px] before:rounded-full before:bg-white before:content-['']" key={item}>
            {item}
          </span>
        ))}
      </div>
    </section>
  );
}
