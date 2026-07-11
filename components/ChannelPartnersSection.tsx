import Image from "next/image";

export function ChannelPartnersSection() {
  return (
    <section
      className="relative -mt-px bg-[linear-gradient(180deg,transparent_0_623px,#f2faf6_623px)] pb-32"
      id="partners"
      aria-labelledby="partners-title"
    >
      <div className="min-h-[623px] bg-[linear-gradient(0deg,rgba(19,42,0,0.79),rgba(19,42,0,0.79)),url('/renew/partners-people.jpg')] bg-cover bg-center pt-[124px] text-center text-white max-[720px]:min-h-[440px] max-[720px]:pt-20">
        <p className="m-0 mb-[36px] text-[25px] leading-none font-normal uppercase">Channel Partners</p>
        <h2 className="m-0 text-[61px] leading-[1.1] font-bold max-[720px]:text-4xl" id="partners-title">
          Why our Channel Partners Trust Us
        </h2>
      </div>

      <div className="relative -left-[6px] mx-auto -mt-[257px] grid w-[1642px] grid-cols-[804px_793px] gap-[45px] max-[1180px]:left-0 max-[1180px]:w-[min(100%_-_44px,960px)] max-[1180px]:grid-cols-1 max-[720px]:w-[min(100%_-_28px,560px)]">
        <Image
          className="h-[512px] w-full rounded-md object-cover"
          src="/renew/video-factory.jpg"
          alt="Solar module manufacturing video"
          width={800}
          height={506}
        />
        <Image
          className="h-[512px] w-full rounded-md object-cover"
          src="/renew/video-team.jpg"
          alt="Channel partner field team video"
          width={790}
          height={506}
        />
      </div>

      <div className="mx-auto mt-[50px] mb-[104px] flex w-[1656px] items-center justify-between max-[1180px]:w-[min(100%_-_44px,960px)] max-[720px]:w-[min(100%_-_28px,560px)] max-[720px]:flex-col max-[720px]:items-stretch" aria-hidden="true">
        <div className="flex items-center justify-center gap-[46px] max-[720px]:gap-[22px]">
          <span className="h-[22px] w-[22px] rounded-full bg-[#e9eeeb]" />
          <span className="h-[22px] w-[22px] rounded-full border-[6px] border-[#e9eeeb] bg-[#b6c2ba]" />
          <span className="h-[22px] w-[22px] rounded-full bg-[#e9eeeb]" />
          <span className="h-[22px] w-[22px] rounded-full bg-[#e9eeeb]" />
          <span className="h-[22px] w-[22px] rounded-full bg-[#e9eeeb]" />
        </div>
        <div className="flex gap-[38px]">
          <button className="h-[50px] w-[50px] rounded-md border-0 bg-[#eef2ef] text-[28px] text-[#c3cdc7]" type="button">
            {"<"}
          </button>
          <button className="h-[50px] w-[50px] rounded-md border-0 bg-[#c6d2ca] text-[28px] text-white" type="button">
            {">"}
          </button>
        </div>
      </div>

      <div className="flex justify-center gap-[100px] max-[720px]:mx-auto max-[720px]:w-[min(100%_-_28px,560px)] max-[720px]:flex-col max-[720px]:items-stretch max-[720px]:gap-[18px]">
        <a
          className="inline-flex h-[54px] w-[371px] items-center justify-center rounded-full bg-[#132a00] text-xl font-normal leading-none whitespace-nowrap text-white max-[720px]:w-full"
          href="#contact"
        >
          Submit a Requirement
        </a>
        <a
          className="inline-flex h-[54px] w-[371px] items-center justify-center rounded-full border-2 border-[#132a00] bg-white text-xl font-normal leading-none whitespace-nowrap text-[#132a00] max-[720px]:w-full"
          href="#contact"
        >
          Become a Channel Partner
        </a>
      </div>
    </section>
  );
}
