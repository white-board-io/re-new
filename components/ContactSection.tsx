const fields = ["Name", "Company", "Phone", "State"];

function MailIcon() {
  return (
    <svg className="h-[24px] w-[28px] shrink-0 fill-none stroke-current stroke-[2.2]" viewBox="0 0 28 24" aria-hidden="true">
      <rect x="1.5" y="2.5" width="25" height="19" rx="1.5" />
      <path d="m3 5 11 8 11-8" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg className="h-[27px] w-[28px] shrink-0 fill-current" viewBox="0 0 28 28" aria-hidden="true">
      <path d="M6.1 2.3c.8-.3 1.7.1 2 .9l2.1 5.2c.3.7.1 1.5-.5 2l-2.2 1.8c1.4 3.1 3.9 5.6 7 7l1.8-2.2c.5-.6 1.3-.8 2-.5l5.2 2.1c.8.3 1.2 1.2.9 2l-1.2 3.8c-.3.9-1.1 1.5-2 1.5C10.7 25.9 2.1 17.3 2.1 6.8c0-.9.6-1.7 1.5-2L6.1 2.3Z" />
    </svg>
  );
}

export function ContactSection() {
  return (
    <section className="bg-[#2f7042] pt-[153px] pb-[170px] text-white max-[720px]:py-[72px]" id="contact" aria-labelledby="contact-title">
      <div className="mx-auto grid w-[1430px] grid-cols-[700px_543px] items-start gap-[184px] max-[1180px]:w-[min(100%_-_44px,960px)] max-[1180px]:grid-cols-1 max-[720px]:w-[min(100%_-_28px,560px)] max-[720px]:gap-12">
        <div>
          <h2 className="m-0 text-[56px] leading-[1.03] font-bold tracking-[-0.01em] max-[720px]:text-4xl" id="contact-title">
            Power your
            <br />
            next <span className="text-[#8dc63f]">project</span> with
            <br />
            ReNew Solar Panel.
          </h2>
          <p className="mt-[44px] mb-[104px] max-w-[540px] text-[31px] leading-[1.35] font-light text-white/80 max-[720px]:my-7 max-[720px]:mb-10 max-[720px]:text-xl">
            Tell us what you need and our team will get back to you within 24 hours.
          </p>
          <address className="grid gap-[26px] text-[31px] leading-none font-normal not-italic text-[#8dc63f] max-[720px]:text-lg">
            <a className="flex items-center gap-[38px]" href="mailto:pv.marketing@renew.com">
              <MailIcon />
              <span>pv.marketing@renew.com</span>
            </a>
            <a className="flex items-center gap-[38px]" href="tel:+919220440044">
              <PhoneIcon />
              <span>9220 440 044</span>
            </a>
          </address>
        </div>

        <form className="grid gap-[30px]" aria-label="Submit a requirement">
          {fields.map((field) => (
            <label className="relative block" key={field}>
              <input
                className="contact-field h-[76px] w-full rounded-md border-0 bg-white px-[34px] text-[23px] text-[#5e665f] outline-none ring-[#8dc63f] focus:ring-2 max-[720px]:text-lg"
                type={field === "Phone" ? "tel" : "text"}
                aria-label={field}
                placeholder=" "
              />
              <span className="contact-placeholder pointer-events-none absolute left-[34px] top-1/2 -translate-y-1/2 text-[23px] text-[#8d8d8d] transition-opacity max-[720px]:text-lg">
                {field}<b className="font-normal text-[#d87576]">*</b>
              </span>
            </label>
          ))}
          <select
            className="h-[76px] w-full appearance-none rounded-md border-0 bg-white bg-[linear-gradient(45deg,transparent_50%,#222_50%),linear-gradient(135deg,#222_50%,transparent_50%),linear-gradient(90deg,#f3f3f3,#f3f3f3)] bg-[length:13px_13px,13px_13px,104px_100%] bg-[position:calc(100%_-_46px)_34px,calc(100%_-_34px)_34px,100%_0] bg-no-repeat px-[34px] text-[23px] text-[#8d8d8d] outline-none ring-[#8dc63f] focus:ring-2 max-[720px]:text-lg"
            defaultValue=""
            aria-label="Requirement type"
          >
            <option value="" disabled>
              Requirement type*
            </option>
            <option>Residential</option>
            <option>Commercial</option>
            <option>Large-scale project</option>
            <option>Channel partner</option>
          </select>
          <button className="mt-[50px] h-[54px] w-[192px] justify-self-center rounded-full border-0 bg-[#8dc63f] text-[19px] font-normal text-white" type="button">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
}
