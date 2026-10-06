/** Field rules shared by the demo and contact forms. Each returns an error message or undefined. */
export type FieldRule = (value: string) => string | undefined

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/

export const required =
  (message: string): FieldRule =>
  (value) =>
    value.trim() === '' ? message : undefined

export const minLength =
  (min: number, message: string): FieldRule =>
  (value) =>
    value.trim().length < min ? message : undefined

export const maxLength =
  (max: number, message: string): FieldRule =>
  (value) =>
    value.length > max ? message : undefined

export const email: FieldRule = (value) => {
  const v = value.trim()
  if (v === '') return 'Enter your work email so we can reply.'
  if (!EMAIL.test(v)) return 'Enter a valid email address, for example name@company.com.'
  return undefined
}

/** Accepts 10-digit Indian numbers, with or without +91 / 91 / a leading 0, spaces, dashes or brackets. */
function nationalNumber(value: string): string {
  let digits = value.replace(/\D/g, '')
  if (digits.length === 12 && digits.startsWith('91')) digits = digits.slice(2)
  else if (digits.length === 11 && digits.startsWith('0')) digits = digits.slice(1)
  return digits
}

const PHONE_MESSAGE = 'Enter a 10-digit phone number, for example 98765 43210.'

export const phone: FieldRule = (value) => {
  if (value.trim() === '') return 'Enter a phone number we can reach you on.'
  if (!/^[\d\s()+-]+$/.test(value.trim()) || nationalNumber(value).length !== 10) return PHONE_MESSAGE
  return undefined
}

/** For phone fields that are optional: empty is fine, anything typed must still be valid. */
export const optionalPhone: FieldRule = (value) => {
  if (value.trim() === '') return undefined
  return phone(value)
}

/** Runs rules in order and returns the first error. */
export const all =
  (...rules: FieldRule[]): FieldRule =>
  (value) => {
    for (const rule of rules) {
      const error = rule(value)
      if (error) return error
    }
    return undefined
  }
