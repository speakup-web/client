import { ProfileMenu } from '../../profile/ProfileMenu';

export function DashboardNavbar() {
  return (
    <div className="sticky top-0 z-10 flex h-16 flex-shrink-0 bg-white shadow">
      <div className="flex flex-1 justify-between px-4">
        <div className="ml-auto flex items-center">
          <ProfileMenu />
        </div>
      </div>
    </div>
  );
}
