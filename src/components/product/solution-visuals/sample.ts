/**
 * Illustrative sample data for the four industry mockups (CCTV, solar,
 * construction, service business). Everything here is fictional: customers,
 * people, serial numbers and amounts exist only to make the product screens
 * look real. Never present any of it as a customer, result or statistic.
 */

/* -------------------------------------------------------------------------- */
/* CCTV                                                                        */
/* -------------------------------------------------------------------------- */

export type CameraState = 'installed' | 'mounting' | 'pending'

export interface FloorCamera {
  id: number
  label: string
  /** Position in the 420 × 270 floor-plan coordinate space. */
  x: number
  y: number
  /** Viewing direction in degrees (0 = east, 90 = south). */
  angle: number
  /** Field-of-view width in degrees. */
  spread: number
  /** Reach of the cone in plan units. */
  reach: number
  state: CameraState
}

export const FLOOR_CAMERAS: FloorCamera[] = [
  { id: 1, label: 'Entrance', x: 28, y: 28, angle: 42, spread: 74, reach: 78, state: 'installed' },
  { id: 2, label: 'Reception desk', x: 130, y: 118, angle: 218, spread: 70, reach: 68, state: 'installed' },
  { id: 3, label: 'Open office · west', x: 152, y: 26, angle: 28, spread: 78, reach: 104, state: 'installed' },
  { id: 4, label: 'Open office · east', x: 394, y: 26, angle: 152, spread: 76, reach: 104, state: 'installed' },
  { id: 5, label: 'Open office · south', x: 394, y: 142, angle: 196, spread: 70, reach: 100, state: 'installed' },
  { id: 6, label: 'Corridor', x: 212, y: 142, angle: 292, spread: 66, reach: 82, state: 'installed' },
  { id: 7, label: 'Meeting room', x: 318, y: 244, angle: 268, spread: 84, reach: 78, state: 'mounting' },
  { id: 8, label: 'Server room', x: 88, y: 136, angle: 130, spread: 74, reach: 62, state: 'pending' },
]

export interface InstalledCamera {
  id: string
  place: string
  model: string
  serial: string
  warranty: string
  amc: string
}

export const INSTALLED_CAMERAS: InstalledCamera[] = [
  { id: 'CAM-01', place: 'Entrance', model: '4 MP dome', serial: 'SN 24A-11873', warranty: 'Warranty to Oct 2028', amc: 'AMC · quarterly' },
  { id: 'CAM-02', place: 'Reception desk', model: '4 MP dome', serial: 'SN 24A-11874', warranty: 'Warranty to Oct 2028', amc: 'AMC · quarterly' },
  { id: 'CAM-03', place: 'Open office · west', model: '5 MP bullet', serial: 'SN 24B-20318', warranty: 'Warranty to Oct 2028', amc: 'AMC · quarterly' },
  { id: 'CAM-06', place: 'Corridor', model: '4 MP dome', serial: 'SN 24A-11880', warranty: 'Warranty to Oct 2028', amc: 'AMC · quarterly' },
]

/* -------------------------------------------------------------------------- */
/* Solar                                                                       */
/* -------------------------------------------------------------------------- */

export interface SolarStage {
  key: string
  label: string
  /** Number of projects at this stage. */
  count: number
  /** Combined capacity in kW. */
  kw: number
  cards: { name: string; kw: number; value: number }[]
}

export const SOLAR_STAGES: SolarStage[] = [
  {
    key: 'survey',
    label: 'Survey',
    count: 6,
    kw: 31,
    cards: [
      { name: 'Deshmukh', kw: 5.4, value: 3_12_000 },
      { name: 'Kulkarni Dairy', kw: 12, value: 6_48_000 },
    ],
  },
  {
    key: 'design',
    label: 'Design & quote',
    count: 4,
    kw: 48,
    cards: [
      { name: 'Sai Engineering', kw: 25, value: 12_10_000 },
      { name: 'Patil', kw: 3.3, value: 1_92_000 },
    ],
  },
  {
    key: 'install',
    label: 'Installation',
    count: 3,
    kw: 96,
    cards: [
      { name: 'Greenfield School', kw: 40, value: 19_40_000 },
      { name: 'Joshi Hospital', kw: 30, value: 14_80_000 },
    ],
  },
  {
    key: 'commission',
    label: 'Commissioning',
    count: 2,
    kw: 18,
    cards: [{ name: 'Mehta Apartments', kw: 18, value: 8_90_000 }],
  },
  {
    key: 'service',
    label: 'After-sales',
    count: 12,
    kw: 168,
    cards: [
      { name: 'Rane Foods', kw: 50, value: 0 },
      { name: 'Bhosale Mills', kw: 35, value: 0 },
    ],
  },
]

