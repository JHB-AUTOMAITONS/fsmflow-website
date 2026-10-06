import { Bell, CalendarClock, Check, ShieldCheck } from "lucide-react";
import { Meter } from "@/components/product/Charts";
import { ProductWindow } from "@/components/product/ProductWindow";
import { StatusPill, Tag } from "@/components/product/StatusPill";
import { TextLink } from "@/components/ui/Button";
import { CheckList } from "@/components/ui/CheckList";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Reveal } from "@/components/ui/Reveal";
import { cn } from "@/lib/cn";

const VISITS = [
  { m: "Apr", state: "done" },
  { m: "Jul", state: "done" },
  { m: "Oct", state: "done" },
  { m: "Jan", state: "next" },
] as const;

const REMINDERS = [
  {
    who: "Sharma Residency",
    what: "AMC renews in 12 days",
    tone: "heat" as const,
  },
  {
    who: "Greenleaf Offices",
    what: "Warranty ends in 34 days",
    tone: "aqua" as const,
  },
  {
    who: "Metro Café",
    what: "Quarterly visit due Friday",
    tone: "brand" as const,
  },
];

function AmcPanel() {
  return (
    <div className="grid gap-3 p-4 @md:p-5 @2xl:grid-cols-[1.1fr_1fr]">
      <div className="space-y-3">
        <div className="rounded-2xl bg-mist p-3.5 ring-1 ring-ink-900/[0.05]">
          <div className="flex items-start justify-between gap-3">
            <div>
              <p className="font-mono text-[10px] font-semibold tracking-wider text-ink-500">
                AMC-310
              </p>
              <p className="font-display text-[1.0625rem] leading-tight font-semibold tracking-[-0.02em] text-ink-900">
                Orchid Clinic
              </p>
              <p className="mt-0.5 text-[11.5px] text-ink-500">
                6 units · 4 visits a year · valid till 31 Mar 2027
              </p>
            </div>
            <Tag tone="mint">
              <ShieldCheck className="size-3" /> Active
            </Tag>
          </div>

          <div className="relative mt-5">
            <span
              className="absolute top-[11px] right-[12.5%] left-[12.5%] h-[2px] rounded-full bg-ink-900/[0.08]"
              aria-hidden="true"
            />
            <span
              className="grow-x absolute top-[11px] left-[12.5%] h-[2px] w-[56%] rounded-full bg-brand-gradient"
              aria-hidden="true"
            />
            <ol className="relative grid grid-cols-4 text-center">
              {VISITS.map((v) => (
                <li
                  key={v.m}
                  className="relative flex flex-col items-center gap-1.5"
                >
                  <span
                    className={cn(
                      "relative flex size-[22px] items-center justify-center rounded-full ring-2 ring-mist",
                      v.state === "done"
                        ? "bg-mint-500 text-white"
                        : "bg-brand-gradient text-white shadow-cta",
                    )}
                  >
                    {v.state === "next" && (
                      <span className="absolute inset-0 animate-pulse-ring rounded-full bg-brand-500/40" />
                    )}
                    {v.state === "done" ? (
                      <Check className="size-3" strokeWidth={3} />
                    ) : (
                      <CalendarClock className="size-3" />
                    )}
                  </span>
                  <span className="font-mono text-[10px] font-semibold text-ink-600">
                    {v.m}
                  </span>
                  <span className="text-[10px] text-ink-500">
                    {v.state === "done" ? "Done" : "Scheduled"}
                  </span>
                </li>
              ))}
            </ol>
          </div>

          <div className="mt-4 flex items-center justify-between text-[11px] font-semibold text-ink-700">
            <span>Visits used</span>
            <span className="font-mono text-ink-500">3 / 4</span>
          </div>
          <Meter value={75} tone="mint" className="mt-1.5" />
        </div>

        <div className="rounded-2xl bg-white p-3.5 ring-1 ring-ink-900/[0.07]">
          <p className="text-[11px] font-semibold text-ink-700">
            Customer history
          </p>
          <ul className="mt-2.5 space-y-2.5 text-[12px]">
            {[
              ["04 Oct", "AMC visit", "Filters cleaned · gas pressure normal"],
              ["12 Jul", "AMC visit", "Drain pump cleaned"],
              ["05 Apr", "AMC visit", "Quarterly service · 6 units"],
            ].map(([d, t, n]) => (
              <li key={d} className="flex items-start gap-2.5">
                <span className="w-9 shrink-0 pt-px font-mono text-[10px] font-semibold text-ink-500">
                  {d}
                </span>
                <div>
                  <p className="leading-tight font-semibold text-ink-800">
                    {t}
                  </p>
                  <p className="text-[11px] text-ink-500">{n}</p>
                </div>
                <span className="ml-auto">
                  <StatusPill status="completed" live={false} />
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="rounded-2xl bg-white p-3.5 ring-1 ring-ink-900/[0.07]">
        <p className="flex items-center gap-1.5 text-[11px] font-semibold text-ink-700">
          <Bell className="size-3.5 text-heat-500" aria-hidden="true" /> Service
          & renewal reminders
        </p>
        <ul className="mt-3 space-y-2">
          {REMINDERS.map((r) => (
            <li
              key={r.who}
              className="flex items-center justify-between gap-3 rounded-xl bg-mist px-3 py-2.5 ring-1 ring-ink-900/[0.04]"
            >
              <div className="min-w-0">
                <p className="truncate text-[12.5px] leading-tight font-semibold text-ink-900">
                  {r.who}
                </p>
                <p className="truncate text-[11px] text-ink-500">{r.what}</p>
              </div>
              <Tag tone={r.tone}>Reminder</Tag>
            </li>
          ))}
        </ul>
        <div className="mt-4 rounded-xl bg-brand-50/70 p-3 text-[11.5px] leading-snug text-brand-800 ring-1 ring-brand-100">
          <span className="font-semibold">Warranty on every unit.</span>{" "}
          Coverage start and end dates sit on the asset record, so a technician
          knows what is covered before they arrive.
        </div>
      </div>
    </div>
  );
}

export function HvacAmc() {
  return (
    <section
      id="amc"
      aria-labelledby="hvac-amc-heading"
      className="relative overflow-hidden bg-wash-gradient py-20 md:py-32"
    >
      <div
        className="absolute inset-0 -z-0 bg-blueprint opacity-50 mask-fade-edges"
        aria-hidden="true"
      />
      <Container size="wide" className="relative">
        <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:gap-16">
          <Reveal className="order-2 lg:order-1" variant="scale">
            <ProductWindow
              title="AMC & warranty"
              subtitle="Contracts · visits · renewals"
              icon={ShieldCheck}
              label="AMC and warranty screen showing an annual maintenance contract with quarterly visits completed and scheduled, service and renewal reminders for customers, and customer visit history"
            >
              <AmcPanel />
            </ProductWindow>
          </Reveal>

          <Reveal className="order-1 max-w-xl lg:order-2">
            <Eyebrow tone="mint">AMC &amp; warranty</Eyebrow>
            <h2
              id="hvac-amc-heading"
              className="text-h2 mt-5 font-semibold text-ink-900"
            >
              Turn every AC you install into repeat revenue
            </h2>
            <p className="text-lead mt-5 text-ink-600">
              AMC contracts are the steadiest income in HVAC, and the easiest to
              lose. FSMFlow schedules each visit, reminds you before a contract
              or warranty ends, and keeps the full customer history one tap
              away.
            </p>
            <CheckList
              className="mt-7"
              items={[
                "Contracts with units covered and visit schedule",
                "Automatic reminders for visits and renewals",
                "Warranty start and end on every unit",
                "Customer history across every visit",
              ]}
            />
            <div className="mt-8">
              <TextLink href="/features/warranty-management-software">
                Explore warranty management software
              </TextLink>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
