import { Smartphone } from 'lucide-react'
import { PhoneFrame } from '@/components/product/PhoneFrame'
import { TechCompleteScreen, TechJobDetailScreen, TechJobsScreen } from '@/components/product/TechScreens'
import { TextLink } from '@/components/ui/Button'
import { CheckList } from '@/components/ui/CheckList'
import { Container } from '@/components/ui/Container'
import { Eyebrow } from '@/components/ui/Eyebrow'
import { Reveal } from '@/components/ui/Reveal'
import { cn } from '@/lib/cn'

/**
 * Technician app: three phone screens. Desktop: overlapping cascade.
 * Mobile: a swipeable row (no overlap, so nothing fights for touch targets).
 */
export function HvacTechApp() {
  const phone = 'w-[236px] shrink-0 snap-center sm:w-[250px] md:absolute md:w-[250px] lg:w-[262px]'
  return (
    <section id="technician-app" aria-labelledby="hvac-app-heading" className="relative overflow-hidden bg-white py-20 md:py-32">
      <Container size="wide">
        <div className="grid items-center gap-14 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-10">
          <Reveal className="max-w-xl">
            <Eyebrow tone="brand">
              <Smartphone className="size-3" aria-hidden="true" /> Technician app
            </Eyebrow>
            <h2 id="hvac-app-heading" className="text-h2 mt-5 font-semibold text-ink-900">
              Everything the AC technician needs, on one phone
            </h2>
            <p className="text-lead mt-5 text-ink-600">
              Technicians open the job, see the customer and the unit’s history, work through the checklist, record the parts and take sign-off.
              The office sees every step as it happens.
            </p>
            <CheckList
              className="mt-7"
              items={[
                'Today’s jobs in order, with navigation to the site',
                'Customer history, unit details and warranty or AMC status',
                'Checklists, gas readings and before / after photos',
                'Parts used, deducted from van stock',
                'Customer sign-off and an automatic service report',
              ]}
            />
            <div className="mt-8">
              <TextLink href="/features/field-service-app">Explore the field service app for technicians</TextLink>
            </div>
          </Reveal>

          <Reveal variant="scale" delay={100}>
            <div
              className={cn(
                'no-scrollbar -mx-5 flex snap-x items-start gap-4 overflow-x-auto px-5 pt-2 pb-8',
                'md:relative md:mx-auto md:block md:h-[600px] md:max-w-[680px] md:overflow-visible md:px-0 md:pt-0 md:pb-0',
              )}
            >
              <div className="pointer-events-none absolute top-10 left-1/2 hidden size-[420px] -translate-x-1/2 rounded-full bg-brand-100/60 blur-3xl md:block" aria-hidden="true" />
              <PhoneFrame
                className={cn(phone, 'md:top-14 md:left-0 md:-rotate-[5deg]')}
                label="Technician app screen listing today's AC jobs with their status"
              >
                <TechJobsScreen />
              </PhoneFrame>
              <PhoneFrame
                className={cn(phone, 'z-10 md:top-0 md:left-1/2 md:-translate-x-1/2 md:scale-[1.06]')}
                label="Technician app job screen for AC maintenance at Sharma Residency with navigation, unit tags and work status buttons"
              >
                <TechJobDetailScreen />
              </PhoneFrame>
              <PhoneFrame
                className={cn(phone, 'md:top-14 md:right-0 md:rotate-[5deg]')}
                label="Technician app completion screen with parts used, photos, customer signature and complete job button"
              >
                <TechCompleteScreen />
              </PhoneFrame>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  )
}
