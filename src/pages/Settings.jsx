import { useState } from 'react'
import { FiUser, FiBell, FiLock, FiCreditCard, FiCheck } from 'react-icons/fi'

function Settings() {
  const [activeTab, setActiveTab] = useState('Profile')
  const [notifications, setNotifications] = useState({
    emailAlerts: true,
    desktopAlerts: false,
    weeklyDigest: true,
    teamUpdates: true
  })
  const [saveSuccess, setSaveSuccess] = useState(false)

  const handleToggle = (key) => {
    setNotifications(prev => ({
      ...prev,
      [key]: !prev[key]
    }))
  }

  const handleSave = (e) => {
    e.preventDefault()
    setSaveSuccess(true)
    setTimeout(() => setSaveSuccess(false), 3000)
  }

  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-extrabold tracking-tight text-slate-900">Settings</h1>
        <p className="mt-1 text-sm text-slate-500">Configure your personal preferences, notifications, and account options.</p>
      </div>

      <div className="flex flex-col gap-8 lg:flex-row">
        {/* Left Column: Tab list */}
        <div className="w-full lg:w-64 shrink-0 flex flex-row lg:flex-col gap-2 overflow-x-auto pb-4 lg:pb-0">
          {[
            { name: 'Profile', icon: FiUser },
            { name: 'Notifications', icon: FiBell },
            { name: 'Security', icon: FiLock },
            { name: 'Billing', icon: FiCreditCard }
          ].map((tab) => {
            const Icon = tab.icon
            return (
              <button
                key={tab.name}
                onClick={() => setActiveTab(tab.name)}
                className={`inline-flex items-center gap-3 rounded-2xl px-4 py-3 text-xs font-semibold whitespace-nowrap transition ${
                  activeTab === tab.name
                    ? 'bg-slate-900 text-white shadow-lg shadow-slate-900/10'
                    : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
                }`}
              >
                <Icon className="h-4.5 w-4.5" />
                <span>{tab.name}</span>
              </button>
            )
          })}
        </div>

        {/* Right Column: Setting form sheets */}
        <div className="flex-1 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
          {activeTab === 'Profile' && (
            <form onSubmit={handleSave} className="space-y-6">
              <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-3">Profile Details</h2>
              
              <div className="flex flex-col gap-6 sm:flex-row sm:items-center">
                <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-slate-900 text-2xl font-bold text-white shadow-inner">
                  A
                </div>
                <div className="space-y-1">
                  <h4 className="text-sm font-bold text-slate-800">Avatar Image</h4>
                  <p className="text-xs text-slate-400">JPG, PNG or SVG. Max size of 800KB.</p>
                  <div className="flex gap-2">
                    <button type="button" className="rounded-xl border border-slate-200 px-3 py-1.5 text-xs font-semibold text-slate-700 hover:bg-slate-50">Upload</button>
                    <button type="button" className="rounded-xl text-xs font-semibold text-rose-600 hover:underline">Remove</button>
                  </div>
                </div>
              </div>

              <div className="grid gap-6 sm:grid-cols-2">
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Full Name</label>
                  <input
                    type="text"
                    defaultValue="Avery Lane"
                    className="w-full rounded-2xl border border-slate-200 px-4 py-2.5 text-xs outline-none focus:border-slate-300"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Email Address</label>
                  <input
                    type="email"
                    defaultValue="avery@sablestudio.com"
                    className="w-full rounded-2xl border border-slate-200 px-4 py-2.5 text-xs outline-none focus:border-slate-300"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Bio / Description</label>
                <textarea
                  rows={4}
                  defaultValue="Product Lead and Developer based in New York. Passionate about sleek design details, routing layouts, and high-fidelity mockups."
                  className="w-full rounded-2xl border border-slate-200 px-4 py-2.5 text-xs outline-none focus:border-slate-300 resize-none"
                />
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                <span className="text-xs text-emerald-600 font-semibold flex items-center gap-1.5">
                  {saveSuccess && (
                    <>
                      <FiCheck className="h-4 w-4 bg-emerald-50 rounded-full p-0.5" />
                      <span>Changes saved successfully!</span>
                    </>
                  )}
                </span>
                <button type="submit" className="rounded-2xl bg-brand px-5 py-2.5 text-xs font-semibold text-white shadow-sm shadow-brand/10 hover:bg-brand-dark transition active:scale-95">
                  Save Settings
                </button>
              </div>
            </form>
          )}

          {activeTab === 'Notifications' && (
            <div className="space-y-6">
              <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-3">Notification Preferences</h2>
              <p className="text-xs text-slate-500">Pick how and when you want to receive alerts and notifications.</p>

              <div className="divide-y divide-slate-100">
                {[
                  { key: 'emailAlerts', title: 'Email Notifications', desc: 'Get updates on actions, tasks, and system events in your email inbox.' },
                  { key: 'desktopAlerts', title: 'Desktop Push Alerts', desc: 'Receive instant web browser slide notifications on real-time events.' },
                  { key: 'weeklyDigest', title: 'Weekly Reports', desc: 'Weekly summary mail including completed items, metrics, and visitor rates.' },
                  { key: 'teamUpdates', title: 'Team Activity updates', desc: 'Alerts when a colleague creates, deletes, or uploads assets to a project.' }
                ].map((item) => (
                  <div key={item.key} className="flex items-center justify-between py-4 first:pt-0 last:pb-0">
                    <div className="max-w-[80%] pr-4">
                      <h4 className="text-xs font-bold text-slate-800">{item.title}</h4>
                      <p className="mt-1 text-[11px] text-slate-500 leading-relaxed">{item.desc}</p>
                    </div>

                    {/* Toggle Switch */}
                    <button
                      onClick={() => handleToggle(item.key)}
                      className={`relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none ${
                        notifications[item.key] ? 'bg-brand' : 'bg-slate-200'
                      }`}
                    >
                      <span
                        className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${
                          notifications[item.key] ? 'translate-x-5' : 'translate-x-0'
                        }`}
                      />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'Security' && (
            <form onSubmit={handleSave} className="space-y-6">
              <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-3">Security & Password</h2>
              
              <div className="space-y-4 max-w-md">
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Current Password</label>
                  <input
                    type="password"
                    placeholder="••••••••••••"
                    className="w-full rounded-2xl border border-slate-200 px-4 py-2.5 text-xs outline-none focus:border-slate-300"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">New Password</label>
                  <input
                    type="password"
                    placeholder="Enter new password"
                    className="w-full rounded-2xl border border-slate-200 px-4 py-2.5 text-xs outline-none focus:border-slate-300"
                  />
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Confirm New Password</label>
                  <input
                    type="password"
                    placeholder="Repeat new password"
                    className="w-full rounded-2xl border border-slate-200 px-4 py-2.5 text-xs outline-none focus:border-slate-300"
                  />
                </div>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                <span className="text-xs text-emerald-600 font-semibold flex items-center gap-1.5">
                  {saveSuccess && (
                    <>
                      <FiCheck className="h-4 w-4 bg-emerald-50 rounded-full p-0.5" />
                      <span>Password changed successfully!</span>
                    </>
                  )}
                </span>
                <button type="submit" className="rounded-2xl bg-brand px-5 py-2.5 text-xs font-semibold text-white shadow-sm shadow-brand/10 hover:bg-brand-dark transition active:scale-95">
                  Update Password
                </button>
              </div>
            </form>
          )}

          {activeTab === 'Billing' && (
            <div className="space-y-6">
              <h2 className="text-lg font-bold text-slate-900 border-b border-slate-100 pb-3">Billing & Subscription</h2>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-between items-start rounded-3xl bg-slate-900 p-6 text-white shadow-md">
                <div>
                  <span className="inline-flex items-center rounded-xl bg-white/10 px-3 py-1 text-[10px] font-bold tracking-wider uppercase">Current Plan</span>
                  <h3 className="mt-3 text-xl font-black">Studio Team Professional</h3>
                  <p className="mt-1 text-xs text-slate-300">Renews on July 1, 2026 for $49.00 / month.</p>
                </div>
                
                <button className="rounded-2xl bg-white px-5 py-2.5 text-xs font-semibold text-slate-950 shadow-sm hover:bg-slate-100 transition active:scale-95">
                  Change Plan
                </button>
              </div>

              <div className="space-y-4">
                <h4 className="text-xs font-bold text-slate-500 uppercase tracking-wider">Payment Details</h4>
                <div className="flex items-center gap-4 rounded-2xl border border-slate-200 p-4">
                  <div className="flex h-11 w-14 items-center justify-center rounded-xl bg-slate-50 font-black text-slate-500 text-xs shadow-inner">
                    VISA
                  </div>
                  <div className="flex-1">
                    <p className="text-xs font-bold text-slate-900">Visa ending in 8841</p>
                    <p className="text-[10px] text-slate-400">Expires 08/2029 • Avery Lane</p>
                  </div>
                  <button className="text-xs font-semibold text-slate-600 hover:underline">Edit</button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Settings
