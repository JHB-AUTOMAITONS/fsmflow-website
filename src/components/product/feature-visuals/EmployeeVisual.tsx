import { CalendarDays, ChevronLeft, ChevronRight, Users } from 'lucide-react'
import { Avatar } from '@/components/product/Avatar'
import { Meter } from '@/components/product/Charts'
import { ProductWindow } from '@/components/product/ProductWindow'
import { Tag } from '@/components/product/StatusPill'
import { TECHNICIANS } from '@/data/sample'
import { cn } from '@/lib/cn'
import { FloatCard, VisualRoot } from './parts'
import type { FeatureVisualProps } from './types'

type Kind = 'install' | 'repair' | 'service' | 'leave'
interface Chip {
  kind: Kind
  n?: number
}

const KIND: Record<Kind, { label: string; cls: string; dot: string }> = {
  install: { label: 'Install', cls: 'bg-iris-50 text-iris-700 ring-iris-100', dot: 'bg-iris-400' },
  repair: { label: 'Repair', cls: 'bg-aqua-50 text-aqua-600 ring-aqua-100', dot: 'bg-aqua-400' },
  service: { label: 'Service', cls: 'bg-brand-50 text-brand-700 ring-brand-100', dot: 'bg-brand-400' },
  leave: { label: 'Leave', cls: 'bg-ink-50 text-ink-500 ring-ink-200 [background-image:repeating-linear-gradient(135deg,transparent_0_4px,rgb(11_23_54/0.05)_4px_5px)]', dot: 'bg-ink-300' },
}

const DAYS = [
  { d: 'Mon', n: 5 },
  { d: 'Tue', n: 6 },
  { d: 'Wed', n: 7 },
  { d: 'Thu', n: 8 },
  { d: 'Fri', n: 9 },
  { d: 'Sat', n: 10 },
]
const TODAY = 1

interface Row {
  skills: string[]
  load: number
  week: Chip[][]
}

const ROWS: Record<string, Row> = {
  t1: {
    skills: ['Split AC', 'Cassette'],
    load: 82,
    week: [[{ kind: 'service', n: 3 }], [{ kind: 'service', n: 2 }, { kind: 'repair', n: 1 }], [{ kind: 'service', n: 3 }], [{ kind: 'repair', n: 2 }, { kind: 'service', n: 1 }], [{ kind: 'service', n: 3 }], [{ kind: 'service', n: 2 }]],
  },
  t2: {
    skills: ['Split AC', 'Gas'],
    load: 94,
    week: [[{ kind: 'repair', n: 3 }, { kind: 'service', n: 1 }], [{ kind: 'repair', n: 3 }, { kind: 'service', n: 2 }], [{ kind: 'repair', n: 2 }, { kind: 'service', n: 2 }], [{ kind: 'repair', n: 3 }, { kind: 'service', n: 1 }], [{ kind: 'repair', n: 2 }, { kind: 'service', n: 2 }], [{ kind: 'service', n: 3 }]],
  },
  t3: {
    skills: ['Install', 'Ducted'],
    load: 68,
    week: [[{ kind: 'install', n: 2 }], [{ kind: 'install', n: 2 }, { kind: 'service', n: 1 }], [{ kind: 'install', n: 2 }], [{ kind: 'install', n: 1 }], [{ kind: 'install', n: 2 }], []],
  },
  t4: {
    skills: ['Maintenance', 'Chiller'],
    load: 75,
    week: [[{ kind: 'service', n: 4 }], [{ kind: 'service', n: 4 }], [{ kind: 'service', n: 3 }], [{ kind: 'service', n: 4 }], [{ kind: 'service', n: 2 }], [{ kind: 'repair', n: 1 }]],
  },
  t5: {
    skills: ['VRF', 'Chiller'],
    load: 46,
    week: [[{ kind: 'repair', n: 1 }], [{ kind: 'repair', n: 1 }, { kind: 'install', n: 1 }], [], [{ kind: 'install', n: 1 }], [{ kind: 'repair', n: 1 }], []],
  },
  t6: {
    skills: ['Split AC', 'Window'],
    load: 58,
    week: [[{ kind: 'service', n: 2 }], [{ kind: 'service', n: 3 }], [{ kind: 'repair', n: 2 }], [{ kind: 'leave' }], [{ kind: 'service', n: 2 }], [{ kind: 'service', n: 2 }]],
  },
}

const GRID =
  'grid items-stretch gap-x-1.5 grid-cols-[6.25rem_repeat(3,minmax(0,1fr))] @md:grid-cols-[8.25rem_repeat(4,minmax(0,1fr))] @lg:grid-cols-[9.5rem_repeat(4,minmax(0,1fr))] @xl:grid-cols-[8.75rem_repeat(6,minmax(0,1fr))]'

/** Show-from rules per day column so the grid fits the container: Mon-Wed, then Thu, then Fri-Sat. */
const dayVisibility = (i: number) => (i < 3 ? '' : i === 3 ? 'hidden @md:flex' : 'hidden @xl:flex')

function loadTone(load: number): 'brand' | 'heat' | 'coral' | 'mint' {
  if (load >= 90) return 'coral'
  if (load >= 75) return 'heat'
  if (load < 50) return 'mint'
  return 'brand'
}

