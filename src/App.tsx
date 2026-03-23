import { Routes, Route, Navigate } from 'react-router-dom'
import { HamburgerMenu } from './pages/HamburgerMenu'
import { MenudoMenu } from './pages/MenudoMenu'
import { MenuSelector } from './pages/MenuSelector'

function App() {
  return (
    <Routes>
      <Route path="/" element={<MenuSelector />} />
      <Route path="/hamburguesas" element={<HamburgerMenu />} />
      <Route path="/menudo" element={<MenudoMenu />} />
      {/* 404 - Redirect to home */}
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}

export default App
