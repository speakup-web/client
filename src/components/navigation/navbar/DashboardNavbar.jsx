import React from 'react'
import ProfileMenu from '../../profile/ProfileMenu'
import { Search } from '../../forms/Search';

function DashboardNavbar() {
    return (
        <div className="sticky top-0 z-10 flex h-16 flex-shrink-0 bg-white shadow">
            <div className="flex flex-1 justify-between px-4">
                <div className="flex flex-1">
                    <form className="flex w-full md:ml-0" action="#" method="GET">
                        <Search label="Search" id="search" placeholder="Search" type="search" name="search"/>
                    </form>
                </div>
                <div className="ml-4 flex items-center md:ml-6">
                    {/* Profile dropdown */}
                    <ProfileMenu/>
                </div>
            </div>
        </div>
    );
}

export default DashboardNavbar;
