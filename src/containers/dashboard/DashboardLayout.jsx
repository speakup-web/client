import DashboardNavbar from '../../components/navigation/navbar/DashboardNavbar';
import PropTypes from 'prop-types';

export default function DashboardLayout({ children }) {
  return (
    <div className="flex h-full bg-gray-100">
      {children[0]}

      <div className="flex flex-col w-full">
        <DashboardNavbar />

        <main className="sticky flex max-w-screen-2xl">
          <div className="py-6">
            <div className="mx-auto px-4 sm:px-6 md:px-8">
              <div className="py-4">{children[1]}</div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

DashboardLayout.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element),
};
