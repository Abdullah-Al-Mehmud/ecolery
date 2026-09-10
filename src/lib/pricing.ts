export type CupSize = "90ml" | "210ml";

export interface PriceTier {
  min: number;
  max: number | null; // null = open-ended (contact sales)
  unitPrice: number;
  label: string;
}

export const CURRENCY_SYMBOL = "৳";

export const CUP_META: Record<
  CupSize,
  { name: string; short: string; tagline: string; b2bRange: string; b2cPrice: number }
> = {
  "90ml": {
    name: "Classic 90 ml",
    short: "90 ml",
    tagline: "Espresso, tea & tasting pours",
    b2bRange: "৳8 – ৳12",
    b2cPrice: 15,
  },
  "210ml": {
    name: "Grande 210 ml",
    short: "210 ml",
    tagline: "Coffee, cha & full servings",
    b2bRange: "৳18 – ৳25",
    b2cPrice: 30,
  },
};

export const PRICE_TIERS: Record<CupSize, PriceTier[]> = {
  "90ml": [
    { min: 1, max: 500, unitPrice: 15, label: "1 – 500" },
    { min: 501, max: 2000, unitPrice: 12, label: "501 – 2,000" },
    { min: 2001, max: 5000, unitPrice: 11, label: "2,001 – 5,000" },
    { min: 5001, max: 10000, unitPrice: 10, label: "5,001 – 10,000" },
    { min: 10001, max: null, unitPrice: 0, label: "10,000+" },
  ],
  "210ml": [
    { min: 1, max: 500, unitPrice: 30, label: "1 – 500" },
    { min: 501, max: 2000, unitPrice: 28, label: "501 – 2,000" },
    { min: 2001, max: 5000, unitPrice: 27, label: "2,001 – 5,000" },
    { min: 5001, max: 10000, unitPrice: 25, label: "5,001 – 10,000" },
    { min: 10001, max: null, unitPrice: 0, label: "10,000+" },
  ],
};

export interface QuoteResult {
  tier: PriceTier;
  unitPrice: number;
  total: number;
  savingsVsBase: number;
  savingsPct: number;
  needsContact: boolean;
  nextTierAt: number | null;
  nextTierPrice: number | null;
}

export function getQuote(size: CupSize, quantity: number): QuoteResult | null {
  if (!quantity || quantity < 1) return null;
  const tiers = PRICE_TIERS[size];
  const tier = tiers.find((t) => quantity >= t.min && (t.max === null || quantity <= t.max));
  if (!tier) return null;
  if (tier.max === null) {
    return {
      tier,
      unitPrice: 0,
      total: 0,
      savingsVsBase: 0,
      savingsPct: 0,
      needsContact: true,
      nextTierAt: null,
      nextTierPrice: null,
    };
  }
  const base = tiers[0].unitPrice;
  const total = tier.unitPrice * quantity;
  const savingsVsBase = (base - tier.unitPrice) * quantity;
  const savingsPct = base > 0 ? Math.round(((base - tier.unitPrice) / base) * 100) : 0;
  const idx = tiers.indexOf(tier);
  const next = tiers[idx + 1];
  const nextTierAt =
    next && next.max !== null ? next.min : next && next.max === null ? next.min : null;
  return {
    tier,
    unitPrice: tier.unitPrice,
    total,
    savingsVsBase,
    savingsPct,
    needsContact: false,
    nextTierAt,
    nextTierPrice: next && next.max !== null ? next.unitPrice : null,
  };
}

export function formatBDT(n: number): string {
  return `৳${n.toLocaleString("en-IN")}`;
}
