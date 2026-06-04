import { useState } from 'react'
import { Link } from 'react-router-dom'
import { 
  FiTrendingUp, 
  FiDollarSign, 
  FiUsers, 
  FiBriefcase, 
  FiCheckCircle, 
  FiPlus, 
  FiActivity, 
  FiArrowUpRight,
  FiCalendar
} from 'react-icons/fi'

const kpiData = [
  {
    title: 'Total Revenue',
    value: '$48,259.50',
    change: '+14.2%',
    trend: 'up',
    description: 'vs. last month',
    icon: FiDollarSign,
    color: 'bg-emerald-500',
    lightColor: 'bg-emerald-50 text-emerald-600',
  },
  {
    title: 'Active Projects',
    value: '24 Active',
    change: '+8.3%',
    trend: 'up',
    description: '4 completed this week',
    icon: FiBriefcase,
    color: 'bg-indigo-600',
    lightColor: 'bg-indigo-50 text-indigo-600',
  },
  {
    title: 'New Signups',
    value: '1,284 Users',
    change: '+22.4%',
    trend: 'up',
    description: 'Daily target reached',
    icon: FiUsers,
    color: 'bg-amber-500',
    lightColor: 'bg-amber-50 text-amber-600',
  },
  {
    title: 'Goal Completion',
    value: '94.2%',
    change: '+4.1%',
    trend: 'up',
    description: 'Sprint goal complete',
    icon: FiCheckCircle,
    color: 'bg-purple-600',
    lightColor: 'bg-purple-50 text-purple-600',
  }
]

const recentActivities = [
  { id: 1, type: 'project', title: 'New design system approved', user: 'Sarah Jenkins', time: '10 mins ago', initial: 'SJ', color: 'bg-blue-500' },
  { id: 2, type: 'user', title: 'Invited new developer', user: 'Alex Rivera', time: '1 hour ago', initial: 'AR', color: 'bg-indigo-500' },
  { id: 3, type: 'analytics', title: 'Monthly revenue report generated', user: 'System', time: '3 hours ago', initial: 'SY', color: 'bg-emerald-500' },
  { id: 4, type: 'project', title: 'Updated API routes documentation', user: 'Marcus Vance', time: 'Yesterday', initial: 'MV', color: 'bg-purple-500' }
]

const activeProjects = [
  { name: 'Sable Dashboard Refactor', client: 'Internal', progress: 88, status: 'On Track', color: 'bg-brand' },
  { name: 'Ovika Mobile App', client: 'Ovika Living', progress: 62, status: 'In Review', color: 'bg-purple-600' },
  { name: 'GraphQL API Middleware', client: 'Townmanor Group', progress: 41, status: 'At Risk', color: 'bg-rose-500' },
  { name: 'Brand Identity Design', client: 'Sable Studio', progress: 100, status: 'Completed', color: 'bg-emerald-500' }
]

