// DashboardLayout.jsx

import React from 'react';
import { Routes, Route } from 'react-router-dom';
import routes from './../../routes/dashboard';
import DashboardNavbar from '../../components/navigation/navbar/DashboardNavbar';
import DashboardContent from './DashboardContent';
import DashboardSidebar from '../../components/navigation/sidebar/DashboardSidebar';

function DashboardLayout() {
    return (
        <div className="flex h-screen bg-gray-100">
            {/* Sidebar */}
            <DashboardSidebar />
            <div className="flex flex-col flex-1 w-full">
                {/* Navbar */}
                <DashboardNavbar/>
                {/* Content */}
                <DashboardContent>
                    <Routes>
                        {routes.map((route, i) => (
                            <Route
                                key={i}
                                path={`/${route.path}`}
                                element={<route.component />}
                            />
                        ))}
                    </Routes>
                </DashboardContent>
            </div>
        </div>
    );
}

export default DashboardLayout;
