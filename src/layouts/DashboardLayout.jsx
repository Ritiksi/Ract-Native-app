import { useEffect, useState } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import Navbar from '../components/Navbar.jsx'
import Sidebar from '../components/Sidebar.jsx'

function DashboardLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false)
  const location = useLocation()

  useEffect(() => {
    if (sidebarOpen) {
      setSidebarOpen(false)
    }
  }, [location.pathname])

  return (
    <div className="min-h-screen bg-slate-100 text-slate-900 flex flex-col">
      <Navbar onMobileMenu={() => setSidebarOpen(true)} />

      <div className="flex flex-1 pt-20">
        <Sidebar
          open={sidebarOpen}
          collapsed={sidebarCollapsed}
          onToggleCollapsed={() => setSidebarCollapsed((state) => !state)}
          onCloseMobile={() => setSidebarOpen(false)}
        />

        {sidebarOpen && (
          <button
            type="button"
            onClick={() => setSidebarOpen(false)}
            className="fixed inset-0 z-30 bg-slate-950/40 backdrop-blur-sm lg:hidden"
            aria-label="Close sidebar"
          />
        )}

        <main className="flex-1 relative transition-all duration-300">
          <div className="mx-auto max-w-7xl px-4 pt-6 pb-10 sm:px-6 lg:px-8">
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  )
}

export default DashboardLayout
