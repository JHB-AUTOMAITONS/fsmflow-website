/**
 * Sample data used ONLY inside product mockups (dashboards, job cards, phone
 * screens). It is illustrative — customers, people and figures are fictional.
 * Keeping it in one place makes every visual tell the same story.
 */
export type JobStatus = 'assigned' | 'en-route' | 'in-progress' | 'completed' | 'pending' | 'overdue'

export const JOB_STEPS: { key: JobStatus; label: string }[] = [
  { key: 'assigned', label: 'Assigned' },
  { key: 'en-route', label: 'En route' },
  { key: 'in-progress', label: 'In progress' },
  { key: 'completed', label: 'Completed' },
]

export type TechTone = 'brand' | 'iris' | 'aqua' | 'mint' | 'heat'

export interface Technician {
  id: string
  name: string
  initials: string
  role: string
  area: string
  status: 'on-job' | 'en-route' | 'available' | 'break'
  jobsToday: number
  tone: TechTone
}

export const TECHNICIANS: Technician[] = [
  { id: 't1', name: 'Ravi Kumar', initials: 'RK', role: 'Senior AC technician', area: 'Anna Nagar', status: 'on-job', jobsToday: 4, tone: 'brand' },
  { id: 't2', name: 'Arun Selvam', initials: 'AS', role: 'AC technician', area: 'T. Nagar', status: 'en-route', jobsToday: 5, tone: 'aqua' },
  { id: 't3', name: 'Imran Khan', initials: 'IK', role: 'Installation lead', area: 'Guindy', status: 'available', jobsToday: 3, tone: 'iris' },
  { id: 't4', name: 'Suresh Pillai', initials: 'SP', role: 'AMC technician', area: 'Adyar', status: 'on-job', jobsToday: 4, tone: 'mint' },
  { id: 't5', name: 'Karthik Raman', initials: 'KR', role: 'VRF engineer', area: 'OMR', status: 'en-route', jobsToday: 2, tone: 'heat' },
  { id: 't6', name: 'Faizal Mohammed', initials: 'FM', role: 'AC technician', area: 'Velachery', status: 'available', jobsToday: 3, tone: 'brand' },
]

export interface SampleJob {
  id: string
  type: string
  detail: string
  customer: string
  area: string
  time: string
  status: JobStatus
  tech: string
  priority?: 'high'
}

export const JOBS: SampleJob[] = [
  { id: 'JOB-1024', type: 'AC Maintenance', detail: 'Quarterly service · 2 split ACs', customer: 'Sharma Residency', area: 'Anna Nagar', time: '10:30', status: 'in-progress', tech: 'Ravi Kumar' },
  { id: 'JOB-1027', type: 'AC Repair', detail: 'Not cooling · gas leak suspected', customer: 'Metro Café', area: 'T. Nagar', time: '11:15', status: 'en-route', tech: 'Arun Selvam' },
  { id: 'JOB-1031', type: 'AC Installation', detail: '2 × 1.5 ton split AC', customer: 'Greenleaf Offices', area: 'Guindy', time: '12:00', status: 'assigned', tech: 'Imran Khan' },
  { id: 'JOB-1033', type: 'Breakdown Service', detail: 'VRF outdoor unit fault', customer: 'Hotel Palm Grove', area: 'OMR', time: '14:30', status: 'assigned', tech: 'Karthik Raman', priority: 'high' },
  { id: 'JOB-1019', type: 'AMC Visit', detail: 'Quarterly · 6 units', customer: 'Orchid Clinic', area: 'Adyar', time: '09:00', status: 'completed', tech: 'Suresh Pillai' },
  { id: 'JOB-1022', type: 'Gas Top-up', detail: 'R32 · 1 unit', customer: 'Patel Textiles', area: 'Velachery', time: '08:30', status: 'completed', tech: 'Faizal Mohammed' },
]

export const KPIS = {
  todaysJobs: 24,
  openJobs: 9,
  completedJobs: 15,
  activeTechs: 12,
  totalTechs: 14,
  pendingPayments: 182500,
}

/** Revenue (₹ thousands) for the last ten working days. */
export const REVENUE_SERIES = [42, 55, 48, 62, 58, 71, 66, 79, 74, 88]

export interface SampleAsset {
  name: string
  model: string
  location: string
  warranty: string
  amc: string
  status: 'active' | 'expiring' | 'expired'
}

export const CUSTOMER = {
  id: 'Customer #1024',
  name: 'Sharma Residency',
  contact: 'Mr. Anil Sharma',
  phone: '+91 98•••• 4210',
  address: '14, 3rd Avenue, Anna Nagar, Chennai',
  type: 'Residential · AMC customer',
  since: 'Customer since Mar 2023',
  visits: 12,
  assets: [
    { name: 'Split AC · 1.5 ton', model: 'Inverter · Living room', location: 'Ground floor', warranty: 'Warranty till Mar 2027', amc: 'AMC active', status: 'active' },
    { name: 'Split AC · 1.0 ton', model: 'Inverter · Bedroom', location: 'First floor', warranty: 'Warranty ended', amc: 'AMC active', status: 'active' },
    { name: 'Cassette AC · 2.0 ton', model: 'Hall', location: 'Ground floor', warranty: 'Warranty till Dec 2026', amc: 'Renew in 12 days', status: 'expiring' },
  ] as SampleAsset[],
  history: [
    { date: '04 Oct', title: 'AC Maintenance', note: 'Filters cleaned, gas pressure normal', status: 'completed' as JobStatus },
    { date: '12 Jul', title: 'AC Repair', note: 'Capacitor replaced', status: 'completed' as JobStatus },
    { date: '05 Apr', title: 'AMC Visit', note: 'Quarterly service, 3 units', status: 'completed' as JobStatus },
  ],
}

export interface SamplePart {
  name: string
  sku: string
  stock: number
  min: number
  unit: string
  price: number
}

export const PARTS: SamplePart[] = [
  { name: 'Running capacitor 35 µF', sku: 'CAP-035', stock: 2, min: 10, unit: 'pcs', price: 420 },
  { name: 'R32 refrigerant gas', sku: 'GAS-R32', stock: 14, min: 8, unit: 'kg', price: 900 },
  { name: 'Copper pipe 1/4" (15 m)', sku: 'CPR-014', stock: 22, min: 12, unit: 'coils', price: 1850 },
  { name: 'Drain pump · split AC', sku: 'PMP-DRN', stock: 6, min: 5, unit: 'pcs', price: 1150 },
  { name: 'Indoor PCB · inverter', sku: 'PCB-INV', stock: 3, min: 4, unit: 'pcs', price: 3400 },
  { name: 'Remote controller · universal', sku: 'RMT-UNI', stock: 31, min: 10, unit: 'pcs', price: 260 },
]
