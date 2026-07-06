export type SolarResult = {
  plantSize: number;
  dailyGeneration: number;
  monthlyGeneration: number;
  annualGeneration: number;
  lifetimeGeneration: number;
  monthlySavings: number;
  annualSavings: number;
  lifetimeSavings: number;
  carbonReduced: number;
  treeEquivalent: number;
};

export function calculateSolar(usage: string | number, unitCost: string | number): SolarResult {
  const monthlyUnits = Math.max(0, Number(usage) || 0);
  const cost = Math.max(0, Number(unitCost) || 0);
  const plantSize = monthlyUnits / (4 * 30);
  const dailyGeneration = plantSize * 4;
  const monthlyGeneration = dailyGeneration * 30;
  const annualGeneration = monthlyGeneration * 12;
  const lifetimeGeneration = annualGeneration * 30;

  return {
    plantSize,
    dailyGeneration,
    monthlyGeneration,
    annualGeneration,
    lifetimeGeneration,
    monthlySavings: monthlyGeneration * cost,
    annualSavings: annualGeneration * cost,
    lifetimeSavings: lifetimeGeneration * cost,
    carbonReduced: lifetimeGeneration * 0.841 / 1000,
    treeEquivalent: annualGeneration * 0.841 / 25,
  };
}
