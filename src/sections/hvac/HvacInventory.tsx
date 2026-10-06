import { AlertTriangle, Package, Truck, Warehouse } from 'lucide-react'
import { Meter } from '@/components/product/Charts'
import { KpiTile, ProductWindow } from '@/components/product/ProductWindow'
import { Tag } from '@/components/product/StatusPill'
import { TextLink } from '@/components/ui/Button'
import { CheckList } from '@/components/ui/CheckList'
import { Container } from '@/components/ui/Container'
import { Counter } from '@/components/ui/Counter'
import { Eyebrow } from '@/components/ui/Eyebrow'
import { Reveal } from '@/components/ui/Reveal'
import { PARTS } from '@/data/sample'
import { inr } from '@/lib/format'
import { cn } from '@/lib/cn'

function InventoryPanel() {
  return (
    <div className="space-y-3 p-4 @md:p-5">
      <div className="grid grid-cols-3 gap-2">
        <KpiTile label="Part types" value={<Counter to={248} />} delta="Warehouse + vans" deltaTone="flat" />
        <KpiTile label="Below minimum" value={<Counter to={3} />} delta="Reorder suggested" deltaTone="down" />
        <KpiTile label="Used this week" value={<Counter to={86} />} delta="Across 41 jobs" deltaTone="flat" />
      </div>

      <div className="flex flex-wrap items-center gap-1.5 text-[11px] font-semibold">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-gradient px-3 py-1.5 text-white shadow-cta">
          <Warehouse className="size-3.5" /> All locations
        </span>
        {['Main warehouse', 'Van 1 · Ravi', 'Van 2 · Arun'].map((l) => (
          <span key={l} className="inline-flex items-center gap-1.5 rounded-full bg-ink-50 px-3 py-1.5 text-ink-500">
            {l.startsWith('Van') ? <Truck className="size-3.5" /> : <Package className="size-3.5" />} {l}
          </span>
        ))}
      </div>

      <div className="overflow-hidden rounded-2xl bg-white ring-1 ring-ink-900/[0.07]">
        <div className="hidden grid-cols-[minmax(0,1.6fr)_minmax(0,1.1fr)_auto_auto] gap-3 border-b border-ink-900/[0.06] bg-mist px-3.5 py-2 font-mono text-[9.5px] font-semibold tracking-wider text-ink-500 uppercase @md:grid">
          <span>Part</span>
          <span>Stock vs minimum</span>
          <span className="text-right">Price</span>
          <span className="w-14 text-right">Status</span>
        </div>
        {PARTS.map((p, i) => {
          const low = p.stock < p.min
          const pct = Math.min(100, (p.stock / (p.min * 2)) * 100)
          return (
            <div
              key={p.sku}
              className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-x-3 gap-y-1.5 border-b border-ink-900/[0.05] px-3.5 py-2.5 last:border-0 @md:grid-cols-[minmax(0,1.6fr)_minmax(0,1.1fr)_auto_auto]"
            >
              <div className="min-w-0">
                <p className="truncate text-[12.5px] leading-tight font-semibold text-ink-900">{p.name}</p>
                <p className="font-mono text-[10px] text-ink-500">{p.sku}</p>
              </div>
              <div className="order-3 col-span-2 flex items-center gap-2 @md:order-none @md:col-span-1">
                <Meter value={pct} tone={low ? 'coral' : 'mint'} delay={i * 70} />
                <span className={cn('w-16 shrink-0 text-right font-mono text-[10.5px]', low ? 'font-semibold text-coral-600' : 'text-ink-500')}>
                  {p.stock} / {p.min} {p.unit}
                </span>
              </div>
              <span className="hidden text-right font-mono text-[11px] text-ink-600 @md:block">{inr(p.price)}</span>
              <span className="justify-self-end @md:w-14 @md:text-right">{low ? <Tag tone="coral">Low</Tag> : <Tag tone="mint">OK</Tag>}</span>
            </div>
          )
        })}
      </div>

      <div className="flex items-start gap-2.5 rounded-xl bg-heat-50 p-3 ring-1 ring-heat-100">
        <AlertTriangle className="mt-0.5 size-4 shrink-0 text-heat-600" aria-hidden="true" />
        <p className="text-[12px] leading-snug text-ink-700">
          <span className="font-semibold text-ink-900">Running capacitor 35 µF</span> is at 2 of 10. Used on JOB-1024 today, so a reorder of 12 is
          suggested.
        </p>
      </div>
    </div>
  )
}

export function HvacInventory() {
  return (
    <section id="inventory" aria-labelledby="hvac-inventory-heading" className="relative bg-white py-20 md:py-32">
      <Container size="wide">
        <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-16">
          <Reveal className="max-w-xl">
            <Eyebrow tone="iris">Spare parts &amp; inventory</Eyebrow>
            <h2 id="hvac-inventory-heading" className="text-h2 mt-5 font-semibold text-ink-900">
              Never lose a job to a missing part
            </h2>
            <p className="text-lead mt-5 text-ink-600">
              Capacitors, gas, copper pipe, PCBs and remote controllers add up. FSMFlow tracks stock in the warehouse and on every van, links parts to
              the jobs that used them, and warns you before a common part runs out.
            </p>
            <CheckList
              className="mt-7"
              items={['Warehouse and van stock in one view', 'Parts recorded against each job and unit', 'Minimum levels with low-stock alerts', 'Parts cost carried onto the invoice']}
            />
            <div className="mt-8">
              <TextLink href="/features/inventory-management-software">Explore inventory management software</TextLink>
            </div>
          </Reveal>

          <Reveal variant="scale" delay={100}>
            <ProductWindow
              title="Spare parts inventory"
              subtitle="Warehouse · vans"
              icon={Package}
              label="Spare parts inventory screen listing AC parts such as capacitors, refrigerant gas, copper pipe and PCBs with stock levels against minimum levels, and a low stock alert"
            >
              <Reveal>
                <InventoryPanel />
              </Reveal>
            </ProductWindow>
          </Reveal>
        </div>
      </Container>
    </section>
  )
}