function Dashboard() {
  const [selectedPeriod, setSelectedPeriod] = useState('This Month')

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      {/* Welcome Banner */}
      <div className="relative overflow-hidden rounded-3xl bg-slate-900 px-6 py-8 text-white shadow-xl shadow-slate-950/20 sm:px-8 sm:py-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_120%,rgba(79,70,229,0.35),transparent_60%)]" />
        <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-brand/10 blur-3xl" />
        
        <div className="relative flex flex-col justify-between gap-6 sm:flex-row sm:items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-2xl bg-white/10 px-3 py-1.5 text-xs font-semibold backdrop-blur-md">
              <FiCalendar className="h-3.5 w-3.5" />
              <span>June 4, 2026</span>
            </div>
            <h1 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl">
              Welcome back, Avery!
            </h1>
            <p className="mt-2 text-slate-300 max-w-xl text-sm sm:text-base">
              Everything is running smoothly. You have completed 4 major milestones this week. Take a look at your analytics updates.
            </p>
          </div>
          
          <div className="flex flex-wrap gap-3">
            <Link 
              to="/projects" 
              className="inline-flex items-center gap-2 rounded-2xl bg-white px-5 py-3 text-sm font-semibold text-slate-900 shadow-sm transition hover:bg-slate-50 active:scale-95"
            >
              <FiPlus className="h-4 w-4" />
              <span>New Project</span>
            </Link>
            <Link 
              to="/analytics" 
              className="inline-flex items-center gap-2 rounded-2xl bg-white/10 border border-white/10 px-5 py-3 text-sm font-semibold text-white shadow-sm backdrop-blur-md transition hover:bg-white/20 active:scale-95"
            >
              <span>View Report</span>
              <FiArrowUpRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>

      {/* KPI Cards Grid */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {kpiData.map((kpi) => {
          const Icon = kpi.icon
          return (
            <div 
              key={kpi.title} 
              className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-md"
            >
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium text-slate-500">{kpi.title}</span>
                <div className={`flex h-10 w-10 items-center justify-center rounded-2xl ${kpi.lightColor}`}>
                  <Icon className="h-5 w-5" />
                </div>
              </div>
              
              <div className="mt-4 flex items-baseline gap-2">
                <span className="text-2xl font-bold tracking-tight text-slate-950">{kpi.value}</span>
                <span className="inline-flex items-center gap-0.5 rounded-full bg-emerald-50 px-2 py-0.5 text-xs font-semibold text-emerald-600">
                  <FiTrendingUp className="h-3 w-3" />
                  {kpi.change}
                </span>
              </div>
              
              <p className="mt-1.5 text-xs text-slate-400">{kpi.description}</p>
            </div>
          )
        })}
      </div>

      {/* Analytics Preview & Main Contents Grid */}
      <div className="grid gap-8 lg:grid-cols-3">
        {/* Modern Custom Analytics Plot View */}
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm lg:col-span-2">
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-100 pb-5">
            <div>
              <h2 className="text-lg font-bold text-slate-950">Analytics Overview</h2>
              <p className="text-xs text-slate-500">Weekly performance and visitor patterns</p>
            </div>
            
            <div className="flex items-center gap-1.5 rounded-2xl bg-slate-100 p-1">
              {['This Week', 'This Month', 'This Year'].map((period) => (
                <button
                  key={period}
                  onClick={() => setSelectedPeriod(period)}
                  className={`rounded-xl px-3 py-1.5 text-xs font-medium transition ${
                    selectedPeriod === period 
                      ? 'bg-white text-slate-900 shadow-sm' 
                      : 'text-slate-600 hover:text-slate-900'
                  }`}
                >
                  {period}
                </button>
              ))}
            </div>
          </div>

          {/* SVG Custom High-Fidelity Area Chart */}
          <div className="mt-6 flex flex-col justify-end h-64 w-full">
            <div className="relative w-full flex-1">
              <svg className="absolute inset-0 h-full w-full" viewBox="0 0 500 200" preserveAspectRatio="none">
                <defs>
                  <linearGradient id="chartGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#4f46e5" stopOpacity="0.25" />
                    <stop offset="100%" stopColor="#4f46e5" stopOpacity="0.00" />
                  </linearGradient>
                </defs>
                {/* Grid Lines */}
                <line x1="0" y1="50" x2="500" y2="50" stroke="#f1f5f9" strokeWidth="1" strokeDasharray="4 4" />
                <line x1="0" y1="100" x2="500" y2="100" stroke="#f1f5f9" strokeWidth="1" strokeDasharray="4 4" />
                <line x1="0" y1="150" x2="500" y2="150" stroke="#f1f5f9" strokeWidth="1" strokeDasharray="4 4" />

                {/* Smooth Area Path */}
                <path
                  d="M 0,200 L 0,160 Q 50,110 100,130 T 200,90 T 300,70 T 400,110 T 500,40 L 500,200 Z"
                  fill="url(#chartGrad)"
                />
                {/* Smooth Line Path */}
                <path
                  d="M 0,160 Q 50,110 100,130 T 200,90 T 300,70 T 400,110 T 500,40"
                  fill="none"
                  stroke="#4f46e5"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                />

                {/* Interactive Dot & Callout Highlight */}
                <circle cx="300" cy="70" r="6" fill="#4f46e5" stroke="#ffffff" strokeWidth="2.5" className="animate-pulse" />
              </svg>
            </div>
            
            {/* Chart X Axis Labels */}
            <div className="mt-4 flex justify-between border-t border-slate-100 pt-3 text-xs font-medium text-slate-400">
              <span>Mon</span>
              <span>Tue</span>
              <span>Wed</span>
              <span>Thu</span>
              <span>Fri</span>
              <span>Sat</span>
              <span>Sun</span>
            </div>
          </div>
        </div>

        {/* Project Progress Tracker */}
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="flex items-center justify-between border-b border-slate-100 pb-5">
            <div>
              <h2 className="text-lg font-bold text-slate-950">Active Projects</h2>
              <p className="text-xs text-slate-500">Current progress and status</p>
            </div>
            <Link to="/projects" className="text-xs font-semibold text-brand hover:underline">
              View All
            </Link>
          </div>

          <div className="mt-6 space-y-6">
            {activeProjects.map((project) => (
              <div key={project.name} className="space-y-2">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-sm font-semibold text-slate-900">{project.name}</h3>
                    <p className="text-xs text-slate-400">{project.client}</p>
                  </div>
                  <span className="text-xs font-semibold text-slate-600">{project.progress}%</span>
                </div>
                
                {/* Progress bar wrapper */}
                <div className="h-2 w-full rounded-full bg-slate-100 overflow-hidden">
                  <div 
                    className={`h-full rounded-full transition-all duration-1000 ${project.color}`}
                    style={{ width: `${project.progress}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Recent Activities Section */}
      <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
        <div className="flex items-center justify-between border-b border-slate-100 pb-5">
          <div>
            <h2 className="text-lg font-bold text-slate-950">Recent Updates</h2>
            <p className="text-xs text-slate-500">Real-time system and activity logs</p>
          </div>
          <button className="flex h-9 w-9 items-center justify-center rounded-xl bg-slate-50 text-slate-600 hover:bg-slate-100">
            <FiActivity className="h-4 w-4" />
          </button>
        </div>

        <div className="mt-6 divide-y divide-slate-100">
          {recentActivities.map((act) => (
            <div key={act.id} className="flex items-center justify-between py-4 first:pt-0 last:pb-0">
              <div className="flex items-center gap-4">
                <div className={`flex h-10 w-10 items-center justify-center rounded-full text-white text-xs font-bold ${act.color}`}>
                  {act.initial}
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-slate-900">{act.title}</h4>
                  <p className="text-xs text-slate-400">Triggered by {act.user}</p>
                </div>
              </div>
              <span className="text-xs text-slate-400">{act.time}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Dashboard
