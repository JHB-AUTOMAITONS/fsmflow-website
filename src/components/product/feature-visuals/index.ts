import type { ComponentType } from 'react'
import { AssetVisual } from './AssetVisual'
import { EmployeeVisual } from './EmployeeVisual'
import { FieldAppVisual } from './FieldAppVisual'
import { InventoryVisual } from './InventoryVisual'
import { QuotationVisual } from './QuotationVisual'
import { ReportingVisual } from './ReportingVisual'
import { SalesCrmVisual } from './SalesCrmVisual'
import type { FeatureVisualProps } from './types'
import { WarrantyVisual } from './WarrantyVisual'
import { WorkOrderVisual } from './WorkOrderVisual'

/**
 * One signature product mockup per feature page, keyed by feature slug
 * (see src/data/features.ts). Used on the feature page hero AND (compact)
 * in the home page features section.
 *
 * Contract: a visual fills the width of its container, adapts with container
 * queries, and is exposed to assistive tech via ProductWindow's `label`.
 */
export type { FeatureVisualProps }

export const FEATURE_VISUALS: Record<string, ComponentType<FeatureVisualProps>> = {
  'sales-crm-software': SalesCrmVisual,
  'asset-management-software': AssetVisual,
  'quotation-software': QuotationVisual,
  'work-order-management-software': WorkOrderVisual,
  'warranty-management-software': WarrantyVisual,
  'inventory-management-software': InventoryVisual,
  'field-service-app': FieldAppVisual,
  'employee-management-software': EmployeeVisual,
  'reporting-software': ReportingVisual,
}
