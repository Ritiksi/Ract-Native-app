import { FiBell, FiChevronDown, FiMenu, FiSearch } from 'react-icons/fi'
import { NavLink } from 'react-router-dom'

const centerLinks = [
  { label: 'Dashboard', to: '/dashboard' },
  { label: 'Projects', to: '/projects' },
  { label: 'Analytics', to: '/analytics' }
]

function Navbar({ onMobileMenu }) {
  return (
    <header className="fixed inset-x-0 top-0 z-30 border-b border-slate-200/70 bg-white/95 backdrop-blur-lg shadow-sm">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-4">
          <button
            type="button"
            onClick={onMobileMenu}
            className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-slate-200 bg-white text-slate-700 shadow-sm transition hover:border-slate-300 hover:bg-slate-50 focus:outline-none focus:ring-2 focus:ring-brand/40 lg:hidden"
            aria-label="Open navigation menu"
          >
            <FiMenu className="h-5 w-5" />
          </button>

          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-brand text-white shadow-sm shadow-brand/20">
              <span className="text-lg font-semibold">S</span>
            </div>
            <div>
              <p className="text-sm font-semibold text-slate-900">Sable Studio</p>
              <p className="text-xs text-slate-500">Navigation System</p>
            </div>
          </div>
        </div>

        <nav className="hidden items-center gap-3 lg:flex">
          {centerLinks.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `rounded-2xl px-4 py-2 text-sm font-medium transition ${
                  isActive ? 'bg-slate-900 text-white shadow-lg shadow-slate-900/10' : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex flex-1 items-center justify-end gap-4">
          <div className="relative hidden w-[340px] items-center rounded-2xl border border-slate-200 bg-slate-50 px-4 py-2 text-slate-600 shadow-sm sm:flex">
            <FiSearch className="mr-3 h-4 w-4" />
            <input
              className="w-full bg-transparent text-sm outline-none placeholder:text-slate-400"
              type="search"
              placeholder="Search projects, users, messages..."
              aria-label="Search"
            />
          </div>

          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-slate-200 bg-white text-slate-600 shadow-sm transition hover:border-slate-300 hover:bg-slate-50"
            aria-label="Notifications"
          >
            <FiBell className="h-5 w-5" />
          </button>

          <button
            type="button"
            className="hidden items-center gap-3 rounded-2xl border border-slate-200 bg-white px-3 py-2 text-slate-700 shadow-sm transition hover:border-slate-300 hover:bg-slate-50 lg:flex"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-slate-900 text-white">
              A
            </div>
            <div className="text-left">
              <p className="text-sm font-semibold">Avery Lane</p>
              <p className="text-xs text-slate-500">Product Lead</p>
            </div>
            <FiChevronDown className="h-4 w-4 text-slate-500" />
          </button>
        </div>
      </div>
    </header>
  )
}

export default Navbar
