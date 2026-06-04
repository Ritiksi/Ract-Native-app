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
    <div className="min-h-screen bg-slate-100 text-slate-900">
      <Navbar onMobileMenu={() => setSidebarOpen(true)} />
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

      <main className={`relative min-h-screen transition-all duration-300 ${sidebarCollapsed ? 'lg:pl-20' : 'lg:pl-72'} pt-24`}> 
        <div className="mx-auto max-w-7xl px-4 pb-10 sm:px-6 lg:px-8">
          <Outlet />
        </div>
      </main>
    </div>
  )
}

export default DashboardLayout
