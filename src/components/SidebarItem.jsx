import { NavLink } from 'react-router-dom'

function SidebarItem({ to, icon: Icon, label, collapsed, onClick }) {
  return (
    <NavLink
      to={to}
      end={to === '/dashboard'}
      onClick={onClick}
      className={({ isActive }) =>
        `group flex items-center gap-4 rounded-3xl px-4 py-3 text-sm font-medium transition ${
          isActive
            ? 'bg-brand text-white shadow-lg shadow-brand/20'
            : 'text-slate-300 hover:bg-slate-900/80 hover:text-white'
        } ${collapsed ? 'justify-center px-3' : ''}`
      }
      title={label}
    >
      <span className="grid h-10 w-10 place-items-center rounded-2xl bg-slate-900/80 text-xl text-slate-200 transition group-hover:bg-brand/90">
        <Icon className="h-5 w-5" />
      </span>
      {!collapsed && <span>{label}</span>}
    </NavLink>
  )
}

export default SidebarItem
