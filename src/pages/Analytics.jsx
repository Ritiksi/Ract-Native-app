import { useState } from 'react'
import { FiBarChart2, FiArrowUp, FiArrowDown, FiTrendingUp, FiDownload, FiCalendar, FiGlobe, FiMail, FiShare2 } from 'react-icons/fi'

const metrics = [
  { label: 'Weekly Active Users', value: '14,820', change: '+12.4%', up: true, desc: 'vs. 13,180 last week' },
  { label: 'Conversion Rate', value: '4.82%', change: '+0.54%', up: true, desc: 'vs. 4.28% last week' },
  { label: 'Avg. Session Duration', value: '4m 32s', change: '-2.1%', up: false, desc: 'vs. 4m 41s last week' },
  { label: 'Bounce Rate', value: '38.4%', change: '-4.8%', up: true, desc: 'vs. 40.3% last week (lower is better)' }
]

const trafficSources = [
  { name: 'Organic Search', percentage: 48, value: '7,113', color: 'bg-brand', stroke: '#4f46e5' },
  { name: 'Direct Traffic', percentage: 27, value: '4,001', color: 'bg-purple-600', stroke: '#9333ea' },
  { name: 'Social Media', percentage: 15, value: '2,223', color: 'bg-pink-500', stroke: '#ec4899' },
  { name: 'Referrals', percentage: 10, value: '1,482', color: 'bg-emerald-500', stroke: '#10b981' }
]

