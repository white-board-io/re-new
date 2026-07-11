import Image from "next/image";

const navItems = [
  { href: "#serve", label: "Who We Serve" },
  { href: "#products", label: "Products" },
  { href: "#manufacturing", label: "Manufacturing" },
  { href: "#projects", label: "Our Projects" },
  { href: "#partners", label: "Channel Partners" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 h-[138px] bg-white shadow-[0_4px_12px_rgba(18,42,0,0.07)] max-[1180px]:h-auto">
      <div className="relative -left-[9px] mx-auto h-full w-[1546px] max-[1180px]:left-0 max-[1180px]:grid max-[1180px]:h-auto max-[1180px]:w-[min(100%_-_44px,960px)] max-[1180px]:grid-cols-[auto_1fr] max-[1180px]:items-center max-[1180px]:gap-5 max-[1180px]:py-[22px] max-[720px]:w-[min(100%_-_28px,560px)]">
        <a className="absolute left-[-4px] top-[45px] shrink-0 max-[1180px]:static" href="#home" aria-label="ReNew Solar Panels home">
          <Image
            className="h-auto w-[140px] max-[720px]:w-[120px]"
            src="/renew/logo-nav.png"
            alt="ReNew Solar Panels"
            width={140}
            height={78}
            preload
          />
        </a>

        <div className="absolute right-0 top-[8px] flex items-center gap-[27px] text-[14px] leading-none text-black max-[1180px]:static max-[1180px]:justify-self-end max-[720px]:hidden">
          <span>ReNew solar panels, call</span>
          <strong className="text-[14px] font-bold">9220 440 044</strong>
        </div>

        <nav
          className="absolute left-[366px] top-[75px] flex items-center gap-[42px] text-[20px] leading-none font-normal text-black max-[1180px]:static max-[1180px]:col-span-full max-[1180px]:flex-wrap max-[1180px]:gap-[22px] max-[1180px]:text-base max-[720px]:grid max-[720px]:grid-cols-2 max-[720px]:gap-x-5 max-[720px]:gap-y-4"
          aria-label="Primary navigation"
        >
          {navItems.map((item) => (
            <a className="whitespace-nowrap" key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        <div className="absolute right-0 top-[65px] flex items-center gap-[22px] text-base max-[1180px]:static max-[1180px]:col-span-full max-[720px]:grid max-[720px]:grid-cols-1 max-[720px]:items-stretch">
          <a
            className="inline-flex h-[42px] w-[146px] items-center justify-center rounded-full border-2 border-[#006b38] bg-white font-bold leading-none whitespace-nowrap text-[#006b38] max-[720px]:w-full"
            href="#contact"
          >
            Contact Us
          </a>
          <a
            className="inline-flex h-[42px] w-[210px] items-center justify-center rounded-full bg-[#132a00] font-bold leading-none whitespace-nowrap text-white max-[720px]:w-full"
            href="#calculator"
          >
            Savings Calculator
          </a>
        </div>
      </div>
    </header>
  );
}
