import Image from "next/image";

const projects = [
  {
    image: "/renew/project-1000.jpg",
    capacity: "1000 MWp",
    module: "Bifacial 540 Wp TOPCon",
    offtaker: "Solar Energy Corporation of India",
    logo: "/renew/seci-logo.png",
    logoAlt: "SECI",
  },
  {
    image: "/renew/project-80-clean.jpg",
    capacity: "80 MWp",
    module: "Bifacial 540 Wp Mono PERC",
    offtaker: "Solar Energy Corporation of India",
    logo: "/renew/seci-logo.png",
    logoAlt: "SECI",
  },
  {
    image: "/renew/project-40.jpg",
    capacity: "40 MWp",
    module: "Monofacial 600 Wp Mono PERC",
    offtaker: "Amazon",
    logo: "/renew/amazon-logo.png",
    logoAlt: "Amazon",
  },
];

export function ProjectsSection() {
  return (
    <section className="bg-white pb-[268px] max-[720px]:py-[72px]" id="projects" aria-labelledby="projects-title">
      <div className="mx-auto w-[1432px] text-center max-[1180px]:w-[min(100%_-_44px,860px)] max-[720px]:w-[min(100%_-_28px,560px)]">
        <p className="mb-[26px] text-[25px] leading-none font-bold text-[#006b38] uppercase max-[720px]:mb-4 max-[720px]:text-base">
          Our Projects
        </p>
        <h2 className="m-0 mb-[34px] text-[56px] leading-[1.08] font-bold tracking-normal text-[#17320d] max-[720px]:text-4xl" id="projects-title">
          Where our panels meet the ground.
        </h2>
        <p className="mx-auto mt-0 mb-[92px] max-w-[760px] text-3xl leading-[1.28] text-black max-[720px]:text-xl">
          From utility-scale plants to commercial rooftops, powered by ReNew Solar Panels.
        </p>
      </div>

      <div className="mx-auto grid w-[1656px] grid-cols-3 gap-[45px] max-[1180px]:w-[min(100%_-_44px,960px)] max-[1180px]:grid-cols-2 max-[720px]:w-[min(100%_-_28px,560px)] max-[720px]:grid-cols-1">
        {projects.map((project) => (
          <article className="overflow-hidden rounded-md bg-[#eef6f2]" key={project.capacity}>
            <Image
              className="h-[390px] w-full object-cover max-[720px]:h-[260px]"
              src={project.image}
              alt={`${project.capacity} solar project`}
              width={515}
              height={390}
              loading="eager"
              unoptimized={project.capacity === "40 MWp"}
            />
            <div className="min-h-[330px] p-[52px] pb-11 text-[21px] leading-[1.32] text-[#787e7a] max-[720px]:min-h-0 max-[720px]:p-7 max-[720px]:text-[17px]">
              <div className="mb-[42px] flex items-center justify-between">
                <strong className="text-[28px] text-[#006b38]">{project.capacity}</strong>
                <Image
                  className={project.logoAlt === "Amazon" ? "h-auto w-[106px] object-contain" : "h-[62px] w-[100px] object-contain"}
                  src={project.logo}
                  alt={project.logoAlt}
                  width={project.logoAlt === "Amazon" ? 106 : 100}
                  height={project.logoAlt === "Amazon" ? 47 : 62}
                />
              </div>
              <p className="m-0 mb-[18px]">
                <b className="text-[#6f7671]">Module</b> {project.module}
              </p>
              <p className="m-0 mb-[18px]">
                <b className="text-[#6f7671]">Developer</b> ReNew
              </p>
              <p className="m-0 mb-[18px]">
                <b className="text-[#6f7671]">Offtaker</b> {project.offtaker}
              </p>
              <p className="m-0 mb-[18px]">
                <b className="text-[#6f7671]">Location</b> Rajasthan
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
