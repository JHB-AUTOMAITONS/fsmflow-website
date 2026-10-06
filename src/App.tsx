import { Route, Routes } from 'react-router'
import { MainLayout } from '@/layouts/MainLayout'
import { PAGES } from '@/routes'

export default function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        {PAGES.map(({ path, Component }) => (
          <Route key={path} path={path} element={<Component />} />
        ))}
      </Route>
    </Routes>
  )
}