function Analytics() {
  const [timeRange, setTimeRange] = useState('Last 7 Days')

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      {/* Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-3xl font-extrabold tracking-tight text-slate-900">Analytics</h1>
          <p className="mt-1 text-sm text-slate-500">Real-time performance and audience insights.</p>
        </div>
        
        <div className="flex items-center gap-3">
          <div className="relative">
            <select
              value={timeRange}
              onChange={(e) => setTimeRange(e.target.value)}
              className="appearance-none rounded-2xl border border-slate-200 bg-white px-5 py-3 pr-10 text-sm font-semibold text-slate-700 shadow-sm outline-none transition focus:border-slate-300"
            >
              <option>Last 24 Hours</option>
              <option>Last 7 Days</option>
              <option>Last 30 Days</option>
              <option>Last 12 Months</option>
            </select>
            <FiCalendar className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-500" />
          </div>
          
          <button className="inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-slate-200 bg-white text-slate-600 shadow-sm transition hover:border-slate-300 hover:bg-slate-50">
            <FiDownload className="h-5 w-5" />
          </button>
        </div>
      </div>

      {/* Metrics Row */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {metrics.map((m) => (
          <div key={m.label} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
            <p className="text-sm font-medium text-slate-500">{m.label}</p>
            <div className="mt-4 flex items-baseline justify-between">
              <span className="text-2xl font-bold tracking-tight text-slate-900">{m.value}</span>
              <span className={`inline-flex items-center gap-0.5 rounded-full px-2 py-0.5 text-xs font-semibold ${
                m.up 
                  ? 'bg-emerald-50 text-emerald-600' 
                  : 'bg-rose-50 text-rose-600'
              }`}>
                {m.up ? <FiArrowUp className="h-3 w-3" /> : <FiArrowDown className="h-3 w-3" />}
                {m.change}
              </span>
            </div>
            <p className="mt-2 text-xs text-slate-400">{m.desc}</p>
          </div>
        ))}
      </div>

      {/* Main Charts Row */}
      <div className="grid gap-8 lg:grid-cols-3">
        {/* Weekly Visitor Chart */}
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm lg:col-span-2">
          <div className="flex items-center justify-between border-b border-slate-100 pb-5">
            <div>
              <h2 className="text-lg font-bold text-slate-900">Traffic Trend</h2>
              <p className="text-xs text-slate-500">Hourly traffic and visitor trends</p>
            </div>
            <div className="flex items-center gap-4 text-xs font-medium text-slate-500">
              <span className="flex items-center gap-1.5"><span className="h-2.5 w-2.5 rounded-full bg-brand" />Visitors</span>
              <span className="flex items-center gap-1.5"><span className="h-2.5 w-2.5 rounded-full bg-indigo-200" />Sessions</span>
            </div>
          </div>

          <div className="mt-6 flex flex-col justify-end h-64 w-full">
            <div className="relative w-full flex-1">
              <svg className="absolute inset-0 h-full w-full" viewBox="0 0 500 200" preserveAspectRatio="none">
                <defs>
                  <linearGradient id="mainGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#4f46e5" stopOpacity="0.25" />
                    <stop offset="100%" stopColor="#4f46e5" stopOpacity="0.00" />
                  </linearGradient>
                </defs>
                <line x1="0" y1="50" x2="500" y2="50" stroke="#f1f5f9" strokeWidth="1" strokeDasharray="4 4" />
                <line x1="0" y1="100" x2="500" y2="100" stroke="#f1f5f9" strokeWidth="1" strokeDasharray="4 4" />
                <line x1="0" y1="150" x2="500" y2="150" stroke="#f1f5f9" strokeWidth="1" strokeDasharray="4 4" />

                {/* Session Fill */}
                <path d="M 0,200 L 0,170 C 80,150 120,110 200,120 C 280,130 320,80 400,90 C 450,100 480,70 500,60 L 500,200 Z" fill="#eef2ff" opacity="0.4" />
                {/* Session Line */}
                <path d="M 0,170 C 80,150 120,110 200,120 C 280,130 320,80 400,90 C 450,100 480,70 500,60" fill="none" stroke="#c7d2fe" strokeWidth="2.5" />

                {/* Visitor Fill */}
                <path d="M 0,200 L 0,140 C 80,100 120,60 200,80 C 280,100 320,40 400,50 C 450,60 480,20 500,10 L 500,200 Z" fill="url(#mainGrad)" />
                {/* Visitor Line */}
                <path d="M 0,140 C 80,100 120,60 200,80 C 280,100 320,40 400,50 C 450,60 480,20 500,10" fill="none" stroke="#4f46e5" strokeWidth="3" />
              </svg>
            </div>
            <div className="mt-4 flex justify-between border-t border-slate-100 pt-3 text-xs font-medium text-slate-400">
              <span>9:00 AM</span>
              <span>12:00 PM</span>
              <span>3:00 PM</span>
              <span>6:00 PM</span>
              <span>9:00 PM</span>
              <span>12:00 AM</span>
            </div>
          </div>
        </div>

        {/* Traffic Sources Donut Breakdown */}
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-5">Traffic Channels</h2>

          <div className="relative mt-6 flex justify-center">
            {/* Custom SVG Donut Chart */}
            <svg className="h-44 w-44" viewBox="0 0 100 100">
              {/* Organic Search 48% (stroke-dasharray: 48 100, stroke-dashoffset: 0) */}
              <circle
                cx="50"
                cy="50"
                r="38"
                fill="transparent"
                stroke="#4f46e5"
                strokeWidth="10"
                strokeDasharray="48 52"
                strokeDashoffset="0"
                className="transition-all duration-1000"
              />
              {/* Direct Traffic 27% (stroke-dasharray: 27 100, stroke-dashoffset: -48) */}
              <circle
                cx="50"
                cy="50"
                r="38"
                fill="transparent"
                stroke="#9333ea"
                strokeWidth="10"
                strokeDasharray="27 73"
                strokeDashoffset="-48"
                className="transition-all duration-1000"
              />
              {/* Social Media 15% (stroke-dasharray: 15 100, stroke-dashoffset: -75) */}
              <circle
                cx="50"
                cy="50"
                r="38"
                fill="transparent"
                stroke="#ec4899"
                strokeWidth="10"
                strokeDasharray="15 85"
                strokeDashoffset="-75"
                className="transition-all duration-1000"
              />
              {/* Referrals 10% (stroke-dasharray: 10 100, stroke-dashoffset: -90) */}
              <circle
                cx="50"
                cy="50"
                r="38"
                fill="transparent"
                stroke="#10b981"
                strokeWidth="10"
                strokeDasharray="10 90"
                strokeDashoffset="-90"
                className="transition-all duration-1000"
              />
              
              <circle cx="50" cy="50" r="30" fill="#ffffff" />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="text-2xl font-black text-slate-900">14.8k</span>
              <span className="text-[10px] uppercase tracking-wider font-semibold text-slate-400">Total Visits</span>
            </div>
          </div>

          <div className="mt-6 space-y-3">
            {trafficSources.map((source) => (
              <div key={source.name} className="flex items-center justify-between text-xs">
                <div className="flex items-center gap-2">
                  <span className={`h-2.5 w-2.5 rounded-full ${source.color}`} />
                  <span className="font-semibold text-slate-700">{source.name}</span>
                </div>
                <div className="flex items-center gap-2 font-bold text-slate-900">
                  <span>{source.value}</span>
                  <span className="text-slate-400 font-medium">{source.percentage}%</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Analytics Event List */}
      <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
        <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-5">Regional Performance</h2>
        <div className="mt-6 overflow-x-auto">
          <table className="w-full text-left border-collapse text-sm">
            <thead>
              <tr className="border-b border-slate-100 text-slate-400 font-medium">
                <th className="pb-3 pl-2">Region</th>
                <th className="pb-3">Traffic Share</th>
                <th className="pb-3">Conversion</th>
                <th className="pb-3 text-right pr-2">Bounce Rate</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-50">
              {[
                { name: 'North America', share: '42%', conv: '5.12%', bounce: '34.8%' },
                { name: 'Western Europe', share: '28%', conv: '4.84%', bounce: '36.2%' },
                { name: 'East Asia', share: '18%', conv: '4.10%', bounce: '42.9%' },
                { name: 'Other Regions', share: '12%', conv: '3.62%', bounce: '44.1%' }
              ].map((row, index) => (
                <tr key={index} className="text-slate-700">
                  <td className="py-4 pl-2 font-semibold text-slate-900">{row.name}</td>
                  <td className="py-4">{row.share}</td>
                  <td className="py-4">{row.conv}</td>
                  <td className="py-4 text-right pr-2 font-medium text-slate-500">{row.bounce}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default Analytics
