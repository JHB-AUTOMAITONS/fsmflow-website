/**
 * Tiny static server that behaves like a typical static host serving ./dist:
 *   /solutions/cctv-software  → dist/solutions/cctv-software/index.html
 *   unknown paths             → dist/404.html with a real 404 status
 * Usage: node scripts/serve.mjs [port]
 */
import fs from 'node:fs'
import http from 'node:http'
import path from 'node:path'

const dist = path.resolve(process.env.DIST ?? 'dist')
const port = Number(process.argv[2] ?? process.env.PORT ?? 4173)

const types = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.webp': 'image/webp',
  '.woff2': 'font/woff2',
  '.xml': 'application/xml; charset=utf-8',
  '.txt': 'text/plain; charset=utf-8',
  '.ico': 'image/x-icon',
}

function resolveFile(urlPath) {
  const clean = decodeURIComponent(urlPath.split('?')[0].split('#')[0])
  const target = path.join(dist, clean)
  if (!target.startsWith(dist)) return null
  if (fs.existsSync(target) && fs.statSync(target).isFile()) return target
  const index = path.join(target, 'index.html')
  if (fs.existsSync(index)) return index
  return null
}

http
  .createServer((req, res) => {
    const file = resolveFile(req.url ?? '/')
    if (file) {
      res.writeHead(200, { 'Content-Type': types[path.extname(file)] ?? 'application/octet-stream' })
      fs.createReadStream(file).pipe(res)
      return
    }
    const notFound = path.join(dist, '404.html')
    res.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' })
    if (fs.existsSync(notFound)) fs.createReadStream(notFound).pipe(res)
    else res.end('Not found')
  })
  .listen(port, () => console.log(`Serving dist/ at http://localhost:${port}`))
