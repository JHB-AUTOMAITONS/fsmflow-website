import { fileURLToPath, URL } from 'node:url'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

const src = (p: string) => fileURLToPath(new URL(p, import.meta.url))

// https://vite.dev/config/
export default defineConfig(({ isSsrBuild }) => ({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: [
      // Prerender uses an eager route table so no Suspense fallback ends up in the static HTML.
      ...(isSsrBuild ? [{ find: /^@\/routes$/, replacement: src('./src/routes.eager.tsx') }] : []),
      { find: /^@\//, replacement: src('./src') + '/' },
    ],
  },
  define: {
    // Used in the footer so the prerendered HTML and the hydrated client agree.
    __BUILD_YEAR__: JSON.stringify(new Date().getFullYear()),
  },
  build: {
    // The prerender script reads the manifest to emit <link rel="modulepreload">
    // for each page's lazy chunk.
    manifest: true,
    target: 'es2022',
  },
}))
