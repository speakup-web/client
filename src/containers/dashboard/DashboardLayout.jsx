import { useContext } from 'react';
import { Outlet } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';
import { DashboardNavbar } from '../../components/navigation/navbar/DashboardNavbar';
import { DashboardSidebar } from '../../components/navigation/sidebar/DashboardSidebar';
import { SatgasDashboardSidebar } from '../../components/navigation/sidebar/SatgasDashboardSidebar';

export function DashboardLayout() {
  const { auth } = useContext(AuthContext);

  return (
    <div className="flex h-full bg-gray-100">
      {auth?.user.role === 'admin' ? (
        <DashboardSidebar />
      ) : (
        <SatgasDashboardSidebar />
      )}

      <div className="flex flex-col w-full">
        <DashboardNavbar />

        <main className="sticky flex max-w-screen-2xl">
          <div className="py-6">
            <div className="mx-auto px-4 sm:px-6 md:px-8">
              <div className="py-4">
                <Outlet />
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
