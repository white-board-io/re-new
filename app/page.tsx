"use client";

import { useMemo, useState, type CSSProperties } from "react";
import Image from "next/image";
import { calculateSolar } from "@/lib/solar";

const STATES: Record<string, number> = {
  "Andaman and Nicobar Islands": 6.5, "Andhra Pradesh": 7.5, "Arunachal Pradesh": 5.8,
  Assam: 7, Bihar: 7.4, Chandigarh: 6.6, Chhattisgarh: 6.8,
  "Dadra and Nagar Haveli and Daman and Diu": 5.9, Delhi: 8, Goa: 6.7,
  Gujarat: 7.2, Haryana: 7.6, "Himachal Pradesh": 5.8, "Jammu and Kashmir": 5.5,
  Jharkhand: 6.6, Karnataka: 8.2, Kerala: 7.1, Ladakh: 5.2, Lakshadweep: 7,
  "Madhya Pradesh": 7.3, Maharashtra: 11, Manipur: 6.2, Meghalaya: 6.4,
  Mizoram: 6, Nagaland: 6.1, Odisha: 6.8, Puducherry: 6, Punjab: 7.1,
  Rajasthan: 7.5, Sikkim: 5.7, "Tamil Nadu": 7, Telangana: 8,
  Tripura: 6.5, "Uttar Pradesh": 7.4, Uttarakhand: 6.2, "West Bengal": 7.3,
};

type Category = "residential" | "commercial" | "industrial";
const CATEGORY_MULTIPLIER: Record<Category, number> = {
  residential: 1,
  commercial: 1.35,
  industrial: 1.15,
};

const wholeNumber = new Intl.NumberFormat("en-IN", { maximumFractionDigits: 0 });
const twoDecimals = new Intl.NumberFormat("en-IN", { minimumFractionDigits: 2, maximumFractionDigits: 2 });

function tariffFor(state: string, category: Category) {
  return STATES[state] * CATEGORY_MULTIPLIER[category];
}