/** Employee management: technician roster with skills and workload against a weekly schedule grid. */
export function EmployeeVisual({ className, compact }: FeatureVisualProps) {
  const techs = compact ? TECHNICIANS.slice(0, 4) : TECHNICIANS
  return (
    <VisualRoot className={className}>
      <ProductWindow
        title="Technician schedule"
        subtitle="Week of 5 Oct · Chennai"
        icon={Users}
        actions={!compact && <Tag tone="heat">3 jobs unassigned</Tag>}
        label="FSMFlow weekly schedule grid for six AC technicians showing their skills, workload percentage and installation, repair and service jobs for each day, with one technician on leave"
      >
        <div className="p-3 @md:p-4">
          <div className="mb-3 flex flex-wrap items-center gap-x-3 gap-y-2">
            <div className="flex items-center gap-1 rounded-xl bg-ink-50 py-1 pr-2.5 pl-1.5 text-[11px] font-semibold text-ink-700">
              <ChevronLeft className="size-3.5 text-ink-500" aria-hidden="true" />
              <CalendarDays className="size-3.5 text-brand-500" aria-hidden="true" />
              5 – 10 Oct
              <ChevronRight className="size-3.5 text-ink-500" aria-hidden="true" />
            </div>
            {!compact && (
              <div className="ml-auto hidden items-center gap-3 text-[10px] text-ink-500 @sm:flex">
                {(['service', 'repair', 'install', 'leave'] as Kind[]).map((k) => (
                  <span key={k} className="flex items-center gap-1.5">
                    <span className={cn('size-2.5 rounded-[4px]', KIND[k].dot)} />
                    {KIND[k].label}
                  </span>
                ))}
              </div>
            )}
          </div>

          <div className="rounded-2xl bg-white p-2 ring-1 ring-ink-900/[0.08]">
            <div className={cn(GRID, 'pb-1.5')}>
              <span className="px-1.5 pt-1 font-mono text-[10px] font-semibold tracking-wide text-ink-500 uppercase">Technician</span>
              {DAYS.map((day, i) => (
                <span
                  key={day.d}
                  className={cn(
                    'flex-col items-center rounded-lg py-1 text-center leading-tight',
                    dayVisibility(i) || 'flex',
                    i === TODAY ? 'bg-ink-900 text-white' : 'text-ink-500',
                  )}
                >
                  <span className="text-[10px] font-medium">{day.d}</span>
                  <span className="tabular text-[12px] font-semibold">{day.n}</span>
                </span>
              ))}
            </div>

            {techs.map((t) => {
              const row = ROWS[t.id]
              return (
                <div key={t.id} className={cn(GRID, 'border-t border-ink-900/[0.06] py-1.5')}>
                  <div className="min-w-0 pr-1 pl-1">
                    <div className="flex items-center gap-1.5">
                      <Avatar initials={t.initials} tone={t.tone} size="sm" className="ring-0" />
                      <div className="min-w-0">
                        <p className="truncate text-[11.5px] leading-tight font-semibold text-ink-900">
                          <span className="@lg:hidden">{t.name.split(' ')[0]}</span>
                          <span className="hidden @lg:inline">{t.name}</span>
                        </p>
                        <p className="hidden truncate text-[10px] text-ink-500 @lg:block">{row.skills.join(' · ')}</p>
                      </div>
                    </div>
                    <div className="mt-1.5 flex items-center gap-1.5">
                      <Meter value={row.load} tone={loadTone(row.load)} className="h-1" />
                      <span className="tabular w-7 shrink-0 text-right font-mono text-[9.5px] font-semibold text-ink-500">{row.load}%</span>
                    </div>
                  </div>
                  {DAYS.map((day, i) => {
                    const chips = row.week[i]
                    return (
                      <div
                        key={day.d}
                        className={cn('min-w-0 flex-col justify-center gap-1 rounded-lg px-0.5 py-0.5', dayVisibility(i) || 'flex', i === TODAY && 'bg-brand-50/70')}
                      >
                        {chips.length === 0 && <span className="mx-auto h-5 w-5 rounded-md border border-dashed border-ink-200" />}
                        {chips.map((c, ci) => (
                          <span
                            key={ci}
                            className={cn('truncate rounded-md px-0.5 py-0.5 text-center text-[10px] leading-tight font-semibold ring-1 ring-inset', KIND[c.kind].cls)}
                          >
                            {KIND[c.kind].label}
                            {c.n ? ` ×${c.n}` : ''}
                          </span>
                        ))}
                      </div>
                    )
                  })}
                </div>
              )
            })}
          </div>
        </div>
      </ProductWindow>

      {!compact && (
        <FloatCard className="-bottom-10 -left-5 w-[236px]" delay={800}>
          <div className="flex items-center gap-2.5">
            <Avatar initials="KR" tone="heat" size="md" className="ring-0" />
            <div className="min-w-0">
              <p className="text-[12px] leading-tight font-semibold text-ink-900">Job assigned · Karthik Raman</p>
              <p className="mt-0.5 text-[11px] text-ink-500">VRF fault · Thu, 11:00</p>
            </div>
          </div>
        </FloatCard>
      )}
    </VisualRoot>
  )
}
