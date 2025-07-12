import { Routes, Route } from 'react-router-dom';
import DashboardLayout from '@/layout/DashboardLayout';
import Dashboard from '@/pages/Dashboard';
import Users from '@/pages/Users';
import Settings from '@/pages/Settings';

const AppRoutes = () => (
  <Routes>
    <Route element={<DashboardLayout />}>
      <Route path="/" element={<Dashboard />} />
      <Route path="users" element={<Users />} />
      <Route path="/settings" element={<Settings />} />
    </Route>
  </Routes>
);

export default AppRoutes;
