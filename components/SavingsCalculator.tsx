"use client";

import { useMemo, useState, type CSSProperties } from "react";
import { calculateSolar } from "@/lib/solar";

const STATES: Record<string, number> = {
  "Andaman and Nicobar Islands": 6.5,
  "Andhra Pradesh": 7.5,
  "Arunachal Pradesh": 5.8,
  Assam: 7,
  Bihar: 7.4,
  Chandigarh: 6.6,
  Chhattisgarh: 6.8,
  "Dadra and Nagar Haveli and Daman and Diu": 5.9,
  Delhi: 8,
  Goa: 6.7,
  Gujarat: 7.2,
  Haryana: 7.6,
  "Himachal Pradesh": 5.8,
  "Jammu and Kashmir": 5.5,
  Jharkhand: 6.6,
  Karnataka: 8.2,
  Kerala: 7.1,
  Ladakh: 5.2,
  Lakshadweep: 7,
  "Madhya Pradesh": 7.3,
  Maharashtra: 11,
  Manipur: 6.2,
  Meghalaya: 6.4,
  Mizoram: 6,
  Nagaland: 6.1,
  Odisha: 6.8,
  Puducherry: 6,
  Punjab: 7.1,
  Rajasthan: 7.5,
  Sikkim: 5.7,
  "Tamil Nadu": 7,
  Telangana: 8,
  Tripura: 6.5,
  "Uttar Pradesh": 7.4,
  Uttarakhand: 6.2,
  "West Bengal": 7.3,
};

type Category = "residential" | "commercial" | "industrial";

const CATEGORY_MULTIPLIER: Record<Category, number> = {
  residential: 1,
  commercial: 1.35,
  industrial: 1.15,
};

