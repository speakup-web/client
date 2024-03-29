import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Bars3BottomLeftIcon } from '@heroicons/react/24/outline'
import SpeakUp from './../../../assets/sidebars/speakup datar.svg';
import { sidebarMenu } from "../../../data";

export default function DashboardSidebar() {
  const [open, setOpen] = useState(true);

  return (
    <section className="flex gap-6">
      <div className={`shadow-xl bg-white min-h-screen ${open ? "w-64" : "w-16"} duration-500 sidebar-text px-4 pt-2`}>
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <img src={SpeakUp} className="w-20" alt="Logo" />
          </div>
          <div className="py-3">
            <Bars3BottomLeftIcon
              className="h-6 w-6 cursor-pointer"
              size={26}
              onClick={() => setOpen(!open)}
              aria-hidden="true"
            />
          </div>
        </div>

        <div className="mt-4 flex flex-col gap-4 relative">
          {sidebarMenu.map((menu, i) => (
            <Link
              to={menu.link}
              key={i}
              className={` ${menu.margin && "mt-5"} group flex items-center text-sm  gap-3.5 font-medium p-2 hover:bg-[#054578] hover:text-white rounded-md`}
            >
              <div className={`${!open} flex items-center justify-center`}>{menu.icon}</div>
              <h2 className={`whitespace-pre ${!open && "opacity-0 translate-x-28 overflow-hidden"}`}>
                {menu.name}
              </h2>
              <h2 className={`${open && "hidden"} absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit  `}>
                {menu.name}
              </h2>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
