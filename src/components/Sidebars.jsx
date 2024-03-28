import React, { useState } from "react";
import { TbMailDown } from "react-icons/tb";
import { FiSettings } from "react-icons/fi";
import { LuClipboardList } from "react-icons/lu";
import { TbLayoutSidebarRightExpand } from "react-icons/tb";
import { LuUsers2 } from "react-icons/lu";
import { AiOutlineHome } from "react-icons/ai";
import { Link } from "react-router-dom";
import Logo2 from './../assets/sidebars/speakup datar.svg';


export function Sidebars() {
  const menus = [
    { name: "Home", link: "/", icon: AiOutlineHome },
    { name: "Mail", link: "/", icon: TbMailDown },
    { name: "Checklist", link: "/", icon: LuClipboardList },
    { name: "Users", link: "/", icon: LuUsers2},
    { name: "Settings", link: "/", icon: FiSettings },
  ];
  const [open, setOpen] = useState(true);
  return (
    <section className="flex gap-6">
      <div
        className={`shadow-sm bg-[#9e9e9e] min-h-screen ${
          open ? "w-72" : "w-16"
        } duration-500 text-white px-4`}
      >
        <div className="py-3 flex justify-end">
          <TbLayoutSidebarRightExpand
            size={26}
            className="cursor-pointer"
            onClick={() => setOpen(!open)}
          />
        </div>
        <div className="mt-4 flex flex-col gap-4 relative">
          {menus?.map((menu, i) => (
            <Link
              to={menu?.link}
              key={i}
              className={` ${
                menu?.margin && "mt-5"
              } group flex items-center text-sm  gap-3.5 font-medium p-2 hover:bg-[#054578] rounded-md`}
            >
              <div>{React.createElement(menu?.icon, { size: "20" })}</div>
              <h2
                style={{
                  transitionDelay: `${i + 3}00ms`,
                }}
                className={`whitespace-pre duration-500 ${
                  !open && "opacity-0 translate-x-28 overflow-hidden"
                }`}
              >
                {menu?.name}
              </h2>
              <h2
                className={`${
                  open && "hidden"
                } absolute left-48 bg-white font-semibold whitespace-pre text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit  `}
              >
                {menu?.name}
              </h2>
            </Link>
          ))}
        </div>
      </div>
      <div className="">
        <img
          className="h-16 mb-4"
          src={Logo2}
          alt="SpeakUp!"
        />
       </div>
    </section>
  );
};

export default Sidebars;