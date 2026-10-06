export interface IndustryOption {
  value: string
  label: string
}

/** Demo form industry choices. `service` in ?industry= maps to "other". */
export const INDUSTRIES: IndustryOption[] = [
  { value: 'hvac', label: 'HVAC / AC service' },
  { value: 'cctv', label: 'CCTV & security' },
  { value: 'solar', label: 'Solar' },
  { value: 'construction', label: 'Construction' },
  { value: 'other', label: 'Other service business' },
]