export const SOLAR_PROJECT = {
  id: 'SOL-0418',
  name: 'Deshmukh Residence',
  area: 'Baner, Pune',
  kwp: 5.4,
  panels: 12,
  wp: 450,
  meters: [
    { label: 'Mounting structure', value: 100, tone: 'mint' as const },
    { label: 'Panel installation', value: 75, tone: 'brand' as const },
    { label: 'Inverter & wiring', value: 40, tone: 'brand' as const },
    { label: 'Testing & handover', value: 0, tone: 'brand' as const },
  ],
}

export const OM_VISITS = [
  { date: '10 Oct', task: 'Panel cleaning', site: 'Patil Residence · 3.3 kW', tag: 'AMC' },
  { date: '14 Oct', task: 'Inverter health check', site: 'Rane Foods · 50 kW', tag: 'AMC' },
  { date: '21 Oct', task: 'Annual service visit', site: 'Mehta Apartments · 18 kW', tag: 'Warranty' },
]

/* -------------------------------------------------------------------------- */
/* Construction                                                                */
/* -------------------------------------------------------------------------- */

export const GANTT_MONTHS = ['Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan']
/** Position of "today" (6 Oct) along the six-month timeline, in months. */
export const GANTT_TODAY = 2.16

export type GanttState = 'done' | 'active' | 'upcoming'

export interface GanttRow {
  label: string
  short: string
  /** Start / end in months from 1 Aug. */
  from: number
  to: number
  state: GanttState
  /** Percent complete (active rows). */
  progress?: number
  milestone?: boolean
}

export const GANTT_ROWS: GanttRow[] = [
  { label: 'Excavation & foundation', short: 'Foundation', from: 0.05, to: 1.4, state: 'done', progress: 100 },
  { label: 'Structure & slabs', short: 'Structure', from: 1.3, to: 3.5, state: 'active', progress: 40 },
  { label: 'Brickwork & plaster', short: 'Plaster', from: 2.8, to: 4.4, state: 'upcoming' },
  { label: 'Electrical & plumbing', short: 'MEP', from: 3.3, to: 4.9, state: 'upcoming' },
  { label: 'Finishing & painting', short: 'Finishing', from: 4.2, to: 5.7, state: 'upcoming' },
  { label: 'Handover', short: 'Handover', from: 5.75, to: 6, state: 'upcoming', milestone: true },
]

export interface Crew {
  name: string
  trade: string
  people: number
  task: string
  status: 'on-site' | 'arriving' | 'off'
  initials: string
  tone: 'brand' | 'iris' | 'aqua' | 'mint' | 'heat'
}

export const CREWS: Crew[] = [
  { name: 'Raju Mason Crew', trade: 'Masonry', people: 8, task: 'Slab 2 shuttering', status: 'on-site', initials: 'RM', tone: 'heat' },
  { name: 'Meena Steel Works', trade: 'Bar bending', people: 6, task: 'Slab 2 reinforcement', status: 'on-site', initials: 'MS', tone: 'brand' },
  { name: 'Anand Electricals', trade: 'Electrical', people: 4, task: 'Conduit layout, floor 1', status: 'arriving', initials: 'AE', tone: 'iris' },
]

export interface MaterialRequest {
  item: string
  qty: string
  status: 'Delivered' | 'Ordered' | 'Requested'
  by: string
}

export const MATERIALS: MaterialRequest[] = [
  { item: 'Cement OPC 53', qty: '200 bags', status: 'Delivered', by: 'Site engineer' },
  { item: 'TMT bars 12 mm', qty: '3.5 t', status: 'Ordered', by: 'Site engineer' },
  { item: 'River sand', qty: '6 loads', status: 'Requested', by: 'Supervisor' },
]

export const CONTRACT_VALUE = 24_40_000

export interface PaymentMilestone {
  label: string
  /** Share of the contract, in percent. */
  share: number
  amount: number
  state: 'paid' | 'invoiced' | 'upcoming'
  note: string
}

