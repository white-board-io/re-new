import Image from "next/image";

const footerNav = [
  { href: "#serve", label: "Who We Serve" },
  { href: "#products", label: "Products" },
  { href: "#manufacturing", label: "Manufacturing" },
  { href: "#projects", label: "Our Projects" },
  { href: "#partners", label: "Channel Partners" },
];
const downloads = ["Product Datasheets", "Installation & Warranty", "Certificates"];
const socialLinks = [
  { href: "#", label: "LinkedIn", icon: "linkedin" },
  { href: "#", label: "Instagram", icon: "instagram" },
  { href: "#", label: "Facebook", icon: "facebook" },
  { href: "#", label: "X", icon: "x" },
  { href: "#", label: "YouTube", icon: "youtube" },
];

function SocialIcon({ icon }: { icon: string }) {
  if (icon === "instagram") {
    return (
      <svg className="h-7 w-7 fill-none stroke-current stroke-[1.8]" aria-hidden="true" viewBox="0 0 24 24">
        <rect x="5" y="5" width="14" height="14" rx="4" />
        <circle cx="12" cy="12" r="3.4" />
        <circle cx="16.2" cy="7.8" r="1" />
      </svg>
    );
  }

  if (icon === "youtube") {
    return (
      <svg className="h-7 w-7 fill-current stroke-0" aria-hidden="true" viewBox="0 0 24 24">
        <rect x="3.5" y="6.5" width="17" height="11" rx="3" />
        <path className="fill-[#277c50]" d="M10.5 9.2v5.6l5-2.8-5-2.8z" />
      </svg>
    );
  }

  return <span className="block leading-none">{icon === "linkedin" ? "in" : icon === "facebook" ? "f" : "X"}</span>;
}

export function Footer() {
  return (
    <footer className="relative h-[826px] overflow-hidden bg-[#132a00] text-white/80 after:absolute after:right-0 after:bottom-[73px] after:left-0 after:h-px after:bg-white/70 after:content-[''] max-[1180px]:h-auto max-[1180px]:overflow-visible max-[1180px]:py-24 max-[1180px]:after:hidden max-[720px]:py-[72px]">
      <div className="relative mx-auto block h-[752px] w-[1650px] max-[1180px]:grid max-[1180px]:h-auto max-[1180px]:w-[min(100%_-_44px,960px)] max-[1180px]:grid-cols-2 max-[1180px]:gap-[58px] max-[720px]:w-[min(100%_-_28px,560px)] max-[720px]:grid-cols-1">
        <div className="absolute left-0 top-[114px] w-[660px] max-[1180px]:static max-[1180px]:w-auto">
          <div className="relative mb-[60px] w-[244px] max-[1180px]:mb-12">
            <Image className="h-auto w-full" src="/renew/logo-footer.png" alt="ReNew Solar Panels" width={280} height={156} />
          </div>
          <p className="m-0 max-w-[650px] text-[23px] leading-[1.4] font-light max-[720px]:mb-12 max-[720px]:text-lg">
            <span className="block max-[1180px]:inline">ReNew Solar is the manufacturing arm of ReNew,</span>{" "}
            <span className="block max-[1180px]:inline">India&apos;s leading decarbonisation solutions company listed on</span>{" "}
            <span className="block max-[1180px]:inline">Nasdaq. With three world-class facilities in Jaipur, Dholera,</span>{" "}
            <span className="block max-[1180px]:inline">and Vizag, we build the panels that are powering India&apos;s net-</span>{" "}
            <span className="block max-[1180px]:inline">zero future.</span>
          </p>
          <div className="absolute left-[-2px] top-[490px] flex gap-[54px] max-[1180px]:static max-[1180px]:mt-[54px] max-[720px]:flex-wrap max-[720px]:gap-4" aria-label="Social links">
            {socialLinks.map((item) => (
              <a
                className="grid h-[60px] min-h-[60px] w-[60px] min-w-[60px] flex-[0_0_60px] place-items-center rounded-full bg-[#277c50] text-2xl font-black text-[#8dc63f]"
                href={item.href}
                key={item.label}
                aria-label={item.label}
              >
                <SocialIcon icon={item.icon} />
              </a>
            ))}
          </div>
        </div>

        <nav
          className="absolute right-0 top-[297px] flex gap-[52px] text-[19px] leading-none font-light text-white/75 max-[1180px]:static max-[1180px]:flex-col max-[1180px]:gap-[18px]"
          aria-label="Footer navigation"
        >
          {footerNav.map((item) => (
            <a href={item.href} key={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        <div className="absolute left-[929px] top-[397px] grid w-[180px] content-start gap-2 text-xl leading-[1.28] font-light max-[1180px]:static max-[1180px]:w-auto">
          <h3 className="m-0 mb-3.5 text-xl leading-none font-bold text-white">Downloads</h3>
          {downloads.map((item) => (
            <a className="justify-self-start" href="#" key={item}>
              {item}
            </a>
          ))}
        </div>

        <div className="absolute left-[1194px] top-[397px] grid w-[230px] content-start gap-2 text-xl leading-[1.28] font-light max-[1180px]:static max-[1180px]:w-auto">
          <h3 className="m-0 mb-3.5 text-xl leading-none font-bold text-white">Corporate</h3>
          <a className="justify-self-start" href="#">
            Corporate Brochure
          </a>
        </div>

        <div className="absolute left-[1458px] top-[397px] grid w-[250px] content-start gap-2 text-xl leading-[1.28] font-light max-[1180px]:static max-[1180px]:w-auto">
          <h3 className="m-0 mb-3.5 text-xl leading-none font-bold text-white">Support Portals</h3>
          <small className="mt-1.5 text-[10px] leading-none text-white/50">Module Warranty Registration</small>
          <a className="justify-self-start text-xl leading-[1.1] underline underline-offset-[7px]" href="#">
            warranty.renew.com
          </a>
          <small className="mt-1.5 text-[10px] leading-none text-white/50">Register a Complain</small>
          <a className="justify-self-start text-xl leading-[1.1] underline underline-offset-[7px]" href="#">
            renew.freshdesk.com
          </a>
        </div>
      </div>
    </footer>
  );
}
