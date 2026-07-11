const stats = [
  {
    value: "6.4 GW & 2.5 GW",
    label: "Module Manufacturing & Cell Capacity",
    labelWidth: "max-w-[230px]",
  },
  {
    value: "3 Plants",
    label: "Jaipur, Dholera & Vizag",
    labelWidth: "max-w-[140px]",
  },
  {
    value: "23,000",
    label: "Modules Per Day",
    labelWidth: "max-w-[100px]",
  },
  {
    value: "$100 M",
    label: "Marquee investment from BII",
    labelWidth: "max-w-[160px]",
  },
  {
    value: "No. 1",
    label: "ESG Ranked #1 in India",
    labelWidth: "max-w-[130px]",
  },
];

function StatePairIcon() {
  return (
    <span aria-hidden="true">
      <svg className="h-[72px] w-[52px] fill-none stroke-[#8dc63f] stroke-[2.5]" viewBox="0 0 52 72" role="img">
        <path d="m20 3 4 4 8 1 2 8-3 4 2 7-7 2-5 4-6-3-8 1-1-8 4-5-1-7 7-2Z" />
        <path d="m28 36 6 3 8-1 2 7 5 5-3 7 1 6-7 2-5 5-7-4-8 1-2-7-5-4 3-7-1-6 8-2Z" />
      </svg>
    </span>
  );
}

export function StatsStrip() {
  return (
    <section className="relative z-10 bg-white pt-[86px] pb-[64px] max-[1180px]:py-[48px] max-[720px]:py-[34px]" aria-label="ReNew manufacturing highlights">
      <div className="mx-auto grid w-[1572px] grid-cols-[378px_248px_222px_221px_263px] items-start gap-x-[60px] max-[1180px]:w-[min(100%_-_44px,960px)] max-[1180px]:grid-cols-2 max-[1180px]:gap-10 max-[720px]:w-[min(100%_-_28px,560px)] max-[720px]:grid-cols-1">
        {stats.map((stat) => (
          <div className="grid grid-cols-[58px_1fr] items-start gap-[31px] max-[1180px]:gap-[18px]" key={stat.value}>
            <StatePairIcon />
            <div>
              <strong className="mb-[15px] block text-[30px] leading-none font-bold text-[#006b38]">{stat.value}</strong>
              <span className={`block text-lg leading-[1.42] font-normal text-[#757c77] ${stat.labelWidth}`}>{stat.label}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
