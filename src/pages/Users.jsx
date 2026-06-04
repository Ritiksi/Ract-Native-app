import { useState } from 'react'
import { FiUserPlus, FiSearch, FiSliders, FiEdit2, FiTrash2, FiMail, FiShield, FiMoreVertical } from 'react-icons/fi'

const initialUsers = [
  { id: 1, name: 'Avery Lane', email: 'avery@sablestudio.com', role: 'Product Lead', status: 'Active', team: 'Design', initial: 'AL', color: 'bg-indigo-600' },
  { id: 2, name: 'Sarah Jenkins', email: 'sarah.j@sablestudio.com', role: 'Senior Designer', status: 'Active', team: 'Design', initial: 'SJ', color: 'bg-blue-500' },
  { id: 3, name: 'Alex Rivera', email: 'alex.r@sablestudio.com', role: 'Full Stack Engineer', status: 'Active', team: 'Engineering', initial: 'AR', color: 'bg-violet-500' },
  { id: 4, name: 'Marcus Vance', email: 'marcus.v@sablestudio.com', role: 'Marketing Manager', status: 'Offline', team: 'Marketing', initial: 'MV', color: 'bg-amber-500' },
  { id: 5, name: 'Dianne Russell', email: 'dianne.r@sablestudio.com', role: 'DevOps Engineer', status: 'Active', team: 'Engineering', initial: 'DR', color: 'bg-emerald-500' },
  { id: 6, name: 'Kristin Watson', email: 'kristin.w@sablestudio.com', role: 'Content Strategist', status: 'Offline', team: 'Marketing', initial: 'KW', color: 'bg-pink-500' },
  { id: 7, name: 'Cody Fisher', email: 'cody.f@sablestudio.com', role: 'QA Engineer', status: 'Suspended', team: 'Engineering', initial: 'CF', color: 'bg-rose-500' }
]

function Users() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedRole, setSelectedRole] = useState('All')

  const filteredUsers = initialUsers.filter(user => {
    const matchesSearch = user.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          user.email.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesRole = selectedRole === 'All' || user.team === selectedRole
    return matchesSearch && matchesRole
  })

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      {/* Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-3xl font-extrabold tracking-tight text-slate-900">Users</h1>
          <p className="mt-1 text-sm text-slate-500">Add, edit, and manage team members and permissions.</p>
        </div>
        
        <button className="inline-flex items-center gap-2 rounded-2xl bg-brand px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-brand/20 transition hover:bg-brand-dark active:scale-95">
          <FiUserPlus className="h-4.5 w-4.5" />
          <span>Invite Member</span>
        </button>
      </div>

      {/* Search & Filter Toolbar */}
      <div className="flex flex-col gap-4 rounded-3xl border border-slate-200 bg-white p-4 shadow-sm md:flex-row md:items-center md:justify-between">
        <div className="relative flex-1 max-w-md">
          <FiSearch className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
          <input
            type="search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search by name or email address..."
            className="w-full rounded-2xl border border-slate-200 bg-slate-50 py-2.5 pl-11 pr-4 text-sm outline-none transition focus:border-slate-300 focus:bg-white"
          />
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <FiSliders className="mr-1 h-4 w-4 text-slate-400" />
          {['All', 'Design', 'Engineering', 'Marketing'].map((teamName) => (
            <button
              key={teamName}
              onClick={() => setSelectedRole(teamName)}
              className={`rounded-xl px-3.5 py-2 text-xs font-semibold transition ${
                selectedRole === teamName
                  ? 'bg-slate-900 text-white'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900'
              }`}
            >
              {teamName}
            </button>
          ))}
        </div>
      </div>

      {/* Users Table / Grid */}
      <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse text-sm">
            <thead>
              <tr className="border-b border-slate-100 bg-slate-50/50 text-slate-500 font-semibold">
                <th className="py-4 pl-6">Member</th>
                <th className="py-4">Role & Team</th>
                <th className="py-4">Status</th>
                <th className="py-4">Email</th>
                <th className="py-4 pr-6 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {filteredUsers.map((user) => (
                <tr key={user.id} className="hover:bg-slate-50/55 transition-colors">
                  {/* Member Name */}
                  <td className="py-4 pl-6">
                    <div className="flex items-center gap-4">
                      <div className={`flex h-10 w-10 items-center justify-center rounded-full text-white text-xs font-bold ${user.color}`}>
                        {user.initial}
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-900">{user.name}</h4>
                        <p className="text-xs text-slate-400">ID: #{user.id}092</p>
                      </div>
                    </div>
                  </td>
                  
                  {/* Role */}
                  <td className="py-4">
                    <div>
                      <p className="font-semibold text-slate-800">{user.role}</p>
                      <p className="text-xs text-slate-400">{user.team}</p>
                    </div>
                  </td>

                  {/* Status Badge */}
                  <td className="py-4">
                    <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold ${
                      user.status === 'Active' ? 'bg-emerald-50 text-emerald-700' :
                      user.status === 'Offline' ? 'bg-slate-100 text-slate-600' :
                      'bg-rose-50 text-rose-700'
                    }`}>
                      <span className={`mr-1.5 h-1.5 w-1.5 rounded-full ${
                        user.status === 'Active' ? 'bg-emerald-500' :
                        user.status === 'Offline' ? 'bg-slate-400' :
                        'bg-rose-500'
                      }`} />
                      {user.status}
                    </span>
                  </td>

                  {/* Email */}
                  <td className="py-4 text-slate-500">
                    <div className="flex items-center gap-1.5">
                      <FiMail className="h-3.5 w-3.5" />
                      <span>{user.email}</span>
                    </div>
                  </td>

                  {/* Action Buttons */}
                  <td className="py-4 pr-6 text-right">
                    <div className="inline-flex items-center gap-2">
                      <button className="flex h-8 w-8 items-center justify-center rounded-lg text-slate-400 hover:bg-slate-100 hover:text-slate-700 transition">
                        <FiEdit2 className="h-4 w-4" />
                      </button>
                      <button className="flex h-8 w-8 items-center justify-center rounded-lg text-slate-400 hover:bg-slate-100 hover:text-rose-600 transition">
                        <FiTrash2 className="h-4 w-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {filteredUsers.length === 0 && (
          <div className="flex flex-col items-center justify-center py-16 text-center">
            <FiShield className="h-12 w-12 text-slate-300" />
            <h3 className="mt-4 text-lg font-bold text-slate-900">No users found</h3>
            <p className="mt-1 text-sm text-slate-500">Try revising your search details.</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default Users
