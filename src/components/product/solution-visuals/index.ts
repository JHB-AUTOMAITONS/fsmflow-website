import type { ComponentType } from 'react'
import { CctvVisual } from './CctvVisual'
import { ConstructionVisual } from './ConstructionVisual'
import { ServiceBusinessVisual } from './ServiceBusinessVisual'
import { SolarVisual } from './SolarVisual'

/**
 * One signature product mockup per industry solution page, keyed by solution slug
 * (see src/data/solutions.ts). HVAC has its own bespoke page and visual.
 *
 * Contract: a visual fills the width of its container, adapts with container
 * queries, and is exposed to assistive tech via ProductWindow's `label`.
 */
export const SOLUTION_VISUALS: Record<string, ComponentType<{ className?: string }>> = {
  'cctv-software': CctvVisual,
  'solar-software': SolarVisual,
  'construction-management-software': ConstructionVisual,
  'service-business-management-software': ServiceBusinessVisual,
}
