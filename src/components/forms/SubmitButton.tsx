import { Button } from '@/components/ui/Button'
import { cn } from '@/lib/cn'

/** Primary submit button built on the shared Button: spinner + disabled while sending. */
export function SubmitButton({ label, loadingLabel = 'Sending…', loading, className }: { label: string; loadingLabel?: string; loading: boolean; className?: string }) {
  return (
    <Button type="submit" size="lg" loading={loading} aria-busy={loading || undefined} className={cn('w-full sm:w-auto', className)}>
      {loading ? loadingLabel : label}
    </Button>
  )
}
