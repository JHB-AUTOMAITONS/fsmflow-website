/**
 * Shared control styling. 48px tall (above the 44px target), 16px text so iOS
 * never zooms on focus, a 3:1 border (ink-400) that thickens on focus, and a coral ring
 * (not just colour: the message below also says what is wrong) when invalid.
 */
export const controlClass =
  'block min-h-12 w-full rounded-2xl bg-white px-4 text-base text-ink-900 ring-1 ring-ink-400 ' +
  'shadow-[0_1px_2px_rgb(11_23_54/0.04)] transition-[box-shadow] duration-300 ease-premium ' +
  'placeholder:text-[#667495] hover:ring-ink-500 ' +
  'focus:outline-none focus:ring-2 focus:ring-brand-500 focus:shadow-[0_0_0_4px_rgb(47_102_255/0.12)] ' +
  'disabled:cursor-not-allowed disabled:bg-ink-50 disabled:text-ink-500'

export const invalidClass =
  'ring-2 ring-coral-500 hover:ring-coral-500 focus:ring-coral-500 focus:shadow-[0_0_0_4px_rgb(244_83_63/0.14)]'

export const hintId = (id: string) => `${id}-hint`
export const errorId = (id: string) => `${id}-error`

/** Builds the aria-describedby value: hint first, then the error container. */
export function describedBy(id: string, hasHint: boolean): string {
  return [hasHint ? hintId(id) : '', errorId(id)].filter(Boolean).join(' ')
}

