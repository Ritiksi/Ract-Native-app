import { Routes, Route, Navigate } from "react-router-dom";
import DashboardLayout from "./layouts/DashboardLayout";
import Dashboard from "./pages/Dashboard";
import Projects from "./pages/Projects";
import Analytics from "./pages/Analytics";
import Users from "./pages/Users";
import Messages from "./pages/Messages";
import Settings from "./pages/Settings";
import Help from "./pages/Help";
import Footer from "./Footer"

function App() {
  return (<>
    <Routes>
      <Route path="/" element={<DashboardLayout />}>
        {/* Redirect empty path to dashboard */}
        <Route index element={<Navigate to="/dashboard" replace />} />

        {/* Dashboard layout routes */}
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="projects" element={<Projects />} />
        <Route path="analytics" element={<Analytics />} />
        <Route path="users" element={<Users />} />
        <Route path="messages" element={<Messages />} />
        <Route path="settings" element={<Settings />} />
        <Route path="help" element={<Help />} />

        {/* Fallback to dashboard */}
        <Route path="*" element={<Navigate to="/dashboard" replace />} />

      </Route>

    </Routes>
    <Footer />
  </>

  );
}

export default App;