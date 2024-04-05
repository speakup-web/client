import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import routes from './../../routes';
import DashboardNavbar from '../../components/navigation/navbar/DashboardNavbar';
import DashboardContent from './DashboardContent';
import DashboardSidebar from '../../components/navigation/sidebar/DashboardSidebar';
import SatgasDashboardSidebar from '../../components/navigation/sidebar/SatgasDashboardSidebar';

function DashboardLayout({ accessToken }) {
  const dashboardRoutes = routes.find(route => route.path === '/dashboard').routes;

  // Check if accessToken is available before rendering the layout
  if (!accessToken) {
    return <Navigate to="/login" />;
  }

  return (
    <div className="flex h-full bg-gray-100">
      {/* Sidebar */}
      <Routes>
        {dashboardRoutes.map((subRoute, i) => (
          <Route
            key={i}
            path={`/${subRoute.path}`}
            element={
              subRoute.path.startsWith('/admin') ? (
                <DashboardSidebar />
              ) : (
                <SatgasDashboardSidebar />
              )
            }
          />
        ))}
      </Routes>

      {/* Content with full width */}
      <div className="flex flex-col w-full">
        {/* Navbar */}
        <DashboardNavbar />

        {/* Content */}
        <DashboardContent>
          <Routes>
            {dashboardRoutes.map((route, i) => (
              <Route key={i} path={`/${route.path}`} element={<route.component />} />
            ))}
          </Routes>
        </DashboardContent>
      </div>
    </div>
  );
}

export default DashboardLayout;
