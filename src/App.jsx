import { Routes, Route } from 'react-router-dom'
import DashboardLayout from './layouts/DashboardLayout.jsx'
import Dashboard from './pages/Dashboard.jsx'

const pageRoutes = [
  { path: 'dashboard', section: 'Dashboard' },
  { path: 'users', section: 'Users' },
  { path: 'analytics', section: 'Analytics' },
  { path: 'messages', section: 'Messages' },
  { path: 'projects', section: 'Projects' },
  { path: 'settings', section: 'Settings' },
  { path: 'help', section: 'Help' },
  { path: 'logout', section: 'Logout' }
]

function App() {
  return (
    <Routes>
      <Route path="/" element={<DashboardLayout />}>
        <Route index element={<Dashboard section="Dashboard" />} />
        {pageRoutes.map((route) => (
          <Route
            key={route.path}
            path={route.path}
            element={<Dashboard section={route.section} />}
          />
        ))}
      </Route>
    </Routes>
  )
}

export default App