const wholeNumber = new Intl.NumberFormat("en-IN", { maximumFractionDigits: 0 });
const twoDecimals = new Intl.NumberFormat("en-IN", {
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

function tariffFor(state: string, category: Category) {
  return STATES[state] * CATEGORY_MULTIPLIER[category];
}

export function SavingsCalculator() {
  const [usage, setUsage] = useState("400");
  const [state, setState] = useState("Maharashtra");
  const [category, setCategory] = useState<Category>("residential");
  const [subsidy, setSubsidy] = useState(true);
  const [unitCost, setUnitCost] = useState("11.00");
  const [locationStatus, setLocationStatus] = useState("Choose your state manually");

  const result = useMemo(() => calculateSolar(usage, unitCost), [usage, unitCost]);

  const updateState = (nextState: string) => {
    setState(nextState);
    setUnitCost(tariffFor(nextState, category).toFixed(2));
    setLocationStatus("Selected manually");
  };

  const updateCategory = (nextCategory: Category) => {
    setCategory(nextCategory);
    setUnitCost(tariffFor(state, nextCategory).toFixed(2));
    if (nextCategory !== "residential") setSubsidy(false);
  };

  const numericUsage = Number(usage) || 0;
  const usagePercent = Math.max(0, Math.min(100, ((numericUsage - 100) / 2900) * 100));

  return (
    <section className="bg-white pt-[202px] pb-[150px] max-[720px]:py-[72px]" id="calculator" aria-labelledby="calculator-title">
      <div className="mx-auto mb-[62px] grid w-[1430px] grid-cols-[1fr_367px] gap-20 max-[1180px]:w-[min(100%_-_44px,960px)] max-[1180px]:grid-cols-1 max-[720px]:mb-[42px] max-[720px]:w-[min(100%_-_28px,560px)] max-[720px]:gap-6">
        <div>
          <p className="mb-[26px] text-[25px] leading-none font-bold text-[#006b38] uppercase max-[720px]:mb-4 max-[720px]:text-base">
            Savings Calculator
          </p>
          <h2 className="m-0 text-[56px] leading-[1.08] font-bold tracking-normal text-[#17320d] max-[720px]:text-4xl" id="calculator-title">
            How much could you
            <br />
            save this year?
          </h2>
        </div>
        <p className="m-0 self-end text-right text-[26px] leading-[1.3] text-[#59675e] max-[720px]:text-left max-[720px]:text-xl">
          Enter your monthly electricity bill and see your estimated annual savings with
          ReNew Solar Panels.
        </p>
      </div>

      <div className="mx-auto grid w-[1430px] grid-cols-[600px_802px] gap-[30px] max-[1180px]:w-[min(100%_-_44px,960px)] max-[1180px]:grid-cols-1 max-[720px]:w-[min(100%_-_28px,560px)]">
        <form
          className="rounded-md border border-[#dce6e0] bg-white p-9 shadow-[0_18px_45px_rgba(9,45,0,0.12)] max-[720px]:p-[22px]"
          onSubmit={(event) => event.preventDefault()}
        >
          <div>
            <h3 className="m-0 mb-1 text-[24px] leading-tight font-extrabold text-[#183423]">Your details</h3>
            <p className="m-0 text-sm text-[#8d9a92]">Tweak these to match your home or business.</p>
          </div>

          <div className="mt-8 block">
            <div className="mb-3 flex items-center justify-between text-[17px] font-extrabold text-[#183423]">
              <label htmlFor="monthly-units">Electricity used per month</label>
              <span className="font-semibold text-[#7b887f]">kWh (units)</span>
            </div>
            <div className="grid grid-cols-[132px_1fr] items-center gap-6 max-[720px]:grid-cols-1">
              <input
                id="monthly-units"
                data-testid="monthly-usage"
                className="h-[54px] w-full rounded-md border border-[#d6dfda] bg-white px-[17px] text-[17px] font-bold text-[#183423] outline-none focus:border-[#006b38] focus:shadow-[0_0_0_3px_rgba(0,107,56,0.1)]"
                type="number"
                min="1"
                max="5000"
                step="1"
                value={usage}
                onChange={(event) => setUsage(event.target.value)}
              />
              <input
                className="h-[5px] w-full appearance-none rounded-full bg-[#d9e2dd] accent-[#11663a] [&::-webkit-slider-runnable-track]:h-[5px] [&::-webkit-slider-runnable-track]:rounded-full [&::-webkit-slider-runnable-track]:bg-[linear-gradient(to_right,#11663a_0_var(--range-fill),#d9e2dd_var(--range-fill)_100%)] [&::-webkit-slider-thumb]:mt-[-8px] [&::-webkit-slider-thumb]:h-[22px] [&::-webkit-slider-thumb]:w-[22px] [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-[#11663a] [&::-webkit-slider-thumb]:shadow-[0_4px_8px_rgba(9,45,0,0.22)]"
                type="range"
                min="100"
                max="3000"
                step="10"
                value={Math.max(100, Math.min(3000, numericUsage || 100))}
                onChange={(event) => setUsage(event.target.value)}
                style={{ "--range-fill": `${usagePercent}%` } as CSSProperties}
                aria-label="Monthly electricity used"
              />
            </div>
          </div>

          <label className="mt-8 block">
            <span className="mb-3 flex items-center justify-between text-[17px] font-extrabold text-[#183423]">
              <span>State / Union Territory</span>
            </span>
            <select
              className="h-[54px] w-full appearance-none rounded-md border border-[#d6dfda] bg-white bg-[linear-gradient(45deg,transparent_50%,#11663a_50%),linear-gradient(135deg,#11663a_50%,transparent_50%)] bg-[length:8px_8px] bg-[position:calc(100%_-_28px)_23px,calc(100%_-_20px)_23px] bg-no-repeat px-5 pr-[52px] text-[17px] font-bold text-[#183423] outline-none focus:border-[#006b38] focus:shadow-[0_0_0_3px_rgba(0,107,56,0.1)]"
              value={state}
              onChange={(event) => updateState(event.target.value)}
            >
              {Object.keys(STATES).map((name) => (
                <option key={name}>{name}</option>
              ))}
            </select>
            <small className="mt-[9px] block text-xs text-[#8d9a92]" aria-live="polite">
              + {locationStatus}
            </small>
          </label>

          <fieldset className="mt-8 block border-0 p-0">
            <legend className="mb-3.5 text-[17px] font-extrabold text-[#183423]">Customer category</legend>
            <div className="grid h-[58px] grid-cols-3 gap-1.5 rounded-md border border-[#e0e4df] bg-[#f2f0e8] p-1.5 max-[720px]:h-auto max-[720px]:grid-cols-1">
              {(Object.keys(CATEGORY_MULTIPLIER) as Category[]).map((value) => (
                <label className="relative" key={value}>
                  <input
                    className="peer absolute opacity-0"
                    type="radio"
                    name="category"
                    value={value}
                    checked={category === value}
                    onChange={() => updateCategory(value)}
                  />
                  <span className="grid h-11 cursor-pointer place-items-center rounded-md text-[15px] font-extrabold text-[#59675e] peer-checked:bg-[#2f7445] peer-checked:text-white">
                    {value[0].toUpperCase() + value.slice(1)}
                  </span>
                </label>
              ))}
            </div>
          </fieldset>

          <div className="mt-8 flex items-center justify-between border-y border-[#e6ece8] py-[23px]">
            <div>
              <strong className="block text-[17px] text-[#183423]">Rooftop subsidy applicable</strong>
              <small className="mt-1.5 block text-xs text-[#94a098]">For residential rooftop under PM Surya Ghar.</small>
            </div>
            <label className="relative shrink-0">
              <input
                className="peer absolute opacity-0"
                type="checkbox"
                checked={subsidy}
                disabled={category !== "residential"}
                onChange={(event) => setSubsidy(event.target.checked)}
              />
              <span className="block h-[31px] w-[54px] cursor-pointer rounded-full bg-[#cbd4cf] p-1 peer-checked:bg-[#2f7445] peer-disabled:opacity-50 after:block after:h-[23px] after:w-[23px] after:rounded-full after:bg-white after:shadow-[0_2px_5px_rgba(0,0,0,0.22)] after:transition-transform after:content-[''] peer-checked:after:translate-x-[23px]" />
            </label>
          </div>

          <label className="mt-8 block">
            <span className="mb-3 flex items-center justify-between text-[17px] font-extrabold text-[#183423]">
              <span>Electricity unit cost</span>
              <em className="rounded-full bg-[#e5f4eb] px-[11px] py-1.5 text-[13px] font-bold not-italic text-[#2f7445]">Auto</em>
            </span>
            <span className="relative flex h-[54px] w-full items-center rounded-md border border-[#d6dfda] bg-white text-[#183423] outline-none focus-within:border-[#006b38] focus-within:shadow-[0_0_0_3px_rgba(0,107,56,0.1)]">
              <b className="absolute left-[18px] text-[#75877f]">₹</b>
              <input
                className="h-full w-full border-0 bg-transparent px-[88px] pl-[42px] text-[17px] font-bold text-[#183423] outline-none"
                type="number"
                min="0"
                max="100"
                step="0.01"
                value={unitCost}
                onChange={(event) => setUnitCost(event.target.value)}
              />
              <small className="absolute right-[18px] text-[17px] font-bold text-[#8c9992]">/ kWh</small>
            </span>
            <small className="mt-2.5 block text-xs text-[#91a099]">Auto-filled for {state} - edit to match your bill.</small>
          </label>
        </form>

        <div className="grid grid-rows-[156px_180px_158px_162px] gap-[18px] max-[720px]:grid-rows-none" aria-live="polite">
          <section className="relative overflow-hidden rounded-md bg-[#2f7042] p-[34px_38px] text-white max-[720px]:p-[22px]">
            <span className="mb-2.5 block text-[13px] font-black tracking-[0.12em] uppercase">Recommended plant size</span>
            <h3 className="m-0 mb-2 text-[56px] leading-[0.9] font-bold">
              <b id="plant-size">{twoDecimals.format(result.plantSize)}</b> <small>kW</small>
            </h3>
            <p className="m-0 text-[17px] font-semibold">
              <i className="not-italic text-[#f6d963]">+</i> Generates about{" "}
              <strong>
                <b id="daily-generation">{twoDecimals.format(result.dailyGeneration)}</b> units
              </strong>{" "}
              every day
            </p>
            <span className="absolute -top-11 right-[58px] h-40 w-40 rounded-full bg-white/10" />
            <span className="absolute right-24 -bottom-[82px] h-[140px] w-[140px] rounded-full bg-white/10" />
          </section>

          <section className="rounded-md border border-[#dce6e0] bg-white p-[28px_31px] shadow-[0_18px_45px_rgba(9,45,0,0.12)] max-[720px]:p-[22px]">
            <h3 className="m-0 mb-5 text-[22px] font-bold text-[#183423]">
              <span className="text-[#006b38]">+</span> Electricity generation
            </h3>
            <dl className="m-0">
              <div className="flex min-h-[38px] justify-between border-b border-[#e3e9e5] text-[17px] font-semibold text-[#74817a]">
                <dt>Monthly</dt>
                <dd className="m-0 font-black text-[#183423]">
                  <b id="monthly-generation">{wholeNumber.format(result.monthlyGeneration)}</b> kWh
                </dd>
              </div>
              <div className="flex min-h-[38px] justify-between border-b border-[#e3e9e5] text-[17px] font-semibold text-[#74817a]">
                <dt>Annually</dt>
                <dd className="m-0 font-black text-[#183423]">
                  <b id="annual-generation">{wholeNumber.format(result.annualGeneration)}</b> kWh
                </dd>
              </div>
              <div className="flex min-h-[38px] justify-between text-[17px] font-semibold text-[#74817a]">
                <dt>Lifetime (30 yr)</dt>
                <dd className="m-0 font-black text-[#183423]">
                  <b id="lifetime-generation">{wholeNumber.format(result.lifetimeGeneration)}</b> kWh
                </dd>
              </div>
            </dl>
          </section>

          <section className="rounded-md border border-[#dce6e0] bg-white p-[28px_31px] shadow-[0_18px_45px_rgba(9,45,0,0.12)] max-[720px]:p-[22px]">
            <h3 className="m-0 mb-5 text-[22px] font-bold text-[#183423]">
              <span className="text-[#006b38]">₹</span> Bill savings
            </h3>
            <div className="grid grid-cols-3 gap-3 max-[720px]:grid-cols-1">
              <div className="min-h-[66px] rounded-md bg-[#f2f0e8] px-[18px] py-3.5">
                <span className="mb-1.5 block text-[11px] font-black tracking-[0.12em] text-[#819088] uppercase">Monthly</span>
                <strong className="text-[23px] text-[#183423]">
                  ₹ <b id="monthly-savings">{wholeNumber.format(result.monthlySavings)}</b>
                </strong>
              </div>
              <div className="min-h-[66px] rounded-md bg-[#f2f0e8] px-[18px] py-3.5">
                <span className="mb-1.5 block text-[11px] font-black tracking-[0.12em] text-[#819088] uppercase">Annually</span>
                <strong className="text-[23px] text-[#183423]">
                  ₹ <b id="annual-savings">{wholeNumber.format(result.annualSavings)}</b>
                </strong>
              </div>
              <div className="min-h-[66px] rounded-md bg-[#2f7445] px-[18px] py-3.5">
                <span className="mb-1.5 block text-[11px] font-black tracking-[0.12em] text-white uppercase">Lifetime</span>
                <strong className="text-[23px] text-white">
                  ₹ <b id="lifetime-savings">{wholeNumber.format(result.lifetimeSavings)}</b>
                </strong>
              </div>
            </div>
            <p className="mt-3 mb-0 text-xs font-semibold text-[#8f9d96]">
              Estimated savings at ₹<b id="tariff-label">{Number(unitCost || 0).toFixed(2)}</b>
              /kWh.
            </p>
          </section>

          <section className="rounded-md border border-[#cce8da] bg-[#ecf8f2] p-[26px_31px] text-[#2f7445] max-[720px]:p-[22px]">
            <h3 className="m-0 mb-5 text-[22px] font-bold text-[#183423]">Environmental impact</h3>
            <div className="grid grid-cols-2 gap-[30px] max-[720px]:grid-cols-1">
              <div>
                <strong className="mb-2 block text-[37px] leading-none" id="carbon-reduced">
                  {twoDecimals.format(result.carbonReduced)}
                </strong>
                <span className="text-xs font-bold">tonnes of CO2e avoided over 30 years</span>
              </div>
              <div className="border-l border-[#badfc9] pl-[30px] max-[720px]:border-l-0 max-[720px]:pl-0">
                <strong className="mb-2 block text-[37px] leading-none" id="tree-equivalent">
                  {twoDecimals.format(result.treeEquivalent)}
                </strong>
                <span className="text-xs font-bold">trees planted, every year</span>
              </div>
            </div>
          </section>
        </div>
      </div>
    </section>
  );
}
