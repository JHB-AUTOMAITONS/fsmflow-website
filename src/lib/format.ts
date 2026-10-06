const inrFormatter = new Intl.NumberFormat('en-IN', { maximumFractionDigits: 0 })

/** 124500 → "₹1,24,500" */
export function inr(value: number): string {
  return `₹${inrFormatter.format(value)}`
}

/** 182000 → "₹1.82L", 12500000 → "₹1.25Cr" */
export function inrCompact(value: number): string {
  if (value >= 1_00_00_000) return `₹${trim(value / 1_00_00_000)}Cr`
  if (value >= 1_00_000) return `₹${trim(value / 1_00_000)}L`
  if (value >= 1_000) return `₹${trim(value / 1_000)}K`
  return `₹${value}`
}

function trim(n: number): string {
  return n.toFixed(2).replace(/\.?0+$/, '')
}
