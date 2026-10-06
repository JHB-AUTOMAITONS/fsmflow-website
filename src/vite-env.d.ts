/// <reference types="vite/client" />

declare const __BUILD_YEAR__: number

interface ImportMetaEnv {
  /** Optional HTTPS endpoint that receives demo / contact form submissions as JSON. */
  readonly VITE_LEAD_ENDPOINT?: string
  /** 'true' on Netlify builds (set in netlify.toml): deliver demo / contact submissions through Netlify Forms. */
  readonly VITE_NETLIFY_FORMS?: string
}