export default function Home() {
  const [usage, setUsage] = useState("400");
  const [state, setState] = useState("Maharashtra");
  const [category, setCategory] = useState<Category>("residential");
  const [subsidy, setSubsidy] = useState(true);
  const [unitCost, setUnitCost] = useState("11.00");

  const result = useMemo(() => calculateSolar(usage, unitCost), [usage, unitCost]);

  const updateState = (nextState: string) => {
    setState(nextState);
    setUnitCost(tariffFor(nextState, category).toFixed(2));
  };

  const updateCategory = (nextCategory: Category) => {
    setCategory(nextCategory);
    setUnitCost(tariffFor(state, nextCategory).toFixed(2));
    if (nextCategory !== "residential") setSubsidy(false);
  };

  const numericUsage = Number(usage) || 0;
  const usagePercent = Math.max(0, Math.min(100, ((numericUsage - 100) / 2900) * 100));

  return (
    <main className="solarEstimator">
      <header className="intro">
        <a className="brand" href="https://www.renew.com/" target="_blank" rel="noreferrer" aria-label="ReNew website">
          <Image className="brandLogo" src="https://dg4e57nn4fnta.cloudfront.net/logos/ReNew.svg" alt="ReNew" width={120} height={46} priority />
        </a>
        <div className="introCopy">
          <span className="eyebrow">Solar electricity calculator</span>
          <h1>Global Leading <mark>Renewable &amp; Green Energy</mark> Company</h1>
          <p>ReNew (NASDAQ: RNW), a global renewable company offering clean and green energy with a 20.2 GW portfolio across wind, solar, hybrid and hydro power.</p>
        </div>
      </header>

      <section className="calculatorGrid">
        <form className="panel inputPanel" onSubmit={(event) => event.preventDefault()}>
          <div className="panelHeading"><h2>Your details</h2><p>Tweak these to match your home or business.</p></div>

          <div className="fieldBlock usageField">
            <div className="fieldLabel"><label htmlFor="monthly-units">Electricity used per month</label><span>kWh (units)</span></div>
            <div className="usageControl">
              <input id="monthly-units" data-testid="monthly-usage" className="numberBox" type="number" min="1" max="5000" step="1" value={usage} onChange={(event) => setUsage(event.target.value)} />
              <input className="range" type="range" min="100" max="3000" step="10" value={Math.max(100, Math.min(3000, numericUsage || 100))} onChange={(event) => setUsage(event.target.value)} style={{ "--range-fill": `${usagePercent}%` } as CSSProperties} aria-label="Monthly electricity used" />
            </div>
          </div>

          <label className="fieldBlock">
            <span className="fieldLabel"><span>State / Union Territory</span></span>
            <select value={state} onChange={(event) => updateState(event.target.value)}>{Object.keys(STATES).map((name) => <option key={name}>{name}</option>)}</select>
          </label>

          <fieldset className="fieldBlock categoryField">
            <legend>Customer category</legend>
            <div className="segments">
              {(Object.keys(CATEGORY_MULTIPLIER) as Category[]).map((value) => (
                <label key={value}><input type="radio" name="category" value={value} checked={category === value} onChange={() => updateCategory(value)} /><span>{value[0].toUpperCase() + value.slice(1)}</span></label>
              ))}
            </div>
          </fieldset>

          <div className="subsidyRow fieldBlock">
            <div><strong>Rooftop subsidy applicable</strong><small>For residential rooftop under PM Surya Ghar.</small></div>
            <label className="switch"><input type="checkbox" checked={subsidy} disabled={category !== "residential"} onChange={(event) => setSubsidy(event.target.checked)} /><span /></label>
          </div>

          <label className="fieldBlock tariffField">
            <span className="fieldLabel"><span>Electricity unit cost</span><em>Auto</em></span>
            <span className="currencyInput"><b>₹</b><input type="number" min="0" max="100" step="0.01" value={unitCost} onChange={(event) => setUnitCost(event.target.value)} /><small>/ kWh</small></span>
            <small className="fieldNote">Auto-filled for {state} · edit to match your bill.</small>
          </label>
        </form>

        <div className="outputColumn" aria-live="polite">
          <section className="plantCard">
            <span>Recommended plant size</span>
            <h2><b id="plant-size">{twoDecimals.format(result.plantSize)}</b> <small>kW</small></h2>
            <p><i>ϟ</i> Generates about <strong><b id="daily-generation">{twoDecimals.format(result.dailyGeneration)}</b> units</strong> every day</p>
            <span className="bubble one" /><span className="bubble two" />
          </section>

          <section className="panel outputCard generationCard">
            <h3><span>ϟ</span> Electricity generation</h3>
            <dl>
              <div><dt>Monthly</dt><dd><b id="monthly-generation">{wholeNumber.format(result.monthlyGeneration)}</b> kWh</dd></div>
              <div><dt>Annually</dt><dd><b id="annual-generation">{wholeNumber.format(result.annualGeneration)}</b> kWh</dd></div>
              <div><dt>Lifetime (30 yr)</dt><dd><b id="lifetime-generation">{wholeNumber.format(result.lifetimeGeneration)}</b> kWh</dd></div>
            </dl>
          </section>

          <section className="panel outputCard savingsCard">
            <h3><span>₹</span> Bill savings</h3>
            <div className="savingGrid">
              <div><span>Monthly</span><strong>₹ <b id="monthly-savings">{wholeNumber.format(result.monthlySavings)}</b></strong></div>
              <div><span>Annually</span><strong>₹ <b id="annual-savings">{wholeNumber.format(result.annualSavings)}</b></strong></div>
              <div className="lifetime"><span>Lifetime</span><strong>₹ <b id="lifetime-savings">{wholeNumber.format(result.lifetimeSavings)}</b></strong></div>
            </div>
            <p>Estimated savings at ₹<b id="tariff-label">{Number(unitCost || 0).toFixed(2)}</b>/kWh.</p>
          </section>

          <section className="impactCard">
            <h3>⌁ &nbsp; Environmental impact</h3>
            <div className="impactGrid">
              <div><strong id="carbon-reduced">{twoDecimals.format(result.carbonReduced)}</strong><span>tonnes of CO₂e avoided over 30 years</span></div>
              <div><strong id="tree-equivalent">{twoDecimals.format(result.treeEquivalent)}</strong><span>trees planted, every year</span></div>
            </div>
          </section>
        </div>
      </section>
    </main>
  );
}
