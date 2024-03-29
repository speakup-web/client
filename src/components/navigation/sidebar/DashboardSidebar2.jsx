// DashboardSidebar.jsx
import React from 'react';
import SpeakUp from './../../assets/sidebars/speakup datar.svg';
import { sidebarNavigation } from '../../data';

function DashboardSidebar2() {
  return (
    <div className="h-full flex flex-col w-64 bg-white border-r border-gray-200 pt-3 shadow-lg">
      <div className="flex-shrink-0 items-center px-4">
        <img
          className="w-20"
          src={SpeakUp}
          alt="SpeakUp!"
        />
      </div>
      <div className="mt-5 flex-grow">
        <nav className="space-y-1 px-2 pb-4">
          {sidebarNavigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className={`group flex items-center px-2 py-4 text-sm  gap-3.5 font-medium rounded-md ${
                item.current ? 'bg-blue-200 text-[#054578]' : 'text-gray-600 hover:bg-[#054578] hover:text-white'
              }`}
            >
              <item.icon
                className={`mr-3 flex-shrink-0 h-6 w-6 ${
                  item.current ? 'text-[#054578]' : 'text-gray-400 group-hover:text-white'
                }`}
                aria-hidden="true"
              />
              {item.name}
            </a>
          ))}
        </nav>
      </div>
    </div>
  );
}

export default DashboardSidebar2;
