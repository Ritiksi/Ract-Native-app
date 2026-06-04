import { useState } from 'react'
import { FiPlus, FiFolder, FiCheckCircle, FiClock, FiAlertCircle, FiSearch, FiSliders } from 'react-icons/fi'

const initialProjects = [
  {
    id: 1,
    name: 'Sable Dashboard Refactor',
    description: 'Upgrading the core layout dashboard elements to Tailwind v3 and react-router-dom v6 for extreme responsiveness and speed.',
    status: 'In Progress',
    progress: 88,
    category: 'Engineering',
    team: ['AL', 'SJ', 'AR'],
    dueDate: 'June 15, 2026',
    statusColor: 'text-indigo-600 bg-indigo-50 border-indigo-200'
  },
  {
    id: 2,
    name: 'Ovika Mobile App',
    description: 'Design and initial prototyping of the mobile tenant portal for smart stays, PG, and rental solutions.',
    status: 'Review',
    progress: 62,
    category: 'Product Design',
    team: ['AL', 'MV'],
    dueDate: 'June 28, 2026',
    statusColor: 'text-purple-600 bg-purple-50 border-purple-200'
  },
  {
    id: 3,
    name: 'GraphQL API Middleware',
    description: 'Replacing REST API middleware with fully federated GraphQL queries to optimize resource loading speeds.',
    status: 'At Risk',
    progress: 41,
    category: 'Engineering',
    team: ['AR', 'SY'],
    dueDate: 'June 10, 2026',
    statusColor: 'text-rose-600 bg-rose-50 border-rose-200'
  },
  {
    id: 4,
    name: 'Brand Identity Design',
    description: 'Creation of modern color palette, typography guidelines, and digital brand patterns for Sable Studio.',
    status: 'Completed',
    progress: 100,
    category: 'Marketing',
    team: ['SJ', 'MV'],
    dueDate: 'Completed',
    statusColor: 'text-emerald-600 bg-emerald-50 border-emerald-200'
  },
  {
    id: 5,
    name: 'Automation CI/CD Pipeline',
    description: 'Moving build actions to GitHub Actions workflow with automated unit tests and Docker image staging deployments.',
    status: 'In Progress',
    progress: 75,
    category: 'DevOps',
    team: ['AR'],
    dueDate: 'July 5, 2026',
    statusColor: 'text-indigo-600 bg-indigo-50 border-indigo-200'
  },
  {
    id: 6,
    name: 'SEO & Content Campaign',
    description: 'Writing documentation pages, guides, and articles to drive organic search growth and increase brand exposure.',
    status: 'Completed',
    progress: 100,
    category: 'Marketing',
    team: ['AL', 'SJ'],
    dueDate: 'Completed',
    statusColor: 'text-emerald-600 bg-emerald-50 border-emerald-200'
  }
]

function Projects() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('All')

  const filteredProjects = initialProjects.filter(project => {
    const matchesSearch = project.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          project.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === 'All' || project.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      {/* Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-3xl font-extrabold tracking-tight text-slate-900">Projects</h1>
          <p className="mt-1 text-sm text-slate-500">Manage and track your active workflows and milestones.</p>
        </div>
        
        <button className="inline-flex items-center gap-2 rounded-2xl bg-brand px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-brand/20 transition hover:bg-brand-dark active:scale-95">
          <FiPlus className="h-4.5 w-4.5" />
          <span>New Project</span>
        </button>
      </div>

      {/* Filters and Search */}
      <div className="flex flex-col gap-4 rounded-3xl border border-slate-200 bg-white p-4 shadow-sm md:flex-row md:items-center md:justify-between">
        <div className="relative flex-1 max-w-md">
          <FiSearch className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
          <input
            type="search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search projects by name or keywords..."
            className="w-full rounded-2xl border border-slate-200 bg-slate-50 py-2.5 pl-11 pr-4 text-sm outline-none transition focus:border-slate-300 focus:bg-white"
          />
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <FiSliders className="mr-1 h-4 w-4 text-slate-400" />
          {['All', 'Engineering', 'Product Design', 'Marketing', 'DevOps'].map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`rounded-xl px-3.5 py-2 text-xs font-semibold transition ${
                selectedCategory === cat
                  ? 'bg-slate-900 text-white'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200 hover:text-slate-900'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filteredProjects.map((project) => (
          <div 
            key={project.id} 
            className="group flex flex-col justify-between rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-slate-300 hover:shadow-md"
          >
            <div>
              {/* Top Details */}
              <div className="flex items-start justify-between">
                <span className="inline-flex items-center gap-1.5 rounded-xl bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-600">
                  <FiFolder className="h-3 w-3" />
                  {project.category}
                </span>
                
                <span className={`inline-flex items-center rounded-xl border px-3 py-1 text-xs font-semibold ${project.statusColor}`}>
                  {project.status === 'Completed' && <FiCheckCircle className="mr-1 h-3 w-3" />}
                  {project.status === 'In Progress' && <FiClock className="mr-1 h-3 w-3" />}
                  {project.status === 'Review' && <FiClock className="mr-1 h-3 w-3" />}
                  {project.status === 'At Risk' && <FiAlertCircle className="mr-1 h-3 w-3" />}
                  {project.status}
                </span>
              </div>

              {/* Title & Description */}
              <h3 className="mt-4 text-lg font-bold text-slate-900 group-hover:text-brand transition-colors">
                {project.name}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-500">
                {project.description}
              </p>
            </div>

            {/* Bottom details & progress */}
            <div className="mt-6 pt-5 border-t border-slate-100 space-y-4">
              <div className="space-y-1">
                <div className="flex items-center justify-between text-xs font-medium">
                  <span className="text-slate-400">Progress</span>
                  <span className="text-slate-900">{project.progress}%</span>
                </div>
                <div className="h-1.5 w-full rounded-full bg-slate-100 overflow-hidden">
                  <div 
                    className={`h-full rounded-full bg-brand transition-all duration-500`}
                    style={{ width: `${project.progress}%` }}
                  />
                </div>
              </div>

              <div className="flex items-center justify-between">
                {/* Team Avatars */}
                <div className="flex -space-x-2">
                  {project.team.map((initial, i) => (
                    <div 
                      key={i} 
                      className="flex h-7 w-7 items-center justify-center rounded-full border-2 border-white bg-slate-800 text-[10px] font-bold text-white shadow-sm"
                      title={initial}
                    >
                      {initial}
                    </div>
                  ))}
                </div>

                <span className="text-xs font-semibold text-slate-400">
                  Due: {project.dueDate}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredProjects.length === 0 && (
        <div className="flex flex-col items-center justify-center rounded-3xl border border-dashed border-slate-300 py-16 text-center">
          <FiFolder className="h-12 w-12 text-slate-300" />
          <h3 className="mt-4 text-lg font-bold text-slate-900">No projects found</h3>
          <p className="mt-1 text-sm text-slate-500">Try adjusting your filters or search keywords.</p>
        </div>
      )}
    </div>
  )
}

export default Projects
