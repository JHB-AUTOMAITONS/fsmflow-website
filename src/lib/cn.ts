import { clsx, type ClassValue } from 'clsx'
import { extendTailwindMerge } from 'tailwind-merge'

// Teach tailwind-merge about the custom type scale and shadows declared in
// styles/index.css, otherwise `text-h2 text-ink-900` would be treated as a
// colour conflict and one class silently dropped.
const twMerge = extendTailwindMerge({
  extend: {
    classGroups: {
      'font-size': [{ text: ['hero', 'h1', 'h2', 'h3', 'lead'] }],
      shadow: [{ shadow: ['card', 'lift', 'float', 'pop', 'cta'] }],
    },
  },
})

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
