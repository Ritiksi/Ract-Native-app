import { FiChevronLeft, FiChevronRight, FiFolder, FiHome, FiHelpCircle, FiMessageCircle, FiSettings, FiUsers, FiBarChart2, FiLogOut } from 'react-icons/fi'
import SidebarItem from './SidebarItem.jsx'

const menuItems = [
  { label: 'Dashboard', to: '/dashboard', icon: FiHome },
  { label: 'Users', to: '/users', icon: FiUsers },
  { label: 'Analytics', to: '/analytics', icon: FiBarChart2 },
  { label: 'Messages', to: '/messages', icon: FiMessageCircle },
  { label: 'Projects', to: '/projects', icon: FiFolder },
  { label: 'Settings', to: '/settings', icon: FiSettings },
  { label: 'Help', to: '/help', icon: FiHelpCircle },
  { label: 'Logout', to: '/logout', icon: FiLogOut }
]

function Sidebar({ collapsed, open, onToggleCollapsed, onCloseMobile }) {
  return (
    <aside
      className={`fixed inset-y-0 left-0 z-40 flex flex-col overflow-hidden border-r border-slate-800 bg-slate-950/95 pb-6 shadow-2xl shadow-slate-900/20 backdrop-blur-xl transition-all duration-300 ease-out ${
        open ? 'translate-x-0' : '-translate-x-full'
      } lg:static lg:translate-x-0 ${collapsed ? 'w-20' : 'w-72'}`}
    >
      <div className="flex items-center justify-between border-b border-slate-800 px-4 py-4">
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-brand text-white shadow-lg shadow-brand/20">
            <span className="text-lg font-semibold">S</span>
          </div>
          {!collapsed && (
            <div>
              <p className="text-sm font-semibold text-white">Sable Studio</p>
              <p className="text-xs text-slate-400">Admin navigation</p>
            </div>
          )}
        </div>

        <button
          type="button"
          onClick={onToggleCollapsed}
          className="inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-slate-800 bg-slate-900 text-slate-300 transition hover:border-slate-700 hover:bg-slate-800"
          aria-label={collapsed ? 'Expand sidebar' : 'Collapse sidebar'}
        >
          {collapsed ? <FiChevronRight className="h-5 w-5" /> : <FiChevronLeft className="h-5 w-5" />}
        </button>
      </div>

      <div className="flex-1 overflow-y-auto px-2 py-6 scrollbar-thin">
        <div className="space-y-1">
          {menuItems.map((item) => (
            <SidebarItem
              key={item.label}
              to={item.to}
              label={item.label}
              icon={item.icon}
              collapsed={collapsed}
              onClick={onCloseMobile}
            />
          ))}
        </div>
      </div>

      {!collapsed && (
        <div className="mx-4 rounded-3xl bg-slate-900 p-4 text-slate-300 shadow-inner shadow-slate-900/20">
          <p className="text-xs uppercase tracking-[0.3em] text-slate-500">Quick tip</p>
          <p className="mt-2 text-sm leading-6 text-slate-300">
            Use the sidebar to move through the app and collapse it for a more focused workspace.
          </p>
        </div>
      )}
    </aside>
  )
}

export default Sidebar
