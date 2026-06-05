import { useState } from 'react'
import { FiBell, FiChevronDown, FiMenu, FiSearch, FiX } from 'react-icons/fi'
import { NavLink } from 'react-router-dom'

const centerLinks = [
  { label: 'Dashboard', to: '/dashboard' },
  { label: 'Projects', to: '/projects' },
  { label: 'Analytics', to: '/analytics' }
]

function Navbar({ onMobileMenu }) {
  const [searchFocused, setSearchFocused] = useState(false)
  const [searchValue, setSearchValue] = useState('')

  return (
    <header className="fixed inset-x-0 top-0 z-30">
      {/* Gradient top accent bar */}
      <div className="h-0.5 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500" />

      <div className="bg-white/90 backdrop-blur-xl border-b border-slate-200/60 shadow-[0_2px_20px_rgba(0,0,0,0.06)]">
        <div className="mx-auto flex h-16 max-w-screen-2xl items-center justify-between px-4 sm:px-6 lg:px-8 gap-4">

          {/* LEFT — logo + mobile menu */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              type="button"
              onClick={onMobileMenu}
              className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-600 shadow-sm transition hover:bg-slate-50 lg:hidden"
              aria-label="Open navigation menu"
            >
              <FiMenu className="h-4 w-4" />
            </button>

            <div className="flex items-center gap-2.5">
              <div className="relative flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 shadow-md shadow-indigo-500/25">
                <span className="text-sm font-bold text-white">S</span>
                <div className="absolute -top-0.5 -right-0.5 h-2.5 w-2.5 rounded-full bg-emerald-400 border-2 border-white" />
              </div>
              <div className="hidden sm:block">
                <p className="text-sm font-bold text-slate-900 leading-none">Sable Studio</p>
                <p className="text-[10px] text-slate-400 mt-0.5 font-medium tracking-wide uppercase">Pro workspace</p>
              </div>
            </div>
          </div>

          {/* CENTER — nav links */}
          <nav className="hidden items-center gap-1 lg:flex">
            {centerLinks.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  `relative px-4 py-2 text-sm font-medium rounded-xl transition-all duration-200 ${
                    isActive
                      ? 'text-indigo-600 bg-indigo-50'
                      : 'text-slate-500 hover:text-slate-900 hover:bg-slate-100'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {item.label}
                    {isActive && (
                      <span className="absolute bottom-1 left-1/2 -translate-x-1/2 h-0.5 w-4 rounded-full bg-indigo-500" />
                    )}
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          {/* RIGHT — search + actions */}
          <div className="flex items-center gap-2 sm:gap-3">

            {/* Search */}
            <div className={`hidden sm:flex relative items-center rounded-xl border transition-all duration-200 ${
              searchFocused
                ? 'border-indigo-400 bg-white shadow-[0_0_0_3px_rgba(99,102,241,0.12)] w-64'
                : 'border-slate-200 bg-slate-50 w-52 hover:border-slate-300'
            }`}>
              <FiSearch className={`ml-3 h-3.5 w-3.5 shrink-0 transition-colors ${searchFocused ? 'text-indigo-500' : 'text-slate-400'}`} />
              <input
                className="w-full bg-transparent px-2 py-2 text-sm text-slate-700 outline-none placeholder:text-slate-400"
                type="search"
                placeholder="Search..."
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                onFocus={() => setSearchFocused(true)}
                onBlur={() => setSearchFocused(false)}
                aria-label="Search"
              />
              {searchValue && (
                <button onClick={() => setSearchValue('')} className="mr-2 text-slate-400 hover:text-slate-600">
                  <FiX className="h-3.5 w-3.5" />
                </button>
              )}
            </div>

            {/* Notification bell */}
            <div className="relative">
              <button
                type="button"
                className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-500 shadow-sm transition hover:bg-slate-50 hover:text-slate-700"
                aria-label="Notifications"
              >
                <FiBell className="h-4 w-4" />
              </button>
              <span className="absolute -top-0.5 -right-0.5 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-[9px] font-bold text-white shadow">
                3
              </span>
            </div>

            {/* Divider */}
            <div className="hidden lg:block h-6 w-px bg-slate-200" />

            {/* User profile */}
            <button
              type="button"
              className="hidden lg:flex items-center gap-2.5 rounded-xl border border-slate-200 bg-white px-2.5 py-1.5 text-slate-700 shadow-sm transition hover:border-slate-300 hover:bg-slate-50 hover:shadow-md group"
            >
              <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-gradient-to-br from-slate-700 to-slate-900 text-white text-xs font-bold shadow-sm">
                A
              </div>
              <div className="text-left">
                <p className="text-xs font-semibold text-slate-800 leading-none">Avery Lane</p>
                <p className="text-[10px] text-slate-400 mt-0.5">Product Lead</p>
              </div>
              <FiChevronDown className="h-3.5 w-3.5 text-slate-400 transition-transform group-hover:rotate-180 duration-200" />
            </button>
          </div>

        </div>
      </div>
    </header>
  )
}

export default Navbar