export const PAYMENT_MILESTONES: PaymentMilestone[] = [
  { label: 'Advance', share: 10, amount: 2_44_000, state: 'paid', note: 'Received 04 Aug' },
  { label: 'Foundation', share: 20, amount: 4_88_000, state: 'paid', note: 'Received 18 Sep' },
  { label: 'Structure', share: 30, amount: 7_32_000, state: 'invoiced', note: 'Invoice on completion' },
  { label: 'Plaster & MEP', share: 25, amount: 6_10_000, state: 'upcoming', note: 'Due Dec' },
  { label: 'Handover', share: 15, amount: 3_66_000, state: 'upcoming', note: 'Due Jan' },
]

/* -------------------------------------------------------------------------- */
/* Service business (dispatch board)                                           */
/* -------------------------------------------------------------------------- */

export type Trade = 'electrical' | 'plumbing' | 'appliance' | 'pest'

export const TRADE_LABEL: Record<Trade, string> = {
  electrical: 'Electrical',
  plumbing: 'Plumbing',
  appliance: 'Appliance repair',
  pest: 'Pest control',
}

export interface DispatchBlock {
  from: number
  hours: number
  title: string
  state: 'done' | 'active' | 'assigned'
}

export interface DispatchRow {
  name: string
  initials: string
  role: string
  trade: Trade
  tone: 'brand' | 'iris' | 'aqua' | 'mint' | 'heat'
  blocks: DispatchBlock[]
}

/** Schedule window, in hours of the day. */
export const DISPATCH_START = 9
export const DISPATCH_END = 17
/** "Now" marker, 12:20. */
export const DISPATCH_NOW = 12.33

export const DISPATCH_ROWS: DispatchRow[] = [
  {
    name: 'Manoj Das',
    initials: 'MD',
    role: 'Electrician',
    trade: 'electrical',
    tone: 'heat',
    blocks: [
      { from: 9, hours: 1.5, title: 'MCB replacement', state: 'done' },
      { from: 11, hours: 2, title: 'Fan wiring · 3 rooms', state: 'active' },
      { from: 14, hours: 1.75, title: 'Inverter check', state: 'assigned' },
    ],
  },
  {
    name: 'Salim Ansari',
    initials: 'SA',
    role: 'Plumber',
    trade: 'plumbing',
    tone: 'aqua',
    blocks: [
      { from: 9.5, hours: 1.5, title: 'Tap leak', state: 'done' },
      { from: 15.25, hours: 1.5, title: 'Tank cleaning', state: 'assigned' },
    ],
  },
  {
    name: 'Deepa Nair',
    initials: 'DN',
    role: 'Appliance repair',
    trade: 'appliance',
    tone: 'iris',
    blocks: [
      { from: 10, hours: 2.25, title: 'Washing machine', state: 'active' },
      { from: 13.75, hours: 1.75, title: 'Fridge not cooling', state: 'assigned' },
    ],
  },
  {
    name: 'Vikram Joshi',
    initials: 'VJ',
    role: 'Pest control',
    trade: 'pest',
    tone: 'mint',
    blocks: [
      { from: 9, hours: 2, title: 'Cockroach treatment', state: 'done' },
      { from: 12.75, hours: 2, title: 'Termite inspection', state: 'assigned' },
    ],
  },
]

export interface QueuedJob {
  id: string
  title: string
  area: string
  window: string
  trade: Trade
  urgent?: boolean
}

export const UNASSIGNED_JOBS: QueuedJob[] = [
  { id: 'REQ-5521', title: 'Geyser not heating', area: 'Bandra West', window: '1–3 pm', trade: 'plumbing', urgent: true },
  { id: 'REQ-5524', title: 'Power outage in 2 rooms', area: 'Andheri East', window: '2–4 pm', trade: 'electrical' },
  { id: 'REQ-5526', title: 'RO purifier service', area: 'Powai', window: '4–5 pm', trade: 'appliance' },
  { id: 'REQ-5527', title: 'Ant treatment', area: 'Khar', window: 'Tomorrow', trade: 'pest' },
]

export const SELECTED_JOB = {
  id: 'REQ-5521',
  customer: 'Mrs. Iyer',
  place: 'Bandra West',
  quote: { id: 'Q-3318', amount: 4_850, status: 'Approved' },
  paid: 2_000,
}
